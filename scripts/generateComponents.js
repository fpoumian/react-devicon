const fs = require('fs-extra')
const path = require('path')
const paths = require('../config/paths')
const judex = require('judex-component-generator')
const chalk = require('chalk')
const pascalCase = require('pascal-case')
const log = console.log

const { getDeviconManifestFile } = require('./devicon')
const SVGO = require('svgo')

// global
let deviconPath
let indexFileWriteStream
const svgo = new SVGO()
const componentsIndex = path.resolve(paths.components, 'index.js')

// Create a Judex generator
const generator = judex({
  paths: {
    components: paths.components,
    templates: path.resolve(__dirname, 'templates'),
  },
  rules: {
    'component-name-root-dir': false,
  },
})

function generateIconComponent(iconName, iconVersion) {
  const componentName = `${pascalCase(iconName)}${pascalCase(iconVersion)}`
  const svgFileName = `${iconName}-${iconVersion}.svg`
  const svgFilePath = path.resolve(deviconPath, 'icons', iconName, svgFileName)

  log(chalk.blue(`Generating Component ${componentName}...`))

  return new Promise((resolve, reject) => {
    generator
      .generate(`${iconName}/${iconVersion}/${componentName}`, {
        index: true,
        tests: true,
      })
      .on('done', componentPaths => {
        fs
          .readFile(svgFilePath, 'utf8')
          .then(svg => optimizeSVG(svg))
          .then(results => {
            return fs.writeFile(
              path.resolve(componentPaths.root, `${componentName}.svg`),
              results.data
            )
          })
          .then(() => {
            return writeExportToStream(
              indexFileWriteStream,
              componentName,
              iconName,
              iconVersion
            )
          })
          .then(() =>
            log(
              chalk.green(
                `Component ${componentName} written to ${componentPaths.root}`
              )
            )
          )
          .then(() => fs.readdir(componentPaths.root))
          .then(dirContents => resolve(dirContents))
      })
      .on('error', error => {
        log(
          chalk.red(
            `There was an error trying to generate component ${componentName}`
          )
        )
        reject(error)
      })
  })
}

function writeExportToStream(
  writeStream,
  componentName,
  iconName,
  iconVersion
) {
  const templateString = `export ${componentName} from './${iconName}/${iconVersion}'\n`
  writeStream.write(templateString)
}

function generateComponents(iconsArray) {
  const promisesArray = iconsArray.map(iconObj => {
    return iconObj.versions.svg.map(version => {
      return generateIconComponent(iconObj.name, version)
    })
  })
  return Promise.all(promisesArray.map(promiseSet => Promise.all(promiseSet)))
}

function optimizeSVG(data) {
  return new Promise((resolve, reject) => {
    svgo.optimize(data, (result, err) => {
      if (err) {
        reject(err)
      }
      resolve(result)
    })
  })
}

// latest devicon package was (for some reason?) released in a separate NPM package named devicon-2.2
const deviconPackageName = 'devicon-2.2'
// Check if devicon package is installed locally
// If not, abort the script
try {
  deviconPath = path.dirname(require.resolve(deviconPackageName))
} catch (e) {
  log(
    chalk.red(`Package "${deviconPackageName}" was not found in node_modules`)
  )

  log(
    chalk.red(
      `Please install using "yarn add ${deviconPackageName} --dev" or "npm install ${deviconPackageName} --save-dev"`
    )
  )

  process.exit(e.code)
}

// Start generating components
log(chalk.blue(`Starting component generations script...`))

fs
  .outputFile(componentsIndex, '')
  .then(() => {
    return (indexFileWriteStream = fs.createWriteStream(componentsIndex, {
      flags: 'a',
    }))
  })
  .then(() => getDeviconManifestFile())
  .then(fs.readJson)
  .then(generateComponents)
  .then(dirContents => {
    return log(
      chalk.yellow(
        `Generated ${dirContents.length} components into ${paths.components}`
      )
    )
  })
  .then(() => {
    return indexFileWriteStream.end()
  })
  .then(() => {
    log(chalk.yellow(`Components index file written to ${componentsIndex}`))
  })
  .catch(err => {
    process.exit(err.code)
  })

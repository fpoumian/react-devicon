const fs = require('fs-extra')
const path = require('path')
const paths = require('../config/paths')
const judex = require('judex-component-generator')
const pascalCase = require('pascal-case')
const { getDeviconPath, getDeviconManifestFile } = require('./devicon')
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
  plugins: ['tests-file'],
})

function generateIconComponent(iconName, iconVersion) {
  const componentName = `${pascalCase(iconName)}${pascalCase(iconVersion)}`
  const svgFileName = `${iconName}-${iconVersion}.svg`
  const svgFilePath = path.resolve(deviconPath, 'icons', iconName, svgFileName)

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
          .then(() => fs.readdir(componentPaths.root))
          .then(dirContents => resolve(dirContents))
      })
      .on('error', error => {
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

// Check if devicon package is installed locally
// If not, abort the script
try {
  deviconPath = getDeviconPath()
} catch (e) {
  console.error('Package "devicon" was not found in node_modules.')
  console.error(
    'Please install using "yarn add devicon" or "npm install devicon --save"'
  )
  process.exit(e.code)
}

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
  .then(() => {
    return indexFileWriteStream.end()
  })
  .catch(err => {
    process.exit(err.code)
  })
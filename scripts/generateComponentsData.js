
var fs = require('fs')
const fse = require('fs-extra')
var path = require('path')
var chalk = require('chalk')
var parse = require('react-docgen').parse
var chokidar = require('chokidar')
var pascalCase = require('pascal-case')
const { getDeviconManifestFile } = require('./devicon')
// const minifyJSON = require('node-json-minify')

var paths = {
  examples: path.join(__dirname, '../src', 'docs', 'examples'),
  components: path.join(__dirname, '../src', 'components'),
  output: path.join(__dirname, '../data', 'componentData.json')
}

const enableWatchMode = process.argv.slice(2) == '--watch'
if (enableWatchMode) {
  // Regenerate component metadata when components or examples change.
  chokidar
    .watch([paths.examples, paths.components])
    .on('change', function(event, path) {
      generate(paths)
    })
} else {
  // Generate component metadata
  generate(paths)
}

function generate(paths, compoonentsHomePath) {
  var errors = []
  getComponents(paths.components).then(components => {
    const componentData = components.map(function(component) {
      try {
        console.log(component)
        return getComponentData(paths, component)
      } catch (error) {
        errors.push(
          'An error occurred while attempting to generate metadata for ' +
          component +
          '. ' +
          error
        )
      }
    })
    const result =
      // 'module.exports = /* eslint-disable */ ' +
      JSON.stringify(errors.length ? errors : componentData)
    return fse.writeFile(paths.output, result).catch(console.error)
  })
}

function getComponentData(paths, component) {
  var content = readFile(component.path)
  var info = parse(content)
  return {
    name: component.name,
    description: info.description,
    props: info.props,
    code: content,
    examples: getExampleData(paths.examples, component.name)
  }
}

function getExampleData(examplesPath, componentName) {
  var examples = getExampleFiles(examplesPath, componentName)
  return examples.map(function(file) {
    var filePath = path.join(examplesPath, componentName, file)
    var content = readFile(filePath)
    var info = parse(content)
    return {
      // By convention, component name should match the filename.
      // So remove the .js extension to get the component name.
      name: file.slice(0, -3),
      description: info.description,
      code: content
    }
  })
}

function getExampleFiles(examplesPath, componentName) {
  var exampleFiles = []
  try {
    exampleFiles = getFiles(path.join(examplesPath, componentName))
  } catch (error) {
    console.log(chalk.red(`No examples found for ${componentName}.`))
  }
  return exampleFiles
}

function getComponents(componentsHomePath) {
  return getDeviconManifestFile()
    .then(fse.readJson)
    .then(iconObjects =>
      reduceIconObjectsToComponents(iconObjects, componentsHomePath)
    )
}

function reduceIconObjectsToComponents(iconObjects, componentsHomePath) {
  return iconObjects.reduce((acc, iconObj) => {
    const components = mapSvgVersionsToComponent(
      iconObj.versions.svg,
      iconObj.name,
      componentsHomePath
    )
    return [...acc, ...components]
  }, [])
}

function mapSvgVersionsToComponent(svgVersions, iconName, componentsHomePath) {
  return svgVersions.map(version => ({
    name: `${pascalCase(iconName)}${pascalCase(version)}`,
    path: path.resolve(
      componentsHomePath,
      iconName,
      version,
      `${pascalCase(iconName)}${pascalCase(version)}.js`
    )
  }))
}

function _getComponents(componentsHome) {
  return getDirectories(componentsHome).reduce((acc, iconName) => {
    const iconDirPath = path.resolve(componentsHome, iconName)
    const versions = getDirectories(iconDirPath)
    const components = versions.map(version => {
      const filename = `${pascalCase(iconName)}${pascalCase(version)}.js`
      return {
        name: filename.replace('.js', ''),
        path: path.resolve(componentsHome, iconName, version, filename)
      }
    })
    return [...acc, ...components]
  }, [])
}

function getDirectories(filepath) {
  return fs.readdirSync(filepath).filter(function(file) {
    return fs.statSync(path.join(filepath, file)).isDirectory()
  })
}

function getFiles(filepath) {
  return fs.readdirSync(filepath).filter(function(file) {
    return fs.statSync(path.join(filepath, file)).isFile()
  })
}

function writeFile(filepath, content) {
  fs.writeFile(filepath, content, function(err) {
    err
      ? console.log(chalk.red(err))
      : console.log(chalk.green('Component data saved.'))
  })
}

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8')
}

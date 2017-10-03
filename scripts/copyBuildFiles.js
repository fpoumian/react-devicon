const path = require('path')
const paths = require('../config/paths')
const fse = require('fs-extra')
const copy = require('recursive-copy')

const files = ['README.md', 'LICENSE']

const options = {
  overwrite: true,
  filter: ['**/*.svg', '!**/*.js'],
}

copy(paths.components, paths.appBuild, options)
  .then(() => {
    return Promise.all(files.map(file => copyFile(file))).then(() =>
      createPackageFile()
    )
  })
  .catch(console.error)

function copyFile(file) {
  const libPath = resolveBuildPath(file)
  return new Promise(resolve => {
    fse.copy(file, libPath, err => {
      if (err) throw err
      resolve()
    })
  }).then(() => console.log(`Copied ${file} to ${libPath}`))
}

function resolveBuildPath(file) {
  return path.resolve(__dirname, '../lib/', path.basename(file))
}

function createPackageFile() {
  return new Promise(resolve => {
    fse.readFile(
      path.resolve(__dirname, '../package.json'),
      'utf8',
      (err, data) => {
        if (err) {
          throw err
        }

        resolve(data)
      }
    )
  })
    .then(data => JSON.parse(data))
    .then(packageData => {
      const {
        name,
        author,
        version,
        description,
        keywords,
        repository,
        license,
        bugs,
        homepage,
        peerDependencies,
        dependencies,
      } = packageData

      const minimalPackage = {
        name,
        author,
        version,
        description,
        main: './index.js',
        keywords,
        repository,
        license,
        bugs,
        homepage,
        peerDependencies,
        dependencies,
        scripts: {
          prepublish:
            'cd .. && npm run lint && ./node_modules/.bin/jest --env=jsdom && npm run build',
        },
      }

      return new Promise(resolve => {
        const libPath = path.resolve(__dirname, '../lib/package.json')
        const data = JSON.stringify(minimalPackage, null, 2)
        fse.writeFile(libPath, data, err => {
          if (err) throw err
          console.log(`Created package.json in ${libPath}`)
          resolve()
        })
      })
    })
}

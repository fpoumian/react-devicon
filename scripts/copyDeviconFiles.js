const { getDeviconManifestFile } = require('./devicon.js')
const paths = require('../config/paths')
const fse = require('fs-extra')
const path = require('path')

getDeviconManifestFile()
  .then(filePath => {
    return fse.copy(filePath, path.resolve(paths.data, 'devicon.json'))
  })
  .then(() => console.log(`Copied devicon manifest file to ${paths.data}`))
  .catch(console.error)

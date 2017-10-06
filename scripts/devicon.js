const path = require('path')
const fs = require('fs-extra')

module.exports.getDeviconManifestFile = function() {
  return new Promise((resolve, reject) => {
    const iconsManifestFile = path.resolve(
      path.dirname(require.resolve('devicon-2.2')),
      'devicon.json'
    )
    // Check if devicon.json file exists
    fs.pathExists(iconsManifestFile).then(exists => {
      // if devicon.json file does not exist abort the script
      if (!exists) {
        reject(new Error('devicon.json file not found on devicon package'))
      }
      resolve(iconsManifestFile)
    })
  })
}

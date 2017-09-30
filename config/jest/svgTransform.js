"use strict"
const escapeQuotes = require("escape-quotes")

const path = require("path")

// This is a custom Jest transformer for SVG Files.

module.exports = {
  process(src, filename) {
    // Escaping single quotes is necessary to make the tests of some components work properly.
    const XML = escapeQuotes(src)
    return `module.exports = '${XML}'`
  }
}

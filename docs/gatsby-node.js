const path = require("path")

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    resolve: {
      alias: {
        "react-devicon": path.resolve(__dirname, "../src/components")
      }
    }
  })

  return config
}

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const iconPageTemplate = path.resolve(`src/templates/IconPage.js`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
     {
  allFile {
    edges {
      node {
        childrenDeviconJson {
          name
          versions {
            svg
          }
        }
      }
    }
  }
}


    `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create pages for each icon name
        result.data.allFile.edges.forEach(({ node }) => {
          node.childrenDeviconJson.forEach(({ name, versions }) => {
            createPage({
              path: name,
              component: iconPageTemplate,
              context: {
                name,
                versions: versions.svg
              }
            })
          })
        })
      })
    )
  })
}

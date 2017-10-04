const path = require('path')

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    resolve: {
      alias: {
        'react-devicon': path.resolve(__dirname, '../src/components'),
      },
    },
  })

  if (
    ['develop', 'develop-html', 'build-html', 'build-javascript'].includes(
      stage
    )
  ) {
    // Remove svg from url-loader config
    config.loader(`url-loader`, {
      test: /\.(jpg|jpeg|png|gif|mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
      loader: `url`,
      query: {
        limit: 10000,
        name: `static/[name].[hash:8].[ext]`,
      },
    })
    config.loader('raw-loader', {
      test: /\.svg$/,
      loader: 'raw-loader',
    })
  }
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
                versions: versions.svg,
              },
            })
          })
        })
        // eslint-disable-next-line no-useless-return
        return
      })
    )
  })
}

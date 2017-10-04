const autoprefixer = require('autoprefixer')

module.exports = {
  pathPrefix: '/react-devicon',
  siteMetadata: {
    title: `React Devicon`,
    siteUrl: 'https://fpoumian.github.io/react-devicon/',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: 'custom-sass-loader',
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ['last 2 versions'],
          }),
        ],
      },
    },
  ],
}

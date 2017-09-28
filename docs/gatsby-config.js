const autoprefixer = require("autoprefixer")

module.exports = {
  siteMetadata: {
    title: `React Devicon`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: "custom-sass-loader",
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ["last 2 versions"]
          })
        ]
      }
    }
  ]
}

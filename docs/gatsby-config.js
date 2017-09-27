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
    }
  ]
}

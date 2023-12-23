module.exports = {
  siteMetadata: {
    title: `Bithell.com`,
    description: `Welcome to the Bithell Family's Official Website`,
    author: `@jbithell`,
    siteUrl: `https://bithell.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bithell Family Website`,
        short_name: `Bithell.com`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-square.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
  ],
}

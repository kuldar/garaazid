module.exports = {
  siteMetadata: {
    title: `Garaazid`,
    description: `Garaazide ost müük ja vahetus`,
    url: `https://garaazid.ee`
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `./src/pages/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `garages`,
        path: `./src/garages/`
      }
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: { include: /svgs/ }
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [{ family: `Archivo`, variants: [`400`, `700`] }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `garaazid`,
        short_name: `garaazid`,
        start_url: `/`,
        background_color: `#F2C94C`,
        theme_color: `#F2C94C`,
        display: `minimal-ui`,
        icon: `static/icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ]
}

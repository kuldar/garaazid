const fileSystemAPI = require('./src/cms/file-system-api-plugin/fs-express-api')

module.exports = {
  plugins: [
    // `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`, // default: undefined
        stylesPath: `${__dirname}/src/cms/cms.css`, // default: undefined
        enableIdentityWidget: true, // default: true
        publicPath: 'admin',
        htmlTitle: 'Admin',
        manualInit: true
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./static/img/`
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
    }
  ],
  developMiddleware: fileSystemAPI
}

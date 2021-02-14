const path = require(`path`)

module.exports = {
  siteMetadata: {
    author: `@inkoop`,
    description: `E-commerce Storefront Gatsby`,
    siteUrl: `https://inkoop.io`,
    social: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "",
    },
    title: `Storefront`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-force-trailing-slashes`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ecommerce-storefront`,
        short_name: `storefront`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.resolve(`./src`),
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `saleor`,
        typeName: `Saleor`,
        url: `https://ik-saleor.herokuapp.com/graphql/`,
        refetchInterval: 60,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://inkoop.io",
        sitemap: "https://inkoop.io/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
      },
    },
  ],
}

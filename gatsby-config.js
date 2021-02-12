module.exports = {
  siteMetadata: {
    author: `@inkoop`,
    description: `E-commerce Storefront Gatsby`,
    siteUrl: `https://inkoop.io`,
    title: `Storefront`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `atollon-design-studio`,
        short_name: `atollon`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
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
        trackingId: "UA-107595465-1",
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

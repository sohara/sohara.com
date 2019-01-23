module.exports = {
  siteMetadata: {
    title: `sean o’hara`,
    description: `Web Developer`,
    author: `@sohara`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: { commonmark: false }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sean O'Hara`,
        short_name: `sohara.com`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`
        // icon: `src/images/tailwind-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-postcss`
    // {
    //   resolve: "gatsby-plugin-purgecss",
    //   options: {
    //     tailwind: true,
    //     purgeOnly: ["src/css/style.css"] // Purge only tailwind
    //   }
    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};

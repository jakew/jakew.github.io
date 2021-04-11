module.exports = {
  siteMetadata: {
    title: `Jake W.`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@jakewca`,
    socialLinks: [
      {icon: "github", url: "https://github.com/jakew"},
      {icon: "medium", url: "https://medium.com/@jakewca"},
      {icon: "twitter", url: "https://twitter.com/jakewca"},
    ],
    headerLinks: [
      {text: "About Me", url: "/about"},
      // {text: "Published", to: "/published"},
      // {text: "Projects", to: "/projects"},
      // {text: "Presentations", to: "/presentations"},
    ],
    heroButtons: [
      {to: "/words", content: "Words"},
      {to: "/code", content: "Code"},
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src/images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src/pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-remark`,
    { 
      resolve: 'gatsby-plugin-sharp', 
      options: { failOnError: false } 
    },
    {
      resolve: 'gatsby-transformer-yaml-full',
      options: {
        plugins: [
          {
            resolve: 'gatsby-yaml-full-markdown'
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./content/assets/favicon.png",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-163405017-1",
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `y0n0zawa.github.io`,
    author: `y0n0zawa`,
    description: ``,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/y0n0zawa`,
      },
      {
        name: `github`,
        url: `https://github.com/y0n0zawa`,
      },
    ],
  },
}

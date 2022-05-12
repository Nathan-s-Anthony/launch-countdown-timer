module.exports = {
  siteMetadata: {
    title: `Launch Countdown Timer`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./src/images/favicon-32x32.png",
      },
    },
  ],
};

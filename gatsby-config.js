require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Estilografico Eibar`,
    siteUrl: `https://www.estilografico.com`
  },
  plugins: [
  //   {
  //   resolve: 'gatsby-source-contentful',
  //   options: {
  //     "accessToken": process.env.GATSBY_CONTENFUL_ID,
  //     "spaceId": process.env.GATSBY_CONTENFUL_ID
  //   }
  // },
   "gatsby-plugin-sass", 
   "gatsby-plugin-react-helmet", 
   "gatsby-plugin-sitemap", 
   "gatsby-plugin-force-trailing-slashes",
   {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /icons/,
      },
    },
  },
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": process.env.GATSBY_GOOGLE_ID
    }
  },
  {
    resolve: `gatsby-plugin-layout`,
    options: {
      component: require.resolve(`./src/components/layout/index.js`),
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }]
};
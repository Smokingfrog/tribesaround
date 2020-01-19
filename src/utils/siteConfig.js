module.exports = {
  siteTitle: 'Tribes Around',
  siteTitleAlt: 'Tribes Around The World', // This allows an alternative site title for SEO schema.
  publisher: 'TribesAround', // Organization name used for SEO schema
  siteDescription:
    'Know more about Tribes around the world.',
  siteUrl: 'https://tribesaround.com', // Site domain. Do not include a trailing slash! If you wish to use a path prefix you can read more about that here: https://www.gatsbyjs.org/docs/path-prefix/
  canonical: 'tribesaround.com',
  postsPerHomePage: 7, // Number of posts shown on the 1st page of of the index.js template (home page)
  postsPerPage: 6, // Number of posts shown on paginated pages
  author: 'Tribal Chef', // Author for RSS author segment and SEO schema
  authorUrl: 'https://tribesaround.com/about/', // URL used for author and publisher schema, can be a social profile or other personal site
  userTwitter: '@tribesaround', // Change for Twitter Cards
  userFacebook: 'tribesaround', // Change for Facebook
  userInstagram: 'tribesaround', // Change for Instagram Cards
  userSoundcloud: 'tribesaround', // Change for Soundcloud Cards
  userYoutube: 'tribesaround', // Change for Youtube Cards
  shortTitle: 'Tribes Around App', // Used for App manifest e.g. Mobile Home Screen
  shareImage: '/logos/share.jpg', // Open Graph Default Share Image. 1200x1200 is recommended
  shareImageWidth: 900, // Change to the width of your default share image
  shareImageHeight: 600, // Change to the height of your default share image
  siteLogo: '/logos/logo-512.png', // Logo used for SEO, RSS, and App manifest
  backgroundColor: '#e9e9e9', // Used for Offline Manifest
  themeColor: '#121212', // Used for Offline Manifest
  copyright: 'Copyright © 2020 Tribes Around', // Copyright string for the RSS feed
  analyticsId: 'UA-156264832-1',
  contentful: {
    "development": {
      "host": "preview.contentful.com",
      "spaceId": "dnjxgfivke25",
      "accessToken": "HWHAAzS_qdQPIrB_hchF3oieDqqCtpTEe1JVbNpcYIk"
    },
    "production": {
      "spaceId": "dnjxgfivke25",
      "accessToken": "4z_xIWPh5Krp1ujH1lg3TkjHyKwBGjTB972kFYYs_NQ"
    }
  }
}

module.exports = {
  siteMetadata: {
    title: 'Boilerplate Gatsby',
    description: 'Project Description',
    author: 'Victor Nery',
    siteUrl: 'https://victornery.me/'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Boilerplate Gatsby',
        short_name: 'Boilerplate',
        start_url: '/',
        background_color: '#3d81ff',
        theme_color: '#fff',
        display: 'standalone',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@components': 'src/components',
          '@utils': 'src/utils',
          '@images': 'src/images',
          '@sections': 'src/components/Sections',
        }
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://victornery.me'
      }
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-CODE',
        includeInDevelopment: true,
        defaultDataLayer: {
          platform: 'web'
        }
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato:300,400,700,900']
        }
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline'
  ],
}

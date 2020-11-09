// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/*.scss'),
      ],
    })
}

module.exports = {
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  },
  siteName: 'Patryk Jelonek - Blog',
  siteDescription: 'Blog o programowaniu!',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Category', // Required
        baseDir: './content/categories', // Where .md files are located
        pathPrefix: '/categories', // Add route prefix. Optional
        template: './src/templates/Category.vue' // Optional
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Tag', // Required
        baseDir: './content/tags', // Where .md files are located
        pathPrefix: '/tags', // Add route prefix. Optional
        template: './src/templates/Tag.vue' // Optional
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './content/blog/**/*.md',
        typeName: 'BlogPost',
        remark: {
          plugins: [
            [
              '@gridsome/remark-prismjs', 
              {
              showLineNumbers: true,
              }
            ]
          ]
        },
        refs: {
          tags: 'Tag',
          categories: 'Category',
        }
      }
    },
  ],
  transformers: {
    remark: {
      // global remark options
    }
  },
  templates: {
    BlogPost: '/blog/:title',
  },
  
}

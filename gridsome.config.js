// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Patryk Jelonek - Blog',
  siteDescription: 'Blog o programowaniu!',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './content/blog/**/*.md',
        typeName: 'BlogPost',
        remark: {
          plugins: [
            ['@gridsome/remark-prismjs', {
              showLineNumbers: true,
            }]
          ]
        }
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
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Documentation', // Required
        baseDir: './content/docs', // Where .md files are located
        pathPrefix: '/docs', // Add route prefix. Optional
        template: './src/templates/Documentation.vue', // Optional
        refs: {
          tags: 'Tag'
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
    BlogPost: '/blog/:title'
  }
}

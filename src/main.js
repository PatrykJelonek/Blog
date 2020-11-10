// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
//import 'prismjs/themes/prism-theme.css'
import 'prismjs/themes/prism-dark.css'
import VueDisqus from 'vue-disqus'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&display=swap'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'
  })
  Vue.use(VueDisqus);
}

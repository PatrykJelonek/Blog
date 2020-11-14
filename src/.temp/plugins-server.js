import plugin_gridsome_vue_remark_5 from "C:\\Users\\Patryk\\Desktop\\Blog\\node_modules\\@gridsome\\vue-remark\\gridsome.client.js"
import plugin_gridsome_vue_remark_6 from "C:\\Users\\Patryk\\Desktop\\Blog\\node_modules\\@gridsome\\vue-remark\\gridsome.client.js"
import plugin_gridsome_plugin_netlify_cms_8 from "C:\\Users\\Patryk\\Desktop\\Blog\\node_modules\\gridsome-plugin-netlify-cms\\gridsome.client.js"

export default [
  {
    run: plugin_gridsome_vue_remark_5,
    options: {}
  },
  {
    run: plugin_gridsome_vue_remark_6,
    options: {}
  },
  {
    run: plugin_gridsome_plugin_netlify_cms_8,
    options: {"publicPath":"/admin","htmlTitle":"Content Editor","configPath":"src/admin/config.yml","modulePath":"C:\\Users\\Patryk\\Desktop\\Blog\\node_modules\\gridsome-plugin-netlify-cms/lib/cms.js","htmlPath":"C:\\Users\\Patryk\\Desktop\\Blog\\node_modules\\gridsome-plugin-netlify-cms/templates/index.html","injectScript":true,"enableIdentityWidget":true,"debug":false}
  }
]

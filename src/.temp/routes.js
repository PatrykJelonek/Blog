const c1 = () => import(/* webpackChunkName: "page--src-templates-tag-vue" */ "C:\\Users\\Patryk\\Desktop\\Blog\\src\\templates\\Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src-templates-category-vue" */ "C:\\Users\\Patryk\\Desktop\\Blog\\src\\templates\\Category.vue")
const c3 = () => import(/* webpackChunkName: "page--src-templates-blog-post-vue" */ "C:\\Users\\Patryk\\Desktop\\Blog\\src\\templates\\BlogPost.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-test-vue" */ "C:\\Users\\Patryk\\Desktop\\Blog\\src\\pages\\Test.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\Users\\Patryk\\Desktop\\Blog\\src\\pages\\About.vue")
const c6 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\Patryk\\Desktop\\Blog\\node_modules\\gridsome\\app\\pages\\404.vue")
const c7 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\Patryk\\Desktop\\Blog\\src\\pages\\Index.vue")

export default [
  {
    path: "/tags/vue/",
    component: c1,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--content-tags-vue-md" */ "C:\\Users\\Patryk\\Desktop\\Blog\\content\\tags\\vue.md")
    }
  },
  {
    path: "/tags/vuex/",
    component: c1,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--content-tags-vuex-md" */ "C:\\Users\\Patryk\\Desktop\\Blog\\content\\tags\\vuex.md")
    }
  },
  {
    path: "/tags/php/",
    component: c1,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--content-tags-php-md" */ "C:\\Users\\Patryk\\Desktop\\Blog\\content\\tags\\php.md")
    }
  },
  {
    path: "/tags/node-js/",
    component: c1,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--content-tags-node-js-md" */ "C:\\Users\\Patryk\\Desktop\\Blog\\content\\tags\\node-js.md")
    }
  },
  {
    path: "/tags/my-sql/",
    component: c1,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--content-tags-my-sql-md" */ "C:\\Users\\Patryk\\Desktop\\Blog\\content\\tags\\my-sql.md")
    }
  },
  {
    path: "/tags/laravel/",
    component: c1,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--content-tags-laravel-md" */ "C:\\Users\\Patryk\\Desktop\\Blog\\content\\tags\\laravel.md")
    }
  },
  {
    path: "/tags/javascript/",
    component: c1,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--content-tags-javascript-md" */ "C:\\Users\\Patryk\\Desktop\\Blog\\content\\tags\\javascript.md")
    }
  },
  {
    path: "/categories/frontend/",
    component: c2,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--content-categories-frontend-md" */ "C:\\Users\\Patryk\\Desktop\\Blog\\content\\categories\\frontend.md")
    }
  },
  {
    path: "/categories/database/",
    component: c2,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--content-categories-database-md" */ "C:\\Users\\Patryk\\Desktop\\Blog\\content\\categories\\database.md")
    }
  },
  {
    path: "/categories/backend/",
    component: c2,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--content-categories-backend-md" */ "C:\\Users\\Patryk\\Desktop\\Blog\\content\\categories\\backend.md")
    }
  },
  {
    path: "/blog/:title/",
    component: c3
  },
  {
    path: "/test/",
    component: c4
  },
  {
    path: "/about/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]

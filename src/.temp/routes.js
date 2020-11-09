const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/patryk/Desktop/Patryk/blog/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--documentation-vue" */ "/Users/patryk/Desktop/Patryk/blog/src/templates/Documentation.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--blog-post-vue" */ "/Users/patryk/Desktop/Patryk/blog/src/templates/BlogPost.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--test-vue" */ "/Users/patryk/Desktop/Patryk/blog/src/pages/Test.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/patryk/Desktop/Patryk/blog/src/pages/About.vue")
const c6 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/patryk/Desktop/Patryk/blog/node_modules/gridsome/app/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/patryk/Desktop/Patryk/blog/src/pages/Index.vue")

export default [
  {
    path: "/tags/vue/",
    component: c1,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--content--tags--vue-md" */ "/Users/patryk/Desktop/Patryk/blog/content/tags/vue.md")
    }
  },
  {
    path: "/tags/node-js/",
    component: c1,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--content--tags--node-js-md" */ "/Users/patryk/Desktop/Patryk/blog/content/tags/node-js.md")
    }
  },
  {
    path: "/docs/trzeci-doc/",
    component: c2,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--content--docs--trzeci-doc-md" */ "/Users/patryk/Desktop/Patryk/blog/content/docs/trzeci-doc.md")
    }
  },
  {
    path: "/docs/doc-pierwszy/",
    component: c2,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--content--docs--doc-pierwszy-md" */ "/Users/patryk/Desktop/Patryk/blog/content/docs/doc-pierwszy.md")
    }
  },
  {
    path: "/docs/drugi-doc/",
    component: c2,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--content--docs--drugi-doc-md" */ "/Users/patryk/Desktop/Patryk/blog/content/docs/drugi-doc.md")
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

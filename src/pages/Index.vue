<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>
    <div class="posts">
        <article class="post" v-for="post in $page.allBlogPost.edges" :key="post.node.id">
            <g-link :to="post.node.path">
              <h2>{{ post.node.title }}</h2>
            </g-link>
            <p>
              Created: {{ post.node.date }}
            </p>
        </article>
        <Pager :info="$page.allBlogPost.pageInfo"/>
    </div>

  </Layout>
</template>

<page-query>
  query ($page: Int) {
    allBlogPost(perPage: 2, page: $page, sortBy: "date") @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          path
          date(format: "YYYY")
        }
      }
    }
  }
</page-query>

<script>
import { Pager } from 'gridsome'

export default {
  components: {
    Pager
  },
  metaInfo: {
    title: 'xd'
  }
}
</script>

<style lang="scss">
.home-links a {
  margin-right: 1rem;
}
</style>

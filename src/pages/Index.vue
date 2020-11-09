<template>
  <Layout>
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

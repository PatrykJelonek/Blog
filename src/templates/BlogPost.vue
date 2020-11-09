<template>
  <Layout>
    <article>
      <h1>{{ $page.blogPost.title }}</h1>
      <div v-html="$page.blogPost.content"></div>
      <h5>Tags:</h5>
      <span class="tag" v-for="tag in $page.blogPost.tags" :key="tag.id">
        <g-link :to="tag.path">{{ tag.name }}</g-link>
      </span>

      <h5>Categories:</h5>
      <span class="tag" v-for="category in $page.blogPost.categories" :key="category.id">
        <g-link :to="category.path">{{ category.name }}</g-link>
      </span>
    </article>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  blogPost(id: $id) {
    title
    content
    tags {
      id
      name
      path
    }
    categories {
      id
      name
      path
    }
  }
}
</page-query>

<script>
  export default {
    name: "BlogPost",
    metaInfo: {
      title: "Abc"
    }
  }
</script>

<style scoped>
  
</style>
<template>
  <Layout>
    <article>
      <h1>{{ $page.blogPost.title }}</h1>
      <div v-html="$page.blogPost.content"></div>
    </article>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  blogPost(id: $id) {
    title
    content
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
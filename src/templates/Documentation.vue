<template>
  <Layout>
    <article>
      <h1>{{ $page.documentation.title }}</h1>
      <span class="tag" v-for="tag in $page.documentation.tags" :key="tag.id">
        <g-link :to="tag.path">{{ tag.name }}</g-link>
      </span>
      <VueRemarkContent />
    </article>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
documentation(id: $id) {
title
content
tags {
  id
  name
path
}
}
}
</page-query>

<script>
export default {
  name: "Documentation",
}
</script>

<style lang="scss" scoped>
  .tag {
    margin-right: 10px;
    padding: 5px;
    border-radius: 3px;
    border: 1px solid firebrick;
    font-size: 10px;
    font-weight: bold;

    a {
      color: black;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
</style>
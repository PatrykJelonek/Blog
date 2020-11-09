<template>
  <div>
    <h2>{{ name }}</h2>
    <ul>
      <li v-for="post in $page.tag.belongsTo.edges" :key="post.node.id">
        <g-link :to="post.node.path">{{ post.node.title }}</g-link>
      </li>
    </ul>
  </div>
</template>

<page-query>
  query Tag($id: ID!){
    tag(id: $id) {
      id
      name
      belongsTo {
        edges {
          node {
            ... on BlogPost {
              id
              title
              path
            }
          }
        }
      }
    }
  }
</page-query>

<script>
export default {
name: "Tag"
}
</script>

<style scoped>

</style>
<template>
  <div>
    <h2>{{ name }}</h2>
    <ul>
      <li v-for="post in $page.category.belongsTo.edges" :key="post.node.id">
        <g-link :to="post.node.path">{{ post.node.title }}</g-link>
      </li>
    </ul>
  </div>
</template>

<page-query>
    query Category($id: ID!){
        category(id: $id) {
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
name: "Category"
}
</script>

<style scoped>

</style>
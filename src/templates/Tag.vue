<template>
  <div>
    <h2>{{ name }}</h2>
    <ul>
      <li v-for="doc in $page.tag.belongsTo.edges" :key="doc.node.id">
        <g-link :to="doc.node.path">{{ doc.node.title }}</g-link>
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
... on Documentation {
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
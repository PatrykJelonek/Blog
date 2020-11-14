<template>
  <Layout>
    <div class="blog_container">
      <section class="posts">
        <header class="posts__header">
          <h2 class="posts__title">Blog</h2>
        </header>
        <g-link class="post__link" :to="post.node.path" v-for="post in $page.posts.edges" :key="post.node.id">
          <article class="post" >
            <header class="post__header">
                <g-image v-if="post.node.thumbnail_src && post.node.thumbnail_alt" 
                        class="post__thumbnail"
                        :src="post.node.thumbnail_src" 
                        :alt="post.node.thumbnail_alt"/>
                <span class="post__tag" v-for="tag in post.node.tags" :key="tag.id">
                  <g-link :to="tag.path">{{ tag.name }}</g-link>
                </span>
                <h3 class="post__title">{{ post.node.title }}</h3>
            </header>
            <p class="post__description">
              {{ post.node.description }}
            </p>
          </article>
        </g-link>
        <Pager class="pager" :info="$page.posts.pageInfo" linkClass="pager__link"/>
      </section>
      

      <aside class="aside">
        <section class="aside__section">
          <header class="aside__header">
            <h2 class="aside__title">Tagi</h2>
          </header>
          <div class="aside__tags">
            <span class="aside__tag" v-for="tag in $page.tags.edges" :key="tag.node.id">
              <g-link :to="tag.node.path">{{ tag.node.name }}</g-link>
            </span>
          </div>
        </section>

        <section class="aside__section">
          <header class="aside__header">
            <h2 class="aside__title">Kategorie</h2>
          </header>
          <div class="aside__categories">
            <span class="aside__category" v-for="category in $page.categories.edges" :key="category.node.id">
              <g-link :to="category.node.path">{{ category.node.name }}</g-link>
            </span>
          </div>
        </section>
      </aside>
    </div>
    
  </Layout>
</template>

<page-query>
  query ($page: Int) {
    posts: allBlogPost(perPage: 6, page: $page, sortBy: "date") @paginate {
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
          description
          thumbnail_src
          thumbnail_alt
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
    }

    tags: allTag {
      edges {
        node {
          id
          name
          path
        }
      }
    }

    categories: allCategory {
      edges {
        node {
          id
          name
          path
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
    title: 'Strona Główna'
  }
}
</script>

<style lang="scss" scoped>
.home-links a {
  margin-right: 1rem;
}

.blog_container {
  display: flex;
  justify-content: space-around;

  @media (max-width: $display-medium) {
    flex-direction: column;
  }
}

.aside {
  max-width: 250px;
  width: 100%;

  @media (max-width: $display-medium) {
    display: flex;
    align-items: flex-start;
    border-radius: $border-radius;
    max-width: 100%;
    background: $tag-bg;
    flex-direction: column;
  }
  
  &__section {
    margin-bottom: 25px;
    background: $tag-bg;
    border-radius: $border-radius;
    padding: 0px 10px 10px 10px;

    @media (max-width: $display-medium) {
      background: none;
      margin-bottom: 10px;
    }

    @media (max-width: $display-small) {
       margin-bottom: 10px;
    }
  }

   &__title {
    font-size: 35px;
    color: $headers-color;

    @media (max-width: $display-medium) {
      font-size: 1.5rem;
      margin: 10px 0;
    }

    @media (max-width: $display-small) {
      margin: 5px 0;
      font-size: 1.5rem;
    }
  }

  &__tags, &__categories {
    display: flex;
    flex-wrap: wrap;
    text-transform: uppercase;
    font-weight: bold;
  }

  &__tag, &__category {
    &::before {
      content: "*";
      color: #5a67d8;
      margin-right: 2px;
    }

    a {
      font-size: 14px;
      font-family: 'IBM Plex Mono', monospace;
      text-decoration: none;
      color: $secondary-headers-color;
      margin-right: 10px;
      transition: color .3s;

      &:hover {
        color: $primary-link;
      }
    }
  }
}

.posts
{
  margin-right: 20px;

  &__title {
    font-size: 2.5rem;
    color: $headers-color;
  }

  @media (max-width: $display-medium) {
    margin: 0;
  }
}

.post {
  margin-bottom: 35px;
  position: relative;
  border-radius: $border-radius;
  transition: background-color .3s;
  padding: 10px;

  &:hover {
    background-color: $tag-bg;
  }

  &:hover &__title {
      text-decoration: underline $primary-link;
    }

  &__tag {
    border-radius: $border-radius;
    margin-right: 10px;

    a {
      text-transform: uppercase;
      text-decoration: none;
      color: $secondary-headers-color;
      font-size: 12px;
      transition: color .3s;
      font-family: 'IBM Plex Mono', monospace;
    }

    a:hover {
      color: $headers-color;
    }

    &::before {
      content: "#";
      color: $primary-link;
      font-size: 11px;
      font-weight: bold;
      margin-right: 1px;
    }
  }

  &__thumbnail {
    height: 200px;
    width: 100%;
    border-radius: 3px;
    object-fit: cover;
  }

  &__link {
    text-decoration: none;
    color: none;
  }

  &__title {
    color: $headers-color;
    font-size: 30px;
    margin-bottom: 10px;
    margin-top: 0;
    transition: color .3s;
    line-height: 1.3em;
  }

  &__description {
    color: $secondary-headers-color;
  }
}

.pager {
  display: flex;
  align-items: center;

  &__link {
    padding: 5px;
    text-decoration: none;
    font-size: 15px;
    color: $headers-color;
  }
}
</style>

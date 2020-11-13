<template>
  <Layout>
    <div class="blog_container">
      <section class="posts">
        <header class="posts__header">
          <h2 class="posts__title">Blog</h2>
        </header>
        <article class="post" v-for="post in $page.posts.edges" :key="post.node.id">
          <header class="post__header">
              <span class="post__tag" v-for="tag in post.node.tags" :key="tag.id">
                <g-link :to="tag.path">{{ tag.name }}</g-link>
              </span>
            <g-link class="post__link" :to="post.node.path">
              <h3 class="post__title">{{ post.node.title }}</h3>
            </g-link>
          </header>
          <p class="post__description">
            {{ post.node.description }}
          </p>
        </article>
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
}

.aside {
  max-width: 250px;
  width: 100%;

  &__section {
    margin-bottom: 25px;
    background: $tag-bg;
    border-radius: 4px;
    padding: 0px 10px 10px 10px;
  }

   &__title {
    font-size: 35px;
    color: $headers-color;
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
    font-size: 35px;
    color: $headers-color;
  }
}

.post {
  margin-bottom: 35px;
  position: relative;

  &::before {
    content: "#";
    color: $primary-link;
    opacity: 0;
    font-weight: bold;
    margin-right: 8px;
    transition: opacity .2s;
    position: absolute;
    font-size: 30px;
    left: -25px;
    top: 23px;
  }

  &:hover::before {
    opacity: 1;
  }

  &__tag {
    border-radius: 3px;
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

    &:hover {
        text-decoration: underline $primary-link;
    }
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

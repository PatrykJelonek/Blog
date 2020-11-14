<template>
  <Layout>
    <article class="article">
      <header>
        <section v-if="$page.blogPost.thumbnail_src && $page.blogPost.thumbnail_alt" 
                 class="article__thumbnail">
          <g-image :src="$page.blogPost.thumbnail_src" 
                   :alt="$page.blogPost.thumbnail_alt"
                   class="article__thumbnail__img"/>
        </section>
        <section class="article__metadata">
          <section class="article__tags">
            <span class="article__tag" v-for="tag in $page.blogPost.tags" :key="tag.id">
              <g-link :to="tag.path">{{ tag.name }}</g-link>
            </span>
          </section>
          <section class="article__categories">
            <span class="article__category" v-for="category in $page.blogPost.categories" :key="category.id">
              <g-link :to="category.path">{{ category.name }}</g-link>
            </span>
          </section>
        </section>
        <h2 class="article__title">{{ $page.blogPost.title }}</h2>
        <span class="article__date">Opublikowano: {{ $page.blogPost.date }} r.</span>
      </header>
        <section class="author">
          <div class="author__account">
            <g-image class="author__img" alt="Avatar" src="~/assets/img/me-avatar.jpg"/>
            <div class="author__info">
              <g-link class="author__fullname" to="/about/">Patryk Jelonek</g-link>
              <span class="author__position">Student</span>
            </div>
          </div>
          <div>
            <i class="fab fa-linkedin"></i>
          </div>
        </section>

      <div class="article__content" v-html="$page.blogPost.content"></div>

      <section class="article__comments">
        <h2 class="article__comments__title">Komentarze</h2>
        <Disqus shortname="patrykjelonek-blog" :identifier="$page.blogPost.title" />
      </section>
    </article>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  blogPost(id: $id) {
    title
    content
    date(format: "DD.MM.YYYY")
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
</page-query>

<script>
  export default {
    name: "BlogPost",
    metaInfo() {
      return {
        title: this.$page.blogPost.title
      }
    }
  }
</script>

<style lang="scss" scoped>
    .article {
      color: $text-color;
      margin-top: 55px;

      &__thumbnail {
        width: 100%;
        overflow: hidden;
        max-height: 300px;
        border-radius: 3px;
        margin-bottom: 65px;

        &__img {
          width: 100%;
          object-fit: cover;
        }
      }

      &__title {
        color: $headers-color;
        font-size: 55px;
        margin-bottom: 10px;
        margin-top: 0;
      }

      &__date {
        color: $secondary-headers-color;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 13px;
      }

      &__metadata {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      &__tag {
        border-radius: 3px;
        margin-right: 10px;

        a {
          text-transform: uppercase;
          text-decoration: none;
          color: $secondary-headers-color;
          font-size: 15px;
          transition: color .3s;
          font-family: 'IBM Plex Mono', monospace;
        }

        a:hover {
          color: $headers-color;
        }

        &::before {
          content: "#";
          color: $primary-link;
          font-size: 15px;
          font-weight: bold;
          margin-right: 1px;
        }
      }

      &__category {
        a {
          text-decoration: none;
          color: $headers-color;
          padding: 5px 10px;
          font-size: 12px;
          background: $tag-bg;
          font-family: 'IBM Plex Mono', monospace;
          border-radius: 4px;
          margin-left: 10px;
          transition: color .3s;
        }

        &:hover {
          a {
            color: $primary-link;
          }
        }
      }

       &__content {
         /deep/ h3:first-child {
           margin: 25px 0px 5px 0px;
         }

         /deep/ h3 {
           font-size: 25px;
           margin: 5px 0 5px 0;
           color: $headers-color;
           position: relative;
           left: -23px;
         }

         /deep/ h3::before {
           content: "#";
           color: $primary-link;
           opacity: 0;
           font-weight: bold;
           margin-right: 8px;
           transition: opacity .2s;
         }

         /deep/ h3:hover::before {
           opacity: 1;
         }

         /deep/ ul {
           list-style: none;
         }

         /deep/ ul li::before {
          content: "\2022";  
          color: $primary-link; 
          font-weight: bold;
          display: inline-block;
          width: 1em;
          margin-left: -2em;
        }
      }

      &__comments {
        margin-top: 50px;
        border-top: 2px solid $tag-bg;

        &__title {
          font-size: 35px;
          color: $headers-color;
          margin-top: 50px;
          margin-bottom: 5px;
        }
      }
    }

    .author {
      background: $tag-bg;
      border-radius: 3px;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 25px;

      &__account {
        display: flex;
        align-items: center;
      }

      &__img {
        width: 50px;
        border-radius: 50%;
        margin-right: 10px;
      }

      &__info {
        display: flex;
        flex-direction: column;
      }

      &__fullname {
        color: $headers-color;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      &__position {
        font-size: 12px;
        font-family: 'IBM Plex Mono', monospace;
        color: $secondary-headers-color;
      }
    }
</style>
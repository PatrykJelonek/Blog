<template>
  <footer class="footer">
    <div class="menu">
      <nav>
        <h2 class="menu__title">Menu</h2>
        <ul class="menu__list">
          <li class="menu__item">
            <g-link to="/" class="menu__link">Strona Główna</g-link>
          </li>
          <li class="menu__item">
            <g-link to="/about/" class="menu__link">O Mnie</g-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="menu">
      <nav>
        <h2 class="menu__title">Social Media</h2>
        <ul class="menu__list">
          <li class="menu__item">
            <g-link to="/" class="menu__link">Facebook</g-link>
          </li>
          <li class="menu__item">
            <g-link to="https://www.linkedin.com/in/patrykjelonek/" class="menu__link">LinkedIn</g-link>
          </li>
          <li class="menu__item">
            <g-link to="https://github.com/PatrykJelonek" class="menu__link">Github</g-link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style lang="scss" scoped>
  .fixed {
    position: fixed;
    bottom: 0;
  }

  .footer {
    border-radius: 3px;
    padding: 20px;
    max-width: 860px;
    box-sizing: border-box;
    width: 100%;
    background: $tag-bg;
    display: flex;
    align-items: flex-start;
    margin: 20px 0;
    flex-wrap: wrap;

    @media (max-width: $display-medium) {
    margin: 35px 0;
    }

    .menu {
      margin-right: 50px;

      &__list {
        margin: 0;
        padding: 0;
        list-style-type: none;
      }

      &__title {
        font-size: 15px;
        color: $headers-color;
        margin: 10px 0px;
      }

      &__link {
        color: $secondary-headers-color;
        font-size: 13px;
        text-decoration: none;
        transition: color .3s;

        &:hover {
          color: $primary-link;
        }
      }
    }
  }
</style>
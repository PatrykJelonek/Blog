<template>
    <nav class="nav">
      <div class="nav__container">
        <h1 class="nav__logo">
          <g-link to="/">Patryk Jelonek</g-link>
        </h1>
        <button @click="isActive = !isActive" 
                :class='!isActive ? "nav__hamburger fas fa-bars" : "nav__hamburger fas fa-times"'
        ></button>
      </div>
        <ul :class='isActive ? "nav__items nav__items--active" : "nav__items"'>
            <li class="nav__item">
                <g-link class="nav__link" to="/">Strona Główna</g-link>
            </li>
            <li class="nav__item">
                <g-link class="nav__link" to="/About">O Mnie</g-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    data() {
      return {
        isActive: false,
      }
    }
}
</script>

<style lang="scss">
  .nav {
      box-sizing: border-box;
      width: 100vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      

      @media (max-width: $hamburger-active-size) {
          flex-direction: column;

          &__container {
            width: 100%;
          }
      }

      &__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &__hamburger {
        display: none !important;
        background: none;
        border: none;
        color: $headers-color;
        font-size: 1.5rem;
        outline: none;

        &:hover {
          cursor: pointer;
        }

        @media (max-width: $hamburger-active-size) {
          display: block !important;
        }
      }

      &__logo {
        a {
          text-decoration: none;
          color: $headers-color;

          &:hover {
            text-decoration: $primary-link underline;
          }
        }
      }

      &__items {
          list-style-type: none;
          display: flex;
          justify-content: center;
          align-content: center;

          @media (max-width: $hamburger-active-size) {
              flex-direction: column;
              margin: 0;
              padding: 0;
              max-height: 0px;
              overflow: hidden;
              transition: max-height .7s;
          }

          &--active {
            max-height: 300px;
          }
      }

      &__item {
          margin-right: 10px;
          
          @media (max-width: $hamburger-active-size) {
            flex-wrap: wrap;
              flex-direction: column;
              margin: 0;
              text-align: center;
          }
      }

      &__link {
        text-decoration: none;
        color: $secondary-headers-color;
        transition: color .3s;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 14px;
        margin-left: 25px;

        &:hover {
          color: $primary-link;
        }

        @media (max-width: $hamburger-active-size) {
          margin: 0;
          padding: 10px;
          display: block;
        }
      }
    }
</style>
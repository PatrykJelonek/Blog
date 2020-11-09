<template>
    <nav class="nav">
        <h1>Patryk Jelonek</h1>
        <ul class="nav__items">
            <li class="nav__item">
                <g-link class="nav__link" to="/">Strona Główna</g-link>
                <g-link class="nav__link" to="/About">O Mnie</g-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style lang="scss">
    .nav {
        width: 100vw;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__items {
            list-style-type: none;
            display: flex;
            justify-content: center;
            align-content: center;
        }

        &__item {
            margin-right: 10px;
        }

        &__link {
            text-decoration: none;
            color: $primary-link;
        }
    }
</style>
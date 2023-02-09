<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <div class="wrapper">
            <h1>Pokemon-wiki</h1>
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/pokemon">Pokémon</RouterLink>
            </nav>
        </div>
        
    </header>
    <RouterView />
</template>

<style scoped>
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}
header .wrapper{
    place-items: center;
}
</style>
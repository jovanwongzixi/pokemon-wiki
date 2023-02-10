<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    RouterLink,
    RouterView
  },
  data(){
        return{
            text: '',
            // pokemon: '',
        }
    },
    methods: {
        searchPokemon(){
            this.$emit('submit', this.text)
            if(this.text !== ''){
                const id = this.text.toLowerCase()
                //this.$router.push({ name:'pokemon', params: {id: this.pokemon}})
                this.text = ''
                this.$router.push({ path: `/pokemon/${id}`, props: {id: id}})
            }
            else {
                const alertText = 'Empty input detected!'
                this.$emit('alert', alertText)
                alert(alertText)
            }
        },
    },
    // mounted() {
    //     this.pokemon = sessionStorage.getItem("pokemon") || 'bulbasaur'
    // },
    computed: {
      generatePokemon(){
        return sessionStorage.getItem("pokemon") || 'bulbasaur'
    }
  }
}
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Pokémon-wiki</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink :to="{ path: `/pokemon/${generatePokemon}`, props: {id: generatePokemon}}">Pokémon</RouterLink>
        <a href="https://github.com/jovanwongzixi/pokemon-wiki">Github Repo</a>
      </nav>
      <form @submit.prevent="searchPokemon" >
          <input type="text" v-model="text" placeholder="Name or Id"/>
          <button>Search</button>
      </form>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

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

form {
    margin-top: 5px;
    margin-bottom: 5px;
    position: relative;
}
input {
    padding: 0.9rem;
    border: 0;
    margin-right: 10px;
    width: 80%;
    border-radius: 10px;
    /* box-shadow: 0 0 15px 4px rgba(0,0,0,0.06); */
    background: #f2f2f2;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

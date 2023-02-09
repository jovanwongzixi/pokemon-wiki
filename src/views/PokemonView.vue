<script>
import PokemonCard from '../components/PokemonCard.vue'

export default {
    components: {
        PokemonCard
    },
    data(){
        return{
            text: '',
            pokemon: '',
        }
    },
    methods: {
        searchPokemon(){
            this.$emit('submit', this.text)
            if(this.text !== ''){
                this.pokemon = this.text.toLowerCase()
                sessionStorage.setItem("pokemon", this.text.toLowerCase())
                this.text = ''
            }
        },
    },
    mounted() {
        this.pokemon = sessionStorage.getItem("pokemon") || 'bulbasaur'
    },
}
</script>

<template>
    <main>
        <PokemonCard :pokemon="pokemon"/>
        <form @submit.prevent="searchPokemon" >
            <input v-model="text" placeholder="Name or Id"/>
            <button>Search</button>
        </form>
    </main>
</template>
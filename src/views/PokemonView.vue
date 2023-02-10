<script>
// import PokemonCard from '../components/PokemonCard.vue'

export default {
    // components: {
    //     PokemonCard
    // },
    data(){
        return{
        }
    },
    props: {
        id: {
            type: String,
            required: true,
        }
    },
    computed: {
        passDownPokemon(){
            console.log(this.id)
            return this.id
        }
    }
}
</script>

<script setup>
import PokemonCard from '../components/PokemonCard.vue'
</script>

<template>
    <main>
        <PokemonCard :pokemon="id"/>
    </main>
</template>

<style scoped>
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
</style>
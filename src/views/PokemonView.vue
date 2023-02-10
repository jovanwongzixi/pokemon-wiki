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
                if(this.text.charAt(0) === '0') this.text = parseInt(this.text).toString()
                this.pokemon = this.text.toLowerCase()
                this.text = ''
            }
            else {
                const alertText = 'Empty input detected!'
                this.$emit('alert', alertText)
                alert(alertText)
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
        <form @submit.prevent="searchPokemon" >
            <svg aria-hidden="true" viewBox="0 0 24 24">
                <path
                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                />
            </svg>
            <input
                aria-label="Search for pokemon" 
                type="search" 
                v-model="text" 
                placeholder="Name or Id"
                autocomplete="off"
            />
            <!-- <button>Search</button> -->
        </form>
        <PokemonCard :pokemon="pokemon"/>
    </main>
</template>

<style scoped>
form {
    --focus-blue: rgb(69, 159, 189);
    --dark-gray: rgb(90, 90, 90);
    --box-height: 48px;
    --side-margin: calc(var(--box-height) / 4);
    --icon-size: calc(var(--box-height) *3/4);
    --icon-vertical-margin: calc((var(--box-height) - var(--icon-size)) / 2); 
    position: relative;
    margin-top: 10px;
    margin-bottom: 5px;
    height: var(--box-height);
    max-width: 100%;
}
input {
    appearance: none;
    height: 100%;
    width: 100%;
    color: var(--dark-gray);
    font-size: 1rem;
    margin-right: 5px;
    border-radius: calc(var(--box-height)/2);
    border: 2px solid var(--dark-gray);
    padding-left: calc(var(--side-margin) + var(--icon-size) + 4px);
    padding-right: var(--side-margin);
    background-color: transparent;
}
input::-webkit-search-decoration {
    -webkit-appearance: none;
}
input::placeholder {
    color: rgb(148, 148, 148);
    opacity: 1;
}
input:focus {
    border-color: var(--focus-blue);
    box-shadow: 0px 0px 5px var(--focus-blue);
    outline: 1px solid transparent;
}
input::-webkit-search-cancel-button {
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='rgb(148, 148, 148)' %3E%3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z' /%3E%3C/svg%3E%0A");
  height: calc(var(--box-height) / 2);
  width: calc(var(--box-height) / 2);
}
form>svg{
    fill: var(--dark-gray);
    height: var(--icon-size);
    width: var(--icon-size);
    position: absolute;
    left: var(--side-margin);
    top: var(--icon-vertical-margin);
    bottom: var(--icon-vertical-margin);
}
/* button{
    border-radius: 10px;
    border: 0;
    padding: 0.8rem;
}
button:hover {
    border: 2px solid black;
    padding: calc(0.8rem - 2px)
} */
</style>
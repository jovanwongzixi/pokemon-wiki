<script>
import api from '../api/axiosConfig'
export default {
    props: {
        pokemon: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            pokemonData: {},
            pokemonSpeciesData: {},
        };
    },
    watch: {
        pokemon(value) {
            this.getPokemon(value);
        }
    },
    methods: {
        async getPokemon(value) {
            try {
                const resPokemon = await api.get(`pokemon/${value}`);
                const resPokemonSpecies = await api.get(`pokemon-species/${value}`);
                this.pokemonData = resPokemon.data;
                this.pokemonSpeciesData = resPokemonSpecies.data;
                console.log(resPokemon.data.name);
            }
            catch (error) {
                console.log(error);
            }
        },
    },
    computed: {
        getType(){
            if(this.pokemonData.types === undefined) return ''
            return this.pokemonData.types[0].type.name
        }
    }
}
</script>

<script setup>
import Name from './Name.vue'
import Images from './Images.vue'
import BaseStats from './BaseStats.vue'
import Types from './Types.vue'
import Abilities from './Abilities.vue'
import CaptureRate from './CaptureRate.vue'
import Habitat from './Habitat.vue'
import LevellingRate from './LevellingRate.vue'
import HeightWeight from './HeightWeight.vue'
</script>

<template>
    <div
        id="pokemon-card" 
        :class="getType"
    >
        <Name
            :names="pokemonSpeciesData.names"
            :category="pokemonSpeciesData.genera"
            :id="pokemonData.id"
        />
        <Images 
            v-bind="pokemonData.sprites"
        />
        <BaseStats 
            :stats="pokemonData.stats"
        />
        <Types 
            :types="pokemonData.types"
        />
        <CaptureRate
            :rate="pokemonSpeciesData.capture_rate" 
        /> 
        <Abilities
            :abilities="pokemonData.abilities"
        />
        <Habitat
            :habitat="pokemonSpeciesData.habitat"
        />
        <HeightWeight
                :height="pokemonData.height"
                :weight="pokemonData.weight"
        />
        <LevellingRate 
            :rate="pokemonSpeciesData.growth_rate"
        />
    </div>
</template>

<style scoped>
#pokemon-card {
    display: grid;
    grid-template-columns: auto auto;
    border-radius: 10px;
    padding: 8px;
    gap: 5px;
}
</style>
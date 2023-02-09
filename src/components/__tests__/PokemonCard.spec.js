import { describe, it, expect, vi } from 'vitest'

import { flushPromises, shallowMount } from '@vue/test-utils'
import PokemonCard from '../PokemonCard.vue'
import api from '../../api/axiosConfig.js'
describe('PokemonCard', () =>{
    const mockPokemonData = {
        data:{
            name: 'pikachu',
            type: 'electric'
        }
    }
    it('calls pokeapi correctly', async () =>{
        //mock api call
        vi.spyOn(api, 'get').mockResolvedValue(mockPokemonData)
        const wrapper = shallowMount(PokemonCard, {
            props:{ 
                pokemon: 'eevee'
            }
        })
        await wrapper.vm.getPokemon('pikachu')

        // check that called twice as 2 api calls are made in getPokemon
        expect(api.get).toHaveBeenCalled(2)

        //check both api calls are made
        expect(api.get).toHaveBeenCalledWith('pokemon/pikachu')
        expect(api.get).toHaveBeenCalledWith('pokemon-species/pikachu')

        //flush the dom
        await flushPromises()

        //check that both pokemon data and pokemondata species are updated
        expect(wrapper.vm.pokemonData.name).toBe(mockPokemonData.data.name)
        expect(wrapper.vm.pokemonSpeciesData.name).toBe(mockPokemonData.data.name)
    })
})

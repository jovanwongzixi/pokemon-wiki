import { describe, it, expect, vi, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import PokemonView from '../../views/PokemonView.vue'

describe('PokemonView', () => {
    let wrapper
    beforeEach(() => {
        wrapper = mount(PokemonView)
    })

    it('expects titles to be rendered', () => {
        expect(wrapper.text()).toContain('Types')
        expect(wrapper.text()).toContain('Base stats')
        expect(wrapper.text()).toContain('Capture rate')
        expect(wrapper.text()).toContain('Abilities')
        expect(wrapper.text()).toContain('Habitat')
        expect(wrapper.text()).toContain('Height & Weight')
        expect(wrapper.text()).toContain('Levelling rate')
    })

    it('searchPokemon updates pokemon correctly', async () =>{
        const vm = wrapper.vm
        const input = wrapper.find('input')
        await input.setValue('pikachu')
        await wrapper.find('form').trigger('submit')

        // ensures form submitted
        expect(wrapper.emitted('submit')[0][0]).toBe('pikachu')
        // ensures text box is cleared
        expect(vm.text).toBe('')
        // ensures pokemon is updated
        expect(vm.pokemon).toBe('pikachu')
    })
})
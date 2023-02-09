import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import Name from '../Name.vue'
import { testNames, categories } from '../test_helpers/testNames'

describe('Name', () => {
    let wrapper
    beforeEach(() => {
        wrapper = mount(Name, {
            props:{
                names: testNames,
                category: categories,
                id: 25,
            }
        })
    })
    it('renders english name correctly', () => {
        expect(wrapper.text()).toContain('Pikachu')
    })

    it('renders japanese name correctly', () => {
        expect(wrapper.text()).toContain('ピカチュウ')
    })

    it('renders category correctly', () => {
        expect(wrapper.text()).toContain('Mouse Pokémon')
    })

    it('renders id correctly', () => {
        expect(wrapper.text()).toContain('#0025')
    })
})
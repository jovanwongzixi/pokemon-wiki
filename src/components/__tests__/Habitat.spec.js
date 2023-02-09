import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Habitat from '../Habitat.vue'

describe('Habitat', () => {
    let wrapper
    beforeEach(() => {
        wrapper = mount(Habitat)
    })

    it('renders valid habitat correctly', async () => {
        await wrapper.setProps({
            habitat: {
                name: 'forest'
            }
        })

        expect(wrapper.text()).toContain("Forest")
    })

    it('renders null habitat correctly', async () => {
        await wrapper.setProps({
            habitat: null
        })

        expect(wrapper.text()).toContain("Null")
    })
})
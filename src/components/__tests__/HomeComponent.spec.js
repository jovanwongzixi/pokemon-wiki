import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HomeComponent from '../HomeComponent.vue'

describe('HomeComponent', () => {
    it('renders properly', () => {
        const wrapper = mount(HomeComponent)
        expect(wrapper.text()).toMatchSnapshot()//toContain('This is a mini pokemon wiki site for me to practise my VueJS skills, along with unit testing using Vitest. Design to display pokemon info heavily inspired by Bulbapedia. Click on the Pokemon tab to start searching for a Pokemon!!')
    })
})
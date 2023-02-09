import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import HeightWeight from '../HeightWeight.vue'

describe('HeightWeight', () => {
    let wrapper

    beforeEach(() => {
        wrapper = mount(HeightWeight, {
            props: {
                height: 4,
                weight: 69
            }
        })
    })
    it('renders height correctly', () => {
        expect(wrapper.text()).toContain('0.4m')
    })
    it('renders weight correctly', () => {
        expect(wrapper.text()).toContain('6.9kg')
    })
})
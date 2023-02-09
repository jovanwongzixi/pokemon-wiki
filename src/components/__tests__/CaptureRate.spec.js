import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CaptureRate from '../CaptureRate.vue'
describe('CaptureRate', () => {
    it('renders capture rate correctly', () => {
        const wrapper =  mount(CaptureRate, {
            props: {
                rate: 190
            }
        })
        expect(wrapper.text()).toContain('190')
    })
})
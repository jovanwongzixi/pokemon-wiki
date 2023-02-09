import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Types from '../Types.vue'
import testTypes from '../test_helpers/testTypes'
import capitalise from '../../helper/capitaliseFirstChar'

describe('Types', () => {
    it('renders all types correctly', () => {
        const wrapper = mount(Types, {
            props: {
                types: testTypes
            }
        })
        wrapper.vm.types.forEach((val) => {
            expect(wrapper.text()).toContain(capitalise(val.type.name))
        })
    })
})
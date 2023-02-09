import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Abilities from '../Abilities.vue'
import testAbilities from '../test_helpers/testAbilities'
import capitalise from '../../helper/capitaliseFirstChar';

describe('Abilities', () => {
    it('renders all abilities correctly', () => {
        const wrapper = mount(Abilities, {
            props:{
                abilities: testAbilities
            }
        })
        testAbilities.forEach((val) => {
            expect(wrapper.text()).toContain(capitalise(val.ability.name))
        })
    })
})
import { shallowMount } from '@vue/test-utils'
import TomatoTimer from '@/components/TomatoTimer.vue'

describe('TomatoTimer.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(TomatoTimer, {
      props: { msg }
    })
    expect(wrapper.text()).not.toBe(null)
  })
})

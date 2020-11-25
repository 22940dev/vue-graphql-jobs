import { shallowMount } from '@vue/test-utils'
import JobTags from '@/components/JobTags.vue'

describe('JobTags.vue', () => {
  it('Renders props tags when passed', () => {
    const tags = [
      {
        name: "Tag one"
      },
      {
        name: "Tag two"
      }
    ]
    const wrapper = shallowMount(JobTags, {
      propsData: { tags }
    })
    expect(wrapper.text()).toMatch(`${tags[0].name}${tags[1].name}`)
  })
})

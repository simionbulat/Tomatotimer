import { mount } from "@vue/test-utils"
import TomatoTimer from "@/components/TomatoTimer.vue"


describe("TomatoTimer", function () {
    it("should contain a div", function () {
        const wrapper = mount(TomatoTimer)
        const div = wrapper.find('div')
        expect(div.exists()).toBe(true)
    })
    it('should render', () => {
        const wrapper = mount(TomatoTimer)
        expect(wrapper.exists()).toBe(true);
    });

})
import Timer from "@/components/Timer.vue"
import { mount } from "@vue/test-utils"

describe("Timer", function () {
    it("renderers properly", function () {
        var wrapper = mount(Timer)
        expect(wrapper.exists()).toBe(true);
    })
    it("can change the timer", function () {
        var wrapper = mount(Timer)
        // wrapper.setData()
    })
})
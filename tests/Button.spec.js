import Button from "../src/components/Button.vue";
import { mount } from "@vue/test-utils";
describe("Button", () => {
  it("content", () => {
    // given
    // 准备数据
    const Comp = {
      template: `<div><Button>默认按钮</Button></div>`,
    };

    // when
    // 触发测试动作
    const wrapper = mount(Comp, {
      global: {
        components: {
          Button,
        },
      },
    });

    // 验证结果
    expect(wrapper.findComponent({ name: "testButton" }).text()).toBe("默认按钮");
  });

  it("emit click event", () => {
    const wrapper = mount(Button);

    wrapper.trigger("click");

    // console.log(wrapper.emitted("click")).toEqual([[1]]);
    expect(wrapper.emitted("click")).toEqual([[1]]);
  });
});

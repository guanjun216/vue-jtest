// TDD
// 测试驱动开发
// 1. 先写测试（失败的测试）
// 2. 写逻辑让失败的测试通过
// 3. 重构

// Button -> content

import NewButton from "../src/components/NewButton.vue";
import { mount } from "@vue/test-utils";

describe("NewButton", () => {
  it("content", () => {
    // 代表的是用户使用的方式
    // 对外的接口
    const Comp = {
      template: `<div><NewButton>默认按钮</NewButton></div>`,
    };

    const wrapper = mount(Comp, {
      global: {
        components: {
          NewButton,
        },
      },
    });

    expect(wrapper.findComponent({ name: "newButton" }).text()).toBe(
      "默认按钮"
    );
  });
});

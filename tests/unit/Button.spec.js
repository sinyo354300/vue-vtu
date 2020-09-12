import { mount } from "@vue/test-utils";
import Button from "../../src/components/Button.vue";
describe("Button", () => {
  test("disabled", () => {
    const wrapper = mount(Button, {
      propsData: {
        disabled: true,
      },
    });

    wrapper.find("[data-testid='btn']").trigger("click");
    expect(wrapper.emitted("click")).toBeFalsy();
  });
  // todo
  // 测试 button slot 显示的内容
  // 测试 button 点击的时候发出 click 自定义事件
  test("slot", () => {
    const wrapper = mount(Button);
    expect(wrapper.find("[data-testid='btn']").text()).toBe("默认按钮");
  });

  test("click", async () => {
    const wrapper = mount(Button, {
      propsData: {
        disabled: false,
      },
    });
    await wrapper.find("[data-testid='btn']").trigger("click");
    expect(wrapper.find("span").text()).toBe("1");
  });
});

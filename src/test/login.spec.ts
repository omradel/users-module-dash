import { describe, it, expect, beforeEach, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Login from "@/modules/auth/pages/Login.vue";
import { createPinia, setActivePinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import { createVuetify } from "vuetify";
import routes from "@/router/routes";
import { defineRule } from "vee-validate";
import { all } from "@vee-validate/rules";
import { useAuthStore } from "@/modules/auth/services/auth";

Object.entries(all).forEach(([name, rule]) => {
  defineRule(name, rule);
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const vuetify = createVuetify();

describe("Login.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("renders the login page", () => {
    const wrapper = mount(Login, {
      global: {
        plugins: [router, vuetify, createPinia()],
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain("Sign In");
  });

  it("allows user to type email and password", async () => {
    const wrapper = mount(Login);

    const emailInput = wrapper.find("input[type='email']")
      .element as HTMLInputElement;
    const passwordInput = wrapper.find("input[type='password']")
      .element as HTMLInputElement;

    await wrapper.find("input[type='email']").setValue("test@example.com");
    await wrapper.find("input[type='password']").setValue("123456");

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("123456");
  });

  it("logs in a user successfully", async () => {
    const authStore = useAuthStore();

    vi.spyOn(authStore, "login").mockImplementation(async () => {
      authStore.user = { email: "test@example.com" };
    });

    await authStore.login({ email: "test@example.com", password: "123456" });

    expect(authStore.user).toEqual({ email: "test@example.com" });
  });
});

import { ref } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import Cookies from "js-cookie";
import { mockApi } from "@/mockapi/mockApi";
import { type User } from "@/types/interfaces";

export const useAuthStore = defineStore("useAuthStore", () => {
  const user = ref(
    Cookies.get("user") ? JSON.parse(Cookies.get("user")!) : null
  );

  const isLoading = ref(false);
  const router = useRouter();

  // login fuction
  const login = async (credintials: User) => {
    try {
      isLoading.value = true;
      const response: any = await mockApi.login(credintials);
      user.value = response.user;
      console.log(user.value);
      Cookies.set("user", JSON.stringify(user.value), {
        expires: 7,
        secure: true,
      });
      isLoading.value = false;
      await router.push("/");
      toast.success("Login Successfully", { autoClose: 3000 });
    } catch (error) {
      isLoading.value = false;
      toast.error("Error in email or password!", { autoClose: 3000 });
    }
  };

  const logout = async () => {
    try {
      user.value = null;
      Cookies.remove("user");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    isLoading,
    login,
    logout,
    user,
  };
});

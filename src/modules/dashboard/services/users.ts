import { ref, type Ref, computed } from "vue";
import { mockApi } from "@/mockapi/mockApi";
import { toast } from "vue3-toastify";
import { type newUser } from "@/types/interfaces";
import { useRouter } from "vue-router";

export const useUsers = () => {
  const allUsers = ref({});
  const user = ref({});
  const isLoading: Ref<boolean> = ref(false);
  const currentPage = ref(1);
  const router = useRouter();

  const getAllUsers = async (filterRole?: string) => {
    try {
      isLoading.value = true;

      const response: any = await mockApi.getUsers({
        page: currentPage.value,
        filterRole: filterRole,
      });
      allUsers.value = response;
      console.log(filterRole);
      console.log(allUsers.value);

      if (!response.data.length) {
        currentPage.value = 1;
      }

      isLoading.value = false;
    } catch (error) {
      isLoading.value = false;
    }
  };

  const getUser = async (id: number) => {
    try {
      console.log(id);
      const response: any = await mockApi.getUserById(id);
      user.value = response;
      return user.value;
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = async (newUser: newUser) => {
    try {
      isLoading.value = true;
      const response: any = await mockApi.createUser(newUser);
      isLoading.value = false;
      await router.push("/users");
      toast.success(`user created successfully !`, { autoClose: 3000 });
    } catch (error) {
      isLoading.value = false;
      toast.error("Something went wrong !", { autoClose: 3000 });
    }
  };

  const editUser = async (id: number, udatedUser: newUser) => {
    try {
      isLoading.value = true;
      const response: any = await mockApi.updateUser(id, udatedUser);
      isLoading.value = false;
      await router.push("/users");
      toast.success(`user updated successfully !`, { autoClose: 3000 });
    } catch (error) {
      isLoading.value = false;
      toast.error("Something went wrong !", { autoClose: 3000 });
    }
  };

  const delteUserTest = async (id: number) => {
    try {
      isLoading.value = true;
      const response: any = await mockApi.deleteUser(id);
      await getAllUsers();
      isLoading.value = false;
      toast.success(`user ${id} deleted successfully !`, { autoClose: 3000 });
    } catch (error) {
      isLoading.value = false;
      toast.error("Something went wrong !", { autoClose: 3000 });
    }
  };

  return {
    getAllUsers,
    allUsers,
    isLoading,
    currentPage,
    delteUserTest,
    createUser,
    getUser,
    editUser,
  };
};

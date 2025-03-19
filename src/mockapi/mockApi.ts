import { ref } from "vue";
import { type rolePermetion } from "@/types/interfaces";

// Simulate realistic latency (300-800ms)
const randomDelay = () => Math.floor(Math.random() * 500) + 1000;

const users = ref(
  Array.from({ length: 50 }, (_, id) => ({
    id: id + 1,
    name: `User ${id + 1}`,
    email: `user${id + 1}@example.com`,
    password: "password123", // Mocked password (not secure)
    role: ["admin", "manager", "viewer"][id % 3], // Cycle through roles
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
  }))
);

// Role permissions
const rolePermissions: rolePermetion = {
  admin: ["create", "edit", "delete", "view"],
  manager: ["edit", "view"],
  viewer: ["view"],
};

// Generate a mock JWT token
const generateToken = (user: any) => {
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
    exp: Math.floor(Date.now() / 1000) + 60 * 60, // Expires in 1 hour
  };
  return btoa(JSON.stringify(payload));
};

// Simulated API
export const mockApi = {
  async getUsers({
    page = 1,
    pageSize = 12,
    sortBy = "id",
    sortOrder = "asc",
    filterRole = "",
    limit = 12,
    failRate = 0.1,
  }: {
    page?: number;
    pageSize?: number;
    sortBy?: keyof (typeof users.value)[number];
    sortOrder?: "asc" | "desc";
    filterRole?: string;
    limit?: number;
    failRate?: number;
  }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < failRate) {
          reject({ error: "Mock API error occurred!" });
          return;
        }

        let filteredUsers = [...users.value];

        // Apply filtering
        if (filterRole) {
          filteredUsers = filteredUsers.filter(
            (user) => user.role === filterRole
          );
        }

        // Apply sorting
        filteredUsers.sort((a, b) => {
          if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1;
          if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1;
          return 0;
        });

        // Apply pagination
        const startIndex = (page - 1) * pageSize;
        const paginatedUsers = filteredUsers.slice(
          startIndex,
          startIndex + pageSize
        );
        const pages = Math.ceil(filteredUsers.length / pageSize);

        resolve({
          data: paginatedUsers,
          total: filteredUsers.length,
          page,
          pageSize,
          pages,
        });
      }, randomDelay());
    });
  },

  async getUserById(id: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.value.find((user) => Number(user.id) === Number(id));
        if (user) resolve(user);
        else reject({ error: "User not found" });
      }, randomDelay());
    });
  },

  async getRolePermissions(role: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ role, permissions: rolePermissions || [] });
      }, randomDelay());
    });
  },

  async login({ email, password }: { email: string; password: string }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.value.find((user) => user.email === email);

        if (!user || user.password !== password) {
          reject({ error: "Invalid email or password" });
          return;
        }

        // Generate token
        const token = generateToken(user);

        resolve({
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token,
          },
        });
      }, randomDelay());
    });
  },

  async createUser({
    name,
    email,
    password,
    role,
  }: {
    name: string;
    email: string;
    password: string;
    role: string;
  }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Check if email already exists
        if (users.value.some((user) => user.email === email)) {
          reject({ error: "Email already in use" });
          return;
        }

        const newUser = {
          id: users.value.length + 1,
          name,
          email,
          password,
          role,
          createdAt: new Date().toISOString(),
        };

        users.value.push(newUser);
        resolve(newUser);
      }, randomDelay());
    });
  },

  async updateUser(
    id: number,
    updates: Partial<{
      name: string;
      email: string;
      password: string;
      role: string;
    }>
  ) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = users.value.findIndex(
          (user) => Number(user.id) === Number(id)
        );

        if (index === -1) {
          reject({ error: "User not found" });
          return;
        }

        users.value[index] = { ...users.value[index], ...updates };
        resolve(users.value[index]);
      }, randomDelay());
    });
  },

  async deleteUser(id: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = users.value.findIndex((user) => user.id === id);

        if (index === -1) {
          reject({ error: "User not found" });
          return;
        }

        users.value.splice(index, 1);
        resolve({ success: true, message: "User deleted successfully" });
      }, randomDelay());
    });
  },
};

export interface User {
  email: string;
  password: string;
}

export interface rolePermetion {
  admin: ["create", "edit", "delete", "view"];
  manager: ["edit", "view"];
  viewer: ["view"];
}

export interface newUser {
  name: string;
  email: string;
  password: string;
  role: string;
}

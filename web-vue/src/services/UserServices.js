import { http } from "./api-config";

export default {
  save: (user) => {
    return http.post("users", user);
  },

  update: (user) => {
    return http.put("users", user);
  },

  findAll: () => {
    return http.get("users");
  },

  delete: (user) => {
    return http.delete(`users/${user.id}`);
  },
};
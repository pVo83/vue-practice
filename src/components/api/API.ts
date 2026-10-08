import { apiClient } from "@/components/api/index.js"

export interface User {
  id: number
  name: string
}

export const API = {
  getAll() {
    return apiClient.get<User[]>("/users")
  },

  deleteUser(id: number) {
    return apiClient.delete(`/users/${id}`)
  },
}

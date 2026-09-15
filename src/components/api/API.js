import { apiClient } from "@/components/api/index.js"

export const API = {
  getAll() {
    return apiClient.get("/users")
  },
}

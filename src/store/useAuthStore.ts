import { create } from "zustand";
import { persist } from "zustand/middleware";

export type User = {
      user: string,
      userId: string,
}


interface AuthStore {
      user: string,
      userId: string,
      isAuthenticated: boolean
      saveUser: (data: User) => void
}


export const useAuthStore = create<AuthStore>()(
      persist(
            (set) => ({
                  user: "",
                  userId: "",
                  isAuthenticated: false,
                  saveUser: (data) => set(() => ({
                        user: data.user,
                        userId: data.userId,
                        isAuthenticated: true,

                  })),
                  // En tu Store, añade esta acción:
logout: () => set({ user: "", userId: "", isAuthenticated: false })
            }),
            { name: 'user-storage' },


      ))
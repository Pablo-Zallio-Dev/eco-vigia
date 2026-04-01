import { create } from "zustand";
import { persist } from "zustand/middleware";
import { supabase } from "../lib/supabase";

export type User = {
      user: string,
      userId: string,
}


interface AuthStore {
      user: string | null,
      userId: string,
      isAuthenticated: boolean
      saveUser: (data: User) => void
      logout: () => void
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
                  // En useAuthStore.ts
                  logout: async () => {
                        await supabase.auth.signOut();
                        set({ isAuthenticated: false, user: null }); // Limpiamos el estado local
                  }
            }),
            { name: 'user-storage' },


      ))
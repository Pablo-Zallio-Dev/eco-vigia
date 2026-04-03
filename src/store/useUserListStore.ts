import { create } from "zustand";
import { supabase } from "../lib/supabase";
import type { RegisterFormData } from "../schemas/schemaRegister";

interface UserListStore {
      addUsers: (data: RegisterFormData) => Promise<boolean>

}

export const useUserListStore = create<UserListStore>(() => ({
      addUsers: async (data: RegisterFormData) => {

            try {

                  const {  error } = await supabase.auth.signUp({
                        email: `${data.user}@gmail.com`,
                        password: data.userId,
                        options: {
                              data: {
                                    first_name: data.name,
                                    last_name: data.surname
                              }
                        }
                  });

                  if (error) {
                        console.error("Error en Supabase:", error.message);
                        return false;
                  }

                  return true;

            } catch (err) {
                  console.error("Error inesperado:", err);
                  return false;
            }



      }
})



)




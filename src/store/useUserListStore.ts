      import { create } from "zustand";
      import type { ProfileFormData } from "../schemas/profileValidation";
      import { supabase } from "../lib/supabase";

      interface UserListStore {
            addUsers: (data: ProfileFormData) => Promise<boolean>

      }

      export const useUserListStore = create<UserListStore>(() => ({
             addUsers: async (data) => {

                        const { error } = await supabase.auth.signUp({
                              email: `${data.user}@gmail.com`,
                              password: data.userId,
                        });

                        if (error) {
                              alert("Error en el registro: " + error.message);
                              return false;
                        }

                        return true;
                  }
      })

           

      )



  
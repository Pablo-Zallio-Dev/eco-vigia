import { create } from "zustand";
import type { ProfileFormData } from "../schemas/profileValidation";
import { persist } from "zustand/middleware";

interface UserListStore {
      registeredUsers: ProfileFormData[],
      addUsers: (data: ProfileFormData) => boolean

}

export const useUserListStore = create<UserListStore>()(
      persist((set) => ({
            registeredUsers: [],
            addUsers: (data) => { 
                  let result = false;

                  set((state) => {
                  if(state.registeredUsers.some(user => user.user === data.user)){
                        alert('Este usuario ya existe')
                        result = false
                        return state   
                  } else {
                        result= true
                        return {registeredUsers: [...state.registeredUsers, data]}
                  }
            })
            return result
      }
      }), { name: 'addUsers-storage' })
)
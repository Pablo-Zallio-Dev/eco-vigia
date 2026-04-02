import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserListStore } from '../store/useUserListStore';
import type { ProfileFormData } from '../schemas/profileValidation';

export const useRegister = () => {
      const navigate = useNavigate();
      const addUsers = useUserListStore((state) => state.addUsers);

      const [registerError, setRegisterError] = useState<string | null>(null);
      const [isLoading, setIsLoading] = useState(false);

      const handleRegistration = async (data: ProfileFormData) => {
            setIsLoading(true);
            
            try {
                  // Intentamos registrar al usuario en tu Store/Supabase
                  const isSuccess = await addUsers(data);


                  if (isSuccess) {
                        // Si sale bien, vamos al loginse
                        navigate('/', { state: { successMessage: '¡Registro completado con éxito!', username: data.user } });
                        
                  } else {
                        // Si el Store devuelve false (ej: usuario duplicado)
                        setRegisterError("No se pudo completar el registro. El usuario ya existe.");
                  }
            } catch {
                  setRegisterError("Ocurrió un error inesperado durante el registro.");
            } finally {
                  setIsLoading(false);
            }
      };

      return { handleRegistration, registerError, isLoading };
};
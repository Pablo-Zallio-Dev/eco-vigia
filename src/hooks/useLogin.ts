import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import type { ProfileFormData } from '../schemas/profileValidation';
import { supabase } from '../lib/supabase';

export const useLogin = () => {
  const navigate = useNavigate();
  const saveUser = useAuthStore((state) => state.saveUser);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (data: ProfileFormData) => {
    setLoginError(null);
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: `${data.user}@gmail.com`,
        password: data.userId,
      });

      if (error) {
        setLoginError(error.message);
      } else {
        saveUser(data);
        navigate('/map');
      }
    } catch  {
      setLoginError("Ocurrió un error inesperado");
    } finally {
      setIsLoading(false);
    }
  };

  return { handleLogin, loginError, isLoading };
};
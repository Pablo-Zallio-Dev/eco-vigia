import { KeyRound, UserRound } from 'lucide-react'
import logo from '../../../assets/images/logo.webp'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuthStore } from '../../../store/useAuthStore'
import { profileValidation, type ProfileFormData } from '../../../schemas/profileValidation'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../../lib/supabase'




const Login = () => {
      const navigate = useNavigate()
      const saveUser = useAuthStore((state) => state.saveUser)


      const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormData>({
            resolver: zodResolver(profileValidation)
      })


      const handleLogin = async (data: ProfileFormData) => {
            const { data: session, error } = await supabase.auth.signInWithPassword({
                  email: `${data.user}@gmail.com`,
                  password: data.userId,
            });

            if (error) {
                  // Si hay error (usuario no existe o contraseña mal), avisamos
                  alert("Error al entrar: " + error.message);
                  console.log(session)
            } else {
                  // Si todo ok, guardamos la sesión y al mapa
                  saveUser(data);
                  navigate('/map');
            }
      }



      return (
            <section className=" flex flex-col gap-6 justify-center items-center w-full h-dvh bg-formLogin text-light ">
                  <section className=" flex flex-col items-center gap-4 ">
                        <img src={logo} alt="" className=" w-48 " />
                        <div className="">
                              <p className="">Bienvenido a...</p>
                              <h1 className=" text-3xl font-black ">EcoVigia</h1>
                        </div>
                        <p className=" w-72 text-center text-xs ">Inicia sesión para informar y hacer un seguimiento de los Incidentes medioambientales en tus rutas.</p>
                  </section>
                  <section className=" p-2.5 text-xs rounded-xl bg-login ">
                        <form onSubmit={handleSubmit(handleLogin)} className=' flex flex-col items-center gap-6 '>
                              <div className=" flex flex-col w-full gap-1.5 ">
                                    <label htmlFor="user" className='' >Usuario</label>
                                    <div className=" flex items-center p-2 gap-1.5 bg-formLogin rounded-md transition-all duration-150 focus-within:border-[#369869] focus-within:ring-1 focus-within:ring-[#369869]  ">
                                          <UserRound size={20} color="#369869" />
                                          <input type="text" id="user" className=" focus:outline-0 "
                                                {...register('user')} />
                                    </div>
                                    {
                                          errors.user?.message && <p className=""> {errors.user.message} </p>
                                    }
                              </div>
                              <div className=" flex flex-col w-full gap-1.5 ">
                                    <label htmlFor="userId" className='' >Contraseña</label>
                                    <div className=" flex items-center p-2 gap-1.5 bg-formLogin rounded-md transition-all duration-150 focus-within:border-[#369869] focus-within:ring-1 focus-within:ring-[#369869]  ">
                                          <KeyRound size={18} color="#369869" />
                                          <input type="password" id="userId" className=" focus:outline-0 "
                                                {...register('userId')} />
                                    </div>
                                    {
                                          errors.userId?.message && <p className=""> {errors.userId.message} </p>
                                    }
                              </div>
                              <input type="submit" value="Ingresar" className=' w-min py-1.5 px-3 border border-green-800 rounded-lg ' />
                        </form>
                        <div className="mt-4 text-center">
                              <p className="text-gray-400">¿No tienes una cuenta?</p>
                              <Link to="/register" className="text-[#369869] font-bold hover:underline">
                                    Regístrate aquí
                              </Link>
                        </div>
                  </section>
            </section>
      )
}

export default Login
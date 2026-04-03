import { Eye, EyeOff, KeyRound, UserRound } from 'lucide-react'
import logo from '../../../assets/images/logo.webp'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { profileValidation, type ProfileFormData } from '../../../schemas/profileValidation'
import { Link, useLocation } from 'react-router-dom'
import UnregisteredUser from './UnregisteredUser'
import { useLogin } from '../../../hooks/useLogin'
import Spinner from '../../Ux-Ui/Spinner'
import RegisterSucces from './RegisterSucces'
import { useState } from 'react'




const Login = () => {

      const location = useLocation();
      // Capturamos el mensaje que viene de la navegación
      const successMessage = location.state?.successMessage;

      const { handleLogin, loginError, isLoading } = useLogin();

      const [viewPassword, setViewPassword] = useState<boolean>(false)

      const setPassword = () => {
            setViewPassword(!viewPassword)
      }


      const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormData>({
            resolver: zodResolver(profileValidation)
      })






      return (
            <section className=" flex flex-col gap-6 justify-center items-center w-full h-screen md:h-dvh bg-formLogin text-light ">
                  <section className=" flex flex-col items-center gap-4 ">
                        <img src={logo} alt="" className=" w-24 sm:w-36 " />
                        <div className=" text-center ">
                              <p className=" text-sm ">Bienvenido a...</p>
                              <h1 className=" text-xl font-black ">EcoVigia</h1>
                        </div>
                        <p className="  w-76 sm:py-8 sm:w-140  lg:w-140 text-center text-xs sm:text-xl ">Inicia sesión para informar y hacer un seguimiento de los Incidentes medioambientales en tus rutas.</p>
                  </section>
                  <section className=" p-2.5 text-xs rounded-xl bg-login ">
                        <div className="mb-8 text-center">
                              <p className="text-gray-400">¿No tienes una cuenta?</p>
                              <Link to="/register" className="text-[#369869] font-bold hover:underline">
                                    Regístrate aquí
                              </Link>
                        </div>
                        <form onSubmit={handleSubmit(handleLogin)} className=' relative flex flex-col items-center py-6 '>

                              <section className=" flex absolute -top-0.5 sm:-top-1.5 ">
                                    <h2 className="  tab__login tab__login--active ">Login</h2>
                                    <h2 className="  tab__login tab__login--disabled  ">Registrate</h2>
                              </section>
                              <section className=" flex flex-col gap-6 p-4 mb-6 border-2 border-formLogin  rounded-br-lg rounded-lg ">

                                    <div className=" flex flex-col w-full gap-1.5 ">
                                          <label htmlFor="user" className=' tag__label ' >Usuario</label>
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
                                          <label htmlFor="userId" className=' tag__label ' >Contraseña</label>
                                          <div className=" flex justify-between items-center p-2 gap-1.5 bg-formLogin rounded-md transition-all duration-150 focus-within:border-[#369869] focus-within:ring-1 focus-within:ring-[#369869]  ">
                                                <KeyRound size={18} color="#369869" />
                                                <input type={ viewPassword ? `text` : `password` } id="userId" className=" w-full focus:outline-0 "
                                                      {...register('userId')} />

                                                      <section className=" self-end">
                                                      {
                                                            viewPassword ? <EyeOff size={18} color="#369869" onClick={setPassword} /> : <Eye size={18} color="#369869" onClick={setPassword} />
                                                      }

                                                      </section>

                                          
                                          </div>
                                          {
                                                errors.userId?.message && <p className=""> {errors.userId.message} </p>
                                          }
                                    </div>
                              </section>
                              {
                                    isLoading ? <Spinner /> : loginError && <UnregisteredUser />
                              }
                              {
                                    successMessage && <RegisterSucces />
                              }

                              <input type="submit" value="Ingresar" className=' w-min py-1.5 px-3 border border-green-800 rounded-lg ' />
                        </form>
                        
                  </section>
            </section>
      )
}

export default Login
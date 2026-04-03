import { Eye, EyeOff, KeyRound, UserRound } from "lucide-react"
import logo from '../../../assets/images/logo.webp'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { useRegister } from "../../../hooks/useRegister"
import { registerValidation, type RegisterFormData } from "../../../schemas/schemaRegister"
import { useState } from "react"


const Register = () => {

      const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
            resolver: zodResolver(registerValidation)
      })

      const [viewPassword, setViewPassword] = useState<boolean>(false)
      
            const setPassword = () => {
                  setViewPassword(!viewPassword)
            }
      
      const { handleRegistration } = useRegister();

      return (
            <section className=" flex flex-col gap-6 justify-center items-center w-full md:h-dvh py-10 bg-formLogin text-light ">
                  <section className=" flex flex-col items-center gap-4 ">
                        <img src={logo} alt="" className=" w-24 sm:w-36 " />
                        <div className=" text-center ">
                              <p className=" text-sm ">Bienvenido a...</p>
                              <h1 className=" text-xl font-black ">EcoVigia</h1>
                        </div>
                        <p className=" w-76 sm:py-2    md:py-6 sm:w-140  lg:w-150 text-center text-xs sm:text-xl "> Registrate e inicia sesión para informar y hacer un seguimiento de los Incidentes medioambientales en tus rutas.</p>
                  </section>
                  <section className=" md:w-80 p-2.5 text-xs rounded-xl bg-login ">
                        <div className="my-4 sm:my-6 text-center">
                              <p className="text-gray-400 ">¿Ya tienes cuenta?</p>
                              <Link to="/" className="text-[#369869] font-bold hover:underline">
                                    Inicia sesión
                              </Link>
                        </div>
                        <form onSubmit={handleSubmit(handleRegistration)} className=' relative flex flex-col items-center w-full py-6  '>


                              <section className=" flex absolute -top-0.5 sm:-top-1.5 ">
                                    <h2 className=" tab__login tab__login--disabled ">Login</h2>
                                    <h2 className="  tab__login tab__login--active   ">Registrate</h2>
                              </section>
                              <section className=" flex flex-col gap-4 p-4 mb-6 border-2 border-formLogin rounded-lg rounded-bl-lg ">

                                    <div className=" flex flex-col w-full gap-1.5 ">
                                          <label htmlFor="name" className=' tag__label ' >Nombre</label>
                                          <div className=" flex items-center p-2 gap-1.5 bg-formLogin rounded-md transition-all duration-150 focus-within:border-[#369869] focus-within:ring-1 focus-within:ring-[#369869]  ">
                                                <input type="text" id="name" className=" focus:outline-0 "
                                                      {...register('name')} />
                                                {
                                                      errors.user?.message && <p className=""> {errors.user.message} </p>
                                                }
                                          </div>
                                    </div>

                                    <div className=" flex flex-col w-full gap-1.5 ">
                                          <label htmlFor="surname" className=' tag__label ' >Apellido</label>
                                          <div className=" flex items-center p-2 gap-1.5 bg-formLogin rounded-md transition-all duration-150 focus-within:border-[#369869] focus-within:ring-1 focus-within:ring-[#369869]  ">
                                                <input type="text" id="surname" className=" focus:outline-0 "
                                                      {...register('surname')} />
                                                {
                                                      errors.user?.message && <p className=""> {errors.user.message} </p>
                                                }
                                          </div>
                                    </div>


                                    <div className=" flex flex-col w-full gap-1.5 ">
                                          <label htmlFor="user" className=' tag__label ' >Usuario</label>
                                          <div className=" flex items-center p-2 gap-1.5 bg-formLogin rounded-md transition-all duration-150 focus-within:border-[#369869] focus-within:ring-1 focus-within:ring-[#369869]  ">
                                                <UserRound size={20} color="#369869" />
                                                <input type="text" id="user" className=" focus:outline-0 "
                                                      {...register('user')} />
                                                {
                                                      errors.user?.message && <p className=""> {errors.user.message} </p>
                                                }
                                          </div>
                                    </div>
                                    <div className=" flex flex-col w-full gap-1.5 ">
                                          <label htmlFor="userId" className=' tag__label ' >Contraseña</label>
                                          <div className=" flex justify-between items-center p-2 gap-1.5 bg-formLogin rounded-md transition-all duration-150 focus-within:border-[#369869] focus-within:ring-1 focus-within:ring-[#369869]  ">
                                                <KeyRound size={18} color="#369869" />
                                                <input type="password" id="userId" className="  w-full focus:outline-0 "
                                                      {...register('userId')} />

                                                      <section className=" ">
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


                              <input type="submit" value="Registrarse" className=' w-min py-2 px-3 border border-green-800 rounded-lg ' />
                        </form>

                  </section>
            </section>
      )
}

export default Register
import { KeyRound, UserRound } from "lucide-react"
import logo from '../../../assets/images/logo.webp'

import { zodResolver } from "@hookform/resolvers/zod"
import { profileValidation, type ProfileFormData } from "../../../schemas/profileValidation"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { useRegister } from "../../../hooks/useRegister"


const Register = () => {

      const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormData>({
            resolver: zodResolver(profileValidation)
      })
      const { handleRegistration } = useRegister();

      return (
            <section className=" flex flex-col gap-6 justify-center items-center w-full h-dvh bg-formLogin text-light ">
                  <section className=" flex flex-col items-center gap-4 ">
                        <img src={logo} alt="" className=" w-48 " />
                        <div className="">
                              <p className="">Bienvenido a...</p>
                              <h1 className=" text-3xl font-black ">EcoVigia</h1>
                        </div>
                        <p className=" w-86 text-center text-xs "> Registrate e inicia sesión para informar y hacer un seguimiento de los Incidentes medioambientales en tus rutas.</p>
                  </section>
                  <section className=" p-2.5 text-xs rounded-xl bg-login ">
                        <form onSubmit={handleSubmit(handleRegistration)} className=' relative flex flex-col items-center py-6  '>

                              <section className=" self-start flex absolute -top-0.5 ">
                                    <h2 className=" px-2.5 py-1  border-2  border-transparent ">Login</h2>
                                    <h2 className=" px-2.5 py-1 border-2  border-x-formLogin border-t-formLogin border-b-login   ">Registrate</h2>
                              </section>
                              <section className=" flex flex-col gap-6 p-4 mb-6 border-2 border-formLogin rounded-br-lg rounded-bl-lg ">

                                    <div className=" flex flex-col w-full gap-1.5 ">
                                          <label htmlFor="user" className='' >Usuario</label>
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
                                          <label htmlFor="userId" className='' >Contraseña</label>
                                          <div className=" flex items-center p-2 gap-1.5 bg-formLogin rounded-md transition-all duration-150 focus-within:border-[#369869] focus-within:ring-1 focus-within:ring-[#369869]  ">
                                                <KeyRound size={18} color="#369869" />
                                                <input type="password" id="userId" className=" focus:outline-0 "
                                                      {...register('userId')} />
                                                {
                                                      errors.userId?.message && <p className=""> {errors.userId.message} </p>
                                                }
                                          </div>
                                    </div>
                              </section>


                              <input type="submit" value="Registrarse" className=' w-min py-1.5 px-3 border border-green-800 rounded-lg ' />
                        </form>
                        <div className="mt-4 text-center">
                              <p className="text-gray-400">¿Ya tienes cuenta?</p>
                              <Link to="/" className="text-[#369869] font-bold hover:underline">
                                    Inicia sesión
                              </Link>
                        </div>
                  </section>
            </section>
      )
}

export default Register
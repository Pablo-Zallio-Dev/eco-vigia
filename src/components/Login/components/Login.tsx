import { KeyRound, UserRound } from 'lucide-react'
import logo from '../../../assets/images/logo.webp'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuthStore, type User } from '../../../store/useAuthStore'
import { profileValidation, type ProfileFormData } from '../../../schemas/profileValidation'
import { useNavigate } from 'react-router-dom'




const Login = () => {
      const navigate = useNavigate()
      const saveUser = useAuthStore((state) => state.saveUser)

      const { register, handleSubmit, reset, formState: { errors } } = useForm<ProfileFormData>({
            resolver: zodResolver(profileValidation)
      })


     const registerUser = (data: User ) => {
      saveUser(data)
      navigate('/map')
      reset()
     }

     const ejemplo = () => {
      console.log("Hola")
     }


      return (
            <section className=" flex flex-col gap-6 justify-center items-center w-full h-dvh bg-formLogin text-light ">
                  <section className=" flex flex-col items-center gap-4 ">
                        <img src={logo} alt="" className=" w-48 " />
                        <div className="">
                              <p className="">Bienvenido a...</p>
                              <h1 className=" text-3xl font-black ">EcoVigia</h1>
                        </div>
                        <p className=" w-72 text-center text-xs ">Inicia sesión para informar y hacer un seguimiento de los incidentes medioambientales en tus rutas.</p>
                  </section>
                  <section className=" p-2.5 text-xs rounded-xl bg-login ">
                        <form onSubmit={handleSubmit(registerUser)} className=' flex flex-col items-center gap-6 '>
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
                              <input type="submit" value="Ingresar" className=' w-min py-1.5 px-3 border border-green-800 rounded-lg ' onClick={ejemplo} />
                        </form>
                  </section>
            </section>
      )
}

export default Login
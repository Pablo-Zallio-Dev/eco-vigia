
import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { schemaValidation } from '../../../schemas/schemaValidation'
import type { Inputs } from '../../../types/inputs'
import { useModalStore } from '../../../store/useModalStore'
import { CircleX } from 'lucide-react'
import { useSendForm } from '../utilities/useSendForm'

const IncidentForms = () => {

            const isFormOpen = useModalStore((state) => state.isFormOpen)
            const closeForm = useModalStore((state) => state.closeForm)
      const {onSubmit} = useSendForm()
      

      const { register, handleSubmit, formState: {errors} } = useForm<Inputs>( {
            resolver: zodResolver(schemaValidation)
      } )

      console.log(errors)

      return (
            <section className={`  absolute top-20  ${ !isFormOpen ? ' translate-y-full ' :  ''} left-0 z-1000 flex flex-col gap-6 w-full h-full p-4 bg-form text-label rounded-t-2xl transition-transform duration-500 `}>
                  <section className=" flex justify-around items-center ">
                        <h2 className=" text-xs text-center ">Reportar nuevo incidente</h2>
                        <CircleX size={16} color='var(--text-label)' onClick={closeForm} />
                  </section>
                  <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-4 ">
                        <div className=" flex flex-col gap-1 ">
                              <label htmlFor="title" className=" text-sm">Titulo</label>
                              <input type="text" id="title" className=" p-2 bg-input text-xs rounded-lg focus:outline-0 "
                              {...register('title')}
                              />
                              {
                                    errors.title?.message && <p className=" text-xxs text-red-300 "> {errors.title.message} </p>
                              }
                        </div>
                        <div className=" flex flex-col gap-1 ">
                              <label htmlFor="description" className=" text-sm ">Descripcion</label>
                              <input type="text" id="description" className=" p-2 bg-input text-xs rounded-lg focus:outline-0 "
                              {...register('description')}
                              />
                               {
                                    errors.description?.message && <p className=" text-xxs text-red-300 "> {errors.description.message} </p>
                              }
                        </div>
                        <div className=" flex flex-col gap-1 ">

                              <label htmlFor="category" className=" text-sm ">Categoria</label>
                              <select id="category" className=" p-2 bg-input text-xs rounded-lg focus:outline-0 " 
                              {...register('category')}
                              >
                                    <option value="">Seleccione una categoria</option>
                                    <option value="Senderos">Senderos</option>
                                    <option value="Limpieza">Limpieza</option>
                                    <option value="Señalización">Señalización</option>
                                    <option value="Peligro">Peligro</option>
                              </select>
                               {
                                    errors.category?.message && <p className=" text-xxs text-red-300 "> {errors.category.message} </p>
                              }
                        </div>
                        <input type="submit" value="Enviar" className="p-2 bg-input text-xs rounded-lg " />
                  </form>
                  <div className="">
                       
                  </div>
            </section>
      )
}

export default IncidentForms
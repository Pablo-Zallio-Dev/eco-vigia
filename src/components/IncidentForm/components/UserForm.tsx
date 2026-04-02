import type { Inputs } from '../../../types/inputs'
import { useSendForm } from '../utilities/useSendForm'
import type { UseFormReturn } from 'react-hook-form'



const UserForm = ({ methods }: { methods: UseFormReturn<Inputs> }) => {
      const { register, handleSubmit, reset, formState: { errors } } = methods

      const { onSubmit } = useSendForm()

      

      return (
            <form onSubmit={handleSubmit((data) => onSubmit(data, reset))} className=" flex flex-col gap-4 ">
                  <div className=" flex flex-col gap-1 ">
                        <label htmlFor="title" className=" text-sm md:text-lg ">Titulo</label>
                        <input type="text" id="title" className=" p-2 bg-input text-xs rounded-lg focus:outline-0 "
                              {...register('title')}
                        />
                        {
                              errors.title?.message && <p className=" text-xxs md:text-sm text-red-300 "> {errors.title.message} </p>
                        }
                  </div>
                  <div className=" flex flex-col gap-1 ">
                        <label htmlFor="description" className=" text-sm md:text-lg ">Descripcion</label>
                        <input type="text" id="description" className=" p-2 bg-input text-xs rounded-lg focus:outline-0 "
                              {...register('description')}
                        />
                        {
                              errors.description?.message && <p className=" text-xxs md:text-sm text-red-300 "> {errors.description.message} </p>
                        }
                  </div>
                  <div className=" flex flex-col gap-1 ">

                        <label htmlFor="category" className=" text-sm md:md:text-lg ">Categoria</label>
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
                              errors.category?.message && <p className=" text-xxs md:text-sm text-red-300 "> {errors.category.message} </p>
                        }
                  </div>
                  <input type="submit" value="Enviar" className="p-2 bg-input text-xs md:text-lg rounded-lg " />
            </form>
      )
}

export default UserForm
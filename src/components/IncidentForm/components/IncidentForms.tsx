
import { useModalStore } from '../../../store/useModalStore'
import { CircleX } from 'lucide-react'
import UserForm from './UserForm'
import ConfirmIncident from '../../NavBar/components/ConfirmIncident'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type { Inputs } from '../../../types/inputs'
import { schemaValidation } from '../../../schemas/schemaValidation'

const IncidentForms = () => {

      // 1. Movemos el useForm aquí para tener acceso a reset
  const methods = useForm<Inputs>({
    resolver: zodResolver(schemaValidation)
  });

  // 2. Función para cerrar Y limpiar
  const handleClose = () => {
    methods.reset(); // 🧹 Limpia los inputs
    closeForm();     // 🚪 Cierra el modal
  };

      const isFormOpen = useModalStore((state) => state.isFormOpen)
      const closeForm = useModalStore((state) => state.closeForm)
      const suggestedIncident = useModalStore((state) => state.suggestedIncident)
      return (
            <section className={`absolute top-30  md:top-70 lg:top-60  ${!isFormOpen ? ' translate-y-full ' : ''} left-0 z-1000 flex justify-center w-full h-full transition-transform duration-500 `}>

                  <section className={` flex flex-col gap-6 w-full lg:w-1/2  p-4 bg-form text-label rounded-t-2xl  `}>
                        <section className=" flex justify-around items-center ">
                              <h2 className=" text-xs md:text-lg text-center ">Reportar nuevo incidente</h2>
                              <CircleX size={18} color='var(--text-label)' onClick={handleClose} />
                        </section>
                        {
                              !suggestedIncident ? <UserForm methods={methods} /> : <ConfirmIncident />
                        }

                        <div className="">

                        </div>
                  </section>
            </section>
      )
}

export default IncidentForms

import { useModalStore } from '../../../store/useModalStore'
import { CircleX } from 'lucide-react'
import UserForm from './UserForm'
import ConfirmIncident from '../../NavBar/components/ConfirmIncident'

const IncidentForms = () => {

            const isFormOpen = useModalStore((state) => state.isFormOpen)
            const closeForm = useModalStore((state) => state.closeForm)
            const suggestedIncident = useModalStore((state) => state.suggestedIncident)
      
            console.log(suggestedIncident)

    


      return (
            <section className={`  absolute top-20  ${ !isFormOpen ? ' translate-y-full ' :  ''} left-0 z-1000 flex flex-col gap-6 w-full h-full p-4 bg-form text-label rounded-t-2xl transition-transform duration-500 `}>
                  <section className=" flex justify-around items-center ">
                        <h2 className=" text-xs text-center ">Reportar nuevo incidente</h2>
                        <CircleX size={16} color='var(--text-label)' onClick={closeForm} />
                  </section>
                  {
                        !suggestedIncident ? <UserForm /> : <ConfirmIncident />
                  }
              
                  <div className="">
                       
                  </div>
            </section>
      )
}

export default IncidentForms
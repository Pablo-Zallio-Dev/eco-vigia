import { useLocation } from "react-router-dom";
import { useAuthStore } from "../../../store/useAuthStore";




const RegisterSucces = () => {

      const user = useAuthStore((state) => state.user)

      console.log(user)
      const location = useLocation();
      // Capturamos el mensaje que viene de la navegación
      const successMessage = location.state?.successMessage;
      const registeredName = location.state.username;

      return (
            <>
                  <section className=" flex flex-col justify-center items-center gap-1.5 pb-3 ">
                        <p className=" text-lg uppercase ">¡Bienvenid@ {registeredName}!</p>
                        <p className=""> {successMessage}</p>
                        <p className="">Ya puedes iniciar sesion</p>

                  </section>
            </>
      )
}

export default RegisterSucces
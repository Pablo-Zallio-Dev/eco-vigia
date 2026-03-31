import { CirclePower } from "lucide-react"
import { useAuthStore } from "../../../store/useAuthStore"

const Disconnect = () => {

      const logout = useAuthStore((state) => state.logout)

  return (
    <section className=" flex flex-col items-center " onClick={logout}>
      <CirclePower size={20} color="#A8C72E" />
      <p className="  text-xxs text-light ">Desconectar</p>
    </section>
  )
}

export default Disconnect
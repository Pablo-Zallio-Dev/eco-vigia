import { CirclePlus } from "lucide-react";
import { useAddIncident } from "../../../hooks/useAddIncident";

const BtnAdd = () => {
      const { handleAddClick } = useAddIncident();

      return (
            <button className=" absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-1800 flex flex-col items-center p-4.5 bg-teal-600 rounded-full shadow-md/80   " onClick={handleAddClick}>
                  <CirclePlus color=" var(--text-label)" />
                  <p className=" text-xs text-light ">Agregar incidencia</p>
            </button>
      )
}

export default BtnAdd
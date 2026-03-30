import { CirclePlus } from "lucide-react";
import { useAddIncident } from "../../../hooks/useAddIncident";

const BtnAdd = () => {
      const { handleAddClick } = useAddIncident();

      return (
            <button className=" absolute bottom-12 left-1/2 -translate-x-1/2 z-1800 p-4.5 bg-teal-600 rounded-full shadow-md/80   " onClick={handleAddClick}>
                  <CirclePlus color=" var(--text-label)" />
            </button>
      )
}

export default BtnAdd
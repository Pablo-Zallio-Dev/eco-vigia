import { useIncidentStore } from "../../../store/useIncidentStore";
import { useModalStore } from "../../../store/useModalStore";

const DeleteconfirmModal = () => {

      const { isDeleteModalOpen, closeDeleteModal, incidentToDelete } = useModalStore();
  const deleteIncident = useIncidentStore((state) => state.deleteIncident);

  if (!isDeleteModalOpen) return null;

  const handleConfirm = async () => {
    if (incidentToDelete) {
      await deleteIncident(incidentToDelete);
      closeDeleteModal();
    }
  };

  
 return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/50 backdrop-blur-sm ">
      <div className="bg-login p-6 rounded-lg shadow-xl max-w-sm w-full mx-4 text-light">
        <h2 className="text-xl font-bold ">¿Eliminar reporte?</h2>
        <p className="mt-2">
          Esta acción no se puede deshacer. El incidente desaparecerá del mapa para todos los usuarios.
        </p>
        
        <div className="flex justify-end gap-3 mt-6">
          <button 
            onClick={closeDeleteModal}
            className="px-4 py-2 hover:bg-gray-100 hover:text-dark rounded-md transition"
          >
            Cancelar
          </button>
          <button 
            onClick={handleConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteconfirmModal
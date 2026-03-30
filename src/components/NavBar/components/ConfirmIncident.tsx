import { useIncidentStore } from "../../../store/useIncidentStore";
import { useModalStore } from "../../../store/useModalStore";

const ConfirmIncident = () => {
      // 1. Obtenemos el incidente detectado del Store del Modal
      const suggestedIncident = useModalStore((state) => state.suggestedIncident);
      const closeForm = useModalStore((state) => state.closeForm);
      const setSuggestedIncident = useModalStore((state) => state.setSuggestedIncident);

      // 2. Obtenemos la función de confirmar del Store de Incidentes
      const confirmIncident = useIncidentStore((state) => state.confirmIncident);

      if (!suggestedIncident) return null;

      const handleConfirm = () => {
            confirmIncident(suggestedIncident.id);
            closeForm(); // Cerramos tras confirmar
      };
      return (
            <div className="flex flex-col gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-center space-y-2">
                        <h3 className="text-lg font-bold text-primary">¿Ya está reportado?</h3>
                        <p className="text-sm opacity-80">
                              Hemos encontrado un reporte de <strong>"{suggestedIncident.title}"</strong> muy cerca de tu posición.
                        </p>
                  </div>

                  <div className="flex flex-col gap-2">
                        <button
                              onClick={handleConfirm}
                              className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                        >
                              Sí, confirmar este reporte
                        </button>

                        <button
                              onClick={() => setSuggestedIncident(null)}
                              className="w-full py-2 text-xs opacity-60 underline"
                        >
                              No, es un problema diferente
                        </button>
                  </div>
            </div>
      )
}

export default ConfirmIncident
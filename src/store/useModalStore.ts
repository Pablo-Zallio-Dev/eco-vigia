import { create } from "zustand";
import type { Incident } from "../types/incidents";

interface Coordinate {
      lat: number;
      lng: number;
}

interface ModalStore {
      isFormOpen: boolean,
      getFormAndCoords: (coords: Coordinate, source: string) => void,
      triggerSource: string | null;
      coords: Coordinate | null
      closeForm: () => void
      suggestedIncident: Incident | null
      setSuggestedIncident: (incident: Incident | null) => void
}


export const useModalStore = create<ModalStore>((set) => ({
      isFormOpen: false,
      coords: null,
      triggerSource: null,
      getFormAndCoords: (coords, source) => set(() => ({
            isFormOpen: true,
            coords: coords,
            triggerSource: source    
      })),
      closeForm: () => set(() => ({
            isFormOpen: false,
            suggestedIncident: null,

      })),
      suggestedIncident: null,
      setSuggestedIncident: (incident) => set({ suggestedIncident: incident }),
}))
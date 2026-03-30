import { z } from "zod";

export const category = ["Senderos", "Limpieza", "Señalización", "Peligro"] as const;

export const schemaValidation = z.object({
      title: z.string()
            .min(1, "El titulo debe contener al menos un caracter")
            .max(15, "El titulo debe contener como maximo 15 caracter"),

      description: z
            .string()
            .min(1, "La descripcion debe contener al menos un caracter")
            .max(150, "No puede susperar los 150 carateres"),
      category: z.enum(category, {
            error: () => ({ message: ' Debe seleccionar una categoria ' })
      }),
});

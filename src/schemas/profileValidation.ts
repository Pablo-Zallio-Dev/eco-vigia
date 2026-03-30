import {z} from "zod"

export const profileValidation = z.object({
      user: z.string()
            .max(12, "El usuario debe contener como maximo 12 caracteres."),
      userId: z.string()
            .min(5, "La contraseña debe contener al menos 5 caracteres")
})

export type ProfileFormData = z.infer<typeof profileValidation>;
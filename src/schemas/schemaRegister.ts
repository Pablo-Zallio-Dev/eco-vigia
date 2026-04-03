import {z} from "zod"

export const registerValidation = z.object({
      name: z.string(),
      surname: z.string(),
      user: z.string()
            .max(12, "El usuario debe contener como maximo 12 caracteres."),
      userId: z.string()
            .min(7, "La contraseña debe contener al menos 7 caracteres")
})

export type RegisterFormData = z.infer<typeof registerValidation>;
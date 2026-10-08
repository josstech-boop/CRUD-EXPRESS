import { z } from 'zod'

const createUserSchema = z.object({
    name: z.string("El password debe ser una cadena de texto").min(1, "Al menos debe tener un caracter"),
    email: z.email("Debe ser un correo valido"),
    password: z.string("El password debe ser una cadena de texto").min(6, "Al menos debe de tener 6 caracteres")
})

export { createUserSchema }
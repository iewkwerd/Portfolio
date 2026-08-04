import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().trim().min(1, { message: "El nombre es obligatorio" }),
    email: z.string().trim().min(1, { message: "El correo es obligatorio" }).email({ message: "Formato de correo inválido" }),
    subject: z.string().trim().min(1, { message: "El asunto es obligatorio" }),
    message: z.string().trim().min(10, { message: "El mensaje debe tener al menos 10 caracteres" })
});

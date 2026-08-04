import { contactSchema } from "./contact.schema.js";
import { sendEmail } from "./contact.service.js";

export const sendContactMessage = async (req, res) => {
    try {
        const validationResult = contactSchema.safeParse(req.body);

        if (!validationResult.success) {
            return res.status(400).json({
                success: false,
                errors: validationResult.error.errors,
            });
        }

        await sendEmail(validationResult.data);

        return res.status(200).json({
            success: true,
            message: "Mensaje enviado correctamente",
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al enviar el mensaje",
        });
    }
};
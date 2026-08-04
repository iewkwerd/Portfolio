import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { contactSchema } from "../contact.schema";
import { sendContactMessage } from "../contact.service";

export const useContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        }
    });

    const onSubmit = async (data) => {
        try {
            await sendContactMessage(data);

            toast.success("Mensaje enviado correctamente");

            reset();

        } catch (error) {
            toast.error("No se pudo enviar el mensaje.");
        }
    };

    return {
        register,
        handleSubmit: handleSubmit(onSubmit),
        errors,
        isSubmitting,
    };
};
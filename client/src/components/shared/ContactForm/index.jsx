import { LuLoaderCircle } from "react-icons/lu";
import { useContactForm } from "./hooks/useContactForm";

const ContactForm = () => {
    const { register, handleSubmit, errors, isSubmitting } = useContactForm();

    return (
        <form onSubmit={handleSubmit}
            className="flex flex-col space-y-6">

            <div>
                <label className="block md:text-lg text-white font-light mb-2">
                    Nombre
                </label>

                <input
                    type="text"
                    {...register("name")}
                    placeholder="Alex Turner"
                    className="
                    w-full bg-surface md:text-lg text-white font-light border-none rounded px-4 py-3 
                    focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                />

                {errors.name && (
                    <span className="text-red-400 text-sm">
                        {errors.name.message}
                    </span>
                )}
            </div>


            <div>
                <label className="block md:text-lg text-white font-light mb-2">
                    Correo
                </label>

                <input
                    type="email"
                    {...register("email")}
                    placeholder="arcticmonkeys@gmail.com"
                    className="
                    w-full bg-surface md:text-lg text-white font-light border-none rounded px-4 py-3 
                    focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                />

                {errors.email && (
                    <span className="text-red-400 text-sm">
                        {errors.email.message}
                    </span>
                )}
            </div>


            <div>
                <label className="block md:text-lg text-white font-light mb-2">
                    Asunto
                </label>

                <input
                    type="text"
                    {...register("subject")}
                    placeholder="¿En qué puedo ayudarte?"
                    className="
                    w-full bg-surface md:text-lg text-white font-light border-none rounded px-4 py-3 
                    focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                />

                {errors.subject && (
                    <span className="text-red-400 text-sm">
                        {errors.subject.message}
                    </span>
                )}
            </div>


            <div>
                <label className="block md:text-lg text-white font-light mb-2">
                    Mensaje
                </label>

                <textarea
                    rows="4"
                    {...register("message")}
                    placeholder="Cuéntame más..."
                    className="
                    w-full bg-surface md:text-lg text-white font-light border-none rounded px-4 py-3 
                    focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                />

                {errors.message && (
                    <span className="text-red-400 text-sm">
                        {errors.message.message}
                    </span>
                )}
            </div>


            <div className="pt-2">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                    bg-accent text-sm md:text-base text-black font-bold uppercase 
                    px-8 py-3 rounded-full hover:bg-white transition-colors 
                    cursor-pointer flex items-center justify-center min-w-[120px]"
                >
                    {isSubmitting ? (
                        <LuLoaderCircle size="24" className="animate-spin" />
                    ) : (
                        "Enviar"
                    )}
                </button>
            </div>

        </form>
    );
};

export default ContactForm;
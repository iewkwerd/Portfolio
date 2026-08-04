import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

import { env } from "@/api/config/env";

import ContactForm from "./ContactForm";

const Footer = () => {
    return (
        <div className="border-t border-surface overflow-hidden">
            <motion.footer id="contact"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-7xl flex flex-col md:flex-row justify-between gap-12 py-12 md:py-24 px-5 md:px-8 mx-auto">

                <div className="w-full md:w-1/2 flex flex-col justify-start">
                    <h2 className="text-[43px] md:text-[76px] text-white font-display tracking-wide uppercase">Contáctame</h2>

                    <div className="flex flex-col space-y-2 md:text-lg text-secondary font-light mt-6 mb-12">
                        <p>
                            Envíame un mensaje a{" "}
                            {env.CONTACT_EMAIL ? (
                                <a
                                    href={`mailto:${env.CONTACT_EMAIL}`}
                                    className="text-white border-b border-white"
                                >
                                    {env.CONTACT_EMAIL}
                                </a>
                            ) : (
                                <span className="text-secondary">
                                    No se ha proporcionado un correo de contacto.
                                </span>
                            )}
                        </p>
                        <p>
                            Descarga mi{" "}
                            <a href="/documents/CV_Yanelly-Michelena.pdf"
                                download
                                className="text-white 
                border-b border-white">Currículum Vitae</a>
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a
                            href="https://www.linkedin.com/in/iewkwerd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:text-white transition-colors" title="LinkedIn">
                            <FaLinkedinIn size={24} />
                        </a>
                        <a
                            href="https://github.com/iewkwerd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:text-white transition-colors" title="GitHub">
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://wa.me/51916096137"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-accent hover:text-white transition-colors"
                            title="WhatsApp"
                        >
                            <FaWhatsapp size={24} />
                        </a>
                    </div>
                </div>

                <div className="w-full md:w-1/2 md:max-w-md">
                    <ContactForm />
                </div>
            </motion.footer>
        </div>
    );
};

export default Footer;

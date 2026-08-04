import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl w-full flex flex-col md:flex-row px-5 md:px-8 py-12 md:py-24 gap-12 mx-auto"
        >
            <div className="w-full md:w-[40%]">
                <h2 className="text-[43px] md:text-[76px] text-white font-display tracking-wide uppercase">
                    Sobre Mí
                </h2>
            </div>

            <div className="w-full md:w-[60%] flex flex-col">
                <p className="text-[28px] md:text-3xl text-white mb-6">
                    Como Desarrolladora Full Stack, construyo aplicaciones web escalables centradas en el usuario.
                </p>
                <p className="md:text-lg text-secondary font-light mb-10">
                    Soy egresada de la carrera de Desarrollo de Sistemas de Información en IDAT. Me especializo en el desarrollo de aplicaciones web utilizando tecnologías como React, Java y PostgreSQL. Me gusta transformar ideas en experiencias digitales que combinan funcionalidad y personalidad.
                    <br /><br />Fuera del mundo de la programación, disfruto jugar League of Legends.
                </p>

                <div className="flex items-center justify-start space-x-4">
                    <a
                        href="/documents/CV_Yanelly-Michelena.pdf"
                        download
                        className="bg-accent text-sm md:text-base text-black font-bold uppercase px-8 py-3 rounded-full hover:bg-white transition-colors cursor-pointer">
                        Descargar CV
                    </a>

                    <a
                        href="https://www.linkedin.com/in/iewkwerd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 md:w-12 md:h-12 bg-surface rounded-full flex items-center justify-center text-accent hover:text-white transition-colors flex-shrink-0"
                        title="LinkedIn"
                    >
                        <FaLinkedinIn size={18} />
                    </a>

                    <a
                        href="https://github.com/iewkwerd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 md:w-12 md:h-12 bg-surface rounded-full flex items-center justify-center text-accent hover:text-white transition-colors flex-shrink-0"
                        title="GitHub"
                    >
                        <FaGithub size={18} />
                    </a>

                    <a
                        href="https://wa.me/51916096137"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 md:w-12 md:h-12 bg-surface rounded-full flex items-center justify-center text-accent hover:text-white transition-colors flex-shrink-0"
                        title="WhatsApp"
                    >
                        <FaWhatsapp size={18} />
                    </a>
                </div>
            </div>
        </motion.section>
    )
};

export default AboutSection;
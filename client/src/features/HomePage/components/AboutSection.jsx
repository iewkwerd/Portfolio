import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <div className="w-full border-t border-surface overflow-hidden">
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

                <div className="w-full md:w-[60%] flex flex-col justify-center">
                    <p className="text-[28px] md:text-3xl text-white mb-6">
                        Como Desarrolladora Full Stack, construyo aplicaciones web escalables centradas en el usuario.
                    </p>
                    <p className="md:text-lg text-secondary font-light mb-10">
                        Soy egresada de la carrera de Desarrollo de Sistemas de Información en IDAT. Me especializo en el desarrollo de aplicaciones web utilizando tecnologías como React, Java y PostgreSQL. Me gusta transformar ideas en experiencias digitales que combinan funcionalidad y personalidad.
                        <br /><br />Fuera del mundo de la programación, disfruto jugar League of Legends.
                    </p>
                    <a
                        href="/about"
                        className="text-sm md:text-base text-accent tracking-widest border-b border-accent self-start uppercase hover:text-white hover:border-white transition-colors"
                    >
                        Más Sobre Mí
                    </a>
                </div>
            </motion.section>
        </div>
    )
};

export default AboutSection;
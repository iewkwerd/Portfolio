import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

import profilePhoto from "../assets/images/profile-photo.jpg";

const HeroSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:max-w-7xl flex flex-col md:flex-row items-center gap-12 px-5 py-12 md:px-8 md:py-24 mx-auto"
        >

            <div className="w-full text-start">
                <h1 className="text-[57px] md:text-[101px] text-white font-display tracking-wide leading-[110%] uppercase">
                    Hola, Soy <br className="hidden sm:block" /> Yanelly Michelena.
                </h1>

                <p className="md:text-lg text-secondary font-light mt-6 mb-10">
                    Desarrolladora Full Stack con enfoque en aplicaciones web para Fintech y E-Commerce.
                </p>

                <div className="flex items-center justify-start space-x-4">
                    <a
                        href="#contact"
                        className="bg-accent text-sm md:text-base text-black font-bold uppercase px-8 py-3 rounded-full hover:bg-white transition-colors cursor-pointer">
                        Contáctame
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

            <div className="w-full max-w-[600px] h-[350px] md:h-[700px] overflow-hidden rounded-2xl">
                <img
                    src={profilePhoto}
                    alt="Yanelly Michelena"
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
            </div>
        </motion.section>
    )
};

export default HeroSection;
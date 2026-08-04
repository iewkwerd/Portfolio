import { motion } from "framer-motion";

import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";


const ProjectCard = ({ title, image, description, technologies }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center md:flex-row gap-12 md:gap-24"
        >
            <div className="w-full md:max-w-[600px] h-[350px] md:h-[600px] bg-surface flex items-center justify-center rounded-2xl px-12 py-32">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl">
                    <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>

            <div className="w-full flex flex-col justify-center">
                <h3 className="text-2xl md:text-[32px] text-white mb-4">
                    {title}
                </h3>

                <p className="md:text-lg text-secondary font-light mb-10">
                    {description}
                </p>

                <div className="border-b border-surface py-5">
                    <p className="text-white uppercase">Detalles</p>
                </div>

                <div className="flex justify-between gap-12 md:gap-24 border-b border-surface py-5 mb-16">
                    <span className="text-white">Tecnologías</span>

                    <ul className="flex flex-wrap justify-end gap-2 
                    text-secondary">
                        {technologies.map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                </div>

                <div className="flex space-x-6">
                    <a
                        href="#"
                        className="flex items-center gap-2 text-sm md:text-base text-accent tracking-widest border-b border-accent self-start uppercase hover:text-white hover:border-white transition-colors"
                    >
                        Demo en Vivo
                        <FaArrowRight />
                    </a>

                    <a
                        href="#"
                        className="flex items-center gap-2 text-sm md:text-base text-accent tracking-widest border-b border-accent self-start uppercase hover:text-white hover:border-white transition-colors"
                    >
                        Ver en GitHub
                        <FaGithub />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
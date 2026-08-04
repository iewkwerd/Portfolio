import { motion } from "framer-motion";

import { technologies } from "../data/technologies";

const TechnologiesSection = () => {
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
                    Tecnologías
                </h2>
            </div>

            <div className="w-full md:w-[60%] flex flex-col">
                <p className="md:text-lg text-secondary font-light mb-10">
                    Este es el conjunto de tecnologías y herramientas con las que trabajo habitualmente. Me mantengo en constante aprendizaje para incorporar nuevas tecnologías que me permitan ampliar mis conocimientos.
                </p>

                <div className="flex flex-wrap gap-2 md:gap-4">
                    {technologies.map((skill) => (
                        <span
                            key={skill}
                            className="text-sm md:text-base text-white border border-surface rounded-full px-12 py-4 uppercase"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

        </motion.section>
    )
}

export default TechnologiesSection;
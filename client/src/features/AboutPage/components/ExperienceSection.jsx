import { motion } from "framer-motion";

import { experiences } from "../data/experiences";

const ExperienceSection = () => {
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
                    <h2 className="text-[43px] md:text-[76px] text-white font-display tracking-wide leading-[110%] uppercase">
                        Experiencia Laboral
                    </h2>
                </div>

                <div className="w-full md:w-[60%] space-y-12 md:space-y-24">
                    {experiences.map((experience) => (
                        <div className="group" key={experience.company}>
                            <div className="flex flex-col md:flex-row justify-between items-baseline">
                                <h3 className="text-lg md:text-2xl text-white mb-2">
                                    {experience.role}
                                </h3>

                                <span className="md:text-lg text-secondary font-light">
                                    {experience.date}
                                </span>
                            </div>

                            <p className="md:text-lg text-accent font-light mb-4">
                                {experience.company}
                            </p>

                            <p className="md:text-lg text-secondary font-light">
                                {experience.description}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.section>
        </div>
    )
}

export default ExperienceSection;
import { motion } from "framer-motion";

import AboutSection from './components/AboutSection';
import TechnologiesSection from './components/TechnologiesSection';
import ExperienceSection from './components/ExperienceSection';

import aboutPhoto from "./assets/images/about-photo.png";

export default function AboutPage() {
    return (
        <div className="w-full flex flex-col items-center">
            <AboutSection />

            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl px-5 md:px-8"
            >
                <div className='w-full max-w-[1224px] h-[350px] md:h-[700px] overflow-hidden rounded-2xl'>
                    <img
                        src={aboutPhoto}
                        alt="Yanelly Michelena"
                        loading="lazy"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
            </motion.section>

            <TechnologiesSection />
            <ExperienceSection />
        </div>
    );
};

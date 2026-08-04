import ProjectCard from "./ProjectCard";

import { projects } from "../data/projects";

const ProjectSection = () => {
    return (
        <div className="w-full border-t border-surface">
            <section className="max-w-7xl w-full flex flex-col px-5 md:px-8 py-12 md:py-24 gap-12 mx-auto">

                <div className="mb-12">
                    <h2 className="text-[43px] md:text-[76px] text-white font-display tracking-wide uppercase">
                        Proyectos
                    </h2>

                    <p className="md:text-lg text-secondary font-light">
                        Estos son algunos proyectos que representan mi pasión por crear ideas innovadoras.
                    </p>
                </div>

                <div className="flex flex-col items-center space-y-12 md:space-y-24">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            {...project}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
};

export default ProjectSection;
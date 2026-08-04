import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";

export default function HomePage() {
    return (
        <div className="w-full flex flex-col items-center">
            <HeroSection />
            <ProjectSection />
            <AboutSection />
        </div>
    );
}
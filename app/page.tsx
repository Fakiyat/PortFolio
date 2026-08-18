import dynamic from "next/dynamic";
import Hero from "./components/hero/Hero";

// Dynamic Code-Splitting for Below-The-Fold Sections to Optimize Initial Bundle & LCP
const About = dynamic(() => import("./components/about/About"));
const Skills = dynamic(() => import("./components/skills/Skills"));
const Project = dynamic(() => import("./components/projects/Project"));
const Experience = dynamic(() => import("./components/experience/experience"));
const Contact = dynamic(() => import("./components/contact/Contact"));

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Contact />
    </div>
  );
}

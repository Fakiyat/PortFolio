import Hero from "./components/hero/Hero";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

import Project from "./components/projects/Project";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/experience";

function Home() {
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

export default Home;

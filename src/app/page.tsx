import About from "@/components/section/about/About";
import Contact from "@/components/section/contact/Contact";
import Experience from "@/components/section/experience/Experience";
import Hero from "@/components/section/hero/Hero";
import Projects from "@/components/section/projects/Projects";
import Skills from "@/components/section/skills/Skills";


export default function Home() {
  return (
    <div className="h-screen ">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects/>
      <Contact />
    </div>
  );
}

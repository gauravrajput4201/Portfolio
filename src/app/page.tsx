import About from "@/components/section/about/About";
import Contact from "@/components/section/contact/Contact";
import Experience from "@/components/section/experience/Experience";
import Hero from "@/components/section/hero/Hero";
import Projects from "@/components/section/projects/Projects";
import LoopLogo from "@/components/section/skills/LoopLogo";
import Skills from "@/components/section/skills/Skills";


export default function Home() {
  return (
    <div className="h-screen ">
      <Hero />
      <About />
      <Skills />
      {/* <LoopLogo /> */}
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

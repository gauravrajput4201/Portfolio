import About from "@/components/section/about/About";
import Contact from "@/components/section/contact/Contact";
import Experience from "@/components/section/experience/Experience";
import Hero from "@/components/section/hero/Hero";
import Projects from "@/components/section/projects/Projects";
import Stats from "@/components/section/stats/Stats";
import Skills from "@/components/section/skills/Skills";
import Navbar from "@/components/Navbar";
import LoopLogo from "@/components/section/skills/LoopLogo";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen ">
        <Hero />
        <About />
        <Skills />
        <LoopLogo />
        <Experience />
        <Projects />
        <Stats />
        <Contact />
      </div>
    </>
  );
}

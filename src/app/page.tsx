import About from "@/components/section/About";
import Contact from "@/components/section/Contact";
import Experience from "@/components/section/Experience";
import Hero from "@/components/section/Hero";
import Projects from "@/components/section/Projects";
import Skills from "@/components/section/Skills";


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

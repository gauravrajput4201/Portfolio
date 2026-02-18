
"use client";


import { useRef } from 'react';
import { motion, useScroll, useTransform, easeInOut } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { personalInfo } from '@/data/mockData';

const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeInOut,
      },
    },
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-8 pt-24 pb-16 relative overflow-hidden"
    >
      <motion.div
        className="max-w-[1400px] w-full grid gap-16 items-center grid-cols-1 lg:grid-cols-2"
        style={{ opacity, scale, y }}
      >
        <motion.div
          className="z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex items-center gap-2 text-[1.5rem] text-white/70 mb-4"
            variants={itemVariants}
          >
            <span className="inline-block animate-[wave_2s_ease-in-out_infinite]">
              👋
            </span>{" "}
            Hello, I'm
          </motion.div>

          <motion.h1
            className="font-extrabold text-white tracking-tight mb-4 leading-tight text-[clamp(3rem,8vw,5rem)]"
            variants={itemVariants}
          >
            {personalInfo.name.split(" ").map((word, index) => (
              <span key={index}>
                {word.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.1 + i * 0.05,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                {index === 0 && " "}
              </span>
            ))}
          </motion.h1>

          <motion.div
            className="font-semibold mb-6 text-[clamp(1.5rem,4vw,2.5rem)]"
            variants={itemVariants}
          >
            <motion.span
              className="bg-gradient-to-r from-[#06b6d4] via-[#8b5cf6] via-[#ec4899] via-[#8b5cf6] to-[#06b6d4] bg-[length:200%_auto] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {personalInfo.title}
            </motion.span>
          </motion.div>

          <motion.p
            className="text-[1.25rem] text-white/80 mb-4 font-medium"
            variants={itemVariants}
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.p
            className="text-[1.1rem] text-white/60 leading-relaxed mb-10 max-w-[600px]"
            variants={itemVariants}
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-8"
            variants={itemVariants}
          >
            <motion.button
              className="py-4 px-8 text-[1rem] font-semibold rounded-full border-none cursor-pointer transition-all duration-300 inline-flex items-center gap-2 bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] text-white shadow-lg shadow-cyan-500/30"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(6, 182, 212, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </motion.button>
            <motion.button
              className="py-4 px-8 text-[1rem] font-semibold rounded-full border-2 border-[#06b6d4] cursor-pointer transition-all duration-300 inline-flex items-center gap-2 bg-transparent text-white hover:bg-cyan-500/10 hover:border-[#8b5cf6]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </motion.button>
            <a
              href="/GauravSingh.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#06b6d4] text-white bg-transparent hover:bg-cyan-500/10 hover:border-[#8b5cf6] text-base font-medium transition-all duration-300"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div className="flex gap-6" variants={itemVariants}>
            <motion.a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 transition-all duration-300 flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/20 hover:text-[#06b6d4] hover:border-[#06b6d4] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 transition-all duration-300 flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/20 hover:text-[#06b6d4] hover:border-[#06b6d4] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="text-white/70 transition-all duration-300 flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/20 hover:text-[#06b6d4] hover:border-[#06b6d4] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex items-center justify-center h-0 lg:h-[600px] lg:order-none order-first"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="absolute rounded-full blur-[40px] opacity-60 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(6,182,212,0.6)_0%,rgba(6,182,212,0)_70%)] top-[10%] left-[20%]"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute rounded-full blur-[40px] opacity-60 w-[250px] h-[250px] bg-[radial-gradient(circle,rgba(139,92,246,0.6)_0%,rgba(139,92,246,0)_70%)] bottom-[20%] right-[15%]"
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute rounded-full blur-[40px] opacity-60 w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(236,72,153,0.5)_0%,rgba(236,72,153,0)_70%)] top-[40%] right-[30%]"
            animate={{
              y: [0, -15, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 cursor-pointer transition-all duration-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        onClick={() => scrollToSection("about")}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={24} />
        </motion.div>
        <span className="text-sm uppercase tracking-wider">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;

"use client";
import { useRef } from 'react';
import { motion, useInView, easeOut, easeInOut, useScroll, useTransform } from 'framer-motion';

import { skills } from '@/data/mockData';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end start"],
  // });

  // const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  // const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  // const y = useTransform(scrollYProgress, [1, 1], [0, 100]);

  const categories = {
    frontend: skills.filter((s) => s.category === 'frontend'),
    language: skills.filter((s) => s.category === 'language'),
    styling: skills.filter((s) => s.category === 'styling'),
    animation: skills.filter((s) => s.category === 'animation'),
    '3d': skills.filter((s) => s.category === '3d'),
    state: skills.filter((s) => s.category === 'state'),
    backend: skills.filter((s) => s.category === 'backend'),
    tools: skills.filter((s) => s.category === 'tools'),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  return (
    <section id="skills" ref={ref} className="py-24 px-8 relative bg-black/30" >
      <motion.div
        className="max-w-350 mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        // style={{ opacity, scale, y }}
      >
        <motion.div className="mb-8" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white text-center">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-[#06b6d4] to-[#8b5cf6] mx-auto rounded my-4" />
          <p className="text-[1.125rem] text-white/60 mt-4 text-center">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 transition-all duration-300 cursor-pointer hover:bg-white/10 hover:border-[#06b6d4] flex flex-col items-center"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 12px 40px rgba(6, 182, 212, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>
              {/* <div className="flex justify-between items-center mb-4"> */}
                {/* <span className="text-[1rem] font-semibold text-[#06b6d4]">
                  {skill.level}%
                </span> */}
              {/* </div> */}
              {/* <div className="w-full h-2 bg-white/10 rounded overflow-hidden relative">
                <motion.div
                  className="h-full rounded bg-linear-to-r from-[#06b6d4] to-[#8b5cf6] relative overflow-hidden"
                  initial={{ width: 0 }}
                  animate={
                    isInView ? { width: `${skill.level}%` } : { width: 0 }
                  }
                  transition={{
                    duration: 1,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div> */}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

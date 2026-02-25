"use client";
import { useRef } from 'react';
import { motion, useInView, easeOut, easeInOut, useScroll, useTransform } from 'framer-motion';

import { skills } from '@/data/mockData';
import LoopLogo from './LoopLogo';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
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
    <>
      <section
        id="skills"
        ref={ref}
        className="py-24 px-8 relative bg-black/30"
      >
        <motion.div
          className="max-w-350 mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
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

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white/5 w-67 backdrop-blur-md border border-white/10 rounded-4xl p-4 transition-all duration-300 cursor-pointer hover:bg-white/10 hover:border-[#06b6d4] text-center"
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
     
    </>
  );
};

export default Skills;

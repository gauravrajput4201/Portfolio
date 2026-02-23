"use client";
import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { easeOut } from 'framer-motion';
import { MapPin, Calendar, Award } from 'lucide-react';
import { personalInfo } from '@/data/mockData';

const About = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [1, 1], [0, 100]);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  // via-[#8b5cf6]
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-8 relative"
    >
      <motion.div
        className="max-w-375 mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        style={{ opacity, scale, y }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold text-white mb-4 tracking-tight">About Me</h2>
          <div className="w-20 h-1 bg-linear-to-r from-[#06b6d4] to-[#8b5cf6] mx-auto rounded"></div>
        </motion.div>


        <div className="grid grid-cols-1 gap-16 items-center lg:grid-cols-2">
          <motion.div className="flex flex-col gap-6" variants={itemVariants}>
            <motion.p className="text-lg leading-8 text-white/70" variants={itemVariants}>
              {personalInfo.bio}
            </motion.p>

            <motion.p className="text-lg leading-8 text-white/70" variants={itemVariants}>
              I specialize in building exceptional digital experiences that are fast,
              accessible, and visually stunning. My expertise lies in translating complex
              requirements into elegant, maintainable code that delivers real business value.
            </motion.p>

            <motion.p className="text-lg leading-8 text-white/70" variants={itemVariants}>
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge through technical writing and
              mentoring.
            </motion.p>

            <motion.div className="grid gap-4 mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3" variants={itemVariants}>
              <motion.div
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 flex gap-4 items-start transition-all duration-300 hover:bg-white/10 hover:border-[#06b6d4] hover:shadow-[0_8px_32px_rgba(6,182,212,0.2)] cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <MapPin className="text-[#06b6d4] shrink-0" size={24} />
                <div>
                  <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-base text-white font-medium">{personalInfo.location}</p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 flex gap-4 items-start transition-all duration-300 hover:bg-white/10 hover:border-[#06b6d4] hover:shadow-[0_8px_32px_rgba(6,182,212,0.2)] cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Calendar className="text-[#06b6d4] shrink-0" size={24} />
                <div>
                  <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-1">Availability</h4>
                  <p className="text-base text-white font-medium">{personalInfo.availability}</p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 flex gap-4 items-start transition-all duration-300 hover:bg-white/10 hover:border-[#06b6d4] hover:shadow-[0_8px_32px_rgba(6,182,212,0.2)] cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Award className="text-[#06b6d4] shrink-0" size={24} />
                <div>
                  <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-1">Experience</h4>
                  <p className="text-base text-white font-medium">3.5+ Years</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-125"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <motion.div
                className="absolute top-[-50%] left-[-50%] right-[-50%] bottom-[-50%] bg-[radial-gradient(circle,rgba(6,182,212,0.3)_0%,transparent_70%)] z-1 pointer-events-none"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80"
                alt="Coding workspace"
                className="w-full h-full object-cover relative z-2"
              />
              <div className="absolute inset-0 bg-linear-to-br from-[#06b6d4]/20 to-[#8b5cf6]/20 z-3" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

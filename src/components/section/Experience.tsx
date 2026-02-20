"use client";

import React, { useRef } from 'react';
import { easeOut, motion, useInView } from 'framer-motion';

import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { experience } from '@/data/mockData';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  

  return (
    <section
      id="experience"
      ref={ref}
      className="relative px-4 py-24 sm:px-6 lg:px-8 bg-transparent"
    >
      <motion.div
        className="max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="mb-12 text-center" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-2">
            Work Experience
          </h2>
          <div className="w-16 h-1 mx-auto bg-linear-to-r from-cyan-400 to-violet-500 rounded-full mb-4" />
          <p className="text-lg text-white/70">
            My professional journey and key accomplishments
          </p>
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-linear-to-b from-cyan-400 to-violet-500 rounded-full z-0 sm:left-4" />
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative pl-20 mb-12 sm:pl-12"
              variants={itemVariants}
            >
              <motion.div
                className="absolute left-6 top-0 w-6 h-6 bg-linear-to-br from-cyan-400 to-violet-500 rounded-full border-4 border-neutral-900 z-10 cursor-pointer sm:left-2"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute -inset-1.5 bg-cyan-400 rounded-full opacity-50"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              </motion.div>

              <motion.div
                className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 transition-all duration-300 hover:bg-white/10 hover:border-cyan-400 shadow-lg"
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 12px 40px rgba(6, 182, 212, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4 flex items-start gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-cyan-400 to-violet-500 rounded-lg flex items-center justify-center text-white shrink-0">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.position}
                    </h3>
                    <h4 className="text-cyan-400 font-medium text-base">
                      {exp.company}
                    </h4>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 mb-4 text-sm text-white/60">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="text-violet-400" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-violet-400" />
                    {exp.location}
                  </span>
                </div>

                <p className="text-base text-white/70 mb-6">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h5 className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-3">
                    Key Achievements:
                  </h5>
                  <ul className="flex flex-col gap-3">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3 text-[0.97rem] text-white/70"
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{ delay: index * 0.3 + i * 0.1 }}
                      >
                        <CheckCircle
                          size={16}
                          className="text-emerald-500 shrink-0 mt-1"
                        />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-2xl text-cyan-400 font-medium text-sm transition-all duration-300 cursor-pointer hover:bg-cyan-400/20 hover:border-cyan-400"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{ delay: index * 0.3 + i * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;

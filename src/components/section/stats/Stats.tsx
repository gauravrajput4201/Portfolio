"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { easeOut } from 'framer-motion';
import { Code2, Boxes, Rocket, Award } from 'lucide-react';

const Stats = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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

  const stats = [
    {
      id: 1,
      icon: Code2,
      number: "10000+",
      label: "Lines of Code",
      description: "Clean, maintainable code across multiple projects",
    },
    {
      id: 2,
      icon: Boxes,
      number: "500+",
      label: "Reusable Components",
      description: "Modular and scalable component library",
    },
    {
      id: 3,
      icon: Rocket,
      number: "5+",
      label: "Production Projects",
      description: "Delivered and deployed to real users",
    },
    {
      id: 4,
      icon: Award,
      number: "100%",
      label: "Client Satisfaction",
      description: "Committed to exceeding expectations",
    },
  ];

  return (
    <section
      id="stats"
      ref={ref}
      className="relative pb-24 px-8 bg-linear-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.15)]"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold text-white mb-4 tracking-tight">
            My Achievements
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-[#06b6d4] to-[#8b5cf6] mx-auto rounded" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.id}
                className="bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 text-center transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(6,182,212,0.5)] hover:shadow-[0_12px_40px_rgba(6,182,212,0.2)]"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="flex justify-center mb-6"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-4 bg-linear-to-r from-cyan-400 to-violet-500 rounded-full">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                <motion.h3
                  className="text-4xl font-bold bg-linear-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent mb-2"
                  variants={itemVariants}
                >
                  {stat.number}
                </motion.h3>
                <motion.p
                  className="text-lg font-semibold text-white mb-3"
                  variants={itemVariants}
                >
                  {stat.label}
                </motion.p>
                <motion.p
                  className="text-sm text-white/60"
                  variants={itemVariants}
                >
                  {stat.description}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;

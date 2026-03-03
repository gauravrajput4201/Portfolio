"use client";

import { useRef, useState } from 'react';
import { easeOut, motion, useInView, useScroll, useTransform } from 'framer-motion';
import { projects } from '@/data/mockData';
import { ExternalLink, Github } from 'lucide-react';
import ProjectModal from './ProjectModal';
import Image from 'next/image';

export type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  category: string;
  year: string;
  link?: string;
  github?: string;
  featured?: boolean;
  color?: string;
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 20], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
      id="projects"
      ref={ref}
      className="relative py-24 px-8 bg-[rgba(0,0,0,0.3)]"
    >
      <motion.div
        className="max-w-350 mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ opacity, scale, y }}
      >
        <motion.div className="mb-12 text-center" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-2">
            Featured Projects
          </h2>
          <div className="w-16 h-1 mx-auto bg-linear-to-r from-cyan-400 to-violet-500 rounded-full mb-4" />
          <p className="text-lg text-white/70">
            A selection of my recent work and side projects
          </p>
        </motion.div>
        <div
          className="grid gap-8 mt-12"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.1)] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(6,182,212,0.5)] hover:shadow-[0_12px_40px_rgba(6,182,212,0.2)] group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(project)}
            >
              <motion.div
                className="relative w-full h-62.5 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `linear-gradient(135deg, ${project.color}99 0%, ${project.color}66 100%)` }}
                >
                  <motion.div
                    className="px-8 py-4 bg-[rgba(255,255,255,0.95)] text-[#0a0a0a] font-semibold rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    View Details
                  </motion.div>
                </div>
                {project.featured && (
                  <span className="absolute top-4 right-4 px-2 py-1 bg-linear-to-br from-[#06b6d4] to-[#8b5cf6] text-white text-xs font-semibold rounded-2xl uppercase tracking-wider">Featured</span>
                )}
              </motion.div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="text-sm text-white/50 font-medium">{project.year}</span>
                </div>
                <p className="text-base text-white/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-[rgba(6,182,212,0.15)] border border-[rgba(6,182,212,0.3)] rounded text-[#06b6d4] font-medium text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* <div className="flex gap-4 pt-4 border-t border-[rgba(255,255,255,0.1)]">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded text-white text-sm font-medium transition-all duration-300 hover:bg-[rgba(6,182,212,0.2)] hover:border-[#06b6d4] hover:text-[#06b6d4]"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded text-white text-sm font-medium transition-all duration-300 hover:bg-[rgba(6,182,212,0.2)] hover:border-[#06b6d4] hover:text-[#06b6d4]"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} />
                      Code
                    </motion.a>
                  )}
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;

"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { Project } from "./Projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-[rgba(0,0,0,0.9)] backdrop-blur-[10px] flex items-center justify-center z-9999999 p-8 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-[rgba(20,20,30,0.95)] border border-[rgba(255,255,255,0.1)] rounded-[1.5rem] max-w-200 w-full max-h-[80dvh] overflow-y-auto relative"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 w-10 h-10 bg-[rgba(255,255,255,0.1)] border-none rounded-full text-white flex items-center justify-center transition-all duration-300 z-10 hover:bg-[rgba(255,255,255,0.2)] hover:rotate-90 cursor-pointer"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-75 object-cover rounded-t-[1.5rem]"
        />
        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-base text-[#06b6d4] font-medium mb-6">
            {project.category}
          </p>
          <p className="text-lg text-white/70 mb-8">
            {project.longDescription}
          </p>
          <div className="mb-8">
            <h4 className="text-base font-semibold text-white/80 mb-4">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-[rgba(6,182,212,0.15)] border border-[rgba(6,182,212,0.3)] rounded text-[#06b6d4] font-medium text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 bg-linear-to-br from-[#06b6d4] to-[#8b5cf6] text-white border-none shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-0.5"
              >
                <ExternalLink size={20} />
                Visit Website
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 bg-transparent text-white border-2 border-[#06b6d4] hover:bg-[rgba(6,182,212,0.1)]"
              >
                <Github size={20} />
                View Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;

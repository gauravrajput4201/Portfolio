import { motion } from "framer-motion";
import { i } from "framer-motion/client";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Interface } from "readline";

interface SocialLinksType {
  github: string;
  linkedin: string;
  twitter: string;
}

interface SocialLinksProps {
  links: SocialLinksType;
}

const SocialLinks = ({ links }: SocialLinksProps) => {
  const { github, linkedin, twitter } = links;
  return (
    <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.1)] rounded-3xl p-8 mt-4">
      <h3 className="text-[1.25rem] font-semibold text-white mb-6 text-center">
        Connect With Me
      </h3>
      <div className="flex flex-col gap-4">
        <motion.a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl text-white text-[1rem] font-medium transition-all duration-300 hover:bg-[rgba(6,182,212,0.1)] hover:border-[#06b6d4] hover:text-[#06b6d4]"
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ duration: 0.3 }}
        >
          <Github size={24} />
          <span>GitHub</span>
        </motion.a>
        <motion.a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl text-white text-[1rem] font-medium transition-all duration-300 hover:bg-[rgba(6,182,212,0.1)] hover:border-[#06b6d4] hover:text-[#06b6d4]"
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ duration: 0.3 }}
        >
          <Linkedin size={24} />
          <span>LinkedIn</span>
        </motion.a>
        <motion.a
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl text-white text-[1rem] font-medium transition-all duration-300 hover:bg-[rgba(6,182,212,0.1)] hover:border-[#06b6d4] hover:text-[#06b6d4]"
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ duration: 0.3 }}
        >
          <Twitter size={24} />
          <span>Twitter</span>
        </motion.a>
      </div>
    </div>
  );
};

export default SocialLinks;

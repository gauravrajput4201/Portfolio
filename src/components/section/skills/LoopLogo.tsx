
"use client";
import LogoLoop from "@/components/LogoLoop";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiGit,
  SiGithub,
  SiVite,
  SiWebpack,
  SiNodedotjs,
  SiExpress,
  SiPostman,
} from "react-icons/si";

const techLogos = [
  // Core Frontend
  { node: <SiReact className="text-white text-5xl" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-white text-5xl" />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript className="text-white text-5xl" />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiJavascript className="text-white text-5xl" />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },

  // UI / Styling
  {
    node: <SiTailwindcss className="text-white text-5xl" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiFramer className="text-white text-5xl" />,
    title: "Framer Motion",
    href: "https://www.framer.com/motion/",
  },

  // State Management
  {
    node: <SiRedux className="text-white text-5xl" />,
    title: "Redux",
    href: "https://redux.js.org",
  },

  // Backend / API (light touch)
  {
    node: <SiNodedotjs className="text-white text-5xl" />,
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <SiExpress className="text-white text-5xl" />,
    title: "Express.js",
    href: "https://expressjs.com",
  },

  // Tooling
  {
    node: <SiGit className="text-white text-5xl" />,
    title: "Git",
    href: "https://git-scm.com",
  },
  {
    node: <SiGithub className="text-white text-5xl" />,
    title: "GitHub",
    href: "https://github.com",
  },
  {
    node: <SiVite className="text-white text-5xl" />,
    title: "Vite",
    href: "https://vitejs.dev",
  },
  {
    node: <SiWebpack className="text-white text-5xl" />,
    title: "Webpack",
    href: "https://webpack.js.org",
  },

  // API Testing
  {
    node: <SiPostman className="text-white text-5xl" />,
    title: "Postman",
    href: "https://www.postman.com",
  },
];

const LoopLogo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="relative w-full overflow-hidden"
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          height: "100px",
        }}
        className="flex items-center justify-center w-full bg-black/30 mb-12"
      >
        <LogoLoop
          logos={techLogos}
          speed={80}
          direction="left"
          logoHeight={80}
          gap={80}
          hoverSpeed={20}
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Technology stack logos"
          className="w-full"
          width="100%"
        />
      </div>
     
    </motion.div>
  );
};

export default LoopLogo;

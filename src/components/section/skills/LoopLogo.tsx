
"use client";
import LogoLoop from "@/components/LogoLoop";
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
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },

  // UI / Styling
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiFramer />,
    title: "Framer Motion",
    href: "https://www.framer.com/motion/",
  },

  // State Management
  {
    node: <SiRedux />,
    title: "Redux",
    href: "https://redux.js.org",
  },

  // Backend / API (light touch)
  {
    node: <SiNodedotjs />,
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <SiExpress />,
    title: "Express.js",
    href: "https://expressjs.com",
  },

  // Tooling
  {
    node: <SiGit />,
    title: "Git",
    href: "https://git-scm.com",
  },
  {
    node: <SiGithub />,
    title: "GitHub",
    href: "https://github.com",
  },
  {
    node: <SiVite />,
    title: "Vite",
    href: "https://vitejs.dev",
  },
  {
    node: <SiWebpack />,
    title: "Webpack",
    href: "https://webpack.js.org",
  },

  // API Testing
  {
    node: <SiPostman />,
    title: "Postman",
    href: "https://www.postman.com",
  },
];

const LoopLogo = () => {
  return (
    <div style={{  position: "relative", overflow: "hidden" }}>
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="right"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#000"
        ariaLabel="Technology partners"
      />
    </div>
  );
};

export default LoopLogo;

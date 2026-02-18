// Mock data for portfolio

export const personalInfo = {
  name: "Gaurav Singh",
  title: "Frontend Engineer",
  tagline: "Crafting Premium Digital Experiences",
  bio: "Results-driven Frontend Engineer with 3.5+ years of experience building scalable, performance-focused web applications using React.js, Next.js, and TypeScript. Strong in clean architecture, maintainable code, and delivering seamless user experiences in production environments.",
  email: "singhkumargaurav420@gmail.com",
  location: "New Delhi, India",
  availability: "Open to opportunities",
  // availability: "Open to Frontend & Fullstack Opportunities",
  social: {
    github: "https://github.com/gauravrajput4201",
    linkedin: "https://www.linkedin.com/in/gaurav-kumar-singh-ab7b15165",
  },
};

export const skills = [
  { name: "React.js", level: 95, category: "frontend" },
  { name: "Next.js", level: 90, category: "frontend" },
  { name: "TypeScript", level: 92, category: "language" },
  { name: "JavaScript (ES6+)", level: 95, category: "language" },
  { name: "Tailwind CSS", level: 90, category: "styling" },
  { name: "Framer Motion", level: 85, category: "animation" },
  { name: "Redux/Zustand", level: 88, category: "state" },
  { name: "REST APIs", level: 92, category: "backend" },
  { name: "Git & GitHub", level: 90, category: "tools" },
  { name: "Webpack/Vite", level: 82, category: "tools" }
];
// export const skills = [
//   { name: "React.js", category: "frontend" },
//   { name: "Next.js", category: "frontend" },
//   { name: "TypeScript", category: "language" },
//   { name: "JavaScript (ES6+)", category: "language" },
//   { name: "React Native", category: "mobile" },

//   { name: "Redux", category: "state" },
//   { name: "Zustand", category: "state" },
//   { name: "React Router", category: "state" },

//   { name: "Tailwind CSS", category: "styling" },
//   { name: "Material UI (MUI)", category: "styling" },
//   { name: "ShadCN UI", category: "styling" },

//   { name: "Node.js", category: "backend" },
//   { name: "NestJS", category: "backend" },
//   { name: "MongoDB", category: "database" },
//   { name: "REST APIs", category: "backend" },
//   { name: "JWT Authentication", category: "backend" },
//   { name: "Google OAuth", category: "backend" },

//   { name: "Axios", category: "tools" },
//   { name: "Fetch API", category: "tools" },
//   { name: "Webpack", category: "tools" },
//   { name: "Vite", category: "tools" },
//   { name: "Git & GitHub", category: "tools" },
//   { name: "CI/CD", category: "tools" },
//   { name: "Azure", category: "tools" },
//   { name: "Expo", category: "mobile" },
//   { name: "AsyncStorage", category: "mobile" },
// ];


export const experience = [
  {
    id: 1,
    company: "TechCorp",
    position: "Senior Frontend Engineer",
    duration: "2023 - Present",
    location: "San Francisco, CA",
    description: "Leading frontend development for enterprise SaaS platform, improving performance by 40% and implementing advanced animations.",
    achievements: [
      "Led migration from JavaScript to TypeScript, reducing bugs by 35%",
      "Implemented design system using Storybook and Tailwind CSS",
      "Mentored 3 junior developers and conducted code reviews"
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    id: 2,
    company: "StartupXYZ",
    position: "Frontend Engineer",
    duration: "2021 - 2023",
    location: "Remote",
    description: "Built core features for a fintech application serving 100K+ users, focusing on performance optimization and user experience.",
    achievements: [
      "Reduced initial load time by 60% through code splitting and lazy loading",
      "Implemented real-time data visualization using D3.js",
      "Built responsive UI components used across 20+ pages"
    ],
    tech: ["React", "Redux", "JavaScript", "SCSS"]
  },
  {
    id: 3,
    company: "Digital Agency",
    position: "Junior Frontend Developer",
    duration: "2020 - 2021",
    location: "New York, NY",
    description: "Developed marketing websites and landing pages for various clients, ensuring pixel-perfect implementation.",
    achievements: [
      "Delivered 15+ client projects with 98% satisfaction rate",
      "Implemented SEO best practices, improving client rankings",
      "Collaborated with designers to create interactive prototypes"
    ],
    tech: ["HTML", "CSS", "JavaScript", "jQuery", "WordPress"]
  }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with real-time inventory management, advanced search, and seamless checkout experience.",
    longDescription: "Built a full-featured e-commerce platform handling 10K+ daily transactions. Implemented complex filtering, real-time inventory updates, and integrated payment gateways.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    category: "Web Application",
    year: "2024",
    link: "https://example.com",
    github: "https://github.com",
    featured: true,
    color: "#06b6d4"
  },
  {
    id: 2,
    title: "AI Dashboard",
    description: "Interactive analytics dashboard with AI-powered insights, real-time data visualization, and predictive analytics.",
    longDescription: "Created an enterprise dashboard for data visualization with ML-powered insights. Features include customizable widgets, real-time updates, and export capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tech: ["React", "D3.js", "Python", "TensorFlow", "WebSocket"],
    category: "Dashboard",
    year: "2024",
    link: "https://example.com",
    featured: true,
    color: "#8b5cf6"
  },
  {
    id: 3,
    title: "Design System",
    description: "Comprehensive design system with 50+ components, documentation, and theming support for enterprise products.",
    longDescription: "Developed a scalable design system used across multiple products. Includes accessible components, dark mode support, and comprehensive documentation.",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&q=80",
    tech: ["React", "Storybook", "TypeScript", "Styled Components"],
    category: "Design System",
    year: "2023",
    github: "https://github.com",
    featured: true,
    color: "#10b981"
  },
  {
    id: 4,
    title: "Social Media App",
    description: "Real-time social platform with live messaging, media sharing, and interactive feeds.",
    longDescription: "Built a social media application with real-time messaging, image/video uploads, and engagement tracking. Handles thousands of concurrent users.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    tech: ["Next.js", "Socket.io", "MongoDB", "AWS S3"],
    category: "Web Application",
    year: "2023",
    link: "https://example.com",
    color: "#f59e0b"
  },
  {
    id: 5,
    title: "Portfolio Generator",
    description: "SaaS tool for developers to create stunning portfolios with templates and customization options.",
    longDescription: "Created a no-code portfolio builder with drag-and-drop interface, multiple templates, and one-click deployment.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tech: ["React", "Firebase", "Vercel", "TailwindCSS"],
    category: "SaaS",
    year: "2023",
    link: "https://example.com",
    github: "https://github.com",
    color: "#ec4899"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO at TechCorp",
    company: "TechCorp",
    image: "https://i.pravatar.cc/150?img=1",
    text: "Alex is an exceptional frontend engineer. His attention to detail and ability to create smooth, performant interfaces is outstanding. He consistently delivers high-quality work ahead of schedule."
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Product Manager",
    company: "StartupXYZ",
    image: "https://i.pravatar.cc/150?img=2",
    text: "Working with Alex was a game-changer for our product. He transformed our designs into pixel-perfect implementations and suggested improvements that enhanced the user experience significantly."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Lead Designer",
    company: "Digital Agency",
    image: "https://i.pravatar.cc/150?img=3",
    text: "Alex bridges the gap between design and development perfectly. He understands design principles and translates them into beautiful, functional interfaces with seamless animations."
  }
];


  "use client";
  import React, { useRef } from "react";
  import { easeOut, motion, useInView } from "framer-motion";
  import { personalInfo } from "@/data/mockData";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

  const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    const year = new Date().getFullYear();

    return (
      <section id="contact" ref={ref} className="pt-24 px-8 pb-0 relative">
        <motion.div
          className="max-w-350 mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="mb-12 text-center" variants={itemVariants}>
            <h2 className="text-[1.75rem] font-semibold text-white mb-2">
              Let's Work Together
            </h2>
            <div className="w-16 h-1 mx-auto bg-linear-to-r from-cyan-400 to-violet-500 rounded-full mb-4" />
            <p className="text-lg text-white/70">
              Have a project in mind? Let's discuss how I can help bring your
              ideas to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 mt-12 lg:grid-cols-[1fr_1.5fr]">
          

            <ContactInfo personalInfo={personalInfo} itemVariants={itemVariants} /> 

            <motion.div
              className="bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.1)] rounded-3xl p-10 flex flex-col gap-6"
              variants={itemVariants}
            >
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>

        <footer className="mt-24 p-8 border-t border-[rgba(255,255,255,0.1)] text-center">
          <p className="text-[rgba(255,255,255,0.5)] text-[0.9rem] my-1">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          {/* <p className="text-[rgba(255,255,255,0.5)] text-[0.9rem] my-1">
            Built with Next.js, Node.js, Framer Motion & Tailwind CSS
          </p> */}
        </footer>
      </section>
    );
  };

  export default Contact;

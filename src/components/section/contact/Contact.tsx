
  "use client";
  import React, { useRef, useState } from "react";
  import { z } from "zod";
  import { useForm } from "react-hook-form";
  import { zodResolver } from "@hookform/resolvers/zod";
  import { easeOut, motion, useInView } from "framer-motion";
  import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
  import { personalInfo } from "@/data/mockData";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

  const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const contactSchema = z.object({
      name: z.string()
        .min(2, 'Name must be at least 2 characters.'),
      email: z.string()
        .min(1, 'Please enter your email address.')
        .email('Please enter a valid email address.'),
      subject: z.string()
        .min(2, 'Subject must be at least 2 characters.'),
      message: z.string()
        .min(5, 'Message must be at least 5 characters.'),
    });

    type ContactForm = z.infer<typeof contactSchema>;

    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<ContactForm>({
      resolver: zodResolver(contactSchema),
      mode: 'onChange',
      defaultValues: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    });

    const [apiError, setApiError] = useState<string | null>(null);
    const [apiSuccess, setApiSuccess] = useState<string | null>(null);

    const onSubmit = async (data: ContactForm) => {
      setApiError(null);
      setApiSuccess(null);
      setIsSubmitted(true);
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        if (response.ok && result.success) {
          setApiSuccess(
            "✅ Your message has been sent! Thank you for reaching out. 📬\nI have received your message and will reply soon! 😊😊😊😊",
          );
          reset({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          setApiError(result.error ? JSON.stringify(result.error) : 'Failed to send message.');
        }
      } catch (err) {
        setApiError('Something went wrong. Please try again later.');
      } finally {
        setIsSubmitted(false);
      }
    };

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
            {/* <motion.div className="flex flex-col gap-6" variants={itemVariants}>
              <motion.div
                className="bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.1)] rounded-3xl p-8 text-center transition-all duration-300 cursor-pointer hover:bg-[rgba(255,255,255,0.08)] hover:border-[#06b6d4] hover:shadow-[0_8px_32px_rgba(6,182,212,0.2)]"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Mail className="text-[#06b6d4] mx-auto mb-4" size={32} />
                <h3 className="text-[1.25rem] font-semibold text-white mb-3">
                  Email Me
                </h3>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-[1rem] text-white/70 hover:text-[#06b6d4] transition-colors duration-300"
                >
                  {personalInfo.email}
                </a>
              </motion.div>

              <motion.div
                className="bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.1)] rounded-3xl p-8 text-center transition-all duration-300 cursor-pointer hover:bg-[rgba(255,255,255,0.08)] hover:border-[#06b6d4] hover:shadow-[0_8px_32px_rgba(6,182,212,0.2)]"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <MapPin className="text-[#06b6d4] mx-auto mb-4" size={32} />
                <h3 className="text-[1.25rem] font-semibold text-white mb-3">
                  Location
                </h3>
                <p className="text-[1rem] text-white/70">
                  {personalInfo.location}
                </p>
              </motion.div>

              <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.1)] rounded-3xl p-8 mt-4">
                <h3 className="text-[1.25rem] font-semibold text-white mb-6 text-center">
                  Connect With Me
                </h3>
                <div className="flex flex-col gap-4">
                  <motion.a
                    href={personalInfo.social.github}
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
                    href={personalInfo.social.linkedin}
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
                    href={personalInfo.social.twitter}
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
            </motion.div> */}

            <ContactInfo personalInfo={personalInfo} itemVariants={itemVariants} /> 

            <motion.div
              className="bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.1)] rounded-3xl p-10 flex flex-col gap-6"
              variants={itemVariants}
            >
              {/* <form
                className="flex flex-col gap-6"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-[0.95rem] font-medium text-white/80 mb-1"
                  >
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    {...register("name")}
                    className={`p-4 bg-[rgba(255,255,255,0.05)] border ${errors.name ? "border-red-500" : "border-[rgba(255,255,255,0.1)]"} rounded-2xl text-white text-[1rem] font-sans transition-all duration-300 outline-none focus:bg-[rgba(255,255,255,0.08)] focus:border-[#06b6d4] focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)]`}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  {errors.name && (
                    <span className="text-red-400 text-xs mt-1">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-[0.95rem] font-medium text-white/80 mb-1"
                  >
                    Your Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    {...register("email")}
                    className={`p-4 bg-[rgba(255,255,255,0.05)] border ${errors.email ? "border-red-500" : "border-[rgba(255,255,255,0.1)]"} rounded-2xl text-white text-[1rem] font-sans transition-all duration-300 outline-none focus:bg-[rgba(255,255,255,0.08)] focus:border-[#06b6d4] focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)]`}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  {errors.email && (
                    <span className="text-red-400 text-xs mt-1">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="text-[0.95rem] font-medium text-white/80 mb-1"
                  >
                    Subject
                  </label>
                  <motion.input
                    type="text"
                    id="subject"
                    {...register("subject")}
                    className={`p-4 bg-[rgba(255,255,255,0.05)] border ${errors.subject ? "border-red-500" : "border-[rgba(255,255,255,0.1)]"} rounded-2xl text-white text-[1rem] font-sans transition-all duration-300 outline-none focus:bg-[rgba(255,255,255,0.08)] focus:border-[#06b6d4] focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)]`}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  {errors.subject && (
                    <span className="text-red-400 text-xs mt-1">
                      {errors.subject.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-[0.95rem] font-medium text-white/80 mb-1"
                  >
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    {...register("message")}
                    rows={6}
                    className={`p-4 bg-[rgba(255,255,255,0.05)] border ${errors.message ? "border-red-500" : "border-[rgba(255,255,255,0.1)]"} rounded-2xl text-white text-[1rem] font-sans transition-all duration-300 outline-none focus:bg-[rgba(255,255,255,0.08)] focus:border-[#06b6d4] focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)] resize-vertical min-h-37.5`}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  {errors.message && (
                    <span className="text-red-400 text-xs mt-1">
                      {errors.message.message}
                    </span>
                  )}
                </div>
                {apiError && (
                  <div className="text-red-400 text-sm mb-2 text-center">{apiError}</div>
                )}
                {apiSuccess && (
                  <div className="text-green-400 text-sm mb-2 text-center">{apiSuccess}</div>
                )}
                <motion.button
                  type="submit"
                  className="py-4 px-8 bg-[linear-gradient(135deg,#06b6d4_0%,#8b5cf6_100%)] border-none rounded-[50px] text-white text-[1rem] font-semibold cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(6,182,212,0.3)] disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 40px rgba(6, 182, 212, 0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form> */}
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>

        <footer className="mt-24 p-8 border-t border-[rgba(255,255,255,0.1)] text-center">
          <p className="text-[rgba(255,255,255,0.5)] text-[0.9rem] my-1">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-[rgba(255,255,255,0.5)] text-[0.9rem] my-1">
            Built with Next.js, Node.js, Framer Motion & Tailwind CSS
          </p>
        </footer>
      </section>
    );
  };

  export default Contact;

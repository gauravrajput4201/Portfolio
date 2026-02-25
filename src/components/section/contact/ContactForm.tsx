"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z
    .string()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address."),
  subject: z.string().min(2, "Subject must be at least 2 characters."),
  message: z.string().min(5, "Message must be at least 5 characters."),
});
type ContactTypes = z.infer<typeof contactSchema>;
const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [apiSuccess, setApiSuccess] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactTypes>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const onSubmit = async (data: ContactTypes) => {
    setApiError(null);
    setApiSuccess(null);
    setIsSubmitted(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setApiSuccess( 
          "✅ Thank you for reaching out. 📬\nI have received your message and will reply soon! 😊😊😊😊",
        );
        reset();
      } else {
        setApiError(
          result.error
            ? JSON.stringify(result.error)
            : "Failed to send message.",
        );
      }
    } catch (err) {
      setApiError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitted(false);
    }
  };

  return (
    <form
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
        <input
          type="text"
          id="name"
          {...register("name")}
          className={`p-4 bg-[rgba(255,255,255,0.05)] border ${errors.name ? "border-red-500" : "border-[rgba(255,255,255,0.1)]"} rounded-2xl text-white text-[1rem] font-sans transition-all duration-300 outline-none focus:bg-[rgba(255,255,255,0.08)] focus:border-[#06b6d4] focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)]`}
          // whileFocus={{ scale: 1.02 }}
          // transition={{ duration: 0.2 }}
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
        <input
          type="email"
          id="email"
          {...register("email")}
          className={`p-4 bg-[rgba(255,255,255,0.05)] border ${errors.email ? "border-red-500" : "border-[rgba(255,255,255,0.1)]"} rounded-2xl text-white text-[1rem] font-sans transition-all duration-300 outline-none focus:bg-[rgba(255,255,255,0.08)] focus:border-[#06b6d4] focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)]`}
          // whileFocus={{ scale: 1.02 }}
          // transition={{ duration: 0.2 }}
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
        <input
          type="text"
          id="subject"
          {...register("subject")}
          className={`p-4 bg-[rgba(255,255,255,0.05)] border ${errors.subject ? "border-red-500" : "border-[rgba(255,255,255,0.1)]"} rounded-2xl text-white text-[1rem] font-sans transition-all duration-300 outline-none focus:bg-[rgba(255,255,255,0.08)] focus:border-[#06b6d4] focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)]`}
          // whileFocus={{ scale: 1.02 }}
          // transition={{ duration: 0.2 }}
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
        <textarea
          id="message"
          {...register("message")}
          rows={6}
          className={`p-4 bg-[rgba(255,255,255,0.05)] border ${errors.message ? "border-red-500" : "border-[rgba(255,255,255,0.1)]"} rounded-2xl text-white text-[1rem] font-sans transition-all duration-300 outline-none focus:bg-[rgba(255,255,255,0.08)] focus:border-[#06b6d4] focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)] resize-vertical min-h-37.5`}
          // whileFocus={{ scale: 1.02 }}
          // transition={{ duration: 0.2 }}
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
        <div className="text-green-400 text-sm mb-2 text-center">
          {apiSuccess}
        </div>
      )}
      <button
        type="submit"
        className="py-4 px-8 bg-[linear-gradient(135deg,#06b6d4_0%,#8b5cf6_100%)] border-none rounded-[50px] text-white text-[1rem] font-semibold cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(6,182,212,0.3)] disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]"
        //   whileHover={{
        //     scale: 1.05,
        //     boxShadow: "0 0 40px rgba(6, 182, 212, 0.6)",
        //   }}
        //   whileTap={{ scale: 0.95 }}
        //   disabled={isSubmitted}
      >
        {isSubmitted ? (
          "Sending..."
        ) : (
          <>
            <Send size={20} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;

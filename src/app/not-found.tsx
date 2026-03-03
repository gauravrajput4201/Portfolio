"use client";
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import Link from 'next/link';

const NotFound = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-8 overflow-hidden">

      <div className="absolute inset-0 bg-linear-to-b from-[rgba(6,182,212,0.1)] via-[rgba(139,92,246,0.05)] to-transparent pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-2xl w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mb-8"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-[10rem] md:text-[15rem] font-black text-transparent bg-linear-to-r from-cyan-400 via-violet-500 to-pink-500 bg-clip-text leading-none mb-4">
              404
            </h1>
          </motion.div>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          variants={itemVariants}
        >
          Page Not Found
        </motion.h2>
        <motion.p
          className="text-lg text-white/70 mb-8 leading-relaxed max-w-md mx-auto"
          variants={itemVariants}
        >
          Oops! It looks like you've wandered into uncharted territory. The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div
          className="w-20 h-1 bg-linear-to-r from-cyan-400 to-violet-500 mx-auto mb-12 rounded-full"
          variants={itemVariants}
        />

        {/* Action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <Link href="/">
            <motion.button
              className="flex items-center gap-2 px-8 py-4 bg-linear-to-r from-cyan-400 to-violet-500 text-white font-semibold rounded-full shadow-[0_8px_32px_rgba(6,182,212,0.4)] transition-all duration-300 hover:shadow-[0_12px_48px_rgba(6,182,212,0.6)]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home size={20} />
              Back to Home
            </motion.button>
          </Link>

          <Link href="/#contact">
            <motion.button
              className="flex items-center gap-2 px-8 py-4 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] text-white font-semibold rounded-full backdrop-blur-[10px] transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(6,182,212,0.5)]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home size={20} />
              Contact Me
            </motion.button>
          </Link>
        </motion.div>
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export default NotFound;

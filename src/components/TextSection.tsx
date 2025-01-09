"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function CSGOSkinsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  return (
    <section className="min-h-[75vh] w-full bg-black flex items-center justify-center  overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="w-3/4 max-w-4xl mx-auto "
      >
        <div className="relative ">
          {/* Animated background elements */}
          <motion.div
            variants={itemVariants}
            className="absolute -inset-1  bg-cyan-700  rounded-lg opacity-60 blur-3xl"
            animate={{
              scale: [1, 1.07, 1],
              rotate: [5, -5, 5],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />

          {/* Main content */}
          <motion.div
            variants={itemVariants}
            className="relative bg-black bg-opacity-90 border border-cyan-500/30 rounded-xl p-8 m-0 md:p-12 overflow-hidden backdrop-blur-sm text-center "
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl  font-semibold tracking-wide mb-8 text-white"
            >
              FREE CSGO SKINS
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 font-semibold text-md md:text-xl leading-base mb-8"
            >
              You can play for free at csgo bet sites that require no deposit
              bonuses. Furthermore, you can explore the same selection with more
              generous deals than other players, open csgo free cases and enjoy
              the thrill of winning csgo free skins without risking your cash.
            </motion.p>

            {/* Animated underline */}
            <motion.div
              variants={itemVariants}
              className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
              animate={{
                scaleX: [0, 1],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",
              }}
            />

            {/* Floating elements for added visual interest */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-black/10 border-2 border-cyan-400 rounded-full opacity-10"
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-black/10 border-2 border-cyan-400 rounded-full opacity-10"
              animate={{
                y: [25, -25, 25],
                x: [10, -10, 10],
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

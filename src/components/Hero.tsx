"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function StatItem({ target, label }: { target: number; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [isComplete, setIsComplete] = useState(false);
  const displayValue = useTransform(rounded, (value) =>
    target === 1000 && value >= 1000 ? "1k" : value.toString()
  );

  useEffect(() => {
    if (isInView) {
      animate(count, target, {
        duration: 1,
        ease: "easeOut",
        onComplete: () => setIsComplete(true),
      });
    }
  }, [count, target, isInView]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center"
      animate={
        isComplete
          ? {
              scale: [1, 1.02, 1],
              transition: { duration: 0.1 },
            }
          : {}
      }
    >
      <motion.div
        className="text-4xl sm:text-5xl font-bold font-palanquin relative flex items-center justify-center h-12 sm:h-16 "
        style={{
          color: useTransform(
            count,
            [0, target],
            ["#FFFFFF", isComplete ? "#e2e8f0" : "#FFFFFF"]
          ),
        }}
      >
        <motion.span className="inline-block text-center">
          {displayValue}
        </motion.span>
        {isComplete && (
          <motion.span
            className=""
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0 }}
          >
            +
          </motion.span>
        )}
      </motion.div>
      <p className="font-bold text-white  sm:text-base whitespace-nowrap mt-2 mx-2  xl:!text-2xl">
        {label}
      </p>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 w-full">
      <div className="text-center z-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">FREE CS SKINS</h1>
        <p className="text-base sm:text-xl mb-8 max-w-2xl mx-auto">
          You can play for free at csgo bet sites that require no deposit
          bonuses. Furthermore, you can explore the same selection with more
          generous deals than other players, open csgo free cases and enjoy the
          thrill of winning csgo free skins without risking your cash.
        </p>
        <Link href="/promo-codes" passHref>
          <Button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </Button>
        </Link>
        <div className="flex justify-center gap-8 sm:gap-14 mt-16 sm:mt-32">
          <StatItem target={10} label="Codes" />
          <StatItem target={50} label="Cases" />
          <StatItem target={1000} label="Users" />
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <Image
        src="/photos/newbackground.png"
        alt="CS:GO Background"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
    </section>
  );
}

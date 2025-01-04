// "use client";

// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function Hero() {
//   const router = useRouter();

//   return (
//     <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 w-full">
//       <div className="text-center z-10">
//         <h1 className="text-5xl font-bold mb-4">FREE CS SKINS</h1>
//         <p className="text-xl mb-8 max-w-2xl mx-auto">
//           You can play for free at csgo bet sites that require no deposit
//           bonuses. Furthermore, you can explore the same selection with more
//           generous deals than other players, open csgo free cases and enjoy the
//           thrill of winning csgo free skins without risking your cash.
//         </p>
//         <Button
//           onClick={() => {
//             router.push("/promo-codes");
//           }}
//           className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Get Started
//         </Button>
//         <div className="flex justify-center lg:gap-14 sm: gap-8 mt-32 text-xl ">
//           {" "}
//           <span className="flex flex-col justify-center">
//             <p className="text-5xl font-bold font-palanquin max-sm:text-4xl ">
//               10+
//             </p>
//             <p className="font-semibold text-slate-300 max-sm:text-l">Codes</p>
//           </span>
//           <span className="flex flex-col justify-center">
//             <p className="text-5xl font-bold font-palanquin max-sm:text-4xl ">
//               50+
//             </p>
//             <p className="font-semibold text-slate-300 max-sm:text-l whitespace-nowrap">
//               Cases
//             </p>
//           </span>
//           <span className="flex flex-col justify-center">
//             <p className="text-5xl font-bold font-palanquin  max-sm:text-4xl">
//               1k+
//             </p>
//             <p className="font-semibold text-slate-300 max-sm:text-l whitespace-nowrap">
//               Users
//             </p>
//           </span>
//         </div>
//       </div>
//       <div className="absolute inset-0 bg-black opacity-50"></div>

//       <Image
//         src="/photos/newbackground.png"
//         alt="CS:GO Background"
//         className="absolute inset-0 w-full h-full object-cover"
//         width={1920}
//         height={1080}
//       />
//     </section>
//   );
// }
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
        duration: 2,
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
  const router = useRouter();

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
        <Button
          onClick={() => {
            router.push("/promo-codes");
          }}
          className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Started
        </Button>
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

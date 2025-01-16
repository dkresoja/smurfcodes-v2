"use client";

import { Star, Shield, Gift } from "lucide-react";
import { useIntersectionObserver } from "../app/hooks/useIntersectionObserver";

export default function FeatureCards() {
  const features = [
    {
      icon: Star,
      title: "Rewards",
      description:
        "Get amazing rewards with free coins, free skins, prizes and bonuses from us.",
    },
    {
      icon: Shield,
      title: "100% Secured",
      description:
        "We take proactive steps to make sure your information and transactions are secure.",
    },
    {
      icon: Gift,
      title: "Daily Free Gift",
      description:
        "Get a daily surprise from our partner sites! Open daily free cases by using our promo codes.",
    },
  ];

  const [ref, inView] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div className="bg-black">
      <div className="w-full max-w-6xl mx-auto px-4 py-12 ">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`
                group relative overflow-hidden rounded-2xl 
                bg-gradient-to-b border-2 border-cyan-800 from-black to-gray-800
                p-8 transition-all duration-500
                hover:shadow-2xl hover:shadow-[#06b6d4]/20 
                hover:-translate-y-1
                ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
              `}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex flex-col items-center text-center">
                  <div
                    className={`
                  mb-6 inline-flex items-center justify-center 
                  rounded-xl bg-gray-800/50 p-3.5 
                  backdrop-blur-sm ring-1 ring-gray-700/50 
                  group-hover:ring-[#06b6d4]/50 transition-all duration-300
                  
                `}
                  >
                    <Icon className="h-7 w-7 text-[#06b6d4]" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

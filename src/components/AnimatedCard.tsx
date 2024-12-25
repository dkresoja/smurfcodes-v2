"use client";

import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BouncingArrow } from "@/components/bouncing-arrow";
import { CopyButton } from "@/components/copy-button";
import { PromoCard } from "@/types/PromoCard";

export function AnimatedCard({ card }: { card: PromoCard }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 "
      }`}
    >
      <Card className="bg-gradient-to-b from-black to-sky-900 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 max-h-fit border-2 border-cyan-800 shadow-cyan-600 mb-6 mx-3 px-4">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <Image
            src={card.logo}
            alt="Platform logo"
            width={250}
            height={50}
            className="mb-4"
          />
          <h3 className="text-white font-bold mb-2 text-sm">{card.title}</h3>
          <div className="space-y-1 mb-4">
            <p className="text-white/80 text-sm">Promo code:</p>
            <CopyButton value={card.promoCode} className="text-white" />
          </div>
          <p className="text-white/60 text-xs mb-1">{card.validUntil}</p>
          <BouncingArrow />
          <Button
            variant="secondary"
            className="bg-slate-300 border-cyan-500 hover:bg-cyan-600 hover:text-white text-cyan-900 font-bold py-2 px-4 rounded-xl transition-all duration-400 "
          >
            <a href={card.site} target="_blank" rel="noopener noreferrer">
              Take instant
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedButton({ children, className }: AnimatedButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

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

    // Napravimo lokalnu kopiju buttonRef.current
    const currentRef = buttonRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={buttonRef}
      className={`transition-all duration-300 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0"
      }`}
    >
      <Button className={className}>{children}</Button>
    </div>
  );
}

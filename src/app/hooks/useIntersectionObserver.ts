// import { useState, useEffect, useRef } from "react";

// export function useIntersectionObserver(options = {}) {
//   const [isIntersecting, setIsIntersecting] = useState(false);
//   const targetRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       setIsIntersecting(entry.isIntersecting);
//     }, options);

//     if (targetRef.current) {
//       observer.observe(targetRef.current);
//     }

//     return () => {
//       if (targetRef.current) {
//         observer.unobserve(targetRef.current);
//       }
//     };
//   }, [options]);

//   return [targetRef, isIntersecting];
// }
import { useEffect, useRef, useState, MutableRefObject } from "react";

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

export function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = "0%",
}: UseIntersectionObserverProps = {}): [
  MutableRefObject<HTMLDivElement | null>,
  boolean
] {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, root, rootMargin]);

  return [ref, inView];
}

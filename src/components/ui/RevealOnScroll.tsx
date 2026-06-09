import type { HTMLAttributes, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type RevealOnScrollProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
};

export function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  as: Component = "div",
  style,
  ...props
}: RevealOnScrollProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -64px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref as never}
      className={`reveal-on-scroll ${visible ? "is-visible" : ""} ${className}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  );
}

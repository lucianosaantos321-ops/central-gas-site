import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`premium-card rounded-3xl border border-orange-100 bg-white p-6 shadow-soft ${className}`}>
      {children}
    </div>
  );
}

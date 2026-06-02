import { ArrowRight } from "lucide-react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "ghost";
  className?: string;
  showArrow?: boolean;
};

const styles = {
  primary:
    "bg-gradient-to-r from-ember to-sun text-white shadow-glow hover:-translate-y-0.5",
  secondary:
    "border border-orange-200 bg-white text-brand-700 shadow-soft hover:-translate-y-0.5",
  dark: "bg-slate-950 text-white shadow-soft hover:-translate-y-0.5",
  ghost: "bg-transparent text-slate-700 hover:bg-orange-50",
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-black transition focus:outline-none focus:ring-4 focus:ring-orange-200";

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    to?: string;
    href?: string;
  };

export function Button({
  children,
  variant = "primary",
  className = "",
  showArrow,
  ...props
}: ButtonProps) {
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
      {showArrow ? <ArrowRight size={18} aria-hidden="true" /> : null}
    </button>
  );
}

export function LinkButton({
  children,
  variant = "primary",
  className = "",
  showArrow,
  to,
  href,
  ...props
}: LinkButtonProps) {
  const content = (
    <>
      {children}
      {showArrow ? <ArrowRight size={18} aria-hidden="true" /> : null}
    </>
  );

  if (to) {
    return (
      <Link className={`${base} ${styles[variant]} ${className}`} to={to}>
        {content}
      </Link>
    );
  }

  return (
    <a className={`${base} ${styles[variant]} ${className}`} href={href} {...props}>
      {content}
    </a>
  );
}

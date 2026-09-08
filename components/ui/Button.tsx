import { ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  external?: boolean;
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  icon,
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors";
  const variants = {
    primary: "bg-accent text-accent-dark hover:opacity-90",
    secondary: "border border-white/15 text-neutral-200 hover:bg-white/5",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      {icon}
      {children}
    </>
  );

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return <button className={classes}>{content}</button>;
}
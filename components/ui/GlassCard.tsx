import { ReactNode } from "react";

export default function GlassCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-neutral-900/70 backdrop-blur-md p-6 ${className}`}>
      {children}
    </div>
  );
}
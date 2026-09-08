export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-neutral-950">
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-violet-600 opacity-30 blur-[90px]" />
      <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-emerald-400 opacity-20 blur-[100px]" />
    </div>
  );
}
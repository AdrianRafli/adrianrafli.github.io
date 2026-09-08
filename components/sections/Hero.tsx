import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section id="hero" className="flex min-h-screen flex-col items-center justify-center text-center">
      <p className="mb-3 text-sm text-neutral-400">Full-Stack Developer</p>
      <h1 className="text-4xl font-semibold text-neutral-100 sm:text-5xl">
        Hi, I&apos;m <span className="text-accent">Adrian Rafli</span>
      </h1>
      <p className="mt-4 max-w-md text-neutral-400">
        Building full-stack products from database to design — precise, performant, purposeful.
      </p>

      <div className="mt-8">
        <Button href="/Adrian_Maulana_Rafli_CV_ATS.pdf">My Resume</Button>
      </div>

    </section>
  );
}
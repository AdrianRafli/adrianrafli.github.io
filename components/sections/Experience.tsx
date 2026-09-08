import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <h2 className="mb-10 text-2xl font-semibold text-neutral-100">Experience</h2>
      <div className="relative border-l border-white/10 pl-6">
        {experience.map((item, i) => (
          <div key={i} className="relative mb-10">
            <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-accent" />
            <p className="text-sm text-neutral-500">{item.year}</p>
            <h3 className="text-lg font-medium text-neutral-100">
              {item.role} — <span className="text-neutral-400">{item.company}</span>
            </h3>
             <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-neutral-400">
              {item.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
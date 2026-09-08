import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";
import { techStack } from "@/data/techStack";

export default function About() {
  return (
    <section id="about" className="pt-34 pb-28">
      <GlassCard className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div className="sm:col-span-1">
          <div className="aspect-square overflow-hidden rounded-xl bg-neutral-800">
            <Image
              src="/profile.png"
              alt="Adrian Maulana Rafli"
              width={400}
              height={400}
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <h2 className="mb-4 text-2xl font-semibold text-neutral-100">About Me</h2>
          <p className="text-neutral-400 leading-relaxed">
            Computer Science graduate with hands-on experience in Fullstack development using React, NextJS, NodeJS, Laravel, and MySQL. Experienced in developing RESTful APIs, web applications, and SEO-optimized websites. Possesses additional professional experience in sales and customer-facing roles, strengthening communication, problem-solving, and stakeholder management skills. Passionate about software development and continuously learning new technologies.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {techStack.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/70 px-3 py-1.5"
              >
                <Icon size={16} className="text-neutral-300" />
                <span className="text-xs text-neutral-400">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
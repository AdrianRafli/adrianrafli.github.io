import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";
import { projects } from "@/data/projects";
import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/reveal"

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <h2 className="mb-10 text-2xl font-semibold text-neutral-100">Projects</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Reveal key={project.title}>
            <GlassCard className="flex flex-col">
              <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-neutral-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={340}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="text-lg font-medium text-neutral-100">{project.title}</h3>

              <div className="mt-2 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-neutral-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 space-y-2 text-sm text-neutral-400">
                <p><span className="text-neutral-300 font-medium">Problem: </span>{project.problem}</p>
                <p><span className="text-neutral-300 font-medium">Solution: </span>{project.solution}</p>
                <p><span className="text-neutral-300 font-medium">Result: </span>{project.result}</p>
              </div>

              {(project.codeLink || project.demoLink) && (
                <div className="mt-4 flex gap-3">
                  {project.codeLink && (
                    <Button
                      href={project.codeLink}
                      external
                      variant="secondary"
                      icon={<FaGithub size={16} />}
                      className="text-xs px-4 py-2"
                    >
                      Code
                    </Button>
                  )}
                  {project.demoLink && (
                    <Button
                      href={project.demoLink}
                      external
                      variant="primary"
                      icon={<Globe size={16} />}
                      className="text-xs px-4 py-2"
                    >
                      Demo
                    </Button>
                  )}
                </div>
              )}
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
export type Project = {
  title: string;
  description: string;
  techStack: string[];
  problem: string;
  solution: string;
  result: string;
  image: string;
  codeLink?: string;
  demoLink?: string;
};

export type ExperienceItem = {
  year: string;
  role: string;
  company: string;
  description: string[];
};
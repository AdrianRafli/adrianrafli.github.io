import { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiGo,
  SiLaravel,
  SiDotnet,
  SiGithub,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiFigma,
} from "react-icons/si";

export type TechStackItem = {
  name: string;
  icon: IconType;
};

export const techStack: TechStackItem[] = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React.js", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Go", icon: SiGo },
  { name: "Laravel", icon: SiLaravel },
  { name: ".NET", icon: SiDotnet },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "GitHub", icon: SiGithub },
  { name: "Figma", icon: SiFigma },
];
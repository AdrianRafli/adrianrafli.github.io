import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Mail } from "lucide-react";

const links = [
  { icon: Mail, href: "mailto:adrianrafly20@gmail.com", label: "Email" },
  { icon: FaGithub, href: "https://github.com/AdrianRafli", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/adrianrafli", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://instagram.com/adrrfl_", label: "Instagram" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-3xl font-semibold text-neutral-100">Let&apos;s Work Together</h2>
      <p className="mt-3 text-neutral-400">
        Have a project in mind or just want to say hi? Reach out below.
      </p>

      <div className="mt-8 flex justify-center gap-6">
        {links.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-neutral-900/70 text-neutral-300 transition-colors hover:text-accent"
            aria-label={label}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>

      <p className="mt-16 text-xs text-neutral-600">
        © {new Date().getFullYear()} Adrian Maulana Rafli
      </p>
    </section>
  );
}
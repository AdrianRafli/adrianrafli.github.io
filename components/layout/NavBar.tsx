const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-4 z-50 mx-auto max-w-3xl px-4">
      <nav className="flex items-center justify-between rounded-full border border-white/10 bg-neutral-900/70 px-6 py-3 backdrop-blur-md">
        <span className="text-sm font-semibold text-neutral-100">AdrianRafli</span>
        <ul className="flex gap-5 text-sm text-neutral-300">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-accent transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
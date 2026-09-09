"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-3xl px-4">
      <div className="relative">
        <nav className="rounded-full border border-white/10 bg-neutral-900/70 backdrop-blur-md">
          <div className="flex items-center justify-between px-6 py-3">
            <span className="text-sm font-semibold text-neutral-100">AR</span>

            <ul className="hidden gap-5 text-sm text-neutral-300 sm:flex">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-accent">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-300 sm:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Dropdown mobile - absolute, tidak mendorong konten di bawahnya */}
        <ul
          className={`absolute left-0 right-0 top-full mt-2 origin-top rounded-2xl border border-white/10 bg-neutral-900/90 px-6 py-4 text-sm text-neutral-300 backdrop-blur-md transition-all duration-200 ease-out sm:hidden ${
            isOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none -translate-y-1 scale-95 opacity-0"
          }`}
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
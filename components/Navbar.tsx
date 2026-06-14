"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  "About",
  "Experience",
  "Projects",
  "Certifications",
  "Achievements",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        <a
  href="#home"
  className="text-2xl font-bold text-white cursor-pointer"
>
  Atharv<span className="text-blue-500">.</span>
</a>

        <div className="hidden md:flex gap-5 lg:gap-8 text-zinc-300">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-4 sm:px-6 py-4">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-3 text-zinc-300"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#about");

  const links = [
    { href: "#about", label: "À propos" },
    { href: "#skills", label: "Compétences" },
    { href: "#projects", label: "Projets" },
    { href: "#experience", label: "Expérience" },
    { href: "#contact", label: "Contact" },
  ];

  // Scroll spy (section active)
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((l) =>
        document.querySelector(l.href)
      );

      sections.forEach((section, i) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 160 && rect.bottom >= 160) {
          setActive(links[i].href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* LOGO */}
        <a
          href="#about"
          className="text-xl font-bold tracking-tight"
        >
          Komoe<span className="text-blue-400">.</span>dev
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = active === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                className={`
                  text-sm transition-all duration-200
                  ${
                    isActive
                      ? "text-blue-400"
                      : "text-slate-300 hover:text-blue-400"
                  }
                `}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="
            hidden
            rounded-xl
            bg-blue-600
            px-4
            py-2
            text-sm
            font-medium
            shadow-lg
            shadow-blue-500/20
            transition-all
            hover:scale-105
            hover:bg-blue-500
            md:block
          "
        >
          Me contacter
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 md:hidden text-slate-200"
          aria-label="Menu"
        >
          {isOpen ? <IconX size={26} /> : <IconMenu2 size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-t border-slate-800 bg-slate-950 md:hidden"
          >
            <div className="flex flex-col gap-5 p-6">
              {links.map((link) => {
                const isActive = active === link.href;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      text-sm transition
                      ${
                        isActive
                          ? "text-blue-400"
                          : "text-slate-300 hover:text-blue-400"
                      }
                    `}
                  >
                    {link.label}
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-xl bg-blue-600 px-4 py-2 text-center text-sm font-medium"
              >
                Me contacter
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
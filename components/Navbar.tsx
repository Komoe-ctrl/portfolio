"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { IconMenu2, IconX } from "@tabler/icons-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

/**
 * `homeHref` : préfixe des ancres quand la barre n'est pas sur la page d'accueil
 * (par exemple `/fr` sur une page projet). Vide sur l'accueil, où les ancres
 * restent relatives et où le scroll spy s'applique.
 */
export default function Navbar({ homeHref = "" }: { homeHref?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(homeHref ? "" : "#about");
  const t = useTranslations("Navbar");

  const links = [
    { hash: "#about", label: t("about") },
    { hash: "#skills", label: t("skills") },
    { hash: "#projects", label: t("projects") },
    { hash: "#experience", label: t("experience") },
    { hash: "#contact", label: t("contact") },
  ].map((link) => ({ ...link, href: `${homeHref}${link.hash}` }));

  // Scroll spy (section active) — les sections ne sont présentes que sur l'accueil
  useEffect(() => {
    if (homeHref) return;

    const handleScroll = () => {
      const sections = links.map((l) =>
        document.querySelector(l.hash)
      );

      sections.forEach((section, i) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 160 && rect.bottom >= 160) {
          setActive(links[i].hash);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* LOGO */}
        <a
          href={`${homeHref}#hero`}
          className="text-xl font-bold tracking-tight"
        >
          {t("brandName")}
          <span className="text-blue-400">.</span>
          {t("brandSuffix")}
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = active === link.hash;

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

        <div className="hidden items-center gap-6 md:flex">
          <LanguageSwitcher />

          {/* CTA */}
          <a
            href={`${homeHref}#contact`}
            className="
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
            "
          >
            {t("cta")}
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 md:hidden text-slate-200"
          aria-label={t("menuAria")}
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
                const isActive = active === link.hash;

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
                href={`${homeHref}#contact`}
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-xl bg-blue-600 px-4 py-2 text-center text-sm font-medium"
              >
                {t("cta")}
              </a>

              <LanguageSwitcher className="pt-2" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

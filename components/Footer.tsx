import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconArrowUp,
} from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("Footer");
  const tNav = await getTranslations("Navbar");

  const navLinks = [
    { href: "#about", label: tNav("about") },
    { href: "#skills", label: tNav("skills") },
    { href: "#projects", label: tNav("projects") },
    { href: "#experience", label: tNav("experience") },
    { href: "#contact", label: tNav("contact") },
  ];

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Présentation */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight">
              {tNav("brandName")}
              <span className="text-blue-400">.</span>
              {tNav("brandSuffix")}
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              {t("description")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 font-semibold text-white">
              {t("navigationTitle")}
            </h4>

            <nav className="flex flex-col gap-3 text-sm text-slate-400">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-blue-400"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Réseaux */}
          <div>
            <h4 className="mb-5 font-semibold text-white">
              {t("contactTitle")}
            </h4>

            <div className="flex gap-4">
              <a
                href="https://github.com/Komoe-ctrl"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-800 p-3 transition hover:border-blue-500 hover:bg-slate-900"
              >
                <IconBrandGithub size={20} />
              </a>

              <a
                href="mailto:komoelogique@gmail.com"
                className="rounded-xl border border-slate-800 p-3 transition hover:border-blue-500 hover:bg-slate-900"
              >
                <IconMail size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/komoe-komoe-emile"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-800 p-3 transition hover:border-blue-500 hover:bg-slate-900"
              >
                <IconBrandLinkedin size={20} />
              </a>
            </div>

            <a
              href="#hero"
              className="mt-8 inline-flex items-center gap-2 text-sm text-blue-400 transition hover:text-blue-300"
            >
              <IconArrowUp size={18} />
              {t("backToTop")}
            </a>
          </div>
        </div>

        <div className="my-10 border-t border-slate-800" />

        <div className="flex flex-col items-center justify-between gap-3 text-sm text-slate-400 md:flex-row">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>

          <p>{t("builtWith")}</p>
        </div>
      </div>
    </footer>
  );
}

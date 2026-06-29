import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconArrowUp,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Présentation */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight">
              Komoe
              <span className="text-blue-400">.</span>
              dev
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              Développeur Web Fullstack spécialisé en Next.js,
              TypeScript, NestJS et Cybersécurité.
              J&apos;aide les entreprises à créer des applications
              modernes, rapides et sécurisées.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 font-semibold text-white">
              Navigation
            </h4>

            <nav className="flex flex-col gap-3 text-sm text-slate-400">
              <a
                href="#about"
                className="transition hover:text-blue-400"
              >
                À propos
              </a>

              <a
                href="#skills"
                className="transition hover:text-blue-400"
              >
                Compétences
              </a>

              <a
                href="#projects"
                className="transition hover:text-blue-400"
              >
                Projets
              </a>

              <a
                href="#experience"
                className="transition hover:text-blue-400"
              >
                Expérience
              </a>

              <a
                href="#contact"
                className="transition hover:text-blue-400"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Réseaux */}
          <div>
            <h4 className="mb-5 font-semibold text-white">
              Me contacter
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

              {/* Remplace le lien lorsque ton LinkedIn sera prêt */}
              <a
                href="#"
                className="rounded-xl border border-slate-800 p-3 transition hover:border-blue-500 hover:bg-slate-900"
              >
                <IconBrandLinkedin size={20} />
              </a>
            </div>

            <a
              href="#about"
              className="mt-8 inline-flex items-center gap-2 text-sm text-blue-400 transition hover:text-blue-300"
            >
              <IconArrowUp size={18} />
              Retour en haut
            </a>
          </div>
        </div>

        <div className="my-10 border-t border-slate-800" />

        <div className="flex flex-col items-center justify-between gap-3 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Komoe Komoe Emile. Tous droits réservés.
          </p>

          <p>
            Conçu avec Next.js, TypeScript, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
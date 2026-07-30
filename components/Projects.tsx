import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: string;
  badge: string;
  featured: boolean;
  image?: {
    src: string;
    alt: string;
  };
}

const projects: Project[] = [
  {
    title: "AKYNOVA GROUP",
    description:
      "Plateforme fullstack complète pour un groupe de services ivoirien à cinq départements — espace client, panel d'administration, blog, authentification par rôles.",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "NextAuth v5",
      "Tailwind CSS",
      "Framer Motion",
    ],
    status: "Terminé — démo sur demande",
    badge: "Projet principal",
    featured: true,
    image: {
      src: "/images/akynova.webp",
      alt: "Page d'accueil de la plateforme AKYNOVA GROUP, groupe de services ivoirien à cinq départements",
    },
  },
  {
    title: "FiscaCI",
    description:
      "Plateforme SaaS de gestion de la TVA et de conformité fiscale destinée aux entreprises ivoiriennes.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
    ],
    status: "En développement",
    badge: "Étude de faisabilité",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="mb-6">
        <span
          className="
            inline-flex
            rounded-full
            border
            border-blue-500/20
            bg-blue-500/10
            px-4
            py-2
            text-sm
            text-blue-300
          "
        >
          Réalisations
        </span>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Mes projets
        </h2>

        <p className="mt-4 max-w-2xl text-slate-400">
          Une sélection de projets fullstack modernes, conçus avec des
          architectures évolutives, performantes et sécurisées.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <SectionReveal
            key={project.title}
            delay={index * 0.15}
          >
            <div
              className={`
                group relative rounded-2xl border p-6
                transition-all duration-300
                hover:-translate-y-2
                hover:border-blue-500/40
                hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
                ${
                  project.featured
                    ? "border-blue-500/40 bg-slate-900/80"
                    : "border-slate-800 bg-slate-900/40"
                }
              `}
            >
              <div
                className="
                  absolute inset-0 rounded-2xl opacity-0
                  bg-gradient-to-r from-blue-500/10 to-cyan-500/10
                  blur-xl transition-opacity duration-300
                  group-hover:opacity-100
                "
              />

              {project.image && (
                <div className="relative -mx-6 -mt-6 mb-6 aspect-[2/1] overflow-hidden rounded-t-2xl border-b border-slate-800">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span
                    className={
                      project.featured
                        ? "mb-4 inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400"
                        : "mb-4 inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400"
                    }
                  >
                    {project.badge}
                  </span>

                  <span className="text-xs text-slate-500">
                    {project.status}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mb-5 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-lg border
                        border-slate-700
                        bg-slate-800/50
                        px-3 py-1
                        text-xs text-slate-300
                        transition-colors
                        group-hover:border-blue-500/30
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-end">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                </div>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
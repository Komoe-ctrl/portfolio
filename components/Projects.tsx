import SectionReveal from "@/components/SectionReveal";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: string;
  featured: boolean;
}

const projects: Project[] = [
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
    featured: true,
  },
  {
    title: "Gestion RH",
    description:
      "Application de gestion des employés, des congés, des présences et de l'administration des ressources humaines.",
    technologies: [
      "Laravel",
      "React",
      "MySQL",
    ],
    status: "Projet personnel",
    featured: false,
  },
  {
    title: "Dashboard Cybersécurité",
    description:
      "Plateforme de supervision réseau et de visualisation des événements de sécurité.",
    technologies: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
    ],
    status: "En cours",
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

              <div className="relative">
                <div className="flex items-center justify-between">
                  {project.featured ? (
                    <span
                      className="
                        mb-4 inline-flex rounded-full
                        bg-blue-500/10 px-3 py-1
                        text-xs font-medium text-blue-400
                      "
                    >
                      Projet principal
                    </span>
                  ) : (
                    <span
                      className="
                        mb-4 inline-flex rounded-full
                        bg-slate-800 px-3 py-1
                        text-xs text-slate-400
                      "
                    >
                      Projet
                    </span>
                  )}

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
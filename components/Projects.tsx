import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { IconBrandGithub, IconExternalLink, IconFileText } from "@tabler/icons-react";
import SectionReveal from "@/components/SectionReveal";

interface ProjectContent {
  title: string;
  description: string;
  technologies: string[];
  status: string;
  badgeLabel: string;
  imageAlt?: string;
  statusDetail?: string;
}

interface ProjectLinks {
  demo?: string;
  api?: string;
  code?: string;
}

const projectMeta: {
  featured: boolean;
  image?: string;
  links?: ProjectLinks;
  demoCredentials?: { email: string; password: string };
}[] = [
  {
    featured: true,
    links: {
      demo: "https://lavenet.vercel.app",
      api: "https://lavenet-api.onrender.com/docs",
      code: "https://github.com/Komoe-ctrl/lavenet",
    },
    demoCredentials: { email: "admin@lavenet.ci", password: "Demo1234!" },
  },
  {
    featured: true,
    image: "/images/akynova.webp",
  },
  {
    featured: false,
  },
];

export default async function Projects() {
  const t = await getTranslations("Projects");
  const items = t.raw("items") as ProjectContent[];
  const linksLabels = t.raw("linksLabels") as {
    demo: string;
    api: string;
    code: string;
  };

  const projects = items.map((item, index) => ({
    ...item,
    ...projectMeta[index],
  }));

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
          {t("badge")}
        </span>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          {t("title")}
        </h2>

        <p className="mt-4 max-w-2xl text-slate-400">
          {t("intro")}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <SectionReveal
            key={project.title}
            delay={index * 0.15}
          >
            <div
              className={`
                group relative flex h-full flex-col rounded-2xl border p-6
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
                    src={project.image}
                    alt={project.imageAlt ?? project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="relative flex flex-1 flex-col">
                <div className="flex items-center justify-between">
                  <span
                    className={
                      project.featured
                        ? "mb-4 inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400"
                        : "mb-4 inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400"
                    }
                  >
                    {project.badgeLabel}
                  </span>

                  <span className="text-xs text-slate-500">
                    {project.status}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mb-3 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                {project.statusDetail && (
                  <p className="mb-4 text-xs leading-relaxed text-slate-500">
                    {project.statusDetail}
                  </p>
                )}

                {project.links && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-blue-400 hover:text-blue-400"
                      >
                        <IconExternalLink size={14} />
                        {linksLabels.demo}
                      </a>
                    )}

                    {project.links.api && (
                      <a
                        href={project.links.api}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-blue-400 hover:text-blue-400"
                      >
                        <IconFileText size={14} />
                        {linksLabels.api}
                      </a>
                    )}

                    {project.links.code && (
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-blue-400 hover:text-blue-400"
                      >
                        <IconBrandGithub size={14} />
                        {linksLabels.code}
                      </a>
                    )}
                  </div>
                )}

                {project.demoCredentials && (
                  <div className="mb-4 rounded-lg border border-slate-800 bg-slate-950/50 px-3 py-2">
                    <p className="text-[11px] uppercase tracking-wide text-slate-500">
                      {t("demoCredentialsLabel")}
                    </p>

                    <p className="mt-1 font-mono text-xs text-slate-300">
                      {project.demoCredentials.email} / {project.demoCredentials.password}
                    </p>

                    <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500">
                      {t("demoNote")}
                    </p>
                  </div>
                )}

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

                <div className="mt-auto flex items-center justify-end">
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

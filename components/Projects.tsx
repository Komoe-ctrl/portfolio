import { getTranslations } from "next-intl/server";
import SectionReveal from "@/components/SectionReveal";
import ProjectCard from "@/components/ProjectCard";

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
  images?: string[];
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
    images: [
      "/images/akynova-hero.webp",
      "/images/akynova-dashboard.webp",
      "/images/akynova-admin.webp",
    ],
    links: {
      demo: "https://akynova-group.vercel.app",
      code: "https://github.com/Komoe-ctrl/akynova",
    },
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
            <ProjectCard
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              status={project.status}
              badgeLabel={project.badgeLabel}
              statusDetail={project.statusDetail}
              featured={project.featured}
              images={project.images}
              imageAlt={project.imageAlt}
              links={project.links}
              demoCredentials={project.demoCredentials}
              linksLabels={linksLabels}
              demoCredentialsLabel={t("demoCredentialsLabel")}
              demoNote={t("demoNote")}
            />
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}

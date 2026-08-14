import { getLocale, getTranslations } from "next-intl/server";
import SectionReveal from "@/components/SectionReveal";
import ProjectCard from "@/components/ProjectCard";
import { loadLabels, loadProjects, projectHref } from "@/lib/projects";

export default async function Projects() {
  const t = await getTranslations("Projects");
  const locale = await getLocale();
  const [projects, labels] = await Promise.all([loadProjects(), loadLabels()]);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10">
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

      <div className="grid max-w-5xl gap-6 md:grid-cols-2 md:gap-8">
        {projects.map((project, index) => (
          <SectionReveal
            key={project.meta.slug}
            delay={index * 0.12}
            y={24}
            className="h-full"
          >
            <ProjectCard
              project={project}
              labels={labels}
              href={projectHref(locale, project.meta.slug)}
            />
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}

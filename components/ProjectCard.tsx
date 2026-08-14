import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import ProjectLinks from "@/components/ProjectLinks";
import ProjectVisual from "@/components/ProjectVisual";
import StatusBadge from "@/components/StatusBadge";
import type { Project, ProjectLabels } from "@/lib/projects";

const CARD_SIZES = "(min-width: 768px) 45vw, calc(100vw - 3rem)";

export default function ProjectCard({
  project,
  labels,
  href,
}: {
  project: Project;
  labels: ProjectLabels;
  href: string;
}) {
  const { meta, content } = project;
  const extraTech = content.stack.length - content.cardTech.length;

  return (
    <article
      className="
        group flex h-full flex-col overflow-hidden rounded-2xl
        border border-slate-800 bg-slate-900/40 backdrop-blur
        transition duration-300 ease-out
        hover:-translate-y-1 hover:border-blue-500/40
        hover:shadow-[0_12px_40px_-16px_rgba(59,130,246,0.35)]
      "
    >
      <ProjectVisual
        src={meta.shots[0]}
        alt={content.shotAlts[0] ?? content.title}
        monogram={meta.monogram}
        caption={labels.noVisual}
        sizes={CARD_SIZES}
        className="border-b border-slate-800"
      />

      <div className="flex flex-1 flex-col p-6">
        <StatusBadge
          tone={meta.statusTone}
          label={content.status}
          className="self-start"
        />

        <h3 className="mt-4 text-xl font-semibold text-white">
          <Link
            href={href}
            className="
              rounded transition-colors hover:text-blue-400
              focus-visible:outline-2 focus-visible:outline-offset-4
              focus-visible:outline-blue-500
            "
          >
            {content.title}
          </Link>
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {content.tagline}
        </p>

        {content.cardTech.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {content.cardTech.map((tech) => (
              <li
                key={tech}
                className="
                  rounded-lg border border-slate-700 bg-slate-800/50
                  px-3 py-1 text-xs text-slate-300
                  transition-colors group-hover:border-blue-500/30
                "
              >
                {tech}
              </li>
            ))}

            {extraTech > 0 && (
              <li className="rounded-lg border border-slate-800 px-3 py-1 text-xs text-slate-500">
                +{extraTech}
              </li>
            )}
          </ul>
        )}

        <div className="mt-auto flex flex-col gap-4 pt-6">
          <ProjectLinks
            links={meta.links}
            labels={labels.linksLabels}
            variant="card"
          />

          <Link
            href={href}
            className="
              inline-flex items-center gap-1.5 self-start text-sm
              font-medium text-blue-400 transition-colors hover:text-blue-300
            "
          >
            {labels.cardCta}

            <IconArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  IconInfoCircle,
  IconPoint,
} from "@tabler/icons-react";
import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectLinks from "@/components/ProjectLinks";
import ProjectVisual from "@/components/ProjectVisual";
import SectionReveal from "@/components/SectionReveal";
import StatusBadge from "@/components/StatusBadge";
import { PROJECT_SLUGS, isProjectSlug } from "@/data/projects";
import { routing } from "@/i18n/routing";
import { loadLabels, loadProject } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

const HERO_SIZES = "(min-width: 1024px) 1024px, calc(100vw - 3rem)";
const GALLERY_SIZES = "(min-width: 640px) 45vw, calc(100vw - 3rem)";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    PROJECT_SLUGS.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isProjectSlug(slug)) return {};

  const t = await getTranslations({ locale, namespace: "Projects" });
  const items = t.raw("items") as Record<string, { title: string; tagline: string }>;
  const { title, tagline } = items[slug];

  const path = `/projets/${slug}`;

  return {
    title,
    description: tagline,

    alternates: {
      canonical: `${SITE_URL}/${locale}${path}`,
      languages: {
        fr: `${SITE_URL}/fr${path}`,
        en: `${SITE_URL}/en${path}`,
        "x-default": `${SITE_URL}/fr${path}`,
      },
    },

    openGraph: {
      type: "article",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      url: `${SITE_URL}/${locale}${path}`,
      title,
      description: tagline,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isProjectSlug(slug)) {
    notFound();
  }

  setRequestLocale(locale);

  const [{ meta, content }, labels] = await Promise.all([
    loadProject(slug),
    loadLabels(),
  ]);

  const gallery = meta.shots.slice(1);
  const state = content.state ?? [];

  return (
    <main className="relative overflow-x-hidden">
      <Background />

      <Navbar homeHref={`/${locale}`} />

      <article className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <Link
          href={`/${locale}#projects`}
          className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-blue-400"
        >
          <IconArrowLeft size={16} aria-hidden="true" />
          {labels.backToProjects}
        </Link>

        <header className="mt-8">
          <StatusBadge tone={meta.statusTone} label={content.status} />

          <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            {content.title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            {content.lead}
          </p>

          <ProjectLinks
            links={meta.links}
            labels={labels.linksLabels}
            variant="page"
            className="mt-8"
          />

          {content.note && (
            <p className="mt-8 flex max-w-3xl gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 text-sm leading-relaxed text-slate-400">
              <IconInfoCircle
                size={18}
                className="mt-0.5 shrink-0 text-slate-500"
                aria-hidden="true"
              />
              {content.note}
            </p>
          )}
        </header>

        <SectionReveal y={24}>
          <ProjectVisual
            src={meta.shots[0]}
            alt={content.shotAlts[0] ?? content.title}
            monogram={meta.monogram}
            caption={labels.noVisual}
            sizes={HERO_SIZES}
            eager
            className="mt-12 rounded-2xl border border-slate-800"
          />
        </SectionReveal>

        {content.stack.length > 0 && (
          <Section title={labels.sections.stack}>
            <ul className="flex flex-wrap gap-2">
              {content.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-1.5 text-sm text-slate-300"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {state.length > 0 && (
          <Section title={labels.sections.state}>
            <ul className="grid gap-3">
              {state.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm leading-relaxed text-slate-300"
                >
                  <IconPoint
                    size={18}
                    className="mt-0.5 shrink-0 text-amber-300"
                    aria-hidden="true"
                  />
                  {line}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {content.features.length > 0 && (
          <Section title={labels.sections.features}>
            <ul className="grid gap-3 md:grid-cols-2">
              {content.features.map((feature) => (
                <li
                  key={feature}
                  className="flex h-full gap-3 rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm leading-relaxed text-slate-300"
                >
                  <IconCheck
                    size={18}
                    className="mt-0.5 shrink-0 text-emerald-400"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {content.roadmap.length > 0 && (
          <Section
            title={labels.sections.roadmap}
            note={labels.sections.roadmapNote}
          >
            <ul className="flex flex-wrap gap-2">
              {content.roadmap.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-dashed border-slate-700 px-3 py-1.5 text-sm text-slate-500"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {content.decisions.length > 0 && (
          <Section title={labels.sections.decisions}>
            <div className="grid gap-4 md:grid-cols-2">
              {content.decisions.map((decision) => (
                <div
                  key={decision.title}
                  className="h-full rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
                >
                  <h3 className="text-base font-semibold text-white">
                    {decision.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {decision.description}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {meta.credentials && (
          <Section title={labels.sections.credentials}>
            <div className="grid gap-4 sm:grid-cols-2">
              {meta.credentials.map((credential) => (
                <div
                  key={credential.email}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <p className="text-[11px] uppercase tracking-wide text-slate-500">
                    {labels.credentialsRoles[credential.role]}
                  </p>

                  <p className="mt-2 font-mono text-sm break-all text-slate-200">
                    {credential.email}
                  </p>

                  <p className="mt-1 font-mono text-sm text-slate-400">
                    {credential.password}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {gallery.length > 0 && (
          <Section title={labels.sections.gallery}>
            <div
              className={`grid gap-4 ${gallery.length > 1 ? "sm:grid-cols-2" : ""}`}
            >
              {gallery.map((shot, index) => (
                <ProjectVisual
                  key={shot}
                  src={shot}
                  alt={content.shotAlts[index + 1] ?? content.title}
                  monogram={meta.monogram}
                  caption={labels.noVisual}
                  sizes={gallery.length > 1 ? GALLERY_SIZES : HERO_SIZES}
                  className="rounded-2xl border border-slate-800"
                />
              ))}
            </div>
          </Section>
        )}

        <div className="mt-20 flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-300">{labels.contactCtaTitle}</p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={`/${locale}#projects`}
              className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-blue-400"
            >
              <IconArrowLeft size={16} aria-hidden="true" />
              {labels.allProjects}
            </Link>

            <Link
              href={`/${locale}#contact`}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-blue-500"
            >
              {labels.contactCtaLabel}
              <IconArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </article>

      <Footer hrefBase={`/${locale}`} />
    </main>
  );
}

function Section({
  title,
  note,
  children,
}: {
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <SectionReveal y={24}>
      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>

        {note && <p className="mt-2 max-w-3xl text-sm text-slate-500">{note}</p>}

        <div className="mt-6">{children}</div>
      </section>
    </SectionReveal>
  );
}

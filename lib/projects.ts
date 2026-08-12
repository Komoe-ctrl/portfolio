import { getTranslations } from "next-intl/server";
import {
  PROJECTS,
  getProject,
  type ProjectMeta,
  type ProjectSlug,
} from "@/data/projects";

export interface ProjectDecision {
  title: string;
  description: string;
}

/** Textes d'un projet, tels que stockés dans `Projects.items.<slug>`. */
export interface ProjectContent {
  title: string;
  status: string;
  /** Accroche de la carte : une ou deux phrases. */
  tagline: string;
  /** Introduction de la page dédiée. */
  lead: string;
  /** Quatre technologies au maximum, pour la carte. */
  cardTech: string[];
  stack: string[];
  features: string[];
  roadmap: string[];
  decisions: ProjectDecision[];
  /** Avancement, pour les projets qui n'ont pas encore de fonctionnalités. */
  state?: string[];
  note?: string;
  shotAlts: string[];
}

/** Libellés partagés entre la section et les pages dédiées. */
export interface ProjectLabels {
  cardCta: string;
  backToProjects: string;
  allProjects: string;
  noVisual: string;
  linksLabels: { demo: string; api: string; code: string };
  sections: {
    features: string;
    roadmap: string;
    roadmapNote: string;
    decisions: string;
    stack: string;
    credentials: string;
    gallery: string;
    state: string;
    links: string;
  };
  credentialsRoles: { client: string; admin: string };
  contactCtaTitle: string;
  contactCtaLabel: string;
}

export interface Project {
  meta: ProjectMeta;
  content: ProjectContent;
}

async function getContents() {
  const t = await getTranslations("Projects");
  return t.raw("items") as Record<ProjectSlug, ProjectContent>;
}

export async function loadProjects(): Promise<Project[]> {
  const contents = await getContents();

  return PROJECTS.map((meta) => ({ meta, content: contents[meta.slug] }));
}

export async function loadProject(slug: ProjectSlug): Promise<Project> {
  const contents = await getContents();

  return { meta: getProject(slug), content: contents[slug] };
}

export async function loadLabels(): Promise<ProjectLabels> {
  const t = await getTranslations("Projects");

  return {
    cardCta: t("cardCta"),
    backToProjects: t("backToProjects"),
    allProjects: t("allProjects"),
    noVisual: t("noVisual"),
    linksLabels: t.raw("linksLabels"),
    sections: t.raw("sections"),
    credentialsRoles: t.raw("credentialsRoles"),
    contactCtaTitle: t("contactCtaTitle"),
    contactCtaLabel: t("contactCtaLabel"),
  };
}

/** Chemin de la page dédiée, préfixé par la locale. */
export function projectHref(locale: string, slug: ProjectSlug) {
  return `/${locale}/projets/${slug}`;
}

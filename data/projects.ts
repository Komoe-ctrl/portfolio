/**
 * Métadonnées non traduisibles des projets.
 * Les textes vivent dans messages/{fr,en}.json sous `Projects.items.<slug>`.
 */

export const PROJECT_SLUGS = ["lavenet", "akynova", "fiscalci", "alentour"] as const;

export type ProjectSlug = (typeof PROJECT_SLUGS)[number];

/** Ton du badge de statut : avancement réel du projet. */
export type StatusTone = "progress" | "done" | "study";

export interface ProjectLinks {
  demo?: string;
  api?: string;
  /** Un ou plusieurs dépôts (ex. application mobile + API séparées). */
  code?: string | string[];
}

export interface ProjectCredential {
  role: "client" | "admin";
  email: string;
  password: string;
}

export interface ProjectMeta {
  slug: ProjectSlug;
  statusTone: StatusTone;
  /**
   * Captures d'écran, de la plus représentative à la moins. La première sert de
   * visuel de carte et d'illustration principale sur la page dédiée ; les
   * suivantes alimentent la galerie. Un tableau vide déclenche le traitement
   * graphique sans image (voir `monogram`).
   * Les textes alternatifs correspondants sont dans `Projects.items.<slug>.shotAlts`.
   */
  shots: string[];
  /** Signe typographique utilisé quand le projet n'a aucun visuel. */
  monogram: string;
  links: ProjectLinks;
  credentials?: ProjectCredential[];
}

export const PROJECTS: ProjectMeta[] = [
  {
    slug: "lavenet",
    statusTone: "progress",
    shots: ["/images/lavenet-hero.webp"],
    monogram: "LN",
    links: {
      demo: "https://lavenet.vercel.app",
      api: "https://lavenet-api.onrender.com/docs",
      code: "https://github.com/Komoe-ctrl/lavenet",
    },
    credentials: [
      { role: "client", email: "client@lavenet.ci", password: "Demo1234!" },
      { role: "admin", email: "admin@lavenet.ci", password: "Demo1234!" },
    ],
  },
  {
    slug: "akynova",
    statusTone: "done",
    shots: [
      "/images/akynova-hero.webp",
      "/images/akynova-dashboard.webp",
      "/images/akynova-admin.webp",
    ],
    monogram: "AK",
    links: {
      demo: "https://akynova-group.vercel.app",
    },
  },
  {
    slug: "fiscalci",
    statusTone: "study",
    shots: [],
    monogram: "FCI",
    links: {},
  },
  {
    slug: "alentour",
    statusTone: "progress",
    shots: [],
    monogram: "ALT",
    links: {
      code: [
        "https://github.com/Komoe-ctrl/Events",
        "https://github.com/Komoe-ctrl/Events-api",
      ],
    },
  },
];

export function isProjectSlug(value: string): value is ProjectSlug {
  return (PROJECT_SLUGS as readonly string[]).includes(value);
}

export function getProject(slug: ProjectSlug): ProjectMeta {
  return PROJECTS.find((project) => project.slug === slug)!;
}

import Image from "next/image";

interface ProjectVisualProps {
  /** Capture d'écran ; absente, le visuel bascule sur un traitement graphique. */
  src?: string;
  alt: string;
  /** Signe typographique affiché à la place de la capture. */
  monogram: string;
  /** Explique l'absence de capture. */
  caption: string;
  sizes: string;
  /**
   * Visuel principal d'une page dédiée : chargement immédiat et priorité haute.
   * Sinon (cartes, galerie), chargement paresseux.
   */
  eager?: boolean;
  className?: string;
}

/**
 * Visuel d'un projet, en 2:1 dans tous les cas : le ratio est réservé avant le
 * chargement de l'image, donc aucun décalage de mise en page.
 */
export default function ProjectVisual({
  src,
  alt,
  monogram,
  caption,
  sizes,
  eager = false,
  className = "",
}: ProjectVisualProps) {
  return (
    <div
      className={`relative aspect-[2/1] overflow-hidden bg-slate-950 ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          className="object-cover object-top"
        />
      ) : (
        <>
          {/* Grille */}
          <div
            className="
              absolute inset-0
              [background-image:linear-gradient(rgba(148,163,184,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.09)_1px,transparent_1px)]
              [background-size:28px_28px]
            "
            aria-hidden="true"
          />

          {/* Hachures */}
          <div
            className="
              absolute inset-0
              [background-image:repeating-linear-gradient(135deg,rgba(251,191,36,0.07)_0_2px,transparent_2px_12px)]
            "
            aria-hidden="true"
          />

          {/* Aplat */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-slate-950"
            aria-hidden="true"
          />

          <div className="relative flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
            <span className="font-mono text-4xl font-semibold tracking-[0.25em] text-slate-300 md:text-5xl">
              {monogram}
            </span>

            <span className="max-w-[34ch] text-xs leading-relaxed text-slate-500">
              {caption}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

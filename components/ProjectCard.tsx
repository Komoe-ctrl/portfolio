"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { IconBrandGithub, IconExternalLink, IconFileText } from "@tabler/icons-react";

interface ProjectLinks {
  demo?: string;
  api?: string;
  code?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  status: string;
  badgeLabel: string;
  statusDetail?: string;
  featured: boolean;
  images?: string[];
  imageAlt?: string;
  links?: ProjectLinks;
  demoCredentials?: { email: string; password: string };
  linksLabels: { demo: string; api: string; code: string };
  demoCredentialsLabel: string;
  demoNote: string;
}

const CYCLE_MS = 2600;

function hostLabel(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export default function ProjectCard({
  title,
  description,
  technologies,
  status,
  badgeLabel,
  statusDetail,
  featured,
  images,
  imageAlt,
  links,
  demoCredentials,
  linksLabels,
  demoCredentialsLabel,
  demoNote,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const [canHover] = useState(() =>
    typeof window === "undefined"
      ? true
      : window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { amount: 0.6 });
  const prefersReducedMotion = useReducedMotion();

  const hasGallery = !!images && images.length > 1;
  const isPlaying = canHover ? hovered : isInView;
  const isCycling = hasGallery && !prefersReducedMotion && isPlaying;

  useEffect(() => {
    if (!isCycling || !images) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % images.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [isCycling, images]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        group relative flex h-full flex-col rounded-2xl border p-6
        transition-all duration-300
        hover:-translate-y-2
        hover:border-blue-500/40
        hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
        ${
          featured
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

      {images && images.length > 0 && (
        <div className="relative -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-2xl border-b border-slate-800">
          {hasGallery && links?.demo && (
            <div className="flex items-center gap-1.5 border-b border-slate-800 bg-slate-950/90 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-red-500/60" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/60" />
              <span className="h-2 w-2 rounded-full bg-green-500/60" />
              <span className="ml-2 truncate rounded bg-slate-800/80 px-2 py-0.5 text-[10px] text-slate-400">
                {hostLabel(links.demo)}
              </span>
            </div>
          )}

          <div className="relative aspect-[2/1]">
            <AnimatePresence initial={false}>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: isCycling ? 1.05 : 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 0.7, ease: "easeInOut" },
                  scale: { duration: CYCLE_MS / 1000 + 0.7, ease: "easeOut" },
                }}
                className="absolute inset-0"
              >
                <Image
                  src={images[activeIndex]}
                  alt={imageAlt ?? title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {hasGallery && (
            <div className="pointer-events-none absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
              {images.map((src, i) => (
                <span
                  key={src}
                  className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                    i === activeIndex ? "bg-blue-400" : "bg-slate-500/60"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-center justify-between">
          <span
            className={
              featured
                ? "mb-4 inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400"
                : "mb-4 inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400"
            }
          >
            {badgeLabel}
          </span>

          <span className="text-xs text-slate-500">{status}</span>
        </div>

        <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>

        <p className="mb-3 text-sm leading-relaxed text-slate-400">
          {description}
        </p>

        {statusDetail && (
          <p className="mb-4 text-xs leading-relaxed text-slate-500">
            {statusDetail}
          </p>
        )}

        {links && (
          <div className="mb-4 flex flex-wrap gap-2">
            {links.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-blue-400 hover:text-blue-400"
              >
                <IconExternalLink size={14} />
                {linksLabels.demo}
              </a>
            )}

            {links.api && (
              <a
                href={links.api}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-blue-400 hover:text-blue-400"
              >
                <IconFileText size={14} />
                {linksLabels.api}
              </a>
            )}

            {links.code && (
              <a
                href={links.code}
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

        {demoCredentials && (
          <div className="mb-4 rounded-lg border border-slate-800 bg-slate-950/50 px-3 py-2">
            <p className="text-[11px] uppercase tracking-wide text-slate-500">
              {demoCredentialsLabel}
            </p>

            <p className="mt-1 font-mono text-xs text-slate-300">
              {demoCredentials.email} / {demoCredentials.password}
            </p>

            <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500">
              {demoNote}
            </p>
          </div>
        )}

        <div className="mb-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
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
  );
}

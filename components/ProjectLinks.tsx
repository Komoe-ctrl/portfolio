import {
  IconBrandGithub,
  IconExternalLink,
  IconFileText,
} from "@tabler/icons-react";
import type { ProjectLinks as Links } from "@/data/projects";

const STYLES = {
  card: "gap-1.5 rounded-lg border px-3 py-1.5 text-xs",
  page: "gap-2 rounded-xl border px-4 py-2.5 text-sm",
} as const;

export default function ProjectLinks({
  links,
  labels,
  variant,
  className = "",
}: {
  links: Links;
  labels: { demo: string; api: string; code: string };
  variant: keyof typeof STYLES;
  className?: string;
}) {
  const entries = [
    { href: links.demo, label: labels.demo, Icon: IconExternalLink },
    { href: links.api, label: labels.api, Icon: IconFileText },
    { href: links.code, label: labels.code, Icon: IconBrandGithub },
  ].filter((entry) => !!entry.href);

  if (entries.length === 0) return null;

  const size = variant === "card" ? 14 : 18;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {entries.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            inline-flex items-center border-slate-700 bg-slate-800/50
            text-slate-300 transition-colors
            hover:border-blue-400 hover:text-blue-400
            ${STYLES[variant]}
          `}
        >
          <Icon size={size} />
          {label}
        </a>
      ))}
    </div>
  );
}

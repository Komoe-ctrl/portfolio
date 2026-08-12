import type { StatusTone } from "@/data/projects";

const TONES: Record<StatusTone, string> = {
  progress: "border-blue-500/30 bg-blue-500/10 text-blue-300",
  done: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  study: "border-amber-500/30 bg-amber-500/10 text-amber-200",
};

const DOTS: Record<StatusTone, string> = {
  progress: "bg-blue-400",
  done: "bg-emerald-400",
  study: "bg-amber-300",
};

export default function StatusBadge({
  tone,
  label,
  className = "",
}: {
  tone: StatusTone;
  label: string;
  className?: string;
}) {
  return (
    <span
      className={`
        inline-flex items-center gap-2 rounded-full border px-3 py-1
        text-xs font-medium ${TONES[tone]} ${className}
      `}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${DOTS[tone]}`}
        aria-hidden="true"
      />

      {label}
    </span>
  );
}

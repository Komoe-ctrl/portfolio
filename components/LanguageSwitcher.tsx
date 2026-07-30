"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("Navbar");

  return (
    <div
      className={`flex items-center gap-1 text-xs font-medium text-slate-500 ${className}`}
      aria-label={t("languageSwitcherAria")}
    >
      {routing.locales.map((loc, index) => (
        <span key={loc} className="flex items-center gap-1">
          <Link
            href={pathname}
            locale={loc}
            aria-current={loc === locale ? "true" : undefined}
            className={
              loc === locale
                ? "rounded-md px-1.5 py-1 text-blue-400"
                : "rounded-md px-1.5 py-1 transition hover:text-blue-400"
            }
          >
            {loc.toUpperCase()}
          </Link>

          {index < routing.locales.length - 1 && (
            <span className="text-slate-700" aria-hidden="true">
              /
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

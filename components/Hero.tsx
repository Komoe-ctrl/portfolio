import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section
      id="hero"
      className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-24 md:flex-row"
    >
      <div className="flex-1">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
          {t("badge")}
        </div>

        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-blue-400">
          {t("role")}
        </p>

        <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
          {t("firstName")}
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {t("lastName")}
          </span>
        </h1>

        <p className="mb-6 max-w-xl text-lg leading-relaxed text-slate-400">
          {t("intro")}
        </p>

        <div className="mb-8 inline-flex items-center rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300">
          {t("currentProject")}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-500"
          >
            {t("ctaProjects")}
          </a>

          <a
            href="/cv/CV-Komoe-Komoe-Emile-2026.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("ctaCvAria")}
            className="rounded-xl border border-slate-700 px-6 py-3 font-medium transition-all duration-300 hover:border-blue-400 hover:text-blue-400"
          >
            {t("ctaCv")}
          </a>
        </div>

        <div className="mt-10 flex gap-10 border-t border-slate-800 pt-8">
          <div>
            <div className="text-3xl font-bold text-blue-400">
              {t("statExperienceValue")}
            </div>
            <div className="text-sm text-slate-400">
              {t("statExperienceLabel")}
            </div>
          </div>

          <div>
            <div className="text-3xl font-bold text-blue-400">
              {t("statTrainedValue")}
            </div>
            <div className="text-sm text-slate-400">
              {t("statTrainedLabel")}
            </div>
          </div>

          <div>
            <div className="text-3xl font-bold text-blue-400">
              {t("statCertValue")}
            </div>
            <div className="text-sm text-slate-400">
              {t("statCertLabel")}
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

        <Image
          src="/images/photo.png"
          alt={t("photoAlt")}
          width={260}
          height={260}
          priority
          className="relative rounded-full border-4 border-slate-800 shadow-2xl shadow-blue-500/20 transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
}

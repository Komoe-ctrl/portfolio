import { getTranslations } from "next-intl/server";
import SectionReveal from "@/components/SectionReveal";

interface AboutFact {
  title: string;
  description: string;
}

export default async function About() {
  const t = await getTranslations("About");
  const facts = t.raw("facts") as AboutFact[];

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
        {t("badge")}
      </span>

      <h2 className="mt-4 text-4xl font-bold md:text-5xl">
        {t("title")}
      </h2>

      <p className="mt-4 max-w-3xl text-slate-400">
        {t("paragraph")}
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {facts.map((fact, index) => (
          <SectionReveal key={fact.title} delay={index * 0.1}>
            <div
              className="
                h-full rounded-2xl border border-slate-800
                bg-slate-900/40 p-6
                backdrop-blur
                transition-colors
                hover:border-blue-500/40
                hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]
              "
            >
              <h3 className="mb-2 text-lg font-semibold text-white">
                {fact.title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-400">
                {fact.description}
              </p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}

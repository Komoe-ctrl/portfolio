import { getTranslations } from "next-intl/server";
import SectionReveal from "@/components/SectionReveal";

interface Job {
  period: string;
  title: string;
  company: string;
  description: string;
}

interface EducationItem {
  period: string;
  title: string;
  school: string;
  description: string;
}

export default async function Experience() {
  const t = await getTranslations("Experience");
  const experiences = t.raw("jobs") as Job[];
  const education = t.raw("education") as EducationItem[];

  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="mb-12">
        <span
          className="
            inline-flex rounded-full border
            border-blue-500/20 bg-blue-500/10
            px-4 py-2 text-sm text-blue-300
          "
        >
          {t("badge")}
        </span>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          {t("title")}
        </h2>

        <p className="mt-4 max-w-2xl text-slate-400">
          {t("intro")}
        </p>
      </div>

      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <h3 className="mb-8 text-xl font-semibold text-white">
            {t("workTitle")}
          </h3>

          <div className="relative space-y-10 border-l border-slate-800 pl-8">
            {experiences.map((item, index) => (
              <SectionReveal
                key={item.title}
                delay={index * 0.15}
              >
                <div className="group relative">
                  <div
                    className="
                      absolute -left-[41px] top-2
                      h-4 w-4 rounded-full
                      bg-blue-500
                      ring-4 ring-slate-950
                      transition-transform
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      rounded-xl border border-slate-800
                      bg-slate-900/40 p-5
                      transition-all duration-300
                      hover:border-blue-500/30
                      hover:bg-slate-900/70
                      hover:shadow-[0_0_25px_rgba(59,130,246,0.12)]
                    "
                  >
                    <p className="text-xs font-medium text-blue-400">
                      {item.period}
                    </p>

                    <h4 className="mt-2 text-lg font-semibold">
                      {item.title}
                    </h4>

                    <p className="text-sm text-slate-400">
                      {item.company}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-8 text-xl font-semibold text-white">
            {t("educationTitle")}
          </h3>

          <div className="relative space-y-10 border-l border-slate-800 pl-8">
            {education.map((item, index) => (
              <SectionReveal
                key={item.title}
                delay={index * 0.15}
              >
                <div className="group relative">
                  <div
                    className="
                      absolute -left-[41px] top-2
                      h-4 w-4 rounded-full
                      bg-cyan-400
                      ring-4 ring-slate-950
                      transition-transform
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      rounded-xl border border-slate-800
                      bg-slate-900/40 p-5
                      transition-all duration-300
                      hover:border-cyan-500/30
                      hover:bg-slate-900/70
                      hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]
                    "
                  >
                    <p className="text-xs font-medium text-cyan-400">
                      {item.period}
                    </p>

                    <h4 className="mt-2 text-lg font-semibold">
                      {item.title}
                    </h4>

                    <p className="text-sm text-slate-400">
                      {item.school}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

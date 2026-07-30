"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface SkillCategory {
  title: string;
  skills: string[];
}

export default function Skills() {
  const t = useTranslations("Skills");
  const categories = t.raw("categories") as SkillCategory[];

  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="mb-12">
        <span
          className="
            inline-flex
            rounded-full
            border
            border-blue-500/20
            bg-blue-500/10
            px-4
            py-2
            text-sm
            text-blue-300
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

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <motion.div
            key={category.title}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              rounded-2xl
              border
              border-slate-800
              bg-slate-900/40
              p-6
              backdrop-blur
              transition-colors
              hover:border-blue-500/40
              hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]
            "
          >
            <h3 className="mb-5 text-xl font-semibold">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.15,
                  }}
                  className="
                    rounded-lg
                    border
                    border-slate-700
                    bg-slate-800/40
                    px-3
                    py-1.5
                    text-sm
                    text-slate-300
                    transition-colors
                    hover:border-blue-400
                    hover:text-blue-400
                  "
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

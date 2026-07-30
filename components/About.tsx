import { getTranslations } from "next-intl/server";

export default async function About() {
  const t = await getTranslations("About");

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
        {t("badge")}
      </span>

      <h2 className="mt-4 text-4xl font-bold md:text-5xl">
        {t("title")}
      </h2>

      <p className="mt-4 max-w-2xl text-slate-400">
        {t("paragraph")}
      </p>
    </section>
  );
}

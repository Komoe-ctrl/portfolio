import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center">
      <p className="mb-3 text-blue-400">{t("eyebrow")}</p>

      <h1 className="mb-6 text-6xl font-bold">{t("title")}</h1>

      <p className="mb-10 max-w-lg text-slate-400">{t("description")}</p>

      <Link
        href="/"
        className="rounded-xl bg-blue-600 px-6 py-3 font-medium transition-all hover:scale-105 hover:bg-blue-500"
      >
        {t("cta")}
      </Link>
    </main>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center">

      <p className="mb-3 text-blue-400">
        Erreur 404
      </p>

      <h1 className="mb-6 text-6xl font-bold">
        Page introuvable
      </h1>

      <p className="mb-10 max-w-lg text-slate-400">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>

      <Link
        href="/"
        className="
          rounded-xl
          bg-blue-600
          px-6
          py-3
          font-medium
          transition-all
          hover:scale-105
          hover:bg-blue-500
        "
      >
        Retour à l&apos;accueil
      </Link>

    </main>
  );
}
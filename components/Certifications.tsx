import SectionReveal from "@/components/SectionReveal";

const certifications = [
  {
    name: "CSCU",
    fullName: "Certified Secure Computer User",
    organization: "EC-Council",
    status: "Obtenu",
    year: "2025",
  },
  {
    name: "CND",
    fullName: "Certified Network Defender",
    organization: "EC-Council",
    status: "En cours",
    year: "2025",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="mb-12">
        <span
          className="
            inline-flex rounded-full
            border border-blue-500/20
            bg-blue-500/10
            px-4 py-2
            text-sm text-blue-300
          "
        >
          Certifications
        </span>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Certifications EC-Council
        </h2>

        <p className="mt-4 max-w-2xl text-slate-400">
          Certifications internationales en cybersécurité attestant de
          compétences en sécurité informatique, protection des systèmes
          et défense des réseaux.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <SectionReveal
            key={cert.name}
            delay={index * 0.15}
          >
            <div
              className="
                group rounded-2xl
                border border-slate-800
                bg-slate-900/40
                p-6
                transition-all duration-300
                hover:-translate-y-2
                hover:border-blue-500/40
                hover:bg-slate-900/70
                hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]
              "
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-3xl font-bold text-blue-400 transition-colors group-hover:text-cyan-300">
                  {cert.name}
                </h3>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    cert.status === "Obtenu"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-amber-500/10 text-amber-400"
                  }`}
                >
                  {cert.status}
                </span>
              </div>

              <p className="mb-2 text-lg font-semibold text-white">
                {cert.fullName}
              </p>

              <p className="mb-4 text-slate-400">
                {cert.organization}
              </p>

              <div className="flex items-center justify-between border-t border-slate-800 pt-4">
                <span className="text-sm text-slate-400">
                  Année : {cert.year}
                </span>

                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
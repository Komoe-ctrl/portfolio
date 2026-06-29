export default function Background() {
  return (
    <>
      {/* Dégradé principal */}
      <div
        className="
          fixed
          inset-0
          -z-50
          bg-slate-950
        "
      />

      {/* Halo bleu */}
      <div
        className="
          fixed
          left-1/2
          top-0
          -z-40
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-blue-600/10
          blur-[150px]
        "
      />

      {/* Halo cyan */}
      <div
        className="
          fixed
          bottom-0
          right-0
          -z-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[150px]
        "
      />

      {/* Grille */}
      <div
        className="
          fixed
          inset-0
          -z-30
          opacity-[0.04]
          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:50px_50px]
        "
      />
    </>
  );
}
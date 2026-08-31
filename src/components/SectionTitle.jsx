export default function SectionTitle({ label, title }) {
  return (
    <div className="mb-14 max-w-3xl">
      <div className="flex items-center gap-3 mb-4">
        <span className="h-px w-10 bg-cyan-400" />
        <p className="text-cyan-300 font-mono text-xs uppercase tracking-[0.28em]">{label}</p>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">{title}</h2>
    </div>
  );
}

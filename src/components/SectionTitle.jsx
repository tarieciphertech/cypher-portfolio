export default function SectionTitle({ label, title }) {
  return (
    <div className="mb-12">
      <p className="text-pink-400 font-semibold mb-2">{label}</p>
      <h2 className="text-4xl md:text-5xl font-black gradient-text">{title}</h2>
    </div>
  );
}

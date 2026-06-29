import { services } from "../data/profile";
import SectionTitle from "./SectionTitle";

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="Services" title="What I can help with." />
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(([title, desc]) => (
            <div className="glass rounded-3xl p-7" key={title}>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

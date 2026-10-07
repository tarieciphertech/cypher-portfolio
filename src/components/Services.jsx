import { motion } from "framer-motion";
import { services } from "../data/profile";
import SectionTitle from "./SectionTitle";

const numbers = ["01", "02", "03", "04", "05", "06"];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="Capabilities" title="From the first idea to the running system." />
        <div className="divide-y divide-white/10 border-y border-white/10">
          {services.map(([title, desc], index) => (
            <motion.div key={title} whileHover={{ x: 8 }} className="grid md:grid-cols-[80px_280px_1fr] gap-4 md:gap-8 items-center py-7 group">
              <span className="font-mono text-sm text-gray-600 group-hover:text-cyan-300 transition">{numbers[index]}</span>
              <h3 className="text-2xl font-bold group-hover:text-cyan-300 transition">{title}</h3>
              <p className="text-gray-400 leading-7 max-w-2xl">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

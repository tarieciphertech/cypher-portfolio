import { motion } from "framer-motion";
import { services } from "../data/profile";
import SectionTitle from "./SectionTitle";

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle label="03 / Capabilities" title="From the first idea to the running system." />
        <div className="divide-y divide-white/10 border-y border-white/10">
          {services.map(([title, desc], index) => (
            <motion.div key={title} whileHover={{x:8}} className="grid md:grid-cols-[70px_330px_1fr] gap-4 md:gap-10 items-center py-8 group">
              <span className="font-mono text-xs text-white/25 group-hover:text-[#00f2ea]">{String(index+1).padStart(2,"0")}</span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-[-.035em] group-hover:text-[#00f2ea] transition">{title}</h3>
              <p className="text-white/40 leading-7 max-w-2xl">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
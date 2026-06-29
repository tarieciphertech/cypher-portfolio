import { motion } from "framer-motion";
import { projects } from "../data/profile";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="Projects" title="Featured work." />
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(([title, desc]) => (
            <motion.div whileHover={{ y: -8 }} className="glass rounded-3xl p-7" key={title}>
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="text-gray-400 leading-7">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

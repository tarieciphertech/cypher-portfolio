import { motion } from "framer-motion";
import { projects } from "../data/profile";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="Selected Work" title="Projects built to solve real problems." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group glass rounded-3xl p-7 flex flex-col min-h-[310px] border-white/10 hover:border-cyan-400/30 transition-colors"
              key={project.title}
            >
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className="text-xs uppercase tracking-[0.2em] text-cyan-300">{project.category}</span>
                <span className="text-xs text-gray-500">{project.status}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-300 transition">{project.title}</h3>
              <p className="text-gray-400 leading-7 flex-1">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {project.stack.map((item) => (
                  <span key={item} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">{item}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

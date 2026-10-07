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
              className="group bg-white/[0.025] rounded-[2rem] p-7 flex flex-col min-h-[340px] border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all"
              key={project.title}
            >
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500">{project.category}</span>
                <span className="text-xs text-gray-500">{project.status}</span>
              </div>
              <div className="relative -mx-7 -mt-7 mb-7 h-48 overflow-hidden rounded-t-[2rem] bg-white/5"><img src={project.image} alt={`${project.title} project`} loading="lazy" className="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90" /><div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-transparent" /></div><h3 className="text-3xl font-bold mb-4 group-hover:text-white transition">{project.title}</h3>
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

import { motion } from "framer-motion";
import { projects } from "../data/profile";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 md:px-10 bg-[#080808]">
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle label="02 / Selected Work" title="Projects built to solve real problems." />
        <div className="divide-y divide-white/10 border-y border-white/10">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.45}} className="group grid lg:grid-cols-[70px_1fr_1.15fr] gap-5 lg:gap-10 py-8 items-center relative">
              <span className="font-mono text-xs text-white/25">{String(index+1).padStart(2,"0")}</span>
              <div>
                <p className="text-[10px] uppercase tracking-[.22em] text-[#00f2ea] mb-3">{project.category}</p>
                <h3 className="text-3xl md:text-4xl font-bold tracking-[-.04em]">{project.title}</h3>
                <p className="text-sm text-white/35 mt-3 max-w-xl leading-6">{project.desc}</p>
              </div>
              <div className="relative aspect-[16/8] overflow-hidden border border-white/10 bg-white/[.03]">
                <img src={project.image} alt={`${project.title} project preview`} loading="lazy" className="w-full h-full object-cover grayscale opacity-55 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03] transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <div className="absolute bottom-3 left-4 flex flex-wrap gap-2">
                  {project.stack.slice(0,3).map(item => <span key={item} className="text-[9px] uppercase tracking-[.14em] bg-black/60 px-2 py-1">{item}</span>)}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
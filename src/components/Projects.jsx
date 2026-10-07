import { motion } from "framer-motion";
import { projects } from "../data/profile";

export default function Projects(){
 return <section id="projects" className="relative py-28 md:py-40 px-5 md:px-10 bg-[#07090a]">
  <div className="max-w-[1500px] mx-auto">
   <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14"><div><p className="text-[10px] uppercase tracking-[.3em] text-[#00f2ea] mb-4">Selected work</p><h2 className="text-[clamp(3rem,7vw,7rem)] font-black tracking-[-.07em] leading-[.85]">BUILT.<br/><span className="text-white/20">SHIPPED.</span></h2></div><p className="max-w-md text-sm leading-7 text-white/40">Real software projects across recruitment, education, business operations, media, networking and infrastructure.</p></div>
   <div className="grid md:grid-cols-2 gap-4">
    {projects.map((project,index)=><motion.article key={project.title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.5,delay:index*.04}} className={`project-card group ${index===0?"md:col-span-2":""}`}>
     <div className={index===0?"aspect-[16/7]":"aspect-[16/10]"}><img src={project.image} alt={`${project.title} project preview`} loading="lazy" className="w-full h-full object-cover opacity-55 grayscale transition duration-700 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-[1.04]"/></div>
     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"/>
     <div className="absolute left-5 md:left-8 right-5 md:right-8 bottom-5 md:bottom-7"><div className="flex items-end justify-between gap-6"><div><p className="text-[9px] uppercase tracking-[.24em] text-[#00f2ea] mb-2">{project.category}</p><h3 className="text-2xl md:text-4xl font-bold tracking-[-.04em]">{project.title}</h3><p className="text-xs md:text-sm text-white/45 max-w-xl mt-2 leading-6">{project.desc}</p></div><span className="hidden sm:flex w-11 h-11 rounded-full border border-white/20 items-center justify-center text-lg group-hover:bg-[#00f2ea] group-hover:text-black group-hover:border-[#00f2ea] transition">↗</span></div><div className="flex flex-wrap gap-2 mt-4">{project.stack.map(item=><span key={item} className="text-[8px] uppercase tracking-[.16em] border border-white/15 bg-black/35 px-2 py-1 text-white/45">{item}</span>)}</div></div>
    </motion.article>)}
   </div>
  </div>
 </section>
}
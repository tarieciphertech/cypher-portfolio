import { motion } from "framer-motion";
import { services } from "../data/profile";

export default function Services(){
 return <section id="services" className="py-28 md:py-40 px-5 md:px-10">
  <div className="max-w-[1500px] mx-auto">
   <div className="grid lg:grid-cols-[.75fr_1.25fr] gap-16 lg:gap-24">
    <div className="lg:sticky lg:top-32 self-start"><p className="text-[10px] uppercase tracking-[.3em] text-[#00f2ea] mb-5">What I do</p><h2 className="text-[clamp(3rem,6vw,6rem)] font-black tracking-[-.07em] leading-[.86]">MORE THAN<br/><span className="text-white/20">JUST CODE.</span></h2><p className="text-sm text-white/40 leading-7 mt-7 max-w-sm">I work across the software and infrastructure stack — from the interface people use to the servers, databases and networks behind it.</p></div>
    <div className="border-t border-white/10">{services.map(([title,desc],index)=><motion.div key={title} whileHover={{x:8}} className="group grid grid-cols-[42px_1fr] md:grid-cols-[55px_1fr_auto] gap-4 md:gap-8 py-8 border-b border-white/10 items-start"><span className="font-mono text-[10px] text-white/20 group-hover:text-[#00f2ea] pt-1">{String(index+1).padStart(2,"0")}</span><div><h3 className="text-2xl md:text-3xl font-bold tracking-[-.04em] group-hover:text-[#00f2ea] transition">{title}</h3><p className="text-sm text-white/38 leading-7 max-w-2xl mt-3">{desc}</p></div><span className="hidden md:block text-white/20 group-hover:text-[#00f2ea] text-xl transition">↗</span></motion.div>)}</div>
   </div>
  </div>
 </section>
}
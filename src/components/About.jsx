import { motion } from "framer-motion";

const facts=[["01","BUILD","Web apps, APIs, dashboards and business platforms."],["02","CONNECT","Linux, cloud, networking and production deployments."],["03","PROTECT","Security-minded engineering and practical hardening."]];

export default function About(){
 return <section id="about" className="relative py-28 md:py-40 px-5 md:px-10 overflow-hidden">
  <div className="max-w-[1500px] mx-auto">
   <div className="border-y border-white/10 py-5 flex justify-between text-[9px] uppercase tracking-[.25em] text-white/25"><span>About Tarie</span><span>Tlokweng · Botswana</span></div>
   <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-14 lg:gap-24 py-20">
    <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}><p className="text-[clamp(2.2rem,5vw,5.5rem)] font-medium tracking-[-.055em] leading-[.98]">I don't build software just to make something exist.<span className="text-[#00f2ea]"> I build it to make something work better.</span></p></motion.div>
    <div><p className="text-white/45 text-base md:text-lg leading-8">I'm Tarie Cipher, a software engineer and founder of Cypher Technologies. My work crosses web development, custom business systems, backend engineering, cybersecurity, Linux, cloud infrastructure, networking and hands-on IT support.</p><div className="mt-12 border-t border-white/10">{facts.map(([num,title,text])=><div key={num} className="grid grid-cols-[38px_95px_1fr] gap-3 py-5 border-b border-white/10"><span className="font-mono text-[10px] text-[#00f2ea]">{num}</span><strong className="text-xs tracking-[.15em]">{title}</strong><span className="text-sm text-white/30">{text}</span></div>)}</div></div>
   </div>
  </div>
 </section>
}
import { motion } from "framer-motion";
import { FaGithub, FaYoutube, FaInstagram, FaLinkedin, FaEnvelope, FaTiktok } from "react-icons/fa";
import profile from "../assets/profile.png";
import hoverProfile from "../assets/hero.png";
import { profile as me } from "../data/profile";
import TypingRoles from "./TypingRoles";

const socials=[[me.github,FaGithub,"GitHub"],[me.youtube,FaYoutube,"YouTube"],[me.instagram,FaInstagram,"Instagram"],[me.tiktok,FaTiktok,"TikTok"],[me.linkedin,FaLinkedin,"LinkedIn"],[`mailto:${me.email}`,FaEnvelope,"Email"]];

export default function Hero(){
 return <section className="relative min-h-screen overflow-hidden bg-[#050607] pt-28">
  <div className="site-grid absolute inset-0"/><div className="hero-glow absolute -right-40 top-24 w-[620px] h-[620px] rounded-full opacity-70"/>
  <div className="relative max-w-[1500px] mx-auto px-5 md:px-10">
   <div className="min-h-[88vh] flex flex-col justify-center py-20">
    <motion.div initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{duration:.8}} className="max-w-6xl">
     <div className="flex items-center gap-3 mb-7"><span className="h-px w-12 bg-[#00f2ea]"/><span className="text-[10px] uppercase tracking-[.3em] text-white/45">Cypher Technologies · Tlokweng / Gaborone</span></div>
     <h1 className="font-black uppercase tracking-[-.085em] leading-[.78] text-[clamp(4.8rem,12vw,12rem)]">I BUILD<br/><span className="text-white/20">DIGITAL</span><br/><span className="text-[#00f2ea]">SYSTEMS.</span></h1>
     <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-10 items-end max-w-5xl">
      <div><p className="text-xl md:text-2xl text-white/85 max-w-3xl leading-tight">Software, business systems, cybersecurity and infrastructure — built to work in the real world.</p><p className="text-sm md:text-base text-white/40 max-w-2xl leading-7 mt-5">I'm Tarie Cipher, a software engineer and technology builder in Botswana. I turn messy business and technical problems into useful, dependable systems.</p><TypingRoles/></div>
      <a href="#projects" className="group flex items-center gap-3 text-[10px] uppercase tracking-[.22em] text-white/55 hover:text-[#00f2ea]">Explore the work<span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center group-hover:border-[#00f2ea] group-hover:translate-y-1">↓</span></a>
     </div>
    </motion.div>
    <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:1,delay:.15}} className="mt-14 grid lg:grid-cols-[1fr_360px] gap-8 items-end">
     <div className="flex flex-wrap gap-2 max-w-3xl">{["Web Development","Business Systems","APIs","Cybersecurity","Linux","Cloud","Networking","IT Support"].map(item=><span key={item} className="border border-white/10 bg-white/[.025] px-3 py-2 text-[9px] uppercase tracking-[.17em] text-white/40">{item}</span>)}</div>
     <div className="group relative h-[260px] md:h-[330px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0c0d] shadow-2xl">
      <img src={profile} alt={me.name} className="absolute inset-0 w-full h-full object-cover object-center grayscale transition-all duration-700 ease-out group-hover:opacity-0 group-hover:scale-105"/>
      <img src={hoverProfile} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-105"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"/>
      <div className="absolute left-5 right-5 bottom-5 flex items-end justify-between"><div><p className="text-xl font-bold tracking-tight">{me.name}</p><p className="text-[10px] uppercase tracking-[.2em] text-white/45 mt-1">Software · Systems · Security</p></div><span className="text-[9px] font-mono text-[#00f2ea]">BW / 2026</span></div>
      <div className="absolute top-4 right-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[8px] uppercase tracking-[.2em] text-white/50 opacity-0 group-hover:opacity-100 transition-opacity">Hover to reveal</div>
     </div>
    </motion.div>
    <div className="mt-8 border-t border-white/10 pt-4 flex justify-between items-center"><div className="flex gap-4 text-white/35">{socials.map(([href,Icon,label])=><a key={label} href={href} target={label==="Email"?undefined:"_blank"} rel={label==="Email"?undefined:"noreferrer"} aria-label={label} className="hover:text-[#00f2ea]"><Icon size={14}/></a>)}</div><span className="text-[9px] uppercase tracking-[.25em] text-white/25">Scroll to explore ↓</span></div>
   </div>
  </div>
 </section>
}
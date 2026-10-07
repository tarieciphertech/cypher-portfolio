import { motion } from "framer-motion";
import { FaGithub, FaYoutube, FaInstagram, FaLinkedin, FaEnvelope, FaTiktok } from "react-icons/fa";
import profile from "../assets/profile.png";
import { profile as me } from "../data/profile";
import TypingRoles from "./TypingRoles";

const tech = ["Web Development", "Business Systems", "Cybersecurity", "Linux", "Cloud", "Networking"];

export default function Hero() {
  const socials = [
    [me.github, FaGithub, "GitHub"], [me.youtube, FaYoutube, "YouTube"],
    [me.instagram, FaInstagram, "Instagram"], [me.tiktok, FaTiktok, "TikTok"],
    [me.linkedin, FaLinkedin, "LinkedIn"], [`mailto:${me.email}`, FaEnvelope, "Email"],
  ];

  return (
    <section className="min-h-screen bg-[#050505] pt-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-12 lg:gap-20 items-end min-h-[78vh] pb-20">
          <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-px bg-[#00f2ea]" />
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">{me.brand} / {me.location}</p>
            </div>
            <h1 className="text-[clamp(4rem,10vw,9.5rem)] font-black leading-[.82] tracking-[-0.075em] max-w-5xl">
              SOFTWARE<br />
              <span className="text-white/35">THAT</span> <span className="text-[#00f2ea]">WORKS.</span>
            </h1>
            <div className="mt-10 grid md:grid-cols-[1fr_auto] gap-8 items-end max-w-4xl">
              <div>
                <h2 className="text-lg md:text-xl font-medium text-white/85">Software Developer • Business Systems • Cybersecurity • IT Infrastructure</h2>
                <p className="text-white/45 mt-4 leading-7 max-w-2xl">Based in Tlokweng near Gaborone, Botswana. I build websites, business systems, APIs and secure digital infrastructure — and solve the networking, Linux, cloud and IT problems around them.</p>
                <TypingRoles />
              </div>
              <a href="#projects" className="group text-sm uppercase tracking-[0.2em] flex items-center gap-4 whitespace-nowrap">
                <span className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:border-[#00f2ea] group-hover:text-[#00f2ea]">↓</span>
                Selected work
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-10 pt-6 border-t border-white/10">
              {tech.map((item) => <span key={item} className="text-[11px] uppercase tracking-[0.16em] text-white/35">{item}</span>)}
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:1}} className="relative">
            <div className="absolute -top-6 -left-6 text-[10px] uppercase tracking-[.3em] text-[#00f2ea]">01 / Profile</div>
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-white/[.03]">
              <img src={profile} alt={me.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                <div><p className="text-2xl font-bold">{me.name}</p><p className="text-xs text-white/45 mt-1">Software • Systems • Security • IT</p></div>
                <span className="text-[#00f2ea] text-xs font-mono">BW / 2026</span>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-4">
              {socials.map(([href, Icon, label]) => <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noreferrer"} aria-label={label} className="text-white/35 hover:text-[#00f2ea]"><Icon size={15}/></a>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
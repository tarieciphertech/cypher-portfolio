import { motion } from "framer-motion";
import { FaGithub, FaYoutube, FaInstagram, FaLinkedin, FaEnvelope, FaTiktok } from "react-icons/fa";
import profile from "../assets/profile.png";
import { profile as me } from "../data/profile";
import AnimatedBackground from "./AnimatedBackground";
import TypingRoles from "./TypingRoles";

const tech = ["Web Development", "Business Systems", "Python APIs", "Cybersecurity", "Linux", "Cloud", "Networking", "IT Support"];

export default function Hero() {
  const socials = [
    [me.github, FaGithub, "GitHub"],
    [me.youtube, FaYoutube, "YouTube"],
    [me.instagram, FaInstagram, "Instagram"],
    [me.tiktok, FaTiktok, "TikTok"],
    [me.linkedin, FaLinkedin, "LinkedIn"],
    [`mailto:${me.email}`, FaEnvelope, "Email"],
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#080808] pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_15%_80%,rgba(255,255,255,0.04),transparent_28%)]" />
      <div className="fixed right-5 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 glass rounded-3xl p-3 z-40">
        {socials.map(([href, Icon, label]) => (
          <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noreferrer"} aria-label={label} title={label} className="w-11 h-11 rounded-full flex items-center justify-center text-white hover:text-cyan-300 hover:scale-110 hover:shadow-[0_0_20px_#00f2ea] transition-all">
            <Icon size={20} />
          </a>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_.9fr] gap-16 items-center relative z-10 w-full">
        <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
          <p className="text-xs uppercase tracking-[0.35em] text-gray-500 mb-6">{me.brand} • {me.location}</p>
          <h1 className="text-6xl md:text-7xl lg:text-[7.5rem] font-black leading-[0.9] tracking-[-0.055em]">I build <span className="text-white">digital systems<br className="hidden md:block" /> that matter.</span></h1>
          <h2 className="text-lg md:text-xl mt-9 text-gray-300 font-medium max-w-2xl">Software Developer • Business Systems • Cybersecurity • IT Infrastructure in Botswana</h2>
          <p className="text-gray-500 mt-5 text-base md:text-lg leading-8 max-w-xl">Based in Tlokweng near Gaborone, Botswana, I build websites, business systems, APIs and secure digital infrastructure — and help businesses solve networking, Linux, cloud and IT problems.</p>
          <TypingRoles />
          <div className="flex flex-wrap gap-2.5 mt-8">
            {tech.map((item) => <span key={item} className="px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">{item}</span>)}
          </div>
          <div className="flex flex-wrap gap-4 mt-9">
            <a href="#projects" className="px-7 py-3.5 rounded-full bg-white text-black hover:bg-gray-200 transition font-semibold">Explore my work →</a>
            <a href="#contact" className="px-7 py-3.5 rounded-full border border-white/15 hover:border-white/40 hover:bg-white/5 transition font-semibold">Let's talk</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative flex justify-center lg:justify-end">
          <div className="absolute w-[min(82vw,470px)] h-[min(82vw,470px)] rounded-full border border-white/10" />
          <div className="absolute w-[min(68vw,390px)] h-[min(68vw,390px)] rounded-full border border-white/5" />
          <img src={profile} alt={me.name} className="relative w-[min(70vw,410px)] h-[min(70vw,410px)] rounded-full object-cover object-center border border-white/15 shadow-[0_25px_100px_rgba(0,0,0,.65)]" />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass rounded-2xl px-5 py-4 w-72 hidden sm:block">
            <p className="text-white/60 font-mono text-sm">cypher@portfolio:~$ whoami</p>
            <p className="font-mono text-white mt-1">{me.name}</p>
            <p className="text-gray-500 text-xs mt-2">Software • Systems • Security • IT</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

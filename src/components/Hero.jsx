import { motion } from "framer-motion";
import { FaGithub, FaYoutube, FaInstagram, FaLinkedin, FaEnvelope, FaTiktok } from "react-icons/fa";
import profile from "../assets/profile.png";
import { profile as me } from "../data/profile";
import AnimatedBackground from "./AnimatedBackground";
import TypingRoles from "./TypingRoles";

const tech = ["React", "Python", "FastAPI", "Linux", "AWS", "Docker", "PostgreSQL", "Cybersecurity"];

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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#05020a] pt-24">
      <AnimatedBackground />
      <div className="fixed right-5 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 glass rounded-3xl p-3 z-40">
        {socials.map(([href, Icon, label]) => (
          <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noreferrer"} aria-label={label} title={label} className="w-11 h-11 rounded-full flex items-center justify-center text-white hover:text-cyan-300 hover:scale-110 hover:shadow-[0_0_20px_#00f2ea] transition-all">
            <Icon size={20} />
          </a>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_.9fr] gap-16 items-center relative z-10 w-full">
        <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">{me.brand}</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.02] tracking-tight">I build <span className="gradient-text">software that matters.</span></h1>
          <h2 className="text-xl md:text-2xl mt-7 text-gray-100 font-semibold">Software Engineer • Full-Stack Developer • Technology Builder</h2>
          <p className="text-gray-400 mt-5 text-lg leading-8 max-w-2xl">I turn ideas and messy real-world processes into useful digital products — from business platforms and APIs to Linux infrastructure and security-minded systems.</p>
          <TypingRoles />
          <div className="flex flex-wrap gap-2.5 mt-7">
            {tech.map((item) => <span key={item} className="px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">{item}</span>)}
          </div>
          <div className="flex flex-wrap gap-4 mt-9">
            <a href="#projects" className="px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 transition font-semibold glow">Explore my work →</a>
            <a href="#contact" className="px-7 py-3.5 rounded-xl border border-white/15 hover:border-cyan-400/50 hover:bg-white/5 transition font-semibold">Let's talk</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative flex justify-center">
          <div className="absolute w-[min(82vw,470px)] h-[min(82vw,470px)] rounded-full border border-purple-500/50 shadow-[0_0_100px_#8b5cf655]" />
          <div className="absolute w-[min(68vw,390px)] h-[min(68vw,390px)] rounded-full border border-cyan-400/20" />
          <img src={profile} alt={me.name} className="relative w-[min(70vw,410px)] h-[min(70vw,410px)] rounded-full object-cover object-center border-4 border-purple-400 shadow-[0_0_70px_#8b5cf6]" />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass rounded-2xl px-5 py-4 w-72 hidden sm:block">
            <p className="text-green-400 font-mono text-sm">cypher@portfolio:~$ whoami</p>
            <p className="font-mono text-purple-300 mt-1">{me.name}</p>
            <p className="text-gray-500 text-xs mt-2">Software • Systems • Security</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

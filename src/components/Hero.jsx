import { motion } from "framer-motion";
import {
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaTiktok,
} from "react-icons/fa";

import profile from "../assets/profile.png";
import { profile as me } from "../data/profile";
import AnimatedBackground from "./AnimatedBackground";
import TypingRoles from "./TypingRoles";

const tech = [
  "React", "FastAPI", "Python", "Linux", "AWS",
  "Docker", "GitHub", "Networking", "Cybersecurity"
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#05020a] pt-24">
      <AnimatedBackground />

     <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 glass rounded-3xl p-4 z-40">
  <a
    href={me.github}
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:text-cyan-400 hover:scale-110 hover:shadow-[0_0_20px_#00f2ea] transition-all duration-300"
    title="GitHub"
  >
    <FaGithub size={22} />
  </a>

  <a
    href={me.youtube}
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:text-cyan-400 hover:scale-110 hover:shadow-[0_0_20px_#00f2ea] transition-all duration-300"
    title="YouTube"
  >
    <FaYoutube size={22} />
  </a>

  <a
    href={me.instagram}
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:text-cyan-400 hover:scale-110 hover:shadow-[0_0_20px_#00f2ea] transition-all duration-300"
    title="Instagram"
  >
    <FaInstagram size={22} />
  </a>
  
  <a
  href={me.tiktok}
  target="_blank"
  rel="noreferrer"
  className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:text-cyan-400 hover:scale-110 hover:shadow-[0_0_20px_#00f2ea] transition-all duration-300"
  title="TikTok"
>
  <FaTiktok size={22} />
</a>

  <a
    href="www.linkedin.com/in/tarie-cipher"
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:text-cyan-400 hover:scale-110 hover:shadow-[0_0_20px_#00f2ea] transition-all duration-300"
    title="LinkedIn"
  >
  
    <FaLinkedin size={22} />
  </a>

  <a
    href={`mailto:${me.email}`}
    className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:text-cyan-400 hover:scale-110 hover:shadow-[0_0_20px_#00f2ea] transition-all duration-300"
    title="Email"
  >
    <FaEnvelope size={20} />
  </a>
</div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-400/30 text-green-300 text-sm mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available for new opportunities
          </div>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight">
            Hi, I'm <br />
            <span className="gradient-text">Tarie Cipher</span>
          </h1>

          <h2 className="text-2xl mt-6 text-gray-100 font-bold">
            Building Software. Securing Systems. Creating the Future.
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Founder of Cypher Technologies • Full-Stack Developer • Cybersecurity Enthusiast
          </p>

          <TypingRoles />

          <p className="mt-8 text-gray-400 leading-8 text-lg max-w-xl">
            I build practical digital solutions that solve real-world problems.
            From web applications to network infrastructures, I turn ideas into
            powerful, secure, and scalable systems.
          </p>

          <div className="flex flex-wrap gap-3 mt-7">
            {tech.map((item) => (
              <span key={item} className="px-4 py-2 rounded-full bg-white/5 border border-purple-500/30 text-sm text-gray-300 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-5 mt-10">
            <a href="#projects" className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold glow">
              View Projects →
            </a>
            <a href="#contact" className="px-8 py-4 rounded-xl border border-white/20 hover:border-purple-500 transition">
              Download Resume ↓
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 glass rounded-2xl p-5">
            <div><h3 className="text-3xl font-black">12+</h3><p className="text-gray-400 text-sm">Projects</p></div>
            <div><h3 className="text-3xl font-black">4+</h3><p className="text-gray-400 text-sm">Years Building</p></div>
            <div><h3 className="text-3xl font-black">10+</h3><p className="text-gray-400 text-sm">Technologies</p></div>
            <div><h3 className="text-3xl font-black">∞</h3><p className="text-gray-400 text-sm">Learning</p></div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity:0, scale:.85 }} animate={{ opacity:1, scale:1 }} transition={{ duration:1 }} className="relative flex justify-center">
          <div className="absolute w-[470px] h-[470px] rounded-full border-4 border-purple-500 shadow-[0_0_100px_#8b5cf6]" />

          <img
            src={profile}
            alt={me.name}
            className="w-[410px] h-[410px] rounded-full object-cover object-center border-4 border-purple-400 shadow-[0_0_70px_#8b5cf6]"
          />

          <div className="absolute -left-20 bottom-4 glass rounded-2xl p-6 w-72 hidden xl:block">
            <p className="text-green-400 font-mono mb-3">cipher@portfolio:~$</p>
            <p className="font-mono text-gray-300">&gt; whoami</p>
            <p className="font-mono text-purple-300 mb-3">Tarie Cipher</p>
            <p className="font-mono text-gray-300">&gt; skills</p>
            <p className="font-mono text-purple-300 mb-3">React • Python • Linux</p>
            <p className="font-mono text-gray-300">&gt; status</p>
            <p className="font-mono text-green-300">Available for work</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

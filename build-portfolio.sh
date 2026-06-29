#!/usr/bin/env bash
set -e

mkdir -p src/components

cat > tailwind.config.js <<'EOT'
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
EOT

cat > src/index.css <<'EOT'
@tailwind base;
@tailwind components;
@tailwind utilities;

html { scroll-behavior: smooth; }

body {
  margin: 0;
  background: #05020a;
  color: white;
  font-family: Inter, system-ui, sans-serif;
}

.gradient-text {
  background: linear-gradient(90deg, #ff4ecd, #8b5cf6, #38bdf8);
  -webkit-background-clip: text;
  color: transparent;
}

.glass {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  backdrop-filter: blur(16px);
}

.glow {
  box-shadow: 0 0 40px rgba(236,72,153,0.35);
}
EOT

cat > src/App.jsx <<'EOT'
import { motion } from "framer-motion";
import { Code2, Shield, Server, Wrench, Github, Youtube, Instagram, Mail, ExternalLink } from "lucide-react";
import "./index.css";

const projects = [
  { title: "JobBoard Platform", desc: "A job search and recruitment platform with admin tools, SEO, email notifications, and business features." },
  { title: "FootballFlix", desc: "A football streaming MVP for local and regional football content with a scalable platform vision." },
  { title: "MiniFlix LAN", desc: "A LAN-based media streaming system designed to reduce data usage and serve local networks." },
  { title: "Internet Café Portal", desc: "A captive portal system for managing users, sessions, time access, and admin control." },
  { title: "CypherTech Website", desc: "A business website for Cypher Technologies focused on digital services and IT solutions." },
  { title: "Phone Network Checker", desc: "A Python tool repurposed to identify mobile network providers for on-net bundle decisions." },
];

const skills = ["React", "JavaScript", "Python", "FastAPI", "Flask", "Linux", "GitHub", "Networking", "Cybersecurity", "IT Support", "SQLite", "PostgreSQL"];

const services = [
  { icon: Code2, title: "Web Development", desc: "Modern responsive websites, dashboards, and business platforms." },
  { icon: Shield, title: "Cybersecurity", desc: "Basic security checks, hardening, and safer digital workflows." },
  { icon: Server, title: "Linux & Systems", desc: "Linux setup, server support, deployment, and troubleshooting." },
  { icon: Wrench, title: "IT Repairs", desc: "Computer, phone, software, networking, and technical support." },
];

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-black text-xl gradient-text">CypherTech</a>
        <div className="hidden md:flex gap-7 text-sm text-gray-300">
          <a href="#about" className="hover:text-pink-400">About</a>
          <a href="#skills" className="hover:text-pink-400">Skills</a>
          <a href="#projects" className="hover:text-pink-400">Projects</a>
          <a href="#services" className="hover:text-pink-400">Services</a>
          <a href="#contact" className="hover:text-pink-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-24 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-pink-600/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-pink-400 mb-4 font-semibold">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Tarie <span className="gradient-text">Cipher.</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mt-5">
            Full-Stack Developer, Cybersecurity Enthusiast & Founder of Cypher Technologies
          </h2>
          <p className="text-gray-400 mt-6 max-w-xl">
            I build modern websites, business systems, secure digital platforms, and practical IT solutions for real-world problems.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#projects" className="bg-pink-600 hover:bg-pink-700 px-7 py-3 rounded-full font-bold glow">View Projects</a>
            <a href="#contact" className="glass px-7 py-3 rounded-full font-bold">Contact Me</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-400 p-1 glow">
            <div className="w-full h-full rounded-full bg-[#08030f] flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl font-black gradient-text">CT</div>
                <p className="text-gray-400 mt-3">Cypher Technologies</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionTitle({ small, title }) {
  return (
    <div className="mb-12">
      <p className="text-pink-400 font-semibold mb-2">{small}</p>
      <h2 className="text-4xl md:text-5xl font-black gradient-text">{title}</h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle small="About Me" title="Building digital solutions that matter." />
        <div className="glass rounded-3xl p-8 md:p-10">
          <p className="text-gray-300 text-lg leading-8">
            I am a technology entrepreneur, full-stack developer, IT support specialist, and cybersecurity enthusiast.
            Through Cypher Technologies, I focus on software development, websites, business systems, Linux support,
            networking, repairs, and secure digital transformation.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle small="Tech Stack" title="Skills & tools I use." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill} className="glass rounded-2xl p-5 text-center hover:border-pink-500/50 transition">{skill}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle small="Portfolio" title="Featured projects." />
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div whileHover={{ y: -8 }} key={project.title} className="glass rounded-3xl p-7">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 leading-7">{project.desc}</p>
              <button className="mt-6 text-pink-400 flex items-center gap-2">View Details <ExternalLink size={16} /></button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle small="Services" title="What I can help with." />
        <div className="grid md:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass rounded-3xl p-7">
              <Icon className="text-pink-400 mb-5" size={34} />
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center glass rounded-3xl p-10">
        <h2 className="text-4xl md:text-5xl font-black gradient-text mb-5">Let's work together.</h2>
        <p className="text-gray-400 mb-8">Need a website, system, repair service, or IT solution?</p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:mtshietarie@gmail.com" className="bg-pink-600 px-6 py-3 rounded-full flex items-center gap-2 glow"><Mail size={18}/> Email</a>
          <a href="https://github.com/tarieciphertech" className="glass px-6 py-3 rounded-full flex items-center gap-2"><Github size={18}/> GitHub</a>
          <a href="https://youtube.com/@tarietech5958" className="glass px-6 py-3 rounded-full flex items-center gap-2"><Youtube size={18}/> YouTube</a>
          <a href="https://www.instagram.com/unclecipher" className="glass px-6 py-3 rounded-full flex items-center gap-2"><Instagram size={18}/> Instagram</a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </main>
  );
}
EOT

node <<'EOT'
const fs = require("fs");
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
pkg.homepage = "https://tarieciphertech.github.io/cypher-portfolio";
pkg.scripts = {
  ...pkg.scripts,
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
};
fs.writeFileSync("package.json", JSON.stringify(pkg, null, 2));
EOT

npm run build

echo "Done. Test with: npm run dev"

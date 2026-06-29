#!/usr/bin/env bash
set -e

mkdir -p src/components src/data

cat > src/data/profile.js <<'EOF'
export const profile = {
  name: "Tarie Cipher",
  brand: "Cypher Technologies",
  role: "Full-Stack Developer",
  tagline: "Cybersecurity Enthusiast • IT Support Specialist • Tech Entrepreneur",
  email: "mtshietarie@gmail.com",
  github: "https://github.com/tarieciphertech",
  youtube: "https://youtube.com/@tarietech5958",
  instagram: "https://www.instagram.com/unclecipher",
};

export const skills = [
  "React", "JavaScript", "Python", "FastAPI", "Flask", "Linux",
  "GitHub", "Networking", "Cybersecurity", "SQLite", "PostgreSQL", "IT Support"
];

export const projects = [
  ["JobBoard Platform", "Recruitment and job search platform with admin tools, SEO, and email notifications."],
  ["FootballFlix", "Football streaming MVP for local and regional football content."],
  ["MiniFlix LAN", "LAN-based movie streaming system for local networks."],
  ["Internet Café Portal", "Captive portal for user sessions, time access, and admin control."],
  ["CypherTech Website", "Business website for Cypher Technologies."],
  ["Network Provider Checker", "Python tool for checking mobile number network providers."]
];

export const services = [
  ["Web Development", "Responsive websites, dashboards, and business platforms."],
  ["Software Systems", "Custom systems for businesses and startups."],
  ["Cybersecurity", "Basic security checks, hardening, and safer workflows."],
  ["Linux Support", "Linux setup, troubleshooting, and deployment."],
  ["Networking", "Wi-Fi, LAN, hotspot, and network support."],
  ["Device Repairs", "Computer, phone, and software repair support."]
];
EOF

cat > src/components/SectionTitle.jsx <<'EOF'
export default function SectionTitle({ label, title }) {
  return (
    <div className="mb-12">
      <p className="text-pink-400 font-semibold mb-2">{label}</p>
      <h2 className="text-4xl md:text-5xl font-black gradient-text">{title}</h2>
    </div>
  );
}
EOF

cat > src/components/About.jsx <<'EOF'
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="About" title="Building practical digital solutions." />
        <div className="glass rounded-3xl p-8 md:p-10">
          <p className="text-gray-300 text-lg leading-8">
            I am a full-stack developer, cybersecurity enthusiast, IT support specialist,
            and founder of Cypher Technologies. I create websites, business systems,
            networking solutions, Linux setups, and secure digital platforms for real-world needs.
          </p>
        </div>
      </div>
    </section>
  );
}
EOF

cat > src/components/Skills.jsx <<'EOF'
import { skills } from "../data/profile";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="Skills" title="Tools and technologies." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div className="glass rounded-2xl p-5 text-center hover:border-pink-500/60 transition" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
EOF

cat > src/components/Projects.jsx <<'EOF'
import { motion } from "framer-motion";
import { projects } from "../data/profile";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="Projects" title="Featured work." />
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(([title, desc]) => (
            <motion.div whileHover={{ y: -8 }} className="glass rounded-3xl p-7" key={title}>
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="text-gray-400 leading-7">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
EOF

cat > src/components/Services.jsx <<'EOF'
import { services } from "../data/profile";
import SectionTitle from "./SectionTitle";

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="Services" title="What I can help with." />
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(([title, desc]) => (
            <div className="glass rounded-3xl p-7" key={title}>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
EOF

cat > src/components/Contact.jsx <<'EOF'
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center glass rounded-3xl p-10">
        <h2 className="text-4xl md:text-5xl font-black gradient-text mb-5">Let's work together.</h2>
        <p className="text-gray-400 mb-8">Need a website, system, or IT solution?</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={`mailto:${profile.email}`} className="bg-pink-600 px-6 py-3 rounded-full glow">Email Me</a>
          <a href={profile.github} className="glass px-6 py-3 rounded-full">GitHub</a>
          <a href={profile.youtube} className="glass px-6 py-3 rounded-full">YouTube</a>
          <a href={profile.instagram} className="glass px-6 py-3 rounded-full">Instagram</a>
        </div>
      </div>
    </section>
  );
}
EOF

cat > src/components/Footer.jsx <<'EOF'
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-500 border-t border-white/10">
      © {new Date().getFullYear()} {profile.brand}. Built by Tarie Cipher.
    </footer>
  );
}
EOF

cat > src/App.jsx <<'EOF'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <main className="min-h-screen bg-[#05020a] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
EOF

npm run build
echo "Done. Run: npm run dev"

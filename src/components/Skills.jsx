import { motion } from "framer-motion";
import { skills } from "../data/profile";
import SectionTitle from "./SectionTitle";

const groups = [
  ["01", "Frontend", ["React", "JavaScript", "Tailwind CSS"]],
  ["02", "Backend", ["Python", "FastAPI", "Flask", "REST APIs"]],
  ["03", "Infrastructure", ["Linux", "Docker", "AWS", "PostgreSQL"]],
  ["04", "Security & IT", ["Cybersecurity", "Networking", "IT Support"]],
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 border-y border-white/5 bg-white/[0.015]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="Technology" title="A practical stack for building from interface to infrastructure." />
        <div className="grid lg:grid-cols-4 gap-4 mb-10">
          {groups.map(([num, title, items]) => (
            <motion.div whileHover={{ y: -5 }} key={title} className="glass rounded-2xl p-6 border-white/10 hover:border-cyan-400/30 transition">
              <span className="font-mono text-xs text-cyan-300">{num}</span>
              <h3 className="text-xl font-bold mt-3 mb-5">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => <span key={item} className="text-xs text-gray-300 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10">{item}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 opacity-70">
          {skills.map((skill) => <span key={skill} className="text-xs text-gray-500">#{skill.replaceAll(" ", "-")} </span>)}
        </div>
      </div>
    </section>
  );
}

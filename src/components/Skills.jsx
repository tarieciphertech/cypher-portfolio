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

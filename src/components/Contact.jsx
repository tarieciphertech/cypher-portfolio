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

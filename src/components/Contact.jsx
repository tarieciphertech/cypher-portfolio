import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto glass rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-400/10 pointer-events-none" />
        <div className="relative">
          <p className="text-cyan-300 text-sm uppercase tracking-[0.25em] mb-4">Start a project</p>
          <h2 className="text-4xl md:text-6xl font-black gradient-text mb-5">Have a problem worth solving?</h2>
          <p className="text-gray-400 text-lg leading-8 max-w-2xl mx-auto mb-9">Tell me what you're trying to build, automate, fix, or improve. Let's turn the idea into something useful.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="bg-purple-600 hover:bg-purple-500 px-7 py-3.5 rounded-full glow font-semibold transition">Email me</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="glass px-6 py-3.5 rounded-full hover:border-cyan-400/40 transition">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="glass px-6 py-3.5 rounded-full hover:border-cyan-400/40 transition">LinkedIn</a>
            <a href={profile.tiktok} target="_blank" rel="noreferrer" className="glass px-6 py-3.5 rounded-full hover:border-cyan-400/40 transition">TikTok</a>
          </div>
        </div>
      </div>
    </section>
  );
}

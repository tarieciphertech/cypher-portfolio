import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto bg-white/[0.035] border border-white/10 rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_55%)] pointer-events-none" />
        <div className="relative">
          <p className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-5">Start a project • Tlokweng, Botswana</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-5 tracking-tight">Have a problem worth solving?</h2>
          <p className="text-gray-400 text-lg leading-8 max-w-2xl mx-auto mb-9">Based in Tlokweng and serving Gaborone and clients across Botswana, I can help build, automate, fix, or improve your digital systems.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="bg-white text-black hover:bg-gray-200 px-7 py-3.5 rounded-full font-semibold transition">Email me</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="glass px-6 py-3.5 rounded-full hover:border-cyan-400/40 transition">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="glass px-6 py-3.5 rounded-full hover:border-cyan-400/40 transition">LinkedIn</a>
            <a href={profile.tiktok} target="_blank" rel="noreferrer" className="glass px-6 py-3.5 rounded-full hover:border-cyan-400/40 transition">TikTok</a>
          </div>
        </div>
      </div>
    </section>
  );
}

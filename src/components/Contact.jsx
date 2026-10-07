import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto border-t border-white/10 pt-10">
        <p className="text-[11px] uppercase tracking-[.25em] text-[#00f2ea]">04 / Contact</p>
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end mt-8">
          <h2 className="text-[clamp(3.5rem,8vw,8rem)] font-black leading-[.82] tracking-[-.07em]">LET'S<br/><span className="text-white/35">BUILD.</span></h2>
          <div className="max-w-md">
            <p className="text-white/40 leading-7 mb-7">Based in Tlokweng and serving Gaborone and clients across Botswana. If you have a system to build, a problem to solve, or infrastructure to fix, let's talk.</p>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="bg-[#00f2ea] text-black px-6 py-3 font-bold hover:bg-white">Email me</a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="border border-white/15 px-5 py-3 hover:border-[#00f2ea] hover:text-[#00f2ea]">GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="border border-white/15 px-5 py-3 hover:border-[#00f2ea] hover:text-[#00f2ea]">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
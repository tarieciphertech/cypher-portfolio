import { profile } from "../data/profile";

export default function Contact(){
 return <section id="contact" className="relative overflow-hidden py-32 md:py-48 px-5 md:px-10 bg-[#00f2ea] text-black">
  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_75%_30%,white,transparent_35%)]"/>
  <div className="relative max-w-[1500px] mx-auto"><p className="text-[10px] uppercase tracking-[.3em] font-bold mb-8">Have a project in mind?</p><div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end"><h2 className="text-[clamp(4rem,10vw,11rem)] font-black tracking-[-.09em] leading-[.76]">LET'S<br/>BUILD.</h2><div className="max-w-sm"><p className="text-black/65 leading-7 mb-7">Based in Tlokweng, serving Gaborone and clients across Botswana. Tell me what you're building, fixing or trying to improve.</p><a href={`mailto:${profile.email}`} className="inline-flex items-center gap-4 rounded-full bg-black text-white px-6 py-4 text-sm font-bold hover:bg-white hover:text-black">Start a conversation <span>↗</span></a><p className="text-[10px] uppercase tracking-[.18em] text-black/45 mt-5">{profile.email}</p></div></div></div>
 </section>
}
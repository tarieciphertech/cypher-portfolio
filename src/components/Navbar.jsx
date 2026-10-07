import { profile } from "../data/profile";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-[1500px] mx-auto px-5 md:px-10 pt-5">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/55 backdrop-blur-2xl px-5 py-3">
          <a href="#" className="text-lg font-black tracking-[-.06em]">CY<span className="text-[#00f2ea]">.</span>TECH</a>
          <div className="hidden md:flex items-center gap-7 text-[10px] uppercase tracking-[.22em] text-white/45">
            <a href="#about" className="hover:text-[#00f2ea]">About</a><a href="#projects" className="hover:text-[#00f2ea]">Work</a><a href="#services" className="hover:text-[#00f2ea]">Services</a><a href="#contact" className="hover:text-[#00f2ea]">Contact</a>
          </div>
          <a href={`mailto:${profile.email}`} className="rounded-full bg-white text-black text-[10px] font-bold uppercase tracking-[.16em] px-4 py-2 hover:bg-[#00f2ea]">Let's talk ↗</a>
        </div>
      </div>
    </nav>
  );
}
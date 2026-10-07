import { profile } from "../data/profile";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur-xl">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a href="#" className="text-xl font-black tracking-[-0.04em]">
          TARIE<span className="text-[#00f2ea]">.</span>CIPHER
        </a>
        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.22em] text-white/45">
          <a href="#about" className="hover:text-[#00f2ea]">About</a>
          <a href="#projects" className="hover:text-[#00f2ea]">Work</a>
          <a href="#services" className="hover:text-[#00f2ea]">Services</a>
          <a href="#skills" className="hover:text-[#00f2ea]">Stack</a>
          <a href="#contact" className="hover:text-[#00f2ea]">Contact</a>
        </div>
        <a href={`mailto:${profile.email}`} className="hidden sm:block text-xs uppercase tracking-[0.18em] border border-white/15 px-4 py-2 hover:border-[#00f2ea]/60 hover:text-[#00f2ea]">
          Start a project
        </a>
      </div>
    </nav>
  );
}
import { profile } from "../data/profile";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#070707]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl md:text-2xl font-black tracking-tight text-white">
          <span className="text-white">Tarie</span><span className="text-white/40">.</span><span className="text-white">Cipher</span>
        </a>

        <div className="hidden md:flex items-center gap-9 text-[13px] uppercase tracking-[0.18em] text-gray-400">
          <a href="#about" className="hover:text-pink-400">About</a>
          <a href="#skills" className="hover:text-pink-400">Skills</a>
          <a href="#projects" className="hover:text-pink-400">Projects</a>
          <a href="#services" className="hover:text-pink-400">Services</a>
          <a href="#contact" className="hover:text-pink-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}

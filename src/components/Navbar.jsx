import { profile } from "../data/profile";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-black gradient-text">
          {profile.brand}
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
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

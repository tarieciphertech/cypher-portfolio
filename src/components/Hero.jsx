import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.25),transparent_35%)]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-pink-400 font-semibold mb-4">Hello, I'm</p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            {profile.name.split(" ")[0]}{" "}
            <span className="gradient-text">{profile.name.split(" ")[1]}.</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mt-5">
            {profile.role}
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            {profile.tagline}
          </p>

          <p className="text-gray-400 mt-6 max-w-xl leading-8">
            I build modern websites, business systems, secure digital platforms,
            and practical IT solutions for businesses, startups, and communities.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#projects" className="bg-pink-600 hover:bg-pink-700 px-7 py-3 rounded-full font-bold glow">
              View Projects
            </a>
            <a href="#contact" className="glass px-7 py-3 rounded-full font-bold">
              Work With Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-400 p-1 glow">
            <div className="w-full h-full rounded-full bg-[#08030f] flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl md:text-8xl font-black gradient-text">CT</div>
                <p className="text-gray-400 mt-3">{profile.brand}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

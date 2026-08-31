import SectionTitle from "./SectionTitle";

const highlights = [
  ["01", "Build", "Web apps, APIs, dashboards, and business platforms."],
  ["02", "Connect", "Linux, networking, cloud infrastructure, and deployments."],
  ["03", "Protect", "Security-minded engineering and practical system hardening."],
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="About Me" title="Technology should solve problems, not create more of them." />
        <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-8 items-stretch">
          <div className="glass rounded-3xl p-8 md:p-10">
            <p className="text-gray-300 text-lg leading-8">I'm Tarie Cipher, a software engineer and founder of Cypher Technologies. I enjoy taking a real-world problem, understanding how it actually works, and building a practical digital solution around it.</p>
            <p className="text-gray-400 text-lg leading-8 mt-5">My work sits at the intersection of software development, infrastructure, networking, and cybersecurity. I care about systems that are understandable, maintainable, and genuinely useful to the people who rely on them.</p>
          </div>
          <div className="grid gap-4">
            {highlights.map(([num, title, text]) => (
              <div key={num} className="glass rounded-2xl p-6 border-white/10 hover:border-purple-400/30 transition">
                <span className="text-xs font-mono text-purple-300">{num}</span>
                <h3 className="text-xl font-bold mt-2">{title}</h3>
                <p className="text-gray-400 mt-2 leading-6">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import SectionTitle from "./SectionTitle";

const highlights = [
  ["01","Build","Web apps, APIs, dashboards, and business platforms."],
  ["02","Connect","Linux, networking, cloud infrastructure, and deployments."],
  ["03","Protect","Security-minded engineering and practical system hardening."],
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-10 bg-[#080808]">
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle label="01 / About" title="Technology should solve problems, not create more of them." />
        <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-14">
          <div>
            <p className="text-2xl md:text-4xl leading-[1.15] tracking-[-.035em] text-white/85">I'm Tarie Cipher, a software engineer and founder of Cypher Technologies based in Tlokweng, Botswana, near Gaborone.</p>
            <p className="text-white/40 text-base md:text-lg leading-8 mt-8 max-w-2xl">My work sits at the intersection of software development, infrastructure, networking, and cybersecurity. I take real-world problems, understand how they actually work, and build practical systems around them.</p>
          </div>
          <div className="border-t border-white/10">
            {highlights.map(([num,title,text]) => <div key={num} className="grid grid-cols-[50px_100px_1fr] gap-3 py-5 border-b border-white/10"><span className="font-mono text-xs text-[#00f2ea]">{num}</span><strong>{title}</strong><span className="text-sm text-white/35">{text}</span></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
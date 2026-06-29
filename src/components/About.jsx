import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="About" title="Building practical digital solutions." />
        <div className="glass rounded-3xl p-8 md:p-10">
          <p className="text-gray-300 text-lg leading-8">
            I am a full-stack developer, cybersecurity enthusiast, IT support specialist,
            and founder of Cypher Technologies. I create websites, business systems,
            networking solutions, Linux setups, and secure digital platforms for real-world needs.
          </p>
        </div>
      </div>
    </section>
  );
}

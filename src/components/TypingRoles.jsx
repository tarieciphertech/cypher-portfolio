import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "Linux Administrator",
  "Cybersecurity Enthusiast",
  "Tech Entrepreneur",
];

export default function TypingRoles() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const current = roles[index];
    let i = 0;

    const typing = setInterval(() => {
      setText(current.slice(0, i + 1));
      i++;

      if (i === current.length) {
        clearInterval(typing);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
          setText("");
        }, 1200);
      }
    }, 70);

    return () => clearInterval(typing);
  }, [index]);

  return (
    <p className="text-purple-300 font-mono text-lg mt-3">
      &gt; {text}<span className="animate-pulse">_</span>
    </p>
  );
}

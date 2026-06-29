import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-500 border-t border-white/10">
      © {new Date().getFullYear()} {profile.brand}. Built by Tarie Cipher.
    </footer>
  );
}

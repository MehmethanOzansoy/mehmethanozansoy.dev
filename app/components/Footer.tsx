import React from "react";
import Link from "next/link";
import {
  Github,
  Instagram,
  Linkedin,
  Twitch,
  Terminal,
  Cpu,
  Twitter,
  ArrowLeftCircle,
  Youtube,
} from "lucide-react";

const social = [
  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com/1",
    color: "hover:text-white",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/1",
    color: "hover:text-blue-400",
  },
  {
    label: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/1",
    color: "hover:text-purple-400",
  },
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/1/",
    color: "hover:text-pink-400",
  },
  {
    label: "Kaggle",
    icon: Terminal,
    href: "https://www.kaggle.com/1",
    color: "hover:text-orange-400",
  },
  {
    label: "Youtube",
    icon: Youtube,
    href: "https://www.youtube.com/c/1",
    color: "hover:text-purple-400",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 w-full py-4 px-6 border-t border-white/10 bg-slate-900/60 backdrop-blur-2xl z-50">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent shadow-[0_-4px_12px_rgba(59,130,246,0.3)]"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2.5 group cursor-default">
            <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <Cpu className="w-4 h-4 text-blue-400 group-hover:rotate-90 transition-transform duration-500" />
            </div>

            <span className="font-sans font-semibold text-base tracking-tight text-slate-100">
              Ozansoy<span className="text-blue-400">Software</span>
            </span>
          </div>
          <p className="text-[11px] font-medium text-slate-400/80 flex items-center gap-1.5 ml-1">
            <span className="inline-block w-1 h-1 rounded-full bg-blue-400 animate-pulse"></span>
            Computer Engineer ❄️
          </p>
        </div>
        <div className="flex items-center gap-8">
          {social.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-slate-300 transition-all duration-300 hover:scale-120 active:scale-95 ${item.color}`}
              aria-label={item.label}
            >
              <item.icon size={20} strokeWidth={1.75} />
            </Link>
          ))}
        </div>

        {/* Sağ: Status - Daha temiz font ve kutu tasarımı */}
        <div className="hidden md:flex flex-col items-end gap-2">
          <span className="text-[10px] font-medium text-slate-500 tracking-wide uppercase">
            Istanbul // UTC+3
          </span>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-white/5 text-center">
        <p className="text-[11px] text-slate-500 font-medium tracking-[0.15em] opacity-70">
          © {currentYear} — DESIGNED BY YOURNAME — CODED WITH PASSION
        </p>
      </div>
    </footer>
  );
};

export default Footer;

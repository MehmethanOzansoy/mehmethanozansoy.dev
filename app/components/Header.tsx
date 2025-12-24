"use client";

import React from "react";
import Link from "next/link";
import { Github, Terminal, Cpu } from "lucide-react";

const navLinks = [
  { name: "About Me", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Resume", href: "/resume" },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#020617] py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <Terminal className="w-4 h-4 text-blue-500" />
          </div>
          <span className="font-sans font-bold text-sm tracking-tight text-slate-100">
            Mehmet Han Ozansoy<span className="text-blue-500">.DEV</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-[13px] font-medium text-slate-400 hover:text-white transition-all rounded-md hover:bg-white/5"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Sağ: İkon ve Durum */}
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com"
            target="_blank"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Github size={19} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

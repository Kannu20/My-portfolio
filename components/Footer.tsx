'use client';

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 py-14 border-t border-gray-800 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* LEFT — BRAND */}
        <div className="text-center md:text-left">
          <div className="text-lg font-bold tracking-wide">
            <span className="font-mono text-cyan-400">&lt;</span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Kanishak Todwal
            </span>
            <span className="font-mono text-cyan-400"> /&gt;</span>
          </div>

          <div className="text-sm text-gray-400 mt-1">
            Full-Stack Developer · MERN · Next.js
          </div>
        </div>

        {/* CENTER — SOCIALS */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Kannu20"
            target="_blank"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/kanishak-todwal/"
            target="_blank"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:kannutodwal@gmail.com"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* RIGHT — COPYRIGHT */}
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Kanishak Todwal. Built with Next.js.
        </div>

      </div>
    </footer>
  );
};

export default Footer;

"use client";

import React, { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Demostración', href: '#demostracion' },
    { name: 'Soluciones', href: '#soluciones' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-[#0B1120]/80 backdrop-blur-md border-b border-slate-800 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <a href="#inicio" className="flex items-center gap-2 cursor-pointer z-50">
          <div className="bg-emerald-500/20 p-2 rounded-lg">
            <Leaf className="text-emerald-400 w-6 h-6" />
          </div>
          <span className="text-2xl font-bold text-white tracking-wider">CENVIX</span>
        </a>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 z-50 md:hidden">
          <button 
            className="text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
        
        <div className="hidden md:block w-30"></div>
      </div>

      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#0B1120] border-b border-slate-800 transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-300 hover:text-emerald-400 font-medium py-2 border-b border-slate-800/50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
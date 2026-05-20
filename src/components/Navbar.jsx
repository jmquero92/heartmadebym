import { useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { 
    name: "Inicio", 
    href: "/", 
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
  },
  { 
    name: "Catálogo", 
    href: "/collections",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
  }, 
  { 
    name: "Historia", 
    href: "/#historia",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path></svg>
  },
  { 
    name: "Contacto", 
    href: "/#contacto",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
  },
];

export default function Navbar() {
  return (
    <>
      {/* --- NAVBAR SUPERIOR (Escritorio + Logo en móvil) --- */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-500 bg-[#050505]/90 border-b border-white/5 shadow-lg transform-gpu backdrop-blur-md"
      >
        {/* LOGO */}
        <a href="/" className="flex items-center gap-3 cursor-pointer z-50 relative group w-full justify-center md:justify-start md:w-auto">
          <img 
            src="/logo.webp" 
            alt="Heartmade Logo" 
            fetchpriority="high"
            className="h-10 w-10 md:h-12 md:w-12 object-cover rounded-full border border-white/20 shadow-md group-hover:scale-105 transition-transform duration-300"
          />
          <span className="font-serif text-lg italic text-white tracking-wide">
            Heartmade By M
          </span>
        </a>

        {/* MENÚ ESCRITORIO (Oculto en móvil) */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center gap-10">
          {navLinks.slice(1).map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="group relative text-xs uppercase tracking-[0.25em] text-white/90 hover:text-white transition-colors duration-300"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-rose-200 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </motion.nav>

      {/* --- BOTTOM APP BAR (Solo Móvil) --- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#050505]/95 backdrop-blur-lg border-t border-white/10 pb-safe shadow-[0_-10px_20px_rgba(0,0,0,0.3)]">
        <div className="flex items-center justify-around px-4 py-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex flex-col items-center gap-1 text-white/60 hover:text-rose-300 active:scale-95 transition-all"
            >
              <div className="p-1">
                {link.icon}
              </div>
              <span className="text-[9px] uppercase tracking-wider font-medium">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Colecciones", href: "/collections" }, 
  { name: "Historia", href: "/#historia" },
  { name: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        // CAMBIO CLAVE AQUÍ:
        // 'bg-[#050505]/90': Color casi negro pero con un 10% de transparencia.
        // Hemos quitado 'backdrop-blur' para asegurar que vaya fluido, 
        // pero ahora verás sutilmente el contenido pasar por detrás.
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-500 bg-[#050505]/90 border-b border-white/5 shadow-lg"
      >
        {/* LOGO */}
        <a href="/" className="flex items-center gap-3 cursor-pointer z-50 relative group">
          <img 
            src="/logo.jpeg" 
            alt="Heartmade Logo" 
            className="h-10 w-10 md:h-12 md:w-12 object-cover rounded-full border border-white/20 shadow-md group-hover:scale-105 transition-transform duration-300"
          />
          <span className="hidden md:block font-serif text-lg italic text-white tracking-wide">
            Heartmade By M
          </span>
        </a>

        {/* MENÚ ESCRITORIO */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="group relative text-xs uppercase tracking-[0.25em] text-white/90 hover:text-white transition-colors duration-300 drop-shadow-sm"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-rose-200 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* BOTÓN MÓVIL */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="group z-50 flex flex-col items-end gap-[6px] md:hidden p-2 cursor-pointer"
        >
          <span className={`h-[1px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-8 shadow-sm"}`} />
          <span className={`h-[1px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "w-6 group-hover:w-8 shadow-sm"}`} />
          <span className={`h-[1px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "w-6 -rotate-45 translate-y-[-7px]" : "w-4 group-hover:w-8 shadow-sm"}`} />
        </button>
      </motion.nav>

      {/* MENÚ MÓVIL */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            // Fondo oscuro semitransparente (95%) para el menú móvil también
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#050505]/95 backdrop-blur-[2px] md:hidden"
          >
            <motion.div 
              className="flex flex-col gap-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-3xl italic text-white/90 hover:text-rose-200 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
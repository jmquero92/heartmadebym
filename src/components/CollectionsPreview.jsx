import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import allProducts from "../data/catalog.json";

const pool = {
  navidad: allProducts.filter(p => p.category === "Navidad").map(p => p.img),
  accesorios: allProducts.filter(p => p.category === "Accesorios").map(p => p.img),
  amigurumi: allProducts.filter(p => p.category === "Amigurumi").map(p => p.img),
  bebes: allProducts.filter(p => p.category === "Para Bebés").map(p => p.img),
  marcapaginas: allProducts.filter(p => p.category === "Marcapáginas").map(p => p.img)
};

const collections = [
  { id: 1, title: "Navidad", subtitle: "Decoración de Invierno", category: "navidad", offset: false },
  { id: 2, title: "Accesorios", subtitle: "Estética y Complementos", category: "accesorios", offset: true },
  { id: 3, title: "Amigurumi", subtitle: "Figuras Tejidas", category: "amigurumi", offset: false },
  { id: 4, title: "Para Bebés", subtitle: "Ternura y Cuidado", category: "bebes", offset: true },
  { id: 5, title: "Marcapáginas", subtitle: "Detalles en Papel", category: "marcapaginas", offset: false }
];

export default function CollectionsPreview() {
  const [images, setImages] = useState({
    navidad: pool.navidad[0],
    accesorios: pool.accesorios[0],
    amigurumi: pool.amigurumi[0],
    bebes: pool.bebes[0],
    marcapaginas: pool.marcapaginas[0]
  });

  const getRandomImg = (category, currentImg) => {
    const choices = pool[category].filter(img => img !== currentImg);
    return choices[Math.floor(Math.random() * choices.length)];
  };

  useEffect(() => {
    // CAMBIADO: Ahora el intervalo es de 8000ms (8 segundos)
    const interval = setInterval(() => {
      setImages(prev => ({
        navidad: getRandomImg("navidad", prev.navidad),
        accesorios: getRandomImg("accesorios", prev.accesorios),
        amigurumi: getRandomImg("amigurumi", prev.amigurumi),
        bebes: getRandomImg("bebes", prev.bebes),
        marcapaginas: getRandomImg("marcapaginas", prev.marcapaginas)
      }));
    }, 8000); 
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full px-4 md:px-6 py-12 md:py-32 rounded-t-[2rem] md:rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-20 mt-[-2rem] overflow-hidden bg-[#fafaf9]">
      <div className="relative z-10 max-w-[1600px] mx-auto">
        
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-4"
          >
            Nuestras Creaciones
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-[#2c2420] italic"
          >
            Limited Editions
          </motion.h2>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-5 gap-6 md:gap-8 pb-8 lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`flex flex-col gap-4 group cursor-pointer flex-none w-[70vw] lg:w-auto snap-center ${item.offset ? 'lg:mt-12' : ''}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 border border-white/40">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={images[item.category]}
                    src={images[item.category]} 
                    alt={item.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 h-full w-full object-cover" 
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                
                <div className="absolute bottom-4 left-4 z-20 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                   <span className="text-[9px] bg-[#2c2420] text-white px-3 py-1.5 uppercase tracking-widest font-bold shadow-lg">
                     Explorar
                   </span>
                </div>
              </div>

              <div className="text-center lg:text-left px-2">
                <h3 className="text-lg text-[#2c2420] font-serif italic mb-1 group-hover:text-rose-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[9px] text-neutral-500 uppercase tracking-widest leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <a 
            href="/collections" 
            className="border-b border-[#2c2420]/30 pb-1 text-xs uppercase tracking-[0.3em] text-[#2c2420] hover:text-rose-500 hover:border-rose-500 transition-all cursor-pointer"
          >
            Ver catálogo completo
          </a>
        </div>
      </div>
    </section>
  );
}
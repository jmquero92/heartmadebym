import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import allProducts from "../data/catalog.json";

const categories = ["Todo", "Navidad", "Accesorios", "Amigurumi","Para Bebés", "Marcapáginas"];

export default function CollectionsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("Todo");
  const [selectedId, setSelectedId] = useState(null);

  // Filtrado de productos
  const filteredProducts = useMemo(() => {
    return selectedCategory === "Todo" 
      ? allProducts 
      : allProducts.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  // Encontrar el producto seleccionado actualmente
  const selectedProduct = useMemo(() => allProducts.find((p) => p.id === selectedId), [selectedId]);

  // --- LÓGICA DE NAVEGACIÓN (NEXT / PREV) ---
  const handleNext = useCallback(() => {
    if (!selectedId) return;
    const currentIndex = filteredProducts.findIndex(p => p.id === selectedId);
    if (currentIndex === -1) return; 
    const nextIndex = (currentIndex + 1) % filteredProducts.length; 
    setSelectedId(filteredProducts[nextIndex].id);
  }, [selectedId, filteredProducts]);

  const handlePrev = useCallback(() => {
    if (!selectedId) return;
    const currentIndex = filteredProducts.findIndex(p => p.id === selectedId);
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + filteredProducts.length) % filteredProducts.length; 
    setSelectedId(filteredProducts[prevIndex].id);
  }, [selectedId, filteredProducts]);

  // --- TECLADO (Flechas y ESC) ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedId) return;
      if (e.key === "Escape") setSelectedId(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId, handleNext, handlePrev]); 

  return (
    <div className="w-full max-w-7xl mx-auto px-6 pb-20">
      
      {/* --- PESTAÑAS DE FILTROS --- */}
      <div className="flex overflow-x-auto snap-x justify-start md:justify-center gap-6 md:gap-10 mb-12 md:mb-16 pb-4 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
                setSelectedCategory(cat);
                setSelectedId(null); 
            }}
            className={`text-[11px] md:text-xs uppercase tracking-[0.2em] pb-2 border-b-2 transition-all duration-300 whitespace-nowrap flex-none snap-center ${
              selectedCategory === cat 
                ? "text-[#2c2420] border-[#2c2420] font-bold" 
                : "text-neutral-400 border-transparent hover:text-rose-400 hover:border-rose-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* --- GRID DE FOTOS --- */}
      <motion.div 
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 md:gap-x-8 gap-y-6 md:gap-y-12"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group cursor-pointer"
              onClick={() => setSelectedId(product.id)} 
            >
              {/* Contenedor Imagen */}
              <div className="relative aspect-[3/4] overflow-hidden bg-white mb-4 rounded-sm shadow-sm">
                <motion.img 
                  layoutId={`img-${product.id}`} 
                  src={product.img} 
                  alt={product.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {e.target.style.display = 'none'}} 
                />
                
                {/* Overlay oscuro al Hover */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                {/* Icono Lupa */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <svg className="w-8 h-8 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                </div>
              </div>

              {/* Info: Solo Categoría */}
              <div className="text-center mt-2">
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.25em] text-[#2c2420]/70 font-medium group-hover:text-rose-500 transition-colors">
                  {product.category}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* --- LIGHTBOX (PANTALLA COMPLETA) --- */}
      <AnimatePresence>
        {selectedId && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10"
            onClick={() => setSelectedId(null)}
          >
            
            {/* Botón CERRAR */}
            <button 
                className="absolute top-6 right-6 z-50 text-white/70 hover:text-white transition-colors p-2"
                onClick={() => setSelectedId(null)}
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            {/* Botón ANTERIOR */}
            <button 
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-3 transition-all"
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>

            {/* Botón SIGUIENTE */}
            <button 
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-3 transition-all"
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>

            {/* IMAGEN CENTRAL */}
            <motion.div 
                className="relative max-w-5xl w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()} 
            >
                <motion.img 
                    layoutId={`img-${selectedProduct.id}`} 
                    key={selectedProduct.id}
                    src={selectedProduct.img} 
                    alt={selectedProduct.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }} 
                    transition={{ duration: 0.3 }}
                    className="max-h-[85vh] max-w-full object-contain shadow-2xl rounded-sm"
                />
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
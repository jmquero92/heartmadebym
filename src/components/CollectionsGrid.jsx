import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- TUS PRODUCTOS ---
// --- PRODUCTOS ACTUALIZADOS ---
const allProducts = [
  // --- INVIERNO ---
  { id: 100, title: "Colección Invierno", category: "Navidad", img: "/invierno.webp" },
  { id: 107, title: "Bufanda Cálida 0", category: "Navidad", img: "/invierno1.webp" },
  { id: 101, title: "Bufanda Cálida 1", category: "Navidad", img: "/belen1.webp" },
  { id: 1010, title: "Bufanda Cálida 2", category: "Navidad", img: "/belen2.webp" },
  { id: 102, title: "Gorro Textura", category: "Navidad", img: "/invierno2.webp" },
  { id: 103, title: "Cuello Lana", category: "Navidad", img: "/invierno3.webp" },
  { id: 104, title: "Set Invierno", category: "Navidad", img: "/invierno4.webp" },
  { id: 105, title: "Detalle Tejido", category: "Navidad", img: "/invierno5.webp" },
  { id: 106, title: "Manta Suave", category: "Navidad", img: "/invierno6.webp" },

  // --- ACCESORIOS ---
  { id: 200, title: "Pañuelo", category: "Accesorios", img: "/pañuelo.webp" },
  { id: 201, title: "Accesorio 1", category: "Accesorios", img: "/accesorio1.webp" },
  { id: 202, title: "Accesorio 2", category: "Accesorios", img: "/accesorio2.webp" },
  { id: 203, title: "Accesorio 3", category: "Accesorios", img: "/accesorio3.webp" },
  { id: 204, title: "Accesorio 4", category: "Accesorios", img: "/accesorio4.webp" },
  { id: 205, title: "Accesorio 5", category: "Accesorios", img: "/accesorio5.webp" },
  { id: 206, title: "Accesorio 6", category: "Accesorios", img: "/acesorio6.webp" }, 
  { id: 207, title: "Accesorio 7", category: "Accesorios", img: "/accesorio7.webp" },
  { id: 208, title: "Accesorio 8", category: "Accesorios", img: "/accesorio8.webp" },
  { id: 209, title: "Accesorio 9", category: "Accesorios", img: "/accesorio9.webp" },
  { id: 210, title: "Accesorio 10", category: "Accesorios", img: "/accesorio10.webp" },
  { id: 211, title: "Accesorio 11", category: "Accesorios", img: "/accesorio11.webp" },
  { id: 212, title: "Pendientes", category: "Accesorios", img: "/pendientes.webp" },

  // --- AMIGURUMI ---
  { id: 301, title: "Amigurumi 1", category: "Amigurumi", img: "/juguete1.webp" },
  { id: 302, title: "Amigurumi 2", category: "Amigurumi", img: "/juguete2.webp" },
  { id: 303, title: "Muñeco Apego", category: "Amigurumi", img: "/juguete3.webp" },
  { id: 304, title: "Osito Tejido", category: "Amigurumi", img: "/juguete4.webp" },
  { id: 305, title: "Conejito Suave", category: "Amigurumi", img: "/juguete5.webp" },
  { id: 306, title: "Juguete 6", category: "Amigurumi", img: "/juguete6.webp" },
  { id: 307, title: "Juguete 7", category: "Amigurumi", img: "/juguete7.webp" },
  { id: 308, title: "Juguete 8", category: "Amigurumi", img: "/juguete8.webp" },
  { id: 309, title: "Juguete 9", category: "Amigurumi", img: "/juguete9.webp" },
  { id: 311, title: "Juguete 11", category: "Amigurumi", img: "/juguete11.webp" },
  { id: 313, title: "Juguete 13", category: "Amigurumi", img: "/juguete13.webp" },
  { id: 314, title: "Juguete 14", category: "Amigurumi", img: "/juguete14.webp" },
  { id: 315, title: "Juguete 15", category: "Amigurumi", img: "/juguete15.webp" },
  { id: 316, title: "Juguete 16", category: "Amigurumi", img: "/juguete16.webp" },
  { id: 317, title: "Juguete 17", category: "Amigurumi", img: "/juguete17.webp" },
  { id: 318, title: "Juguete 18", category: "Amigurumi", img: "/juguete18.webp" },
  { id: 319, title: "Juguete 19", category: "Amigurumi", img: "/juguete19.webp" },
  { id: 320, title: "Juguete 20", category: "Amigurumi", img: "/juguete20.webp" },
  { id: 321, title: "Juguete 21", category: "Amigurumi", img: "/juguete21.webp" },
  { id: 322, title: "Juguete 22", category: "Amigurumi", img: "/juguete22.webp" },
  { id: 323, title: "Juguete 23", category: "Amigurumi", img: "/juguete23.webp" },
  { id: 324, title: "Juguete 24", category: "Amigurumi", img: "/juguete24.webp" },

  // --- PARA BEBÉS ---
  { id: 300, title: "Juguete Principal", category: "Para Bebés", img: "/juguete.webp" },
  { id: 310, title: "Juguete 10", category: "Para Bebés", img: "/juguete10.webp" }, 
  { id: 312, title: "Juguete 12", category: "Para Bebés", img: "/juguete12.webp" },
  { id: 325, title: "Juguete 25", category: "Para Bebés", img: "/juguete25.webp" }, // MOVIDO
  { id: 326, title: "Juguete 26", category: "Para Bebés", img: "/juguete26.webp" }, // MOVIDO
  { id: 327, title: "Juguete 27", category: "Para Bebés", img: "/juguete27.webp" }, // MOVIDO
  { id: 401, title: "Chupetero 1", category: "Para Bebés", img: "/chupetero1.webp" },
  { id: 402, title: "Chupetero 2", category: "Para Bebés", img: "/chupetero2.webp" },

  // --- MARCAPÁGINAS ---
  { id: 501, title: "Marcapáginas 1", category: "Marcapáginas", img: "/marca1.webp" },
  { id: 502, title: "Marcapáginas 2", category: "Marcapáginas", img: "/marca2.webp" },
  { id: 503, title: "Marcapáginas 3", category: "Marcapáginas", img: "/marca3.webp" },
];
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
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
                setSelectedCategory(cat);
                setSelectedId(null); 
            }}
            className={`text-xs uppercase tracking-[0.2em] pb-2 border-b-2 transition-all duration-300 ${
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
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
              <div className="text-center">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#2c2420]/70 font-medium group-hover:text-rose-500 transition-colors">
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
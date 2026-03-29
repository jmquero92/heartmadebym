import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- TUS PRODUCTOS ---
const allProducts = [
  // --- INVIERNO ---
  { id: 100, title: "Colección Invierno", category: "Navidad", img: "/invierno.jpeg" },
  { id: 101, title: "Bufanda Cálida 1", category: "Navidad", img: "/belen1.jpg" },
  { id: 1010, title: "Bufanda Cálida 2", category: "Navidad", img: "/belen2.jpg" }, // ID CAMBIADO
  { id: 102, title: "Gorro Textura", category: "Navidad", img: "/invierno2.jpeg" },
  { id: 103, title: "Cuello Lana", category: "Navidad", img: "/invierno3.jpeg" },
  { id: 104, title: "Set Invierno", category: "Navidad", img: "/invierno4.jpeg" },
  { id: 105, title: "Detalle Tejido", category: "Navidad", img: "/invierno5.jpeg" },
  { id: 106, title: "Manta Suave", category: "Navidad", img: "/invierno6.jpeg" },

  // --- ACCESORIOS ---
  { id: 200, title: "Accesorio 0", category: "Accesorios", img: "/pañuelo.jpeg" }, // ID CAMBIADO
  { id: 201, title: "Accesorio 1", category: "Accesorios", img: "/accesorio1.jpeg" },
  { id: 202, title: "Accesorio 2", category: "Accesorios", img: "/accesorio2.jpeg" },
  { id: 203, title: "Accesorio 3", category: "Accesorios", img: "/accesorio3.jpeg" },
  { id: 204, title: "Accesorio 4", category: "Accesorios", img: "/accesorio4.jpeg" },
  { id: 205, title: "Accesorio 5", category: "Accesorios", img: "/accesorio5.jpeg" },

 { id: 301, title: "Amigurumi 1", category: "Amigurumi", img: "/juguete1.jpeg" },

  { id: 302, title: "Amigurumi 2", category: "Amigurumi", img: "/juguete2.jpeg" },

  { id: 303, title: "Muñeco Apego", category: "Amigurumi", img: "/juguete3.jpeg" },

  { id: 304, title: "Osito Tejido", category: "Amigurumi", img: "/juguete4.jpeg" },

  { id: 305, title: "Conejito Suave", category: "Amigurumi", img: "/juguete5.jpeg" },

  { id: 306, title: "Juguete 6", category: "Amigurumi", img: "/juguete6.jpeg" },

  { id: 307, title: "Juguete 7", category: "Amigurumi", img: "/juguete7.jpeg" },

  { id: 308, title: "Juguete 8", category: "Amigurumi", img: "/juguete8.jpeg" },

  { id: 309, title: "Juguete 9", category: "Amigurumi", img: "/juguete9.jpeg" },

  { id: 311, title: "Juguete 11", category: "Amigurumi", img: "/juguete11.jpeg" },

  { id: 313, title: "Juguete 13", category: "Amigurumi", img: "/juguete13.jpeg" },

  { id: 314, title: "Juguete 14", category: "Amigurumi", img: "/juguete14.jpeg" },

  { id: 315, title: "Juguete 15", category: "Amigurumi", img: "/juguete15.jpeg" },

  { id: 316, title: "Juguete 16", category: "Amigurumi", img: "/juguete16.jpeg" },

  { id: 317, title: "Juguete 17", category: "Amigurumi", img: "/juguete17.jpeg" },

  { id: 318, title: "Juguete 18", category: "Amigurumi", img: "/juguete18.jpeg" },

  { id: 319, title: "Juguete 19", category: "Amigurumi", img: "/juguete19.jpeg" },
  
  // PARA BEBÉS (Ojo con los duplicados aquí también)
  { id: 401, title: "Chupetero 1", category: "Para Bebés", img: "/chupetero1.jpeg" }, // ID CAMBIADO (era 205)
  { id: 300, title: "Juguete Principal", category: "Para Bebés", img: "/juguete.jpeg" },
  { id: 310, title: "Juguete 10", category: "Para Bebés", img: "/juguete10.jpeg" }, 
  { id: 312, title: "Juguete 12", category: "Para Bebés", img: "/juguete12.jpeg" },
  { id: 402, title: "Chupetero 2", category: "Para Bebés", img: "/chupetero2.jpg" }, // ID CAMBIADO (era 205)
];

const categories = ["Todo", "Navidad", "Accesorios", "Amigurumi","Para Bebés"];

export default function CollectionsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("Todo");
  const [selectedId, setSelectedId] = useState(null); // ID de la foto abierta en Lightbox

  // Filtrado de productos
  const filteredProducts = selectedCategory === "Todo" 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  // Encontrar el producto seleccionado actualmente
  const selectedProduct = allProducts.find((p) => p.id === selectedId);

  // --- LÓGICA DE NAVEGACIÓN (NEXT / PREV) ---
  const handleNext = () => {
    if (!selectedId) return;
    const currentIndex = filteredProducts.findIndex(p => p.id === selectedId);
    // Si no encuentra el producto en la categoría actual, no hace nada
    if (currentIndex === -1) return; 
    const nextIndex = (currentIndex + 1) % filteredProducts.length; // Loop infinito
    setSelectedId(filteredProducts[nextIndex].id);
  };

  const handlePrev = () => {
    if (!selectedId) return;
    const currentIndex = filteredProducts.findIndex(p => p.id === selectedId);
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + filteredProducts.length) % filteredProducts.length; // Loop infinito hacia atrás
    setSelectedId(filteredProducts[prevIndex].id);
  };

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
  }, [selectedId, filteredProducts]); 


  return (
    <div className="w-full max-w-7xl mx-auto px-6 pb-20">
      
      {/* --- PESTAÑAS DE FILTROS --- */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
                setSelectedCategory(cat);
                setSelectedId(null); // Cerrar lightbox si cambiamos categoría
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
              onClick={() => setSelectedId(product.id)} // ABRIR LIGHTBOX AL CLICK
            >
              {/* Contenedor Imagen */}
              <div className="relative aspect-[3/4] overflow-hidden bg-white mb-4 rounded-sm shadow-sm">
                <motion.img 
                  layoutId={`img-${product.id}`} // Animación compartida con Lightbox
                  src={product.img} 
                  alt={product.title} 
                  
                  // OPTIMIZACIÓN DE VELOCIDAD:
                  loading="lazy"
                  decoding="async"
                  
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {e.target.style.display = 'none'}} 
                />
                
                {/* Overlay oscuro al Hover */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                {/* Icono Lupa (Hint visual) */}
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
            onClick={() => setSelectedId(null)} // Click fuera cierra
          >
            
            {/* Botón CERRAR (X) */}
            <button 
                className="absolute top-6 right-6 z-50 text-white/70 hover:text-white transition-colors p-2"
                onClick={() => setSelectedId(null)}
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            {/* Botón ANTERIOR (<) */}
            <button 
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-3 transition-all"
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>

            {/* Botón SIGUIENTE (>) */}
            <button 
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-3 transition-all"
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>


            {/* IMAGEN CENTRAL */}
            <motion.div 
                className="relative max-w-5xl w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()} // Click en la imagen NO cierra
            >
                <motion.img 
                    layoutId={`img-${selectedProduct.id}`} // Transición suave desde el grid
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
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function InstagramSection() {
  
  // ------------------------------------------------------
  // ¡PEGA AQUÍ TU ID DE BEHOLD.SO!
  // Será algo parecido a: "vU4fKZ9sXj7kL2mN"
  // ------------------------------------------------------
  const WIDGET_ID = "PON_AQUI_TU_ID_COPIADO"; 

  // Esto carga el script del widget automáticamente
  useEffect(() => {
    if (!WIDGET_ID || WIDGET_ID === "PON_AQUI_TU_ID_COPIADO") return;
    
    const script = document.createElement("script");
    script.src = "https://w.behold.so/widget.js";
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="relative w-full px-6 py-24 md:py-32 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-30 mt-[-2rem] overflow-hidden">
      
      {/* --- FONDO --- */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center" 
        style={{ backgroundImage: "url('/bg.jpg')" }} 
      />
      <div className="absolute inset-0 bg-[#fafaf9]/95 backdrop-blur-[1px]" />

      {/* --- CONTENIDO --- */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        
        {/* Cabecera */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-4 block">
              Follow our Journey
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2c2420] italic mb-2">
              <a href="https://www.instagram.com/heartmade_by_m/" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 transition-colors">
                @heartmade_by_m
              </a>
            </h2>
          </motion.div>
        </div>

        {/* AQUÍ SE CARGA EL WIDGET AUTOMÁTICAMENTE */}
        <div className="min-h-[300px]">
          {WIDGET_ID === "PON_AQUI_TU_ID_COPIADO" ? (
             // Mensaje por si se te olvida poner el ID
             <div className="p-10 border border-dashed border-[#2c2420]/20 text-neutral-400 text-xs uppercase tracking-widest">
               Pega tu ID de Behold.so en el código para ver las fotos
             </div>
          ) : (
             // El contenedor oficial del widget
             <figure data-behold-id={WIDGET_ID}></figure>
          )}
        </div>

      </div>
    </section>
  );
}
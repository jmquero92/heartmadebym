import { motion } from "framer-motion";

export default function HistoryShort() {
  return (
    <section className="relative w-full px-6 py-24 md:py-32 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-30 mt-[-2rem] overflow-hidden">
      
      {/* 1. LA FOTO DE FONDO (Original) */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center" 
        style={{ backgroundImage: "url('/bg.jpg')" }} 
      />

      {/* 2. EL FILTRO (Overlay) - ¡ESTO ES LA CLAVE! 
         bg-[#fafaf9]/90 significa que es un color blanco roto al 90% de opacidad.
         Esto tapa casi toda la foto original dejando ver solo la textura suave.
      */}
      <div className="absolute inset-0 bg-[#fafaf9]/95 backdrop-blur-[1px]" />

      {/* --- CONTENIDO --- */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          {/* A. COLUMNA IMAGEN */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            {/* Marco decorativo */}
            <div className="absolute top-4 -left-4 w-full h-full border border-[#2c2420]/20 rounded-sm z-0" />
            
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-xl z-10 bg-neutral-200">
               <div 
                 className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-[1.5s]"
                 // Aquí puedes poner tu foto real de historia
                 style={{ backgroundImage: "url('/origen.jpeg')" }} 
               />
            </div>
          </motion.div>

          {/* B. COLUMNA TEXTO */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-neutral-400"></span>
              El Origen
            </span>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#2c2420] italic leading-tight mb-8">
              "No es solo lana,<br/> es tiempo."
            </h2>

            <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed mb-6 font-sans">
              Todo comenzó con un ovillo olvidado y la necesidad de frenar el ritmo. 
              En <strong className="font-medium text-[#2c2420]">Heartmade by M</strong>, creemos que el verdadero lujo no es el precio, sino las horas dedicadas a crear algo irrepetible.
            </p>

            <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed mb-10 font-sans">
              Más allá de la técnica, está la emoción. Cada diseño es el resultado de una obsesiva atención por los pequeños detalles, tejida a mano y nacida desde lo más profundo del corazón.
            </p>
             <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed mb-10 font-sans">
Dicen que la creatividad se multiplica cuando se comparte. De la mano de mi gran amiga, disfruto no solo del proceso de crear, sino de capturar cada detalle para vosotros. Un tándem perfecto entre hilos y cámaras, unidas por la pasión de hacer las cosas con el corazón.            </p>

            <button className="group flex items-center gap-3 border-b border-[#2c2420] pb-2 text-xs uppercase tracking-[0.2em] text-[#2c2420] hover:text-rose-500 hover:border-rose-500 transition-all">
              <span>Descubre nuestras creaciones</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
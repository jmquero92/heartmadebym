import { motion } from "framer-motion";
import { useEffect } from "react";

export default function InstagramSection() {
  
  // Tu ID verificado
  const WIDGET_ID = "B1jU7nif7VvtmawyszjC"; 

  useEffect(() => {
    if (document.querySelector('script[src="https://w.behold.so/widget.js"]')) return;

    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://w.behold.so/widget.js";
    document.head.append(script);
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
        
        {/* --- CABECERA MEJORADA --- */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 mb-6 block">
              Follow our Journey
            </span>

            {/* Enlace contenedor con animación hover */}
            <motion.a 
              href="https://www.instagram.com/heartmade_by_m/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-4 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Icono de Instagram (SVG) */}
              <div className="p-3 rounded-full bg-[#2c2420] text-white group-hover:bg-rose-500 transition-colors duration-300">
                <svg 
                  className="w-8 h-8 md:w-10 md:h-10" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Texto del título */}
              <h2 className="font-serif text-5xl md:text-7xl text-[#2c2420] italic group-hover:text-rose-500 transition-colors duration-300">
                @heartmade_by_m
              </h2>
            </motion.a>
          </motion.div>
        </div>

        {/* --- WIDGET --- */}
        <div className="min-h-[300px]">
           <div 
             dangerouslySetInnerHTML={{ 
               __html: `<behold-widget feed-id="${WIDGET_ID}"></behold-widget>` 
             }} 
           />
        </div>

      </div>
    </section>
  );
}
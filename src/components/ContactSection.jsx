import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <section 
      id="contacto" 
      className="relative w-full px-4 py-24 md:py-32 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-40 mt-[-2rem] overflow-hidden min-h-[90vh] flex items-center justify-center"
    >
      
      {/* --- FONDO TEXTURA (Mantiene la coherencia con el resto de la web) --- */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center" 
        style={{ backgroundImage: "url('/bg.jpg')" }} 
      />
      <div className="absolute inset-0 bg-[#fafaf9]/95 backdrop-blur-[1px]" />

      {/* --- CONTENEDOR PRINCIPAL: LA "TARJETA PREMIUM" --- */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        // Layout: Flex row (Izquierda info / Derecha mapa)
        // Estilo: Fondo blanco, borde fino, sombra suave.
        className="relative z-10 bg-white w-full max-w-6xl rounded-sm shadow-xl border border-[#2c2420]/5 overflow-hidden flex flex-col-reverse md:flex-row min-h-[600px]"
      >

        {/* 1. COLUMNA IZQUIERDA: FORMULARIO (60% ancho) */}
        <div className="w-full md:w-3/5 p-10 md:p-16 flex flex-col justify-center">
          
          <div className="max-w-md mx-auto w-full">
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-6 block flex items-center gap-2">
              <span className="w-6 h-[1px] bg-rose-300"></span>
              Atelier
            </span>

            <h2 className="font-serif text-3xl md:text-5xl text-[#2c2420] italic mb-4 leading-tight">
              Hablemos
            </h2>
            <p className="text-sm text-neutral-500 font-light font-sans mb-10 leading-relaxed">
              Cada pieza comienza con una idea. Escríbeme para encargos personalizados o dudas sobre la colección.
            </p>

            {/* Formulario Limpio */}
            {formStatus === "success" ? (
              <div className="py-10 text-center bg-[#fafaf9] border border-[#2c2420]/5 rounded-sm">
                <span className="text-2xl">✨</span>
                <h3 className="font-serif text-xl text-[#2c2420] italic mt-2">Mensaje enviado</h3>
                <p className="text-xs text-neutral-500 mt-1">Te responderé en breve.</p>
                <button onClick={() => setFormStatus("idle")} className="mt-4 text-[10px] uppercase tracking-widest underline text-neutral-400 hover:text-[#2c2420]">
                  Escribir otro
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <input type="text" required placeholder="Nombre" className="w-full bg-transparent border-b border-neutral-200 py-2 text-sm text-[#2c2420] placeholder-neutral-400 focus:border-[#2c2420] focus:outline-none transition-colors"/>
                  </div>
                  <div className="group">
                    <input type="email" required placeholder="Email" className="w-full bg-transparent border-b border-neutral-200 py-2 text-sm text-[#2c2420] placeholder-neutral-400 focus:border-[#2c2420] focus:outline-none transition-colors"/>
                  </div>
                </div>
                <div className="group">
                  <textarea rows="3" required placeholder="Tu mensaje..." className="w-full bg-transparent border-b border-neutral-200 py-2 text-sm text-[#2c2420] placeholder-neutral-400 focus:border-[#2c2420] focus:outline-none transition-colors resize-none"></textarea>
                </div>
                <button type="submit" disabled={formStatus === "submitting"} className="pt-4 text-xs uppercase tracking-[0.25em] text-[#2c2420] font-bold hover:text-rose-500 transition-colors flex items-center gap-2">
                  {formStatus === "submitting" ? "Enviando..." : "Enviar ahora"}
                  <span className="text-lg leading-none">→</span>
                </button>
              </form>
            )}

            {/* Footer interno minimalista */}
            <div className="mt-12 pt-6 border-t border-neutral-100 flex gap-8 text-[10px] uppercase tracking-widest text-neutral-400">
               <div>hola@heartmadebym.com</div>
               <div>@heartmadebym</div>
            </div>
          </div>
        </div>

        {/* 2. COLUMNA DERECHA: EL MAPA EN COLOR (40% ancho) 
             Al estar dentro de la tarjeta, tiene un tamaño controlado.
             Sin filtros (grayscale) para que se vea el color vivo.
        */}
        <div className="w-full md:w-2/5 relative min-h-[300px] md:min-h-full border-l border-[#2c2420]/5">
          
          <iframe 
             title="Mapa La Rambla"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12621.685743625476!2d-4.7456743!3d37.6068249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6d22666d3288d3%3A0x40463fd8ca1c720!2s14540%20La%20Rambla%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2ses!4v1709650000000!5m2!1ses!2ses"
             width="100%" 
             height="100%" 
             style={{ border: 0 }} 
             allowFullScreen="" 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
             // SIN FILTROS: Color puro
             className="absolute inset-0 w-full h-full object-cover"
          ></iframe>

          {/* Etiqueta flotante "Premium" sobre el mapa */}
          <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-5 py-3 shadow-lg rounded-sm border-l-2 border-rose-300">
             <span className="block text-[10px] uppercase tracking-widest text-neutral-400 mb-1">Ubicación</span>
             <span className="block font-serif text-lg text-[#2c2420] italic leading-none">La Rambla</span>
             <span className="block text-[10px] text-neutral-500 mt-1">Córdoba, España</span>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
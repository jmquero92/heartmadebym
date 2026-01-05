import { motion } from "framer-motion";

const collections = [
  { id: 1, title: "Invierno '25", subtitle: "Decoración para Navidad", img: "/invierno.jpeg", offset: 0 },
  { id: 2, title: "Juguetes", subtitle: "Para los más pequeños de la casa", img: "/juguete.jpeg", offset: 20 },
  { id: 3, title: "Accesorios", subtitle: "Estética y belleza en cada pieza", img: "/pendientes.jpeg", offset: 0 }
];

export default function CollectionsPreview() {
  return (
    <section className="relative w-full px-6 py-24 md:py-32 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-20 mt-[-2rem] overflow-hidden">
      
      {/* --- TU IMAGEN DE FONDO LOCAL --- */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          // IMPORTANTE: Cambia '.jpg' si tu archivo es .png o .jpeg
          backgroundImage: "url('/bg.jpg')" 
        }} 
      />
      
      {/* Capa de "Lavado" Blanco (Overlay) 
          Ajusta la opacidad (0.90) si quieres que se vea más o menos tu imagen de fondo.
          0.90 = Muy sutil (estilo galería)
          0.70 = Se ve más la textura
      */}
      <div className="absolute inset-0 bg-[#fafaf9]/90 backdrop-blur-[1px]" />
      
      {/* Contenido */}
      <div className="relative z-10">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`flex flex-col gap-4 group cursor-pointer ${item.offset ? 'md:mt-12' : ''}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-white rounded-sm shadow-sm hover:shadow-2xl transition-all duration-500 border border-white/40">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 z-10" />
                {/* Imagen del producto */}
                <div 
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 bg-neutral-200" 
                  style={{ backgroundImage: `url('${item.img}')` }}
                />
                
                <div className="absolute bottom-6 left-6 z-20 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                   <span className="text-[10px] bg-[#2c2420] text-white px-4 py-2 uppercase tracking-widest font-bold shadow-lg">
                     Ver más
                   </span>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl text-[#2c2420] font-serif italic mb-1 group-hover:text-rose-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-500 uppercase tracking-widest">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <button className="border-b border-[#2c2420]/30 pb-1 text-xs uppercase tracking-[0.3em] text-[#2c2420] hover:text-rose-500 hover:border-rose-500 transition-all">
            Ver todas las colecciones
          </button>
        </div>
      </div>
    </section>
  );
}
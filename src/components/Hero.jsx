import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// 1. TUS FRASES
const phrases = [
  "Hecho a mano desde el corazón.",
  "Cada puntada cuenta una historia.",
  "El lujo de lo creado sin prisas.",
  "Piezas únicas con alma propia."
];

export default function Hero() {
  // --- LÓGICA DE MÁQUINA DE ESCRIBIR ---
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(50); 

  useEffect(() => {
    const i = loopNum % phrases.length;
    const fullText = phrases[i];

    const handleType = () => {
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 20 : 50);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      
      {/* 1. IMAGEN DE FONDO */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/portada.jpeg')" }} 
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10 opacity-60 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
      </motion.div>

      {/* 2. CONTENIDO */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        
        {/* Tagline Superior */}
        {/* CAMBIO: Aumentado a -mt-60 (móvil) y -mt-96 (PC) para subir todo el bloque */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-4 flex flex-col items-center gap-2 -mt-60 md:-mt-96"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/90 font-sans drop-shadow-lg">
            Handcrafted in Spain
          </span>
          <span className="h-[1px] w-6 bg-rose-200/80 drop-shadow-md"></span>
        </motion.div>

        {/* Título Principal */}
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative -mt-4 md:-mt-8 font-serif text-6xl font-normal text-white md:text-8xl lg:text-9xl tracking-tight leading-[1.1] drop-shadow-2xl"
        >
          <span className="italic text-white">Heartmade</span>
          <span className="block text-4xl md:text-6xl not-italic text-rose-100 font-light mt-[-0.2em] md:mt-[-0.3em] drop-shadow-lg">
            by M
          </span>
        </motion.h1>

        {/* Subtítulo: Máquina de Escribir */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 max-w-lg min-h-[3.5rem] flex items-start justify-center"
        >
          <p className="text-base font-medium leading-7 text-white/90 font-sans md:text-lg tracking-wide drop-shadow-lg">
            {text}
            <span className="animate-pulse font-light text-rose-200 ml-1">|</span>
          </p>
        </motion.div>

      </div>
    </div>
  );
}
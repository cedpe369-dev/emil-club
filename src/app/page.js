"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Globe, Zap, Radio, Play, Disc, X } from 'lucide-react';

// --- COMPONENTE DE IMAGEN CON ESTILO ---
const ArtImage = ({ src, alt, className }) => (
  <div className={`relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ${className}`}>
    <img src={src} alt={alt} className="object-cover w-full h-full scale-110 hover:scale-100 transition-transform duration-1000 ease-out" />
    <div className="absolute inset-0 bg-[#ccff00]/10 mix-blend-multiply opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
  </div>
);

export default function EmilClubExperience() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formStep, setFormStep] = useState(1);
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  
  // Parallax FX
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const xText = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  // Cursor Logic
  useEffect(() => {
    const updateMouse = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", updateMouse);
    // Simular carga de assets
    setTimeout(() => setLoading(false), 2500);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  if (loading) {
    return (
      <div className="h-screen bg-black flex flex-col items-center justify-center text-[#ccff00] font-mono z-[9999]">
        <div className="animate-pulse text-4xl font-black tracking-tighter">EMIL CLUB</div>
        <div className="mt-4 w-32 h-1 bg-[#111] overflow-hidden">
            <motion.div 
                initial={{ width: 0 }} animate={{ width: "100%" }} 
                transition={{ duration: 2, ease: "easeInOut" }} 
                className="h-full bg-[#ccff00]" 
            />
        </div>
        <div className="mt-2 text-xs opacity-50">LOADING ASSETS...</div>
      </div>
    );
  }

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-[#ccff00] selection:text-black font-sans overflow-x-hidden">
      
      {/* --- TEXTURA DE RUIDO (FILM GRAIN) --- */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.07]" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

      {/* --- CURSOR CUSTOM --- */}
      <motion.div 
        className="fixed w-6 h-6 bg-[#ccff00] rounded-full z-[100] pointer-events-none mix-blend-difference hidden md:block blur-[2px]"
        animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
        transition={{ type: "spring", mass: 0.2 }}
      />

      {/* --- HERO SECTION VISUAL --- */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Imagen de Fondo Gigante */}
        <motion.div style={{ y: yHero }} className="absolute inset-0 z-0 opacity-60">
            <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2680&auto=format&fit=crop" 
                className="w-full h-full object-cover object-top grayscale"
                alt="Hero Background"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent"></div>
        </motion.div>

        {/* Tipografía Gigante Sobrepuesta */}
        <div className="relative z-10 text-center mix-blend-difference px-4">
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-[#ccff00] font-mono text-sm tracking-[1em] mb-6 border-b border-[#ccff00] inline-block pb-2">OFFICIAL FAN CLUB</h2>
            <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter uppercase">
              Emil<br/>
              <span className="text-transparent stroke-text">World</span>
            </h1>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs font-mono text-[#ccff00]"
        >
            SCROLL TO ENTER
        </motion.div>
      </section>

      {/* --- MARQUEE ARTÍSTICO --- */}
      <div className="border-y border-white/20 bg-black py-6 overflow-hidden relative z-20">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="whitespace-nowrap text-6xl md:text-8xl font-black text-transparent stroke-white flex gap-12 opacity-50"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}
        >
          <span>NO FAKE LOVE</span>
          <span className="text-[#ccff00]" style={{ WebkitTextStroke: "0px" }}>+++</span>
          <span>DESDE LATINOAMÉRICA</span>
          <span className="text-[#ccff00]" style={{ WebkitTextStroke: "0px" }}>+++</span>
          <span>JOIN THE TRIBE</span>
          <span className="text-[#ccff00]" style={{ WebkitTextStroke: "0px" }}>+++</span>
          <span>NO FAKE LOVE</span>
          <span className="text-[#ccff00]" style={{ WebkitTextStroke: "0px" }}>+++</span>
          <span>DESDE LATINOAMÉRICA</span>
        </motion.div>
      </div>

      {/* --- VISUAL GRID & BENEFITS (Estilo Revista) --- */}
      <section id="content" className="max-w-screen-2xl mx-auto px-6 py-32 relative">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Texto Editorial */}
            <div className="md:col-span-4 flex flex-col justify-end pb-10">
                <h2 className="text-6xl font-bold leading-none mb-8">
                    MÁS QUE <br/>
                    <span className="text-[#ccff00] italic">MÚSICA.</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-sm">
                    Únete al círculo interno. Acceso a contenido raw, preventas exclusivas y una comunidad que entiende el código.
                </p>
            </div>

            {/* Imagen 1 */}
            <div className="md:col-span-5 h-[500px]">
                <ArtImage 
                    src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2670&auto=format&fit=crop" 
                    className="w-full h-full rounded-sm"
                />
            </div>

            {/* Stat Box Vertical */}
            <div className="md:col-span-3 bg-[#111] border border-white/10 p-8 flex flex-col justify-between">
                <Disc className="animate-spin-slow w-12 h-12 text-[#ccff00]" />
                <div>
                    <div className="text-5xl font-mono font-bold mb-2">12.5K</div>
                    <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">Miembros Activos</div>
                </div>
            </div>

            {/* Imagen 2 (Ancha) */}
            <div className="md:col-span-8 h-[400px]">
                <ArtImage 
                    src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2670&auto=format&fit=crop" 
                    className="w-full h-full rounded-sm"
                />
            </div>

            {/* Beneficios List */}
            <div className="md:col-span-4 bg-[#ccff00] text-black p-10 flex flex-col justify-center relative overflow-hidden group">
                <div className="relative z-10">
                    <h3 className="text-3xl font-black mb-6 uppercase">Tu Acceso</h3>
                    <ul className="space-y-4 font-mono text-sm font-bold">
                        <li className="flex items-center gap-3 border-b border-black/20 pb-2"><Play size={12} fill="black"/> EARLY ACCESS TICKETS</li>
                        <li className="flex items-center gap-3 border-b border-black/20 pb-2"><Play size={12} fill="black"/> BEHIND THE SCENES</li>
                        <li className="flex items-center gap-3 border-b border-black/20 pb-2"><Play size={12} fill="black"/> DIGITAL MEET & GREET</li>
                    </ul>
                    <button onClick={() => document.getElementById('form-zone').scrollIntoView({behavior:'smooth'})} className="mt-8 bg-black text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-white hover:text-black transition-colors">
                        INICIAR REGISTRO &rarr;
                    </button>
                </div>
                {/* Efecto Hover */}
                <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            </div>
        </div>
      </section>

      {/* --- FORMULARIO INTERACTIVO "SYSTEM" --- */}
      <section id="form-zone" className="min-h-[90vh] flex items-center justify-center relative py-20 bg-[#080808] border-t border-white/10">
        
        {/* Fondo Decorativo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ccff00] rounded-full blur-[150px] opacity-10"></div>
        </div>

        <div className="w-full max-w-3xl px-6 relative z-10">
          
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase">System<br/>Entry</h2>
            <div className="text-right">
                <div className="font-mono text-[#ccff00] text-xl">Fase {formStep}/3</div>
                <div className="text-xs text-gray-600 uppercase">Secure Connection</div>
            </div>
          </div>

          {/* Barra de progreso */}
          <div className="w-full h-1 bg-[#222] mb-12">
            <motion.div 
                animate={{ width: `${(formStep / 3) * 100}%` }}
                className="h-full bg-[#ccff00] shadow-[0_0_15px_#ccff00]"
            />
          </div>

          <AnimatePresence mode="wait">
            {formStep === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8 bg-[#111] p-10 border border-white/5 rounded-sm"
              >
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-gray-500">IDENTIFICACIÓN</label>
                        <input type="text" placeholder="Tu Nombre" className="w-full bg-transparent border-b border-[#333] text-2xl py-2 focus:outline-none focus:border-[#ccff00] text-white transition-colors" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-gray-500">CONTACTO</label>
                        <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-[#333] text-2xl py-2 focus:outline-none focus:border-[#ccff00] text-white transition-colors" />
                    </div>
                </div>
                 <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-500">UBICACIÓN (DATA SERVER)</label>
                    <select className="w-full bg-transparent border-b border-[#333] text-2xl py-2 focus:outline-none focus:border-[#ccff00] text-white transition-colors appearance-none">
                        <option className="bg-black">Seleccionar País...</option>
                        <option className="bg-black">Perú</option>
                        <option className="bg-black">México</option>
                        <option className="bg-black">Global</option>
                    </select>
                </div>

                <div className="flex justify-end mt-6">
                    <button onClick={() => setFormStep(2)} className="flex items-center gap-4 text-[#ccff00] font-mono hover:text-white transition-colors">
                        [ CONFIRMAR DATOS ] <ArrowRight />
                    </button>
                </div>
              </motion.div>
            )}

            {formStep === 2 && (
              <motion.div 
                key="step2"
                 initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8 bg-[#111] p-10 border border-white/5 rounded-sm"
              >
                <h3 className="text-2xl font-bold mb-6">¿QUÉ TRACK DEFINE TU VIBE?</h3>
                <div className="grid grid-cols-2 gap-4">
                    {['HARD TRAP', 'SAD BOI', 'REGGAETON DARK', 'ACOUSTIC'].map((item, i) => (
                        <div key={i} className="border border-white/20 p-4 text-center hover:bg-[#ccff00] hover:text-black hover:border-[#ccff00] cursor-pointer transition-all">
                            {item}
                        </div>
                    ))}
                </div>
                 <div className="space-y-2 mt-6">
                    <label className="text-xs font-mono text-gray-500">MENSAJE AL ARTISTA (ENCRIPTADO)</label>
                    <textarea rows="2" placeholder="..." className="w-full bg-transparent border-b border-[#333] text-xl py-2 focus:outline-none focus:border-[#ccff00] text-white transition-colors" />
                </div>

                <div className="flex justify-between mt-6">
                    <button onClick={() => setFormStep(1)} className="text-gray-600 text-sm font-mono hover:text-white">ATRÁS</button>
                    <button onClick={() => setFormStep(3)} className="flex items-center gap-4 text-[#ccff00] font-mono hover:text-white transition-colors">
                        [ FINALIZAR ] <ArrowRight />
                    </button>
                </div>
              </motion.div>
            )}

             {formStep === 3 && (
              <motion.div 
                key="step3"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center p-10 border border-[#ccff00]/30 bg-[#ccff00]/5 rounded-sm"
              >
                <Zap className="w-20 h-20 text-[#ccff00] mx-auto mb-6 animate-pulse" />
                <h2 className="text-5xl font-black uppercase mb-4">Access<br/>Granted</h2>
                <p className="text-gray-400 font-mono mb-8">Bienvenido al sistema. Revisa tu correo.</p>
                <div className="inline-block bg-[#ccff00] text-black px-4 py-1 font-mono font-bold text-sm transform -rotate-3">
                    MEMBER ID: #9921
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>
      
      <footer className="py-12 border-t border-white/10 flex flex-col items-center justify-center text-center">
        <h2 className="text-[15vw] leading-none font-black text-[#111] select-none pointer-events-none">EMIL</h2>
        <div className="flex gap-6 text-sm font-mono text-gray-500 mt-[-5vw]">
            <a href="#" className="hover:text-[#ccff00]">INSTAGRAM</a>
            <a href="#" className="hover:text-[#ccff00]">SPOTIFY</a>
            <a href="#" className="hover:text-[#ccff00]">DISCORD</a>
        </div>
      </footer>
    </div>
  );
}
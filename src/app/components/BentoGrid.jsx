"use client";
import React from 'react';
import { Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Sub-componente interno para imágenes (ahora soporta secuencia)
const ArtImage = ({ src, srcs, className, overlay = false }) => {
    const [currentImage, setCurrentImage] = React.useState(src || (srcs ? srcs[0] : ''));
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        if (!srcs || srcs.length === 0) return;

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % srcs.length);
        }, 2000); // Cambia cada 2 segundos

        return () => clearInterval(interval);
    }, [srcs]);

    React.useEffect(() => {
        if (srcs) {
            setCurrentImage(srcs[index]);
        }
    }, [index, srcs]);

    return (
        <div className={`relative overflow-hidden group h-full w-full ${className}`}>
            {overlay && <div className="absolute inset-0 bg-[#ccff00] mix-blend-multiply opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-10"></div>}
            <AnimatePresence mode="popLayout">
                <motion.img
                    key={currentImage}
                    src={currentImage}
                    alt="Visual"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 object-cover w-full h-full grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-700 ease-out"
                />
            </AnimatePresence>
        </div>
    );
};

export default function BentoGrid({ onJoin }) {
    return (
        <section className="py-32 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[350px]">

                <div className="bg-[#0a0a0a] border border-white/10 p-10 flex flex-col justify-center">
                    <h3 className="text-5xl font-black uppercase leading-none mb-4">
                        MÁS QUE <br /><span className="text-[#ccff00]">UN CLUB.</span>
                    </h3>
                    <p className="text-gray-400 text-sm">
                        La idea es que podamos compartir juntos experiencias divertidas, donde podamos conocernos más; que disfrutes mi música de una manera especial y juntos impulsemos nuestros sueños.
                    </p>
                </div>

                <div className="md:col-span-2 relative">
                    <ArtImage srcs={['/FANS1.png', '/FANS2.png', '/FANS3.png', '/FANS4.png']} overlay={true} />
                    <div className="absolute top-4 right-4 w-12 h-12 border border-[#ccff00] rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#ccff00] rounded-full animate-ping"></div>
                    </div>
                </div>

                <div className="md:col-span-2">
                    <ArtImage srcs={['/CONCIERTO1.png', '/CONCIERTO2.png', '/CONCIERTO3.png', '/CONCIERTO4.png']} />
                </div>

                <div className="bg-[#ccff00] text-black p-8 flex flex-col justify-between">
                    <h3 className="text-3xl font-black uppercase">Tu Acceso</h3>
                    <ul className="space-y-3 font-bold font-mono text-xs">
                        <li className="flex items-center gap-2 border-b border-black/20 pb-2"><Play size={10} fill="black" /> EXPERIENCIAS EXCLUSIVAS CON EMIL</li>
                        <li className="flex items-center gap-2 border-b border-black/20 pb-2"><Play size={10} fill="black" /> PREMIOS SUEÑO ANUALES</li>
                        <li className="flex items-center gap-2 border-b border-black/20 pb-2"><Play size={10} fill="black" /> SORTEOS MENSUALES PACKS Y MEGA PACKS EMIL</li>
                        <li className="flex items-center gap-2 border-b border-black/20 pb-2"><Play size={10} fill="black" /> ACCESOS VIP Y MEET & GREAT</li>
                        <li className="flex items-center gap-2 border-b border-black/20 pb-2"><Play size={10} fill="black" /> ARTÍCULOS EXCLUSIVOS Y MUCHO MÁS</li>
                    </ul>
                    <button onClick={onJoin} className="bg-black text-white py-3 rounded-full text-sm font-bold hover:bg-white hover:text-black transition-colors mt-4">
                        INICIAR REGISTRO &rarr;
                    </button>
                </div>
            </div>
        </section>
    );
}
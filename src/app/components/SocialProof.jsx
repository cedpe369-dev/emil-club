"use client";
import React from 'react';
import { Globe, Users } from 'lucide-react';

export default function SocialProof() {
    return (
        <section className="py-20 border-y border-white/10 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <div className="mb-12">
                    <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 text-white">
                        Desde <span className="text-[#ccff00]">Latinoamérica</span> <br /> al Mundo
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Emil Club no tiene fronteras. Conectamos a los verdaderos fans en una sola frecuencia.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Stat 1 */}
                    <div className="p-6 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-sm hover:border-[#ccff00]/50 transition-colors duration-300 group">
                        <div className="flex justify-center mb-4 text-[#ccff00] group-hover:scale-110 transition-transform duration-300">
                            <Users size={32} />
                        </div>
                        <h3 className="text-3xl font-black text-white mb-1">+15,000</h3>
                        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">Fans Registrados</p>
                        <p className="text-xs text-gray-500 mt-2">México, Argentina, España, Colombia...</p>
                    </div>

                    {/* Stat 2 */}
                    <div className="p-6 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-sm hover:border-[#00f3ff]/50 transition-colors duration-300 group">
                        <div className="flex justify-center mb-4 text-[#00f3ff] group-hover:scale-110 transition-transform duration-300">
                            <Globe size={32} />
                        </div>
                        <h3 className="text-3xl font-black text-white mb-1">24/7</h3>
                        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">Comunidad Activa</p>
                        <p className="text-xs text-gray-500 mt-2">Foros privados y eventos digitales</p>
                    </div>

                    {/* Stat 3 - Rango Global (Reemplaza VIP) */}
                    <div className="p-6 border border-[#bc13fe]/30 rounded-2xl bg-[#bc13fe]/5 backdrop-blur-sm relative overflow-hidden hover:bg-[#bc13fe]/10 transition-colors duration-300 group">
                        <div className="absolute top-0 right-0 bg-[#bc13fe] text-white text-[10px] font-bold px-2 py-1">BETA</div>
                        <div className="flex justify-center mb-4 text-[#bc13fe] group-hover:scale-110 transition-transform duration-300">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        </div>
                        <h3 className="text-3xl font-black text-white mb-1">RANGO GLOBAL</h3>
                        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">XP System</p>
                        <p className="text-xs text-gray-500 mt-2">Compite por recompensas exclusivas</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

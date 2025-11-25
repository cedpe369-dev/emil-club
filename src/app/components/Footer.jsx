"use client";
import React from 'react';
import { Facebook, Instagram, Youtube, Music, MessageCircle, Gamepad2, Video } from 'lucide-react';

export default function Footer() {
    const socialLinks = [
        { name: 'FACEBOOK', icon: <Facebook size={20} />, url: '#', color: 'hover:text-blue-500' },
        { name: 'INSTAGRAM', icon: <Instagram size={20} />, url: '#', color: 'hover:text-pink-500' },
        { name: 'TIKTOK', icon: <Video size={20} />, url: '#', color: 'hover:text-[#00f2ea]' },
        { name: 'YOUTUBE', icon: <Youtube size={20} />, url: '#', color: 'hover:text-red-500' },
        { name: 'SPOTIFY', icon: <Music size={20} />, url: '#', color: 'hover:text-[#1DB954]' },
        { name: 'DISCORD', icon: <Gamepad2 size={20} />, url: '#', color: 'hover:text-[#5865F2]' },
        { name: 'KICK', icon: <div className="font-black text-xs">K</div>, url: '#', color: 'hover:text-[#53FC18]' },
        { name: 'WHATSAPP', icon: <MessageCircle size={20} />, url: '#', color: 'hover:text-[#25D366]' },
    ];

    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
                    {/* Brand */}
                    <div className="max-w-xs">
                        <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 text-white">EMIL CLUB</h2>
                        <p className="text-gray-500 text-sm font-mono">
                            Plataforma oficial de reclutamiento y gestión de fans. Acceso restringido a personal autorizado.
                        </p>
                    </div>

                    {/* Social Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-auto">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-3 px-4 py-3 border border-white/10 bg-white/5 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/30 group ${social.color}`}
                            >
                                <span className="text-gray-400 group-hover:text-white transition-colors">{social.icon}</span>
                                <span className="text-xs font-bold tracking-wider text-gray-300 group-hover:text-white">{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
                    <p className="text-xs text-gray-600 font-mono">
                        © 2024 EMIL CLUB. TODOS LOS DERECHOS RESERVADOS.
                    </p>
                    <div className="flex gap-6 text-xs text-gray-600 font-mono">
                        <a href="#" className="hover:text-white transition-colors">PRIVACIDAD</a>
                        <a href="#" className="hover:text-white transition-colors">TÉRMINOS</a>
                        <a href="#" className="hover:text-white transition-colors">SOPORTE</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

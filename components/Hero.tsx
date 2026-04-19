import React from 'react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden">

      <div className="absolute inset-0 z-0 bg-[#0B1120]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-linear-to-t from-[#0B1120] via-transparent to-[#0B1120]/50"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm">
          <span className="text-emerald-400 text-sm font-semibold tracking-wide uppercase">Tecnología Agrícola del Futuro</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          Centro de <br />
          Monitoreo Agrícola <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-500">con IA</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto font-light">
          Optimiza tus cultivos con datos en tiempo real y análisis inteligente para una productividad sostenible.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
            VER DEMO
          </button>
          <button className="border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 font-bold px-8 py-4 rounded-full transition-all backdrop-blur-sm">
            CONOCER MÁS
          </button>
        </div>
      </div>
    </section>
  );
}
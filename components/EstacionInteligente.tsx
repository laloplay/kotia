import React from 'react';

export default function SmartStation() {
  return (
    <section className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden border border-slate-700 relative aspect-4/3 shadow-2xl">
          <div className="absolute inset-0 bg-slate-800 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c6c0e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay">
            <span className="text-white/50 font-mono text-sm bg-black/50 px-4 py-2 rounded">Imagen: Estación en cultivo</span>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            La Estación <br />
            <span className="text-emerald-400">Inteligente CENVIX</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Kotia es una estación inteligente que recopila datos del campo mediante sensores de alta precisión y los analiza con inteligencia artificial avanzada. Transformamos la toma de decisiones tradicional en una herramienta de optimización predictiva, garantizando una productividad agrícola sostenible y eficiente.
          </p>
          <button className="text-emerald-400 border border-emerald-500/50 hover:bg-emerald-500/10 font-semibold px-6 py-3 rounded-full transition-all backdrop-blur-sm">
            Conoce la tecnología
          </button>
        </div>
      </div>
    </section>
  );
}
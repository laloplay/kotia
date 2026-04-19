import React from 'react';

export default function DashboardPreview() {
  return (
    <section id="demostracion" className="py-24 px-6 bg-[#0B1120] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Panel de Control <span className="text-emerald-400">Analítico</span>
        </h2>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
          Visualiza el estado completo de tus cultivos a través de una interfaz moderna, intuitiva y repleta de datos accionables.
        </p>
        
        <div className="rounded-2xl border border-slate-700 bg-[#1e293b] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform transition-transform hover:scale-[1.01] duration-500">
          <div className="rounded-xl overflow-hidden bg-[#0B1120] border border-slate-800 relative aspect-video flex items-center justify-center group">
            
            <div className="text-center p-8">
              <p className="text-slate-500 mb-4 font-mono text-sm">Espacio para la imagen del Dashboard</p>
              <div className="w-24 h-1 bg-slate-800 mx-auto rounded-full overflow-hidden">
                <div className="w-1/2 h-full bg-emerald-500 animate-pulse"></div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
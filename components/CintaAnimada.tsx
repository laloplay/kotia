import React from 'react';

export default function Ticker() {
  return (
    <div className="bg-[#050810] border-y border-emerald-500/20 py-4 overflow-hidden relative flex items-center">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
      
      <div className="flex whitespace-nowrap animate-scroll">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-6 mx-3">
            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase">IA + IOT</span>
            <span className="text-slate-700">•</span>
            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase">Monitoreo en Tiempo Real</span>
            <span className="text-slate-700">•</span>
            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase">Optimización de Riego</span>
            <span className="text-slate-700">•</span>
            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase">Sistemas de Almacenamiento</span>
            <span className="text-slate-700">•</span>
            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase">Sensores de Campo</span>
            <span className="text-slate-700">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
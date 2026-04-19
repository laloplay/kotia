import React from 'react';

export default function CtaYellow() {
  return (
    <section className="bg-[#EEDB1D] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
          Revoluciona tu Producción Agrícola Hoy
        </h2>
        <p className="text-slate-800 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
          KOTIA CENVIX transforma tu campo con IA predictiva. Reduce consumo de agua hasta un 20%, disminuye costos operativos y aumenta rendimiento hasta 20%. Solicita una consulta sin costo para implementar monitoreo inteligente en tu cultivo.
        </p>
        
        <a 
          href="#contacto"
          className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold px-10 py-4 rounded-full transition-transform hover:scale-105 shadow-xl text-lg"
        >
          SOLICITAR DEMOSTRACIÓN GRATIS
        </a>
      </div>
    </section>
  );
}
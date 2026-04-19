import React from 'react';
import { Droplets, Cpu, Signal, BrainCircuit, SlidersHorizontal, BellRing } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: Droplets, title: 'Monitoreo Preciso del Suelo', desc: 'Análisis continuo de humedad y evaporación. Sensores de alta precisión detectan el nivel exacto de hidratación para una intervención óptima.' },
    { icon: Cpu, title: 'Riego Autónomo y Eficiente', desc: 'La IA anticipa las necesidades hídricas y administra el riego 24/7. Reduce el consumo de agua hasta un 20% y minimiza costos operativos.' },
    { icon: Signal, title: 'Sincronización por Proximidad', desc: 'Descarga de datos automática al acercarte a la estación. Diseñado específicamente para zonas rurales sin necesidad de internet continuo.' },
    { icon: BrainCircuit, title: 'Análisis Predictivo de Cultivos', desc: 'Estudia patrones ambientales para prever estrés hídrico y enfermedades antes de que afecten el rendimiento. Prevención inteligente.' },
    { icon: SlidersHorizontal, title: 'Control Total a Distancia', desc: 'Gestiona tu sistema desde cualquier lugar. Accede a historiales, recomendaciones de IA y configura parámetros directamente desde tu móvil.' },
    { icon: BellRing, title: 'Alertas y Acción en Tiempo Real', desc: 'Recibe notificaciones inmediatas ante niveles críticos. El sistema se autoajusta al instante para proteger tu productividad hídrica.' },
  ];

  return (
    <section className="py-24 px-6 bg-[#0B1120] relative">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Características <span className="text-emerald-400">Principales</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, index) => (
            <div key={index} className="group bg-[#111827] p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)]">
              <div className="bg-slate-900 group-hover:bg-emerald-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 border border-slate-800 group-hover:border-emerald-500/30">
                <feat.icon className="text-slate-400 group-hover:text-emerald-400 w-8 h-8 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
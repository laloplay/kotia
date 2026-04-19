import React from 'react';
import { CloudRain, Droplets, TrendingUp, ShieldCheck, Smartphone, BellRing } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: CloudRain, title: 'Monitoreo de Clima', desc: 'Datos precisos de temperatura, humedad y radiación solar en tiempo real.' },
    { icon: Droplets, title: 'Optimización de Riego', desc: 'Reducción del consumo de agua con sensores que ajustan el riego automáticamente.' },
    { icon: TrendingUp, title: 'Análisis Predictivo', desc: 'Algoritmos de IA para predecir plagas y enfermedades antes de que ocurran.' },
    { icon: ShieldCheck, title: 'Control Remoto', desc: 'Gestión total desde cualquier dispositivo con una interfaz web intuitiva.' },
    { icon: BellRing, title: 'Alertas en Tiempo Real', desc: 'Notificaciones instantáneas sobre condiciones críticas en el estado de tu campo.' },
    { icon: Smartphone, title: 'App Móvil Integrada', desc: 'Lleva el control de tus cultivos en el bolsillo a donde quiera que vayas.' },
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
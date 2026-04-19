import React from 'react';
import { Cpu, Wifi, Cloud, BrainCircuit, UserCheck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    { icon: Cpu, title: 'Sensores de Campo', desc: 'Recopilamos datos con sensores inteligentes.' },
    { icon: Wifi, title: 'Flujo de Datos', desc: 'Transmisión directa mediante IoT.' },
    { icon: Cloud, title: 'Nube Central', desc: 'Almacenamiento seguro e integración.' },
    { icon: BrainCircuit, title: 'Análisis con IA', desc: 'Algoritmos que procesan y predicen.' },
    { icon: UserCheck, title: 'Usuario Final', desc: 'Recibe alertas y toma decisiones.' },
  ];

  return (
    <section className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 text-center">
          Cómo <span className="text-emerald-400">Funciona</span>
        </h2>
        
        <div className="relative flex flex-col md:flex-row justify-between items-start gap-10 md:gap-4">
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-linear-to-r from-emerald-500/10 via-emerald-500/50 to-emerald-500/10 -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center flex-1 relative group">
              <div className="w-20 h-20 rounded-full bg-[#1e293b] border-2 border-slate-700 group-hover:border-emerald-500 flex items-center justify-center mb-6 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:-translate-y-2">
                <step.icon className="text-emerald-400 w-8 h-8" />
                <div className="absolute -top-2 -right-2 bg-emerald-500 text-[#0B1120] text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
                  0{index + 1}
                </div>
              </div>
              
              <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
              <p className="text-sm text-slate-400 max-w-50 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
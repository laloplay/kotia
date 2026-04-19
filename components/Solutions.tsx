import React from 'react';

export default function Solutions() {
  const solutions = [
    { id: '01', title: 'Monitoreo en Tiempo Real', desc: 'Recopilamos datos de temperatura, humedad y nutrición con sensores de alta precisión para una visibilidad total del campo.' },
    { id: '02', title: 'Optimización de Riego', desc: 'Reducción drástica del consumo de agua mediante algoritmos de IA que ajustan el flujo según las necesidades exactas de cada planta.' },
    { id: '03', title: 'Análisis Predictivo', desc: 'Predicción de plagas y enfermedades antes de que afecten la cosecha, permitiendo una intervención preventiva inteligente.' },
    { id: '04', title: 'Acceso Remoto', desc: 'Control total desde cualquier dispositivo. Monitorea y gestiona tus cultivos desde el centro de monitoreo CENVIX.' },
    { id: '05', title: 'Alertas en Tiempo Real', desc: 'Notificaciones instantáneas sobre condiciones críticas, garantizando la seguridad y la productividad de su producción.' }
  ];

  return (
    <section id="soluciones" className="py-24 px-6 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 border-b border-slate-800 pb-6 inline-block pr-20">
          Nuestras Soluciones
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, index) => (
            <div key={index} className="bg-[#0f172a] p-8 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 group flex flex-col h-full rounded-sm">
              <div className="text-emerald-400 font-mono text-sm font-bold mb-3 opacity-80">
                {sol.id}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{sol.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 grow">
                {sol.desc}
              </p>
              <a href="#" className="text-emerald-400 text-sm font-semibold hover:text-emerald-300 transition-colors inline-flex items-center gap-2 mt-auto">
                Ver Detalles <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
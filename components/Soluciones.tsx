import React from 'react';

export default function Solutions() {
  const solutions = [
    { id: '01', title: 'Monitoreo Integral en Tiempo Real', desc: 'Sensores de alta fidelidad capturan humedad, temperatura, evaporación y radiación. Obtén una radiografía exacta y fundamentada del estado de tus cultivos.' },
    { id: '02', title: 'Riego Inteligente y Autónomo', desc: 'Algoritmos avanzados administran el riego 24/7 basándose en las necesidades biológicas de la planta, ahorrando hasta un 20% de agua sin intervención humana.' },
    { id: '03', title: 'Prevención Avanzada de Riesgos', desc: 'Identifica amenazas de plagas, enfermedades y estrés hídrico de forma temprana. Intervenciones preventivas que aseguran la máxima productividad de tu cosecha.' },
    { id: '04', title: 'Gestión Remota y Sincronización Local', desc: 'Supervisa todo desde tu dispositivo. Nuestro sistema de proximidad permite descargar datos al acercarte a la estación Kotia, ideal para zonas de baja cobertura.' },
    { id: '05', title: 'Respuesta Inmediata a Anomalías', desc: 'El sistema no solo te notifica al instante ante niveles críticos, sino que toma acción automática activando el riego para salvaguardar tu producción.' }
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
              <p className="text-slate-400 text-sm leading-relaxed grow">
                {sol.desc}
              </p>
              {/* Se eliminó el enlace de "Ver Detalles" para mantener la tarjeta limpia */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
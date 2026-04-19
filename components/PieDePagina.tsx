import React from 'react';
import { X, Link, Camera } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050810] pt-16 pb-8 px-6 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4 cursor-pointer">
            
            <img 
              src="https://i.postimg.cc/NF4GSx2D/LOGO-SN-FD.png"
              alt="Logo CENVIX" 
              className="h-8 w-auto object-contain"
            />
            {/*<span className="text-3xl font-bold text-white tracking-wider">Kotia</span>*/}
          
          </div>
          <p className="text-slate-500 text-sm">
            Revoluciona la agricultura mediante inteligencia artificial y monitoreo de precisión.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">Contacto</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>info@Kotia.com</li>
            <li>+52 961 106 8789</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">Síguenos</h4>
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors"><X className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors"><Link className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors"><Camera className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto text-center pt-8 border-t border-slate-800 text-slate-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Kotia. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
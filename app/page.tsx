import BarraNavegacion from '@/components/BarraNavegacion';
import PortadaPrincipal from '@/components/PortadaPrincipal';
import EstacionInteligente from '@/components/EstacionInteligente';
import Caracteristicas from '@/components/Caracteristicas';
import ComoFunciona from '@/components/ComoFunciona';
import VistaPreviaPanel from '@/components/VistaPreviaPanel';
import LlamadoAccion from '@/components/LlamadoAccion';
import Soluciones from '@/components/Soluciones';
import CintaAnimada from '@/components/CintaAnimada';
import FormularioContacto from '@/components/FormularioContacto';
import PieDePagina from '@/components/PieDePagina';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1120] font-sans selection:bg-emerald-500/30 text-slate-200 overflow-x-hidden w-full">
      <BarraNavegacion />
      <PortadaPrincipal />
      <EstacionInteligente />
      <Caracteristicas />
      <ComoFunciona />
      <VistaPreviaPanel />
      <LlamadoAccion />
      <Soluciones />
      <FormularioContacto />
      <CintaAnimada />
      <PieDePagina />
    </main>
  );
}
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SmartStation from '@/components/SmartStation';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import DashboardPreview from '@/components/DashboardPreview';
import CtaYellow from '@/components/CtaYellow';
import Solutions from '@/components/Solutions';
import Ticker from '@/components/Ticker';
import ContactForm from '@/components/ContactForm'; // <- Importado
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1120] font-sans selection:bg-emerald-500/30 text-slate-200">
      <Navbar />
      <Hero />
      <SmartStation />
      <Features />
      <HowItWorks />
      <DashboardPreview />
      <CtaYellow />
      <Solutions />
      <ContactForm />
      <Ticker />
      <Footer />
    </main>
  );
}
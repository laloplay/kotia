"use client";

import React, { useState } from 'react';
import { User, Mail, Phone, MessageSquare, Send } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdqyprj"; 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          setErrorMessage(data.errors.map((err: any) => err.message).join(', '));
        } else {
          setErrorMessage('Hubo un problema al enviar el formulario.');
        }
      }
    } catch (error) {
      setErrorMessage('Error de conexión. Intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 px-6 bg-[#0f172a] relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Solicita <span className="text-emerald-400">Información</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Déjanos tus datos y nuestro equipo de expertos evaluará cómo Kotia puede optimizar tu producción. Consulta sin costo.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#1e293b] p-8 md:p-10 rounded-3xl border border-slate-700 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            
            <div className="relative">
              <label className="block text-slate-400 text-sm font-medium mb-2" htmlFor="nombre">Nombre Completo</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-500" />
                </div>
                <input 
                  type="text" 
                  id="nombre" 
                  name="Nombre" 
                  required
                  className="w-full bg-[#0B1120] border border-slate-700 text-white rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  placeholder="Ej. Juan Pérez"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-slate-400 text-sm font-medium mb-2" htmlFor="telefono">Teléfono</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-slate-500" />
                </div>
                <input 
                  type="tel" 
                  id="telefono" 
                  name="Teléfono"
                  required
                  className="w-full bg-[#0B1120] border border-slate-700 text-white rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  placeholder="Ej. +52 961..."
                />
              </div>
            </div>
          </div>

          <div className="relative mb-6">
            <label className="block text-slate-400 text-sm font-medium mb-2" htmlFor="email">Correo Electrónico</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-500" />
              </div>
              <input 
                type="email" 
                id="email" 
                name="Email"
                required
                className="w-full bg-[#0B1120] border border-slate-700 text-white rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                placeholder="tu@correo.com"
              />
            </div>
          </div>

          <div className="relative mb-8">
            <label className="block text-slate-400 text-sm font-medium mb-2" htmlFor="mensaje">¿Cómo podemos ayudarte?</label>
            <div className="relative">
              <div className="absolute top-3 left-0 pl-4 pointer-events-none">
                <MessageSquare className="h-5 w-5 text-slate-500" />
              </div>
              <textarea 
                id="mensaje" 
                name="Mensaje"
                rows={4}
                required
                className="w-full bg-[#0B1120] border border-slate-700 text-white rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                placeholder="Cuéntanos sobre el tamaño de tu cultivo y qué te gustaría monitorear..."
              ></textarea>
            </div>
          </div>

          {errorMessage && (
            <div className="mb-4 text-red-400 text-sm text-center font-medium">
              {errorMessage}
            </div>
          )}

          <button 
            type="submit" 
            disabled={isSubmitting || isSuccess}
            className={`w-full font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-lg
              ${isSuccess 
                ? 'bg-green-500 text-slate-900' 
                : 'bg-emerald-500 hover:bg-emerald-400 text-slate-900 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]'
              }
              ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
            `}
          >
            {isSubmitting ? (
              <span className="animate-pulse">Enviando mensaje...</span>
            ) : isSuccess ? (
              <span>¡Mensaje Enviado! Nos contactaremos pronto.</span>
            ) : (
              <>
                Enviar Solicitud <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
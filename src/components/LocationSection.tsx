import React from 'react';
import { StoreConfig } from '../types';
import { MapPin, Navigation, Clock, MessageCircle, ArrowUpRight } from 'lucide-react';

interface LocationSectionProps {
  storeConfig: StoreConfig;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ storeConfig }) => {
  const waUrl = `https://wa.me/${storeConfig.whatsapp}?text=${encodeURIComponent(
    'Olá! Vim pelo site da Vavá Acessórios e gostaria de saber o horário de atendimento e localização na Galeria Eco Center.'
  )}`;

  return (
    <section id="local" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      <div className="rounded-3xl border border-neutral-800 bg-[#0E0E10] p-6 sm:p-14 relative overflow-hidden">
        {/* Subtle radial metallic glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-neutral-400">
              <MapPin className="w-4 h-4 text-white" />
              <span>VISITE NOSSA LOJA FÍSICA</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Galeria Eco Center. <br />
              <span className="text-neutral-400">Petrolina - PE.</span>
            </h2>

            <p className="text-neutral-300 text-sm sm:text-lg font-light leading-relaxed max-w-xl">
              Venha tomar um café conosco, testar os modelos de iPhone pessoalmente em mãos e tirar todas as suas dúvidas com nossos consultores especializados.
            </p>

            <div className="space-y-2.5 pt-1 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <Navigation className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Endereço: </strong>
                  {storeConfig.enderecoCompleto}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Atendimento: </strong>
                  Segunda a Sexta das 08h30 às 18h30 | Sábado das 08h30 às 13h00
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <a
                href={storeConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-[0.14em] hover:bg-neutral-200 active:scale-95 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)]"
              >
                <Navigation className="w-4 h-4" />
                <span>ABRIR NO GOOGLE MAPS</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </a>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-neutral-700 bg-neutral-900/60 text-white font-semibold text-xs uppercase tracking-[0.14em] hover:bg-neutral-800 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>HORÁRIO & COMO CHEGAR</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Location Map Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-800 bg-black/60 p-6 space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 relative border border-neutral-800">
                {/* Visual stylised dark map preview */}
                <iframe
                  title="Localização Vavá Acessórios na Galeria Eco Center"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.435735165445!2d-40.5050!3d-9.3900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x773703901b7a701%3A0x6739cb586e!2sPetrolina%20-%20PE!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr"
                  className="w-full h-full border-0 filter invert contrast-125 opacity-75"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-800 text-[11px] text-white font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Galeria Eco Center
                </div>
              </div>

              <div className="text-center sm:text-left text-xs text-neutral-400">
                Atendimento presencial com fácil estacionamento e segurança na Galeria Eco Center.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

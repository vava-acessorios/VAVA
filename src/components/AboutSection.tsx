import React from 'react';
import { StoreConfig } from '../types';
import { Instagram, MapPin, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  storeConfig: StoreConfig;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ storeConfig }) => {
  const igUrl = `https://www.instagram.com/${storeConfig.instagram}/`;

  return (
    <section id="sobre" className="py-28 px-6 max-w-7xl mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Story & Positioning */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.28em] uppercase text-neutral-400">
            <span>HISTÓRIA & TRADIÇÃO</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>DESDE 2017</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              9 ANOS DE EXPERIÊNCIA
            </span>{' '}
            <br />
            NO UNIVERSO APPLE.
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            <p>
              A <strong className="text-white font-semibold">Vavá Acessórios</strong> nasceu da paixão pela tecnologia e do compromisso em oferecer uma experiência de compra confiável.
            </p>
            <p>
              Trabalhamos com iPhones novos e seminovos, buscando unir qualidade, procedência verificada, atendimento especializado e transparência.
            </p>
            <p>
              Nosso objetivo é ajudar você a encontrar o aparelho ideal, com informações claras e atendimento próximo.
            </p>
          </div>

          {/* Highlights checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
              <span>9 anos consolidada no Vale do São Francisco</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
              <span>Espaço físico climatizado na Galeria Eco Center</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
              <span>Migração de dados gratuita na compra</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
              <span>Suporte e assistência direta pós-venda</span>
            </div>
          </div>

          <div className="pt-4">
            <a
              href={igUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-[0.16em] hover:bg-neutral-200 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <Instagram className="w-4 h-4" />
              <span>CONHEÇA A VAVÁ ACESSÓRIOS</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>

        {/* Right Column: Visual Boutique Atmosphere */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-[#0E0E10] shadow-2xl group">
            {/* Real Apple atmosphere image */}
            <img
              src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1000&auto=format&fit=crop"
              alt="Ambiente de atendimento Vavá Acessórios na Galeria Eco Center"
              className="w-full aspect-[4/3] object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5">
              <div className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
                <MapPin className="w-3.5 h-3.5 text-white" />
                <span>Galeria Eco Center · Petrolina - PE</span>
              </div>
              <p className="text-white text-sm font-semibold mt-1">
                Atendimento consultivo e teste prático em mãos.
              </p>
            </div>
          </div>

          {/* Social Proof Mini Card */}
          <div className="rounded-2xl border border-neutral-800 bg-[#0E0E10] p-5 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 block font-semibold">
                Perfil Oficial
              </span>
              <span className="text-white font-bold text-sm">@{storeConfig.instagram}</span>
            </div>
            <a
              href={igUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-300 hover:text-white flex items-center gap-1 underline underline-offset-4"
            >
              Ver publicações e novidades
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

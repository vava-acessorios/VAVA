import React from 'react';
import { ShieldCheck, Award, Users, Store, ArrowRight } from 'lucide-react';
import { StoreConfig } from '../types';

interface TrustSectionProps {
  storeConfig: StoreConfig;
  onOpenWarranty: () => void;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ storeConfig, onOpenWarranty }) => {
  return (
    <section id="confianca" className="py-28 px-6 bg-[#080809] border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold tracking-[0.28em] uppercase text-neutral-400 mb-3">
            CONFIANÇA & TRANSPARÊNCIA
          </p>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            COMPRAR SEU IPHONE DEVE SER <br />
            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              UMA EXPERIÊNCIA SEGURA.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 font-light mt-4">
            Em um mercado onde a autenticidade é essencial, conheça os pilares que guiam a Vavá Acessórios há 9 anos.
          </p>
        </div>

        {/* 4 Trust Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 01 - Procedência Verificada */}
          <div className="rounded-3xl bg-[#0F0F11] border border-neutral-800/80 p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-bold tracking-[0.3em] text-neutral-400 group-hover:text-white transition-colors">
                  01
                </span>
                <div className="p-2.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-300 group-hover:text-white transition-colors">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight mb-3">
                Procedência Verificada
              </h3>

              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                Checagem técnica minuciosa de cada iPhone: verificação de IMEI contra bloqueios na Anatel, ausência total de restrições no iCloud e auditoria de componentes originais de fábrica.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800/60 text-xs text-neutral-400">
              Checklist de 32 itens antes da venda
            </div>
          </div>

          {/* 02 - Garantia Real */}
          <div className="rounded-3xl bg-[#0F0F11] border border-neutral-800/80 p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-bold tracking-[0.3em] text-neutral-400 group-hover:text-white transition-colors">
                  02
                </span>
                <div className="p-2.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-300 group-hover:text-white transition-colors">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight mb-3">
                Garantia Transparente
              </h3>

              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                iPhones novos lacrados contam com 1 ano de garantia oficial Apple. Seminovos acompanham garantia da própria loja com suporte presencial em nossa assistência e bancada técnica.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800/60">
              <button
                onClick={onOpenWarranty}
                className="text-xs text-neutral-300 hover:text-white inline-flex items-center gap-1 group-hover:underline underline-offset-4 cursor-pointer"
              >
                <span>Ver termos de garantia</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 03 - Atendimento Especializado */}
          <div className="rounded-3xl bg-[#0F0F11] border border-neutral-800/80 p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-bold tracking-[0.3em] text-neutral-400 group-hover:text-white transition-colors">
                  03
                </span>
                <div className="p-2.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-300 group-hover:text-white transition-colors">
                  <Users className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight mb-3">
                Atendimento Especializado
              </h3>

              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                Auxiliamos na escolha do aparelho certo para o seu perfil e orçamento, além de prestar suporte na migração completa dos seus dados e backup do seu smartphone anterior.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800/60 text-xs text-neutral-400">
              Consultores dedicados no WhatsApp
            </div>
          </div>

          {/* 04 - Loja Física */}
          <div className="rounded-3xl bg-[#0F0F11] border border-neutral-800/80 p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-bold tracking-[0.3em] text-neutral-400 group-hover:text-white transition-colors">
                  04
                </span>
                <div className="p-2.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-300 group-hover:text-white transition-colors">
                  <Store className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight mb-3">
                Loja Física na Região
              </h3>

              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                Ponto de atendimento presencial fixo na Galeria Eco Center, em Petrolina - PE. Você testa o aparelho em mãos antes de fechar negócio, com entrega segura para Juazeiro - BA.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800/60 text-xs text-neutral-400">
              Galeria Eco Center, Petrolina
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { X, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { TEXTOS_INSTITUCIONAIS } from '../data/storeConfig';

interface WarrantyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WarrantyModal: React.FC<WarrantyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-3xl bg-[#0D0D0F] border border-neutral-800 p-5 sm:p-10 shadow-2xl space-y-6 max-h-[92vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer z-10"
          aria-label="Fechar termos de garantia"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800 text-white">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold">
              TRANSPARÊNCIA VAVÁ ACESSÓRIOS
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">Condições de Garantia</h3>
          </div>
        </div>

        <p className="text-sm text-neutral-300 font-light leading-relaxed">
          {TEXTOS_INSTITUCIONAIS.garantia}
        </p>

        {/* Detailed Breakdown */}
        <div className="space-y-4 pt-2">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-4 space-y-2">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              iPhones Novos (Lacrados na Caixa)
            </h4>
            <p className="text-xs text-neutral-300 font-light leading-relaxed">
              Garantia oficial mundial de 1 ano concedida pela Apple Inc., com cobertura total em qualquer centro de serviço autorizado (AASP) ou Apple Store no Brasil. A ativação ocorre no primeiro momento em que o cliente liga o aparelho.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-4 space-y-2">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              iPhones Seminovos Selecionados
            </h4>
            <p className="text-xs text-neutral-300 font-light leading-relaxed">
              Garantia legal de 90 dias com a Vavá Acessórios contra defeitos de funcionamento elétrico ou eletrônico (placa lógica, câmeras, sensores de Face ID e botões). Suporte técnico presencial direto em nossa loja na Galeria Eco Center em Petrolina.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800/80 bg-neutral-900/30 p-4 flex items-start gap-3 text-xs text-neutral-400">
            <AlertCircle className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
            <span>
              A garantia não cobre avarias decorrentes de quedas físicas, quebra de vidro, imersão em líquidos ou intervenções por terceiros não autorizados.
            </span>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full py-3.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { X, Lock } from 'lucide-react';
import { TEXTOS_INSTITUCIONAIS } from '../data/storeConfig';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
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
        className="relative w-full max-w-xl rounded-3xl bg-[#0D0D0F] border border-neutral-800 p-5 sm:p-10 shadow-2xl space-y-6 max-h-[92vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer z-10"
          aria-label="Fechar política de privacidade"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800 text-white">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold">
              SEGURANÇA DA INFORMAÇÃO
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">Política de Privacidade</h3>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
          <p>{TEXTOS_INSTITUCIONAIS.privacidade}</p>
          <p>
            Em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018), seus dados compartilhados em conversas no WhatsApp são utilizados estritamente para emissão de nota fiscal, cadastro de garantia e contato logístico da sua compra.
          </p>
          <p>
            Não repassamos, vendemos ou compartilhamos dados de nossos clientes com parceiros de publicidade de terceiros.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full py-3.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

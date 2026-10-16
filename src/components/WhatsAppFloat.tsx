import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { StoreConfig } from '../types';

interface WhatsAppFloatProps {
  storeConfig: StoreConfig;
}

export const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({ storeConfig }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const waUrl = `https://wa.me/${storeConfig.whatsapp}?text=${encodeURIComponent(
    'Olá! Vim pelo site da Vavá Acessórios e gostaria de atendimento sobre iPhones disponíveis.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 pointer-events-auto">
      {/* Small floating tooltip hint */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#0C0C0E]/95 border border-neutral-800 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">
              Atendimento Online
            </span>
            <span className="text-xs text-white font-medium">
              Fale com um consultor Apple
            </span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-500 hover:text-white p-1 ml-1 cursor-pointer"
            aria-label="Dispensar aviso"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Vavá Acessórios no WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-white text-black shadow-[0_10px_35px_rgba(255,255,255,0.25)] hover:bg-neutral-200 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        {/* Subtle breathing ripple */}
        <span className="absolute inset-0 rounded-full border border-white/60 animate-ping opacity-40 pointer-events-none" />

        <MessageCircle className="w-7 h-7 text-black group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};

import React from 'react';
import { StoreConfig } from '../types';
import { Instagram, MessageCircle, MapPin, ShieldCheck, Lock } from 'lucide-react';

interface FooterProps {
  storeConfig: StoreConfig;
  onOpenWarranty: () => void;
  onOpenPrivacy: () => void;
  onOpenStoreManager?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  storeConfig,
  onOpenWarranty,
  onOpenPrivacy,
}) => {
  const currentYear = new Date().getFullYear();
  const igUrl = `https://www.instagram.com/${storeConfig.instagram}/`;
  const waUrl = `https://wa.me/${storeConfig.whatsapp}?text=${encodeURIComponent(
    'Olá! Vim pelo site da Vavá Acessórios e gostaria de atendimento.'
  )}`;

  return (
    <footer className="bg-[#040405] border-t border-neutral-900 pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-900">
          {/* Brand Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="flex flex-col group inline-block">
              <span className="text-2xl font-black tracking-[0.16em] text-white">VAVÁ</span>
              <span className="text-[9px] tracking-[0.45em] text-neutral-400 font-semibold -mt-1">
                ACESSÓRIOS
              </span>
            </a>

            <p className="text-neutral-300 text-sm font-light max-w-sm">
              "Seu próximo iPhone começa aqui."
            </p>

            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
              Especialistas no universo Apple com 9 anos de tradição no Vale do São Francisco. iPhones novos e seminovos com procedência verificada e garantia.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={igUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors"
                aria-label="Instagram Oficial Vavá Acessórios"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors"
                aria-label="WhatsApp Oficial"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={storeConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors"
                aria-label="Localização no Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Navegação</p>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#iphones" className="hover:text-white transition-colors">
                  iPhones em Estoque
                </a>
              </li>
              <li>
                <a href="#confianca" className="hover:text-white transition-colors">
                  Procedência & Segurança
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre a Loja (9 Anos)
                </a>
              </li>
              <li>
                <a href="#local" className="hover:text-white transition-colors">
                  Localização na Galeria Eco Center
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional and Trust Links */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Atendimento & Suporte
            </p>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Falar com um Especialista no WhatsApp
                </a>
              </li>
              <li>
                <a href={igUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Instagram: @{storeConfig.instagram}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenWarranty}
                  className="hover:text-white transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                  Condições de Garantia
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-white transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <Lock className="w-3.5 h-3.5 text-neutral-400" />
                  Política de Privacidade
                </button>
              </li>
              <li className="pt-2">
                <a
                  href={storeConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline text-xs flex items-center gap-1"
                >
                  <MapPin className="w-3 h-3 text-neutral-400" />
                  {storeConfig.enderecoCurto}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Store Manager button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            © {currentYear} Vavá Acessórios. Galeria Eco Center, Petrolina - PE. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4">
            <span>iPhone é marca registrada da Apple Inc. Loja independente especializada.</span>
          </div>
        </div>

        {/* 3D Model Credits at the final bottom of the page */}
        <div className="pt-4 mt-4 border-t border-neutral-900/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-neutral-400">
          <div>
            Modelo 3D Oficial: iPhone 15 Pro Max por{' '}
            <a
              href="https://sketchfab.com/stockpikkme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white underline font-medium"
            >
              PikkmeStudios
            </a>{' '}
            no{' '}
            <a
              href="https://sketchfab.com/3d-models/iphone-15-pro-max-3d-model-for-blender-39f789497d934a8a853dc3dbdca13613"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white underline font-medium"
            >
              Sketchfab
            </a>
          </div>
          <a
            href="https://sketchfab.com/3d-models/iphone-15-pro-max-3d-model-for-blender-39f789497d934a8a853dc3dbdca13613"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white underline"
          >
            Ver modelo 3D original
          </a>
        </div>
      </div>
    </footer>
  );
};

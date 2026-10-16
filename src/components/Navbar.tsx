import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Instagram, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import { StoreConfig } from '../types';

interface NavbarProps {
  storeConfig: StoreConfig;
  onOpenWarranty: () => void;
  onOpenStoreManager: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ storeConfig, onOpenWarranty, onOpenStoreManager }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const waUrl = `https://wa.me/${storeConfig.whatsapp}?text=${encodeURIComponent(
    'Olá! Vim pelo site da Vavá Acessórios e gostaria de atendimento especializado sobre iPhones.'
  )}`;

  const igUrl = `https://www.instagram.com/${storeConfig.instagram}/`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-neutral-800/80 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex flex-col group cursor-pointer"
            aria-label="Vavá Acessórios - Página Inicial"
          >
            <span className="text-xl sm:text-2xl font-black tracking-[0.16em] text-white group-hover:text-neutral-200 transition-colors">
              VAVÁ
            </span>
            <span className="text-[9px] tracking-[0.45em] text-neutral-400 font-semibold -mt-1 group-hover:text-white transition-colors">
              ACESSÓRIOS
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.18em] font-medium text-neutral-300">
            <a
              href="#iphones"
              className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              iPhones
            </a>
            <button
              onClick={onOpenWarranty}
              className="hover:text-white transition-colors relative py-1 cursor-pointer after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Garantia
            </button>
            <a
              href="#confianca"
              className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Procedência
            </a>
            <a
              href="#sobre"
              className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Sobre a Loja
            </a>
            <a
              href="#local"
              className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Localização
            </a>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={igUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-full transition-colors"
              title="Instagram Oficial @vava_acessorios"
              aria-label="Instagram da loja"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-[0.14em] hover:bg-neutral-200 active:scale-95 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>ATENDIMENTO</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-neutral-900 border border-neutral-800 rounded-full"
              aria-label="Falar no WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:bg-neutral-900 rounded-lg transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-10 px-8 md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col space-y-6">
            <a
              href="#iphones"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold tracking-tight text-white hover:text-neutral-400 transition-colors border-b border-neutral-800/80 pb-4"
            >
              iPhones Disponíveis
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWarranty();
              }}
              className="text-left text-2xl font-bold tracking-tight text-white hover:text-neutral-400 transition-colors border-b border-neutral-800/80 pb-4"
            >
              Garantia & Termos
            </button>
            <a
              href="#confianca"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold tracking-tight text-white hover:text-neutral-400 transition-colors border-b border-neutral-800/80 pb-4"
            >
              Procedência Verificada
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold tracking-tight text-white hover:text-neutral-400 transition-colors border-b border-neutral-800/80 pb-4"
            >
              Sobre a Loja (9 Anos)
            </a>
            <a
              href="#local"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold tracking-tight text-white hover:text-neutral-400 transition-colors border-b border-neutral-800/80 pb-4"
            >
              Galeria Eco Center
            </a>
          </div>

          <div className="flex flex-col space-y-4 pt-6">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-[0.16em]"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </a>

            <div className="flex items-center justify-between text-xs text-neutral-400 pt-2">
              <a
                href={igUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white"
              >
                <Instagram className="w-4 h-4" />
                @{storeConfig.instagram}
              </a>
              <span>Petrolina · Juazeiro</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

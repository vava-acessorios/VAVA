import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { CatalogSection } from './components/CatalogSection';
import { TrustSection } from './components/TrustSection';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { WarrantyModal } from './components/WarrantyModal';
import { PrivacyModal } from './components/PrivacyModal';
import { StoreManagerModal } from './components/StoreManagerModal';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { DEFAULT_STORE_CONFIG } from './data/storeConfig';
import { INITIAL_PRODUCTS } from './data/products';
import { StoreConfig, iPhoneProduct } from './types';

const STORE_CONFIG_STORAGE_KEY = 'vava_acessorios_config_v1';
const PRODUCTS_STORAGE_KEY = 'vava_acessorios_products_v8';

export default function App() {
  const [storeConfig, setStoreConfig] = useState<StoreConfig>(() => {
    try {
      const saved = localStorage.getItem(STORE_CONFIG_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_STORE_CONFIG;
  });

  const [products, setProducts] = useState<iPhoneProduct[]>(() => {
    try {
      const saved = localStorage.getItem(PRODUCTS_STORAGE_KEY);
      if (saved) {
        const parsed: iPhoneProduct[] = JSON.parse(saved);
        if (
          parsed.length === 3 &&
          parsed.some((p) => p.id === 'ip-17-pro') &&
          parsed.some((p) => p.id === 'ip-16-pro-max-desert') &&
          parsed.some((p) => p.id === 'ip-14-pro-deep-purple')
        ) {
          return parsed;
        }
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_PRODUCTS;
  });

  const [selectedProduct, setSelectedProduct] = useState<iPhoneProduct | null>(null);
  const [isWarrantyOpen, setIsWarrantyOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isStoreManagerOpen, setIsStoreManagerOpen] = useState(false);

  // Persistence handlers
  const handleSaveConfig = (newConfig: StoreConfig) => {
    setStoreConfig(newConfig);
    try {
      localStorage.setItem(STORE_CONFIG_STORAGE_KEY, JSON.stringify(newConfig));
    } catch (e) {
      console.error(e);
    }
  };

  const handleSaveProducts = (newProducts: iPhoneProduct[]) => {
    setProducts(newProducts);
    try {
      localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(newProducts));
    } catch (e) {
      console.error(e);
    }
  };

  const handleResetDefaults = () => {
    setStoreConfig(DEFAULT_STORE_CONFIG);
    setProducts(INITIAL_PRODUCTS);
    try {
      localStorage.removeItem(STORE_CONFIG_STORAGE_KEY);
      localStorage.removeItem(PRODUCTS_STORAGE_KEY);
    } catch (e) {
      console.error(e);
    }
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('iphones');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const waUrl = `https://wa.me/${storeConfig.whatsapp}?text=${encodeURIComponent(
      'Olá! Vim pelo site da Vavá Acessórios e gostaria de falar com um especialista sobre a compra de um iPhone.'
    )}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-white selection:text-black overflow-x-hidden w-full max-w-[100vw]">
      {/* Top Navbar */}
      <Navbar
        storeConfig={storeConfig}
        onOpenWarranty={() => setIsWarrantyOpen(true)}
        onOpenStoreManager={() => setIsStoreManagerOpen(true)}
      />

      <main className="flex-1">
        {/* 3D Cinematic Hero */}
        <Hero3D
          storeConfig={storeConfig}
          onExploreClick={scrollToCatalog}
          onContactClick={scrollToContact}
        />

        {/* Marquee Ticker */}
        <div className="border-y border-neutral-900 bg-[#0B0B0C] overflow-hidden py-4 text-xs font-semibold tracking-[0.25em] text-neutral-400 select-none">
          <div className="flex gap-8 whitespace-nowrap animate-marquee">
            <span>NOVOS LACRADOS</span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span>SEMINOVOS SELECIONADOS</span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span>9 ANOS DE EXPERIÊNCIA APPLE</span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span>PROCEDÊNCIA VERIFICADA</span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span>GARANTIA DA LOJA</span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span>PETROLINA - PE & JUAZEIRO - BA</span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span>GALERIA ECO CENTER</span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span>ATENDIMENTO VIP NO WHATSAPP</span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            {/* Seamless duplicate */}
            <span>NOVOS LACRADOS</span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span>SEMINOVOS SELECIONADOS</span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span>9 ANOS DE EXPERIÊNCIA APPLE</span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span>PROCEDÊNCIA VERIFICADA</span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span>GARANTIA DA LOJA</span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span>PETROLINA - PE & JUAZEIRO - BA</span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span>GALERIA ECO CENTER</span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span>ATENDIMENTO VIP NO WHATSAPP</span>
          </div>
        </div>

        {/* Products Catalog Section */}
        <CatalogSection
          products={products}
          storeConfig={storeConfig}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />

        {/* Subtle Gradient Horizontal Separator */}
        <div className="relative w-full flex items-center justify-center px-6 overflow-hidden" aria-hidden="true">
          <div className="w-full max-w-7xl relative flex items-center justify-center">
            {/* Ambient soft glow */}
            <div className="absolute h-8 w-2/3 max-w-2xl bg-gradient-to-r from-transparent via-white/[0.07] to-transparent blur-lg pointer-events-none" />
            {/* Hairline gradient separator */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-800 via-neutral-500/40 via-neutral-800 to-transparent" />
          </div>
        </div>

        {/* 4 Pillars Trust Section */}
        <TrustSection
          storeConfig={storeConfig}
          onOpenWarranty={() => setIsWarrantyOpen(true)}
        />

        {/* About Section */}
        <AboutSection storeConfig={storeConfig} />

        {/* Location Section */}
        <LocationSection storeConfig={storeConfig} />
      </main>

      {/* Footer */}
      <Footer
        storeConfig={storeConfig}
        onOpenWarranty={() => setIsWarrantyOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenStoreManager={() => setIsStoreManagerOpen(true)}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloat storeConfig={storeConfig} />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        storeConfig={storeConfig}
        onClose={() => setSelectedProduct(null)}
        onOpenWarranty={() => {
          setSelectedProduct(null);
          setIsWarrantyOpen(true);
        }}
      />

      {/* Warranty Conditions Modal */}
      <WarrantyModal
        isOpen={isWarrantyOpen}
        onClose={() => setIsWarrantyOpen(false)}
      />

      {/* Privacy Policy Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      {/* Store Manager / Config Modal */}
      <StoreManagerModal
        isOpen={isStoreManagerOpen}
        onClose={() => setIsStoreManagerOpen(false)}
        storeConfig={storeConfig}
        onSaveConfig={handleSaveConfig}
        products={products}
        onSaveProducts={handleSaveProducts}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}

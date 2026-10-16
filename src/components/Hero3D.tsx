import React, { useState } from 'react';
import { MessageCircle, ArrowDown, Rotate3d, Sparkles } from 'lucide-react';
import { StoreConfig } from '../types';

interface Hero3DProps {
  storeConfig: StoreConfig;
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero3D: React.FC<Hero3DProps> = ({ storeConfig, onExploreClick, onContactClick }) => {
  const [featuredModel, setFeaturedModel] = useState<'16' | '15'>('16');

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Cinematic studio backdrops & lighting glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.04] rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-neutral-600/[0.05] rounded-full blur-[120px]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Hero Copy */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-7 text-left order-2 lg:order-1">
          {/* Unboxed clean metadata kicker */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-neutral-400 font-medium">
            <span>{storeConfig.nome}</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>PETROLINA</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>JUAZEIRO</span>
          </div>

          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[0.95] text-white">
            SEU PRÓXIMO <br />
            <span className="bg-gradient-to-b from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              IPHONE ESTÁ AQUI.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 font-light max-w-xl leading-relaxed">
            Tecnologia Apple, procedência verificada e confiança em cada detalhe.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-[0.16em] hover:bg-neutral-200 active:scale-95 transition-all shadow-[0_0_35px_rgba(255,255,255,0.25)] hover:shadow-[0_0_45px_rgba(255,255,255,0.35)] cursor-pointer"
            >
              EXPLORAR IPHONES
            </button>

            <button
              onClick={onContactClick}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-neutral-700 bg-neutral-900/40 text-white font-semibold text-xs uppercase tracking-[0.16em] hover:border-neutral-400 hover:bg-neutral-800/60 active:scale-95 transition-all backdrop-blur-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-neutral-300" />
              FALAR COM UM ESPECIALISTA
            </button>
          </div>

          {/* Key proof indicators */}
          <div className="pt-6 border-t border-neutral-800/80 w-full grid grid-cols-3 gap-4 text-left">
            <div>
              <p className="text-2xl font-bold text-white tracking-tight">9 Anos</p>
              <p className="text-xs text-neutral-400 mt-0.5">Especialista Apple</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white tracking-tight">100%</p>
              <p className="text-xs text-neutral-400 mt-0.5">Procedência lícita</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white tracking-tight">Garantia</p>
              <p className="text-xs text-neutral-400 mt-0.5">Até 1 ano oficial</p>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Real iPhone Viewport */}
        <div className="lg:col-span-6 flex flex-col items-center relative order-1 lg:order-2 w-full">
          {/* Flagship model switcher */}
          <div className="flex items-center gap-2 mb-3.5 bg-neutral-900/90 border border-neutral-800/90 p-1 rounded-2xl shadow-xl">
            <button
              type="button"
              onClick={() => setFeaturedModel('16')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                featuredModel === '16'
                  ? 'bg-white text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              iPhone 16 Pro Max
            </button>
            <button
              type="button"
              onClick={() => setFeaturedModel('15')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                featuredModel === '15'
                  ? 'bg-white text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Rotate3d className="w-3.5 h-3.5" />
              iPhone 15 Pro Max
            </button>
          </div>

          {/* Main 3D Container Box */}
          <div className="relative w-full h-[480px] sm:h-[560px] lg:h-[620px] rounded-3xl bg-radial from-neutral-900/60 to-[#050505] border border-neutral-800/80 flex items-center justify-center overflow-hidden shadow-2xl">
            {featuredModel === '16' ? (
              <iframe
                title="iPhone 16 Pro Max 3D Model"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                className="w-full h-full border-0 bg-transparent rounded-3xl"
                src="https://sketchfab.com/models/41a071ae12794b668502f58d1e0fd1a3/embed?autostart=1&ui_theme=dark&transparent=1&dnt=1"
              />
            ) : (
              <iframe
                title="iPhone 15 Pro Max 3D Model for Blender"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                className="w-full h-full border-0 bg-transparent rounded-3xl"
                src="https://sketchfab.com/models/39f789497d934a8a853dc3dbdca13613/embed?autostart=1&ui_theme=dark&transparent=1&dnt=1"
              />
            )}
          </div>
        </div>
      </div>

      {/* Down Scroll Cue */}
      <button
        onClick={onExploreClick}
        aria-label="Rolar para o catálogo"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer group"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-neutral-400 group-hover:text-neutral-200">
          EXPLORAR CATÁLOGO
        </span>
        <div className="w-5 h-8 border border-neutral-700 rounded-full flex justify-center p-1 group-hover:border-neutral-400 transition-colors">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </button>
    </section>
  );
};

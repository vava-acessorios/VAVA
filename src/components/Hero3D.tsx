import React from 'react';
import { MessageCircle, Rotate3d } from 'lucide-react';
import { StoreConfig } from '../types';

interface Hero3DProps {
  storeConfig: StoreConfig;
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero3D: React.FC<Hero3DProps> = ({ storeConfig, onExploreClick, onContactClick }) => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      {/* Cinematic studio backdrops & lighting glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-white/[0.04] rounded-full blur-[90px] sm:blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-neutral-600/[0.05] rounded-full blur-[80px] sm:blur-[120px]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Column 1: Hero Copy (ORDER-1 everywhere so text is always first on mobile) */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-5 sm:space-y-7 text-left order-1">
          {/* Unboxed clean metadata kicker */}
          <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.24em] text-neutral-400 font-medium">
            <span>{storeConfig.nome}</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>PETROLINA</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>JUAZEIRO</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
            SEU PRÓXIMO <br />
            <span className="bg-gradient-to-b from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              IPHONE ESTÁ AQUI.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 font-light max-w-xl leading-relaxed">
            Tecnologia Apple, procedência verificada e confiança em cada detalhe. 9 anos de tradição na Galeria Eco Center.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-1 sm:pt-2">
            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-[0.16em] hover:bg-neutral-200 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.25)] cursor-pointer"
            >
              EXPLORAR IPHONES
            </button>

            <button
              onClick={onContactClick}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-full border border-neutral-700 bg-neutral-900/60 text-white font-semibold text-xs uppercase tracking-[0.16em] hover:border-neutral-400 hover:bg-neutral-800 active:scale-95 transition-all backdrop-blur-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-neutral-300" />
              FALAR COM ESPECIALISTA
            </button>
          </div>

          {/* Key proof indicators */}
          <div className="pt-5 border-t border-neutral-800/80 w-full grid grid-cols-3 gap-2 sm:gap-4 text-left">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">9 Anos</p>
              <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5">Especialista Apple</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">100%</p>
              <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5">Procedência lícita</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">Garantia</p>
              <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5">Até 1 ano oficial</p>
            </div>
          </div>
        </div>

        {/* Column 2: iPhone Visual / 3D Showcase (ORDER-2) */}
        <div className="lg:col-span-6 flex flex-col items-center relative order-2 w-full mt-2 lg:mt-0">
          {/* Flagship model badge */}
          <div className="flex items-center gap-2 mb-3 bg-neutral-900/90 border border-neutral-800 px-4 py-1.5 rounded-full shadow-lg">
            <Rotate3d className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-white">
              iPhone 15 Pro Max
            </span>
          </div>

          {/* Main Showcase Box - Modelo 3D Interativo Direto */}
          <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[540px] rounded-3xl bg-radial from-neutral-900/60 to-[#050505] border border-neutral-800/80 flex items-center justify-center overflow-hidden shadow-2xl">
            <iframe
              title="iPhone 15 Pro Max 3D Model"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; fullscreen; xr-spatial-tracking"
              className="w-full h-full border-0 bg-transparent rounded-3xl"
              src="https://sketchfab.com/models/39f789497d934a8a853dc3dbdca13613/embed?autostart=1&ui_theme=dark&transparent=1&dnt=1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

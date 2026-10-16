import React, { useState, useRef } from 'react';
import { iPhoneProduct, StoreConfig } from '../types';
import { BatteryCharging, Shield, CheckCircle2, MessageCircle, ArrowUpRight, Camera, Rotate3d } from 'lucide-react';
import { resolveAsset } from '../utils/assets';

interface ProductCardProps {
  product: iPhoneProduct;
  storeConfig: StoreConfig;
  onSelect: (product: iPhoneProduct) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, storeConfig, onSelect }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, isHovered: false });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y, isHovered: true });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, isHovered: false }));
  };

  // WhatsApp click handler with direct pre-filled text
  const getWhatsAppMessage = () => {
    return `Olá! Vim pelo site da Vavá Acessórios e gostaria de consultar a disponibilidade do ${product.modelo}, ${product.armazenamento}${
      product.cor ? `, cor ${product.cor}` : ''
    } (${product.condicao === 'novo' ? 'Novo Lacrado' : 'Seminovo'}).`;
  };

  const waUrl = `https://wa.me/${storeConfig.whatsapp}?text=${encodeURIComponent(getWhatsAppMessage())}`;

  const hasPhoto = product.fotos && product.fotos.length > 0;

  // Scale normalization to ensure iPhone 16 Pro Max and iPhone 17 Pro match the visual size of iPhone 14 Pro Max
  const getImageScale = () => {
    if (product.id === 'ip-16-pro-max-desert') return 1.15;
    if (product.id === 'ip-17-pro') return 1.22;
    return 1.0;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(product)}
      className="group relative rounded-3xl bg-[#0F0F10] border border-neutral-800/80 p-6 flex flex-col justify-between transition-all duration-500 hover:border-neutral-600/80 hover:shadow-[0_20px_50px_rgba(0,0,0,0.9)] cursor-pointer overflow-hidden"
      style={{
        transform: mousePos.isHovered ? 'translateY(-4px)' : 'none',
      }}
    >
      {/* Dynamic studio light that tracks the cursor */}
      {mousePos.isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.08), transparent 70%)`,
          }}
        />
      )}

      {/* Top Bar: Condition metadata & Availability */}
      <div>
        <div className="flex items-center justify-between text-xs text-neutral-400 pb-3 mb-2 border-b border-neutral-800/60">
          <div className="flex items-center gap-2">
            <span
              className={`font-semibold uppercase tracking-wider text-[11px] ${
                product.condicao === 'novo' ? 'text-white' : 'text-neutral-300'
              }`}
            >
              {product.condicao === 'novo' ? 'Novo Lacrado' : 'Seminovo'}
            </span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>{product.geracao}ª Geração</span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px]">
            {product.disponivel ? (
              <span className="flex items-center gap-1 text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Disponível
              </span>
            ) : (
              <span className="text-neutral-500">Sob Reserva</span>
            )}
          </div>
        </div>

        {/* Product Image Stage */}
        <div className="relative aspect-[4/4.2] w-full flex items-center justify-center my-3 overflow-hidden rounded-2xl bg-gradient-to-b from-neutral-900/60 to-black/80 border border-neutral-800/40">
          {product.embed3dUrl && (
            <div className="absolute top-3 left-3 bg-neutral-900/90 backdrop-blur-md border border-neutral-700/80 px-2.5 py-1 rounded-full text-[10px] font-semibold text-white flex items-center gap-1.5 shadow-lg z-10">
              <Rotate3d className="w-3.5 h-3.5 text-neutral-300" />
              <span>3D INTERATIVO</span>
            </div>
          )}

          {hasPhoto ? (
            <img
              src={resolveAsset(product.fotos[0])}
              alt={`${product.modelo} Apple oficial`}
              loading="lazy"
              className="max-h-[88%] max-w-[88%] object-contain transition-all duration-700 ease-out group-hover:-translate-y-2 drop-shadow-[0_20px_25px_rgba(0,0,0,0.8)]"
              style={{
                transform: `scale(${getImageScale() * (mousePos.isHovered ? 1.05 : 1.0)})`,
              }}
            />
          ) : (
            /* Honest placeholder according to rule #3: NEVER invent a fake phone */
            <div className="flex flex-col items-center justify-center p-6 text-center text-neutral-500 space-y-2">
              <Camera className="w-8 h-8 text-neutral-600 stroke-[1.2]" />
              <p className="text-xs font-semibold text-neutral-400">Espaço Reservado</p>
              <p className="text-[11px] text-neutral-500 max-w-[200px] leading-tight">
                Fotografia real e oficial da loja a ser inserida.
              </p>
            </div>
          )}

          {/* Quick inspect badge on hover */}
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-md border border-neutral-700/80 px-2.5 py-1 rounded-full text-[10px] text-neutral-300 flex items-center gap-1">
            <span>{product.embed3dUrl ? 'Girar em 3D' : 'Ver detalhes'}</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-400" />
          </div>
        </div>

        {/* Title & Core specs */}
        <div className="mt-4">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-neutral-100 transition-colors">
              {product.modelo}
            </h3>
            <span className="text-xs font-semibold text-neutral-300 tracking-wider">
              {product.armazenamento}
            </span>
          </div>

          {/* Unboxed Metadata Line with typographic separators */}
          <div className="flex items-center gap-2 text-xs text-neutral-400 mt-1.5 flex-wrap">
            <span className="flex items-center gap-1">
              <span
                className="w-2.5 h-2.5 rounded-full border border-neutral-700"
                style={{ backgroundColor: product.corHex }}
              />
              {product.cor}
            </span>

            {product.condicao === 'seminovo' && product.bateria && (
              <>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span className="flex items-center gap-1 text-neutral-300">
                  <BatteryCharging className="w-3.5 h-3.5 text-neutral-400" />
                  Bateria {product.bateria}%
                </span>
              </>
            )}

            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-400 flex items-center gap-1">
              <Shield className="w-3 h-3 text-neutral-500" />
              {product.garantia}
            </span>
          </div>

          {product.conservacao && (
            <p className="text-xs text-neutral-400 mt-2 line-clamp-1 italic">
              Estado: {product.conservacao}
            </p>
          )}
        </div>
      </div>

      {/* Bottom Area: Pricing and WhatsApp direct action */}
      <div className="mt-6 pt-4 border-t border-neutral-800/60 flex flex-col gap-3">
        <div className="flex items-baseline justify-between">
          <span className="text-[11px] uppercase tracking-wider text-neutral-400">
            {product.preco ? 'Valor à vista' : 'Condições'}
          </span>
          <span className="text-lg font-bold text-white tracking-tight">
            {product.preco
              ? product.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              : 'Sob Consulta'}
          </span>
        </div>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-neutral-200 text-black font-semibold text-xs uppercase tracking-[0.14em] active:scale-98 transition-all shadow-[0_4px_20px_rgba(255,255,255,0.15)] cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          <span>CONSULTAR ESTE IPHONE</span>
        </a>
      </div>
    </div>
  );
};

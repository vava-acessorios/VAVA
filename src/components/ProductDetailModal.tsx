import React, { useState, useEffect } from 'react';
import { iPhoneProduct, StoreConfig } from '../types';
import { resolveAsset } from '../utils/assets';
import {
  X,
  MessageCircle,
  Shield,
  BatteryCharging,
  Cpu,
  Monitor,
  Camera,
  CheckCircle2,
  Zap,
  Rotate3d,
} from 'lucide-react';

interface ProductDetailModalProps {
  product: iPhoneProduct | null;
  storeConfig: StoreConfig;
  onClose: () => void;
  onOpenWarranty: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  storeConfig,
  onClose,
  onOpenWarranty,
}) => {
  if (!product) return null;

  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  // Default to photos for instant mobile loading & scroll freedom, allow easy 3D toggle
  const [viewMode, setViewMode] = useState<'3d' | 'photos'>('photos');

  useEffect(() => {
    if (product) {
      setViewMode('photos');
      setActivePhotoIndex(0);
    }
  }, [product?.id]);

  const getWhatsAppMessage = () => {
    return `Olá! Vim pelo site da Vavá Acessórios e tenho interesse no ${product.modelo}, ${product.armazenamento}, cor ${product.cor} (${
      product.condicao === 'novo' ? 'Novo' : 'Seminovo'
    }). Gostaria de verificar a disponibilidade e formas de pagamento.`;
  };

  const waUrl = `https://wa.me/${storeConfig.whatsapp}?text=${encodeURIComponent(getWhatsAppMessage())}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0C0C0E] border border-neutral-800 p-5 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.95)]"
      >
        {/* Close Button with touch target >= 44px */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer z-20"
          aria-label="Fechar modal de detalhes"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Gallery Column */}
          <div className="lg:col-span-6 flex flex-col items-center w-full">
            {/* View Mode Switcher if 3D model is available */}
            {product.embed3dUrl && (
              <div className="flex items-center gap-1.5 mb-3.5 p-1 bg-neutral-900 border border-neutral-800 rounded-xl w-full justify-center">
                <button
                  type="button"
                  onClick={() => setViewMode('3d')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    viewMode === '3d'
                      ? 'bg-white text-black shadow-md'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Rotate3d className="w-3.5 h-3.5" />
                  Visualizador 3D 360°
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('photos')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    viewMode === 'photos'
                      ? 'bg-white text-black shadow-md'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Camera className="w-3.5 h-3.5" />
                  Fotos do Aparelho
                </button>
              </div>
            )}

            {/* Main Stage (3D or Photos) */}
            {viewMode === '3d' && product.embed3dUrl ? (
              <div className="w-full flex flex-col items-center">
                <div className="relative w-full aspect-square rounded-2xl bg-black border border-neutral-800 flex items-center justify-center overflow-hidden shadow-2xl">
                  <iframe
                    title={`${product.modelo} 3D Model`}
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    className="w-full h-full border-0 rounded-2xl"
                    src={product.embed3dUrl}
                  />
                </div>
                <div className="mt-2.5 flex items-center gap-2 text-xs text-neutral-400 text-center">
                  <Rotate3d className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span>Gire com o mouse ou toque para inspecionar em 360°</span>
                </div>
              </div>
            ) : (
              <div className="w-full flex flex-col items-center">
                <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-b from-neutral-900/80 to-black border border-neutral-800 flex items-center justify-center p-6 overflow-hidden">
                  {product.fotos && product.fotos.length > 0 ? (
                    <img
                      src={resolveAsset(product.fotos[activePhotoIndex] || product.fotos[0])}
                      alt={`${product.modelo} - Imagem oficial real`}
                      className="max-h-[92%] max-w-[92%] object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.9)]"
                    />
                  ) : (
                    <div className="text-center p-6 text-neutral-500 space-y-2">
                      <Camera className="w-10 h-10 text-neutral-600 stroke-[1.2] mx-auto" />
                      <p className="text-sm font-semibold text-neutral-300">Fotografia Oficial a Inserir</p>
                      <p className="text-xs text-neutral-500">
                        Espaço reservado fielmente. Nunca inventamos celulares fictícios.
                      </p>
                    </div>
                  )}
                </div>

                {/* Thumbnail Selectors */}
                {product.fotos && product.fotos.length > 1 && (
                  <div className="flex items-center gap-3 mt-4 w-full justify-center">
                    {product.fotos.map((photo, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActivePhotoIndex(idx)}
                        className={`w-16 h-16 rounded-xl border p-1 bg-neutral-900/60 overflow-hidden transition-all cursor-pointer ${
                          activePhotoIndex === idx
                            ? 'border-white ring-1 ring-white'
                            : 'border-neutral-800 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={resolveAsset(photo)} alt="" className="w-full h-full object-contain" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Verification Tag */}
            <div className="mt-5 w-full bg-neutral-900/40 border border-neutral-800/80 rounded-xl p-3.5 flex items-center gap-3 text-xs text-neutral-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Checagem oficial Vavá Acessórios: IMEI Anatel limpo, sem bloqueios iCloud e peças originais.
              </span>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-6 flex flex-col space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 font-medium mb-1">
                <span>{product.condicao === 'novo' ? 'Novo Lacrado' : 'Seminovo Selecionado'}</span>
                <span aria-hidden="true">·</span>
                <span>{product.geracao}ª Geração Apple</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {product.modelo}
              </h2>
              <p className="text-lg text-neutral-300 font-light mt-1">
                {product.armazenamento} · Cor {product.cor}
              </p>
            </div>

            {/* Core commercial highlights */}
            <div className="grid grid-cols-2 gap-3 py-3 border-y border-neutral-800/80 text-xs">
              <div>
                <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">
                  Garantia
                </span>
                <span className="font-semibold text-white flex items-center gap-1.5 mt-0.5">
                  <Shield className="w-3.5 h-3.5 text-neutral-400" />
                  {product.garantia}
                </span>
              </div>

              {product.condicao === 'seminovo' && product.bateria && (
                <div>
                  <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">
                    Saúde da Bateria
                  </span>
                  <span className="font-semibold text-white flex items-center gap-1.5 mt-0.5">
                    <BatteryCharging className="w-3.5 h-3.5 text-emerald-400" />
                    {product.bateria}% original
                  </span>
                </div>
              )}

              {product.conservacao && (
                <div className="col-span-2">
                  <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">
                    Estado de Conservação
                  </span>
                  <span className="font-medium text-neutral-200 mt-0.5 block">
                    {product.conservacao}
                  </span>
                </div>
              )}
            </div>

            {/* Technical Specifications */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                Especificações Técnicas
              </p>

              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2.5 text-neutral-300">
                  <Monitor className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Tela: </strong>
                    {product.detalhesTecnicos.tela}
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-neutral-300">
                  <Cpu className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Processador: </strong>
                    {product.detalhesTecnicos.processador}
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-neutral-300">
                  <Camera className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Câmeras: </strong>
                    {product.detalhesTecnicos.cameras}
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-neutral-300">
                  <Zap className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Conexão: </strong>
                    Porta {product.detalhesTecnicos.conector} oficial
                  </div>
                </div>
              </div>

              {/* Notable features */}
              <div className="pt-2">
                <span className="text-[11px] text-neutral-500 uppercase tracking-wider block mb-1.5">
                  Destaques:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.detalhesTecnicos.recursos.map((rec, i) => (
                    <span
                      key={i}
                      className="text-[11px] text-neutral-300 bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-md"
                    >
                      {rec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Price & Primary WhatsApp Action */}
            <div className="pt-4 border-t border-neutral-800 space-y-3">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 block">
                    Valor Especial
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {product.preco
                      ? product.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                      : 'Sob Consulta'}
                  </span>
                </div>
                <button
                  onClick={onOpenWarranty}
                  className="text-xs text-neutral-400 hover:text-white underline underline-offset-4 cursor-pointer"
                >
                  Condições de garantia
                </button>
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-white text-black font-bold text-xs uppercase tracking-[0.16em] hover:bg-neutral-200 active:scale-98 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.2)]"
              >
                <MessageCircle className="w-4 h-4" />
                CONSULTAR ESTE IPHONE NO WHATSAPP
              </a>

              <p className="text-[11px] text-neutral-400 text-center">
                Atendimento rápido para clientes de Petrolina - PE e Juazeiro - BA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

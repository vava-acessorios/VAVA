import React, { useState, useMemo } from 'react';
import { iPhoneProduct, StoreConfig, Condition } from '../types';
import { ProductCard } from './ProductCard';
import { Search, SlidersHorizontal, MessageCircle, Sparkles } from 'lucide-react';

interface CatalogSectionProps {
  products: iPhoneProduct[];
  storeConfig: StoreConfig;
  onSelectProduct: (product: iPhoneProduct) => void;
}

type GenerationFilter = 'all' | 'pro' | '17' | '16' | '14';

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  products,
  storeConfig,
  onSelectProduct,
}) => {
  const [conditionFilter, setConditionFilter] = useState<'all' | Condition>('all');
  const [generationFilter, setGenerationFilter] = useState<GenerationFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Condition filter
      if (conditionFilter !== 'all' && p.condicao !== conditionFilter) {
        return false;
      }

      // Generation / Line filter
      if (generationFilter === 'pro' && !p.isPro) return false;
      if (generationFilter === '17' && p.geracao !== '17') return false;
      if (generationFilter === '16' && p.geracao !== '16') return false;
      if (generationFilter === '14' && p.geracao !== '14') return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesModel = p.modelo.toLowerCase().includes(q);
        const matchesStorage = p.armazenamento.toLowerCase().includes(q);
        const matchesColor = p.cor.toLowerCase().includes(q);
        const matchesCondition = p.condicao.toLowerCase().includes(q);
        if (!matchesModel && !matchesStorage && !matchesColor && !matchesCondition) {
          return false;
        }
      }

      return true;
    });
  }, [products, conditionFilter, generationFilter, searchQuery]);

  return (
    <section id="iphones" className="py-28 px-6 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="max-w-2xl mb-12">
        <p className="text-xs font-semibold tracking-[0.28em] uppercase text-neutral-400 mb-3">
          CATÁLOGO VAVÁ ACESSÓRIOS
        </p>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          ENCONTRE O SEU <br />
          <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
            PRÓXIMO IPHONE.
          </span>
        </h2>
        <p className="text-base sm:text-lg text-neutral-300 font-light mt-4">
          Escolha o modelo ideal para você. Todos com procedência verificada e garantia da loja.
        </p>
      </div>

      {/* Filter and Search Bar Controls (Segmented clean buttons per design constitution) */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-800/80">
        {/* Condition Filter Controls */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#121214] border border-neutral-800 rounded-2xl overflow-x-auto">
          <button
            onClick={() => setConditionFilter('all')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all cursor-pointer whitespace-nowrap ${
              conditionFilter === 'all'
                ? 'bg-white text-black shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Todos os Modelos
          </button>
          <button
            onClick={() => setConditionFilter('novo')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all cursor-pointer whitespace-nowrap ${
              conditionFilter === 'novo'
                ? 'bg-white text-black shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Novos Lacrados
          </button>
          <button
            onClick={() => setConditionFilter('seminovo')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all cursor-pointer whitespace-nowrap ${
              conditionFilter === 'seminovo'
                ? 'bg-white text-black shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Seminovos Selecionados
          </button>
        </div>

        {/* Secondary Category Filters & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Generation segmented tabs */}
          <div className="flex items-center gap-1 p-1 bg-[#121214] border border-neutral-800 rounded-xl overflow-x-auto">
            <button
              onClick={() => setGenerationFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                generationFilter === 'all'
                  ? 'bg-neutral-800 text-white font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Gerais
            </button>
            <button
              onClick={() => setGenerationFilter('pro')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                generationFilter === 'pro'
                  ? 'bg-neutral-800 text-white font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Linha Pro
            </button>
            <button
              onClick={() => setGenerationFilter('17')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                generationFilter === '17'
                  ? 'bg-neutral-800 text-white font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              iPhone 17
            </button>
            <button
              onClick={() => setGenerationFilter('16')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                generationFilter === '16'
                  ? 'bg-neutral-800 text-white font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              iPhone 16
            </button>
            <button
              onClick={() => setGenerationFilter('14')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                generationFilter === '14'
                  ? 'bg-neutral-800 text-white font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              iPhone 14
            </button>
          </div>

          {/* Search Input */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar modelo ou cor..."
              className="w-full bg-[#121214] border border-neutral-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Grid of Product Cards */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              storeConfig={storeConfig}
              onSelect={onSelectProduct}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-3xl border border-neutral-800 bg-[#0E0E10] p-12 text-center max-w-lg mx-auto">
          <Sparkles className="w-10 h-10 text-neutral-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Modelo sob encomenda rápida</h3>
          <p className="text-sm text-neutral-400 mb-6">
            Não encontrou a cor ou capacidade desejada? Nosso estoque na Galeria Eco Center é renovado semanalmente.
          </p>
          <a
            href={`https://wa.me/${storeConfig.whatsapp}?text=${encodeURIComponent(
              `Olá! Gostaria de encomendar um modelo específico de iPhone na Vavá Acessórios.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Consultar Encomenda no WhatsApp
          </a>
        </div>
      )}

      {/* Direct Order Help Banner */}
      <div className="mt-16 rounded-3xl bg-gradient-to-r from-neutral-900/80 via-neutral-900/40 to-neutral-900/80 border border-neutral-800 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <p className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
            Atendimento Personalizado
          </p>
          <h4 className="text-2xl font-bold text-white tracking-tight">
            Dúvidas entre 2 modelos ou quer negociar seu aparelho usado como entrada?
          </h4>
          <p className="text-sm text-neutral-300 font-light max-w-xl">
            Avaliamos seu iPhone seminovo para troca com a melhor cotação da região de Petrolina e Juazeiro.
          </p>
        </div>

        <a
          href={`https://wa.me/${storeConfig.whatsapp}?text=${encodeURIComponent(
            'Olá! Gostaria de fazer uma simulação de avaliação do meu iPhone usado na troca por um novo na Vavá Acessórios.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap px-8 py-4 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-[0.16em] hover:bg-neutral-200 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        >
          SIMULAR AVALIAÇÃO NO WHATSAPP
        </a>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { iPhoneProduct, StoreConfig } from '../types';
import { X, Save, RotateCcw, Plus, Trash2, CheckCircle2 } from 'lucide-react';

interface StoreManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  storeConfig: StoreConfig;
  onSaveConfig: (newConfig: StoreConfig) => void;
  products: iPhoneProduct[];
  onSaveProducts: (newProducts: iPhoneProduct[]) => void;
  onResetDefaults: () => void;
}

export const StoreManagerModal: React.FC<StoreManagerModalProps> = ({
  isOpen,
  onClose,
  storeConfig,
  onSaveConfig,
  products,
  onSaveProducts,
  onResetDefaults,
}) => {
  if (!isOpen) return null;

  const [whatsapp, setWhatsapp] = useState(storeConfig.whatsapp);
  const [productList, setProductList] = useState<iPhoneProduct[]>(products);
  const [successNotice, setSuccessNotice] = useState(false);

  const handlePriceChange = (id: string, valStr: string) => {
    const val = valStr.trim() === '' ? undefined : Number(valStr);
    setProductList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, preco: isNaN(val as number) ? undefined : val } : p))
    );
  };

  const handleStockToggle = (id: string) => {
    setProductList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, disponivel: !p.disponivel } : p))
    );
  };

  const handleBatteryChange = (id: string, valStr: string) => {
    const val = Number(valStr);
    setProductList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, bateria: isNaN(val) ? undefined : val } : p))
    );
  };

  const handleSaveAll = () => {
    onSaveConfig({ ...storeConfig, whatsapp });
    onSaveProducts(productList);
    setSuccessNotice(true);
    setTimeout(() => {
      setSuccessNotice(false);
      onClose();
    }, 1200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0B0B0D] border border-neutral-800 p-6 sm:p-10 shadow-2xl space-y-6"
      >
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold">
              PAINEL DA LOJA
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Gestão de Preços & Estoque
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Atualize telefones, valores e status de estoque sem mexer no código.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Fechar painel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* WhatsApp Configuration Field */}
        <div className="rounded-2xl border border-neutral-800 bg-[#121215] p-5 space-y-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300">
            Número de WhatsApp da Loja (com DDI e DDD, apenas dígitos)
          </label>
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value.replace(/\D/g, ''))}
              placeholder="Ex: 5587988358444"
              className="flex-1 bg-black border border-neutral-700 rounded-xl px-4 py-2.5 text-sm text-white font-mono focus:outline-none focus:border-white transition-colors"
            />
            <span className="text-xs text-neutral-400">
              DDD 87 (Petrolina / Juazeiro)
            </span>
          </div>
        </div>

        {/* Products Quick Editor Table */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
              Aparelhos Cadastrados ({productList.length})
            </h4>
            <span className="text-xs text-neutral-400">
              Clique no interruptor para marcar em estoque ou esgotado.
            </span>
          </div>

          <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
            {productList.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-xl border border-neutral-800/80 bg-neutral-900/40 text-xs"
              >
                <div className="flex-1">
                  <span className="font-bold text-white text-sm">{item.modelo}</span>
                  <div className="text-neutral-400 text-[11px] mt-0.5">
                    {item.armazenamento} · {item.cor} · {item.condicao}
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {/* Price input */}
                  <div className="flex items-center gap-1">
                    <span className="text-neutral-500 text-[11px]">R$</span>
                    <input
                      type="number"
                      value={item.preco !== undefined ? item.preco : ''}
                      onChange={(e) => handlePriceChange(item.id, e.target.value)}
                      placeholder="Sob consulta"
                      className="w-24 bg-black border border-neutral-700 rounded-lg px-2.5 py-1.5 text-white font-mono text-xs focus:outline-none focus:border-white"
                    />
                  </div>

                  {/* Battery Health input for seminovo */}
                  {item.condicao === 'seminovo' && (
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        min="70"
                        max="100"
                        value={item.bateria || ''}
                        onChange={(e) => handleBatteryChange(item.id, e.target.value)}
                        placeholder="Bat %"
                        className="w-16 bg-black border border-neutral-700 rounded-lg px-2 py-1.5 text-white font-mono text-xs text-center focus:outline-none focus:border-white"
                        title="Saúde da bateria %"
                      />
                      <span className="text-neutral-500 text-[10px]">%</span>
                    </div>
                  )}

                  {/* Stock Toggle */}
                  <button
                    onClick={() => handleStockToggle(item.id)}
                    className={`px-3 py-1.5 rounded-lg font-semibold text-[11px] transition-colors cursor-pointer ${
                      item.disponivel
                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                        : 'bg-neutral-800 text-neutral-400 border border-neutral-700'
                    }`}
                  >
                    {item.disponivel ? 'Em Estoque' : 'Esgotado'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onResetDefaults}
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Restaurar estoque de fábrica
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {successNotice && (
              <span className="flex items-center gap-1 text-emerald-400 text-xs animate-pulse">
                <CheckCircle2 className="w-4 h-4" />
                Salvo com sucesso!
              </span>
            )}

            <button
              onClick={handleSaveAll}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors cursor-pointer shadow-lg"
            >
              <Save className="w-4 h-4" />
              Salvar Alterações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

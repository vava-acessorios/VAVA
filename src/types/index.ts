export type Condition = 'novo' | 'seminovo';

export type StorageCapacity = '128 GB' | '256 GB' | '512 GB' | '1 TB';

export interface iPhoneProduct {
  id: string;
  modelo: string;
  geracao: '13' | '14' | '15' | '16' | '17';
  isPro: boolean;
  armazenamento: StorageCapacity;
  cor: string;
  corHex: string;
  condicao: Condition;
  conservacao?: string; // ex: 'Impecável (Grade A+)', 'Excelente'
  bateria?: number; // ex: 100, 95
  garantia: string;
  preco?: number; // Em R$, null para 'Sob consulta'
  disponivel: boolean;
  destaqueHero?: boolean;
  embed3dUrl?: string;
  fotos: string[];
  detalhesTecnicos: {
    tela: string;
    processador: string;
    cameras: string;
    conector: 'USB-C' | 'Lightning';
    recursos: string[];
  };
}

export interface StoreConfig {
  nome: string;
  subtitulo: string;
  instagram: string;
  whatsapp: string; // formato internacional só números: 5587988358444
  telefoneDisplay: string;
  cidadePrincipal: string;
  cidadeSecundaria: string;
  enderecoCurto: string;
  enderecoCompleto: string;
  mapsUrl: string;
  anosExperiencia: number;
}

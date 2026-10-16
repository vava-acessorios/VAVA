import { iPhoneProduct } from '../types';

export const INITIAL_PRODUCTS: iPhoneProduct[] = [
  {
    id: 'ip-14-pro-deep-purple',
    modelo: 'iPhone 14 Pro Max',
    geracao: '14',
    isPro: true,
    armazenamento: '256 GB',
    cor: 'Roxo Profundo (Deep Purple)',
    corHex: '#4C4556',
    condicao: 'seminovo',
    conservacao: 'Impecável (Grade A+ sem marcas de uso)',
    bateria: 95,
    garantia: '90 dias Vavá Acessórios',
    preco: 4690,
    disponivel: true,
    destaqueHero: true,
    embed3dUrl: 'https://sketchfab.com/models/5cb0778041a34f09b409a38c687bb1d4/embed?ui_theme=dark&transparent=1&dnt=1',
    fotos: [
      '/images/iphone-14-pro-colors.png',
      'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP875/sp875-sp876-iphone14-pro-promax_2x.png'
    ],
    detalhesTecnicos: {
      tela: 'Super Retina XDR OLED 6.7" ProMotion 120Hz com Dynamic Island e Tela Sempre Ativa',
      processador: 'A16 Bionic de alto desempenho com Neural Engine de 16 núcleos',
      cameras: 'Tripla Pro: 48 MP Principal com sensor quad-pixel + 12 MP Ultra-angular + 12 MP Teleobjetiva 3x',
      conector: 'Lightning',
      recursos: [
        'Modelo 3D Interativo 360°',
        'Dynamic Island pioneira',
        'Tela Sempre Ativa (Always-On Display)',
        'Estrutura em Aço Inoxidável Cirúrgico',
        'Modo Cinema 4K HDR a 24 fps e Modo Ação'
      ]
    }
  },
  {
    id: 'ip-16-pro-max-desert',
    modelo: 'iPhone 16 Pro Max',
    geracao: '16',
    isPro: true,
    armazenamento: '256 GB',
    cor: 'Titânio Deserto (Desert Titanium)',
    corHex: '#C9A88F',
    condicao: 'novo',
    conservacao: 'Novo Lacrado na Caixa Apple',
    bateria: 100,
    garantia: '1 ano Apple Oficial',
    preco: 8490,
    disponivel: true,
    destaqueHero: true,
    embed3dUrl: 'https://sketchfab.com/models/41a071ae12794b668502f58d1e0fd1a3/embed?ui_theme=dark&transparent=1&dnt=1',
    fotos: [
      '/images/iphone-16-pro-max-colors.jpg?v=2',
      '/images/iphone-16-pro-max-desert.png',
      'https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-finish-lineup-240909_big.jpg.large_2x.jpg'
    ],
    detalhesTecnicos: {
      tela: 'Super Retina XDR OLED 6.9" ProMotion 120Hz — a maior tela em um iPhone, bordas ultrafinas e Ceramic Shield avançado',
      processador: 'A18 Pro de 3nm com Apple Intelligence e GPU 6-core com Ray Tracing acelerado por hardware',
      cameras: 'Tripla Pro: 48 MP Fusion + 48 MP Ultra-angular + 12 MP Teleobjetiva 5x com botão exclusivo de Controle de Câmera',
      conector: 'USB-C',
      recursos: [
        'Modelo 3D Interativo 360°',
        'Botão de Controle de Câmera (Camera Control)',
        'Tela de 6.9 polegadas',
        'Titânio Deserto Grau 5',
        'Gravação 4K Dolby Vision 120 fps',
        'Dynamic Island e Áudio Espacial de estúdio'
      ]
    }
  },
  {
    id: 'ip-17-pro',
    modelo: 'iPhone 17 Pro',
    geracao: '17',
    isPro: true,
    armazenamento: '256 GB',
    cor: 'Titânio Aeroespacial (Titanium Silver)',
    corHex: '#8E9196',
    condicao: 'novo',
    conservacao: 'Novo Lacrado na Caixa Apple',
    bateria: 100,
    garantia: '1 ano Apple Oficial',
    preco: 9490,
    disponivel: true,
    destaqueHero: false,
    embed3dUrl: 'https://sketchfab.com/models/4541aa8a28324b33a2baaf81d263aaec/embed?ui_theme=dark&transparent=1&dnt=1',
    fotos: [
      '/images/iphone-17-pro.png?v=2',
      '/images/iphone-17-pro.jpg?v=2'
    ],
    detalhesTecnicos: {
      tela: 'Super Retina XDR OLED 6.3" ProMotion 120Hz com Dynamic Island de nova geração e bordas micro-curvas',
      processador: 'A19 Pro de última geração com arquitetura avançada e Apple Intelligence integrada',
      cameras: 'Tripla Pro de 48 MP: 48 MP Fusion Principal + 48 MP Ultra-angular + 48 MP Teleobjetiva Periscópica',
      conector: 'USB-C',
      recursos: [
        'Modelo 3D Interativo 360°',
        'Controle de Câmera de Próxima Geração',
        'Estrutura em Titânio Aeroespacial',
        'Processador Apple A19 Pro',
        'Gravação 8K ProRes e Áudio Espacial',
        'Dynamic Island Avançada'
      ]
    }
  }
];


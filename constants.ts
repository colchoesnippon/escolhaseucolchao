
import { Size, Height, Technology, Comfort, BaseType, Color, OptionItem, ModalContent } from './types';

// Base prices per size
export const BASE_PRICES: Record<Size, number> = {
  [Size.SOLTEIRO]: 1490,
  [Size.CASAL]: 1990,
  [Size.QUEEN]: 2490,
  [Size.KING]: 2990,
};

export const SIZE_OPTIONS: OptionItem<Size>[] = [
  { 
    value: Size.SOLTEIRO, 
    label: 'Solteiro', 
    priceModifier: 0, 
    description: '88x188cm',
    thumbnail: 'https://colchoesnippon.com/wp-content/uploads/2025/11/solteiro-icone-medida-colchao-tamanho-nippon-magnetico-massageador.jpg'
  },
  { 
    value: Size.CASAL, 
    label: 'Casal', 
    priceModifier: 0, 
    description: '138x188cm',
    thumbnail: 'https://colchoesnippon.com/wp-content/uploads/2025/11/casal-icone-medida-colchao-tamanho-nippon-magnetico-massageador.jpg'
  },
  { 
    value: Size.QUEEN, 
    label: 'Queen', 
    priceModifier: 0, 
    description: '158x198cm', 
    isPopular: true,
    thumbnail: 'https://colchoesnippon.com/wp-content/uploads/2025/11/queen-icone-medida-colchao-tamanho-nippon-magnetico-massageador.jpg'
  },
  { 
    value: Size.KING, 
    label: 'King', 
    priceModifier: 0, 
    description: '193x203cm',
    thumbnail: 'https://colchoesnippon.com/wp-content/uploads/2025/11/king-icone-medida-colchao-tamanho-nippon-magnetico-massageador.jpg'
  },
];

export const HEIGHT_OPTIONS: OptionItem<Height>[] = [
  { 
    value: Height.H25, 
    label: '25 cm', 
    priceModifier: 0, 
    description: 'Suporta 120kg por Pessoa',
    thumbnail: 'https://colchoesnippon.com/wp-content/uploads/2025/11/25cm-altura-colchao-tamanho-nippon-magnetico-massageador.jpg'
  },
  { 
    value: Height.H30, 
    label: '30 cm', 
    priceBySize: {
      [Size.SOLTEIRO]: 300,
      [Size.CASAL]: 500,
      [Size.QUEEN]: 800,
      [Size.KING]: 900,
    },
    description: 'Suporta 160kg por Pessoa',
    thumbnail: 'https://colchoesnippon.com/wp-content/uploads/2025/11/30cm-altura-colchao-tamanho-nippon-magnetico-massageador.jpg'
  },
  { 
    value: Height.H35, 
    label: '35 cm Premium', 
    priceBySize: {
      [Size.SOLTEIRO]: 600,
      [Size.CASAL]: 1100,
      [Size.QUEEN]: 1400,
      [Size.KING]: 1600,
    },
    description: 'Suporta 200kg por Pessoa',
    thumbnail: 'https://colchoesnippon.com/wp-content/uploads/2025/11/35cm-altura-colchao-tamanho-nippon-magnetico-massageador.jpg'
  },
];

export const TECH_OPTIONS: OptionItem<Technology>[] = [
  { 
    value: Technology.MAG_INFRA, 
    label: 'Pastilhas Terapêuticas', 
    priceModifier: 300, 
    description: 'Imãs de 800gaus + Infravermelho Longo',
    thumbnail: 'https://colchoesnippon.com/wp-content/uploads/2025/11/magneticos-imas-e-infravermelho-colchao-nippon-magnetico-massageador.jpg'
  },
  { 
    value: Technology.SOUND_CHARGER, 
    label: 'Som Bluetooth + Carregador', 
    priceModifier: 670, 
    description: 'Som na lateral do colchão e Carregamento por indução',
    thumbnail: 'https://colchoesnippon.com/wp-content/uploads/2025/11/carregador-por-inducao-sistema-de-som-nippon-magnetico-massageador.jpg'
  },
  { 
    value: Technology.VIBRO, 
    label: 'Vibroterapia', 
    priceModifier: 700, 
    description: '4 Níveis de Potência e Timer ',
    thumbnail: 'https://colchoesnippon.com/wp-content/uploads/2025/11/massageador-simples-colchao-tamanho-nippon-magnetico-massageador.jpg'
  },
  { 
    value: Technology.VIBRO_PREMIUM, 
    label: 'Vibroterapia Premium', 
    priceModifier: 1400, 
    description: 'Motor Big Silencioso, Energia Quântica, Cromoterapia, Massagem Infinita e Bilateral, Despertador e App via Bluetooth,',
    thumbnail: 'https://colchoesnippon.com/wp-content/uploads/2025/11/massageador-premiium-colchao-tamanho-nippon-magnetico-massageador.jpg'
  },
];

export const COMFORT_OPTIONS: OptionItem<Comfort>[] = [
  { 
    value: Comfort.SOFT, 
    label: 'Macio', 
    priceModifier: 0, 
    description: 'Pra quem busca mais conforto',
    thumbnail: 'https://colchoesnippon.com/wp-content/uploads/2025/11/macio-conforto-colchao-tamanho-nippon-magnetico-massageador.jpg'
  },
  { 
    value: Comfort.MEDIUM, 
    label: 'Intermediário', 
    priceModifier: 0, 
    description: 'Ideal para Coluna',
    isPopular: true,
    thumbnail: 'https://colchoesnippon.com/wp-content/uploads/2025/11/medio-conforto-colchao-tamanho-nippon-magnetico-massageador.jpg'
  },
  { 
    value: Comfort.FIRM, 
    label: 'Firme', 
    priceModifier: 0, 
    description: 'Suporte ortopédico',
    thumbnail: 'https://colchoesnippon.com/wp-content/uploads/2025/11/firme-conforto-colchao-tamanho-nippon-magnetico-massageador.jpg'
  },
];

export const BASE_OPTIONS: OptionItem<BaseType>[] = [
  { 
    value: BaseType.MATTRESS_ONLY, 
    label: 'Só Colchão', 
    priceModifier: 0,
    thumbnail: 'https://colchoesnippon.com/wp-content/uploads/2025/11/somente-colchao-tamanho-nippon-magnetico-massageador.jpg'
  },
  { 
    value: BaseType.BOX, 
    label: 'Com Base Box', 
    priceBySize: {
      [Size.SOLTEIRO]: 490,
      [Size.CASAL]: 690,
      [Size.QUEEN]: 890,
      [Size.KING]: 1050,
    },
    description: 'Estrutura reforçada',
    thumbnail: 'https://colchoesnippon.com/wp-content/uploads/2025/11/box-norma-colchao-tamanho-nippon-magnetico-massageador.jpg'
  },
  { 
    value: BaseType.BAU, 
    label: 'Com Box Baú', 
    priceBySize: {
      [Size.SOLTEIRO]: 890,
      [Size.CASAL]: 1390,
      [Size.QUEEN]: 1790,
      [Size.KING]: 1990,
    },
    description: 'Espaço de armazenamento',
    thumbnail: 'https://colchoesnippon.com/wp-content/uploads/2025/11/box-bau-colchao-tamanho-nippon-magnetico-massageador.jpg'
  },
];

export const COLOR_OPTIONS: { value: Color; hex: string; imageSeed: string }[] = [
  { value: Color.BEIGE, hex: '#E2D7C7', imageSeed: 'beige' },
  { value: Color.GREY, hex: '#9CA3AF', imageSeed: 'grey' },
  { value: Color.BROWN, hex: '#5D4037', imageSeed: 'brown' },
  { value: Color.BLACK, hex: '#1F2937', imageSeed: 'black' },
];

// Helper content
export const MODAL_CONTENT: Record<string, ModalContent> = {
  tech: {
    title: 'Tecnologias do Sono',
    description: 'Potencialize seu descanso com nossas terapias e comodidades integradas.',
    benefits: [
      'Magnético + Infravermelho: A união clássica para repor o equilíbrio energético e auxiliar na circulação sanguínea.',
      'Som Bluetooth + Carregador: Tecnologia Sound System embutida na lateral com conexão Bluetooth e base de carregamento por indução (sem fio) para seu celular.',
      'Vibroterapia Premium: O ápice do relaxamento. Motor Big ultra-silencioso, 10x mais forte, com controle total via App Bluetooth.'
    ]
  },
  comfort: {
    title: 'Níveis de Conforto',
    description: 'A densidade progressiva inteligente se adapta ao seu biotipo.',
    benefits: [
      'Macio: Camada extra de Viscoelástico (NASA) para alívio de pressão.',
      'Intermediário: O favorito da maioria. Combina suporte firme com toque macio.',
      'Firme: Espuma Rabatan de alta densidade para alinhamento perfeito da coluna.'
    ]
  },
  // Features Section Content
  feature_vibro: {
    title: 'Vibroterapia Inteligente',
    description: 'Uma experiência de spa no seu quarto. Nossa tecnologia de massagem atua profundamente na musculatura.',
    benefits: [
      'Relaxamento Muscular Profundo: Alivia tensões acumuladas durante o dia.',
      'Melhora da Circulação: Estimula o fluxo sanguíneo através de microvibrações.',
      'Controle Total: Ajuste intensidade, velocidade e tipos de massagem via App (Versão Premium).'
    ]
  },
  feature_quantum: {
    title: 'Energia Bioquântica',
    description: 'Restaure o equilíbrio natural do seu corpo com tecnologia de ponta embutida no tecido.',
    benefits: [
      'Ação Anti-inflamatória: Auxilia na redução de dores articulares e musculares.',
      'Combate aos Radicais Livres: A emissão de íons ajuda na renovação celular.',
      'Sono Reparador: Induz ao estágio de sono profundo (REM) mais rapidamente.'
    ]
  },
  feature_structure: {
    title: 'Estrutura & Ergonomia',
    description: 'Engenharia do sono desenvolvida para manter sua coluna perfeitamente alinhada.',
    benefits: [
      'Densidade Progressiva: Camadas que cedem onde precisa (ombros/quadril) e suportam onde deve (lombar).',
      'Rabatan (Perfilado High Tech): Espuma vulcanizada que permite a respiração do colchão e faz uma automassagem tipo do-in.',
      'Durabilidade Extrema: Garantia de não deformação com suporte de peso elevado.'
    ]
  }
};
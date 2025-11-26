
export enum Size {
  SOLTEIRO = 'Solteiro',
  CASAL = 'Casal',
  QUEEN = 'Queen',
  KING = 'King',
}

export enum Height {
  H25 = '25cm',
  H30 = '30cm',
  H35 = '35cm Premium',
}

export enum Technology {
  MAG_INFRA = 'Magnético + Infravermelho',
  SOUND_CHARGER = 'Som Bluetooth + Carregador',
  VIBRO = 'Vibroterapia',
  VIBRO_PREMIUM = 'Vibroterapia Premium',
}

export enum Comfort {
  SOFT = 'Macio',
  MEDIUM = 'Médio',
  FIRM = 'Firme',
}

export enum BaseType {
  MATTRESS_ONLY = 'Somente Colchão',
  BOX = 'Base Box',
  BAU = 'Box Baú',
}

export enum Color {
  BROWN = 'Marrom',
  BEIGE = 'Bege',
  GREY = 'Cinza',
  BLACK = 'Preto',
}

export interface ConfigState {
  size: Size;
  height: Height;
  technologies: Technology[];
  comfort: Comfort;
  baseType: BaseType;
  color: Color;
}

export interface OptionItem<T> {
  value: T;
  label: string;
  thumbnail?: string; // New image property
  priceModifier?: number; // Added to base price (Flat)
  priceBySize?: Record<Size, number>; // Added to base price (Dynamic)
  description?: string;
  isPopular?: boolean;
}

export interface ModalContent {
  title: string;
  description: string;
  benefits: string[];
}
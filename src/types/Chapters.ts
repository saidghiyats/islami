export interface Chapters {
  code: number;
  status: string;
  message: string;
  data: Chapter[];
}

export interface Chapter {
  number: number;
  sequence: number;
  numberOfVerses: number;
  name: Name;
  revelation: Revelation;
  tafsir: Tafsir;
}

export interface Name {
  short: string;
  long: string;
  transliteration: Transliteration;
  translation: Translation;
}

export interface Transliteration {
  en: string;
  id: string;
}

export interface Translation {
  en: string;
  id: string;
}

export interface Revelation {
  arab: string;
  en: string;
  id: string;
}

export interface Tafsir {
  id: string;
}

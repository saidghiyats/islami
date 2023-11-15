export interface Verse {
  numberInQuran: number;
  numberInSurah: number;
  numberSurah: number;
  nameTransliteration: string;
  date: string;
}

export interface SingleBookmark {
  name: string;
  numberInQuran: number;
  numberInSurah: number;
  numberSurah: number;
  nameTransliteration: string;
  date: string;
}

export interface MultipleBookmark extends Verse {
  name: string;
  verses: Verse[];
}

export interface Bookmarks {
  type: string;
  single: SingleBookmark[];
  multiple: MultipleBookmark[];
}

export interface Bookmark {
  name: string;
  type: string;
  numberInQuran: number;
  numberInSurah: number;
  numberSurah: number;
  nameTransliteration: string;
}

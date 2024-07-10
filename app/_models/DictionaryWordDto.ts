export interface Phonetic {
  text: string;
  audio: string;
}

export interface Definition {
  definition: string;
  example?: string;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
}

export interface License {
  name: string;
  url: string;
}

export interface DictionaryWord {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
}

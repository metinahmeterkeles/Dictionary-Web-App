// export default interface ResponseWord {
//   word: string;
//   phonetics: [
//     {
//       audio: string;
//       sourceUrl: string;
//       license: {
//         name: string;
//         url: string;
//       };
//     },
//     {
//       text: string;
//       audio: string;
//       sourceUrl: string;
//       license: {
//         name: string;
//         url: string;
//       };
//     },
//     {
//       text: string;
//       audio: string;
//     }
//   ];
// }

// types.ts

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

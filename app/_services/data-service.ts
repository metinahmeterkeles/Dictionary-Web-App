import { DictionaryWord } from '../_models/DictionaryWordDto';

const getWord = async (word: string): Promise<DictionaryWord[]> => {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export default getWord;

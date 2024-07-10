import CardMeaning from './CardMeaning';
import CardSpeech from './CardSpeech';

interface Definition {
  definition: string;
  example?: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
}
interface CardSpeechProps {
  meaning: Meaning;
}

const CardWord: React.FC<CardSpeechProps> = ({ meaning }) => {
  return (
    <div className="mt-10">
      <CardSpeech partOfSpeech={meaning.partOfSpeech} />
      <CardMeaning
        definitions={meaning.definitions}
        synonyms={meaning.synonyms}
      />
    </div>
  );
};
export default CardWord;

import CardHeader from '../_components/CardHeader';
import CardSpeech from '../_components/CardSpeech';
import CardWord from '../_components/CardWord';
import Error from '../_components/Error';
import getWord from '../_services/data-service';

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { query } = searchParams;
  try {
    const data = await getWord(query);
    const phonetic = data[0].phonetics.find(
      (phonetic) => phonetic.text && phonetic.audio
    );
    const meanings = data[0].meanings;

    return (
      <>
        <div className="flex-1">
          <CardHeader
            word={data[0].word}
            text={phonetic?.text!}
            audio={phonetic?.audio!}
          />
          {meanings.map((meaning, index) => {
            return <CardWord key={`${query}`} meaning={meaning} />;
          })}
        </div>
      </>
    );
  } catch {
    return <Error />;
  }
}

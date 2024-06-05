import CardHeader from '../_components/CardHeader';
import getWord from '../_services/data-service';
import Error from '../_components/Error';

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

    return (
      <>
        <div className=" flex-1">
          <CardHeader
            word={data[0].word}
            text={phonetic?.text!}
            audio={phonetic?.audio!}
          />
        </div>
      </>
    );
  } catch {
    return <Error />;
  }
}

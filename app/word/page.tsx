import { useSearchParams } from 'next/navigation';
import CardHeader from '../_components/CardHeader';
import getWord from '../_services/data-service';

export default async function Home() {
  const data = await getWord('keyboard');
  const phonetic = data[0].phonetics.find(
    (phonetic) => phonetic.text && phonetic.audio
  );
  console.log(phonetic?.text);

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
}

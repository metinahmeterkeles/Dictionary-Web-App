import AudioPlayer from './AudioPlayer';

interface Word {
  word: string;
  text: string;
  audio: string;
}

const CardHeader = ({ word = 'keyboard', text = 'phonetic', audio }: Word) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-2 ">
        <p className="heading-l-mobile md:heading-l lowercase text-primary-2D font-bold dark:text-white">
          {word}
        </p>
        <p className="body-m md:heading-m text-primary-purple">{text}</p>
      </div>
      <AudioPlayer src={audio} />
    </div>
  );
};
export default CardHeader;

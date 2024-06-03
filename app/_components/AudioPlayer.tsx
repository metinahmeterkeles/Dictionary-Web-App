'use client';

import Image from 'next/image';
import icon_play from '@/public/icon-play.svg';
import { useRef } from 'react';

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="flex items-center">
      <button onClick={handlePlay}>
        <Image src={icon_play} alt="İcon Play" priority={true} />
      </button>
      <audio ref={audioRef} src={src} />
    </div>
  );
};

export default AudioPlayer;

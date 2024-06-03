import Image from 'next/image';
import logo from '@/public/logo.svg';
import moon from '@/public/icon-moon.svg';
import Switch from '../_components/Switch';
import Moon from '../_components/Moon';
import FontSelector from '@/app/_components/FontSelector';

export default function Header() {
  return (
    <header className="flex justify-between">
      <Image src={logo} alt="Logo" />

      <div className="flex gap-[26px] items-center">
        <FontSelector />
        <span className=" h-8 border border-primary-97"></span>
        <div className="flex items-center gap-5">
          <Switch />
          <Moon />
        </div>
      </div>
    </header>
  );
}

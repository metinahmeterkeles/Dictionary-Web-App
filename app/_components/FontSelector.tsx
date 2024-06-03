'use client';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';
import arrow from '@/public/icon-arrow-down.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function App() {
  const [selectedFont, setSelectedFont] = useState<string>('sans');

  useEffect(() => {
    // Kullanıcının seçtiği fonta göre font ailesini güncelle
    if (selectedFont === 'serif') {
      document.body.classList.remove('font-sans');
      document.body.classList.remove('font-mono');
      document.body.classList.add('font-serif');
    }
    if (selectedFont === 'mono') {
      document.body.classList.remove('font-sans');
      document.body.classList.remove('font-serif');
      document.body.classList.add('font-mono');
    }
    if (selectedFont === 'sans') {
      document.body.classList.remove('font-mono');
      document.body.classList.remove('font-serif');
      document.body.classList.add('font-sans');
    }
  }, [selectedFont]);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="light"
          className="body-m gap-4 data-[hover=true]:bg-transparent"
        >
          {selectedFont === 'sans' && 'Sans Serif'}
          {selectedFont === 'serif' && 'Serif'}
          {selectedFont === 'mono' && 'Mono'}
          <Image src={arrow} alt="Arrow" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        onAction={(key) => setSelectedFont(String(key))}
        className=" dark:shadow-custom py-6 pl-6 rounded-2xl "
        itemClasses={{
          base: [
            'text-primary-2D',
            'transition-opacity',
            'data-[hover=true]:text-primary-purple',
            'data-[hover=true]:bg-white',
            'dark:text-white',
            'data-[selectable=true]:focus:bg-primary-05',
          ],
        }}
      >
        <DropdownItem
          className=" body-m font-bold hover:bg-transparent focus:bg-transparent active:bg-transparent dark:hover:text-primary-purple dark:hover:bg-transparent dark:focus:bg-transparent dark:active:bg-transparent "
          key="sans"
          variant="light"
          textValue="sans"
          classNames={{
            base: 'text-red-900',
          }}
        >
          <span className="body-m">Sans Serif</span>
        </DropdownItem>
        <DropdownItem
          className="hover:bg-transparent focus:bg-transparent active:bg-transparent dark:hover:bg-transparent dark:hover:text-primary-purple dark:focus:bg-transparent dark:active:bg-transparent font-bold text-custom-body-m"
          key="serif"
          variant="light"
          textValue="serif"
        >
          <span className="body-m">Serif</span>
        </DropdownItem>
        <DropdownItem
          className="hover:bg-transparent focus:bg-transparent active:bg-transparent dark:hover:bg-transparent dark:hover:text-primary-purple dark:focus:bg-transparent dark:active:bg-transparent font-bold text-custom-body-m"
          key="mono"
          variant="light"
          textValue="mono"
        >
          <span className="body-m">Mono</span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

'use client';

import Image from 'next/image';
import searchicon from '@/public/icon-search.svg';
import Input from './Input';
import { FormEvent, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function FormInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputRef.current) {
      const searchQuery = inputRef.current.value;
      router.push(`/word?query=${searchQuery}`);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <div className="absolute inset-y-0 end-0 flex items-center pe-6 pointer-events-none">
          <Image src={searchicon} alt="Search Icon" />
        </div>
        <Input ref={inputRef} />
      </div>
    </form>
  );
}

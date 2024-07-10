'use client';

import Image from 'next/image';

import { useFormStatus } from 'react-dom';
import searchicon from '@/public/icon-search.svg';
import { FaSpinner } from 'react-icons/fa';

const Input = ({ error }: { error: string }) => {
  const { pending } = useFormStatus();

  return (
    <>
      <div className="relative mb-2">
        <div className="absolute inset-y-0 end-0 flex items-center pe-6 pointer-events-none">
          {pending ? (
            <FaSpinner className="animate-spin text-primary-purple" />
          ) : (
            <Image src={searchicon} alt="Search Icon" />
          )}
        </div>
        <input
          type="text"
          name="word"
          disabled={pending}
          placeholder="Search for any word..."
          className={`bg-primary-F4 w-full outline-none px-6 py-5 rounded-2xl text-primary-2D body-m font-bold placeholder:font-bold placeholder:text-[20px] focus-visible:outline-1  dark:text-white dark:bg-primary-1F ${
            error
              ? 'border-primary-orange border'
              : 'focus-visible:outline-primary-purple'
          }`}
        />
      </div>
      {error && (
        <span aria-live="polite" className="heading-s text-primary-orange">
          {error}
        </span>
      )}
    </>
  );
};

export default Input;

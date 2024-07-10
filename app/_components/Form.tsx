'use client';

import { redirect } from 'next/navigation';
import { useState } from 'react';

import Input from './Input';

export default function FormInput() {
  const [error, setError] = useState<string>();
  async function createWord(formData: FormData) {
    const word = formData.get('word') as string;
    if (word === '') {
      setError('Whoops, can’t be empty…');
    } else {
      redirect(`/word?query=${word}`);
    }
  }

  return (
    <form action={createWord}>
      <Input error={error!} />
    </form>
  );
}

'use client';

import { redirect } from 'next/navigation';
import Input from './Input';
import { revalidatePath } from 'next/cache';
import { useState } from 'react';

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

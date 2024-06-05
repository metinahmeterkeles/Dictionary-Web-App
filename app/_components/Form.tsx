import { redirect } from 'next/navigation';
import Input from './Input';
import { revalidatePath } from 'next/cache';

interface FormResult {
  redirect?: string;
  error?: string;
}

export default function FormInput() {
  async function createWord(formData: FormData) {
    'use server';
    const word = formData.get('word') as string;
    revalidatePath('/word');
    redirect(`/word?query=${word}`);
  }

  return (
    <form action={createWord}>
      <Input />
    </form>
  );
}

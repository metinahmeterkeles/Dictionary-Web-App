import Input from './Input';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export default function FormInput() {
  async function createWord(formData: FormData) {
    'use server';
    const word = formData.get('word');
    console.log(word);
    revalidatePath('/word');
    redirect(`/word?query=${word}`);
  }

  return (
    <form action={createWord}>
      <Input />
    </form>
  );
}

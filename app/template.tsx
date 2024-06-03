import FormInput from './_components/Form';
import Header from './_pages/Header';

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" max-w-3xl mx-auto flex-1 my-14 px-4 md:px-0">
      <Header />
      <article className=" mt-[51px] min-h-screen flex flex-col gap-11  ">
        <FormInput />
        {children}
      </article>
    </main>
  );
};
export default template;

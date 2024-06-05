'use client';

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <span className=" text-[64px]">😕</span>
      <span className="font-bold body-m">No Definitions Found</span>
      <span className="body-m text-primary-75 text-center">
        Sorry pal, we couldn&apos;t find definitions for the word you were
        looking for. You can try the search again at later time or head to the
        web instead.
      </span>
    </div>
  );
};
export default Error;

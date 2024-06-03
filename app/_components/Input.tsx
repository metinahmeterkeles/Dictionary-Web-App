import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      type="text"
      ref={ref}
      placeholder="Search for any word..."
      className="bg-primary-F4 w-full outline-none px-6 py-5 rounded-2xl text-primary-2D body-m-sansserif font-bold placeholder:font-bold placeholder:text-[20px] focus-visible:outline-1 focus-visible:outline-primary-purple dark:text-white dark:bg-primary-1F"
      {...props}
    />
  );
});

Input.displayName = 'Input'; // forwardRef kullanırken bileşen adı belirtmek iyi bir pratiktir

export default Input;

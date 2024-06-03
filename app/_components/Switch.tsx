'use client';

import { ChangeEvent, useEffect, useState } from 'react';

export default function Switch() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
    if (isChecked) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isChecked]);

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value="dark-mode"
        className="sr-only peer"
        checked={isChecked}
        onChange={handleChange}
      />
      <div className="relative w-10 h-5 bg-primary-75 rounded-full peer dark:bg-primary-75 peer-hover:bg-primary-purple peer-checked:after:translate-x-[20px] rtl:peer-checked:after:-translate-x-[20px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[14px] after:w-[14px] after:transition-all dark:border-gray-600 peer-checked:bg-primary-purple"></div>
    </label>
  );
}

import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className=" text-5xl font-extrabold leading-9 tracking-tight  text-gray-600 dark:text-slate-50 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 xl:text-7xl">
      {children}
    </h1>
  );
}

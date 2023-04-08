import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import { type HeroIcon } from 'types';

export interface IconButtonProps {
  Icon: HeroIcon;
  children?: React.ReactNode;
  color: string;
  hoverbg?: string;
  isActive?: boolean;
  onClick: () => void;
}

export const IconButton = (props: IconButtonProps) => {
  const { Icon, isActive, color, children, hoverbg } = props;
  const { data: session } = useSession();

  return (
    <button
      className={clsx(
        'flex items-center rounded bg-none p-1 focus:outline-purple-400',
        color,
        hoverbg,
        isActive && 'bg-slate-200',
        session ? 'cursor-pointer hover:bg-purple-50' : 'cursor-default'
      )}
      {...props}
    >
      <Icon
        className={clsx(
          'h-4 w-4',
          !isActive && color,
          isActive && 'text-black',
          children?.toString() && 'mr-1'
        )}
      />
      <span className="text-sm">{children}</span>
    </button>
  );
};

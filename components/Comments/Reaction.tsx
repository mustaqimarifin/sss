import { Image } from '@supabase/ui';
import clsx from 'clsx';
import { useReaction } from 'hooks';
import React, { FC } from 'react';

export interface ReactionProps {
  type: string;
}

const Reaction: FC<ReactionProps> = ({ type }) => {
  const query = useReaction({ type });

  return (
    <div
      className={clsx(
        'h-4 w-4 rounded-full grid place-items-center text-alpha-50'
      )}
    >
      <Image
        className={'h-4 w-4'}
        source={query.data?.url}
        alt={query.data?.label}
      />
    </div>
  );
};

export default Reaction;

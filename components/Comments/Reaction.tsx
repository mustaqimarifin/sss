import { useReaction } from 'hooks';
import React, { FC } from 'react';
import { XD } from 'services/xD';

import { Image } from '@supabase/ui';

export interface ReactionProps {
  type: string;
}

const Reaction: FC<ReactionProps> = ({ type }) => {
  const query = useReaction({ type });

  return (
    <div
      className={XD(
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

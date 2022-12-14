import cn from 'classnames';
import Image from 'next/future/image';
import React from 'react';
import { definitions } from 'types/supabase';

interface Props {
  comment?: any;
  user?: any;
  profile?: definitions['sce_display_users'] | null;
  flip?: string;
  isDeleted?: boolean;
  firstLetter?: string;
}
const Avatar = ({
  comment,
  user,
  profile,
  flip = 'w-7 h-7 text-sm ',
  isDeleted,
  firstLetter
}: Props): JSX.Element => {
  //const flip = 'w-7 h-7 text-sm';
  //const { comment, profile, isDeleted, firstLetter } = props;
  if (isDeleted) {
    return (
      <div
        className={cn(
          'rounded-full border border-white shadow-sm bg-gray-500',
          flip
        )}
      ></div>
    );
  }

  if (firstLetter) {
    return (
      <div
        className={cn(
          'rounded-full border border-white bg-indigo-600 text-white shadow-sm flex items-center justify-center capitalize font-light',
          flip
        )}
      >
        {firstLetter}
      </div>
    );
  }
  if (comment) {
    return (
      <Image
        src={comment.image}
        className={cn(
          'rounded-full border dark:border-white border-gray-600  shadow-sm object-cover',
          flip
        )}
        alt={comment.name}
        width={32}
        height={32}
      />
    );
  }
  if (profile?.avatar) {
    return (
      <Image
        src={profile.avatar}
        className={cn(
          'rounded-full border dark:border-white border-gray-600 shadow-lg object-cover',
          flip
        )}
        alt={profile.name}
        width={32}
        height={32}
      />
    );
  }

  return (
    <div
      className={cn(
        'skeleton rounded-full border border-white bg-indigo-600 text-white shadow-sm flex items-center justify-center capitalize font-light',
        flip
      )}
    ></div>
  );
};

export default Avatar;

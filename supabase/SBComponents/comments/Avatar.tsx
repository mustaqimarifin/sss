import cn from 'classnames';
import Image from 'next/future/image';
import React from 'react';
import { definitions } from 'supabase/types/supabase';

interface Props {
  comment?: definitions['comments'] | null;
  profile?: definitions['profiles'] | null;
  flip?: string;
  isDeleted?: boolean;
  firstLetter?: string;
}
const Avatar = ({
  comment,
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
      <img
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
  if (profile?.avatar_url) {
    return (
      <img
        src={profile.avatar_url}
        className={cn(
          'rounded-full border dark:border-white border-gray-600 shadow-lg object-cover',
          flip
        )}
        alt={profile?.full_name}
        width={32}
        height={32}
      />
    );
  }

  if (profile?.full_name) {
    return (
      <div
        className={cn(
          'rounded-full border border-white bg-indigo-600 text-white shadow-sm flex items-center justify-center capitalize font-light',
          flip
        )}
      >
        {profile?.full_name?.[0]}
      </div>
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

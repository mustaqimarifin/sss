// import { Image } from '@supabase/ui';
import Image from 'next/future/image';
import React, { FC, useState } from 'react';
import { XD } from 'services/xD';

// import { useImage } from 'react-image';

export interface AvatarProps
  extends Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
  src?: string;
  size?: 'sm' | 'lg';
}

const Avatar: FC<AvatarProps> = ({
  src,
  className,
  size = 'lg',
  ...otherProps
}) => {
  // const image = useImage({ srcList: src || [], useSuspense: false });
  const [isLoading, isError] = useState();
  return (
    <div
      {...otherProps}
      className={XD(
        size === 'sm' ? 'w-6 h-6' : 'w-10 h-10',
        'relative inline-block overflow-hidden rounded-full ',
        className
      )}
    >
      {src && (
        <Image
          className="object-cover w-full h-full rounded-full"
          src={src}
          alt={''}
          width={40}
          height={40}
        />
      )}

      {isLoading && <div className="absolute inset-0"></div>}
    </div>
  );
};

export default Avatar;

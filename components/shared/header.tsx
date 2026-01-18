import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        'relative w-full h-screen max-h-[80vh] min-h-[500px] overflow-hidden',
        className,
      )}>
      <div className="absolute inset-0">
        <Image
          src={'/header.jpg'}
          alt="Header Background"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
          style={{
            filter: 'brightness(0.95) contrast(1.05)',
          }}
        />
      </div>

      {/* Еле заметный градиент для глубины (опционально) */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" /> */}
    </div>
  );
};

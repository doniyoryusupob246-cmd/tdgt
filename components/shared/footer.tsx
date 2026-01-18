import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { navlink } from './nav-link';
import { Container } from './container';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('bg-[#0D3B4A] py-12', className)}>
      <Container>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">

          {/* Logo & Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="p-2 bg-white/5 rounded-full">
              <Image src={'/logo.png'} alt="TDGT Logo" width={100} height={100} className="w-[80px] h-[80px] drop-shadow-lg" />
            </div>
            <p className="w-full md:w-80 text-white/90 font-medium text-center md:text-left text-[15px] leading-relaxed">
              Bilecik Şeyh Edebalı Üniversitesi <br /> <span className="text-[#00ABC2] font-bold">Türk Dünyası Gençlik Topluluğu</span>
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 text-center md:text-left">
            {navlink.map((item) => (
              <Link
                key={item.text}
                href={item.link}
                className="text-gray-300 hover:text-[#00ABC2] text-[14px] font-medium transition-colors hover:translate-x-1"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

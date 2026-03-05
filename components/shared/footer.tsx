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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 text-center md:text-left text-[14px] font-medium text-gray-300">
            {navlink.map((item) => (
              <React.Fragment key={item.text}>
                {item.dropdown ? (
                  // For a dropdown item, we could list its sub-items in the footer
                  // or just render them flat alongside other top-level links.
                  // Here we render them flat.
                  item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.text}
                      href={subItem.link}
                      className="hover:text-[#00ABC2] transition-colors hover:translate-x-1"
                    >
                      {subItem.text}
                    </Link>
                  ))
                ) : (
                  <Link
                    href={item.link!}
                    className="hover:text-[#00ABC2] transition-colors hover:translate-x-1"
                  >
                    {item.text}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

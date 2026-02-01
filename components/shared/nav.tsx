'use client';

import React, { useState } from 'react';
import { Container } from './container';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { NavLink, navlink } from './nav-link';
import { Menu, X } from 'lucide-react';

interface Props {
  className?: string;
}

const socialLink = [
  { link: 'https://www.instagram.com/bilecik_tdgk/', img: '/social/instagram.svg' },
  {
    link: 'https://www.pinterest.com/tdgtbseu/?invite_code=2d976c45224d48818ad1617f6bd7d5ae&sender=1140677549278689770',
    img: '/social/pinterest.svg',
  },
  { link: 'https://x.com/tdgt_bseu?t=Ft6kbUzws2aLIIMtp9RNiQ&s=09', img: '/social/x.svg' },
  {
    link: 'https://www.linkedin.com/in/t%C3%BCrk-d%C3%BCnyasi-gen%C3%A7lik-toplulu%C4%9Fu-bilecik-37b804379/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    img: '/social/linkedin.svg',
  },
  { link: 'https://www.youtube.com/@tdgkbilecik', img: '/social/youtube.svg' },
  {
    link: 'https://www.tiktok.com/@tdgt_bseu?is_from_webapp=1&sender_device=pc',
    img: '/social/tiktok.svg',
  },
];

export const Nav: React.FC<Props> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn('pt-3 relative', className)}>
      <Container>
        <div className="flex items-center justify-between ">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={'/logo.png'}
              alt="Logo"
              width={100}
              height={100}
              className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]"
            />
            <p className="w-38 leading-4.5 font-bold text-[14px] sm:text-[16px] uppercase">
              Türk Dünyası Gençlik Topluluğu
            </p>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* Desktop Socials */}
          <div className="hidden md:flex w-80 h-25 bg-[#00ABC2] clip-trapezoid items-center justify-center">
            <div className="flex gap-2">
              {socialLink.map((social, i) => (
                <Link key={i} href={social.link}>
                  <Image src={social.img} alt="Social Logo" width={20} height={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Desktop Sub-Nav */}
      <div className="bg-[#00ABC2] mt-4 hidden md:block">
        <Container>
          <NavLink />
        </Container>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white z-50 border-t md:hidden shadow-lg animate-in fade-in slide-in-from-top-5">
          <Container>
            <div className="flex flex-col py-6 gap-6 overflow-y-auto max-h-[85vh]">
              {/* Main Navigation */}
              <div className="flex flex-col gap-2">
                {navlink.map((nav) => (
                  <Link
                    key={nav.text}
                    href={nav.link}
                    className="text-[18px] font-bold uppercase text-black py-2 border-b border-gray-100 last:border-0 hover:text-[#00ABC2] transition-colors"
                    onClick={() => setIsOpen(false)}>
                    {nav.text}
                  </Link>
                ))}
              </div>

              {/* Socials */}
              <div className="flex gap-4 mt-auto pt-4 border-t border-gray-200 flex-wrap justify-center">
                {socialLink.map((social, i) => (
                  <Link key={i} href={social.link} className="hover:scale-110 transition-transform">
                    {/* Ensure icon visibility on white background if they are white by default, using styling or distinct specific colored icons if available. 
                         Assuming social icons are white, we keep the invert if needed, or remove it if they are colored. 
                         The user's original code had 'className="invert"'. I will keep it but ensure it's correct. 
                         Actually, usually distinct colored icons are better for mobile menu. 
                         Let's assume invert is needed for white icons on white bg. */}
                    <Image
                      src={social.img}
                      alt="Social Logo"
                      width={28}
                      height={28}
                      className="invert opacity-80 hover:opacity-100"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

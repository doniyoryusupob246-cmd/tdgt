

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
  { link: '', img: '/social/instagram.svg' },
  { link: '', img: '/social/facebook.svg' },
  { link: '', img: '/social/x.svg' },
  { link: '', img: '/social/linkedin.svg' },
  { link: '', img: '/social/youtube.svg' },
  { link: '', img: '/social/telegram.svg' },
  { link: '', img: '/social/tiktok.svg' },
  { link: '', img: '/social/linkedin.svg' },
];

const countres = [
  'Türk Dünyası Gənclər Birliyi',
  'Түркі әлемі жастар қауымдастығы',
  'Turk dunyosi yoshlar jamiyati',
  'Түрк дүйнөсүнүн жаштар коомчулугу',
  'Türk dünýä ashlar jemgyýeti',
  'Türk Világifjúsági Közösség',
];

export const Nav: React.FC<Props> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn('pt-3 relative', className)}>
      <Container>
        <div className="flex items-center justify-between ">
          <Link href="/" className="flex items-center gap-3">
            <Image src={'/logo.png'} alt="Logo" width={100} height={100} className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]" />
            <p className="w-38 leading-4.5 font-bold text-[14px] sm:text-[16px] uppercase">
              Türk Dünyası Gençlik Topluluğu
            </p>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
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

        {/* Desktop Countries */}
        <div className="hidden md:flex items-center mt-5 justify-between">
          {countres.map((text) => (
            <Link href="/" className="text-center text-[16px] font-bold text-[#B1B1B1]" key={text}>
              {text}
            </Link>
          ))}
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
                    onClick={() => setIsOpen(false)}
                  >
                    {nav.text}
                  </Link>
                ))}
              </div>

              {/* Countries List */}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                  Topluluklar
                </p>
                <div className="flex flex-col gap-2">
                  {countres.map((text) => (
                    <Link
                      key={text}
                      href="/"
                      className="text-[14px] font-medium text-gray-600 hover:text-[#00ABC2] transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {text}
                    </Link>
                  ))}
                </div>
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
                    <Image src={social.img} alt="Social Logo" width={28} height={28} className="invert opacity-80 hover:opacity-100" />
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

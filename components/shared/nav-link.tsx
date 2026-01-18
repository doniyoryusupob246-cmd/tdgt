import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
}
export const navlink = [
  { text: 'Ana Sayfa', link: '/' },
  { text: 'Hakkımızda', link: '/hakkimizda' },
  { text: 'Etkinliklerimiz', link: '#!' },
  { text: 'Projelerimiz', link: '#!' },
  { text: 'Sertifikalar', link: '/sertifikalar' },
  { text: 'Dergimiz', link: '#!' },
  { text: 'Temsilcilerimiz', link: '/temsilcilerimiz' },
];

export const NavLink: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex items-center justify-center h-20">
      {navlink.map((nav, index) => (
        <Link
          key={nav.text}
          href={nav.link}
          className={`
        text-[15px] font-bold uppercase text-white px-4 hover:text-[#cacaca]  transition-colors
        ${index !== navlink.length - 1 ? 'border-r border-white/40' : ''}
      `}>
          {nav.text}
        </Link>
      ))}
    </div>
  );
};

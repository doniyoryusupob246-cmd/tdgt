import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
}
export const navlink = [
  { text: 'ANA SAYFA', link: '/' },
  { text: 'HAKKIMIZDA', link: '/hakkimizda' },
  { text: 'ETKINLIKLERİMİZ', link: '/etkinliklerimiz' },
  { text: 'PROJELERİMİZ', link: '/projelerimiz' },
  { text: 'SERTİFİKALAR', link: '/devolepment' },
  { text: 'DERGİMİZ', link: '/devolepment' },
  { text: 'TEMSİLCİLERİMİZ', link: '/temsilcilerimiz' },
];

export const NavLink: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex items-center justify-center h-20">
      {navlink.map((nav, index) => (
        <Link
          key={nav.text}
          href={nav.link}
          className={`
        text-[15px] font-bold text-white px-4 hover:text-[#cacaca]  transition-colors
        ${index !== navlink.length - 1 ? 'border-r border-white/40' : ''}
      `}>
          {nav.text}
        </Link>
      ))}
    </div>
  );
};

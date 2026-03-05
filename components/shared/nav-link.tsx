import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
}
export const navlink = [
  { text: 'ANA SAYFA', link: '/' },
  {
    text: 'RESMİ',
    dropdown: [
      { text: 'HAKKIMIZDA', link: '/hakkimizda' },
      { text: 'ÜNİVERSİTE BAŞKANLARI', link: '/temsilcilerimiz' }
    ]
  },
  { text: 'ETKİNLİKLERİMİZ', link: '/etkinliklerimiz' },
  { text: 'PROJELERİMİZ', link: '/projelerimiz' },
  { text: 'GÜNDEM', link: '/gundem' },
  { text: 'SERTİFİKALAR', link: '/devolepment' },
];

export const NavLink: React.FC<Props> = ({ className }) => {
  return (
    <div className={`flex items-center justify-center h-20 ${className || ''}`}>
      {navlink.map((nav, index) => (
        <div key={nav.text} className="relative group flex items-center h-full">
          {nav.dropdown ? (
            <div className={`
              text-[15px] font-bold text-white px-4 cursor-pointer hover:text-[#cacaca] transition-colors h-full flex items-center
              ${index !== navlink.length - 1 ? 'border-r border-white/40' : ''}
            `}>
              {nav.text}
              {/* Dropdown Menu */}
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-56 bg-white rounded-xl shadow-xl flex flex-col py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform group-hover:translate-y-0 translate-y-2">
                {/* Invisible hover bridge to prevent menu from closing when moving mouse */}
                <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />

                {nav.dropdown.map((subItem) => (
                  <Link
                    key={subItem.text}
                    href={subItem.link}
                    className="px-5 py-3 text-[14px] font-bold text-gray-800 hover:text-blue-600 hover:bg-blue-50/50 transition-colors text-center w-full"
                  >
                    {subItem.text}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              href={nav.link!}
              className={`
                text-[15px] font-bold text-white px-4 hover:text-[#cacaca] transition-colors
                ${index !== navlink.length - 1 ? 'border-r border-white/40' : ''}
              `}
            >
              {nav.text}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

import React from 'react';
import { Container } from './container';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const Works: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('my-20 md:my-32', className)}>
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          <div className="w-full md:w-[55%] space-y-8 order-2 md:order-1">
            <h2 className="font-extrabold text-[28px] md:text-[36px] bg-gradient-to-r from-blue-700 to-[#00ABC2] bg-clip-text text-transparent leading-tight text-center md:text-left">
              Türk Dünyası gençliğine mesajımız
            </h2>

            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ABC2]/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-110"></div>

              <div className="relative z-10 space-y-6 text-gray-700 leading-relaxed font-medium">
                <p className="text-[15px] md:text-[16px]">
                  Türk Dünyası’nın tarih sahnesindeki yürüyüşü, yalnızca geçmişin hatıralarından
                  ibaret değildir; aynı zamanda bugünün ve yarının gençliğine yol gösteren güçlü bir
                  birikimdir.
                  <span className="text-black font-semibold">
                    Orta Asya bozkırlarından Anadolu’ya, Balkanlar’dan Kafkasya’ya
                  </span>
                  uzanan bu tarih; ilimle, adaletle ve güçlü bir toplumsal dayanışma anlayışıyla
                  şekillenmiştir.
                </p>

                <p className="text-[15px] md:text-[16px]">
                  Bu miras, korunması gereken bir değer ve geliştirilmesi gereken bir sorumluluktur.
                  Bugünün gençliği; bilimde, teknolojide ve sanatta güçlü olmalı; köklerinden
                  kopmadan, tarihini bilen ve
                  <span className="text-black font-semibold">ortak gelecek bilinciyle</span> hareket
                  eden bir anlayışla yükselmelidir.
                </p>

                <div className="p-4 bg-blue-50/50 rounded-xl border-l-4 border-[#00ABC2] italic text-gray-600 text-[15px]">
                  İnanıyoruz ki; tarihini bilen, bilimi rehber edinen ve kardeşlik şuuruyla hareket
                  eden Türk Dünyası gençliği, geleceğin güçlü yarınlarını inşa edecektir.
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:max-w-[40%] order-1 md:order-2 relative group">
            {/* Decorative blob/gradient behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-[#00ABC2] to-purple-400 rounded-full blur-[40px] opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>

            <Image
              className="w-full h-auto rounded-[2.5rem] relative z-10 transform transition-transform duration-500 hover:rotate-2 hover:scale-[1.02]"
              src={'/work.png'}
              alt="Türk Dünyası"
              width={500}
              height={600}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

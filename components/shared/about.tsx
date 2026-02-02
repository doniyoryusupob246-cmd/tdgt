import React from 'react';
import { Container } from './container';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const About: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('my-25', className)}>
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-around gap-10 md:gap-0">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00ABC2] to-blue-400 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src='/about1.png'
              alt="About Us"
              width={400}
              height={350}
              className="relative w-full max-w-[400px] h-auto rounded-[2rem] shadow-xl transform transition duration-500 hover:scale-[1.02]"
            />
          </div>

          <div className="w-full md:w-auto flex flex-col items-center md:block space-y-6">
            <h2 className="text-[28px] md:text-[32px] font-extrabold mb-6 text-center md:text-left bg-gradient-to-r from-[#00ABC2] to-blue-600 bg-clip-text text-transparent">
              Topluluğumuz
            </h2>

            <div className="w-full md:w-125 p-6 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,171,194,0.15)] border border-gray-50 transition-all duration-300 hover:-translate-y-1">
              <p className="text-[15px] font-medium leading-relaxed text-gray-700">
                Diriliş, Kuruluş ve Kurtuluş’un Şehri{' '}
                <span className="text-black font-bold">Bilecik’te</span> Türk Dünyası’nın birliği
                için çalışmalarımıza tüm kararlığımızla devam ediyoruz.
              </p>
              <p className="text-[14px] mt-4 italic text-gray-500 font-medium">
                Gelecek Gençliğin omuzlarında yükselecek. <br /> Güçlü gençlik, Güçlü yarınlar...
              </p>
            </div>

            <div className="w-full md:w-125 p-6 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,171,194,0.15)] border border-gray-50 transition-all duration-300 hover:-translate-y-1">
              <p className="text-[15px] font-medium leading-relaxed text-gray-700">
                Geçmişin tecrübelerini bugünün aklıyla harmanlayan, farklı coğrafyalardaki Türk
                gençleri arasında gönül köprüleri kuran ve bu birlikteliği kalıcı hâle getirmeyi
                hedefleyen bir anlayışı benimsiyoruz.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

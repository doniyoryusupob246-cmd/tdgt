'use client';
import { Container } from '@/components/shared/container';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import { Navigation } from 'swiper/modules';
const imageSlider = ['/owner.jpg', '/arda.jpg', '/umut-arda-yilmaz.jpg'];
export default function OwnerHome() {
  return (
    <>
      <Container>
        <h2 className="text-[24px] md:text-[32px] max-w-4xl w-full mx-auto text-center font-bold mt-12 mb-8 leading-tight px-4">
          Bilecik Şeyh Edebali Üniversitesinde Türk Dünyası Gençlik Topluluğu’nun yönetim kurulu
          başkanlığını yürüten isimler
        </h2>

        <div className="w-1/2 md:w-[400px] h-[2px] mx-auto bg-[#989898]/50 mb-8 md:mb-[50px]"></div>

        <div className="relative max-w-4xl mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {/* LEFT ARROW - Hidden on mobile or positioned differently? Let's make them visible but properly sized */}
            <button className="hidden md:block cursor-pointer swiper-prev text-4xl font-bold select-none text-gray-400 hover:text-[#00ABC2] transition-colors p-2">
              ←
            </button>

            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: '.swiper-prev',
                nextEl: '.swiper-next',
              }}
              slidesPerView={1}
              spaceBetween={30}
              className="w-full rounded-2xl overflow-hidden pb-8" // pb-8 for potential spacing
            >
              {imageSlider.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="flex flex-col items-center gap-6 pb-4">
                    <div className="relative w-full aspect-[4/5] md:w-[400px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                      <Image src={img} alt="Owner" fill className="object-cover" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* RIGHT ARROW */}
            <button className="hidden md:block cursor-pointer swiper-next text-4xl font-bold select-none text-gray-400 hover:text-[#00ABC2] transition-colors p-2">
              →
            </button>
          </div>
          <div className="text-center space-y-2 mb-5">
            <h2 className="font-bold text-[24px] md:text-[30px] text-gray-800">Umut Arda YILMAZ</h2>
            <p className="text-[16px] md:text-[20px] text-[#00ABC2] font-medium">
              Kurucu Onursal Başkan
            </p>
            <p className="text-[16px] md:text-[20px] font-bold text-gray-500">2024 - ∞</p>
          </div>

          {/* Mobile Navigation Controls (Below slider) */}
          <div className="flex md:hidden justify-center gap-12 mt-4 text-3xl font-bold text-gray-400 mb-10">
            <button className="cursor-pointer swiper-prev hover:text-[#00ABC2]">←</button>
            <button className="cursor-pointer swiper-next hover:text-[#00ABC2]">→</button>
          </div>
        </div>
      </Container>
    </>
  );
}

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface EtkinlikSliderProps {
    images: string[];
}

export const EtkinlikSlider = ({ images }: EtkinlikSliderProps) => {
    return (
        <div className="w-full h-[450px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl mb-10 relative group">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="w-full h-full"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="relative w-full h-full">
                        <Image
                            src={image}
                            alt={`Event image ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

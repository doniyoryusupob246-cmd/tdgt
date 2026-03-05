'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface EtkinlikGalleryProps {
    images: string[];
}

export const EtkinlikGallery = ({ images }: EtkinlikGalleryProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setSelectedIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
        document.body.style.overflow = 'auto';
    };

    const showNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % images.length);
        }
    };

    const showPrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
        }
    };

    if (!images || images.length === 0) {
        return (
            <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
                <p className="text-gray-500">Görsel bulunamadı</p>
            </div>
        );
    }

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className="group relative w-full h-[150px] sm:h-[200px] lg:h-[300px] rounded-[16px] md:rounded-[24px] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
                        onClick={() => openLightbox(idx)}
                    >
                        <Image
                            src={img}
                            alt={`Event image ${idx + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                        {/* Click hint overlay on hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="bg-white/90 text-gray-900 px-6 py-3 rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                Büyütmek için tıklayın
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-2 md:p-8 opacity-100 transition-opacity duration-300"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors z-[110] bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full backdrop-blur-md"
                        onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                    >
                        <X className="w-6 h-6 md:w-8 md:h-8" />
                    </button>

                    {images.length > 1 && (
                        <>
                            {/* Prev Button */}
                            <button
                                className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-[110] bg-white/10 hover:bg-white/20 p-2 md:p-4 rounded-full backdrop-blur-md"
                                onClick={showPrev}
                            >
                                <ChevronLeft className="w-6 h-6 md:w-10 md:h-10" />
                            </button>
                            {/* Next Button */}
                            <button
                                className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-[110] bg-white/10 hover:bg-white/20 p-2 md:p-4 rounded-full backdrop-blur-md"
                                onClick={showNext}
                            >
                                <ChevronRight className="w-6 h-6 md:w-10 md:h-10" />
                            </button>
                        </>
                    )}

                    {/* Main Image Container */}
                    <div
                        className="relative w-full max-w-7xl h-[85vh] md:h-[90vh] flex items-center justify-center px-12 md:px-24"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={images[selectedIndex]}
                                alt={`Enlarged image ${selectedIndex + 1}`}
                                fill
                                className="object-contain"
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>

                    {/* Image Counter */}
                    {images.length > 1 && (
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/90 tracking-widest font-medium bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-sm">
                            {selectedIndex + 1} / {images.length}
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

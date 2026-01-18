import { Container } from '@/components/shared/container';
import Image from "next/image";

export default function Sertifikalar() {
    return (
        <div className="bg-gray-50 min-h-[calc(100vh-80px)] py-12 md:py-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00ABC2]/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

            <Container className="relative z-10">
                {/* Header */}
                <h1 className="text-center font-extrabold text-[32px] md:text-[48px] leading-tight mb-16 bg-gradient-to-r from-blue-800 to-[#00ABC2] bg-clip-text text-transparent">
                    Sertifikalarımız ve Başarılarımız
                </h1>

                {/* Content */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 bg-white rounded-[3rem] p-6 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="absolute inset-0 bg-black/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                            {/* Optional overlay text or icon could go here */}
                        </div>
                        <Image
                            src="/sertificate.jpg"
                            alt="Sertifikalar"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover rounded-3xl shadow-lg transform transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                            Başarı yolculuğumuzun <span className="text-[#00ABC2]">kanıtları</span>
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                        </p>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                            It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}
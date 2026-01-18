import { QrCode } from "lucide-react";
import Image from "next/image";
interface Props {
    className?: string;
}
export const Card: React.FC<Props> = ({ className }) => {
    return (
        <div className="bg-gray-50 min-h-[calc(100vh-80px)] flex items-center justify-center py-10 px-4">
            {/* Card Container */}
            <div className="relative w-full max-w-[800px] bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 md:p-12 border border-gray-100 overflow-hidden">

                {/* Background Watermark */}
                <div className="absolute inset-0 flex items-center justify-center  pointer-events-none">
                    <Image src="/logo-card.png" alt="" width={500} height={500} className="w-[20%] h-auto object-contain" />
                </div>

                {/* Header */}
                <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-10 z-10">
                    <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-[#0D3B4A] rounded-full flex items-center justify-center p-1 shadow-lg">
                        {/* Using the logo image, assuming it has the circular design nicely */}
                        <Image src="/logo.png" alt="Logo" width={120} height={120} className="w-full h-full object-contain" />
                    </div>

                    <h1 className="text-2xl md:text-3xl font-extrabold text-[#0D3B4A] text-center md:text-left tracking-wide uppercase leading-tight">
                        Türk Dünyası <br className="hidden md:block" /> Gençlik Topluluğu
                    </h1>
                </div>

                {/* Content Body */}
                <div className="relative z-10 text-center mb-12">
                    <p className="text-gray-600 text-[15px] md:text-[18px] font-medium leading-relaxed max-w-2xl mx-auto">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>

                {/* Footer Info & QR */}
                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-8 md:gap-0">

                    {/* User Details */}
                    <div className="space-y-3 text-center md:text-left">
                        <div className="flex flex-col md:block">
                            <span className="text-lg md:text-xl font-bold text-gray-900">Ad Soyad: </span>
                            <span className="text-lg md:text-xl text-gray-700 font-medium">Doni Yusupov</span>
                        </div>
                        <div className="flex flex-col md:block">
                            <span className="text-lg md:text-xl font-bold text-gray-900">Kimlik No: </span>
                            <span className="text-lg md:text-xl text-gray-700 font-medium" >98777666999</span>
                        </div>
                        <div className="flex flex-col md:block">
                            <span className="text-lg md:text-xl font-bold text-gray-900">ID: </span>
                            <span className="text-lg md:text-xl text-gray-700 font-medium">98777666999</span>
                        </div>
                    </div>

                    {/* QR Code */}
                    <div className="bg-white p-2 rounded-xl border border-gray-200 shadow-sm">
                        {/* Simulating a QR code with an icon for now, ideally this is a generated image */}
                        <QrCode size={100} className="text-black" strokeWidth={1.5} />
                    </div>

                </div>

            </div>
        </div>
    );
};
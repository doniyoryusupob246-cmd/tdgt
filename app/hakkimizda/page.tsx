import { Container } from '@/components/shared/container';
import Image from 'next/image';

const items = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: '/hakkimizda/1.png',
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: '/hakkimizda/2.jpg',
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: '/hakkimizda/3.jpg',
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: '/hakkimizda/4.jpg',
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: '/hakkimizda/5.jpg',
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: '/hakkimizda/6.jpg',
  },
];

export default function AboutPage() {
  return (
    <>
      <Container>
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto mt-8 md:mt-20 mb-12">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group">
            <Image className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105" src={'/hakkimizda.png'} alt="Hakkımızda" width={900} height={700} />

          </div>
        </div>

        {/* Main Heading */}
        <h2 className="w-full max-w-3xl font-extrabold text-center mx-auto text-[28px] md:text-[40px] leading-tight mb-16 md:mb-24 bg-gradient-to-r from-blue-800 to-[#00ABC2] bg-clip-text text-transparent px-4">
          Bilecik Şeyh Edebali Üniversitesi <br className="hidden md:block" /> Türk Dünyası Gençlik Topluluğu
        </h2>

        {/* Content Grid */}
        <div className="max-w-6xl mx-auto px-4 pb-24 space-y-20 md:space-y-32">
          {items.map((item, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div key={index} className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center group`}>
                {/* Image */}
                <div className={`w-full md:w-1/2 ${isReverse ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    <div className="absolute inset-0 bg-[#00ABC2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"></div>
                    <Image
                      width={500}
                      height={400}
                      src={item.img}
                      alt="Story image"
                      className="w-full h-auto object-cover aspect-[4/3]"
                    />
                  </div>
                </div>

                {/* Text */}
                <div
                  className={`w-full md:w-1/2 ${isReverse ? 'md:order-1' : 'md:order-2'
                    } space-y-4 text-center md:text-left`}>

                  {/* Decorative line/number if needed, keeping it simple for now */}
                  <h3 className="text-xl font-bold text-gray-800 flex items-center justify-center md:justify-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#00ABC2]/10 text-[#00ABC2] flex items-center justify-center text-sm font-bold border border-[#00ABC2]/20">
                      {index + 1}
                    </span>
                    <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Bölüm Başlığı</span>
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-[15px] md:text-[16px] font-medium p-4 bg-white rounded-2xl border border-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}

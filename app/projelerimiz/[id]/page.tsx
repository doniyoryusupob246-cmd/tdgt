import { Container } from '@/components/shared/container';
import { items } from '@/lib/projeler';
import { EtkinlikGallery } from '@/components/shared/etkinlik-gallery';
import { CalendarDays } from 'lucide-react';
import { InstagramScript } from '@/components/shared/instagram-script';

interface ProjelerPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjePage({ params }: ProjelerPageProps) {
  const { id } = await params;
  const item = items.find((x) => x.id === id);

  if (!item) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Proje bulunamadı</h1>
      </Container>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 md:py-20">
      <Container>
        <div className="max-w-5xl mx-auto bg-white rounded-[32px] shadow-xl overflow-hidden p-6 md:p-10">
          {/* Header Section */}
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight tracking-tight">
              {item.title}
            </h1>
            <div className="flex items-center justify-center md:justify-start gap-2 text-blue-600 font-medium text-lg">
              <CalendarDays className="w-5 h-5" />
              <span>{item.date}</span>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mb-10">
            {item.images && item.images.length > 0 ? (
              <EtkinlikGallery images={item.images} />
            ) : (
              <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
                <p className="text-gray-500">Görsel bulunamadı</p>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed md:text-lg">
            <p>{item.subtitle}</p>
          </div>

          <div className="mt-16 md:mt-24">
            <div className="text-center md:text-left mb-10 flex flex-col md:items-start items-center">
              <h2 className='text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 bg-gradient-to-r from-blue-700 to-[#00ABC2] bg-clip-text text-transparent pb-1'>
                Videolarımız
              </h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-blue-600 to-[#00ABC2] rounded-full" />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center relative z-10 -ml-10'>
              {item.instagram.map((item, index) => (
                <div key={index} className="w-full max-w-[276px] group transition-transform duration-500 hover:-translate-y-2">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={item}
                    data-instgrm-version="14"
                    style={{ background: '#FFF', border: '0', borderRadius: '24px', margin: '0 auto', maxWidth: '276px', minWidth: '276px', padding: '0', width: '100%', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  ></blockquote>
                </div>
              ))}
            </div>

            <InstagramScript />
          </div>
        </div>
      </Container>
    </div>
  );
}

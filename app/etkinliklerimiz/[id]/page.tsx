import { Container } from '@/components/shared/container';
import { items } from '@/lib/etkinlik';
import { EtkinlikSlider } from '@/components/shared/etkinlik-slider';
import { CalendarDays } from 'lucide-react';

interface EtkinlikPageProps {
  params: Promise<{ id: string }>;
}

export default async function EtkinlikPage({ params }: EtkinlikPageProps) {
  const { id } = await params;
  const item = items.find((x) => x.id === id);

  if (!item) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Etkinlik bulunamadı</h1>
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

          {/* Slider Section */}
          <div className="mb-10">
            {item.images && item.images.length > 0 ? (
              <EtkinlikSlider images={item.images} />
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
        </div>
      </Container>
    </div>
  );
}

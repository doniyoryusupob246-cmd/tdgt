import { Container } from '@/components/shared/container';
import Image from 'next/image';

const items = [
  {
    text: "Bilecik Şeyh Edebali Üniversitesi Türk Dünyası Gençlik Topluluğu, 2024 yılı Ekim–Kasım döneminde, üniversitemiz bünyesinde faaliyet göstermek üzere kurulmuştur. Kurulduğu günden bu yana, Türk Dünyası’nın ortak tarihini, kültürünü, dilini ve değerlerini merkeze alan bir anlayışla çalışmalarını sürdüren topluluğumuz; akademik, kültürel, sosyal ve entelektüel alanlarda nitelikli faaliyetler üretmeyi hedeflemektedir.",
    img: '/hakkimizda/1.png',
  },
  {
    text: "Topluluğumuz, Türk Devletleri Teşkilatı’nın gençlik vizyonu doğrultusunda hareket eden bir gençlik platformu olmanın sorumluluğuyla; Türk Dünyası Gençlik Konseyi bünyesinde faaliyet göstermektedir. Bu çerçevede amacımız, üniversite gençliğini Türk Dünyası perspektifiyle buluşturmak, ortak bir hafıza ve gelecek tasavvuru etrafında bilinçli, üretken ve dayanışmacı bir gençlik zemini oluşturmaktır.",
    img: '/hakkimizda/2.jpg',
  },
  {
    text: "Bilecik Şeyh Edebali Üniversitesi Türk Dünyası Gençlik Topluluğu olarak, Türk Dünyası’nı yalnızca tarihsel bir alan olarak değil; yaşayan, dönüşen ve geleceğe yön veren dinamik bir medeniyet havzası olarak ele alıyoruz. Anadolu’dan Orta Asya’ya, Balkanlar’dan Kafkasya’ya uzanan geniş coğrafyada ortak kültürel kodlara, benzer toplumsal tecrübelere ve paylaşılan ideallere sahip olduğumuza inanıyoruz. Bu inanç doğrultusunda, gençler arasında kültürel bağları güçlendirmeyi, akademik iş birliklerini teşvik etmeyi ve ortak projeler geliştirmeyi önemsiyoruz.",
    img: '/hakkimizda/3.jpg',
  },
  {
    text: "Topluluğumuz bünyesinde; konferanslar, paneller, seminerler, söyleşiler, okuma grupları, atölye çalışmaları, kültürel geziler, sportif faaliyetler ve sosyal etkinlikler düzenlenmektedir. Türk tarihi, Türk dili ve lehçeleri, uluslararası ilişkiler, diaspora çalışmaları, kültürel diplomasi, gençlik politikaları ve çağdaş Türk Dünyası meseleleri gibi birçok alanda farkındalık oluşturmayı amaçlayan faaliyetler hayata geçirilmektedir. Ayrıca farklı üniversitelerden ve ülkelerden gençlerle iletişim ve iş birliği kurarak, uluslararası gençlik ağlarının bir parçası olmayı hedefliyoruz.",
    img: '/hakkimizda/4.jpg',
  },
  {
    text: "Vizyonumuz; Türk Dünyası’nı doğru anlayan, çağın gereklerine hâkim, eleştirel düşünebilen, kültürel kökleriyle barışık ve küresel ölçekte söz söyleyebilen bir gençlik yetişmesine katkı sunmaktır. Üniversitemiz bünyesinde başlayan bu yolculuğun, ulusal ve uluslararası düzeyde etkili projeler üreten, örnek bir gençlik hareketine dönüşmesini hedefliyoruz.",
    img: '/hakkimizda/5.jpg',
  },
  {
    text: "Misyonumuz ise; Türk Dünyası gençleri arasında düşünsel ve kültürel etkileşimi artırmak, ortak değerler etrafında birlik bilinci geliştirmek ve gençlerin akademik, sosyal ve kişisel gelişimlerine katkı sağlayacak sürdürülebilir çalışmalar yürütmektir. Bu misyon doğrultusunda, kapsayıcı, katılımcı ve üretken bir topluluk yapısını esas alıyor; her öğrencinin fikirlerini özgürce ifade edebildiği, kendini geliştirebildiği bir ortam oluşturmayı önemsiyoruz.",
    img: '/hakkimizda/6.jpg',
  },
  {
    text: "Bilecik Şeyh Edebali Üniversitesi Türk Dünyası Gençlik Topluluğu, geçmişten aldığı ilhamı geleceğe taşıyan bir anlayışla; ortak hafızayı pekiştirmeyi, gençler arasında güçlü bağlar kurmayı ve Türk Dünyası’nın yarınlarına katkı sunmayı amaçlamaktadır. Bu yolda, üniversitemiz başta olmak üzere tüm paydaşlarımızla iş birliği içinde çalışmaya devam ediyor; Türk Dünyası’nın ortak sesi ve vicdanı olma sorumluluğunu gençliğin enerjisiyle taşımayı sürdürüyoruz.",
    img: '/hakkimizda/7.jpg',
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

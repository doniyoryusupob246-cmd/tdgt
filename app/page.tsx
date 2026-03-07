import { About } from '@/components/shared/about';
import { Works } from '@/components/shared/works';
import { Iletisim } from '@/components/shared/iletisim';
import Link from 'next/link';
import { Libre_Baskerville } from 'next/font/google';

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <div className='flex justify-center flex-col mt-10 shadow-lg w-[90%] max-w-[500px] mx-auto items-center p-5 bg-[#00ABC2] text-white rounded-xl'>
        <div className='flex flex-col items-center'>
          <h2 className={` text-3xl md:text-4xl font-bold text-center mb-3`}>Türk Dünyası Gençlik Topluluğu</h2>
          <p className={`${libreBaskerville.className} text-[15px] md:text-lg text-white leading-relaxed max-w-2xl px-2 md:px-4 text-center`}>Türk Dünyası Gençliğinin bir araya <br /> geldiği yer</p>
        </div>
        <Link className='font-mono font-bold w-[90%] sm:w-[300px] text-center mx-auto mt-5 bg-white text-black px-4 py-3 sm:py-2 rounded-xl' href="https://forms.gle/FxtvTTz9XEbHPnAE6">Şimdi Üyemiz Olun</Link>
      </div>
      <About />
      <Works />
      <Iletisim />
    </>
  );
}

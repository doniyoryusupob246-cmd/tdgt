import { Container } from '@/components/shared/container';
import { items } from '@/lib/projeler';
import { SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjelerimizPage() {
    return (
        <>
            <Container className="py-12 md:py-20">
                <h2 className="mb-12 md:mb-20 font-extrabold text-4xl md:text-5xl bg-gradient-to-r from-blue-700 to-[#00ABC2] bg-clip-text text-transparent leading-tight text-center tracking-tight">
                    Projelerimiz
                </h2>
                <div className="flex flex-col gap-6 mb-20">
                    {items.map((item) => (
                        <Link
                            href={`/projelerimiz/${item.id}`}
                            key={item.id}
                            className="group flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 ease-in-out hover:-translate-y-1"
                        >
                            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center w-full">
                                <div className="shrink-0">
                                    <p className="text-center font-bold text-xl md:text-2xl text-[#000] bg-blue-50 px-6 py-4 rounded-xl  transition-colors duration-300">
                                        {item.date}
                                    </p>
                                </div>

                                <div className="relative overflow-hidden rounded-xl shrink-0 shadow-md">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        width={240}
                                        height={160}
                                        className="object-cover w-full h-auto md:w-[240px] md:h-[160px] transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div className="text-center md:text-left flex-1 min-w-0">
                                    <h2 className="font-bold text-xl md:text-2xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h2>
                                    <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl line-clamp-3">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>

                            <div className="hidden md:block">
                                <SquareArrowOutUpRight className="text-gray-300 w-8 h-8 group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </>
    );
}


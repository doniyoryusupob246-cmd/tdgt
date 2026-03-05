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
                    PROJELERİMİZ
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
                    {items.map((item) => (
                        <Link
                            href={`/projelerimiz/${item.id}`}
                            key={item.id}
                            className="group flex flex-col p-5 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 ease-in-out hover:-translate-y-1"
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-sm mb-5">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-56 transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <div className="flex-1 flex flex-col">
                                <p className="text-sm text-[#000] opacity-70 mb-2">
                                    {item.date}
                                </p>
                                <div className="flex justify-between items-start gap-3 mb-3">
                                    <h2 className="font-bold text-xl md:text-2xl text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                                        {item.title}
                                    </h2>
                                    <SquareArrowOutUpRight className="text-gray-300 w-6 h-6 shrink-0 mt-1 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                                </div>
                                <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                                    {item.subtitle}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </>
    );
}


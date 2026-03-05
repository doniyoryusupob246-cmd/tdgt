'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Container } from './container';
import { Loader2, Send } from 'lucide-react';
import { sendContactEmail } from '../../actions/sendEmail';
import { toast } from 'sonner';

const contactFormSchema = z.object({
    fullName: z.string().min(2, { message: 'Ad ve Soyad en az 2 karakter olmalıdır.' }),
    email: z.string().email({ message: 'Geçerli bir e-posta adresi giriniz.' }),
    subject: z.string().min(1, { message: 'Lütfen bir konu seçiniz.' }),
    message: z.string().min(10, { message: 'Mesajınız en az 10 karakter olmalıdır.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export const Iletisim = () => {
    const [isPending, setIsPending] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            fullName: '',
            email: '',
            subject: '',
            message: '',
        },
    });

    const onSubmit = async (data: ContactFormValues) => {
        setIsPending(true);
        try {
            const response = await sendContactEmail(data);
            if (response.success) {
                toast.success('Mesajınız başarıyla gönderildi!', {
                    description: 'Sizlere 24 saat içerisinde geri dönüş yapacağız.',
                });
                reset();
            } else {
                toast.error('Mesaj gönderilemedi.', {
                    description: 'Lütfen daha sonra tekrar deneyiniz.',
                });
            }
        } catch (error) {
            toast.error('Bir hata oluştu.', {
                description: 'Lütfen daha sonra tekrar deneyiniz.',
            });
        } finally {
            setIsPending(false);
        }
    };

    return (
        <section className="py-20 bg-gray-50/50">
            <Container>
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 bg-gradient-to-r from-blue-700 to-[#00ABC2] bg-clip-text text-transparent">
                            Bize Ulaşın
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-[#00ABC2] rounded-full mb-6" />
                        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl px-4">
                            Bizlere iletmek istediğiniz dilek, talep ve şikayetlerinizi buradan iletebilirsiniz.
                            Sizlere 24 saat içerisinde geri dönüş yapacağız.
                        </p>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-3xl shadow-xl shadow-blue-900/5 border border-gray-100 p-8 md:p-12">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Full Name */}
                                <div className="space-y-2">
                                    <label htmlFor="fullName" className="text-sm font-semibold text-gray-700">
                                        Adı ve Soyadı <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="fullName"
                                        type="text"
                                        {...register('fullName')}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#00ABC2]/20 focus:border-[#00ABC2] transition-colors outline-none"
                                        placeholder="Adınız Soyadınız"
                                    />
                                    {errors.fullName && (
                                        <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                                        E-posta Adresi <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        {...register('email')}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#00ABC2]/20 focus:border-[#00ABC2] transition-colors outline-none"
                                        placeholder="ornek@email.com"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Subject */}
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                                    Konu <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        id="subject"
                                        {...register('subject')}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#00ABC2]/20 focus:border-[#00ABC2] transition-colors outline-none appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled hidden>Lütfen bir konu seçiniz</option>
                                        <option value="Dilek">Dilek</option>
                                        <option value="Talep">Talep</option>
                                        <option value="Şikayet">Şikayet</option>
                                        <option value="Diğer">Diğer</option>
                                    </select>
                                    {/* Custom Arrow */}
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                                {errors.subject && (
                                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold text-gray-700">
                                    Mesajınız <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    {...register('message')}
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#00ABC2]/20 focus:border-[#00ABC2] transition-colors outline-none resize-none"
                                    placeholder="Mesajınızı buraya yazınız..."
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isPending}
                                className="w-full bg-gradient-to-r from-blue-600 to-[#00ABC2] hover:from-blue-700 hover:to-[#00ABC2] text-white font-bold text-lg py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isPending ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Gönderiliyor...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        Gönder
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
};

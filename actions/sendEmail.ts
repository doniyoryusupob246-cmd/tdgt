'use server';

import { Resend } from 'resend';

// Replace string with your actual Resend API Key or store it in your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY || 're_your_api_key_here');

export async function sendContactEmail(data: {
    fullName: string;
    email: string;
    subject: string;
    message: string;
}) {
    try {
        const { fullName, email, subject, message } = data;

        const { data: resendData, error } = await resend.emails.send({
            from: 'TDGT İletişim Formu <onboarding@resend.dev>', // You should use your domain here if verified on Resend
            to: ['usupovd276@gmail.com'],
            subject: `Yeni İletişim Mesajı: ${subject} - ${fullName}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-w-[600px] margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h2 style="color: #00ABC2; margin-bottom: 20px;">Yeni İletişim Formu Mesajı</h2>
            
            <p style="margin-bottom: 15px;"><strong>Gönderen:</strong> ${fullName}</p>
            <p style="margin-bottom: 15px;"><strong>E-posta:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin-bottom: 15px;"><strong>Konu:</strong> ${subject}</p>
            
            <hr style="border-top: 1px solid #eee; margin: 20px 0;"/>
            
            <h3 style="color: #333;">Mesaj İçeriği:</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; font-size: 16px; color: #555; white-space: pre-wrap;">
                ${message}
            </div>
            
            <br/>
            <p style="font-size: 12px; color: #999;">Bu mesaj <em>Türk Dünyası Gençlik Topluluğu</em> web sitesi iletişim formundan gönderilmiştir.</p>
        </div>
      `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return { success: false, error: error.message };
        }

        return { success: true, data: resendData };
    } catch (error) {
        console.error('Server Action Error:', error);
        return { success: false, error: 'Internal Server Error' };
    }
}

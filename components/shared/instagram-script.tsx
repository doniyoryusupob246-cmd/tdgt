'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export const InstagramScript = () => {
    useEffect(() => {
        // Re-initialize Instagram posts when component mounts (i.e. on client-side navigation)
        if (typeof window !== 'undefined' && (window as any).instgrm) {
            try {
                (window as any).instgrm.Embeds.process();
            } catch (e) {
                console.error('Failed to process Instagram embeds', e);
            }
        }
    }, []);

    return (
        <Script
            src="https://www.instagram.com/embed.js"
            strategy="lazyOnload"
            onLoad={() => {
                if (typeof window !== 'undefined' && (window as any).instgrm) {
                    try {
                        (window as any).instgrm.Embeds.process();
                    } catch (e) {
                        console.error('Failed to process Instagram embeds on load', e);
                    }
                }
            }}
        />
    );
};

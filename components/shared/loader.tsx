"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export const Loader = () => {
    const [showLoader, setShowLoader] = useState(true);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // Start fading out after 1.5 seconds
        const fadeTimer = setTimeout(() => {
            setIsFading(true);
        }, 1500);

        // Remove from DOM after fade animation is done
        const removeTimer = setTimeout(() => {
            setShowLoader(false);
        }, 2000);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!showLoader) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${isFading ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
        >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 ">
                <Image
                    src="/logo.png"
                    alt="TDGT Logo Loader"
                    fill
                    className="object-contain bg-white rounded-full p-2 sm:p-0 sm:bg-transparent"
                    priority
                />
            </div>
        </div>
    );
};

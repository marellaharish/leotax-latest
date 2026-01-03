"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ImagesSliderProps = {
    images: string[];
    children?: React.ReactNode;
    className?: string;
    autoplay?: boolean;
    interval?: number;
    overlay?: boolean;
    overlayClassName?: string;
};

export const ImagesSlider: React.FC<ImagesSliderProps> = ({
    images,
    children,
    className = "",
    autoplay = true,
    interval = 5000,
    overlay = true,
    overlayClassName = "bg-black/60",
}) => {
    const [active, setActive] = useState(0);

    const safeImages = useMemo(() => images.filter(Boolean), [images]);

    const next = React.useCallback(() => {
        setActive((p) => (p + 1) % safeImages.length);
    }, [safeImages.length]);

    const prev = React.useCallback(() => {
        setActive((p) => (p - 1 + safeImages.length) % safeImages.length);
    }, [safeImages.length]);

    useEffect(() => {
        if (!autoplay || safeImages.length <= 1) return;
        const id = setInterval(next, interval);
        return () => clearInterval(id);
    }, [autoplay, interval, next, safeImages.length]);

    if (!safeImages.length) return null;

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={active}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <img
                        src={safeImages[active]}
                        alt={`slide-${active}`}
                        className="h-full w-full object-cover"
                        draggable={false}
                    />
                </motion.div>
            </AnimatePresence>

            {overlay && <div className={`absolute inset-0 ${overlayClassName}`} />}

            {/* content layer */}
            <div className="relative z-10 h-full w-full">{children}</div>

            {/* touch targets: expose controls via custom events if needed */}
            <button
                type="button"
                onClick={prev}
                aria-label="Previous slide"
                className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-black/30 p-3 text-white backdrop-blur-md hover:bg-black/40 md:block"
            >
                ‹
            </button>

            <button
                type="button"
                onClick={next}
                aria-label="Next slide"
                className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-black/30 p-3 text-white backdrop-blur-md hover:bg-black/40 md:block"
            >
                ›
            </button>

            {/* dots */}
            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
                {safeImages.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => setActive(i)}
                        className={`h-2.5 w-2.5 rounded-full transition ${i === active ? "bg-white" : "bg-white/35 hover:bg-white/55"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

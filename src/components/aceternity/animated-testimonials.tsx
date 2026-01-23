"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";

export type TestimonialItem = {
    quote: string;
    name: string;
    designation: string;
    src: string;
    rating?: number; // optional (default 5)
};

export function AnimatedTestimonials({
    testimonials,
    className = "",
    autoPlay = true,
    intervalMs = 6500,
}: {
    testimonials: TestimonialItem[];
    className?: string;
    autoPlay?: boolean;
    intervalMs?: number;
}) {
    const [[active, direction], setActive] = React.useState<[number, number]>([0, 0]);

    const paginate = React.useCallback(
        (newDirection: number) => {
            setActive(([prev]) => {
                const next = (prev + newDirection + testimonials.length) % testimonials.length;
                return [next, newDirection];
            });
        },
        [testimonials.length]
    );

    // autoplay
    React.useEffect(() => {
        if (!autoPlay || testimonials.length <= 1) return;
        const t = window.setInterval(() => paginate(1), intervalMs);
        return () => window.clearInterval(t);
    }, [autoPlay, intervalMs, paginate, testimonials.length]);

    const item = testimonials[active];

    return (
        <div className={`relative mx-auto w-full ${className}`}>
            {/* OUTER "big light-gray container" like the screenshot */}
            <div className="rounded-3xl bg-slate-50 px-6 py-10 ring-1 ring-slate-100 md:px-10 md:py-12">


                {/* Main layout: left identity + right quote */}
                <div className="relative grid items-center gap-10   md:grid-cols-12">
                    {/* LEFT */}
                    <div className="md:col-span-4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`left-${active}`}
                                initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="h-28 w-28 overflow-hidden rounded-full bg-slate-200 ring-4 ring-white">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={item.src}
                                        alt={item.name}
                                        className="h-full w-full object-cover"
                                        draggable={false}
                                    />
                                </div>

                                <div className="mt-6 text-2xl font-extrabold text-slate-900 md:text-3xl">
                                    {item.name}
                                </div>

                                <div className="mt-2 max-w-[24ch] text-base font-medium leading-7 text-slate-700 md:text-lg">
                                    {item.designation}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* RIGHT */}
                    <div className="md:col-span-8">

                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={`right-${active}`}
                                custom={direction}
                                initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
                                transition={{ duration: 0.45, ease: "easeOut" }}
                                className="relative"
                            >
                                <div className="flex items-start gap-6">
                                    {/* quote mark block */}

                                    <div className="min-w-0">
                                        {/* stars */}
                                        <div className="flex items-center gap-2">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`h-6 w-6 ${i < (item.rating ?? 5)
                                                        ? "fill-indigo-600 text-indigo-600"
                                                        : "text-slate-200"
                                                        }`}
                                                />
                                            ))}
                                        </div>

                                        {/* quote */}
                                        <p className="mt-6 text-2xl font-semibold leading-relaxed text-slate-900 text-xl md:leading-relaxed">
                                            {item.quote}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* dots */}
                        <div className="mt-10 flex items-center justify-center gap-3">
                            {testimonials.map((_, i) => {
                                const isActive = i === active;
                                return (
                                    <button
                                        key={i}
                                        type="button"
                                        aria-label={`Go to testimonial ${i + 1}`}
                                        onClick={() => setActive([i, i > active ? 1 : -1])}
                                        className={`h-3 w-3 rounded-full transition ${isActive ? "bg-indigo-600" : "bg-indigo-200 hover:bg-indigo-300"
                                            }`}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

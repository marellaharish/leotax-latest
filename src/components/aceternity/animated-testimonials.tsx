"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

export type TestimonialItem = {
    quote: string;
    name: string;
    designation: string;
    src: string;
};

export function AnimatedTestimonials({
    testimonials,
    className = "",
}: {
    testimonials: TestimonialItem[];
    className?: string;
}) {
    const [[active, direction], setActive] = React.useState<[number, number]>([0, 0]);

    const paginate = (newDirection: number) => {
        setActive(([prev]) => {
            const next = (prev + newDirection + testimonials.length) % testimonials.length;
            return [next, newDirection];
        });
    };

    const item = testimonials[active];

    return (
        <div className={`relative mx-auto w-full ${className}`}>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_30px_80px_-60px_rgba(2,6,23,0.35)] md:p-10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.10)_0%,rgba(99,102,241,0)_55%)]" />

                {/* arrows */}
                <button
                    type="button"
                    aria-label="Previous testimonial"
                    onClick={() => paginate(-1)}
                    className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200 bg-white/80 p-2 text-slate-600 shadow-sm backdrop-blur hover:bg-white"
                >
                    ‹
                </button>
                <button
                    type="button"
                    aria-label="Next testimonial"
                    onClick={() => paginate(1)}
                    className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200 bg-white/80 p-2 text-slate-600 shadow-sm backdrop-blur hover:bg-white"
                >
                    ›
                </button>

                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={active}
                        custom={direction}
                        initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="relative z-0"
                    >
                        {/* stars row */}
                        <div className="flex items-center justify-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <span key={i} className="text-yellow-400">
                                    ★
                                </span>
                            ))}
                            <span className="ml-2 text-xs font-semibold text-slate-500">5</span>
                        </div>

                        <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-7 text-slate-600 md:text-[15px]">
                            “{item.quote}”
                        </p>

                        <div className="mt-6 flex flex-col items-center justify-center gap-2">
                            <div className="relative">
                                <img
                                    src={item.src}
                                    alt={item.name}
                                    className="h-12 w-12 rounded-full object-cover ring-2 ring-white shadow-md"
                                    draggable={false}
                                />
                                <span className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-emerald-500 text-[10px] font-extrabold text-white ring-2 ring-white">
                                    ✓
                                </span>
                            </div>

                            <div className="text-center">
                                <div className="text-sm font-extrabold text-slate-900">{item.name}</div>
                                <div className="text-xs font-semibold text-slate-500">{item.designation}</div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* dots */}
                <div className="mt-6 flex items-center justify-center gap-2">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            aria-label={`Go to testimonial ${i + 1}`}
                            onClick={() => setActive([i, i > active ? 1 : -1])}
                            className={`h-2.5 w-2.5 rounded-full transition ${i === active ? "bg-indigo-600" : "bg-slate-300 hover:bg-slate-400"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

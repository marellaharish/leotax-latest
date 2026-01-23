import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Slide1, Slide2, Slide3 } from "@/assets";

type Slide = {
    image: string;
    kicker: string;
    title: string;
    description: string;
    cta: string;
};

const slides: Slide[] = [
    {
        image: Slide2,
        kicker: "Modern Web site Redesign",
        title: "Simplify Your Taxes with\nExpert Confidence",
        description:
            "Fast, secure, and personalized tax filing services\nfor individuals and businesses.",
        cta: "Get Started Now",
    },
    {
        image: Slide1,
        kicker: "Trusted Tax Assistance",
        title: "Maximize Refunds with\nPeace of Mind",
        description:
            "Accurate returns, smart deductions, and year-round\nguidance for long-term wins.",
        cta: "Get Started Now",
    },
    {
        image: Slide3,
        kicker: "Business Services",
        title: "Business Tax & Bookkeeping\nMade Simple",
        description: "Streamlined compliance and clean books—without\nthe headaches.",
        cta: "Get Started Now",
    },
];

export default function HeroCarousel() {
    const [current, setCurrent] = React.useState(0);
    const intervalMs = 5500;

    React.useEffect(() => {
        const id = window.setInterval(() => {
            setCurrent((s) => (s + 1) % slides.length);
        }, intervalMs);
        return () => window.clearInterval(id);
    }, []);

    const goPrev = () => setCurrent((s) => (s - 1 + slides.length) % slides.length);
    const goNext = () => setCurrent((s) => (s + 1) % slides.length);

    const slide = slides[current];

    return (
        <section className="relative w-full">
            <div className="mx-auto">
                <div className="relative h-[calc(100vh-115px)] overflow-hidden ring-1 ring-white/10 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.6)]">
                    {/* FULL WIDTH IMAGE BACKGROUND */}
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={slide.image}
                            src={slide.image}
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover"
                            initial={{ opacity: 0, scale: 1.03 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.02 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            draggable={false}
                        />
                    </AnimatePresence>

                    {/* LEFT->RIGHT BLEND OVERLAY (dark to lighter) */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#04112b]/95 via-[#071a3a]/80 to-transparent" />

                    {/* extra depth like the reference */}
                    <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_18%_18%,rgba(59,130,246,0.28),transparent_60%)]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent" />

                    {/* CONTENT (left aligned) */}
                    <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-10">
                        <div className="w-full max-w-xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current}
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.55, ease: "easeOut" }}
                                >
                                    <p className="mb-3 text-sm font-medium tracking-wide text-white/60">
                                        {slide.kicker}
                                    </p>

                                    <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
                                        {slide.title.split("\n").map((line, i) => (
                                            <React.Fragment key={i}>
                                                {line}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </h1>

                                    <p className="mt-5 max-w-lg whitespace-pre-line text-sm leading-relaxed text-white/75 md:text-base">
                                        {slide.description}
                                    </p>

                                    <div className="mt-7">
                                        <button className="inline-flex items-center justify-center rounded-xl bg-[#0ea5a4] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-16px_rgba(14,165,164,0.9)] hover:brightness-110 active:scale-[0.99] transition">
                                            {slide.cta}
                                        </button>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* CONTROLS (bottom right like your old one) */}
                    <div className="absolute bottom-10 right-[50%] translate-x-1/2 z-20 flex items-center gap-2">
                        <button
                            onClick={goPrev}
                            aria-label="Previous slide"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-black/35 text-white ring-1 ring-white/15 backdrop-blur-md hover:bg-black/45 active:scale-[0.98] transition"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <div className="mx-2 flex items-center gap-2 rounded-xl bg-black/30 px-3 py-2 ring-1 ring-white/10 backdrop-blur-md">
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrent(idx)}
                                    aria-label={`Go to slide ${idx + 1}`}
                                    className={[
                                        "h-2.5 rounded-full transition-all",
                                        idx === current ? "w-7 bg-white/90" : "w-2.5 bg-white/35 hover:bg-white/55",
                                    ].join(" ")}
                                />
                            ))}
                        </div>
                        <button
                            onClick={goNext}
                            aria-label="Next slide"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-black/35 text-white ring-1 ring-white/15 backdrop-blur-md hover:bg-black/45 active:scale-[0.98] transition"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>

                    </div>

                    {/* soft border */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
                </div>
            </div>
        </section>
    );
}

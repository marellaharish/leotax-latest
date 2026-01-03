import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { ImagesSlider } from "@/components/aceternity/images-slider";

type Slide = {
    image: string;
    titleTop: string;
    titleAccent: string;
    description: string;
    pills: string[];
};

const slides: Slide[] = [
    {
        image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2400&q=80",
        titleTop: "Expert Financial Growth Solutions",
        titleAccent: "for Your Success",
        description:
            "Transform your financial future with comprehensive tax strategies. Our certified professionals deliver personalized solutions that optimize your tax position while ensuring full compliance.",
        pills: ["Strategic Planning", "Compliance Assurance", "Growth Optimization"],
    },
    {
        image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2400&q=80",
        titleTop: "Maximize Refunds & Minimize Stress",
        titleAccent: "with LeoTaxFiling",
        description:
            "We help individuals and businesses file with confidence—accurate returns, smart deductions, and proactive planning designed for long-term wins.",
        pills: ["Refund Support", "Audit Ready", "Year-Round Guidance"],
    },
    {
        image:
            "https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?auto=format&fit=crop&w=2400&q=80",
        titleTop: "Business Tax & Bookkeeping",
        titleAccent: "done the Right Way",
        description:
            "From LLCs to corporations, we streamline compliance and reporting. Keep your books clean and your business prepared—without the headaches.",
        pills: ["Business Returns", "Bookkeeping", "Quarterly Estimates"],
    },
];

const Pill: React.FC<{ text: string }> = ({ text }) => (
    <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md ring-1 ring-white/10">
        <CheckCircle2 className="h-4 w-4 text-emerald-300" />
        {text}
    </span>
);

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const sliderRef = React.useRef<{ next?: () => void; prev?: () => void } | null>(null);

    // We'll use a key to force re-render the motion.div on slide change
    const [animationKey, setAnimationKey] = React.useState(0);

    React.useEffect(() => {
        // Force re-render of motion.div when slide changes
        setAnimationKey(prev => prev + 1);
    }, [currentSlide]);

    return (
        <section className="relative w-full h-[calc(100vh-115px)]">
            <ImagesSlider
                images={slides.map((s) => s.image)}
                className="h-[calc(100vh-115px)] w-full"
                autoplay
                interval={5500}
                overlay
                overlayClassName="bg-black/55"
            >
                {/* subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/20" />

                {/* center content */}
                <div className="relative mx-auto flex h-full max-w-7xl items-center justify-center px-4">
                    <motion.div
                        key={animationKey}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 18 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-center"
                    >
                        <div className="mx-auto mb-4 flex items-center justify-center">
                            <div className="rounded-2xl bg-black/35 p-3 backdrop-blur-md ring-1 ring-white/10">
                                <TrendingUp className="h-6 w-6 text-emerald-300" />
                            </div>
                        </div>

                        <h1 className="mx-auto max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
                            {slides[currentSlide].titleTop}
                            <br />
                            <span className="text-emerald-300">
                                {slides[currentSlide].titleAccent}
                            </span>
                        </h1>

                        <p className="mx-auto mt-5 max-w-3xl text-pretty text-sm leading-relaxed text-white/85 md:text-base">
                            {slides[currentSlide].description}
                        </p>

                        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                            {slides[currentSlide].pills.map((pill, i) => (
                                <Pill key={i} text={pill} />
                            ))}
                        </div>
                    </motion.div>

                    {/* custom arrows (like screenshot)
                    <button
                        type="button"
                        aria-label="Previous"
                        className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/35 p-4 text-white backdrop-blur-md ring-1 ring-white/10 hover:bg-black/45 md:inline-flex"
                        // Hook these up if you want external control
                        onClick={() => {
                            // no-op for now
                            const el = document.querySelector<HTMLButtonElement>(
                                '[aria-label="Previous slide"]'
                            );
                            el?.click();
                        }}
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>

                    <button
                        type="button"
                        aria-label="Next"
                        className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/35 p-4 text-white backdrop-blur-md ring-1 ring-white/10 hover:bg-black/45 md:inline-flex"
                        onClick={() => {
                            const el = document.querySelector<HTMLButtonElement>('[aria-label="Next slide"]');
                            el?.click();
                        }}
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button> */}
                </div>
            </ImagesSlider>
        </section>
    );
}

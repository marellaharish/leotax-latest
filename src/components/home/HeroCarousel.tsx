import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { ImagesSlider } from "@/components/aceternity/images-slider";
import { Slide1, Slide2, Slide3 } from "@/assets";

type Slide = {
    image: string;
    titleTop: string;
    titleAccent: string;
    description: string;
    pills: string[];
};

const slides: Slide[] = [
    {
        image: Slide2,
        titleTop: "Expert Financial Growth Solutions",
        titleAccent: "for Your Success",
        description:
            "Transform your financial future with comprehensive tax strategies. Our certified professionals deliver personalized solutions that optimize your tax position while ensuring full compliance.",
        pills: ["Strategic Planning", "Compliance Assurance", "Growth Optimization"],
    },
    {
        image: Slide1,
        titleTop: "Maximize Refunds & Minimize Stress",
        titleAccent: "with LeoTaxFiling",
        description:
            "We help individuals and businesses file with confidence—accurate returns, smart deductions, and proactive planning designed for long-term wins.",
        pills: ["Refund Support", "Audit Ready", "Year-Round Guidance"],
    },
    {
        image: Slide3,
        titleTop: "Business Tax & Bookkeeping",
        titleAccent: "done the Right Way",
        description:
            "From LLCs to corporations, we streamline compliance and reporting. Keep your books clean and your business prepared—without the headaches.",
        pills: ["Business Returns", "Bookkeeping", "Quarterly Estimates"],
    },
];

const Pill: React.FC<{ text: string }> = ({ text }) => (
    <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md ring-1 ring-white/10">
        <CheckCircle2 className="h-4 w-4 text-[#2563eb]" />
        {text}
    </span>
);

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const intervalMs = 5500;

    // keep text in sync with autoplay timing
    React.useEffect(() => {
        const id = window.setInterval(() => {
            setCurrentSlide((s) => (s + 1) % slides.length);
        }, intervalMs);

        return () => window.clearInterval(id);
    }, []);

    const goPrev = () => setCurrentSlide((s) => (s - 1 + slides.length) % slides.length);
    const goNext = () => setCurrentSlide((s) => (s + 1) % slides.length);

    return (
        <section className="relative w-full h-[calc(100vh-115px)]">
            <ImagesSlider
                images={slides.map((s) => s.image)}
                className="h-[calc(100vh-115px)] w-full"
                autoplay
                interval={intervalMs}
                overlay
                overlayClassName="bg-black/55"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/20" />

                <div className="relative mx-auto flex h-full max-w-7xl items-center justify-center px-4">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-center"
                    >
                        <div className="mx-auto mb-4 flex items-center justify-center">
                            <div className="rounded-2xl bg-black/35 p-3 backdrop-blur-md ring-1 ring-white/10">
                                <TrendingUp className="h-6 w-6 text-[#2563eb]" />
                            </div>
                        </div>

                        <h1 className="mx-auto max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
                            {slides[currentSlide].titleTop}
                            <br />
                            <span className="text-[#2563eb]">{slides[currentSlide].titleAccent}</span>
                        </h1>

                        <p className="mx-auto mt-5 max-w-3xl text-pretty text-sm leading-relaxed text-white/85 md:text-base">
                            {slides[currentSlide].description}
                        </p>

                        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                            {slides[currentSlide].pills.map((pill) => (
                                <Pill key={pill} text={pill} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </ImagesSlider>
        </section>
    );
}

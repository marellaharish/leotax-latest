import React from "react";
import {
    AnimatedTestimonials,
    type TestimonialItem,
} from "@/components/aceternity/animated-testimonials";
import {
    Sparkles,
    ShieldCheck,
    BadgeCheck,
    ArrowUpRight,
} from "lucide-react";

const testimonials: TestimonialItem[] = [
    {
        quote:
            "As a senior software architect dealing with complex stock options, I needed expertise that could navigate every nuance. LeoTaxFiling delivered flawlessly.",
        name: "Dr. David Chen",
        designation: "Senior Software Architect",
        src: "https://i.pravatar.cc/150?img=12",
    },
    {
        quote:
            "They explained everything clearly, handled my extension filing fast, and helped me maximize deductions without stress. Very professional and responsive.",
        name: "Ananya Rao",
        designation: "Product Manager",
        src: "https://i.pravatar.cc/150?img=32",
    },
    {
        quote:
            "International filing felt intimidating — ITIN support and guidance were smooth end-to-end. The team was quick and thorough.",
        name: "Miguel Santos",
        designation: "Data Analyst",
        src: "https://i.pravatar.cc/150?img=56",
    },
];

const StatCard = ({
    value,
    label,
    accent,
}: {
    value: string;
    label: string;
    accent: "indigo" | "emerald" | "orange";
}) => {
    const accentMap = {
        indigo: "text-indigo-600 bg-indigo-50 ring-indigo-100",
        emerald: "text-emerald-600 bg-emerald-50 ring-emerald-100",
        orange: "text-orange-600 bg-orange-50 ring-orange-100",
    } as const;

    return (
        <div
            className={`rounded-2xl px-6 py-5 ring-1 shadow-[0_18px_55px_-45px_rgba(2,6,23,0.25)] ${accentMap[accent]}`}
        >
            <div className="text-xl font-extrabold tracking-tight">{value}</div>
            <div className="mt-1 text-xs font-semibold text-slate-600">{label}</div>
        </div>
    );
};

const TrustChip = ({
    icon,
    text,
}: {
    icon: React.ReactNode;
    text: string;
}) => (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
        {icon}
        {text}
    </div>
);

export default function TestimonialsSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white py-16 md:py-20">
            {/* soft light gradients */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_45%_at_85%_20%,rgba(99,102,241,0.12)_0%,rgba(99,102,241,0)_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_45%_at_15%_80%,rgba(16,185,129,0.12)_0%,rgba(16,185,129,0)_60%)]" />

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="grid items-center gap-10 lg:grid-cols-12">
                    {/* LEFT */}
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-[11px] font-extrabold text-indigo-700 ring-1 ring-indigo-100">
                            <Sparkles className="h-4 w-4" />
                            Client Success Stories
                        </div>

                        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                            Trusted by professionals <br />
                            across the globe
                        </h2>

                        <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
                            Real experiences from individuals and professionals who relied on
                            LeoTaxFiling for accuracy, compliance, and peace of mind.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            <TrustChip
                                icon={<ShieldCheck className="h-4 w-4 text-emerald-600" />}
                                text="Secure handling"
                            />
                            <TrustChip
                                icon={<BadgeCheck className="h-4 w-4 text-indigo-600" />}
                                text="Expert reviewed"
                            />
                            <TrustChip
                                icon={<Sparkles className="h-4 w-4 text-orange-500" />}
                                text="Simple process"
                            />
                        </div>



                    </div>

                    {/* RIGHT */}
                    <div className="lg:col-span-7">
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_40%_25%,rgba(0,0,0,0.04),transparent_60%)]" />
                        <AnimatedTestimonials testimonials={testimonials} />
                    </div>
                </div>
            </div>
        </section>
    );
}

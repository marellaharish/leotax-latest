import React from "react";
import { AnimatedTestimonials, type TestimonialItem } from "@/components/aceternity/animated-testimonials";

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
        indigo: "text-indigo-600",
        emerald: "text-emerald-600",
        orange: "text-orange-600",
    } as const;

    return (
        <div className="rounded-2xl border border-slate-100 bg-white px-6 py-5 shadow-[0_20px_55px_-45px_rgba(2,6,23,0.25)]">
            <div className={`text-xl font-extrabold tracking-tight ${accentMap[accent]}`}>
                {value}
            </div>
            <div className="mt-1 text-xs font-semibold text-slate-500">{label}</div>
        </div>
    );
};

export default function TestimonialsSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white py-16 md:py-20">
            {/* subtle background gradients like screenshot */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_45%_at_85%_70%,rgba(168,85,247,0.14)_0%,rgba(168,85,247,0)_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_45%_at_15%_70%,rgba(59,130,246,0.12)_0%,rgba(59,130,246,0)_60%)]" />

            <div className="relative mx-auto max-w-5xl px-4 text-center">
                {/* pill */}
                <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-extrabold text-indigo-700 ring-1 ring-indigo-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    Client Success Stories
                </div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                    TRUSTED BY <span className="text-indigo-600">OUR CLIENTS</span>
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                    Discover how international professionals transformed their tax experience
                </p>

                {/* Aceternity animated testimonials */}
                <div className="mt-10">
                    <AnimatedTestimonials testimonials={testimonials} />
                </div>

                {/* bottom stats */}
                <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
                    <StatCard value="97.5%" label="Client Satisfaction" accent="indigo" />
                    <StatCard value="$1.2M+" label="Total Refunds" accent="emerald" />
                    <StatCard value="24/7" label="Expert Support" accent="orange" />
                </div>
            </div>
        </section>
    );
}

import React from "react";
import { Zap, ShieldCheck, Users, ArrowUpRight } from "lucide-react";

type Point = {
    icon: React.ReactNode;
    title: string;
    desc: string;
};

const points: Point[] = [
    {
        icon: <Users className="h-5 w-5" />,
        title: "Expert Guidance",
        desc: "From answering your questions to helping you claim all eligible deductions, we make sure you maximize your tax benefits.",
    },
    {
        icon: <Zap className="h-5 w-5" />,
        title: "Fast and Efficient",
        desc: "You can complete your tax filing in just a few minutes and we make sure everything is submitted on time to avoid any penalties.",
    },
    {
        icon: <ShieldCheck className="h-5 w-5" />,
        title: "Trusted by Thousands",
        desc: "Leo has been trusted by thousands of individuals and businesses across the country for our exceptional customer service.",
    },
];

const Pill = ({ children }: { children: React.ReactNode }) => (
    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-extrabold text-emerald-700 ring-1 ring-emerald-100">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
        {children}
    </div>
);

const PointRow = ({ p }: { p: Point }) => (
    <div className="flex gap-4 border-t border-slate-100 py-6 first:border-t-0">
        <div className="mt-0.5 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 text-white shadow-[0_18px_40px_-25px_rgba(234,88,12,0.75)] ring-1 ring-white/30">
            {p.icon}
        </div>
        <div>
            <div className="text-sm font-extrabold text-slate-900">{p.title}</div>
            <p className="mt-2 max-w-[56ch] text-sm leading-7 text-slate-600">{p.desc}</p>
        </div>
    </div>
);

export default function WhyChooseUsModern() {
    return (
        <section className="relative w-full bg-white py-16 md:py-20">
            {/* soft gradients like your new UI */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_45%_at_20%_15%,rgba(16,185,129,0.12)_0%,rgba(16,185,129,0)_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_45%_at_85%_80%,rgba(99,102,241,0.12)_0%,rgba(99,102,241,0)_60%)]" />

            <div className="relative mx-auto grid max-w-6xl items-start gap-10 px-4 md:grid-cols-2 md:gap-12">
                {/* Left content */}
                <div>
                    <Pill>Why Choose Us</Pill>

                    <h2 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl">
                        We deliver expertise you <br className="hidden md:block" />
                        can trust{" "}
                        <span className="bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text text-transparent">
                            through our service
                        </span>
                    </h2>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 md:text-[15px]">
                        Choosing Leo for your tax filing needs means opting for simplicity, accuracy and peace
                        of mind. With expert assistance available every step of the way, you’ll never feel lost
                        or confused during the process.
                    </p>

                    <div className="mt-7 rounded-2xl border border-slate-100 bg-white/70 px-6 py-2 shadow-[0_25px_70px_-55px_rgba(2,6,23,0.35)] backdrop-blur">
                        {points.map((p) => (
                            <PointRow key={p.title} p={p} />
                        ))}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                        <a
                            href="/get-started"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-extrabold text-white shadow-[0_16px_35px_-22px_rgba(79,70,229,0.75)] hover:brightness-110"
                        >
                            Get Started
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                        >
                            Talk to an Expert
                        </a>
                    </div>
                </div>

                {/* Right images (modern overlapping cards) */}
                <div className="relative">
                    <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-gradient-to-br from-emerald-500/10 via-indigo-500/10 to-purple-500/10 blur-2xl" />

                    {/* big image */}
                    <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_35px_110px_-85px_rgba(2,6,23,0.55)]">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80"
                            alt="Tax experts working"
                            className="h-[340px] w-full object-cover md:h-[420px]"
                            draggable={false}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                    </div>

                    {/* floating image card */}
                    <div className="absolute -bottom-8 left-6 w-[78%] overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_30px_90px_-70px_rgba(2,6,23,0.65)] md:left-10 md:w-[72%]">
                        <img
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
                            alt="Consultation"
                            className="h-[210px] w-full object-cover md:h-[240px]"
                            draggable={false}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                    </div>

                    {/* spacer for absolute card */}
                    <div className="h-16 md:h-20" />
                </div>
            </div>
        </section>
    );
}

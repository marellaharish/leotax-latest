import React from "react";
import { Zap, ShieldCheck, Users, ArrowUpRight } from "lucide-react";
import { WhyChooseUs1, WhyChooseUs2 } from "@/assets";

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
    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-extrabold text-white/85 ring-1 ring-white/15 backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        {children}
    </div>
);

const PointCard = ({ p }: { p: Point }) => (
    <div className="group flex gap-4 rounded-2xl bg-white/8 p-4 ring-1 ring-white/12 backdrop-blur-md transition hover:bg-white/10">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500 to-indigo-600 text-white shadow-[0_18px_40px_-25px_rgba(16,185,129,0.55)] ring-1 ring-white/20">
            {p.icon}
        </div>
        <div>
            <div className="text-sm font-extrabold text-white">{p.title}</div>
            <p className="mt-1 text-sm leading-7 text-white/75">{p.desc}</p>
        </div>
    </div>
);

export default function WhyChooseUsModern() {
    return (
        <section className="relative w-full">
            {/* FULL WIDTH BACKDROP */}
            <div className="relative overflow-hidden">
                {/* background image */}
                <img
                    src={WhyChooseUs1}
                    alt="Tax experts working"
                    className="absolute inset-0 h-full w-full object-cover"
                    draggable={false}
                />

                {/* left->right blend overlay (dark to lighter) */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#04112b]/95 via-[#071a3a]/78 to-transparent" />

                {/* extra depth */}
                <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_18%_18%,rgba(59,130,246,0.22),transparent_60%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent" />

                {/* CONTENT */}
                <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:py-20">
                    <div className="max-w-2xl">
                        <Pill>Why Choose Us</Pill>

                        <h2 className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
                            We deliver expertise you can trust{" "}
                            <span className="text-emerald-300">through our service</span>
                        </h2>

                        <p className="mt-5 max-w-xl whitespace-pre-line text-sm leading-7 text-white/75 md:text-[15px]">
                            Choosing Leo for your tax filing needs means opting for simplicity, accuracy and peace of mind.
                            With expert assistance available every step of the way, you’ll never feel lost or confused
                            during the process.
                        </p>

                        {/* points */}
                        <div className="mt-7 grid gap-3">
                            {points.map((p) => (
                                <PointCard key={p.title} p={p} />
                            ))}
                        </div>

                        {/* actions */}
                        <div className="mt-7 flex flex-wrap items-center gap-3">
                            <a
                                href="/signup"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-extrabold text-white shadow-[0_18px_40px_-25px_rgba(16,185,129,0.75)] hover:brightness-110"
                            >
                                Get Started
                                <ArrowUpRight className="h-4 w-4" />
                            </a>

                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-extrabold text-white ring-1 ring-white/15 backdrop-blur-md hover:bg-white/15"
                            >
                                Talk to an Expert
                            </a>
                        </div>
                    </div>

                    {/* floating mini image on right (optional accent) */}
                    <div className="pointer-events-none relative mt-10 hidden md:block">
                        <div className="absolute right-0 top-0 w-[420px] overflow-hidden rounded-3xl bg-white/10 ring-1 ring-white/15 backdrop-blur-md shadow-[0_30px_90px_-70px_rgba(2,6,23,0.8)]">
                            <img
                                src={WhyChooseUs2}
                                alt="Consultation"
                                className="h-[240px] w-full object-cover opacity-95"
                                draggable={false}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                        </div>

                        {/* spacer so abs card doesn't overlap next section */}
                        <div className="h-[260px]" />
                    </div>
                </div>
            </div>
        </section>
    );
}

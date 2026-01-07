import React from "react";
import { Clock3, DollarSign, Sparkles, ArrowUpRight } from "lucide-react";

type Feature = {
    topStat: string;
    topPill: string;
    title: string;
    desc: string;
    icon: React.ReactNode;
};

const features: Feature[] = [
    {
        topStat: "Same Day Filing",
        topPill: "Quick Turnaround",
        title: "Fast and Efficient",
        desc: "Finish your tax filing in minutes. We review, prepare, and submit quickly so you stay on time and avoid penalties.",
        icon: <Clock3 className="h-5 w-5 text-white" />,
    },
    {
        topStat: "Best Value",
        topPill: "Competitive Rates",
        title: "Affordable Pricing",
        desc: "Clear, competitive pricing for individuals and businesses—high-quality work without hidden surprises.",
        icon: <DollarSign className="h-5 w-5 text-white" />,
    },
];

function cx(...classes: Array<string | false | undefined | null>) {
    return classes.filter(Boolean).join(" ");
}

const FeatureTile: React.FC<{ item: Feature }> = ({ item }) => {
    return (
        <div
            className={cx(
                "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl",
                "p-7 md:p-8",
                "shadow-[0_20px_70px_-55px_rgba(0,0,0,0.9)]",
                "transition duration-300 hover:-translate-y-1 hover:border-white/20"
            )}
        >
            {/* top glow line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

            {/* soft corner bloom */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl opacity-20" />

            {/* header */}
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-600 shadow-[0_18px_45px_-25px_rgba(34,211,238,0.9)]">
                        {item.icon}
                    </div>
                    <div>
                        <div className="text-[11px] font-semibold tracking-wide text-white/55">
                            {item.topPill}
                        </div>
                        <div className="mt-1 text-sm font-bold text-white">{item.topStat}</div>
                    </div>
                </div>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] font-semibold text-white/70">
                    Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
            </div>

            {/* body */}
            <div className="mt-6">
                <h3 className="text-xl font-extrabold tracking-tight text-white">
                    {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.desc}</p>
            </div>

            {/* bottom sheen */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/5 to-transparent opacity-50" />
        </div>
    );
};

const StatMini: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-xl">
        <div className="text-[11px] font-semibold text-white/55">{label}</div>
        <div className="mt-1 text-sm font-bold text-white">{value}</div>
    </div>
);

const WhyChooseUs: React.FC = () => {
    return (
        <section className="relative w-full py-16 md:py-24">
            {/* NEW BACKGROUND (different palette + style) */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[#050816]" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_15%_15%,rgba(34,211,238,0.14),transparent_55%)]" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_85%_25%,rgba(99,102,241,0.14),transparent_55%)]" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_50%_95%,rgba(16,185,129,0.10),transparent_55%)]" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-black/10 to-black/25" />

            <div className="mx-auto max-w-7xl px-4">
                {/* NEW HEADER LAYOUT (different from old) */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/70 backdrop-blur-xl">
                            <Sparkles className="h-4 w-4 text-cyan-300" />
                            Built for speed, accuracy & clarity
                        </div>

                        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                            Why clients stick with LeoTaxFiling
                        </h2>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70 md:text-[15px]">
                            A modern tax experience—fast filing, transparent pricing, and dependable
                            support for individuals and businesses.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:max-w-md lg:col-span-5 lg:justify-self-end">
                        <StatMini label="Response time" value="Under 24 hours" />
                        <StatMini label="Turnaround" value="Same-day options" />
                    </div>
                </div>

                {/* NEW GRID (2 cards side-by-side on lg) */}
                <div className="mt-10 grid grid-cols-1 gap-7 lg:grid-cols-2">
                    {features.map((f) => (
                        <FeatureTile key={f.title} item={f} />
                    ))}
                </div>

                {/* Optional bottom strip (adds “website” feel, different from old) */}
                <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div>
                            <div className="text-sm font-bold text-white">Ready to file with confidence?</div>
                            <div className="mt-1 text-sm text-white/70">
                                Start now and we’ll guide you step-by-step.
                            </div>
                        </div>

                        <button className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_55px_-30px_rgba(99,102,241,0.9)] hover:brightness-110 active:scale-[0.99] transition">
                            Get Started <ArrowUpRight className="ml-2 h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

import React from "react";
import { BadgeCheck, Clock3, Award, DollarSign, ArrowUpRight } from "lucide-react";

type Feature = {
    topStat: string;
    topPill: string;
    title: string;
    desc: string;
    icon: React.ReactNode;
    iconBg: string; // tailwind bg
    pillBg: string; // tailwind bg
};

const features: Feature[] = [
    {
        topStat: "Same Day Filing",
        topPill: "Quick Turnaround",
        title: "Fast and Efficient",
        desc: "You can complete your tax filing in just a few minutes and we make sure everything is submitted on time to avoid any penalties.",
        icon: <Clock3 className="h-5 w-5 text-white" />,
        iconBg: "bg-violet-600",
        pillBg: "bg-violet-600",
    },
    {
        topStat: "Best Value",
        topPill: "Competitive Rates",
        title: "Affordable Pricing",
        desc: "Leo Tax Filing offers competitive pricing plans, ensuring great value for individuals and businesses without compromising on quality.",
        icon: <DollarSign className="h-5 w-5 text-white" />,
        iconBg: "bg-indigo-600",
        pillBg: "bg-indigo-600",
    },
];

function cx(...classes: Array<string | false | undefined | null>) {
    return classes.filter(Boolean).join(" ");
}

const FeatureCard: React.FC<{ item: Feature; featured?: boolean }> = ({
    item,
    featured = false,
}) => {
    return (
        <div
            className={cx(
                "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl",
                "shadow-[0_20px_70px_-55px_rgba(0,0,0,0.9)]",
                "transition-transform duration-300 hover:-translate-y-1",
                featured ? "p-9 md:p-10" : "p-8"
            )}
        >
            {/* subtle top highlight */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent opacity-40" />

            {/* accent blobs (very soft) */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl opacity-30" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-white/5 blur-3xl opacity-30" />

            {/* Header */}
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className={cx("grid h-11 w-11 place-items-center rounded-2xl", item.iconBg)}>
                        {item.icon}
                    </div>

                    {/* eyebrow + pill */}
                    <div className="flex flex-col gap-2">
                        <span className="text-xs font-semibold tracking-wide text-white/70">
                            Why it matters
                        </span>
                        <span
                            className={cx(
                                "inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold text-white/95",
                                item.pillBg
                            )}
                        >
                            {item.topPill}
                        </span>
                    </div>
                </div>

                {/* small stat chip (less shouty) */}
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-right">
                    <div className="text-[11px] font-semibold text-white/60">Highlight</div>
                    <div className="mt-1 text-sm font-bold tracking-tight text-white">
                        {item.topStat}
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className={cx("mt-7", featured && "mt-8")}>
                <h3
                    className={cx(
                        "text-xl font-extrabold tracking-tight text-white",
                        featured && "text-2xl md:text-[28px]"
                    )}
                >
                    {item.title}
                </h3>

                <p
                    className={cx(
                        "mt-3 text-sm leading-7 text-white",
                        featured && "mt-4 max-w-[60ch] text-[15px]"
                    )}
                >
                    {item.desc}
                </p>

            </div>

            {/* bottom sheen */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>
    );
};

const WhyChooseUs: React.FC = () => {
    const [first, ...rest] = features;

    return (
        <section className="relative w-full py-14 md:py-20">
            {/* background */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[#070b18]" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_55%)]" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_15%_85%,rgba(56,189,248,0.12)_0%,rgba(56,189,248,0)_60%)]" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_85%_25%,rgba(168,85,247,0.12)_0%,rgba(168,85,247,0)_60%)]" />

            <div className="mx-auto max-w-7xl px-4">
                {/* heading area (adds real website feel) */}
                <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-white/75">
                            Trust • Speed • Accuracy • Value
                        </div>
                        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                            Why people choose LeoTaxFiling
                        </h2>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70 md:text-[15px]">
                            Professional support that feels simple. Clear guidance, faster filing, and
                            dependable outcomes—built for individuals and businesses.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                            <div className="text-[11px] font-semibold text-white/60">Response time</div>
                            <div className="mt-1 text-sm font-bold text-white">Under 24 hours</div>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                            <div className="text-[11px] font-semibold text-white/60">Satisfaction</div>
                            <div className="mt-1 text-sm font-bold text-white">High retention</div>
                        </div>
                    </div>
                </div>

                {/* layout variety: 1 featured + 3 compact */}
                <div className="grid grid-cols-1 gap-7 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <FeatureCard item={first} featured />
                    </div>

                    <div className="grid grid-cols-1 gap-7 lg:col-span-5">
                        {rest.map((f) => (
                            <FeatureCard key={f.title} item={f} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

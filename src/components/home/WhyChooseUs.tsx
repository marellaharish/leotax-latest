import React from "react";
import { BadgeCheck, Clock3, Award, DollarSign } from "lucide-react";

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
        topStat: "8 Years Experience",
        topPill: "Certified Specialists",
        title: "Expert Guidance",
        desc: "From answering your questions to helping you claim all eligible deductions, Leo Tax Filing makes sure you maximize your tax benefits.",
        icon: <BadgeCheck className="h-6 w-6 text-white" />,
        iconBg: "bg-emerald-600",
        pillBg: "bg-emerald-600",
    },
    {
        topStat: "Same Day Filing",
        topPill: "Quick Turnaround",
        title: "Fast and Efficient",
        desc: "You can complete your tax filing in just a few minutes and we make sure everything is submitted on time to avoid any penalties.",
        icon: <Clock3 className="h-6 w-6 text-white" />,
        iconBg: "bg-violet-600",
        pillBg: "bg-violet-600",
    },
    {
        topStat: "14695+ Clients",
        topPill: "Proven Track Record",
        title: "Trusted by 14695+ Clients",
        desc: "Leo Tax Filing has been trusted by thousands of individuals and businesses across the country for our exceptional customer service.",
        icon: <Award className="h-6 w-6 text-white" />,
        iconBg: "bg-orange-600",
        pillBg: "bg-orange-600",
    },
    {
        topStat: "Best Value",
        topPill: "Competitive Rates",
        title: "Affordable Pricing",
        desc: "Leo Tax Filing offers competitive pricing plans, ensuring great value for individuals and businesses without compromising on quality.",
        icon: <DollarSign className="h-6 w-6 text-white" />,
        iconBg: "bg-indigo-600",
        pillBg: "bg-indigo-600",
    },
];

const FeatureCard: React.FC<{ item: Feature }> = ({ item }) => {
    return (
        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.9)] backdrop-blur-xl">
            {/* soft gradient sheen */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            </div>

            {/* top row */}
            <div className="flex items-start justify-between gap-4">
                <div className={`grid h-14 w-14 place-items-center rounded-2xl ${item.iconBg}`}>
                    {item.icon}
                </div>

                <div className="text-right">
                    <div className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                        {item.topStat}
                    </div>
                    <div className="mt-2 flex justify-end">
                        <span
                            className={`inline-flex items-center rounded-full ${item.pillBg} px-4 py-1 text-xs font-bold text-white/95`}
                        >
                            {item.topPill}
                        </span>
                    </div>
                </div>
            </div>

            {/* content */}
            <div className="mt-7">
                <h3 className="text-2xl font-extrabold tracking-tight text-white">{item.title}</h3>
                <p className="mt-4 max-w-[44ch] text-sm leading-7 text-white/75 md:text-[15px]">
                    {item.desc}
                </p>
            </div>

            {/* subtle bottom border */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>
    );
};

const WhyChooseUs: React.FC = () => {
    return (
        <section className="relative w-full py-14 md:py-20">
            {/* background like screenshot */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[#070b18]" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_55%)]" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_15%_85%,rgba(56,189,248,0.12)_0%,rgba(56,189,248,0)_60%)]" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_85%_25%,rgba(168,85,247,0.12)_0%,rgba(168,85,247,0)_60%)]" />

            <div className="mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                    {features.map((f) => (
                        <FeatureCard key={f.title} item={f} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

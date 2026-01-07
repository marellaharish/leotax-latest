import React from "react";
import {
    Sparkles,
    FileText,
    LineChart,
    Users,
    ArrowUpRight,
    UserRound,
    ClipboardCheck,
    ShieldCheck,
    Zap,
    CheckCircle2,
} from "lucide-react";
import LionStrokeAnimation from "./LionStrokeAnimation";
import {
    service1,
    service2,
    service3,
    service4,
    service5,
    service6,
} from "@/assets";

type OfferCard = {
    iconBg: string;
    icon: React.ReactNode;
    text: string;
};

type ServiceCard = {
    no: string;
    noBg: string;
    title: string;
    desc: string;
    image: string;
    cornerIcon: React.ReactNode;
};

const offerCards: OfferCard[] = [
    {
        iconBg: "bg-emerald-100 text-emerald-700",
        icon: <FileText className="h-5 w-5" />,
        text: "Seasoned tax specialists deliver well-rounded advisory services designed to support your long-term financial goals.",
    },
    {
        iconBg: "bg-indigo-100 text-indigo-700",
        icon: <LineChart className="h-5 w-5" />,
        text: "Forward-thinking tax guidance and structured planning to adapt smoothly to evolving regulations while reducing compliance risks.",
    },
];

const services: ServiceCard[] = [
    {
        no: "01",
        noBg: "bg-indigo-600",
        title: "1040 & 1040 NR Tax Return Filing",
        desc: "Individual and nonresident tax return preparation",
        image: service1,
        cornerIcon: <ClipboardCheck className="h-4 w-4 text-white/90" />,
    },
    {
        no: "02",
        noBg: "bg-emerald-600",
        title: "Unlimited Tax Consultations",
        desc: "Get answers and guidance from tax professionals",
        image: service2,
        cornerIcon: <FileText className="h-4 w-4 text-white/90" />,
    },
    {
        no: "03",
        noBg: "bg-purple-600",
        title: "Form 4868 Extension Filing",
        desc: "Tax filing deadline extension support",
        image: service3,
        cornerIcon: <UserRound className="h-4 w-4 text-white/90" />,
    },
    {
        no: "04",
        noBg: "bg-orange-600",
        title: "ITIN Guidance and Support (Form W-7)",
        desc: "Individual Taxpayer Identification Number applications",
        image: service4,
        cornerIcon: <ArrowUpRight className="h-4 w-4 text-white/90" />,
    },
    {
        no: "05",
        noBg: "bg-rose-600",
        title: "Filed Tax Returns Assessment & Examination",
        desc: "Review and assessment of previously filed returns",
        image: service5,
        cornerIcon: <Users className="h-4 w-4 text-white/90" />,
    },
    {
        no: "06",
        noBg: "bg-sky-600",
        title: "Professional Tax Planning",
        desc: "Strategic tax optimization and planning services",
        image: service6,
        cornerIcon: <ShieldCheck className="h-4 w-4 text-white/90" />,
    },
];

function cx(...classes: Array<string | false | undefined | null>) {
    return classes.filter(Boolean).join(" ");
}

const StatChip = ({ value, label }: { value: string; label: string }) => (
    <div className="rounded-2xl border border-black/10 bg-white/60 px-5 py-4 backdrop-blur-xl shadow-[0_18px_60px_-45px_rgba(2,6,23,0.25)]">
        <div className="text-2xl font-extrabold tracking-tight text-slate-900">{value}</div>
        <div className="mt-1 text-xs font-semibold text-slate-500">{label}</div>
    </div>
);

const OfferTile = ({ item }: { item: OfferCard }) => (
    <div className="group rounded-2xl border border-black/10 bg-white/60 p-5 backdrop-blur-xl shadow-[0_18px_60px_-45px_rgba(2,6,23,0.22)] transition hover:-translate-y-0.5">
        <div className={cx("mb-4 grid h-11 w-11 place-items-center rounded-2xl", item.iconBg)}>
            {item.icon}
        </div>
        <p className="text-sm leading-6 text-slate-600">{item.text}</p>
        <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-slate-900/70">
            Learn more <ArrowUpRight className="h-4 w-4" />
        </div>
    </div>
);

const ServiceRow = ({ s }: { s: ServiceCard }) => (
    <div className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/60 backdrop-blur-xl shadow-[0_22px_70px_-55px_rgba(2,6,23,0.30)] transition hover:-translate-y-0.5">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
            {/* image */}
            <div className="relative">
                <img
                    src={s.image}
                    alt={s.title}
                    className="h-44 w-full object-cover md:h-full md:min-h-[140px]"
                    draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/0 to-black/0" />
                <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span
                        className={cx(
                            "inline-flex h-9 w-11 items-center justify-center rounded-xl text-xs font-extrabold text-white shadow-lg",
                            s.noBg
                        )}
                    >
                        {s.no}
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/20 text-white backdrop-blur-md ring-1 ring-white/25">
                        {s.cornerIcon}
                    </span>
                </div>
            </div>

            {/* content */}
            <div className="flex flex-col justify-center p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <div className="text-lg font-extrabold tracking-tight text-slate-900">{s.title}</div>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>
                    </div>

                    <button className="hidden shrink-0 items-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-4 py-2 text-xs font-bold text-slate-900 shadow-sm transition hover:bg-white md:inline-flex">
                        View <ArrowUpRight className="h-4 w-4" />
                    </button>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11px] font-semibold text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        Secure & compliant
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11px] font-semibold text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-indigo-600" />
                        Expert-reviewed
                    </span>
                </div>
            </div>
        </div>

        {/* subtle bottom sheen */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/60 to-transparent opacity-60" />
    </div>
);

const MiniStep = ({
    iconBg,
    icon,
    title,
    desc,
}: {
    iconBg: string;
    icon: React.ReactNode;
    title: string;
    desc: string;
}) => (
    <div className="relative rounded-3xl border border-black/10 bg-white/60 p-6 backdrop-blur-xl shadow-[0_18px_60px_-45px_rgba(2,6,23,0.22)]">
        <div className="flex items-start gap-4">
            <div className={cx("grid h-12 w-12 place-items-center rounded-2xl text-white", iconBg)}>
                {icon}
            </div>
            <div>
                <div className="text-sm font-extrabold text-slate-900">{title}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
        </div>

        <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-black/5 blur-3xl" />
    </div>
);

export default function ServicesShowcase() {
    return (
        <section className="relative w-full overflow-hidden bg-[#fbfbfe]">
            {/* NEW BACKGROUND (different palette) */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_10%_10%,rgba(99,102,241,0.14),transparent_55%)]" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_90%_15%,rgba(16,185,129,0.12),transparent_55%)]" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_50%_95%,rgba(244,114,182,0.10),transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-slate-50" />

            <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
                {/* TOP: New hero layout */}
                <div className="grid items-center gap-10 lg:grid-cols-12">
                    {/* left */}
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[11px] font-extrabold text-slate-800 backdrop-blur-xl">
                            <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-900 text-white shadow-sm">
                                <Sparkles className="h-4 w-4" />
                            </span>
                            WHAT WE OFFER
                        </div>

                        <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] tracking-tight text-slate-900 md:text-5xl">
                            Clear guidance. <br />
                            Confident filing. <br />
                            A{" "}
                            <span className="bg-gradient-to-r from-emerald-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                modern tax team
                            </span>
                            .
                        </h2>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-[15px]">
                            Practical advice and professional execution—built to reduce stress, improve accuracy,
                            and keep you compliant all year.
                        </p>

                        <div className="mt-7 grid gap-5 sm:grid-cols-2">
                            {offerCards.map((c, idx) => (
                                <OfferTile key={idx} item={c} />
                            ))}
                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <button className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_55px_-30px_rgba(2,6,23,0.55)] hover:brightness-110 active:scale-[0.99] transition">
                                Explore Services <ArrowUpRight className="ml-2 h-4 w-4" />
                            </button>

                            <button className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 backdrop-blur-xl hover:bg-white transition">
                                Talk to an Expert
                            </button>
                        </div>
                    </div>

                    {/* right (animation in a framed card) */}
                    <div className="lg:col-span-5">
                        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/60 p-6 backdrop-blur-xl shadow-[0_22px_70px_-55px_rgba(2,6,23,0.28)]">
                            <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_40%_35%,rgba(99,102,241,0.10)_0%,rgba(99,102,241,0)_55%)]" />
                            <div className="relative flex items-center justify-center">
                                <LionStrokeAnimation />
                            </div>
                        </div>
                    </div>
                </div>

                {/* OUR SERVICES */}
                <div className="mt-14 text-center md:mt-16">
                    <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[11px] font-extrabold text-slate-800 backdrop-blur-xl">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                        OUR SERVICES
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    </div>

                    <h3 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                        Professional Tax{" "}
                        <span className="bg-gradient-to-r from-emerald-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Services
                        </span>
                    </h3>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                        A full menu of tax solutions—built for individuals, nonresidents, and growing businesses.
                    </p>
                </div>

                {/* NEW SERVICES LAYOUT: rows (not image overlay cards) */}
                <div className="mt-10 grid gap-6 ">
                    {services.map((s) => (
                        <ServiceRow key={s.no} s={s} />
                    ))}
                </div>

                {/* STATS (glass chips) */}
                <div className="mt-12 grid grid-cols-2 gap-5 md:mt-14 md:grid-cols-4">
                    <StatChip value="28,960+" label="Clients served" />
                    <StatChip value="98%" label="Audit clearance rate" />
                    <StatChip value="12+" label="Years of experience" />
                    <StatChip value="18,650+" label="Reports delivered" />
                </div>

                {/* bottom section: new “steps/timeline tiles” */}
                <div className="mt-16 md:mt-20">
                    <div className="mx-auto max-w-3xl text-center">
                        <h4 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                            Expertise you can trust, <br />
                            delivered with clarity.
                        </h4>
                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                            We keep things simple: quick answers, accurate filing, and guidance that helps you
                            make better financial decisions.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        <MiniStep
                            iconBg="bg-gradient-to-br from-rose-500 to-pink-600"
                            icon={<Users className="h-5 w-5" />}
                            title="Expert Guidance"
                            desc="We help you claim eligible deductions and avoid common mistakes—without confusion."
                        />
                        <MiniStep
                            iconBg="bg-gradient-to-br from-emerald-500 to-teal-600"
                            icon={<Zap className="h-5 w-5" />}
                            title="Fast Turnaround"
                            desc="Efficient workflows to prepare and submit returns quickly—so you stay ahead of deadlines."
                        />
                        <MiniStep
                            iconBg="bg-gradient-to-br from-indigo-500 to-purple-600"
                            icon={<ShieldCheck className="h-5 w-5" />}
                            title="Trusted Outcomes"
                            desc="Built on accuracy, compliance, and secure handling of sensitive information."
                        />
                    </div>

                    <div className="mx-auto mt-10 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-500 via-indigo-500 to-purple-500" />
                </div>
            </div>
        </section>
    );
}

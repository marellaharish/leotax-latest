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
} from "lucide-react";
import LionStrokeAnimation from "./LionStrokeAnimation";
import { service1, service2, service3, service4, service5, service6, service7, service8, service9 } from "@/assets";

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

const Stat = ({ value, label }: { value: string; label: string }) => (
    <div className="text-center">
        <div className="text-3xl font-extrabold tracking-tight text-emerald-600 md:text-4xl">
            {value}
        </div>
        <div className="mt-1 text-xs font-semibold text-slate-500">{label}</div>
    </div>
);

const MiniFeature = ({
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
    <div className="text-center">
        <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-2xl shadow-[0_10px_25px_-15px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
            <div className={`grid h-12 w-12 place-items-center rounded-2xl ${iconBg}`}>
                {icon}
            </div>
        </div>
        <div className="text-sm font-extrabold text-slate-900">{title}</div>
        <p className="mx-auto mt-2 max-w-[34ch] text-xs leading-6 text-slate-500">
            {desc}
        </p>
    </div>
);

export default function ServicesShowcase() {
    return (
        <section className="relative w-full bg-white">
            {/* subtle top wash like screenshot */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(55%_60%_at_50%_0%,rgba(16,185,129,0.14)_0%,rgba(16,185,129,0)_55%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(40%_55%_at_85%_15%,rgba(99,102,241,0.12)_0%,rgba(99,102,241,0)_60%)]" />
            <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
                {/* Top: What we offer + two cards */}
                <div className="grid items-start gap-8 md:grid-cols-[1.25fr_1fr]">
                    <div>

                        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-extrabold text-emerald-700 ring-1 ring-emerald-100">
                            <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-500 text-white shadow-sm">
                                <Sparkles className="h-4 w-4" />
                            </span>
                            WHAT WE OFFER
                        </div>

                        <h2 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 md:text-5xl">
                            Discover <br />
                            confidence in <br />
                            selecting the{" "}
                            <span className="text-emerald-600">
                                right <br />
                                tax advisory team
                            </span>
                        </h2>

                        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 relative mt-4">
                            {offerCards.map((c, idx) => (
                                <div
                                    key={idx}
                                    className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_20px_55px_-40px_rgba(2,6,23,0.25)]"
                                >
                                    <div
                                        className={`mb-4 grid h-10 w-10 place-items-center rounded-2xl ${c.iconBg}`}
                                    >
                                        {c.icon}
                                    </div>
                                    <p className="text-sm leading-6 text-slate-600">{c.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="h-full flex items-center justify-center">
                        <LionStrokeAnimation />
                    </div>
                </div>

                {/* OUR SERVICES title */}
                <div className="mt-14 text-center md:mt-16">
                    <div className="mx-auto inline-flex items-center gap-2 text-[11px] font-extrabold text-emerald-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        OUR SERVICES
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>

                    <h3 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                        Professional Tax <span className="text-emerald-600">Services</span>
                    </h3>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                        Comprehensive tax solutions designed to maximize your financial success with expert
                        guidance and personalized support.
                    </p>
                </div>

                {/* Services grid */}
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((s) => (
                        <div
                            key={s.no}
                            className="group relative overflow-hidden rounded-2xl bg-slate-200 shadow-[0_25px_80px_-60px_rgba(2,6,23,0.45)]"
                        >
                            {/* image */}
                            <img
                                src={s.image}
                                alt={s.title}
                                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                draggable={false}
                            />

                            {/* top badges */}
                            <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
                                <span
                                    className={`inline-flex h-8 w-10 items-center justify-center rounded-lg ${s.noBg} text-xs font-extrabold text-white shadow-lg`}
                                >
                                    {s.no}
                                </span>
                            </div>

                            <div className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-lg bg-white/20 text-white backdrop-blur-md ring-1 ring-white/20">
                                {s.cornerIcon}
                            </div>

                            {/* overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                            {/* content */}
                            <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
                                <div className="text-base font-extrabold text-white">{s.title}</div>
                                <p className="mt-2 text-xs leading-6 text-white/80">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* stats row */}
                <div className="mt-12 grid grid-cols-2 gap-6 md:mt-14 md:grid-cols-4">
                    <Stat value="28,960+" label="Clients served" />
                    <Stat value="98%" label="Audit clearance rate" />
                    <Stat value="12+" label="Years of experience" />
                    <Stat value="18,650+" label="Reports delivered" />
                </div>


                {/* bottom heading + 3 mini features */}
                <div className="mt-16 text-center md:mt-20">
                    <h4 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                        Delivering expertise you can trust <br />
                        <span className="text-purple-600">through our services</span>
                    </h4>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                        With Leo Tax Filing, tax filing becomes effortless. We bring you accuracy, peace of
                        mind, and expert guidance so you'll never feel uncertain during the process.
                    </p>

                    <div className="mt-10 grid gap-8 sm:grid-cols-3">
                        <MiniFeature
                            iconBg="bg-rose-500 text-white"
                            icon={<Users className="h-5 w-5" />}
                            title="Expert Guidance"
                            desc="From answering your questions to helping you claim all eligible deductions, we make sure you maximize your tax benefits."
                        />
                        <MiniFeature
                            iconBg="bg-emerald-500 text-white"
                            icon={<Zap className="h-5 w-5" />}
                            title="Fast and Efficient"
                            desc="You can complete your tax filing in just a few minutes and we make sure everything is submitted on time to avoid any penalties."
                        />
                        <MiniFeature
                            iconBg="bg-indigo-500 text-white"
                            icon={<ShieldCheck className="h-5 w-5" />}
                            title="Trusted by Thousands"
                            desc="Leo Tax Filing has been trusted by thousands of individuals and businesses across the country for our exceptional customer service."
                        />
                    </div>

                    {/* tiny gradient bar at bottom like screenshot */}
                    <div className="mx-auto mt-10 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-500 via-indigo-500 to-purple-500" />
                </div>
            </div>
        </section>
    );
}

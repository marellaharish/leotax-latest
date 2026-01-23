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
// Importing filled versions of icons
import { FileText as FileTextFilled, Users as UsersFilled, UserRound as UserRoundFilled, Shield as ShieldFilled, Zap as ZapFilled } from 'lucide-react';
import LionStrokeAnimation from "./LionStrokeAnimation";
import {
    service1,
    service2,
    service3,
    service4,
    service5,
    service6,
} from "@/assets";
import { HoverEffect } from "../ui/card-hover-effect";

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
        iconBg: "bg-blue-600 text-white",
        icon: <FileTextFilled className="h-5 w-5" />,
        text: "Seasoned tax specialists deliver well-rounded advisory services designed to support your long-term financial goals.",
    },
    {
        iconBg: "bg-blue-600 text-white",
        icon: <LineChart className="h-5 w-5" />,
        text: "Forward-thinking tax guidance and structured planning to adapt smoothly to evolving regulations while reducing compliance risks.",
    },
];

const services: ServiceCard[] = [
    {
        no: "01",
        noBg: "bg-indigo-500",
        title: "1040 & 1040 NR Tax Return Filing",
        desc: "Individual and nonresident tax return preparation",
        image: service1,
        cornerIcon: <ClipboardCheck className="h-4 w-4 text-white" />,
    },
    {
        no: "02",
        noBg: "bg-emerald-500",
        title: "Unlimited Tax Consultations",
        desc: "Get answers and guidance from tax professionals",
        image: service2,
        cornerIcon: <FileTextFilled className="h-4 w-4 text-white" />,
    },
    {
        no: "03",
        noBg: "bg-purple-500",
        title: "Form 4868 Extension Filing",
        desc: "Tax filing deadline extension support",
        image: service3,
        cornerIcon: <UserRoundFilled className="h-4 w-4 text-white" />,
    },
    {
        no: "04",
        noBg: "bg-orange-500",
        title: "ITIN Guidance and Support (Form W-7)",
        desc: "Individual Taxpayer Identification Number applications",
        image: service4,
        cornerIcon: <ArrowUpRight className="h-4 w-4 text-white" />,
    },
    {
        no: "05",
        noBg: "bg-rose-500",
        title: "Filed Tax Returns Assessment & Examination",
        desc: "Review and assessment of previously filed returns",
        image: service5,
        cornerIcon: <UsersFilled className="h-4 w-4 text-white" />,
    },
    {
        no: "06",
        noBg: "bg-sky-500",
        title: "Professional Tax Planning",
        desc: "Strategic tax optimization and planning services",
        image: service6,
        cornerIcon: <ShieldFilled className="h-4 w-4 text-white" />,
    },
];

function cx(...classes: Array<string | false | undefined | null>) {
    return classes.filter(Boolean).join(" ");
}

const StatChip = ({ value, label }: { value: string; label: string }) => (
    <div className="rounded-lg border border-gray-200 bg-white px-5 py-4 shadow-sm">
        <div className="text-2xl font-extrabold tracking-tight text-slate-900">{value}</div>
        <div className="mt-1 text-xs font-semibold text-slate-500">{label}</div>
    </div>
);

const OfferTile = ({ item }: { item: OfferCard }) => (
    <div className="group rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5">
        <div className={cx("mb-2 grid h-10 w-10 place-items-center rounded-lg", item.iconBg)}>
            {item.icon}
        </div>
        <p className="text-sm leading-6 text-slate-600">{item.text}</p>
    </div>
);

const ServiceRow = ({ s }: { s: ServiceCard }) => (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
            {/* image */}
            <div className="relative">
                <img
                    src={s.image}
                    alt={s.title}
                    className="h-44 w-full object-cover md:h-full md:min-h-[140px]"
                    draggable={false}
                />
                <div className="absolute left-3 top-3 flex items-center gap-2">
                    <span
                        className={cx(
                            "inline-flex h-8 w-10 items-center justify-center rounded-md text-xs font-extrabold text-white",
                            s.noBg
                        )}
                    >
                        {s.no}
                    </span>
                    <span className="grid h-8 w-8 place-items-center rounded-md bg-white/90 text-gray-700">
                        {s.cornerIcon}
                    </span>
                </div>
            </div>

            {/* content */}
            <div className="flex flex-col justify-center p-5">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <div className="text-lg font-bold text-slate-900">{s.title}</div>
                        <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                    </div>

                    <button className="hidden shrink-0 items-center gap-1 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-gray-50 md:inline-flex">
                        View <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-gray-50 px-2.5 py-1 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                        Secure & compliant
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-gray-50 px-2.5 py-1 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-indigo-500" />
                        Expert-reviewed
                    </span>
                </div>
            </div>
        </div>
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
    <div className="relative rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex items-start gap-4">
            <div className={cx("grid h-10 w-10 shrink-0 place-items-center rounded-lg text-white", iconBg)}>
                {icon}
            </div>
            <div>
                <div className="text-sm font-semibold text-slate-900">{title}</div>
                <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </div>
        </div>
    </div>
);

export default function ServicesShowcase() {

    const projects = [
        {
            no: "01",
            noBg: "bg-indigo-500",
            title: "1040 & 1040 NR Tax Return Filing",
            description: "Individual and nonresident tax return preparation",
            image: service1,
            cornerIcon: <ClipboardCheck className="h-4 w-4 text-white" />,
        },
        {
            no: "02",
            noBg: "bg-emerald-500",
            title: "Unlimited Tax Consultations",
            description: "Get answers and guidance from tax professionals",
            image: service2,
            cornerIcon: <FileTextFilled className="h-4 w-4 text-white" />,
        },
        {
            no: "03",
            noBg: "bg-purple-500",
            title: "Form 4868 Extension Filing",
            description: "Tax filing deadline extension support",
            image: service3,
            cornerIcon: <UserRoundFilled className="h-4 w-4 text-white" />,
        },
        {
            no: "04",
            noBg: "bg-orange-500",
            title: "ITIN Guidance and Support (Form W-7)",
            description: "Individual Taxpayer Identification Number applications",
            image: service4,
            cornerIcon: <ArrowUpRight className="h-4 w-4 text-white" />,
        },
        {
            no: "05",
            noBg: "bg-rose-500",
            title: "Filed Tax Returns Assessment & Examination",
            description: "Review and assessment of previously filed returns",
            image: service5,
            cornerIcon: <UsersFilled className="h-4 w-4 text-white" />,
        },
        {
            no: "06",
            noBg: "bg-sky-500",
            title: "Professional Tax Planning",
            description: "Strategic tax optimization and planning services",
            image: service6,
            cornerIcon: <ShieldFilled className="h-4 w-4 text-white" />,
        },

    ];


    return (
        <section className="relative w-full overflow-hidden bg-white">

            <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
                {/* TOP: New hero layout */}
                <div className="grid items-center gap-10 lg:grid-cols-12">
                    {/* left */}
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 rounded-full  py-1.5 text-xs font-semibold text-slate-800">
                            WHAT WE OFFER
                        </div>

                        <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] tracking-tight text-slate-900 md:text-5xl">
                            Clear guidance. <br />
                            Confident filing. <br />
                            A
                            <span className="text-indigo-600"> Modern Tax Team.</span>
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


                    </div>

                    {/* right (animation in a framed card) */}
                    <div className="lg:col-span-5">
                        <div className="relative overflow-hidden rounded-lg   ">
                            <div className="relative flex items-center justify-center">
                                <LionStrokeAnimation />
                            </div>
                        </div>
                    </div>
                </div>







                {/* OUR SERVICES */}
                <div className="mt-14 text-center md:mt-16">
                    <div className="mx-auto inline-flex items-center  py-1.5 text-xs font-semibold text-slate-800">

                        OUR SERVICES
                    </div>

                    <h3 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                        Professional Tax{" "}
                        <span className="text-indigo-600">Services</span>
                    </h3>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                        A full menu of tax solutions—built for individuals, nonresidents, and growing businesses.
                    </p>
                </div>




                <HoverEffect items={projects} />







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
                            iconBg="bg-rose-500"
                            icon={<UsersFilled className="h-4 w-4" />}
                            title="Expert Guidance"
                            desc="We help you claim eligible deductions and avoid common mistakes—without confusion."
                        />
                        <MiniStep
                            iconBg="bg-emerald-500"
                            icon={<ZapFilled className="h-4 w-4" />}
                            title="Fast Turnaround"
                            desc="Efficient workflows to prepare and submit returns quickly—so you stay ahead of deadlines."
                        />
                        <MiniStep
                            iconBg="bg-indigo-500"
                            icon={<ShieldFilled className="h-4 w-4" />}
                            title="Trusted Outcomes"
                            desc="Built on accuracy, compliance, and secure handling of sensitive information."
                        />
                    </div>

                    <div className="mx-auto mt-10 h-1 w-24 rounded-full bg-indigo-500" />
                </div>
            </div>
        </section>
    );
}

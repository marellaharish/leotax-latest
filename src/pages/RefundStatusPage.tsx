import React from "react";
import {
    ArrowRight,
    BadgeInfo,
    CalendarDays,
    Clock3,
    FileText,
    HelpCircle,
    MessageSquare,
    ShieldCheck,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

const StatPill = ({ label }: { label: string }) => (
    <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-[11px] font-extrabold text-white shadow-sm">
        {label}
    </span>
);

const MiniStat = ({ label, value }: { label: string; value: string }) => (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
        <div className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            {label}
        </div>
        <div className="mt-1 text-sm font-extrabold text-slate-900">{value}</div>
    </div>
);

const BigCard = ({
    badge,
    title,
    subtitleLink,
    desc,
    icon,
    stat1,
    stat2,
    url
}: {
    badge: string;
    title: string;
    subtitleLink: string;
    desc: string;
    icon: React.ReactNode;
    stat1: { label: string; value: string };
    stat2: { label: string; value: string };
    url: string;
}) => {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_90px_-70px_rgba(2,6,23,0.35)]">
            {/* soft inner glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_15%_10%,rgba(59,130,246,0.12)_0%,rgba(59,130,246,0)_60%)] opacity-90" />

            <div className="relative p-7 md:p-8">
                <div className="flex items-start justify-between gap-6">
                    <div className="grid h-16 w-16 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                        {icon}
                    </div>
                    <StatPill label={badge} />
                </div>

                <h3 className="mt-6 text-xl font-extrabold tracking-tight text-slate-900 md:text-2xl">
                    {title}
                </h3>

                <a href="#" className="mt-2 inline-block text-xs font-extrabold text-blue-600 hover:underline">
                    {subtitleLink}
                </a>

                <p className="mt-4 text-sm leading-7 text-slate-600">{desc}</p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                    <MiniStat label={stat1.label} value={stat1.value} />
                    <MiniStat label={stat2.label} value={stat2.value} />
                </div>

                <div className="mt-7 flex items-center justify-between">
                    <a
                        href="#"
                        className="text-sm font-extrabold text-blue-600 hover:underline"
                    >
                        Check Status Now
                    </a>

                    <button
                        type="button"
                        className="grid h-11 w-11 place-items-center rounded-full bg-slate-100 text-slate-700 shadow-sm transition group-hover:bg-blue-600 group-hover:text-white"
                        aria-label="Go"
                        onClick={() => { window.location.href = url; }}
                    >
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* bottom blue accent line */}
            <div className="h-[5px] w-full bg-blue-600" />
        </div>
    );
};

const InfoRow = ({ text }: { text: string }) => (
    <div className="flex items-start gap-3">
        <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-slate-100 text-slate-600">
            <ShieldCheck className="h-3.5 w-3.5" />
        </span>
        <p className="text-sm leading-7 text-slate-600">{text}</p>
    </div>
);

const SmallCard = ({
    icon,
    title,
    desc,
}: {
    icon: React.ReactNode;
    title: string;
    desc: string;
}) => (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_25px_70px_-60px_rgba(2,6,23,0.25)] hover:shadow-[0_35px_90px_-70px_rgba(2,6,23,0.35)] transition">
        <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-slate-700">
            {icon}
        </div>
        <div className="text-sm font-extrabold text-slate-900">{title}</div>
        <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
    </div>
);

export default function RefundStatusPage() {
    return (
        <Layout>
            <div className="min-h-screen bg-[#f7f9ff]">
                {/* header */}
                <div className="border-b border-slate-200 bg-white">
                    <div className="mx-auto max-w-6xl px-4 py-10 text-center">
                        <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                            <FileText className="h-5 w-5" />
                        </div>

                        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                            Track Your Tax Refund
                        </h1>
                        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                            Check the status of your federal and state tax refunds quickly and securely
                        </p>
                    </div>
                </div>

                {/* body */}
                <main className="mx-auto max-w-6xl px-4 py-10 md:py-12">
                    {/* big cards */}
                    <div className="grid gap-6 md:grid-cols-2">
                        <BigCard
                            badge="IRS"
                            title="Federal Refund Status"
                            subtitleLink="Check your IRS federal tax refund"
                            desc="Track your federal tax return and see when you can expect your refund from the IRS"
                            icon={<Clock3 className="h-7 w-7" />}
                            stat1={{ label: "Processing Time", value: "21 days" }}
                            stat2={{ label: "E-file Returns", value: "Faster" }}
                            url="/refund-status/federal-refunds"
                        />

                        <BigCard
                            badge="State"
                            title="State Refund Status"
                            subtitleLink="Check your state tax refund"
                            desc="Monitor your state tax return status and estimated refund timeline lorem ipsum dolor sit amet consectetur adipiscing."
                            icon={<FileText className="h-7 w-7" />}
                            stat1={{ label: "Varies by State", value: "Check yours" }}
                            stat2={{ label: "Average Time", value: "2-4 weeks" }}
                            url="/refund-status/state-refunds"
                        />
                    </div>

                    {/* info box */}
                    <div className="mt-8 rounded-2xl border border-slate-200 bg-white shadow-[0_25px_70px_-60px_rgba(2,6,23,0.25)]">
                        <div className="flex gap-4 p-6 md:p-7">
                            <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                                <BadgeInfo className="h-5 w-5" />
                            </div>

                            <div className="w-full">
                                <div className="text-sm font-extrabold text-slate-900">
                                    Important Information
                                </div>

                                <div className="mt-4 grid gap-3">
                                    <InfoRow text="Federal refunds are typically processed within 21 days of e-filing your return" />
                                    <InfoRow text="State refund processing times vary by state - check your specific state's timeline" />
                                    <InfoRow text="You'll need your Social Security Number, filing status, and exact refund amount to track your status" />
                                    <InfoRow text="Direct deposit refunds arrive faster than paper checks sent by mail" />
                                </div>
                            </div>
                        </div>

                        {/* left blue accent like screenshot */}
                        <div className="h-full w-1 bg-blue-600" />
                    </div>

                    {/* bottom small cards */}
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        <SmallCard
                            icon={<MessageSquare className="h-5 w-5" />}
                            title="Need Help?"
                            desc="Contact our support team for assistance with your refund status"
                        />
                        <SmallCard
                            icon={<HelpCircle className="h-5 w-5" />}
                            title="FAQs"
                            desc="Find answers to common questions about tax refunds"
                        />
                        <SmallCard
                            icon={<CalendarDays className="h-5 w-5" />}
                            title="Track Timeline"
                            desc="View estimated processing times and refund schedules"
                        />
                    </div>
                </main>
            </div>
        </Layout>
    );
}

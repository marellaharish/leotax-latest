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

/* ---------- small components ---------- */

const Pill = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-[11px] font-extrabold text-blue-700 ring-1 ring-blue-100">
        {children}
    </span>
);

const StatChip = ({ label, value }: { label: string; value: string }) => (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
        <div className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            {label}
        </div>
        <div className="mt-1 text-sm font-extrabold text-slate-900">{value}</div>
    </div>
);

const ActionCard = ({
    badge,
    title,
    subtitle,
    desc,
    icon,
    stat1,
    stat2,
    url,
    target,
}: {
    badge: string;
    title: string;
    subtitle: string;
    desc: string;
    icon: React.ReactNode;
    stat1: { label: string; value: string };
    stat2: { label: string; value: string };
    url: string;
    target: "_blank" | "_self";
}) => (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_25px_70px_-55px_rgba(2,6,23,0.25)] hover:shadow-[0_35px_90px_-65px_rgba(2,6,23,0.35)] transition">
        {/* top accent */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-indigo-600" />

        <div className="p-6 md:p-7">
            <div className="flex items-start justify-between gap-6">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                    {icon}
                </div>
                <Pill>{badge}</Pill>
            </div>

            <h3 className="mt-5 text-xl font-extrabold tracking-tight text-slate-900 md:text-2xl">
                {title}
            </h3>

            <p className="mt-2 text-xs font-extrabold text-blue-600">
                {subtitle}
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">{desc}</p>

            <div className="mt-6 grid grid-cols-2 gap-4">
                <StatChip label={stat1.label} value={stat1.value} />
                <StatChip label={stat2.label} value={stat2.value} />
            </div>

            <div className="mt-7 flex items-center justify-between">
                <a
                    href={url}
                    target={target}
                    rel={target === "_blank" ? "noreferrer" : undefined}
                    className="text-sm font-extrabold text-blue-600 hover:underline"
                >
                    Check Status Now
                </a>

                <button
                    className="grid h-11 w-11 place-items-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-blue-600 hover:text-white"
                    aria-label="Go"
                    onClick={() =>
                        target === "_blank"
                            ? window.open(url, "_blank")
                            : (window.location.href = url)
                    }
                >
                    <ArrowRight className="h-5 w-5" />
                </button>
            </div>
        </div>
    </div>
);

const InfoRow = ({ text }: { text: string }) => (
    <div className="flex items-start gap-3">
        <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-100">
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
        <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-slate-100 text-slate-700">
            {icon}
        </div>
        <div className="text-sm font-extrabold text-slate-900">{title}</div>
        <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
    </div>
);

/* ---------- Page ---------- */

export default function RefundStatusPage() {
    return (
        <Layout>
            <div className="min-h-screen bg-[#f7f9ff]">
                {/* Header */}
                <div className="border-b border-slate-200 bg-white">
                    <div className="mx-auto max-w-6xl px-4 py-10 text-center">
                        <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                            <FileText className="h-5 w-5" />
                        </div>

                        <Pill>Refund Tracking</Pill>

                        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                            Track Your Tax Refund
                        </h1>

                        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                            Check the status of your federal and state tax refunds quickly and securely.
                        </p>
                    </div>
                </div>

                {/* Body */}
                <main className="mx-auto max-w-6xl px-4 py-10 md:py-12">
                    <div className="grid gap-6 md:grid-cols-2">
                        <ActionCard
                            badge="IRS"
                            title="Federal Refund Status"
                            subtitle="Check your IRS federal tax refund"
                            desc="Track your federal tax return and see when you can expect your refund from the IRS."
                            icon={<Clock3 className="h-7 w-7" />}
                            stat1={{ label: "Processing Time", value: "Up to 21 days" }}
                            stat2={{ label: "E-file", value: "Faster" }}
                            url="https://www.irs.gov/refunds"
                            target="_blank"
                        />

                        <ActionCard
                            badge="State"
                            title="State Refund Status"
                            subtitle="Check your state tax refund"
                            desc="Monitor your state tax return status and estimated refund timeline."
                            icon={<FileText className="h-7 w-7" />}
                            stat1={{ label: "Varies", value: "By state" }}
                            stat2={{ label: "Average", value: "2–4 weeks" }}
                            url="/refund-status/state-refunds"
                            target="_self"
                        />
                    </div>

                    {/* Info */}
                    <div className="mt-8 rounded-2xl border border-slate-200 bg-white shadow-[0_25px_70px_-60px_rgba(2,6,23,0.25)]">
                        <div className="flex gap-4 p-6 md:p-7">
                            <div className="grid h-11 w-11 place-items-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                                <BadgeInfo className="h-5 w-5" />
                            </div>

                            <div className="w-full">
                                <div className="text-sm font-extrabold text-slate-900">
                                    Important Information
                                </div>

                                <div className="mt-4 grid gap-3">
                                    <InfoRow text="Federal refunds are typically processed within 21 days of e-filing." />
                                    <InfoRow text="State refund processing times vary by state." />
                                    <InfoRow text="Keep your SSN, filing status, and exact refund amount ready." />
                                    <InfoRow text="Direct deposit refunds arrive faster than paper checks." />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom cards */}
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        <SmallCard
                            icon={<MessageSquare className="h-5 w-5" />}
                            title="Need Help?"
                            desc="Contact our support team for assistance with your refund status."
                        />
                        <SmallCard
                            icon={<HelpCircle className="h-5 w-5" />}
                            title="FAQs"
                            desc="Find answers to common questions about tax refunds."
                        />
                        <SmallCard
                            icon={<CalendarDays className="h-5 w-5" />}
                            title="Track Timeline"
                            desc="View estimated processing times and refund schedules."
                        />
                    </div>
                </main>
            </div>
        </Layout>
    );
}

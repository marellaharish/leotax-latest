// src/components/services/ServiceHeroForm4868.tsx
import React from "react";
import {
    ArrowUpRight,
    CalendarClock,
    ClipboardCheck,
    FileText,
    ShieldCheck,
    Timer,
    Phone,
    MessageCircle,
    BadgeCheck,
} from "lucide-react";
import { IconCircleHalfVertical } from "@tabler/icons-react";

type Step = {
    title: string;
    desc: string;
    icon: React.ReactNode;
};

const STEPS: Step[] = [
    {
        title: "Quick Eligibility Check",
        desc: "We confirm your filing situation and deadline requirements for an extension.",
        icon: <BadgeCheck className="h-5 w-5" />,
    },
    {
        title: "Prepare Form 4868",
        desc: "Accurate extension request with the right details and best-practice filing steps.",
        icon: <FileText className="h-5 w-5" />,
    },
    {
        title: "Payment Guidance (if needed)",
        desc: "If taxes are due, we guide you on paying to reduce penalties and interest.",
        icon: <ClipboardCheck className="h-5 w-5" />,
    },
    {
        title: "Confirmation & Next Steps",
        desc: "Get confirmation, timeline reminders, and a clean checklist for your final filing.",
        icon: <CalendarClock className="h-5 w-5" />,
    },
];

export default function ServiceHeroForm4868() {
    return (
        <section className="relative w-full overflow-hidden bg-white">
            {/* background gradients to match your newer UI */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_15%_10%,rgba(59,130,246,0.16)_0%,rgba(59,130,246,0)_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_85%_45%,rgba(16,185,129,0.14)_0%,rgba(16,185,129,0)_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_55%_95%,rgba(99,102,241,0.10)_0%,rgba(99,102,241,0)_60%)]" />

            <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
                <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
                    {/* LEFT */}
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[11px] font-extrabold text-slate-700 ring-1 ring-slate-200 backdrop-blur">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                            Deadline Protection
                        </div>

                        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                            Form 4868{" "}
                            <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">
                                Extension Filing
                            </span>
                        </h1>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 md:text-[15px]">
                            Need more time to file? We help you submit Form 4868 correctly, provide payment
                            guidance if taxes are due, and give you a clean checklist for the final return.
                        </p>

                        {/* mini highlight stats */}
                        <div className="mt-6 grid gap-3 sm:grid-cols-3">
                            <div className="rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-[0_18px_60px_-55px_rgba(2,6,23,0.25)]">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                                    <Timer className="h-4 w-4 text-indigo-600" />
                                    Turnaround
                                </div>
                                <div className="mt-2 text-sm font-extrabold text-slate-900">Same-day help</div>
                                <div className="mt-1 text-xs text-slate-600">Fast preparation</div>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-[0_18px_60px_-55px_rgba(2,6,23,0.25)]">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                                    Security
                                </div>
                                <div className="mt-2 text-sm font-extrabold text-slate-900">Secure flow</div>
                                <div className="mt-1 text-xs text-slate-600">Private handling</div>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-[0_18px_60px_-55px_rgba(2,6,23,0.25)]">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                                    <ClipboardCheck className="h-4 w-4 text-indigo-600" />
                                    Checklist
                                </div>
                                <div className="mt-2 text-sm font-extrabold text-slate-900">Clear steps</div>
                                <div className="mt-1 text-xs text-slate-600">No confusion</div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-7 flex flex-wrap items-center gap-3">
                            <a
                                href="/auth/signup"
                                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-extrabold text-white shadow-[0_16px_35px_-22px_rgba(79,70,229,0.75)] hover:brightness-110"
                            >
                                File Extension
                                <ArrowUpRight className="h-4 w-4" />
                            </a>

                            <a
                                href="tel:+13202245557"
                                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                            >
                                <Phone className="h-4 w-4 text-slate-600" />
                                Call Now
                            </a>

                            <a
                                href="https://wa.me/13202245557"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-5 text-sm font-extrabold text-emerald-700 hover:bg-emerald-100"
                            >
                                <MessageCircle className="h-4 w-4" />
                                WhatsApp
                            </a>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                Extension request support
                            </div>
                            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                                <span className="h-2 w-2 rounded-full bg-indigo-600" />
                                Payment guidance
                            </div>
                            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                                <span className="h-2 w-2 rounded-full bg-slate-900" />
                                Next-step checklist
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: timeline / process cards (different UI than old) */}
                    <div className="relative">
                        <div className="pointer-events-none absolute -inset-7 rounded-[40px] bg-gradient-to-br from-indigo-500/18 via-blue-500/10 to-emerald-500/16 blur-2xl" />

                        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_50px_140px_-95px_rgba(2,6,23,0.70)]">
                            <div className="border-b border-slate-200 bg-white px-6 py-5">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                                            <CalendarClock className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-extrabold text-slate-900">
                                                Extension Workflow
                                            </div>
                                            <div className="text-xs font-semibold text-slate-500">
                                                Simple + guided steps
                                            </div>
                                        </div>
                                    </div>

                                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-extrabold text-emerald-700 ring-1 ring-emerald-100">
                                        Supported
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="grid gap-4">
                                    {STEPS.map((s, idx) => (
                                        <div
                                            key={s.title}
                                            className="rounded-2xl border border-slate-200 bg-white p-4"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="mt-0.5 grid h-10 w-10 place-items-center rounded-2xl bg-slate-100 text-slate-700 ring-1 ring-slate-200">
                                                    {s.icon}
                                                </div>

                                                <div className="min-w-0">
                                                    <div className="flex items-center justify-between gap-3">
                                                        <div className="text-sm font-extrabold text-slate-900">
                                                            {idx + 1}. {s.title}
                                                        </div>
                                                        <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-bold text-slate-600 ring-1 ring-slate-200">
                                                            Step {idx + 1}
                                                        </span>
                                                    </div>

                                                    <div className="mt-1 text-sm leading-6 text-slate-600">
                                                        {s.desc}
                                                    </div>

                                                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                                                        <div
                                                            className="h-full rounded-full bg-indigo-500"
                                                            style={{ width: `${(idx + 1) * 22}%` }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* warning card */}
                                <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5 grid h-10 w-10 place-items-center rounded-2xl bg-amber-100 text-amber-700 ring-1 ring-amber-200">
                                            <IconCircleHalfVertical className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-extrabold text-amber-900">
                                                Important Note
                                            </div>
                                            <div className="mt-1 text-sm leading-6 text-amber-800">
                                                An extension gives you more time to file, not more time to pay. If taxes are
                                                due, paying early can reduce penalties and interest.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* bottom accent bar */}
                            <div className="h-[5px] w-full bg-gradient-to-r from-indigo-600 via-blue-600 to-emerald-600" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

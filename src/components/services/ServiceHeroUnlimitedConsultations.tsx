// src/components/services/ServiceHeroUnlimitedConsultations.tsx
import React from "react";
import {
    ArrowUpRight,
    MessageSquareText,
    Users,
    Clock,
    ShieldCheck,
    Phone,
    MessageCircle,
    Sparkles,
} from "lucide-react";

type Benefit = {
    title: string;
    desc: string;
    icon: React.ReactNode;
};

const BENEFITS: Benefit[] = [
    {
        title: "Unlimited Questions",
        desc: "Ask as many tax-related questions as you want throughout the year.",
        icon: <MessageSquareText className="h-5 w-5" />,
    },
    {
        title: "Expert-Led Guidance",
        desc: "Consult directly with experienced tax professionals for clarity and confidence.",
        icon: <Users className="h-5 w-5" />,
    },
    {
        title: "Fast Responses",
        desc: "Get timely answers without waiting days for clarification.",
        icon: <Clock className="h-5 w-5" />,
    },
    {
        title: "Reliable & Secure",
        desc: "Your conversations and documents are handled with care and confidentiality.",
        icon: <ShieldCheck className="h-5 w-5" />,
    },
];

export default function ServiceHeroUnlimitedConsultations() {
    return (
        <section className="relative w-full overflow-hidden bg-white">
            {/* Background gradients */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_15%_10%,rgba(99,102,241,0.18)_0%,rgba(99,102,241,0)_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_85%_40%,rgba(16,185,129,0.14)_0%,rgba(16,185,129,0)_60%)]" />

            <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
                <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
                    {/* LEFT CONTENT */}
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[11px] font-extrabold text-slate-700 ring-1 ring-slate-200 backdrop-blur">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                            Ongoing Tax Support
                        </div>

                        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                            Unlimited{" "}
                            <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">
                                Tax Consultations
                            </span>
                        </h1>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 md:text-[15px]">
                            Never feel stuck with tax questions again. Get continuous access to tax professionals
                            who help you understand filings, notices, planning decisions, and next steps —
                            without limits.
                        </p>

                        {/* BENEFITS GRID */}
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {BENEFITS.map((b) => (
                                <div
                                    key={b.title}
                                    className="rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-[0_18px_60px_-55px_rgba(2,6,23,0.25)]"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5 grid h-10 w-10 place-items-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                                            {b.icon}
                                        </div>
                                        <div>
                                            <div className="text-sm font-extrabold text-slate-900">
                                                {b.title}
                                            </div>
                                            <div className="mt-1 text-sm leading-6 text-slate-600">
                                                {b.desc}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-7 flex flex-wrap items-center gap-3">
                            <a
                                href="/signup"
                                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-extrabold text-white shadow-[0_16px_35px_-22px_rgba(79,70,229,0.75)] hover:brightness-110"
                            >
                                Start Consulting
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

                        {/* TRUST BULLETS */}
                        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                No consultation limits
                            </div>
                            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                                <span className="h-2 w-2 rounded-full bg-indigo-600" />
                                Professional responses
                            </div>
                            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                                <span className="h-2 w-2 rounded-full bg-slate-900" />
                                Peace of mind
                            </div>
                        </div>
                    </div>

                    {/* RIGHT VISUAL – CONCEPT CARD */}
                    <div className="relative">
                        <div className="pointer-events-none absolute -inset-7 rounded-[40px] bg-gradient-to-br from-indigo-500/18 via-blue-500/10 to-emerald-500/16 blur-2xl" />

                        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_50px_140px_-95px_rgba(2,6,23,0.70)]">
                            <div className="p-6">
                                <div className="flex items-center gap-3">
                                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                                        <Sparkles className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-extrabold text-slate-900">
                                            Always-On Support
                                        </div>
                                        <div className="text-xs font-semibold text-slate-500">
                                            Year-round consultation access
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 space-y-4">
                                    {[
                                        "Clarify filing requirements",
                                        "Understand IRS or state notices",
                                        "Plan upcoming tax decisions",
                                        "Avoid costly mistakes",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                                        >
                                            <ShieldCheck className="h-4 w-4 text-emerald-600" />
                                            <span className="text-sm font-semibold text-slate-700">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom accent */}
                            <div className="h-[5px] w-full bg-gradient-to-r from-indigo-600 via-blue-600 to-emerald-600" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

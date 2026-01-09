import React from "react";
import {
    BadgeCheck,
    FileText,
    ShieldCheck,
    Sparkles,
    Timer,
    ArrowUpRight,
    Phone,
    MessageCircle,
} from "lucide-react";

type Feature = {
    title: string;
    desc: string;
    icon: React.ReactNode;
};

const FEATURES: Feature[] = [
    {
        title: "Resident & Non-Resident",
        desc: "We handle both Form 1040 and 1040-NR filings based on your residency status.",
        icon: <FileText className="h-5 w-5" />,
    },
    {
        title: "Accuracy + Optimization",
        desc: "Careful review to reduce errors while optimizing refund opportunities.",
        icon: <Sparkles className="h-5 w-5" />,
    },
    {
        title: "Secure Document Flow",
        desc: "Share documents safely with clear checklists and guided steps.",
        icon: <ShieldCheck className="h-5 w-5" />,
    },
    {
        title: "Fast Turnaround",
        desc: "Efficient intake and quick processing with professional support.",
        icon: <Timer className="h-5 w-5" />,
    },
];

const Bullet = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        {children}
    </div>
);

export default function ServiceHeroModern1040() {
    return (
        <section className="relative w-full overflow-hidden bg-white">
            {/* modern gradients (matches your newer sections) */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_18%_10%,rgba(59,130,246,0.18)_0%,rgba(59,130,246,0)_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_55%_at_88%_70%,rgba(16,185,129,0.14)_0%,rgba(16,185,129,0)_62%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_55%_at_60%_95%,rgba(99,102,241,0.10)_0%,rgba(99,102,241,0)_60%)]" />

            <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
                <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
                    {/* Left content */}
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[11px] font-extrabold text-slate-700 ring-1 ring-slate-200 backdrop-blur">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                            Professional Tax Filing
                        </div>

                        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                            1040 & 1040-NR{" "}
                            <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">
                                Filing Service
                            </span>
                        </h1>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 md:text-[15px]">
                            Get a guided, secure, and professional filing experience—whether you’re a U.S.
                            resident or non-resident. Clear checklists, expert review, and faster turnaround.
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <a
                                href="/auth/signup"
                                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-extrabold text-white shadow-[0_16px_35px_-22px_rgba(79,70,229,0.75)] hover:brightness-110"
                            >
                                Start Filing
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
                            <Bullet>IRS-ready filing</Bullet>
                            <Bullet>Licensed professionals</Bullet>
                            <Bullet>Secure document handling</Bullet>
                        </div>
                    </div>

                    {/* Right visual: modern “steps card” instead of old form mock */}
                    <div className="relative">
                        <div className="pointer-events-none absolute -inset-6 rounded-[36px] bg-gradient-to-br from-indigo-500/15 via-blue-500/10 to-emerald-500/15 blur-2xl" />

                        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_45px_120px_-90px_rgba(2,6,23,0.65)]">
                            <div className="border-b border-slate-200 bg-white px-6 py-5">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                                            <BadgeCheck className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-extrabold text-slate-900">
                                                Filing Checklist
                                            </div>
                                            <div className="text-xs font-semibold text-slate-500">
                                                Simple steps, clear progress
                                            </div>
                                        </div>
                                    </div>

                                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-extrabold text-emerald-700 ring-1 ring-emerald-100">
                                        Verified Flow
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="grid gap-4">
                                    {[
                                        {
                                            title: "Upload documents",
                                            desc: "W-2 / 1099 / 1042-S, passport/visa, prior returns (if any)",
                                            done: true,
                                        },
                                        {
                                            title: "Residency & forms review",
                                            desc: "We confirm 1040 vs 1040-NR and required schedules",
                                            done: true,
                                        },
                                        {
                                            title: "Preparation & optimization",
                                            desc: "Deductions/credits and refund estimation where applicable",
                                            done: false,
                                        },
                                        {
                                            title: "E-file / submission",
                                            desc: "Final approval + secure submission instructions",
                                            done: false,
                                        },
                                    ].map((s) => (
                                        <div
                                            key={s.title}
                                            className="rounded-2xl border border-slate-200 bg-white p-4"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div
                                                    className={`mt-0.5 grid h-8 w-8 place-items-center rounded-xl ring-1 ${s.done
                                                        ? "bg-emerald-50 text-emerald-700 ring-emerald-100"
                                                        : "bg-slate-100 text-slate-700 ring-slate-200"
                                                        }`}
                                                >
                                                    {s.done ? (
                                                        <ShieldCheck className="h-4 w-4" />
                                                    ) : (
                                                        <FileText className="h-4 w-4" />
                                                    )}
                                                </div>

                                                <div className="min-w-0">
                                                    <div className="text-sm font-extrabold text-slate-900">
                                                        {s.title}
                                                    </div>
                                                    <div className="mt-1 text-sm leading-6 text-slate-600">
                                                        {s.desc}
                                                    </div>

                                                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                                                        <div
                                                            className={`h-full rounded-full ${s.done
                                                                ? "w-[100%] bg-emerald-500"
                                                                : "w-[45%] bg-indigo-500"
                                                                }`}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 grid grid-cols-2 gap-4">
                                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                                        <div className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                                            Typical processing
                                        </div>
                                        <div className="mt-1 text-sm font-extrabold text-slate-900">
                                            2–5 business days
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                                        <div className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                                            Support
                                        </div>
                                        <div className="mt-1 text-sm font-extrabold text-slate-900">
                                            CPA / EA guided
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* subtle bottom accent */}
                            <div className="h-[5px] w-full bg-gradient-to-r from-indigo-600 via-blue-600 to-emerald-600" />
                        </div>
                    </div>
                </div>

                {/* Features grid */}
                <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-4">
                    {FEATURES.map((f) => (
                        <div
                            key={f.title}
                            className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-[0_25px_70px_-60px_rgba(2,6,23,0.25)] backdrop-blur"
                        >
                            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-100 text-slate-700">
                                {f.icon}
                            </div>
                            <div className="mt-4 text-sm font-extrabold text-slate-900">{f.title}</div>
                            <p className="mt-2 text-sm leading-7 text-slate-600">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

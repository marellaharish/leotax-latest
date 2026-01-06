// src/components/services/ServiceHeroFbarFatca.tsx
import React from "react";
import {
    ArrowUpRight,
    BadgeCheck,
    FileText,
    Globe,
    ShieldCheck,
    Phone,
    MessageCircle,
    ShieldCheckIcon,
} from "lucide-react";

type Card = {
    title: string;
    desc: string;
    icon: React.ReactNode;
    tone?: "default" | "danger";
};

const CARDS: Card[] = [
    {
        title: "FBAR (FinCEN 114)",
        desc: "Guidance for U.S. persons with foreign financial accounts that may trigger FBAR reporting thresholds.",
        icon: <Globe className="h-5 w-5" />,
    },
    {
        title: "FATCA (Form 8938)",
        desc: "Support for foreign financial asset reporting requirements and accurate form preparation.",
        icon: <FileText className="h-5 w-5" />,
    },
    {
        title: "Avoid Costly Penalties",
        desc: "Non-compliance can lead to serious penalties. We help you file correctly and stay compliant.",
        icon: <ShieldCheckIcon className="h-5 w-5" />,
        tone: "danger",
    },
];

export default function ServiceHeroFbarFatca() {
    return (
        <section className="relative w-full overflow-hidden bg-white">
            {/* background gradients (match your new site aesthetic) */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_15%_15%,rgba(59,130,246,0.16)_0%,rgba(59,130,246,0)_62%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_90%_35%,rgba(16,185,129,0.14)_0%,rgba(16,185,129,0)_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_60%_95%,rgba(99,102,241,0.10)_0%,rgba(99,102,241,0)_60%)]" />

            <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
                <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
                    {/* Left */}
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[11px] font-extrabold text-slate-700 ring-1 ring-slate-200 backdrop-blur">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                            International Compliance
                        </div>

                        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                            FBAR & FATCA{" "}
                            <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">
                                Filing
                            </span>
                        </h1>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 md:text-[15px]">
                            Stay compliant with foreign account reporting. We help you prepare required forms,
                            avoid common errors, and keep your filings organized and secure.
                        </p>

                        {/* cards */}
                        <div className="mt-6 grid gap-3">
                            {CARDS.map((c) => (
                                <div
                                    key={c.title}
                                    className={`rounded-2xl border p-4 shadow-[0_18px_60px_-55px_rgba(2,6,23,0.25)] ${c.tone === "danger"
                                        ? "border-rose-200 bg-rose-50"
                                        : "border-slate-200 bg-white/80"
                                        }`}
                                >
                                    <div className="flex items-start gap-3">
                                        <div
                                            className={`mt-0.5 grid h-10 w-10 place-items-center rounded-2xl ring-1 ${c.tone === "danger"
                                                ? "bg-rose-100 text-rose-700 ring-rose-200"
                                                : "bg-indigo-50 text-indigo-600 ring-indigo-100"
                                                }`}
                                        >
                                            {c.icon}
                                        </div>

                                        <div>
                                            <div
                                                className={`text-sm font-extrabold ${c.tone === "danger" ? "text-rose-800" : "text-slate-900"
                                                    }`}
                                            >
                                                {c.title}
                                            </div>
                                            <div
                                                className={`mt-1 text-sm leading-6 ${c.tone === "danger" ? "text-rose-700" : "text-slate-600"
                                                    }`}
                                            >
                                                {c.desc}
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
                                Start Compliance
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
                                Secure document handling
                            </div>
                            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                                <span className="h-2 w-2 rounded-full bg-indigo-600" />
                                Expert guidance
                            </div>
                            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                                <span className="h-2 w-2 rounded-full bg-slate-900" />
                                Clear checklist
                            </div>
                        </div>
                    </div>

                    {/* Right visual (new style: stacked image + info glass cards) */}
                    <div className="relative">
                        <div className="pointer-events-none absolute -inset-7 rounded-[40px] bg-gradient-to-br from-indigo-500/18 via-blue-500/10 to-emerald-500/16 blur-2xl" />

                        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_50px_140px_-95px_rgba(2,6,23,0.70)]">
                            {/* top badge */}
                            <div className="absolute left-5 top-5 z-10 rounded-full bg-white/90 px-4 py-2 text-xs font-extrabold text-slate-800 ring-1 ring-slate-200 backdrop-blur">
                                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />
                                Expert Tax Professional
                            </div>

                            {/* decorative blob */}
                            <div className="pointer-events-none absolute right-5 top-5 h-12 w-12 rounded-full bg-indigo-200/60" />

                            {/* image */}
                            <img
                                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=80"
                                alt="Tax documents and calculator"
                                className="h-[360px] w-full object-cover md:h-[420px]"
                                loading="lazy"
                            />

                            {/* bottom glass info */}
                            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/92 p-4 ring-1 ring-slate-200 backdrop-blur">
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 grid h-10 w-10 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                                        <BadgeCheck className="h-5 w-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-sm font-extrabold text-slate-100">
                                            Compliance integrated with your filing
                                        </div>
                                        <div className="mt-1 text-sm leading-6 text-white">
                                            We align FBAR/FATCA reporting with your annual tax filing so nothing is missed.
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3 flex flex-wrap gap-3">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                                        <ShieldCheck className="h-4 w-4 text-slate-600" />
                                        Secure handling
                                    </div>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                                        <FileText className="h-4 w-4 text-slate-600" />
                                        Form guidance
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

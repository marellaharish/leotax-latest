import React from "react";
import {
    ShieldCheck,
    Globe2,
    BadgeCheck,
    Lock,
    HeartHandshake,
    Sparkles,
    ArrowRight,
    FileText,
    ClipboardCheck,
    MessagesSquare,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

type Stat = { label: string; value: string; hint?: string };
type ValueCard = { icon: React.ReactNode; title: string; desc: string };
type Step = { icon: React.ReactNode; title: string; desc: string };

const stats: Stat[] = [
    { label: "Clients supported", value: "14K+", hint: "International community" },
    { label: "Avg. turnaround", value: "24–48h", hint: "For most filings" },
    { label: "Secure handling", value: "256-bit", hint: "Encrypted at rest & transit" },
    { label: "Support", value: "7 days", hint: "Season-ready coverage" },
];

const values: ValueCard[] = [
    {
        icon: <Sparkles className="h-5 w-5" />,
        title: "Clarity, not jargon",
        desc: "We explain what matters in plain language so you always know what’s happening and why.",
    },
    {
        icon: <BadgeCheck className="h-5 w-5" />,
        title: "Specialized expertise",
        desc: "International tax scenarios need precision. We focus on non-residents, visa holders, and new residents.",
    },
    {
        icon: <Lock className="h-5 w-5" />,
        title: "Privacy-first",
        desc: "Your documents are handled with strict access controls, audit trails, and secure storage practices.",
    },
    {
        icon: <HeartHandshake className="h-5 w-5" />,
        title: "Real support",
        desc: "No endless ticket loops. You get human support with fast responses and clear next steps.",
    },
];

const steps: Step[] = [
    {
        icon: <FileText className="h-5 w-5" />,
        title: "Share your documents",
        desc: "Upload W-2/1042-S, passport/visa details, and prior year info securely.",
    },
    {
        icon: <ClipboardCheck className="h-5 w-5" />,
        title: "We review & prepare",
        desc: "We validate residency rules, treaty positions, and deductions for accuracy.",
    },
    {
        icon: <MessagesSquare className="h-5 w-5" />,
        title: "Confirm & file",
        desc: "You review a clear summary, then we finalize filing with guidance on next steps.",
    },
];

function cn(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}

export default function AboutUs() {
    return (
        <Layout>
            <div className="min-h-screen bg-white text-slate-900">
                {/* Top glow / background */}
                <div className="relative overflow-hidden">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -top-48 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-200 via-blue-200 to-indigo-200 blur-3xl opacity-60" />
                        <div className="absolute -bottom-24 right-[-120px] h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-blue-100 to-sky-200 blur-3xl opacity-60" />
                    </div>

                    {/* Container */}
                    <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-10 sm:px-6 lg:px-8">
                        {/* Hero */}
                        <div className="grid items-center gap-10 lg:grid-cols-2">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-sm text-slate-700 backdrop-blur">
                                    <Globe2 className="h-4 w-4 text-blue-600" />
                                    Built for the international community in the U.S.
                                </div>

                                <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                                    About{" "}
                                    <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                                        Leo Tax Filing
                                    </span>
                                </h1>

                                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                                    We help non-residents, visa holders, and new residents file U.S. taxes with confidence.
                                    Clear guidance, accurate preparation, and secure handling—end to end.
                                </p>

                                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                                    <a
                                        href="#get-started"
                                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >
                                        Get Started
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                    <a
                                        href="#security"
                                        className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-800 backdrop-blur transition hover:bg-white"
                                    >
                                        Our security standards
                                    </a>
                                </div>

                                {/* Trust row */}
                                <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                                    <span className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/70 px-3 py-2 backdrop-blur">
                                        <ShieldCheck className="h-4 w-4 text-blue-600" />
                                        Secure document handling
                                    </span>
                                    <span className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/70 px-3 py-2 backdrop-blur">
                                        <BadgeCheck className="h-4 w-4 text-blue-600" />
                                        Specialized international focus
                                    </span>
                                </div>
                            </div>

                            {/* Hero Card */}
                            <div className="relative">
                                <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900">Why people choose us</p>
                                            <p className="mt-1 text-sm text-slate-600">
                                                A streamlined experience designed for real life—busy schedules, complex rules, and deadlines.
                                            </p>
                                        </div>
                                        <div className="rounded-2xl bg-blue-50 px-3 py-2 text-right">
                                            <p className="text-xs font-semibold text-blue-700">Trusted by</p>
                                            <p className="text-lg font-bold text-blue-700">14K+</p>
                                        </div>
                                    </div>

                                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                        {stats.map((s) => (
                                            <div
                                                key={s.label}
                                                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                                            >
                                                <p className="text-xs font-medium text-slate-500">{s.label}</p>
                                                <p className="mt-1 text-2xl font-semibold text-slate-900">{s.value}</p>
                                                {s.hint && <p className="mt-1 text-xs text-slate-500">{s.hint}</p>}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50 p-4">
                                        <p className="text-sm font-semibold text-slate-900">What you’ll get</p>
                                        <ul className="mt-2 space-y-2 text-sm text-slate-600">
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                                                Clear checklist + filing summary (no confusion)
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                                                International considerations handled carefully (treaties/residency rules)
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                                                Secure document handling with privacy-first access controls
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Floating accent */}
                                <div className="pointer-events-none absolute -right-4 -bottom-6 hidden h-20 w-20 rounded-3xl bg-gradient-to-br from-blue-600 to-sky-500 opacity-20 blur-lg sm:block" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission */}
                <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                        <div>
                            <p className="text-sm font-semibold text-blue-700">Our mission</p>
                            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                                Make U.S. tax compliance feel simple.
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-slate-600">
                                International filing can be confusing—residency tests, treaties, multiple forms, timelines.
                                We built Grow Tax Filing to deliver a calm, guided experience with accurate outcomes.
                            </p>
                            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                                    <p className="text-sm font-semibold text-slate-900">Accuracy-first</p>
                                    <p className="mt-1 text-sm text-slate-600">
                                        We prioritize correct filing positions and clean documentation.
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                                    <p className="text-sm font-semibold text-slate-900">Guided experience</p>
                                    <p className="mt-1 text-sm text-slate-600">
                                        Step-by-step workflow so you always know what’s next.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-semibold text-slate-900">How it works</p>
                                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                                    Fast • Clear • Secure
                                </span>
                            </div>

                            <div className="mt-5 space-y-4">
                                {steps.map((step, idx) => (
                                    <div
                                        key={step.title}
                                        className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:shadow-md"
                                    >
                                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                                            {step.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <p className="text-sm font-semibold text-slate-900">
                                                    {idx + 1}. {step.title}
                                                </p>
                                            </div>
                                            <p className="mt-1 text-sm text-slate-600">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core values */}
                <section className="bg-slate-50">
                    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <p className="text-sm font-semibold text-blue-700">Our values</p>
                            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                                Principles we don’t compromise on
                            </h2>
                            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
                                We built this service around transparency, trust, and a smoother experience for international taxpayers.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {values.map((v) => (
                                <div
                                    key={v.title}
                                    className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                                >
                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                                        {v.icon}
                                    </div>
                                    <h3 className="mt-4 text-base font-semibold text-slate-900">{v.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Security / Trust */}
                <section id="security" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                                    <ShieldCheck className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Security & privacy</p>
                                    <p className="text-sm text-slate-600">Designed to protect sensitive tax documents.</p>
                                </div>
                            </div>

                            <div className="mt-6 space-y-3">
                                {[
                                    "Encryption in transit and at rest for stored files",
                                    "Role-based access controls and limited internal visibility",
                                    "Secure document lifecycle: upload → prepare → archive",
                                    "Clear consent and transparent communication",
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                        <div className="mt-0.5 text-blue-700">
                                            <Lock className="h-4 w-4" />
                                        </div>
                                        <p className="text-sm text-slate-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-blue-700">Built for real people</p>
                            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                                A calmer experience during tax season.
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-slate-600">
                                Our approach is simple: reduce anxiety, remove guesswork, and keep your data protected.
                                You’ll always receive clear updates and a predictable workflow.
                            </p>

                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                                    <p className="text-sm font-semibold text-slate-900">Transparent pricing</p>
                                    <p className="mt-1 text-sm text-slate-600">
                                        Straightforward packages—no surprise add-ons.
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                                    <p className="text-sm font-semibold text-slate-900">Responsive support</p>
                                    <p className="mt-1 text-sm text-slate-600">
                                        Quick answers and practical guidance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section id="get-started" className="bg-slate-900">
                    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
                        <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-gradient-to-r from-slate-900 to-slate-800 p-8 sm:p-10">
                            <div className="pointer-events-none absolute -top-24 right-[-120px] h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
                            <div className="pointer-events-none absolute -bottom-24 left-[-120px] h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

                            <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                                <div>
                                    <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white/90">
                                        <HeartHandshake className="h-4 w-4" />
                                        Ready when you are
                                    </p>
                                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                                        Start your filing with a guided checklist.
                                    </h3>
                                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">
                                        Upload documents securely, get clear answers, and move through a simple flow built for international taxpayers.
                                    </p>
                                </div>

                                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                                    <a
                                        href="/start"
                                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
                                    >
                                        Start now
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                    <a
                                        href="/contact"
                                        className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
                                    >
                                        Talk to support
                                    </a>
                                </div>
                            </div>
                        </div>

                        <p className="mt-6 text-center text-xs text-white/50">
                            © {new Date().getFullYear()} Grow Tax Filing — Privacy-first • Clear process • Human support
                        </p>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

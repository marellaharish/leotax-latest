import React from "react";
import {
    CheckCircle2,
    ShieldCheck,
    Timer,
    RefreshCcw,
    Headphones,
    Lock,
    CreditCard,
    ArrowUpRight,
    FileText,
    Briefcase,
    Building2,
    Receipt,
    Landmark,
} from "lucide-react";
import { AE, MaserCard, Paypal, Visa, Zelle } from "@/assets";

type Feature = { icon: React.ReactNode; text: string };

type Plan = {
    icon: React.ReactNode;
    iconBg: string;
    title: string;
    price: string;
    note: string;
};

const acceptedLogos = [
    { key: "VISA", src: Visa, h: "h-8" },
    { key: "AMEX", src: AE, h: "h-9" },
    { key: "MasterCard", src: MaserCard, h: "h-9" },
    { key: "PayPal", src: Paypal, h: "h-9" },
    { key: "Zelle", src: Zelle, h: "h-8" },
];

const leftFeatures: Feature[] = [
    { icon: <Timer className="h-4 w-4" />, text: "Instant payment processing" },
    { icon: <ShieldCheck className="h-4 w-4" />, text: "Secure transactions" },
    { icon: <RefreshCcw className="h-4 w-4" />, text: "Easy refunds & cancellations" },
    { icon: <Headphones className="h-4 w-4" />, text: "24/7 customer support" },
];

const plans: Plan[] = [
    {
        icon: <FileText className="h-5 w-5" />,
        iconBg: "bg-blue-100",
        title: "Standard Filing",
        price: "$85",
        note: "Basic tax filing service",
    },
    {
        icon: <Receipt className="h-5 w-5" />,
        iconBg: "bg-emerald-100",
        title: "Itemized Filing",
        price: "$150",
        note: "Detailed deductions",
    },
    {
        icon: <Briefcase className="h-5 w-5" />,
        iconBg: "bg-purple-100",
        title: "Business Filing",
        price: "$150–$400",
        note: "Business solutions",
    },
    {
        icon: <Landmark className="h-5 w-5" />,
        iconBg: "bg-amber-100",
        title: "FICA Taxes",
        price: "$100",
        note: "FICA processing",
    },
    {
        icon: <Building2 className="h-5 w-5" />,
        iconBg: "bg-rose-100",
        title: "Business Incorporation",
        price: "$600",
        note: "Full incorporation",
    },
];

function cx(...classes: Array<string | false | undefined | null>) {
    return classes.filter(Boolean).join(" ");
}

const FeaturePill = ({ icon, text }: Feature) => (
    <div className="flex items-center gap-3 rounded-md border border-slate-200 bg-white px-4 py-3 shadow-sm">
        <span className="grid h-8 w-8 place-items-center rounded-md bg-emerald-100 text-emerald-700">
            <CheckCircle2 className="h-4 w-4" />
        </span>
        <span className="text-sm font-semibold text-slate-700">{text}</span>
    </div>
);

const PlanTile = ({ p, featured }: { p: Plan; featured?: boolean }) => (
    <div
        className={cx(
            "group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 text-left",
            "shadow-sm transition hover:shadow-md",
            featured && "border-blue-200 bg-blue-50"
        )}
    >
        {featured && (
            <div className="absolute right-4 top-4 rounded-md bg-blue-100 px-3 py-1 text-[11px] font-extrabold text-blue-700">
                Most Popular
            </div>
        )}

        <div className={cx("mb-4 grid h-12 w-12 place-items-center rounded-md bg-blue-100")}>
            {React.cloneElement(p.icon as React.ReactElement, { className: "h-5 w-5 text-blue-700" })}
        </div>

        <div className="text-base font-extrabold tracking-tight text-slate-900">{p.title}</div>
        <div className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">{p.price}</div>
        <div className="mt-1 text-sm font-semibold text-slate-600">{p.note}</div>

        <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
            Choose plan <ArrowUpRight className="h-4 w-4" />
        </div>

    </div>
);

export default function PricingAndPaymentSection() {
    return (
        <section className="relative w-full py-16 md:py-20">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-white" />

            <div className="mx-auto max-w-7xl px-4">
                {/* Header row (no dark bar) */}
                <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-md bg-emerald-100 px-4 py-2 text-[11px] font-extrabold text-emerald-800">
                            <ShieldCheck className="h-4 w-4" />
                            Secure Payments & Transparent Pricing
                        </div>
                        <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                            Pay safely. Choose a plan that fits.
                        </h3>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                            Fast checkout, encrypted payments, and clear service pricing—built for confidence.
                        </p>
                    </div>

                    <div className="rounded-md border border-slate-200 bg-white px-5 py-4 shadow-sm">
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                            <Lock className="h-4 w-4 text-emerald-600" />
                            Protected by encryption • Cards & bank methods supported
                        </div>
                    </div>
                </div>

                {/* Payment + methods (two cards) */}
                <div className="grid gap-6 lg:grid-cols-12">
                    {/* Payment card */}
                    <div className="lg:col-span-5">
                        <div className="relative overflow-hidden rounded-md border border-slate-200 bg-white p-4 shadow-sm">
                            <div className="relative">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <div className="text-sm font-extrabold text-slate-900">Secure Payment</div>
                                        <div className="mt-2 text-sm leading-6 text-slate-600">
                                            Pay with card or supported methods. You’ll receive confirmation immediately after payment, along with a detailed receipt for your records.
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-0 grid h-12 w-12 place-items-center rounded-md bg-emerald-100 text-emerald-700">
                                        <CreditCard className="h-5 w-5" />
                                    </div>
                                </div>

                                <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-5 py-3 text-sm font-extrabold text-white hover:brightness-110 active:scale-[0.99] transition">
                                    <Lock className="h-4 w-4" />
                                    PAY SECURELY NOW
                                </button>

                                <div className="mt-4 rounded-md border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-600">
                                    Refund & cancellation policy: We promptly process cancellations and approve eligible refunds.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Methods + bullets */}
                    <div className="lg:col-span-7">
                        <div className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                                <div>
                                    <div className="text-sm font-extrabold text-slate-900">Accepted methods</div>
                                    <div className="mt-1 text-sm text-slate-600">Use the option you trust most.</div>
                                </div>

                                <div className="mt-6 grid grid-cols-5 gap-2">
                                    {acceptedLogos.map((logo) => (
                                        <div key={logo.key} className="flex items-center justify-center rounded-md bg-slate-50 p-2">
                                            <img src={logo.src} alt={logo.key} className={cx("w-full", logo.h)} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-4 grid gap-2 sm:grid-cols-2">
                                {leftFeatures.map((f, i) => (
                                    <FeaturePill key={i} {...f} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing */}
                <div className="mt-12">
                    <div className="text-center">
                        <h4 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                            Service Pricing Plans
                        </h4>
                        <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
                            Choose a plan based on your filing needs. Clear pricing, no confusion.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                        {plans.map((p, idx) => (
                            <PlanTile key={p.title} p={p} featured={idx === 1} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

import React from "react";
import {
    BadgeCheck,
    CheckCircle2,
    Lock,
    ShieldCheck,
    Timer,
    RefreshCcw,
    Headphones,
    CreditCard,
    FileText,
    Briefcase,
    Building2,
    Receipt,
    Landmark,
} from "lucide-react";
import { AE, MaserCard, Paypal, Visa, Zelle } from "@/assets";

type Feature = {
    icon: React.ReactNode;
    text: string;
};

type Plan = {
    icon: React.ReactNode;
    iconBg: string;
    title: string;
    price: string;
    note: string;
};

const acceptedMethods = ["VISA", "AMEX", "MaserCard", "Zelle", "PayPal"];

const leftFeatures: Feature[] = [
    { icon: <Timer className="h-4 w-4" />, text: "Instant payment processing" },
    { icon: <ShieldCheck className="h-4 w-4" />, text: "100% secure transactions" },
    { icon: <RefreshCcw className="h-4 w-4" />, text: "Easy refunds & cancellations" },
    { icon: <Headphones className="h-4 w-4" />, text: "24/7 customer support" },
];

const plans: Plan[] = [
    {
        icon: <FileText className="h-5 w-5 text-white" />,
        iconBg: "bg-blue-600",
        title: "Standard Filing",
        price: "$85",
        note: "Basic tax filing service",
    },
    {
        icon: <Receipt className="h-5 w-5 text-white" />,
        iconBg: "bg-emerald-600",
        title: "Itemized Filing",
        price: "$150",
        note: "Detailed deductions",
    },
    {
        icon: <Briefcase className="h-5 w-5 text-white" />,
        iconBg: "bg-violet-600",
        title: "Business Filing",
        price: "$150-$400",
        note: "Business solutions",
    },
    {
        icon: <Landmark className="h-5 w-5 text-white" />,
        iconBg: "bg-orange-600",
        title: "FICA Taxes",
        price: "$100",
        note: "FICA processing",
    },
    {
        icon: <Building2 className="h-5 w-5 text-white" />,
        iconBg: "bg-rose-600",
        title: "Business Incorporation",
        price: "$600",
        note: "Full incorporation",
    },
];

const MethodChip = ({ label }: { label: string }) => (
    <div className="grid h-9 w-[76px] place-items-center rounded-lg border border-slate-200 bg-white text-[11px] font-extrabold text-slate-700 shadow-sm">
        {label}
    </div>
);

const Bullet = ({ icon, text }: Feature) => (
    <div className="flex items-center gap-3 rounded-lg border border-slate-100 bg-white px-3 py-2.5">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
            <CheckCircle2 className="h-4 w-4" />
        </span>
        <span className="text-xs font-semibold text-slate-600">{text}</span>
    </div>
);

const PlanCard = ({ p }: { p: Plan }) => (
    <div className="group rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-[0_20px_55px_-45px_rgba(2,6,23,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_35px_90px_-60px_rgba(2,6,23,0.35)]">
        <div className={`mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl ${p.iconBg}`}>
            {p.icon}
        </div>
        <div className="text-sm font-extrabold text-slate-900">{p.title}</div>
        <div className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">{p.price}</div>
        <div className="mt-1 text-xs font-semibold text-slate-500">{p.note}</div>
    </div>
);

export default function PricingAndPaymentSection() {
    return (
        <section className="relative w-full bg-white py-16 md:py-20">
            {/* soft background like screenshot */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_45%_at_20%_15%,rgba(59,130,246,0.12)_0%,rgba(59,130,246,0)_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_45%_at_85%_80%,rgba(168,85,247,0.12)_0%,rgba(168,85,247,0)_60%)]" />

            <div className="relative mx-auto max-w-6xl px-4">
                {/* Outer card */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_35px_110px_-80px_rgba(2,6,23,0.45)]">
                    {/* Header gradient bar */}
                    <div className="bg-gradient-to-r from-[#132a62] via-[#1e2f73] to-[#3a1d5f] px-6 py-7 text-center md:px-10">
                        <h3 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                            Secure Payment Gateway
                        </h3>
                        <p className="mx-auto mt-2 max-w-2xl text-sm text-white/80">
                            Fast, secure, and reliable payment processing with world-class security
                        </p>
                    </div>

                    {/* Top content */}
                    <div className="grid gap-8 px-6 py-8 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-10">
                        {/* left */}
                        <div>
                            <div className="text-sm font-extrabold text-slate-900">Accepted Payment Methods</div>

                            <div className="mt-4 flex flex-wrap gap-3">
                                {acceptedMethods.map((m) => (
                                    <>
                                        {m === "VISA" && <img src={Visa} alt="" className="h-[80px] w-auto" />}
                                        {m === "AMEX" && <img src={AE} alt="" className="h-[60px] w-auto" />}
                                        {m === "MaserCard" && <img src={MaserCard} alt="" className="h-[60px] w-auto" />}
                                        {m === "PayPal" && <img src={Paypal} alt="" className="h-[60px] w-auto" />}
                                        {m === "Zelle" && <img src={Zelle} alt="" className="h-[80px] w-auto" />}
                                    </>

                                ))}
                            </div>

                            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                {leftFeatures.map((f, i) => (
                                    <Bullet key={i} {...f} />
                                ))}
                            </div>

                            {/* <div className="mt-6 flex items-center gap-3 text-xs font-semibold text-slate-600">
                                <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                                    <BadgeCheck className="h-4 w-4" />
                                </span>
                                <div>
                                    <div className="font-extrabold text-slate-700">Bank-Grade Security</div>
                                    <div className="text-slate-500">256-bit SSL Encryption</div>
                                </div>
                            </div> */}
                        </div>

                        {/* right payment card */}
                        <div className="relative">
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_55px_-45px_rgba(2,6,23,0.35)]">
                                {/* <div className="text-right">
                                    <div className="text-3xl font-extrabold tracking-tight text-slate-900">
                                        $299{" "}
                                        <span className="ml-2 align-middle text-sm font-bold text-slate-400 line-through">
                                            $499
                                        </span>
                                    </div>
                                    <div className="mt-1 text-xs font-bold text-emerald-600">Save $200</div>
                                </div>

                                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-extrabold text-emerald-700 ring-1 ring-emerald-100">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                                    LIMITED TIME - 40% OFF
                                </div> */}

                                <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-extrabold text-white shadow-[0_14px_30px_-18px_rgba(37,99,235,0.85)] hover:brightness-110">
                                    <Lock className="h-4 w-4" />
                                    PAY SECURELY NOW
                                </button>


                                <div className="mt-4 flex items-center justify-center gap-2 text-[11px] font-semibold text-slate-500">
                                    <CreditCard className="h-4 w-4 text-emerald-600" />
                                    Protected by advanced encryption
                                </div>
                                <p className="text-[11px] text-center mt-2 text-slate-400">
                                    All types of credit and debit cards are accepted.
                                </p>
                            </div>
                            <p className="text-[11px] text-center mt-2 text-slate-600 fw-medium">
                                Refund and cancellation policy: We promptly process payment cancellations and approve refund requests.
                            </p>
                        </div>
                    </div>

                    {/* divider */}
                    <div className="h-px w-full bg-slate-200" />

                    {/* Pricing plans */}
                    <div className="px-6 py-10 md:px-10">
                        <div className="text-center">

                            <h4 className="text-xl font-extrabold tracking-tight text-slate-900 md:text-2xl">
                                Service Pricing Plans
                            </h4>
                            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500">
                                Professional services tailored to your specific needs
                            </p>
                        </div>

                        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                            {plans.map((p) => (
                                <PlanCard key={p.title} p={p} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import React from "react";
import { Minus, Plus } from "lucide-react";

type FAQ = {
    q: string;
    a: string;
};

const faqs: FAQ[] = [
    {
        q: "Who needs to file a US tax return?",
        a: "Anyone who earned U.S. income or is required to submit Form 8843 must file a tax return. Filing rules depend on visa status, income type, and residency classification under IRS guidelines.",
    },
    {
        q: "Do you help Indians with FBAR and FATCA filing?",
        a: "Yes. We support clients with FBAR (FinCEN 114) and FATCA-related reporting, including guidance on foreign accounts/assets and deadlines based on your situation.",
    },
    {
        q: "Is tax filing mandatory even if I earned no income?",
        a: "In many cases, yes—especially for certain visa categories where Form 8843 is required. Whether you must file a return depends on residency status and IRS thresholds.",
    },
    {
        q: "Can I file my US taxes online myself?",
        a: "Yes, you can. However, if you have nonresident/resident transitions, multiple states, stock options, ITIN needs, or foreign accounts, professional help can reduce errors and maximize benefits.",
    },
    {
        q: "Do you handle student and business tax filings?",
        a: "Yes. We handle student filings (including F-1/J-1 scenarios), individual returns, and business filings for LLCs, S-Corps, and other structures depending on your needs.",
    },
    {
        q: "Is my financial information secure?",
        a: "We use secure document handling practices and follow industry-standard safeguards to protect sensitive information. We can also guide you on the safest way to share documents.",
    },
];

export default function FAQSection() {
    const [open, setOpen] = React.useState<number>(0);

    return (
        <section className="relative w-full bg-white py-16 md:py-20">
            {/* soft modern background like other sections */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_45%_at_20%_15%,rgba(16,185,129,0.10)_0%,rgba(16,185,129,0)_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_45%_at_85%_80%,rgba(99,102,241,0.10)_0%,rgba(99,102,241,0)_60%)]" />

            <div className="relative mx-auto max-w-5xl px-4">
                <h2 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                    Frequently asked questions
                </h2>

                <div className="mx-auto mt-10 max-w-4xl space-y-4">
                    {faqs.map((f, idx) => {
                        const isOpen = open === idx;
                        return (
                            <div
                                key={f.q}
                                className="rounded-2xl border border-slate-200 bg-white shadow-[0_18px_55px_-45px_rgba(2,6,23,0.25)]"
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpen((prev) => (prev === idx ? -1 : idx))}
                                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                                >
                                    <span className="text-base font-extrabold text-slate-900 md:text-lg">
                                        {f.q}
                                    </span>

                                    <span className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-900">
                                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                                    </span>
                                </button>

                                <div
                                    className={`grid overflow-hidden px-6 transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr] pb-0"
                                        }`}
                                >
                                    <div className="min-h-0">
                                        <p className="text-sm leading-7 text-slate-600">{f.a}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

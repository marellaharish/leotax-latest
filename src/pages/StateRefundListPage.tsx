import { ArrowLeft, FileText } from "lucide-react";
import { STATETAX_DATA } from "@/constants/stateTax";
import { ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";


type StateCardProps = {
    name: string;
    url: string;
};

const StateCard = ({ name, url }: StateCardProps) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-[0_18px_55px_-45px_rgba(2,6,23,0.20)]
                 transition hover:-translate-y-0.5 hover:shadow-[0_30px_80px_-60px_rgba(2,6,23,0.30)]"
        >
            <div className="flex items-center justify-between gap-3">
                <div>
                    <div className="text-sm font-extrabold text-slate-900">
                        {name}
                    </div>
                    <div className="mt-1 text-[11px] font-semibold text-slate-500">
                        Check refund status
                    </div>
                </div>

                <span className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 bg-white text-slate-400 transition group-hover:text-slate-700">
                    <ChevronRight className="h-4 w-4" />
                </span>
            </div>
        </a>
    );
};


export default function StateRefundListPage() {
    return (
        <Layout>
            <div className="min-h-screen bg-[#f7f9ff]">
                {/* Header */}
                <div className="border-b border-slate-200 bg-white">
                    <div className="mx-auto max-w-6xl px-4 py-10 text-center">
                        <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                            <FileText className="h-5 w-5" />
                        </div>

                        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                            Track Your Tax Refund
                        </h1>
                        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                            Select your state to check refund status on the official tax website
                        </p>
                    </div>
                </div>

                {/* Content */}
                <main className="mx-auto max-w-6xl px-4 py-10">
                    <button
                        type="button"
                        onClick={() => history.back()}
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold text-blue-600 shadow-sm hover:bg-slate-50"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Main Menu
                    </button>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {STATETAX_DATA.map((state) => (
                            <StateCard
                                key={state.name}
                                name={state.name}
                                url={state.url}
                            />
                        ))}
                    </div>
                </main>
            </div>
        </Layout>
    );
}

import React from "react";
import { ArrowUpRight, BadgeCheck, ClipboardEdit, FileText, Info, ShieldCheck, Sparkles } from "lucide-react";

/**
 * W4 Assistance
 * Different layout: "form help" with sticky sidebar card + editable row mock.
 * No call/whatsapp.
 */
export default function ServiceHeroW4Assistance() {
  const rows = [
    { label: "Filing status", hint: "Single / Married / Head of Household" },
    { label: "Multiple jobs", hint: "Withholding calculation support" },
    { label: "Dependents", hint: "Credits and adjustments" },
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_18%_10%,rgba(99,102,241,0.16)_0%,rgba(99,102,241,0)_62%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_85%_50%,rgba(59,130,246,0.14)_0%,rgba(59,130,246,0)_62%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-18">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          {/* Left content */}
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[11px] font-extrabold text-slate-700 ring-1 ring-slate-200 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
              Payroll Withholding
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              W‑4{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Assistance
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-[15px]">
              Adjust withholding with confidence. We help you complete the W‑4 fields correctly so you avoid
              under‑withholding or a surprise bill later.
            </p>

            <div className="mt-7 rounded-3xl border border-slate-200 bg-white shadow-[0_50px_140px_-110px_rgba(2,6,23,0.55)]">
              <div className="border-b border-slate-200 p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100">
                    <ClipboardEdit className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">W‑4 Field Helper</div>
                    <div className="text-xs font-semibold text-slate-500">Simple explanation per section</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid gap-3">
                  {rows.map((r) => (
                    <div key={r.label} className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-sm font-extrabold text-slate-900">{r.label}</div>
                        <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-bold text-slate-600 ring-1 ring-slate-200">
                          guide
                        </span>
                      </div>
                      <div className="mt-2 text-sm leading-6 text-slate-600">{r.hint}</div>
                      <div className="mt-3 h-2 w-full rounded-full bg-slate-100">
                        <div className="h-2 rounded-full bg-indigo-600" style={{ width: "55%" }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/signup"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-extrabold text-white shadow-[0_16px_35px_-22px_rgba(79,70,229,0.75)] hover:brightness-110"
                  >
                    Fix My Withholding <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="/faq"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                  >
                    Quick FAQ <Info className="h-4 w-4 text-slate-600" />
                  </a>
                </div>
              </div>

              <div className="h-[5px] w-full bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-600" />
            </div>
          </div>

          {/* Right sidebar card */}
          <div className="md:col-span-5 md:sticky md:top-24">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_30px_90px_-70px_rgba(2,6,23,0.30)]">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900">What you get</div>
                  <div className="text-xs font-semibold text-slate-500">Simple + actionable</div>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  { t: "Clear guidance", d: "Know what each field means for your situation." },
                  { t: "Better withholding", d: "Reduce risk of over/under withholding." },
                  { t: "Record-ready", d: "Keep notes for future updates." },
                ].map((x) => (
                  <div key={x.t} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 grid h-10 w-10 place-items-center rounded-2xl bg-white text-slate-700 ring-1 ring-slate-200">
                        {x.t === "Clear guidance" ? <FileText className="h-5 w-5" /> : <ShieldCheck className="h-5 w-5" />}
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-slate-900">{x.t}</div>
                        <div className="mt-1 text-sm leading-6 text-slate-600">{x.d}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-indigo-50 p-4 ring-1 ring-indigo-100">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-10 w-10 place-items-center rounded-2xl bg-white text-indigo-700 ring-1 ring-indigo-100">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-indigo-900">Tip</div>
                    <div className="mt-1 text-sm leading-6 text-indigo-800">
                      Update your W‑4 when income changes, a new job starts, or dependents change.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

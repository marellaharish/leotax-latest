import React from "react";
import { ArrowUpRight, Calculator, TrendingUp, SplitSquareVertical, SlidersHorizontal, Info } from "lucide-react";

/**
 * Accurate Tax Estimates
 * Different layout: calculator-style panel with sliders mock + scenario comparison cards.
 * No call/whatsapp.
 */
export default function ServiceHeroAccurateTaxEstimates() {
  const scenarios = [
    { name: "Conservative", desc: "Avoid surprises—assumes fewer deductions.", accent: "bg-slate-900" },
    { name: "Balanced", desc: "Most common scenario with typical assumptions.", accent: "bg-indigo-600" },
    { name: "Optimized", desc: "Includes eligible deductions/credits with documentation.", accent: "bg-emerald-600" },
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_18%_10%,rgba(59,130,246,0.16)_0%,rgba(59,130,246,0)_62%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_85%_55%,rgba(16,185,129,0.12)_0%,rgba(16,185,129,0)_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-18">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[11px] font-extrabold text-slate-700 ring-1 ring-slate-200 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
              Forecast & Clarity
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Accurate{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">
                Tax Estimates
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 md:text-[15px]">
              Understand what to expect before you file. We compare scenarios and build a clear estimate you can trust.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/auth/signup"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-extrabold text-white shadow-[0_16px_35px_-22px_rgba(79,70,229,0.75)] hover:brightness-110"
              >
                Get My Estimate <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/faq"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
              >
                How it works <Info className="h-4 w-4 text-slate-600" />
              </a>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                { t: "Inputs", d: "Income & deductions", icon: <SlidersHorizontal className="h-4 w-4" /> },
                { t: "Scenarios", d: "Compare outcomes", icon: <SplitSquareVertical className="h-4 w-4" /> },
                { t: "Confidence", d: "Clear summary", icon: <TrendingUp className="h-4 w-4" /> },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                    {x.icon} {x.t}
                  </div>
                  <div className="mt-2 text-sm font-extrabold text-slate-900">{x.d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: calculator mock */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-7 rounded-[40px] bg-gradient-to-br from-indigo-500/16 via-blue-500/10 to-emerald-500/12 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_50px_140px_-95px_rgba(2,6,23,0.70)]">
              <div className="border-b border-slate-200 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100">
                    <Calculator className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">Estimate Builder</div>
                    <div className="text-xs font-semibold text-slate-500">Scenario comparisons</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid gap-3">
                  {["Income", "Withholding", "Deductions"].map((label) => (
                    <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-sm font-extrabold text-slate-900">{label}</div>
                        <div className="text-xs font-semibold text-slate-500">adjust</div>
                      </div>
                      <div className="mt-3 h-2 w-full rounded-full bg-slate-100">
                        <div className="h-2 rounded-full bg-indigo-600" style={{ width: label === "Income" ? "72%" : label === "Withholding" ? "48%" : "60%" }} />
                      </div>
                      <div className="mt-2 text-xs text-slate-500">Preview slider (UI mock)</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {scenarios.map((s) => (
                    <div key={s.name} className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="flex items-center gap-2">
                        <span className={`h-2.5 w-2.5 rounded-full ${s.accent}`} />
                        <div className="text-sm font-extrabold text-slate-900">{s.name}</div>
                      </div>
                      <div className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</div>
                      <div className="mt-4 rounded-xl bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600 ring-1 ring-slate-200">
                        Example estimate view
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-[5px] w-full bg-gradient-to-r from-indigo-600 via-blue-600 to-emerald-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

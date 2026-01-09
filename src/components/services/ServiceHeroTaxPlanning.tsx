import React from "react";
import { ArrowUpRight, CalendarRange, PieChart, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

/**
 * Professional Tax Planning
 * Different layout: "strategy board" with KPI tiles + timeline
 * Includes CTA (Get Started) only.
 */
export default function ServiceHeroTaxPlanning() {
  const kpis = [
    { label: "Plan Window", value: "Year‑round", icon: <CalendarRange className="h-5 w-5" /> },
    { label: "Approach", value: "Strategy-first", icon: <Sparkles className="h-5 w-5" /> },
    { label: "Focus", value: "Compliance + savings", icon: <ShieldCheck className="h-5 w-5" /> },
    { label: "Outcome", value: "Better decisions", icon: <TrendingUp className="h-5 w-5" /> },
  ];

  const timeline = [
    { t: "Discover", d: "Understand your income, residency, and goals." },
    { t: "Model", d: "Compare scenarios and estimate outcomes." },
    { t: "Optimize", d: "Select actions that balance savings and risk." },
    { t: "Execute", d: "Turn plan into a checklist you can follow." },
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_14%_14%,rgba(16,185,129,0.14)_0%,rgba(16,185,129,0)_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_85%_20%,rgba(99,102,241,0.14)_0%,rgba(99,102,241,0)_62%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          {/* Left: board */}
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[11px] font-extrabold text-slate-700 ring-1 ring-slate-200 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              Planning & Strategy
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Professional{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text text-transparent">
                Tax Planning
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-[15px]">
              Proactive planning built around your real situation—so you can make confident decisions before deadlines.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {kpis.map((k) => (
                <div
                  key={k.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_22px_80px_-70px_rgba(2,6,23,0.30)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-100 text-slate-700">
                      {k.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wide text-slate-500">{k.label}</div>
                      <div className="mt-1 text-sm font-extrabold text-slate-900">{k.value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7">
              <a
                href="/auth/signup"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 text-sm font-extrabold text-white shadow-[0_16px_35px_-22px_rgba(16,185,129,0.65)] hover:brightness-110"
              >
                Build My Plan <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right: timeline */}
          <div className="md:col-span-5">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-7 rounded-[40px] bg-gradient-to-br from-emerald-500/16 via-indigo-500/10 to-blue-500/12 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_50px_140px_-95px_rgba(2,6,23,0.70)]">
                <div className="border-b border-slate-200 px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                      <PieChart className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-slate-900">Strategy Timeline</div>
                      <div className="text-xs font-semibold text-slate-500">A simple process you can follow</div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <ol className="space-y-4">
                    {timeline.map((x, i) => (
                      <li key={x.t} className="flex items-start gap-4">
                        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-100 text-slate-700 ring-1 ring-slate-200">
                          <span className="text-sm font-extrabold">{i + 1}</span>
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-extrabold text-slate-900">{x.t}</div>
                          <div className="mt-1 text-sm leading-6 text-slate-600">{x.d}</div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="h-[5px] w-full bg-gradient-to-r from-emerald-600 via-indigo-600 to-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

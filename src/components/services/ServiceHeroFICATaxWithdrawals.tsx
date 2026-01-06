import React from "react";
import { ArrowUpRight, BadgeCheck, FileSearch, ShieldAlert, Wallet, AlertTriangle, Info } from "lucide-react";

/**
 * FICA Taxes Withdrawals Guidance
 * Different layout: "issue radar" panel + two-column decision map
 * (no WhatsApp; includes Call only? -> none. Only Get Started + Learn More)
 */
export default function ServiceHeroFICATaxWithdrawals() {
  const signals = [
    { k: "Scenario", v: "FICA refund / correction guidance" },
    { k: "Focus", v: "Documentation + eligibility checks" },
    { k: "Outcome", v: "Clear steps & next actions" },
  ];

  const tracks = [
    {
      title: "Review your case",
      icon: <FileSearch className="h-5 w-5" />,
      points: ["Identify withholding source", "Confirm time period", "Check status/eligibility"],
    },
    {
      title: "Prepare documents",
      icon: <Wallet className="h-5 w-5" />,
      points: ["Collect paystubs/W‑2", "Capture employer details", "Maintain dates and amounts"],
    },
    {
      title: "Guided next steps",
      icon: <BadgeCheck className="h-5 w-5" />,
      points: ["Explain what to do next", "Avoid common mistakes", "Keep records audit-ready"],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,rgba(59,130,246,0.16)_0%,rgba(59,130,246,0)_62%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_85%_55%,rgba(244,63,94,0.10)_0%,rgba(244,63,94,0)_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-18">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          {/* Title / left rail */}
          <div className="md:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[11px] font-extrabold text-slate-700 ring-1 ring-slate-200 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
              Compliance Guidance
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              FICA Taxes{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-rose-600 bg-clip-text text-transparent">
                Withdrawals
              </span>{" "}
              Guidance
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 md:text-[15px]">
              Not sure if FICA withholding is correct? We help you understand your scenario, organize
              documents, and follow the right steps.
            </p>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_22px_80px_-70px_rgba(2,6,23,0.30)]">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-rose-50 text-rose-700 ring-1 ring-rose-100">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900">Issue Radar</div>
                  <div className="text-xs font-semibold text-slate-500">Quick overview of your case</div>
                </div>
              </div>

              <div className="mt-4 grid gap-2">
                {signals.map((s) => (
                  <div key={s.k} className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200">
                    <div className="text-xs font-bold uppercase tracking-wide text-slate-500">{s.k}</div>
                    <div className="text-sm font-extrabold text-slate-900">{s.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="/signup"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-extrabold text-white shadow-[0_16px_35px_-22px_rgba(79,70,229,0.75)] hover:brightness-110"
                >
                  Start Review <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="/faq"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                >
                  Learn More <Info className="h-4 w-4 text-slate-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Right map */}
          <div className="md:col-span-7">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-7 rounded-[40px] bg-gradient-to-br from-indigo-500/16 via-blue-500/10 to-rose-500/12 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_50px_140px_-95px_rgba(2,6,23,0.70)]">
                <div className="border-b border-slate-200 px-6 py-5">
                  <div className="text-sm font-extrabold text-slate-900">Decision Map</div>
                  <div className="mt-1 text-xs font-semibold text-slate-500">
                    A clean path from “confused” to “clear next step”
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid gap-4 sm:grid-cols-3">
                    {tracks.map((t) => (
                      <div key={t.title} className="rounded-2xl border border-slate-200 bg-white p-4">
                        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-100 text-slate-700">
                          {t.icon}
                        </div>
                        <div className="mt-3 text-sm font-extrabold text-slate-900">{t.title}</div>
                        <ul className="mt-2 space-y-2 text-sm text-slate-600">
                          {t.points.map((p) => (
                            <li key={p} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                              <span className="leading-6">{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 grid h-10 w-10 place-items-center rounded-2xl bg-amber-100 text-amber-800 ring-1 ring-amber-200">
                        <AlertTriangle className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-amber-900">Note</div>
                        <div className="mt-1 text-sm leading-6 text-amber-800">
                          This page provides guidance and organization support. Final actions depend on your specific facts and forms.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[5px] w-full bg-gradient-to-r from-indigo-600 via-blue-600 to-rose-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

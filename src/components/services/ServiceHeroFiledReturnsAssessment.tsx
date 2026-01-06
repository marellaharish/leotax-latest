import React from "react";
import { ArrowUpRight, ClipboardCheck, FileSearch, Layers, ShieldCheck, Sparkles } from "lucide-react";

/**
 * Filed Tax Returns Assessment & Examination
 * Different layout: "before/after" review panel + risk/opportunity chips + mini report mock.
 * No call/whatsapp. CTA: Request Review + Download sample report (link).
 */
export default function ServiceHeroFiledReturnsAssessment() {
  const chips = [
    { t: "Accuracy check", tone: "indigo" as const },
    { t: "Missing forms", tone: "amber" as const },
    { t: "Optimization", tone: "emerald" as const },
    { t: "Compliance", tone: "slate" as const },
  ];

  const findings = [
    { k: "Potential gaps", v: "Forms / schedules mismatch" },
    { k: "Consistency", v: "Figures align across docs" },
    { k: "Opportunities", v: "Deductions / credits review" },
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_18%_15%,rgba(99,102,241,0.14)_0%,rgba(99,102,241,0)_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_85%_55%,rgba(16,185,129,0.12)_0%,rgba(16,185,129,0)_62%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-18">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          {/* Left: title */}
          <div className="md:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[11px] font-extrabold text-slate-700 ring-1 ring-slate-200 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
              Return Review
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Filed Returns{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">
                Assessment
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 md:text-[15px]">
              Already filed? We review what was submitted, check consistency, and flag risks or opportunities—then
              give you a clean summary.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {chips.map((c) => (
                <span
                  key={c.t}
                  className={[
                    "rounded-full px-3 py-1 text-xs font-extrabold ring-1",
                    c.tone === "indigo" ? "bg-indigo-50 text-indigo-700 ring-indigo-100" : "",
                    c.tone === "emerald" ? "bg-emerald-50 text-emerald-700 ring-emerald-100" : "",
                    c.tone === "amber" ? "bg-amber-50 text-amber-800 ring-amber-100" : "",
                    c.tone === "slate" ? "bg-slate-100 text-slate-700 ring-slate-200" : "",
                  ].join(" ")}
                >
                  {c.t}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/signup"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-extrabold text-white shadow-[0_16px_35px_-22px_rgba(79,70,229,0.75)] hover:brightness-110"
              >
                Request Review <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/resources/sample-review"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
              >
                Sample Report <Layers className="h-4 w-4 text-slate-600" />
              </a>
            </div>
          </div>

          {/* Right: report mock */}
          <div className="md:col-span-7">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-7 rounded-[40px] bg-gradient-to-br from-indigo-500/16 via-blue-500/10 to-emerald-500/12 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_50px_140px_-95px_rgba(2,6,23,0.70)]">
                <div className="border-b border-slate-200 px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100">
                      <FileSearch className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-slate-900">Mini Review Summary</div>
                      <div className="text-xs font-semibold text-slate-500">What we check in every review</div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Before</div>
                      <div className="mt-2 space-y-2">
                        {["Unclear attachments", "Missing checklist", "No summary"].map((x) => (
                          <div key={x} className="flex items-center gap-2 text-sm text-slate-600">
                            <span className="h-2 w-2 rounded-full bg-slate-400" />
                            {x}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                      <div className="text-xs font-bold uppercase tracking-wide text-emerald-700">After</div>
                      <div className="mt-2 space-y-2">
                        {["Clean checklist", "Risks highlighted", "Actionable next steps"].map((x) => (
                          <div key={x} className="flex items-center gap-2 text-sm text-emerald-800">
                            <span className="h-2 w-2 rounded-full bg-emerald-600" />
                            {x}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {findings.map((f) => (
                      <div key={f.k} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 ring-1 ring-slate-200">
                        <div className="flex items-center justify-between gap-3">
                          <div className="text-xs font-bold uppercase tracking-wide text-slate-500">{f.k}</div>
                          <div className="text-sm font-extrabold text-slate-900">{f.v}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 grid h-10 w-10 place-items-center rounded-2xl bg-slate-100 text-slate-700 ring-1 ring-slate-200">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-slate-900">Optional: optimization pass</div>
                        <div className="mt-1 text-sm leading-6 text-slate-600">
                          We can also check for potential improvements based on your facts and documentation.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <ShieldCheck className="h-4 w-4 text-slate-500" /> Privacy-first document handling
                    <ClipboardCheck className="h-4 w-4 text-slate-500 ml-3" /> Clear checklist
                  </div>
                </div>

                <div className="h-[5px] w-full bg-gradient-to-r from-indigo-600 via-blue-600 to-emerald-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

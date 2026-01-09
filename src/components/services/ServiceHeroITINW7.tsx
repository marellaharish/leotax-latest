import React from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  ClipboardList,
  FileText,
  Fingerprint,
  Info,
  ShieldCheck,
  Upload,
} from "lucide-react";
import { IconDeviceSdCard } from "@tabler/icons-react";

/**
 * ITIN Guidance & Support (Form W-7)
 * Modern checklist + requirements + doc tiles (no call/whatsapp CTAs)
 */
export default function ServiceHeroITINW7() {
  const requirements = [
    { label: "Form W-7 prepared", icon: <FileText className="h-5 w-5" /> },
    { label: "Identity documents", icon: <IconDeviceSdCard className="h-5 w-5" /> },
    { label: "Foreign status proof", icon: <Fingerprint className="h-5 w-5" /> },
    { label: "Tax return attachment (if applicable)", icon: <ClipboardList className="h-5 w-5" /> },
  ];

  const steps = [
    {
      title: "Tell us your situation",
      desc: "Answer a few questions so we choose the right W‑7 reason and supporting documents.",
    },
    {
      title: "Document checklist",
      desc: "We provide a clean list of what to upload and how to format it correctly.",
    },
    {
      title: "W‑7 review & finalize",
      desc: "We validate fields, common mistakes, and prepare the final submission packet.",
    },
    {
      title: "Submission guidance",
      desc: "We guide you through submission options and what to expect next.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_18%_10%,rgba(99,102,241,0.16)_0%,rgba(99,102,241,0)_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_55%_at_86%_40%,rgba(16,185,129,0.12)_0%,rgba(16,185,129,0)_62%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-18">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[11px] font-extrabold text-slate-700 ring-1 ring-slate-200 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
              ITIN / Form W‑7
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              ITIN{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">
                Guidance & Support
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 md:text-[15px]">
              Get help preparing Form W‑7 with a clear checklist and careful review, so your packet is
              complete and consistent.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {requirements.map((r) => (
                <div
                  key={r.label}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_16px_50px_-55px_rgba(2,6,23,0.22)]"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-100 text-slate-700">
                    {r.icon}
                  </div>
                  <div className="mt-3 text-xs font-extrabold text-slate-900">{r.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="/auth/signup"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-extrabold text-white shadow-[0_16px_35px_-22px_rgba(79,70,229,0.75)] hover:brightness-110"
              >
                Start ITIN Process <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
              >
                Ask a question <Info className="h-4 w-4 text-slate-600" />
              </a>
            </div>
          </div>

          {/* Right: stepper board */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-7 rounded-[40px] bg-gradient-to-br from-indigo-500/18 via-blue-500/10 to-emerald-500/16 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_50px_140px_-95px_rgba(2,6,23,0.70)]">
              <div className="border-b border-slate-200 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                    <Upload className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">Submission-ready checklist</div>
                    <div className="text-xs font-semibold text-slate-500">Organized, fast, and secure</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid gap-3">
                  {steps.map((s, idx) => (
                    <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                          <BadgeCheck className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center justify-between gap-3">
                            <div className="text-sm font-extrabold text-slate-900">
                              {idx + 1}. {s.title}
                            </div>
                            <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-bold text-slate-600 ring-1 ring-slate-200">
                              Step {idx + 1}
                            </span>
                          </div>
                          <div className="mt-1 text-sm leading-6 text-slate-600">{s.desc}</div>
                          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                            <div className="h-full rounded-full bg-indigo-500" style={{ width: `${(idx + 1) * 22}%` }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 grid h-10 w-10 place-items-center rounded-2xl bg-white text-slate-700 ring-1 ring-slate-200">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-slate-900">Privacy-first handling</div>
                      <div className="mt-1 text-sm leading-6 text-slate-600">
                        We keep document exchange organized and minimize back-and-forth.
                      </div>
                    </div>
                  </div>
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

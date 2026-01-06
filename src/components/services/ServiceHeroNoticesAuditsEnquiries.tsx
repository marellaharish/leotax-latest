import React from "react";
import { ArrowUpRight, FileWarning, Files, ShieldCheck, Stamp, Search, Info } from "lucide-react";

/**
 * Notices, Audits & Enquiries
 * Different layout: "case workspace" with left inbox-like items + right response kit.
 * No call/whatsapp. CTA: Upload Notice + Get Started.
 */
export default function ServiceHeroNoticesAuditsEnquiries() {
  const inbox = [
    { tag: "IRS Notice", title: "Information request", hint: "Respond with the right documents" },
    { tag: "State Letter", title: "Adjustment / verification", hint: "Confirm figures and deadlines" },
    { tag: "Audit", title: "Document support", hint: "Organize evidence and reply confidently" },
  ];

  const kit = [
    { t: "Deadline tracker", d: "We highlight due dates and the safest next step." },
    { t: "Document checklist", d: "Exact list of what to collect and where it belongs." },
    { t: "Response draft support", d: "Clear wording and structure for your reply." },
    { t: "Record keeping", d: "Keep your packet audit-ready for future use." },
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_18%_10%,rgba(244,63,94,0.10)_0%,rgba(244,63,94,0)_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_85%_40%,rgba(59,130,246,0.14)_0%,rgba(59,130,246,0)_62%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-18">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[11px] font-extrabold text-slate-700 ring-1 ring-slate-200 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-600" />
              Help with notices
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Notices, Audits &{" "}
              <span className="bg-gradient-to-r from-rose-600 to-indigo-600 bg-clip-text text-transparent">
                Enquiries
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 md:text-[15px]">
              Receive a letter and don’t know what to do next? We help you organize documents, understand
              deadlines, and respond clearly.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/signup"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 text-sm font-extrabold text-white shadow-[0_16px_35px_-22px_rgba(244,63,94,0.60)] hover:brightness-110"
              >
                Upload a Notice <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
              >
                Ask how it works <Info className="h-4 w-4 text-slate-600" />
              </a>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-7 rounded-[40px] bg-gradient-to-br from-rose-500/14 via-indigo-500/10 to-blue-500/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_50px_140px_-95px_rgba(2,6,23,0.70)]">
                <div className="grid gap-0 md:grid-cols-2">
                  {/* Inbox */}
                  <div className="border-b border-slate-200 p-6 md:border-b-0 md:border-r">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-rose-50 text-rose-700 ring-1 ring-rose-100">
                        <FileWarning className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-slate-900">Inbox</div>
                        <div className="text-xs font-semibold text-slate-500">Common items we handle</div>
                      </div>
                    </div>

                    <div className="mt-5 space-y-3">
                      {inbox.map((m) => (
                        <div key={m.title} className="rounded-2xl border border-slate-200 bg-white p-4 hover:bg-slate-50">
                          <div className="flex items-center justify-between gap-3">
                            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-600">
                              {m.tag}
                            </span>
                            <Search className="h-4 w-4 text-slate-400" />
                          </div>
                          <div className="mt-2 text-sm font-extrabold text-slate-900">{m.title}</div>
                          <div className="mt-1 text-sm text-slate-600 leading-6">{m.hint}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Response Kit */}
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100">
                        <Files className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-slate-900">Response Kit</div>
                        <div className="text-xs font-semibold text-slate-500">What you’ll get</div>
                      </div>
                    </div>

                    <div className="mt-5 grid gap-3">
                      {kit.map((k) => (
                        <div key={k.t} className="rounded-2xl border border-slate-200 bg-white p-4">
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 grid h-10 w-10 place-items-center rounded-2xl bg-slate-100 text-slate-700 ring-1 ring-slate-200">
                              {k.t === "Deadline tracker" ? (
                                <Stamp className="h-5 w-5" />
                              ) : k.t === "Document checklist" ? (
                                <ShieldCheck className="h-5 w-5" />
                              ) : (
                                <ShieldCheck className="h-5 w-5" />
                              )}
                            </div>
                            <div>
                              <div className="text-sm font-extrabold text-slate-900">{k.t}</div>
                              <div className="mt-1 text-sm leading-6 text-slate-600">{k.d}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="h-[5px] w-full bg-gradient-to-r from-rose-600 via-indigo-600 to-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

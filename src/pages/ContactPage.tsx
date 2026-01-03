import React from "react";
import { Mail, MapPin, Phone, Send, User } from "lucide-react";
import Layout from "@/components/layout/Layout";

export default function ContactPage() {
    const [message, setMessage] = React.useState("");
    const max = 500;

    return (
        <Layout>
            <div className="min-h-screen bg-[#f7f9ff]">
                {/* background wash */}
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_55%_at_50%_0%,rgba(99,102,241,0.16)_0%,rgba(99,102,241,0)_55%)]" />
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_55%_at_15%_85%,rgba(59,130,246,0.12)_0%,rgba(59,130,246,0)_60%)]" />
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_55%_at_85%_80%,rgba(16,185,129,0.12)_0%,rgba(16,185,129,0)_60%)]" />

                <main className="mx-auto max-w-6xl px-4 pb-16 pt-12 md:pt-14">
                    {/* Header */}
                    <div className="text-center">
                        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[11px] font-extrabold text-slate-700 ring-1 ring-white/60 backdrop-blur">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                            Contact
                        </div>
                        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                            Let’s talk about your{" "}
                            <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">
                                Tax Needs
                            </span>
                        </h1>
                        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                            Share a few details and our team will reach out shortly. You can also visit us at our
                            office location below.
                        </p>
                    </div>

                    {/* Split layout */}
                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        {/* Left: Image + contact info */}
                        <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/60 shadow-[0_45px_120px_-90px_rgba(2,6,23,0.55)] backdrop-blur-xl">
                            {/* top image */}
                            <div className="relative h-56 sm:h-64">
                                <img
                                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80"
                                    alt="Support"
                                    className="h-full w-full object-cover"
                                    draggable={false}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                                <div className="absolute bottom-5 left-5 right-5">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-extrabold text-white backdrop-blur">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                                        We typically reply within 1 business day
                                    </div>
                                    <div className="mt-3 text-2xl font-extrabold tracking-tight text-white">
                                        Need help fast?
                                    </div>
                                    <div className="mt-1 text-sm text-white/80">
                                        Call, email, or visit us — we’re here to help.
                                    </div>
                                </div>
                            </div>

                            {/* details */}
                            <div className="p-6 md:p-8">
                                <div className="grid gap-4">
                                    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                                        <div className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-extrabold text-slate-700">Phone</div>
                                            <div className="mt-1 text-sm font-semibold text-slate-900">+1 (320) 224-5557</div>
                                            <div className="mt-1 text-xs text-slate-500">Mon–Fri • 9AM–6PM (EST)</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                                        <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-extrabold text-slate-700">Email</div>
                                            <div className="mt-1 text-sm font-semibold text-slate-900">
                                                support@leotaxfiling.com
                                            </div>
                                            <div className="mt-1 text-xs text-slate-500">
                                                Send your documents securely on request
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                                        <div className="grid h-10 w-10 place-items-center rounded-xl bg-purple-50 text-purple-600 ring-1 ring-purple-100">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-extrabold text-slate-700">Office</div>
                                            <div className="mt-1 text-sm font-semibold text-slate-900">
                                                123 Main Street, Suite 200
                                            </div>
                                            <div className="mt-1 text-xs text-slate-500">
                                                Houston, TX 77002 (Example)
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 rounded-2xl border border-slate-200 bg-gradient-to-r from-indigo-600 to-emerald-600 p-5 text-white">
                                    <div className="text-sm font-extrabold">Prefer a quick callback?</div>
                                    <div className="mt-1 text-xs text-white/85">
                                        Submit the form and we’ll call you back with next steps.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-[0_45px_120px_-90px_rgba(2,6,23,0.55)] backdrop-blur-xl md:p-8">
                            <div className="mb-6">
                                <div className="text-sm font-extrabold text-slate-900">Send us a message</div>
                                <div className="mt-1 text-sm text-slate-600">
                                    Tell us what you need help with and we’ll respond shortly.
                                </div>
                            </div>

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    alert("Message sent (UI only)!");
                                }}
                                className="space-y-5"
                            >
                                <div className="grid gap-5 md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-xs font-extrabold text-slate-700">
                                            Full Name <span className="text-rose-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                            <input
                                                required
                                                placeholder="John Doe"
                                                className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-xs font-extrabold text-slate-700">
                                            Email <span className="text-rose-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                            <input
                                                type="email"
                                                required
                                                placeholder="john@example.com"
                                                className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-2 block text-xs font-extrabold text-slate-700">
                                        Phone Number
                                    </label>
                                    <input
                                        inputMode="tel"
                                        placeholder="(555) 123-4567"
                                        className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-xs font-extrabold text-slate-700">
                                        Subject <span className="text-rose-500">*</span>
                                    </label>
                                    <input
                                        required
                                        placeholder="What's this about?"
                                        className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-xs font-extrabold text-slate-700">
                                        Your Message <span className="text-rose-500">*</span>
                                    </label>
                                    <textarea
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value.slice(0, max))}
                                        placeholder="Tell us about your situation, documents, deadlines, and questions..."
                                        className="min-h-[170px] w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-7 text-slate-900 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                                    />
                                    <div className="mt-2 text-right text-xs font-semibold text-slate-400">
                                        {message.length}/{max}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-emerald-600 text-sm font-extrabold text-white shadow-[0_18px_45px_-22px_rgba(37,99,235,0.65)] hover:brightness-110"
                                >
                                    <Send className="h-4 w-4" />
                                    Send Message
                                </button>

                                <div className="text-center text-xs text-slate-500">
                                    By submitting, you agree to be contacted by LeoTaxFiling regarding your request.
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_35px_100px_-80px_rgba(2,6,23,0.45)]">
                        <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-6 py-4">
                            <div>
                                <div className="text-sm font-extrabold text-slate-900">Our Location</div>
                                <div className="mt-1 text-xs text-slate-500">
                                    Replace the iframe src with your Google Maps embed link
                                </div>
                            </div>
                            <a
                                href="#"
                                className="text-xs font-extrabold text-indigo-600 hover:underline"
                            >
                                Get Directions
                            </a>
                        </div>

                        {/* NOTE: Replace src with your embed URL */}
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110062.34497159246!2d-95.49170158797914!3d29.76042668367959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d7d5d%3A0x2b6f9a1b6d0b0b9d!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000"
                            className="h-[380px] w-full"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </main>
            </div>
        </Layout>
    );
}

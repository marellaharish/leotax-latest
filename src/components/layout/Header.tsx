import React from "react";
import { NavLink } from "react-router-dom";
import {
    Phone,
    Mail,
    CheckCircle2,
    Home,
    Users,
    BadgeDollarSign,
    MessageSquareText,
    FileText,
    ChevronDown,
    Menu,
    X,
} from "lucide-react";

const Header = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <header className="w-full">
            {/* Top utility bar */}
            <div className="w-full bg-gradient-to-b from-[#0b1220] to-[#0a1326] text-white">
                <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-4">
                    <div className="flex items-center gap-6 text-sm">
                        <a
                            href="tel:+13202245557"
                            className="flex items-center gap-2 text-white/90 hover:text-white"
                        >
                            <Phone className="h-4 w-4" />
                            <span>+1 320 224 5557</span>
                        </a>
                        <a
                            href="mailto:legal@growtaxfiling.com"
                            className="hidden items-center gap-2 text-white/90 hover:text-white sm:flex"
                        >
                            <Mail className="h-4 w-4" />
                            <span>legal@Growtaxfiling.com</span>
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="hidden items-center gap-2 rounded-full bg-[#1d4ed8] px-4 py-1.5 text-xs font-semibold sm:flex">
                            <CheckCircle2 className="h-4 w-4" />
                            <span>Licensed Tax Professionals</span>
                        </div>
                        <div className="hidden text-xs text-white/80 md:block">
                            Mon-Fri: 9AM-6PM EST
                        </div>

                        {/* Mobile: show hours compact */}
                        <div className="text-xs text-white/80 md:hidden">Mon-Fri: 9AM-6PM</div>
                    </div>
                </div>
            </div>

            {/* Main nav */}
            <div className="w-full bg-white shadow-[0_6px_24px_-18px_rgba(15,23,42,0.35)]">
                <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4">
                    {/* Brand */}
                    <a href="/" className="flex items-center gap-3">
                        {/* Replace this block with your real logo image */}
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0ea5e9]/10">
                            <span className="text-sm font-extrabold text-[#0ea5e9]">LT</span>
                        </div>
                        <div className="leading-tight">
                            <div className="text-lg font-extrabold tracking-tight text-[#0f172a]">
                                Leo
                            </div>
                            <div className="-mt-0.5 text-xs font-semibold text-slate-600">
                                Tax Filing
                            </div>
                        </div>
                    </a>

                    {/* Desktop links */}
                    <nav className="hidden items-center gap-1 lg:flex">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold ${isActive
                                    ? 'bg-[#e8f1ff] text-[#2563eb] shadow-[inset_0_0_0_1px_rgba(37,99,235,0.18)]'
                                    : 'text-slate-700 hover:bg-slate-50'
                                }`
                            }
                        >
                            <Home className="h-4 w-4" />
                            Home
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold ${isActive
                                    ? 'bg-[#e8f1ff] text-[#2563eb] shadow-[inset_0_0_0_1px_rgba(37,99,235,0.18)]'
                                    : 'text-slate-700 hover:bg-slate-50'
                                }`
                            }
                        >
                            <Users className="h-4 w-4" />
                            About Us
                        </NavLink>

                        <NavLink
                            to="/refund-status"
                            className={({ isActive }) =>
                                `flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold ${isActive
                                    ? 'bg-[#e8f1ff] text-[#2563eb] shadow-[inset_0_0_0_1px_rgba(37,99,235,0.18)]'
                                    : 'text-slate-700 hover:bg-slate-50'
                                }`
                            }
                        >
                            <BadgeDollarSign className="h-4 w-4" />
                            Refund Status
                        </NavLink>

                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold ${isActive
                                    ? 'bg-[#e8f1ff] text-[#2563eb] shadow-[inset_0_0_0_1px_rgba(37,99,235,0.18)]'
                                    : 'text-slate-700 hover:bg-slate-50'
                                }`
                            }
                        >
                            <MessageSquareText className="h-4 w-4 text-slate-500" />
                            Contact
                        </NavLink>

                        {/* Services dropdown (simple hover) */}
                        <div className="group relative">
                            <button
                                type="button"
                                className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                            >
                                <FileText className="h-4 w-4 text-slate-500" />
                                Services
                                <ChevronDown className="h-4 w-4 text-slate-500 transition-transform group-hover:rotate-180" />
                            </button>

                            <div className="invisible absolute left-0 top-[46px] z-50 w-[260px] translate-y-2 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                                    <NavLink
                                        to="/services/individual"
                                        className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                    >
                                        Individual Tax Filing
                                    </NavLink>
                                    <NavLink
                                        to="/services/business"
                                        className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                    >
                                        Business Tax Filing
                                    </NavLink>
                                    <NavLink
                                        to="/services/itin"
                                        className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                    >
                                        ITIN Services
                                    </NavLink>
                                    <NavLink
                                        to="/services/amendment"
                                        className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                    >
                                        Amendment / Correction
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </nav>

                    {/* Right actions */}
                    <div className="hidden items-center gap-4 lg:flex">
                        <a
                            href="/signin"
                            className="text-sm font-semibold text-slate-700 hover:text-slate-900"
                        >
                            Sign In
                        </a>
                        <a
                            href="/get-started"
                            className="rounded-xl bg-[#2563eb] px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_-14px_rgba(37,99,235,0.8)] hover:brightness-110"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 text-slate-700 hover:bg-slate-50 lg:hidden"
                        aria-label="Toggle menu"
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                {/* Mobile drawer */}
                <div className={`lg:hidden ${open ? "block" : "hidden"}`}>
                    <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-4">
                        <div className="grid gap-2">
                            <a
                                href="/"
                                className="flex items-center gap-2 rounded-xl bg-[#e8f1ff] px-4 py-3 text-sm font-semibold text-[#2563eb]"
                            >
                                <Home className="h-4 w-4" />
                                Home
                            </a>
                            <a
                                href="/about"
                                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                            >
                                <Users className="h-4 w-4 text-slate-500" />
                                About Us
                            </a>
                            <a
                                href="/refund-status"
                                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                            >
                                <BadgeDollarSign className="h-4 w-4 text-slate-500" />
                                Refund Status
                            </a>
                            <a
                                href="/contact"
                                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                            >
                                <MessageSquareText className="h-4 w-4 text-slate-500" />
                                Contact
                            </a>

                            <div className="rounded-2xl border border-slate-200 p-2">
                                <div className="flex items-center gap-2 px-2 py-2 text-sm font-semibold text-slate-700">
                                    <FileText className="h-4 w-4 text-slate-500" />
                                    Services
                                </div>
                                <div className="grid gap-1">
                                    <a
                                        href="/services/individual"
                                        className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                    >
                                        Individual Tax Filing
                                    </a>
                                    <a
                                        href="/services/business"
                                        className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                    >
                                        Business Tax Filing
                                    </a>
                                    <a
                                        href="/services/itin"
                                        className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                    >
                                        ITIN Services
                                    </a>
                                    <a
                                        href="/services/amendment"
                                        className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                    >
                                        Amendment / Correction
                                    </a>
                                </div>
                            </div>

                            <div className="mt-2 grid gap-2">
                                <a
                                    href="/signin"
                                    className="rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-bold text-slate-800 hover:bg-slate-50"
                                >
                                    Sign In
                                </a>
                                <a
                                    href="/get-started"
                                    className="rounded-xl bg-[#2563eb] px-4 py-3 text-center text-sm font-extrabold text-white hover:brightness-110"
                                >
                                    Get Started
                                </a>
                            </div>

                            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-600">
                                <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1.5">
                                    <CheckCircle2 className="h-4 w-4 text-[#2563eb]" />
                                    Licensed Tax Professionals
                                </span>
                                <span className="rounded-full bg-slate-100 px-3 py-1.5">
                                    Mon-Fri: 9AM-6PM EST
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

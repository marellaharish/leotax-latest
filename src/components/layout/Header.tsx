import React from "react";
import { NavLink, useLocation } from "react-router-dom";
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
    BadgeHelp,
    ClipboardList,
    DollarSign,
    Scale,
    ShieldAlert,
    FileCheck2,
    Calculator,
    Receipt,
} from "lucide-react";


type ServiceItem = {
    title: string;
    desc: string;
    slug: string; // routes: /service/:slug
    icon: React.ReactNode;
};

const SERVICE_ITEMS: ServiceItem[] = [
    {
        title: "1040 & 1040 NR Tax Return Filing",
        desc: "Individual and nonresident tax return preparation",
        slug: "1040-1040nr-tax-return-filing",
        icon: <FileText className="h-5 w-5" />,
    },
    {
        title: "Unlimited Tax Consultations",
        desc: "Get answers and guidance from tax professionals",
        slug: "unlimited-tax-consultations",
        icon: <BadgeHelp className="h-5 w-5" />,
    },
    {
        title: "Form 4868 Extension Filing",
        desc: "Tax filing deadline extension support",
        slug: "form-4868-extension-filing",
        icon: <ClipboardList className="h-5 w-5" />,
    },
    {
        title: "ITIN Guidance and Support (Form W-7)",
        desc: "Individual Taxpayer Identification Number applications",
        slug: "itin-guidance-and-support",
        icon: <FileText className="h-5 w-5" />,
    },
    {
        title: "FICA Taxes Withdrawals Guidance",
        desc: "Assistance for FICA-related withdrawals and compliance",
        slug: "fica-taxes-withdrawals-guidance",
        icon: <DollarSign className="h-5 w-5" />,
    },
    {
        title: "Professional Tax Planning",
        desc: "Strategic tax optimization and planning services",
        slug: "professional-tax-planning",
        icon: <Scale className="h-5 w-5" />,
    },
    {
        title: "Tax Expert Support for Notices, Audits & Enquiries",
        desc: "Help responding to IRS/state notices and audit support",
        slug: "notices-audits-enquiries-support",
        icon: <ShieldAlert className="h-5 w-5" />,
    },
    {
        title: "Filed Tax Returns Assessment & Examination",
        desc: "Review and assessment of previously filed returns",
        slug: "filed-tax-returns-assessment-examination",
        icon: <FileCheck2 className="h-5 w-5" />,
    },
    {
        title: "Accurate Tax Estimates",
        desc: "Estimate liabilities/refunds with better accuracy",
        slug: "accurate-tax-estimates",
        icon: <Calculator className="h-5 w-5" />,
    },
    {
        title: "FBAR & FATCA Filing",
        desc: "Foreign account reporting compliance support",
        slug: "fbar-fatca-filing",
        icon: <Receipt className="h-5 w-5" />,
    },
    {
        title: "W4 Assistance",
        desc: "Withholding allowance certificate help",
        slug: "w4-assistance",
        icon: <FileText className="h-5 w-5" />,
    },
];


const Header = () => {
    const [open, setOpen] = React.useState(false);
    const [servicesOpen, setServicesOpen] = React.useState(false); // desktop dropdown
    const servicesRef = React.useRef<HTMLDivElement | null>(null);
    const location = useLocation();


    // Close dropdowns on route change
    React.useEffect(() => {
        setServicesOpen(false);
        setOpen(false);
    }, [location.pathname]);

    // Click outside to close services dropdown
    React.useEffect(() => {
        const onDown = (e: MouseEvent) => {
            if (!servicesRef.current) return;
            if (!servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
        };
        document.addEventListener("mousedown", onDown);
        return () => document.removeEventListener("mousedown", onDown);
    }, []);


    return (
        <header className="w-full">
            {/* Top utility bar */}
            <div className="w-full bg-gradient-to-b from-[#0b1220] to-[#0a1326] text-white">
                <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-4">
                    <div className="flex items-center gap-6 text-sm">
                        <a
                            href="tel:+12393192127"
                            className="flex items-center gap-2 text-white/90 hover:text-white"
                        >
                            <Phone className="h-4 w-4" />
                            <span>+1 239 319 2127</span>
                        </a>
                        <a
                            href="mailto:contact@leotaxfiling.com"
                            className="hidden items-center gap-2 text-white/90 hover:text-white sm:flex"
                        >
                            <Mail className="h-4 w-4" />
                            <span>contact@leotaxfiling.com</span>
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

                            <div className="invisible absolute left-0 top-[46px] z-50 w-[400px] translate-y-2 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                                    {SERVICE_ITEMS.map((s, idx) => (
                                        <NavLink
                                            key={s.slug}
                                            to={`/service/${s.slug}`}
                                            className={({ isActive }) => {
                                                const base =
                                                    "group flex items-start gap-4 rounded-2xl px-3 py-2 transition";
                                                const active =
                                                    "bg-[#eef6ff] shadow-[inset_0_0_0_1px_rgba(37,99,235,0.18)]";
                                                const hover = "hover:bg-slate-50";
                                                // screenshot shows first item highlighted
                                                const firstDefault = idx === 0 ? "bg-[#eef6ff]" : "";
                                                return `${base} ${isActive ? active : `${hover}`}`;
                                            }}
                                            onClick={() => setServicesOpen(false)}
                                        >
                                            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#dbeafe] text-[#2563eb]">
                                                {s.icon}
                                            </div>
                                            <div className="min-w-0">
                                                <div className="truncate text-[14px] font-extrabold leading-snug text-[#2563eb] group-hover:text-[#1d4ed8]">
                                                    {s.title}
                                                </div>
                                                <div className="mt-1 text-[12px] leading-snug text-slate-600">
                                                    {s.desc}
                                                </div>
                                            </div>
                                        </NavLink>
                                    ))}
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
                            href="/signup"
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
                                    {SERVICE_ITEMS.map((s, idx) => (
                                        <NavLink
                                            key={s.slug}
                                            to={`/service/${s.slug}`}
                                            className={`rounded-xl px-3 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50 ${idx === 1 ? "bg-slate-100" : ""
                                                }`}
                                        >
                                            {s.title}
                                        </NavLink>
                                    ))}
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
                                    href="/signup"
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

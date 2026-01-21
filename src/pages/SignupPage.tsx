import React, { useState } from "react";
import { Eye, EyeOff, ShieldCheck, BadgeCheck, Sparkles } from "lucide-react";
import { useLocation, useNavigate, Link } from "react-router-dom";
// keep your existing imports:
import { createUserInfo, logEvent } from "../services/apiServices";
import { isEmail, isEmpty, isValidPhoneNumber } from "../validators/helper";
import { browserName, browserVersion } from "react-device-detect";

// Type definitions
type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    number: string;
    altContactNumber: string;
    password: string;
    confirmPassword: string;
};
type FormErrors = {
    firstName?: string;
    lastName?: string;
    email?: string;
    number?: string;
    altContactNumber?: string;
    password?: string;
    confirmPassword?: string;
    agree?: string;
    [key: string]: string | undefined;
};
type SignupProps = {
    setToken: (token: string) => void;
};
type UserInfo = {
    _id: string;
    email: string;
    // Add other user properties as needed
};
type LoginResponse = {
    token: string;
    userInfo: UserInfo;
};

const primary = "#3b71ca";

export default function Signup({ setToken }: SignupProps) {
    const [error, setError] = useState({});
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        altContactNumber: "",
        password: "",
        confirmPassword: "",
    });

    const [strongPassword, setstrongPassword] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [agree, setAgree] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    function updateForm(value: FormData) {
        return setFormData((prev) => ({ ...prev, ...value }));
    }

    // OPTIONAL: password strength detector for your strongPassword flag
    function computeStrongPassword(pw: string) {
        const okLen = pw.length >= 8;
        const hasUpper = /[A-Z]/.test(pw);
        const hasNum = /[0-9]/.test(pw);
        const hasSym = /[^A-Za-z0-9]/.test(pw);
        return okLen && hasUpper && hasNum && hasSym;
    }

    let validateForm = (e: React.FormEvent) => {
        e.stopPropagation();
        let errors = {};

        if (isEmpty(formData.firstName)) errors.firstName = "Firstname can't be blank";
        if (isEmpty(formData.lastName)) errors.lastName = "Lastname can't be blank";
        if (isEmpty(formData.number)) {
            errors.number = "Phone number can't be blank";
        } else if (!isValidPhoneNumber(formData.number)) {
            errors.number = "Please enter a valid phone number";
        }

        if (isEmpty(formData.email)) {
            errors.email = "Email can't be blank";
        } else if (!isEmail(formData.email)) {
            errors.email = "Please enter a valid email";
        }

        if (isEmpty(formData.password)) {
            errors.password = "Password can't be blank";
        } else if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }

        if (!agree) {
            errors.agree = "Please accept Terms & Privacy Policy";
        }

        if (isEmpty(errors)) return true;
        return errors;
    };

    function setUserSession(userInfo: UserInfo) {
        localStorage.setItem("loggedUserInfo", JSON.stringify(userInfo));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        e.stopPropagation();

        const updates = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
            number: formData.number,
        };

        let noerrors = validateForm(e);

        if (noerrors === true) {
            try {
                let saverep = await createUserInfo(updates);

                // Handle non-200 responses
                if (saverep.status === 400) {
                    const errorData = await saverep.json();
                    if (errorData.message?.includes('email')) {
                        setError({ email: 'This email is already registered' });
                    } else if (errorData.message?.includes('phone')) {
                        setError({ number: 'This phone number is already registered' });
                    } else {
                        setError({ email: 'Registration failed. Please try again.' });
                    }
                    return;
                }

                if (!saverep.ok) {
                    throw new Error('Registration failed');
                }

                let jsOBj = await saverep.json();

                setToken(jsOBj.token);

                let ip = localStorage.getItem("ipaddress") || "--";
                let browserinfo = browserName + "-" + browserVersion + ".0.0";
                let Eventtype = "Signup";
                let flag = "Signup Successfull";
                let username1 = jsOBj.userInfo.email;
                const id = jsOBj.userInfo._id;

                logEvent({ Eventtype, username1, ip, flag, browserinfo, id }, id);
                await setUserSession(jsOBj.userInfo);
                navigate("/dashboard");
            } catch (err) {
                console.error("Registration error:", err);
                setError({ email: 'Registration failed. Please try again.' });
            }
        } else {
            setError(noerrors);
        }
    };

    // update strongPassword as user types
    React.useEffect(() => {
        setstrongPassword(computeStrongPassword(formData.password || ""));
    }, [formData.password]);

    return (
        <div className="min-h-screen">
            {/* Background like your screenshot */}
            <div className="fixed inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_60%_20%,rgba(59,113,202,0.28),transparent_55%),radial-gradient(900px_500px_at_20%_70%,rgba(34,197,214,0.20),transparent_55%),linear-gradient(180deg,#0b2a57_0%,#0a1f44_45%,#071737_100%)]" />

            <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-10">
                <div className="w-full max-w-[1020px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.65)] backdrop-blur">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* LEFT PANEL */}
                        <div className="relative overflow-hidden bg-[linear-gradient(180deg,#0d5c7b_0%,#0b3f5a_55%,#082a44_100%)] p-8 md:p-10">
                            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                            <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

                            <div className="flex items-center gap-3">
                                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                                    <Sparkles className="h-5 w-5 text-white" />
                                </div>
                                <div className="text-white">
                                    <div className="text-lg font-extrabold leading-none">Elite Tax Filing</div>
                                    <div className="mt-1 text-xs font-semibold text-white/70">
                                        Secure • Simple • Smart
                                    </div>
                                </div>
                            </div>

                            <h2 className="mt-10 text-3xl font-extrabold tracking-tight text-white">
                                Welcome to EliteTax Filing
                            </h2>
                            <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
                                Create your account to manage filings, upload documents, and track your status.
                            </p>

                            <div className="mt-8 space-y-3">
                                <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                                    <ShieldCheck className="mt-0.5 h-5 w-5 text-white" />
                                    <div>
                                        <div className="text-sm font-extrabold text-white">Bank-grade security</div>
                                        <div className="mt-0.5 text-xs text-white/70">
                                            Encrypted data + access controls.
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                                    <BadgeCheck className="mt-0.5 h-5 w-5 text-white" />
                                    <div>
                                        <div className="text-sm font-extrabold text-white">Quick onboarding</div>
                                        <div className="mt-0.5 text-xs text-white/70">
                                            Start in minutes with a clean setup.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 text-xs text-white/60">
                                Need help? Contact support from the portal footer.
                            </div>
                        </div>

                        {/* RIGHT FORM */}
                        <div className="bg-white p-8 md:p-10">
                            <div className="mb-6">
                                <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                                    Create account
                                </div>
                                <h1 className="mt-2 text-2xl font-extrabold text-slate-900">Sign up</h1>
                                <p className="mt-1 text-sm text-slate-500">
                                    Enter your details to create an account.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* First / Last name */}
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label className="text-sm font-extrabold text-slate-800">First Name</label>
                                        <input
                                            className={[
                                                "h-12 w-full rounded-xl border bg-white px-4 text-sm outline-none",
                                                error.firstName ? "border-red-400 ring-2 ring-red-100" : "border-slate-200 focus:ring-2",
                                            ].join(" ")}
                                            style={!error.firstName ? { boxShadow: "0 0 0 0px transparent" } : undefined}
                                            value={formData.firstName}
                                            onChange={(e) => updateForm({ firstName: e.target.value })}
                                            placeholder="First name"
                                        />
                                        {error.firstName && (
                                            <div className="text-xs font-semibold text-red-600">{error.firstName}</div>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-extrabold text-slate-800">Last Name</label>
                                        <input
                                            className={[
                                                "h-12 w-full rounded-xl border bg-white px-4 text-sm outline-none",
                                                error.lastName ? "border-red-400 ring-2 ring-red-100" : "border-slate-200 focus:ring-2",
                                            ].join(" ")}
                                            value={formData.lastName}
                                            onChange={(e) => updateForm({ lastName: e.target.value })}
                                            placeholder="Last name"
                                        />
                                        {error.lastName && (
                                            <div className="text-xs font-semibold text-red-600">{error.lastName}</div>
                                        )}
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label className="text-sm font-extrabold text-slate-800">Email</label>
                                    <input
                                        className={[
                                            "h-12 w-full rounded-xl border bg-white px-4 text-sm outline-none",
                                            error.email ? "border-red-400 ring-2 ring-red-100" : "border-slate-200 focus:ring-2",
                                        ].join(" ")}
                                        value={formData.email}
                                        onChange={(e) => updateForm({ email: e.target.value })}
                                        placeholder="you@example.com"
                                        autoComplete="email"
                                    />
                                    {error.email && (
                                        <div className="text-xs font-semibold text-red-600">{error.email}</div>
                                    )}
                                </div>

                                {/* Number / Alt number */}
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label className="text-sm font-extrabold text-slate-800">Phone</label>
                                        <input
                                            className={[
                                                "h-12 w-full rounded-xl border bg-white px-4 text-sm outline-none",
                                                error.number ? "border-red-400 ring-2 ring-red-100" : "border-slate-200 focus:ring-2",
                                            ].join(" ")}
                                            value={formData.number}
                                            onChange={(e) => {
                                                // Allow only numbers, +, -, (, ), and spaces
                                                const value = e.target.value.replace(/[^0-9+\-()\s]/g, '');
                                                updateForm({ number: value });
                                            }}
                                            onBlur={(e) => {
                                                // Format the phone number on blur
                                                const value = e.target.value.trim();
                                                if (value) {
                                                    // Remove all non-digit characters except leading +
                                                    const digits = value.replace(/[^\d+]/g, '');
                                                    // Format as per E.164 standard
                                                    if (digits.startsWith('+')) {
                                                        updateForm({ number: `+${digits.substring(1).replace(/\D/g, '')}` });
                                                    } else {
                                                        updateForm({ number: digits });
                                                    }
                                                }
                                            }}
                                            placeholder="e.g. +1 (123) 456-7890"
                                            autoComplete="tel"
                                            maxLength={20}
                                        />
                                        {error.number && (
                                            <div className="text-xs font-semibold text-red-600">{error.number}</div>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-extrabold text-slate-800">
                                            Alt Contact Number
                                        </label>
                                        <input
                                            className={[
                                                "h-12 w-full rounded-xl border bg-white px-4 text-sm outline-none",
                                                error.altContactNumber
                                                    ? "border-red-400 ring-2 ring-red-100"
                                                    : "border-slate-200 focus:ring-2",
                                            ].join(" ")}
                                            value={formData.altContactNumber}
                                            onChange={(e) => updateForm({ altContactNumber: e.target.value })}
                                            placeholder="Alternate number"
                                        />
                                        {error.altContactNumber && (
                                            <div className="text-xs font-semibold text-red-600">
                                                {error.altContactNumber}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Passwords */}
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label className="text-sm font-extrabold text-slate-800">Password</label>
                                        <div className="relative">
                                            <input
                                                className={[
                                                    "h-12 w-full rounded-xl border bg-white px-4 pr-11 text-sm outline-none",
                                                    error.password ? "border-red-400 ring-2 ring-red-100" : "border-slate-200 focus:ring-2",
                                                ].join(" ")}
                                                value={formData.password}
                                                onChange={(e) => updateForm({ password: e.target.value })}
                                                placeholder="Create password"
                                                type={showPass ? "text" : "password"}
                                                autoComplete="new-password"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPass((s) => !s)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-500 hover:bg-slate-100"
                                                aria-label="Toggle password"
                                            >
                                                {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                            </button>
                                        </div>

                                        {error.password && (
                                            <div className="text-xs font-semibold text-red-600">{error.password}</div>
                                        )}

                                        <div className="pt-1 text-[11px] text-slate-500">
                                            Strong password:{" "}
                                            <span className={strongPassword ? "font-extrabold text-emerald-600" : "font-bold text-slate-600"}>
                                                {strongPassword ? "Yes" : "No"}
                                            </span>
                                            <span className="ml-2 text-slate-400">(8+ chars, upper, number, symbol)</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-extrabold text-slate-800">Confirm Password</label>
                                        <div className="relative">
                                            <input
                                                className={[
                                                    "h-12 w-full rounded-xl border bg-white px-4 pr-11 text-sm outline-none",
                                                    error.confirmPassword
                                                        ? "border-red-400 ring-2 ring-red-100"
                                                        : "border-slate-200 focus:ring-2",
                                                ].join(" ")}
                                                value={formData.confirmPassword}
                                                onChange={(e) => updateForm({ confirmPassword: e.target.value })}
                                                placeholder="Confirm password"
                                                type={showConfirm ? "text" : "password"}
                                                autoComplete="new-password"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirm((s) => !s)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-500 hover:bg-slate-100"
                                                aria-label="Toggle confirm password"
                                            >
                                                {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                            </button>
                                        </div>

                                        {error.confirmPassword && (
                                            <div className="text-xs font-semibold text-red-600">
                                                {error.confirmPassword}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Terms */}
                                <div className="pt-1">
                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            checked={agree}
                                            onChange={(e) => setAgree(e.target.checked)}
                                            className="mt-1 h-4 w-4 rounded border-slate-300"
                                        />
                                        <div className="text-sm text-slate-600">
                                            I agree to the{" "}
                                            <Link to="/terms" className="font-extrabold" style={{ color: primary }}>
                                                Terms of Service
                                            </Link>{" "}
                                            and{" "}
                                            <Link to="/privacy" className="font-extrabold" style={{ color: primary }}>
                                                Privacy Policy
                                            </Link>
                                            .
                                            {error.agree && (
                                                <div className="mt-1 text-xs font-semibold text-red-600">{error.agree}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="h-12 w-full rounded-xl text-base font-extrabold text-white shadow-sm transition hover:opacity-95"
                                    style={{ backgroundColor: primary }}
                                >
                                    Create Account
                                </button>

                                <div className="pt-1 text-center text-sm text-slate-600">
                                    Already have an account?{" "}
                                    <Link to="/auth/signin" className="font-extrabold" style={{ color: primary }}>
                                        Sign in
                                    </Link>
                                </div>

                                <div className="pt-2 text-center text-[11px] text-slate-500">
                                    We’ll never share your data. You can delete your account anytime.
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

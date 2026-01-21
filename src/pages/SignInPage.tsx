import React, { useEffect, useState } from "react";
import { Eye, EyeOff, ShieldCheck, BadgeCheck, Sparkles, Mail, Lock } from "lucide-react";
import { LeoLogo } from "../assets";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { browserName, browserVersion } from "react-device-detect";
import { logEvent, loginUser } from "../services/apiServices.js";

const primary = "#3b71ca";

/** ---------- Types ---------- */
type LoginProps = {
    setToken: (token: string) => void;
};

type Credentials = {
    email: string;
    password: string;
};

type UserInfo = {
    _id: string;
    email: string;
    role: string;
};

type LoginSuccess = {
    token: string;
    userInfo: UserInfo;
};

type LoginError = {
    error?: string;
    errorr?: string; // your backend uses errorr in some cases
    message?: string;
};

type LoginResponseJson = Partial<LoginSuccess> & LoginError;

/** safe JSON parse helper */
async function safeJson(res: Response): Promise<LoginResponseJson> {
    try {
        return (await res.json()) as LoginResponseJson;
    } catch {
        return {};
    }
}

/** basic client validation (like signup style) */
function validateLogin(email: string, password: string) {
    const errors: { email?: string; password?: string } = {};
    if (!email?.trim()) errors.email = "Email can't be blank";
    else if (!/^\S+@\S+\.\S+$/.test(email.trim())) errors.email = "Please enter a valid email";
    if (!password?.trim()) errors.password = "Password can't be blank";
    return errors;
}

const Login: React.FC<LoginProps> = ({ setToken }) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    // per-field errors
    const [fieldErr, setFieldErr] = useState<{ email?: string; password?: string }>({});
    // banner error (api)
    const [error, setError] = useState<string>("");
    const [apiError, setApiError] = useState<boolean>(false);

    const [showPass, setShowPass] = useState<boolean>(false);
    const [remember, setRemember] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
        setError("");
        setApiError(false);
        setFieldErr({});
    }, [email, password]);

    function setUserSession(userInfo: UserInfo) {
        localStorage.setItem("loggedUserInfo", JSON.stringify(userInfo));
    }

    async function afterLogin(jOBj: LoginSuccess) {
        // Store user data in localStorage
        localStorage.setItem('userToken', jOBj.token);
        localStorage.setItem('userInfo', JSON.stringify(jOBj.userInfo));

        // Redirect based on user role
        if (jOBj.userInfo.role === "admin") {
            navigate("/admindashboard");
        } else {
            navigate("/dashboard");
        }

        // Log the login event
        try {
            const url = "https://api.ipify.org?format=json";
            const res = await axios.get(url);
            localStorage.setItem("ipaddress", res.data.ip);
        } catch (err) {
            console.error("Error fetching IP address:", err);
        }

        const ip = localStorage.getItem("ipaddress") || "--";
        const browserinfo = browserName + "-" + browserVersion + ".0.0";
        const Eventtype = "login";
        const flag = "Login Successfull";
        const username1 = jOBj.userInfo.email;
        const id = jOBj.userInfo._id;

        logEvent({ Eventtype, username1, ip, flag, browserinfo, id }, id);
    }

    function setWithExpiry(key: string, value: string, expiration: number) {
        const now = new Date();
        const item = {
            value,
            expiry: now.getTime() + expiration,
        };
        localStorage.setItem(key, JSON.stringify(item));
    }

    /** ---- SAME submitHandler behavior, but fixed error handling ---- */
    const submitHandler = async (e?: React.FormEvent, credentials?: Credentials) => {
        if (e) e.preventDefault();

        setApiError(false);
        setError("");
        setLoading(true);

        const currentEmail = credentials?.email ?? email;
        const currentPassword = credentials?.password ?? password;

        // validate like signup
        const v = validateLogin(currentEmail, currentPassword);
        setFieldErr(v);
        if (Object.keys(v).length > 0) {
            setLoading(false);
            return;
        }

        try {
            const res: any = credentials ? await loginUser(credentials) : await loginUser({ email, password });

            // loginUser sometimes returns "false" in your code
            if (res === "false") {
                setApiError(true);
                setError("Unable to connect. Please try again.");
                setLoading(false);
                return;
            }

            // res is a fetch Response (based on your old code using res.json())
            const data = (await safeJson(res as Response)) as LoginResponseJson;

            // ✅ Only success if status === 200 AND token + userInfo exist
            const ok =
                (res as Response).status === 200 &&
                typeof data.token === "string" &&
                !!data.userInfo &&
                typeof (data.userInfo as any)._id === "string";

            if (!ok) {
                // Use backend message if present
                const backendMsg =
                    data.errorr || data.error || data.message || "Invalid email/password";

                // map your custom cases
                if (backendMsg.includes("Suspended")) setError("This Gym account was Suspended!");
                else if (backendMsg.includes("Deleted")) setError("This Gym account was deleted!");
                else setError(backendMsg);

                setApiError(true);
                setLoading(false);
                return;
            }

            // success path (same as your old code)
            const jOBj = data as LoginSuccess;

            if (!credentials) {
                if (remember) {
                    setWithExpiry("email", email, 0);
                    setWithExpiry("password", password, 0);
                } else {
                    localStorage.removeItem("email");
                    localStorage.removeItem("password");
                }
            }

            setToken(jOBj.token);
            setUserSession(jOBj.userInfo);
            await afterLogin(jOBj);
        } catch (err) {
            console.log("Error::::::::::::", err);
            setApiError(true);
            setError("Invalid email/password");
        } finally {
            setLoading(false);
        }
    };

    /** ---- SAME auto-login logic, but safe ---- */
    useEffect(() => {
        let tsesson = false;

        async function fetchData() {
            try {
                const logged = JSON.parse(localStorage.getItem("loggedUserInfo") || "null");
                if (logged && logged._id) tsesson = true;
            } catch (e) {
                console.log("session parse error:", e);
            }

            if (tsesson) {
                if (localStorage.getItem("email") || localStorage.getItem("password")) {
                    try {
                        const savedEmail = JSON.parse(localStorage.getItem("email") || "null")?.value || "";
                        const savedPass = JSON.parse(localStorage.getItem("password") || "null")?.value || "";

                        if (savedEmail && savedPass) {
                            setEmail(savedEmail);
                            setPassword(savedPass);

                            const creds: Credentials = { email: savedEmail, password: savedPass };
                            submitHandler(undefined, creds);
                        }
                    } catch (e) {
                        console.log("saved creds parse error:", e);
                    }
                } else {
                    if (localStorage.getItem("SError")) {
                        setError(localStorage.getItem("SError") || "");
                        setTimeout(() => {
                            setError("");
                            localStorage.removeItem("SError");
                        }, 5000);
                    }
                }
            }
        }

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>

            <div className="min-h-[80vh]">
                {/* Background like the new design */}
                <div className="fixed inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_60%_20%,rgba(59,113,202,0.28),transparent_55%),radial-gradient(900px_500px_at_20%_70%,rgba(34,197,214,0.20),transparent_55%),linear-gradient(180deg,#0b2a57_0%,#0a1f44_45%,#071737_100%)]" />

                <div className="mx-auto flex min-h-[80vh] max-w-6xl items-center justify-center px-4 py-10">
                    <div className="w-full max-w-[980px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.65)] backdrop-blur">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* LEFT BRAND */}
                            <div className="relative overflow-hidden bg-[linear-gradient(180deg,#0d5c7b_0%,#0b3f5a_55%,#082a44_100%)] p-8 md:p-10">
                                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                                <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

                                <div className="flex items-center gap-3">
                                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                                        <Sparkles className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="text-white">
                                        <div className="text-lg font-extrabold leading-none">Leo Tax Filing</div>
                                        <div className="mt-1 text-xs font-semibold text-white/70">
                                            Secure • Simple • Smart
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 flex items-center justify-center">
                                    <img src={LeoLogo} alt="Leo Tax Filing" className="h-16 w-auto opacity-95" />
                                </div>

                                <h2 className="mt-8 text-3xl font-extrabold tracking-tight text-white">
                                    Welcome back
                                </h2>
                                <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
                                    Sign in to access your dashboard, documents, and filing status.
                                </p>

                                <div className="mt-8 space-y-3">
                                    <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                                        <ShieldCheck className="mt-0.5 h-5 w-5 text-white" />
                                        <div>
                                            <div className="text-sm font-extrabold text-white">Secure access</div>
                                            <div className="mt-0.5 text-xs text-white/70">
                                                Encrypted sessions + safe login.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                                        <BadgeCheck className="mt-0.5 h-5 w-5 text-white" />
                                        <div>
                                            <div className="text-sm font-extrabold text-white">Fast workflow</div>
                                            <div className="mt-0.5 text-xs text-white/70">
                                                Continue your filing in minutes.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 text-xs text-white/60">
                                    Don’t have an account?{" "}
                                    <Link to="/signup" className="font-extrabold text-white underline underline-offset-4">
                                        Create one
                                    </Link>
                                </div>
                            </div>

                            {/* RIGHT FORM */}
                            <div className="bg-white p-8 md:p-10">
                                <div className="mb-6">
                                    <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                                        Sign in
                                    </div>
                                    <h1 className="mt-2 text-2xl font-extrabold text-slate-900">
                                        Sign in to Leo Tax Filing
                                    </h1>
                                    <p className="mt-1 text-sm text-slate-500">
                                        Welcome back! Please sign in to continue.
                                    </p>
                                </div>

                                {(error || apiError) && (
                                    <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                                        <div className="font-extrabold">Login failed</div>
                                        <div className="mt-0.5">{error || "Invalid email/password"}</div>
                                    </div>
                                )}

                                <form onSubmit={(e) => submitHandler(e)} className="space-y-4">
                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-extrabold text-slate-800">Email address</label>
                                        <div className="relative">
                                            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                                <Mail className="h-4 w-4" />
                                            </span>
                                            <input
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                type="email"
                                                autoComplete="email"
                                                placeholder="you@example.com"
                                                className={[
                                                    "h-12 w-full rounded-xl border bg-white pl-10 pr-4 text-sm outline-none",
                                                    fieldErr.email
                                                        ? "border-red-400 ring-2 ring-red-100"
                                                        : "border-slate-200 focus:ring-2 focus:ring-slate-200",
                                                ].join(" ")}
                                            />
                                        </div>
                                        {fieldErr.email && (
                                            <div className="text-xs font-semibold text-red-600">{fieldErr.email}</div>
                                        )}
                                    </div>

                                    {/* Password */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-extrabold text-slate-800">Password</label>
                                        <div className="relative">
                                            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                                <Lock className="h-4 w-4" />
                                            </span>
                                            <input
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                type={showPass ? "text" : "password"}
                                                autoComplete="current-password"
                                                placeholder="Enter your password"
                                                className={[
                                                    "h-12 w-full rounded-xl border bg-white pl-10 pr-11 text-sm outline-none",
                                                    fieldErr.password
                                                        ? "border-red-400 ring-2 ring-red-100"
                                                        : "border-slate-200 focus:ring-2 focus:ring-slate-200",
                                                ].join(" ")}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPass((s) => !s)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-500 hover:bg-slate-100"
                                                aria-label="Toggle password visibility"
                                            >
                                                {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                            </button>
                                        </div>
                                        {fieldErr.password && (
                                            <div className="text-xs font-semibold text-red-600">{fieldErr.password}</div>
                                        )}

                                        <div className="flex items-center justify-between pt-1">
                                            <label className="flex items-center gap-2 text-sm text-slate-600">
                                                <input
                                                    type="checkbox"
                                                    checked={remember}
                                                    onChange={(e) => setRemember(e.target.checked)}
                                                    className="h-4 w-4 rounded border-slate-300"
                                                />
                                                Remember me
                                            </label>

                                            <Link
                                                to="/forgot-password"
                                                className="text-sm font-extrabold"
                                                style={{ color: primary }}
                                            >
                                                Forgot password?
                                            </Link>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className={[
                                            "h-12 w-full rounded-xl text-base font-extrabold text-white shadow-sm transition",
                                            loading ? "cursor-not-allowed opacity-80" : "hover:opacity-95",
                                        ].join(" ")}
                                        style={{ backgroundColor: primary }}
                                    >
                                        {loading ? "Signing in..." : "Sign In"}
                                    </button>

                                    <div className="pt-1 text-center text-sm text-slate-600">
                                        Don&apos;t have an account?{" "}
                                        <Link to="/auth/signup" className="font-extrabold" style={{ color: primary }}>
                                            Sign Up
                                        </Link>
                                    </div>

                                    <div className="pt-2 text-center text-[11px] text-slate-500">
                                        By continuing, you agree to our{" "}
                                        <Link to="/terms" className="font-bold" style={{ color: primary }}>
                                            Terms
                                        </Link>{" "}
                                        and{" "}
                                        <Link to="/privacy" className="font-bold" style={{ color: primary }}>
                                            Privacy Policy
                                        </Link>
                                        .
                                    </div>
                                </form>

                                {/* Optional divider + UI-only buttons */}
                                <div className="mt-7">
                                    <div className="flex items-center gap-3">
                                        <div className="h-px flex-1 bg-slate-200" />
                                        <div className="text-xs font-bold text-slate-400">OR</div>
                                        <div className="h-px flex-1 bg-slate-200" />
                                    </div>

                                    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                        <button
                                            type="button"
                                            className="h-11 rounded-xl border border-slate-200 bg-white text-sm font-extrabold text-slate-700 hover:bg-slate-50"
                                        >
                                            Continue with Google
                                        </button>
                                        <button
                                            type="button"
                                            className="h-11 rounded-xl border border-slate-200 bg-white text-sm font-extrabold text-slate-700 hover:bg-slate-50"
                                        >
                                            Continue with Microsoft
                                        </button>
                                    </div>

                                    <div className="mt-5 text-center text-[11px] text-slate-500">
                                        Social sign-in is UI-only unless OAuth is connected.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;

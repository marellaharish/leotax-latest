'use client';

import * as React from 'react';
import { Eye, EyeOff } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const primary = '#3b71ca';

function onlyPhoneChars(value: string) {
    return value.replace(/[^\d+]/g, '');
}

export default function SignupPage() {
    const [accountType, setAccountType] = React.useState<'client' | 'employee'>('client');
    const [showPass, setShowPass] = React.useState(false);
    const [showConfirm, setShowConfirm] = React.useState(false);

    const [fullName, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [agree, setAgree] = React.useState(false);

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        // UI only — no validation / no API calls
        console.log('signup ui only', {
            accountType,
            fullName,
            email,
            phone,
            password,
            confirmPassword,
            agree,
        });
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="mx-auto flex min-h-screen max-w-[520px] items-center px-4 py-10">
                <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="mb-6">
                        <h1 className="text-xl font-extrabold text-slate-900">Create your account</h1>
                        <p className="mt-1 text-sm text-slate-500">
                            Register to start your tax filing in minutes.
                        </p>
                    </div>

                    {/* Account type segmented control */}
                    <div className="mb-6">
                        <div className="text-sm font-bold text-slate-700">Account Type</div>

                        <div className="mt-3 grid grid-cols-2 gap-3 rounded-2xl bg-slate-50 p-2">
                            <button
                                type="button"
                                onClick={() => setAccountType('client')}
                                className={[
                                    'h-12 rounded-xl text-sm font-extrabold transition',
                                    accountType === 'client'
                                        ? 'text-white shadow-sm'
                                        : 'bg-white text-slate-700 border border-slate-200',
                                ].join(' ')}
                                style={accountType === 'client' ? { backgroundColor: primary } : undefined}
                            >
                                Client
                            </button>

                            <button
                                type="button"
                                onClick={() => setAccountType('employee')}
                                className={[
                                    'h-12 rounded-xl text-sm font-extrabold transition',
                                    accountType === 'employee'
                                        ? 'text-white shadow-sm'
                                        : 'bg-white text-slate-700 border border-slate-200',
                                ].join(' ')}
                                style={accountType === 'employee' ? { backgroundColor: primary } : undefined}
                            >
                                Employee
                            </button>
                        </div>

                        <p className="mt-2 text-sm text-slate-500">
                            {accountType === 'client'
                                ? 'Register as a client to file your taxes.'
                                : 'Register as an employee to manage client filings.'}
                        </p>
                    </div>

                    <form onSubmit={onSubmit} className="space-y-4">
                        {/* Full Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Full Name</label>
                            <Input
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Enter your full name"
                                className="h-12 rounded-xl border-slate-200 bg-white"
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Email Address</label>
                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className="h-12 rounded-xl border-slate-200 bg-white"
                                inputMode="email"
                                autoComplete="email"
                            />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">
                                Phone Number <span className="text-slate-400">(Optional)</span>
                            </label>
                            <Input
                                value={phone}
                                onChange={(e) => setPhone(onlyPhoneChars(e.target.value))}
                                placeholder="+1 (555) 123-4567"
                                className="h-12 rounded-xl border-slate-200 bg-white"
                                inputMode="tel"
                                autoComplete="tel"
                            />
                            <p className="text-xs text-slate-500">
                                Used for updates and account recovery (no spam).
                            </p>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Password</label>
                            <div className="relative">
                                <Input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type={showPass ? 'text' : 'password'}
                                    placeholder="Create a password (min. 8 characters)"
                                    className="h-12 rounded-xl border-slate-200 bg-white pr-11"
                                    autoComplete="new-password"
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
                        </div>

                        {/* Confirm Password */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Confirm Password</label>
                            <div className="relative">
                                <Input
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    type={showConfirm ? 'text' : 'password'}
                                    placeholder="Confirm your password"
                                    className="h-12 rounded-xl border-slate-200 bg-white pr-11"
                                    autoComplete="new-password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirm((s) => !s)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-500 hover:bg-slate-100"
                                    aria-label="Toggle confirm password visibility"
                                >
                                    {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>

                        {/* Terms */}
                        <div className="pt-1">
                            <div className="flex items-start gap-3">
                                <Checkbox checked={agree} onCheckedChange={(v) => setAgree(!!v)} />
                                <div className="text-sm text-slate-600">
                                    I agree to the{' '}
                                    <a href="/terms" className="font-bold" style={{ color: primary }}>
                                        Terms of Service
                                    </a>{' '}
                                    and{' '}
                                    <a href="/privacy" className="font-bold" style={{ color: primary }}>
                                        Privacy Policy
                                    </a>
                                    .
                                </div>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="h-12 w-full rounded-xl text-base font-extrabold"
                            style={{ backgroundColor: primary }}
                        >
                            Create Account
                        </Button>

                        <div className="pt-1 text-center text-sm text-slate-600">
                            Already have an account?{' '}
                            <a href="/auth/signin" className="font-extrabold" style={{ color: primary }}>
                                Sign in
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

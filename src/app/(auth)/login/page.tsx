"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const features = [
  {
    title: "Revenue Analytics",
    description: "Track MRR, ARR, and growth metrics in real time",
  },
  {
    title: "Account Management",
    description: "Monitor customer health and reduce churn",
  },
  {
    title: "AI-Powered Insights",
    description: "Get intelligent recommendations from your data",
  },
  {
    title: "Workflow Automation",
    description: "Streamline tasks across your entire team",
  },
];

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push("/");
    }, 800);
  };

  return (
    <>
      {/* Left — Branding Panel */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between bg-gradient-to-br from-brand-900 via-brand-800 to-brand-600 p-12 text-white">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-lg font-bold backdrop-blur-sm">
              S
            </div>
            <span className="text-xl font-semibold">{siteConfig.name}</span>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold leading-tight">
              Your business operations,
              <br />
              all in one place.
            </h1>
            <p className="mt-3 text-lg text-brand-200">
              Track revenue, manage accounts, automate workflows, and make
              data-driven decisions — faster.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg bg-white/10 p-4 backdrop-blur-sm"
              >
                <h3 className="text-sm font-semibold">{feature.title}</h3>
                <p className="mt-1 text-xs text-brand-200">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-brand-300">
          Trusted by 200+ SaaS companies worldwide
        </p>
      </div>

      {/* Right — Login Form */}
      <div className="flex flex-1 items-center justify-center bg-surface p-8">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="mb-8 flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-2.5 lg:hidden mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white text-lg font-bold">
                S
              </div>
              <span className="text-xl font-semibold text-content">
                {siteConfig.name}
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-content">Welcome back</h2>
            <p className="mt-1 text-sm text-content-secondary">
              Sign in to your account to continue
            </p>
          </div>

          {/* Social buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <Button variant="outline" size="md" type="button" className="text-sm">
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </Button>
            <Button variant="outline" size="md" type="button" className="text-sm">
              <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </Button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-surface-border" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-surface px-2 text-content-tertiary">
                or continue with email
              </span>
            </div>
          </div>

          <form onSubmit={handleSignIn} className="space-y-4">
            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="alex@acmecorp.com"
              defaultValue="alex@acmecorp.com"
            />
            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              defaultValue="demo1234"
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-content-secondary">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded border-surface-border text-brand-600 focus:ring-brand-500"
                />
                Remember me
              </label>
              <button
                type="button"
                className="text-sm text-brand-600 hover:text-brand-700 font-medium"
              >
                Forgot password?
              </button>
            </div>

            <Button className="w-full" disabled={loading}>
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-content-secondary">
            Don&apos;t have an account?{" "}
            <button className="font-medium text-brand-600 hover:text-brand-700">
              Start free trial
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

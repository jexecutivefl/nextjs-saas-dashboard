import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function LoginPage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-white font-bold">
            S
          </div>
          <h1 className="text-xl font-semibold">{siteConfig.name}</h1>
          <p className="text-sm text-content-secondary">
            Sign in to your account
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="you@company.com"
        />
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
        />
        <Button className="w-full">Sign In</Button>
        <p className="text-center text-xs text-content-tertiary">
          This is a demo app. Auth is not implemented.
        </p>
      </CardContent>
    </Card>
  );
}

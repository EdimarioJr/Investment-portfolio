import Link from "next/link";
import { Compass, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-slate-100 dark:from-black dark:to-slate-900 text-slate-900 dark:text-slate-100">
      <div className="container mx-auto px-4 h-screen flex items-center justify-center">
        <Card className="max-w-md w-full bg-white/70 dark:bg-slate-900/50 border-orange-200/50 dark:border-slate-700/50 backdrop-blur-sm p-6">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Compass className="w-24 h-24 text-orange-500 dark:text-cyan-500 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-600 dark:text-cyan-400">
                    404
                  </span>
                </div>
              </div>
            </div>

            <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-amber-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
              Page Not Found
            </h1>

            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Oops! It seems you've ventured into uncharted territory.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                data-testid="return-home"
                asChild
                variant="outline"
                className="bg-white/50 dark:bg-slate-800/50 border-orange-200/50 dark:border-slate-700/50 hover:bg-orange-50 dark:hover:bg-slate-800"
              >
                <Link href="/" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Return Home
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

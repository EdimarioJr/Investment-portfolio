"use client";

import { Hexagon, Moon, Search, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTheme } from "next-themes";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState, useTransition } from "react";
import { debounce } from "@/lib/utils";

export function Header() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleSearch = useCallback(
    debounce((term: string) => {
      const params = new URLSearchParams(searchParams);
      if (term) {
        params.set("search", term);
      } else {
        params.delete("search");
      }
      startTransition(() => {
        router.replace(`?${params.toString()}`, { scroll: false });
      });
    }, 300),
    [searchParams, router]
  );

  return (
    <header className="flex items-center justify-between py-4 border-b border-orange-200/50 dark:border-slate-700/50 mb-6">
      <div className="flex items-center space-x-2">
        <Hexagon className="h-8 w-8 text-cyan-500" />
        <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Investment Portfolio
        </h1>
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative hidden md:flex items-center">
          <Search className="absolute left-3 h-4 w-4 text-slate-400" />
          <input
            data-testid="search-input"
            type="text"
            placeholder="Search assets..."
            defaultValue={searchParams.get("search") ?? ""}
            onChange={(e) => handleSearch(e.target.value)}
            className="bg-white/50 dark:bg-slate-800/50 rounded-full pl-9 pr-4 py-1.5 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm text-sm w-48 placeholder:text-slate-500 focus:outline-none focus:border-orange-300/50 dark:focus:border-cyan-500/30 transition-colors"
          />
          {isPending && (
            <div className="absolute right-3 h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-cyan-500" />
          )}
        </div>

        <div className="flex items-center space-x-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  data-testid="theme-toggle"
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                >
                  {mounted ? (
                    theme === "dark" ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )
                  ) : null}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle theme</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </header>
  );
}

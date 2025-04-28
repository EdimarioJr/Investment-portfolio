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
    <header className="mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-orange-500 to-amber-600 dark:from-cyan-400 dark:to-blue-500 p-2 rounded-xl">
            <Hexagon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
            Investment Portfolio
          </h1>
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-initial sm:min-w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              data-testid="search-input"
              type="text"
              placeholder="Search assets..."
              defaultValue={searchParams.get("search") ?? ""}
              onChange={(e) => handleSearch(e.target.value)}
              className="bg-white/50 dark:bg-slate-800/50 rounded-full pl-9 pr-4 py-1.5 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm text-sm w-full placeholder:text-slate-500 focus:outline-none focus:border-orange-300/50 dark:focus:border-cyan-500/30 transition-colors"
            />
            {isPending && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-cyan-500" />
            )}
          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  data-testid="theme-toggle"
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 shrink-0"
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

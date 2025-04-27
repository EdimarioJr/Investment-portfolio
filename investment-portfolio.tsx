"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/investment-portfolio/header";
import { WalletsContainer } from "@/components/investment-portfolio/wallets-container";
import { AssetTable } from "@/components/investment-portfolio/asset-table";

export default function InvestmentPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-slate-100 dark:from-black dark:to-slate-900 text-slate-900 dark:text-slate-100 relative overflow-hidden">
      <div className="container mx-auto p-4 relative z-10">
        <Header />

        {/* Main content */}
        <div className="grid grid-cols-1 gap-6">
          <Card className="bg-white/70 dark:bg-slate-900/50 border-orange-200/50 dark:border-slate-700/50 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 gap-8">
                {/* Wallets Section */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">
                    Wallets
                  </h2>
                  <WalletsContainer />
                </div>

                {/* Assets Section */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">
                    Assets
                  </h2>
                  <AssetTable />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

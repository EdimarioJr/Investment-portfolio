import { Suspense } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/investment-portfolio/header";
import { InvestmentDashboard } from "@/components/investment-portfolio/investment-dashboard";
import { Loading } from "@/components/investment-portfolio/loading";
import { getWallets } from "@/services/wallets";

export default async function DashboardContainer() {
  const wallets = await getWallets();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-slate-100 dark:from-black dark:to-slate-900 text-slate-900 dark:text-slate-100">
      <div className="container mx-auto p-4 relative z-10">
        <Suspense fallback={<Loading />}>
          <Header />
        </Suspense>

        <div className="grid grid-cols-1 gap-6">
          <Card className="bg-white/70 dark:bg-slate-900/50 border-orange-200/50 dark:border-slate-700/50 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-6">
              <Suspense fallback={<Loading />}>
                <InvestmentDashboard wallets={wallets} />
              </Suspense>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

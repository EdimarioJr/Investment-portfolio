"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { WalletsContainer } from "./wallets-container";
import { AssetTable } from "./asset-table";
import { Loading } from "./loading";
import { Wallet } from "@/models/wallet";

interface InvestmentDashboardProps {
  wallets: Wallet[];
}

export function InvestmentDashboard({ wallets }: InvestmentDashboardProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedWalletName = searchParams.get("wallet");
  const searchTerm = searchParams.get("search")?.toLowerCase();
  const [isChangingWallet, setIsChangingWallet] = useState(false);

  const selectedWallet = wallets.find(
    (wallet) => wallet.walletName === selectedWalletName
  ) ?? { assets: [] };

  const filteredAssets =
    selectedWallet?.assets.filter((asset) => {
      if (!searchTerm) return true;
      return (
        asset.name.toLowerCase().includes(searchTerm) ||
        asset.symbol.toLowerCase().includes(searchTerm) ||
        asset.type.toLowerCase().includes(searchTerm)
      );
    }) ?? [];

  const handleWalletSelect = (walletName: string) => {
    setIsChangingWallet(true);
    const params = new URLSearchParams(searchParams);
    params.set("wallet", walletName);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    setIsChangingWallet(false);
  }, [selectedWallet]);

  return (
    <div className="grid grid-cols-1 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">
          Wallets
        </h2>
        <WalletsContainer
          wallets={wallets}
          onWalletSelect={handleWalletSelect}
          selectedWallet={selectedWalletName}
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">
          Assets
        </h2>
        {isChangingWallet ? (
          <Loading />
        ) : selectedWallet ? (
          filteredAssets && filteredAssets.length > 0 ? (
            <AssetTable assets={filteredAssets} />
          ) : (
            <div className="text-center text-slate-500 dark:text-slate-400 py-8">
              No assets found matching your search
            </div>
          )
        ) : (
          <div className="text-center text-slate-500 dark:text-slate-400 py-8">
            Select a wallet to view its assets
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { WalletCard } from "./wallet-card";
import { Wallet } from "@/models/wallet";
import { formatToCurrency } from "@/lib/utils";

interface WalletsContainerProps {
  wallets: Wallet[];
  onWalletSelect: (walletName: string) => void;
  selectedWallet: string | null;
}

export function WalletsContainer({
  wallets,
  onWalletSelect,
  selectedWallet,
}: WalletsContainerProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {wallets.map((wallet) => (
        <WalletCard
          key={wallet.walletName}
          name={wallet.walletName}
          currentAmount={formatToCurrency(wallet.currentAmount)}
          spentAmount={formatToCurrency(wallet.spentAmount)}
          profitLoss={formatToCurrency(
            wallet.currentAmount - wallet.spentAmount
          )}
          isProfitable={wallet.currentAmount - wallet.spentAmount > 0}
          type={wallet.walletName.includes("Crypto") ? "Crypto" : "Investment"}
          isSelected={selectedWallet === wallet.walletName}
          onClick={() => onWalletSelect(wallet.walletName)}
        />
      ))}
    </div>
  );
}

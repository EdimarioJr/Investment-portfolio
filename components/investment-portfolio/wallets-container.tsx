import { WalletCard } from "./wallet-card";

export function WalletsContainer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      <WalletCard
        name="Main Investment Account"
        currentAmount="$42,000"
        spentAmount="$35,000"
        type="Investment"
      />
      <WalletCard
        name="Crypto Wallet"
        currentAmount="$15,000"
        spentAmount="$3,000"
        type="Crypto"
      />
    </div>
  );
}

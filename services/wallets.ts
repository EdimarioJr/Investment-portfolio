import { Wallet } from "@/models/wallet";

export async function getWallets(): Promise<Wallet[]> {
  const wallets = await import("@/data/wallets.json");
  return wallets.default;
}

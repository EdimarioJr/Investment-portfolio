import { Wallet } from "@/models/wallet";
import { Asset } from "@/models/asset";

function sanitizeNumber(value: any): number {
  if (value === null || value === undefined) return 0;
  const num = Number(value);
  return isNaN(num) ? 0 : num;
}

function sanitizeString(value: any): string {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}

function sanitizeAsset(rawAsset: any): Asset | null {
  if (!rawAsset || typeof rawAsset !== "object") return null;

  const quantity = sanitizeNumber(rawAsset.quantity);
  const purchasePrice = sanitizeNumber(rawAsset.purchasePrice);
  const currentPrice = sanitizeNumber(rawAsset.currentPrice);

  return {
    type: sanitizeString(rawAsset.type),
    symbol: sanitizeString(rawAsset.symbol),
    name: sanitizeString(rawAsset.name),
    quantity,
    purchasePrice,
    currentPrice,
  };
}

function sanitizeWallet(rawWallet: any): Wallet | null {
  if (!rawWallet || typeof rawWallet !== "object") return null;

  const walletName = sanitizeString(rawWallet.walletName);
  if (!walletName) return null;

  const currentAmount = sanitizeNumber(rawWallet.currentAmount);
  const spentAmount = sanitizeNumber(rawWallet.spentAmount);
  const profitLoss = currentAmount - spentAmount;

  let assets: Asset[] = [];
  if (Array.isArray(rawWallet.assets)) {
    assets = rawWallet.assets
      .map(sanitizeAsset)
      .filter((asset: Asset) => asset !== null);
  }

  return {
    walletName,
    currentAmount,
    spentAmount,
    profitLoss,
    assets,
  };
}

export async function getWallets(): Promise<Wallet[]> {
  try {
    const data = await import("@/data/wallets.json");

    if (!data || !Array.isArray(data.default)) {
      return [];
    }

    const sanitizedWallets = data.default
      .map(sanitizeWallet)
      .filter((wallet): wallet is Wallet => wallet !== null);

    return sanitizedWallets;
  } catch (error) {
    return [];
  }
}

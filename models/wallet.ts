import { Asset } from "./asset";

export interface Wallet {
  walletName: string;
  currentAmount: number;
  spentAmount: number;
  profitLoss: number;
  assets: Asset[];
}

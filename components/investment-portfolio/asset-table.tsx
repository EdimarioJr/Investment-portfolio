import { AssetRow } from "./asset-row";

export function AssetTable() {
  return (
    <div className="bg-white/80 dark:bg-slate-800/50 rounded-lg border border-orange-200/50 dark:border-slate-700/50 overflow-hidden">
      <div className="grid grid-cols-4 text-sm text-slate-600 dark:text-slate-400 p-3 border-b border-orange-200/50 dark:border-slate-700/50 bg-orange-50/50 dark:bg-slate-800/70">
        <div>Asset</div>
        <div>Type</div>
        <div className="text-right">Quantity</div>
        <div className="text-right">Purchase Price</div>
      </div>
      <div className="divide-y divide-orange-200/50 dark:divide-slate-700/30">
        <AssetRow
          symbol="AAPL"
          name="Apple"
          type="Stock"
          quantity="10"
          price="$170.10"
        />
        <AssetRow
          symbol="ETH"
          name="Ethereum"
          type="Crypto"
          quantity="1.5"
          price="$17,010"
        />
        <AssetRow
          symbol="BTC"
          name="Bitcoin"
          type="Crypto"
          quantity="1.800"
          price="$3,200"
        />
        <AssetRow
          symbol="SOL"
          name="Solana"
          type="Solana"
          quantity="25,000"
          price="$1,750"
        />
      </div>
    </div>
  );
}

"use client";

import { AssetRow } from "./asset-row";
import { Asset } from "@/models/asset";

interface AssetTableProps {
  assets: Asset[];
}

export function AssetTable({ assets }: AssetTableProps) {
  return (
    <div
      data-testid="asset-table"
      className="bg-white/80 dark:bg-slate-800/50 rounded-lg border border-orange-200/50 dark:border-slate-700/50 overflow-hidden"
    >
      <table className="w-full">
        <thead>
          <tr className="text-sm text-slate-600 dark:text-slate-400 border-b border-orange-200/50 dark:border-slate-700/50 bg-orange-50/50 dark:bg-slate-800/70">
            <th className="text-left p-3 font-medium">Asset</th>
            <th className="text-left p-3 font-medium">Type</th>
            <th className="text-right p-3 font-medium">Quantity</th>
            <th className="text-right p-3 font-medium">Purchase Price</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-orange-200/50 dark:divide-slate-700/30">
          {assets.map((asset) => (
            <AssetRow
              key={asset.symbol}
              symbol={asset.symbol}
              name={asset.name}
              type={asset.type}
              quantity={asset.quantity.toString()}
              price={`$${asset.purchasePrice.toLocaleString()}`}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

"use client";

import { AssetRow } from "./asset-row";
import { Asset } from "@/models/asset";
import { formatToCurrency } from "@/lib/utils";

interface AssetTableProps {
  assets: Asset[];
}

export function AssetTable({ assets }: AssetTableProps) {
  const formattedProfitLoss = (asset: Asset) => {
    if (!asset.currentPrice || !asset.purchasePrice || !asset.quantity) {
      return "$0.0";
    }
    return formatToCurrency(
      (asset.currentPrice - asset.purchasePrice) * asset.quantity
    );
  };

  return (
    <div
      data-testid="asset-table"
      className="bg-white/80 dark:bg-slate-800/50 rounded-lg border border-orange-200/50 dark:border-slate-700/50 overflow-hidden"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="text-sm text-slate-600 dark:text-slate-400 border-b border-orange-200/50 dark:border-slate-700/50 bg-orange-50/50 dark:bg-slate-800/70">
              <th className="text-left p-3 font-medium whitespace-nowrap">
                Asset
              </th>
              <th className="text-left p-3 font-medium whitespace-nowrap">
                Type
              </th>
              <th className="text-right p-3 font-medium whitespace-nowrap">
                Quantity
              </th>
              <th className="text-right p-3 font-medium whitespace-nowrap">
                Purchase Price
              </th>
              <th className="text-right p-3 font-medium whitespace-nowrap">
                Current Price
              </th>
              <th className="text-right p-3 font-medium whitespace-nowrap">
                Profit/Loss
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-orange-200/50 dark:divide-slate-700/30">
            {assets.map((asset) => (
              <AssetRow
                key={asset.symbol}
                symbol={asset.symbol || "--"}
                name={asset.name || "--"}
                type={asset.type || "--"}
                quantity={asset.quantity?.toString() || "--"}
                purchasePrice={
                  asset.purchasePrice
                    ? formatToCurrency(asset.purchasePrice)
                    : "--"
                }
                currentPrice={
                  asset.currentPrice
                    ? formatToCurrency(asset.currentPrice)
                    : "--"
                }
                profitLoss={formattedProfitLoss(asset)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

interface WalletCardProps {
  name: string;
  currentAmount: string;
  spentAmount: string;
  type: string;
}

export function WalletCard({
  name,
  currentAmount,
  spentAmount,
  type,
}: WalletCardProps) {
  const [isSelected, setIsSelected] = useState(false);

  const getIconBackground = () => {
    switch (type) {
      case "Crypto":
        return "from-amber-500 to-orange-600";
      case "Investment":
        return "from-cyan-500 to-blue-600";
      case "Savings":
        return "from-green-500 to-emerald-600";
      default:
        return "from-purple-500 to-indigo-600";
    }
  };

  return (
    <div
      className={`bg-gradient-to-br from-white/80 to-orange-50/80 dark:bg-slate-800/50 dark:bg-none rounded-lg border border-orange-200/50 dark:border-slate-700/50 p-5 cursor-pointer transition-all duration-200 hover:from-orange-50/80 hover:to-orange-100/80 dark:hover:bg-slate-800/80 hover:border-orange-300/50 dark:hover:border-cyan-500/30 hover:shadow-lg hover:shadow-orange-500/10 dark:hover:shadow-cyan-500/10 ${
        isSelected
          ? "border-orange-400/50 dark:border-cyan-500 from-orange-50/80 to-orange-100/80 dark:bg-slate-800/80 shadow-lg shadow-orange-500/10 dark:shadow-cyan-500/10"
          : ""
      }`}
      onClick={() => setIsSelected(!isSelected)}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-bold text-slate-100">{name}</div>
        <div className="text-xs font-medium px-2 py-1 rounded-full bg-slate-700/50 text-slate-300">
          {type}
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="text-sm text-slate-500 mb-1">Current Amount</div>
          <div className="text-2xl font-bold text-cyan-400 font-mono">
            {currentAmount}
          </div>
        </div>

        <div>
          <div className="text-sm text-slate-500 mb-1">Spent Amount</div>
          <div className="text-lg text-slate-300 font-mono">{spentAmount}</div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-700/50">
        <div className={`h-2 w-full bg-slate-700 rounded-full overflow-hidden`}>
          <div
            className={`h-full bg-gradient-to-r ${getIconBackground()} rounded-full`}
            style={{ width: "65%" }}
          ></div>
        </div>
        <div className="mt-2 text-xs text-slate-400 text-right">
          65% of total portfolio
        </div>
      </div>
    </div>
  );
}

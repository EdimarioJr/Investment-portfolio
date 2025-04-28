"use client";

interface WalletCardProps {
  name: string;
  currentAmount: string;
  spentAmount: string;
  profitLoss: string;
  type: string;
  isSelected: boolean;
  isProfitable: boolean;
  onClick: () => void;
}

export function WalletCard({
  name,
  currentAmount,
  spentAmount,
  profitLoss,
  isProfitable,
  type,
  isSelected,
  onClick,
}: WalletCardProps) {
  return (
    <div
      data-testid="wallet-card"
      className={`bg-gradient-to-br from-white/80 to-orange-50/80 dark:bg-slate-800/50 dark:bg-none rounded-lg border border-orange-200/50 dark:border-slate-700/50 p-5 cursor-pointer transition-all duration-200 hover:from-orange-50/80 hover:to-orange-100/80 dark:hover:bg-slate-800/80 hover:border-orange-300/50 dark:hover:border-cyan-500/30 hover:shadow-lg hover:shadow-orange-500/10 dark:hover:shadow-cyan-500/10 transform hover:scale-[1.02] ${
        isSelected
          ? "border-orange-400/50 dark:border-cyan-500 from-orange-50/80 to-orange-100/80 dark:bg-slate-800/80 shadow-lg shadow-orange-500/10 dark:shadow-cyan-500/10 scale-[1.02] ring-2 ring-orange-500/20 dark:ring-cyan-500/20"
          : ""
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <div
          data-testid="wallet-name"
          className="text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-slate-900 dark:group-hover:text-white"
        >
          {name}
        </div>
        <div
          className={`text-xs font-medium px-2 py-1 rounded-full ${
            isSelected
              ? "bg-orange-100/80 dark:bg-cyan-500/20 text-orange-700 dark:text-cyan-300"
              : "bg-slate-100/80 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300"
          }`}
        >
          {type}
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="text-sm text-slate-500 mb-1">Current Amount</div>
          <div
            data-testid="wallet-amount"
            className="text-2xl font-bold text-cyan-400 font-mono"
          >
            {currentAmount}
          </div>
        </div>

        <div>
          <div className="text-sm text-slate-500 mb-1">Spent Amount</div>
          <div
            data-testid="wallet-spent"
            className="text-lg text-slate-300 font-mono"
          >
            {spentAmount}
          </div>
        </div>

        <div>
          <div className="text-sm text-slate-500 mb-1">Profit/Loss</div>
          <div
            data-testid="wallet-profit-loss"
            className={`text-lg font-mono ${
              isProfitable ? "text-emerald-500" : "text-red-500"
            }`}
          >
            {profitLoss}
          </div>
        </div>
      </div>
    </div>
  );
}

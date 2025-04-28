"use client";
interface AssetRowProps {
  symbol: string;
  name: string;
  type: string;
  quantity: string;
  price: string;
}

export function AssetRow({
  symbol,
  name,
  type,
  quantity,
  price,
}: AssetRowProps) {
  const getIconBackground = () => {
    switch (symbol) {
      case "BTC":
        return "bg-amber-500";
      case "ETH":
        return "bg-blue-500";
      case "SOL":
        return "bg-purple-500";
      case "AAPL":
        return "bg-slate-800";
      default:
        return "bg-cyan-500";
    }
  };

  return (
    <tr
      className="text-sm hover:bg-orange-50/50 dark:hover:bg-slate-800/50"
      data-testid="asset-row"
    >
      <td className="p-4">
        <div className="flex items-center space-x-3">
          <div
            className={`h-10 w-10 rounded-full ${getIconBackground()} flex items-center justify-center text-white font-bold text-xs`}
          >
            {symbol}
          </div>
          <div className="text-slate-800 dark:text-slate-200 font-medium">
            {name}
          </div>
        </div>
      </td>
      <td className="p-4 text-slate-700 dark:text-slate-300">{type}</td>
      <td className="p-4 text-right text-slate-700 dark:text-slate-300 font-mono">
        {quantity}
      </td>
      <td className="p-4 text-right text-orange-600 dark:text-cyan-400 font-mono">
        {price}
      </td>
    </tr>
  );
}

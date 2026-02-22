"use client";

import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const initialCoins = [
    { name: "BTC", price: 64231.40, change: 2.4, color: "text-orange-400" },
    { name: "ETH", price: 3452.12, change: -1.2, color: "text-blue-400" },
    { name: "SOL", price: 142.85, change: 5.7, color: "text-teal-400" },
    { name: "ARB", price: 1.12, change: 0.4, color: "text-sky-400" },
    { name: "BASE", price: 0.84, change: -2.1, color: "text-blue-500" },
    { name: "LINK", price: 18.24, change: 1.5, color: "text-indigo-400" },
];

export function LivePriceTicker() {
    const [coins, setCoins] = useState(initialCoins);

    useEffect(() => {
        const interval = setInterval(() => {
            setCoins(prev => prev.map(coin => {
                const volatility = coin.price * 0.0005;
                const change = (Math.random() * volatility * 2) - volatility;
                return { ...coin, price: coin.price + change };
            }));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full bg-purple-500/10 border-b border-white/5 py-1.5 overflow-hidden flex items-center justify-center z-[60] relative">
            <div className="flex items-center gap-12 animate-marquee-slower whitespace-nowrap px-4">
                {[...coins, ...coins].map((coin, i) => (
                    <div key={i} className="flex items-center gap-3 text-[10px] font-black tracking-tight">
                        <span className="text-slate-400">{coin.name}</span>
                        <span className="text-white tabular-nums">${coin.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        <span className={`flex items-center gap-0.5 ${coin.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {coin.change >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                            {Math.abs(coin.change)}%
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

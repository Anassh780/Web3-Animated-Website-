"use client";

import { motion } from "framer-motion";

// We'll use simple text/shapes to represent integrations to keep it fast and clean
const integrations = [
    { name: "Ethereum", color: "text-blue-400" },
    { name: "Arbitrum", color: "text-sky-400" },
    { name: "Optimism", color: "text-red-400" },
    { name: "Base", color: "text-blue-500" },
    { name: "Polygon", color: "text-purple-500" },
    { name: "Solana", color: "text-green-400" },
    { name: "Avalanche", color: "text-red-500" },
    { name: "Binance", color: "text-yellow-400" },
    { name: "Uniswap", color: "text-pink-400" },
    { name: "Curve", color: "text-orange-400" },
    { name: "Aave", color: "text-teal-400" },
    { name: "Compound", color: "text-green-500" },
];

export function Integrations() {
    return (
        <section className="py-20 relative z-10 overflow-hidden border-y border-white/5 bg-black/20" id="integrations">
            <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    <div className="text-left">
                        <div className="inline-block px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-xs font-bold tracking-widest uppercase mb-3">
                            Supported Ecosystems
                        </div>
                        <h2 className="text-3xl font-black font-heading tracking-tight text-white">
                            Integrated with <span className="text-purple-400">12+ Networks</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 max-w-sm text-sm font-medium md:text-right">
                        Our routing engine taps directly into the deepest liquidity pools across every major EVM and non-EVM chain.
                    </p>
                </motion.div>
            </div>

            {/* Infinite Marquee */}
            <div className="relative flex overflow-x-hidden w-full group">
                {/* Gradient Masks for smooth fade on edges */}
                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />

                <div className="animate-marquee flex items-center whitespace-nowrap group-hover:pause">
                    {[...integrations, ...integrations].map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 px-8 py-4 mx-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-colors cursor-default"
                        >
                            <div className={`w-2 h-2 rounded-full bg-current ${item.color} shadow-[0_0_8px_currentColor]`} />
                            <span className="text-lg font-bold text-white tracking-tight">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

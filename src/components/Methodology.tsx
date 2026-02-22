"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Database,
    Terminal,
    ServerCog,
    ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
    {
        id: "ingest",
        num: "01",
        title: "Ingest & Decrypt",
        desc: "We pull mempool data and cross-chain balances using proprietary RPC nodes, standardizing everything into a clean GraphQL schema.",
        icon: Database,
        code: `query ActivePositions {\n  user(id: "0x...") {\n    holdings {\n      asset\n      chain\n      apy\n      il_risk_score\n    }\n  }\n}`,
    },
    {
        id: "simulate",
        num: "02",
        title: "Simulate Strategy",
        desc: "Our V2 algorithm runs 10,000 Monte Carlo simulations against historical price deviations to predict standard impermanent loss over a 30-day window.",
        icon: Terminal,
        code: `// Simulation Output\n{\n  "status": "PROCEED",\n  "confidence": 0.94,\n  "projected_yield": "+12.4%",\n  "gas_cost": "$4.12",\n  "recommended_route": "Arbitrum -> Base"\n}`,
    },
    {
        id: "execute",
        num: "03",
        title: "Execute & Route",
        desc: "Once profitable parameters are met, smart contracts execute the trade via the cheapest aggregator, shielding you from MEV bots and slippage.",
        icon: ServerCog,
        code: `> Executing NexusRoute...\n> Bypassing MEV vectors...\n> Bridging USDC to Base...\n\n[SUCCESS] Transaction confirmed in 1.2s`,
    },
];

export function Methodology() {
    const [activeTab, setActiveTab] = useState(0);

    const ActiveIcon = steps[activeTab].icon;

    return (
        <section className="py-32 relative bg-[#05050f] border-t border-b border-white/5" id="method">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-sm font-bold tracking-widest uppercase mb-4">
                            The Architecture
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight mb-6">
                            How NexusChain <br />
                            <span className="gradient-text">dominates DeFi.</span>
                        </h2>
                        <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
                            We abstracted away the complex infrastructure required for
                            algorithmic trading. You just define risk parameters; we handle the
                            rest.
                        </p>

                        <div className="space-y-4">
                            {steps.map((step, idx) => (
                                <div
                                    key={step.id}
                                    onClick={() => setActiveTab(idx)}
                                    className={cn(
                                        "flex gap-6 p-6 rounded-2xl border transition-all cursor-pointer group",
                                        activeTab === idx
                                            ? "bg-purple-500/10 border-purple-500/30 shadow-[0_0_20px_rgba(99,102,241,0.1)]"
                                            : "bg-white/5 border-transparent hover:bg-white/10"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "w-12 h-12 rounded-xl flex items-center justify-center font-heading font-black text-xl transition-colors shrink-0",
                                            activeTab === idx
                                                ? "bg-purple-500 text-white"
                                                : "bg-black/50 border border-white/10 text-slate-500 group-hover:text-purple-400"
                                        )}
                                    >
                                        {step.num}
                                    </div>
                                    <div>
                                        <h4
                                            className={cn(
                                                "text-xl font-bold font-heading mb-2 transition-colors",
                                                activeTab === idx ? "text-white" : "text-slate-300 group-hover:text-white"
                                            )}
                                        >
                                            {step.title}
                                        </h4>
                                        <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="mt-10 px-6 py-3 rounded-xl bg-white/5 text-white font-bold border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2 group">
                            Read the Whitepaper
                            <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="w-full lg:w-1/2 relative h-[500px]">
                        <div className="relative w-full h-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 bg-[#0c0c16] border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-4 flex gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                                    </div>

                                    <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                                            <ActiveIcon className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <div className="text-xs uppercase tracking-wider text-purple-400 font-bold mb-1">
                                                System Terminal
                                            </div>
                                            <div className="font-heading font-black text-white text-xl">
                                                {steps[activeTab].title}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-1 bg-black/60 rounded-xl border border-white/5 p-4 font-mono text-sm text-slate-300 whitespace-pre overflow-x-auto relative">
                                        <div className="absolute left-0 top-0 w-1 h-full bg-purple-500" />
                                        {steps[activeTab].code}
                                    </div>

                                    <div className="mt-4 flex items-center justify-between p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                                        <span className="text-sm font-bold text-white flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                            Status: Live Syncing
                                        </span>
                                        <span className="text-xs font-mono text-purple-400">
                                            ~ {activeTab === 0 ? "14.2ms" : activeTab === 1 ? "10,000 passes" : "TX_CONFIRMED"}
                                        </span>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

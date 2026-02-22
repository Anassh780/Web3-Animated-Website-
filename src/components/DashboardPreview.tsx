"use client";

import { motion } from "framer-motion";
import { TrendingUp, Wallet, Activity, ChevronRight } from "lucide-react";

export function DashboardPreview() {
    return (
        <section className="relative w-full max-w-6xl mx-auto px-6 -mt-10 mb-32 z-20" id="dashboard">
            <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative rounded-3xl p-1 bg-gradient-to-b from-white/10 to-transparent overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]"
            >
                <div className="absolute inset-0 bg-purple-500/5 blur-[100px] pointer-events-none" />

                <div className="bg-[#070712]/95 backdrop-blur-3xl rounded-[23px] border border-white/5 p-4 md:p-8 flex flex-col md:flex-row gap-8 relative overflow-hidden">
                    {/* Decorative Top Nav Bar */}
                    <div className="absolute top-0 left-0 w-full h-12 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        <div className="ml-4 flex items-center gap-2 text-xs font-semibold text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                            Syncing Protocol Data
                        </div>
                    </div>

                    {/* Left Column: KPI Cards */}
                    <div className="w-full md:w-1/3 flex flex-col gap-4 mt-10 md:mt-8">
                        <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-1">
                            <div className="flex items-center justify-between text-slate-400 text-sm font-semibold">
                                <span className="flex items-center gap-2"><Wallet className="w-4 h-4" /> Total Value Locked</span>
                                <span className="text-purple-400 flex items-center text-xs bg-purple-500/10 px-2 py-0.5 rounded"><TrendingUp className="w-3 h-3 mr-1" /> +14.2%</span>
                            </div>
                            <div className="text-3xl font-black font-heading mt-2">$24,592,100</div>
                        </div>

                        <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-1">
                            <div className="flex items-center justify-between text-slate-400 text-sm font-semibold">
                                <span className="flex items-center gap-2"><Activity className="w-4 h-4" /> 24h Yield (Auto)</span>
                                <span className="text-purple-400 flex items-center text-xs bg-purple-500/10 px-2 py-0.5 rounded"><TrendingUp className="w-3 h-3 mr-1" /> +2.4%</span>
                            </div>
                            <div className="text-3xl font-black font-heading mt-2">+$18,240</div>
                        </div>

                        <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex flex-col flex-1">
                            <div className="text-slate-400 text-sm font-semibold mb-4">Active Strategies</div>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5 hover:border-purple-500/30 transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-xs font-bold text-purple-400 text-purple-400 border border-purple-500/30">L2</div>
                                        <div className="text-sm font-semibold">Arbitrum ETH-USDC</div>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5 hover:border-purple-500/30 transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-xs font-bold text-purple-400 border border-purple-500/30">L1</div>
                                        <div className="text-sm font-semibold">Mainnet wstETH</div>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Chart Area */}
                    <div className="w-full md:w-2/3 flex flex-col mt-2 md:mt-8">
                        <div className="flex-1 rounded-2xl bg-black/40 border border-white/5 p-6 relative overflow-hidden flex flex-col">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex gap-4 border-b border-white/10 pb-2">
                                    <button className="text-sm font-bold text-purple-400 border-b-2 border-purple-400 pb-2 -mb-[9px]">Portfolio</button>
                                    <button className="text-sm font-semibold text-slate-500 hover:text-slate-300">Performance</button>
                                    <button className="text-sm font-semibold text-slate-500 hover:text-slate-300">Gas Fees</button>
                                </div>
                                <div className="flex gap-2">
                                    <button className="text-xs font-semibold text-slate-400 hover:text-white px-2 py-1 rounded bg-white/5">1W</button>
                                    <button className="text-xs font-semibold text-white px-2 py-1 rounded bg-purple-500/20 border border-purple-500/30">1M</button>
                                    <button className="text-xs font-semibold text-slate-400 hover:text-white px-2 py-1 rounded bg-white/5">ALL</button>
                                </div>
                            </div>

                            {/* Fake Chart */}
                            <div className="flex-1 relative min-h-[200px] flex items-end">
                                <svg width="100%" height="100%" viewBox="0 0 500 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-[120px]">
                                    <defs>
                                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.4)" />
                                            <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0,120 L0,60 C50,55 100,80 150,40 C200,0 250,50 300,30 C350,10 400,60 450,20 C480,5 490,10 500,0 L500,120 Z" fill="url(#chartGrad)" />
                                    <path d="M0,60 C50,55 100,80 150,40 C200,0 250,50 300,30 C350,10 400,60 450,20 C480,5 490,10 500,0" stroke="#818cf8" strokeWidth="3" fill="none" strokeLinecap="round" />
                                    <path d="M0,110 C50,108 100,105 150,100 C200,95 250,85 300,75 C350,65 400,50 450,40 C480,35 510,30 520,28" stroke="#6366f1" strokeWidth="1.5" fill="none" strokeDasharray="4 4" opacity="0.6" />
                                </svg>

                                {/* X Axis labels */}
                                <div className="absolute bottom-0 left-0 w-full flex justify-between text-[10px] text-slate-500 px-2 pt-2 border-t border-white/5 mt-4">
                                    <span>Oct 1</span>
                                    <span>Oct 8</span>
                                    <span>Oct 15</span>
                                    <span>Oct 22</span>
                                    <span>Oct 31</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}

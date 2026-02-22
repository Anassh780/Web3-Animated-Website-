"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Menu, X, Wallet, ChevronDown, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [gasPrice, setGasPrice] = useState(24);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Simulate fluctuating gas prices
        const gasInterval = setInterval(() => {
            setGasPrice(prev => {
                const change = Math.floor(Math.random() * 5) - 2;
                return Math.max(12, Math.min(60, prev + change));
            });
        }, 5000);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearInterval(gasInterval);
        };
    }, []);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent bg-transparent",
                    scrolled && "bg-black/80 backdrop-blur-md border-white/10 py-2 shadow-2xl",
                    !scrolled && "py-4"
                )}
            >
                <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                    <a href="#" className="flex items-center gap-3 decoration-transparent group">
                        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-purple-500/50 transition-colors">
                            <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                                <polygon
                                    points="14,2 26,8 26,20 14,26 2,20 2,8"
                                    stroke="url(#logoGradNav)"
                                    strokeWidth="2"
                                    fill="none"
                                />
                                <circle cx="14" cy="14" r="3" fill="url(#logoGradNav)" />
                                <defs>
                                    <linearGradient id="logoGradNav" x1="0" y1="0" x2="28" y2="28">
                                        <stop offset="0%" stopColor="#818cf8" />
                                        <stop offset="100%" stopColor="#4f46e5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <span className="font-heading font-black text-xl tracking-tight text-white">
                            NexusChain
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-md">
                        <div
                            className="relative group"
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <button className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
                                Protocol <ChevronDown className="w-4 h-4 opacity-70" />
                            </button>
                            {dropdownOpen && (
                                <div className="absolute top-full left-0 mt-2 w-56 bg-[#0a0b1e]/95 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-2xl shadow-purple-900/20 flex flex-col gap-1">
                                    <a href="#" className="p-3 rounded-lg hover:bg-purple-500/10 transition-colors text-sm text-slate-200 hover:text-purple-400">
                                        <span className="block font-bold">Yield Engine</span>
                                        <span className="block text-xs text-slate-400 mt-1">Automated LP rebalancing</span>
                                    </a>
                                    <a href="#" className="p-3 rounded-lg hover:bg-purple-500/10 transition-colors text-sm text-slate-200 hover:text-purple-400">
                                        <span className="block font-bold">Bridge Routing</span>
                                        <span className="block text-xs text-slate-400 mt-1">Lowest fee pathfinding</span>
                                    </a>
                                </div>
                            )}
                        </div>
                        <a href="#features" className="px-4 py-2 rounded-full text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
                            Features
                        </a>
                        <a href="#pricing" className="px-4 py-2 rounded-full text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
                            Pricing
                        </a>
                        <a href="#" className="px-4 py-2 rounded-full text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
                            Docs
                        </a>
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold transition-all hover:bg-white/10">
                            <Zap className="w-3 h-3 text-purple-400" />
                            <span className="text-slate-400">Gas:</span>
                            <span className="text-white tabular-nums">
                                {gasPrice} Gwei
                            </span>
                        </div>
                        <button className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">
                            Log in
                        </button>
                        <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-500 text-white text-sm font-bold border border-white/20 shadow-[inset_0_0_10px_rgba(255,255,255,0.2),0_10px_20px_rgba(99,102,241,0.2)] hover:bg-purple-400 transition-colors group">
                            Connect Wallet
                            <Wallet className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden p-2 text-slate-300 hover:text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl pt-24 px-6 flex flex-col gap-6 lg:hidden">
                    <a href="#" className="text-2xl font-bold text-white border-b border-white/10 pb-4">Protocol</a>
                    <a href="#features" className="text-2xl font-bold text-white border-b border-white/10 pb-4">Features</a>
                    <a href="#pricing" className="text-2xl font-bold text-white border-b border-white/10 pb-4">Pricing</a>
                    <a href="#" className="text-2xl font-bold text-white border-b border-white/10 pb-4">Docs</a>
                    <button className="w-full py-4 mt-auto mb-10 rounded-xl bg-purple-500 text-white font-bold text-lg flex items-center justify-center gap-2">
                        Connect Wallet <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            )}
        </>
    );
}

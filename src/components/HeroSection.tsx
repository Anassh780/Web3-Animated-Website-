"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, PlayCircle, Settings, Shield, Zap } from "lucide-react";

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { type: "spring", stiffness: 100, damping: 20 },
    },
};

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
            {/* Cinematic UHD Video Background */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-40 mix-blend-screen"
                >
                    <source src="/hero-bg.mp4" type="video/mp4" />
                </video>
                {/* Gradient overlays to blend video perfectly into the dark website */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/40 via-transparent to-[#030303] z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/80 via-transparent to-[#030303]/80 z-10" />
            </div>

            {/* Decorative Overlays */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none z-0" />

            {/* Main Content */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="container mx-auto max-w-5xl text-center relative z-10"
            >
                <motion.div variants={item} className="mb-8">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 font-bold text-sm text-purple-400 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                        V2 Algorithm Now Active
                    </span>
                </motion.div>

                <motion.h1
                    variants={item}
                    className="text-5xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight mb-8 leading-[1.05]"
                >
                    Stop Operating <br className="hidden md:block" />
                    On-Chain <span className="gradient-text">Blind.</span>
                </motion.h1>

                <motion.p
                    variants={item}
                    className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
                >
                    NexusChain AI monitors your liquidity, simulates impermanent loss, and
                    automatically rebalances strategy across chains—while you sleep.
                </motion.p>

                <motion.div
                    variants={item}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 relative z-20"
                >
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-purple-500 text-white font-bold text-lg border border-white/20 shadow-[inset_0_0_10px_rgba(255,255,255,0.2),0_15px_30px_rgba(99,102,241,0.3)] hover:bg-purple-400 hover:-translate-y-1 transition-all group relative overflow-hidden">
                        {/* Shine effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                        Start Free Trial
                        <ArrowRight className="w-5 h-5 opacity-80 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/5 text-white font-bold text-lg border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all group">
                        <PlayCircle className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                        View Features
                    </button>
                </motion.div>

                <motion.div
                    variants={item}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md max-w-3xl mx-auto"
                >
                    <div className="flex items-center gap-4 text-left group">
                        <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform">
                            <Zap className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                            <div className="font-bold text-xl tracking-tight text-white flex items-center gap-1">
                                72ms <span className="text-sm font-normal text-purple-400">latency</span>
                            </div>
                            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                Cross-chain sync
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-12 bg-white/10" />
                    <div className="flex items-center gap-4 text-left group">
                        <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform">
                            <Shield className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                            <div className="font-bold text-xl tracking-tight text-white flex items-center gap-1">
                                $2.1B+ <span className="text-sm font-normal text-purple-400">secured</span>
                            </div>
                            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                Audited Protocols
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-12 bg-white/10" />
                    <div className="flex items-center gap-4 text-left group">
                        <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform">
                            <Settings className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                            <div className="font-bold text-xl tracking-tight text-white flex items-center gap-1">
                                100% <span className="text-sm font-normal text-purple-400">uptime</span>
                            </div>
                            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                Execution Layer
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

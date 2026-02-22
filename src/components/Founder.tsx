"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Founder() {
    return (
        <section className="py-24 px-6 relative z-10" id="about">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-black overflow-hidden flex flex-col md:flex-row shadow-2xl relative"
                >
                    {/* Subtle bg glow */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

                    {/* Left: Text */}
                    <div className="p-10 md:p-16 w-full md:w-1/2 flex flex-col justify-center relative z-10">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-sm font-bold tracking-widest uppercase mb-6 w-max">
                            The Vision
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black font-heading tracking-tight mb-6 leading-tight">
                            Built by builders, <br />
                            <span className="gradient-text">for the on-chain economy.</span>
                        </h2>

                        <p className="text-slate-400 leading-relaxed mb-6">
                            NexusChain was born from a simple frustration: Web3 builders are brilliant at technology but constantly flying blind on profitability. We merged institutional-grade financial modeling with the transparency of blockchain to create the strategic ally every founder deserves.
                        </p>

                        <p className="text-slate-300 font-medium mb-10">
                            Our team brings together DeFi engineers, fintech veterans, and growth hackers united by one belief: <em className="text-purple-400">data-driven on-chain businesses outperform every time.</em>
                        </p>

                        <div className="flex gap-4 sm:gap-8 border-t border-white/10 pt-8">
                            <div>
                                <div className="text-3xl font-black font-heading mb-1">$2.1B+</div>
                                <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Volume Tracked</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black font-heading mb-1">140+</div>
                                <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Protocols</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black font-heading mb-1">12</div>
                                <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Global Team</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: CTA box styled like Founder Visual */}
                    <div className="p-10 md:p-16 w-full md:w-1/2 flex flex-col justify-center items-center bg-black/50 border-l border-white/10 backdrop-blur-md relative z-10">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold font-heading mb-4 text-white">Ready to Upgrade Your DeFi Game?</h2>
                            <p className="text-slate-400 mb-10 max-w-sm mx-auto">
                                Join thousands of pro traders automating their portfolio with NexusChain AI.
                            </p>

                            <div className="flex flex-col gap-4 w-full sm:w-auto mx-auto items-center">
                                <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-purple-500 text-white font-bold w-full hover:bg-purple-400 transition-colors shadow-[inset_0_0_10px_rgba(255,255,255,0.2),0_10px_20px_rgba(99,102,241,0.2)] group">
                                    Connect Wallet
                                    <ArrowRight className="w-5 h-5 opacity-80 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 text-white font-bold w-full border border-white/10 hover:bg-white/10 transition-colors">
                                    View Plans
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

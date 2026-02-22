"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Alex V.",
        role: "Prop Trader",
        quote: "NexusChain's auto-rebalancing saved me from massive IL during the recent ETH volatility. This is institutional-grade tech in a retail wrapper.",
        avatar: "AV",
    },
    {
        name: "Sarah K.",
        role: "DAO Treasury Lead",
        quote: "The unified dashboard alone is worth the sub. Finally, I can see our multi-sig exposure across 6 chains without 15 browser tabs open.",
        avatar: "SK",
    },
    {
        name: "Marcus J.",
        role: "Yield Farmer",
        quote: "I thought I was maximizing my APY manually. After running NexusChain's simulator, I realized I was leaving 30% on the table due to gas/IL. Never going back.",
        avatar: "MJ",
    },
];

export function Testimonials() {
    return (
        <section className="py-24 px-6 relative z-10" id="testimonials">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-sm font-bold tracking-widest uppercase mb-4">
                        Testimonials
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight mb-6">
                        Trusted by the <br className="hidden md:block" />
                        <span className="gradient-text">on-chain elite.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testi, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                            transition={{ delay: i * 0.15 }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/5 relative"
                        >
                            <div className="flex gap-1 mb-6 text-purple-400">
                                <Star className="w-4 h-4 fill-purple-400" />
                                <Star className="w-4 h-4 fill-purple-400" />
                                <Star className="w-4 h-4 fill-purple-400" />
                                <Star className="w-4 h-4 fill-purple-400" />
                                <Star className="w-4 h-4 fill-purple-400" />
                            </div>

                            <p className="text-slate-300 leading-relaxed mb-8 font-medium">
                                &quot;{testi.quote}&quot;
                            </p>

                            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg">
                                    {testi.avatar}
                                </div>
                                <div>
                                    <div className="font-bold font-heading">{testi.name}</div>
                                    <div className="text-sm text-purple-400">{testi.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const profiles = [
    {
        role: "Prop Desk Traders",
        desc: "Deploy capital instantly based on cross-chain arbitrage alerts.",
        features: ["Sub-second mempool scraping", "Automated execution scripting", "Multi-sig native support"],
        featured: false,
    },
    {
        role: "DAO Treasuries",
        desc: "Earn sustainable yields on idle stables without risking smart contract exposure.",
        features: ["Whitelisted robust protocols", "Granular access controls", "Custom reporting dashboards"],
        featured: true,
    },
    {
        role: "Retail DeFi Maxis",
        desc: "Stop tracking 15 RPCs on spreadsheets. See your true net worth.",
        features: ["Unified cross-chain PnL", "Impermanent loss tracking", "1-click rebalancing workflows"],
        featured: false,
    },
];

export function Profiles() {
    return (
        <section className="py-24 px-6 relative z-10" id="profiles">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-sm font-bold tracking-widest uppercase mb-4">
                        Built For
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight mb-6">
                        Who builds with <span className="gradient-text">NexusChain?</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {profiles.map((profile, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                            transition={{ delay: i * 0.15 }}
                            className={cn(
                                "p-8 rounded-3xl border transition-all relative overflow-hidden flex flex-col h-full",
                                profile.featured
                                    ? "bg-gradient-to-br from-purple-900/40 to-[#070712] border-purple-500/30"
                                    : "bg-white/5 border-white/5 hover:border-purple-500/20"
                            )}
                        >
                            {profile.featured && (
                                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/20 blur-[60px] pointer-events-none" />
                            )}
                            <h3 className="text-2xl font-bold font-heading mb-3">{profile.role}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                                {profile.desc}
                            </p>
                            <ul className="space-y-3">
                                {profile.features.map((feat, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                                        <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

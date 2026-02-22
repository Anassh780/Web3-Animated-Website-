"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        q: "What chains does NexusChain support?",
        a: "We currently support Ethereum, Arbitrum, Optimism, Polygon, Solana, Base, and Avalanche. More chains are added regularly based on community requests.",
    },
    {
        q: "Do I need to share my private keys?",
        a: "Never. NexusChain is a read-only analytics platform. You connect your wallet via signature (like any dApp), and we only read public on-chain data. Your keys stay in your wallet.",
    },
    {
        q: "How does the AI strategy engine work?",
        a: "Our AI ingests your on-chain history, current positions, market data, and gas conditions. It then surfaces personalized recommendations — like optimal timing for transactions or better-yielding alternatives.",
    },
    {
        q: "Can I use NexusChain for my DAO treasury?",
        a: "Absolutely. Our Protocol plan includes team workspaces, multisig wallet support, and treasury-specific analytics designed for DAO operators and governance contributors.",
    },
    {
        q: "Is there a free trial?",
        a: "Yes! Our Explorer plan is free forever. You can also try the Builder plan free for 14 days — no credit card required, just connect your wallet.",
    },
];

export function FAQ() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    const toggleFAQ = (idx: number) => {
        setOpenIdx(openIdx === idx ? null : idx);
    };

    return (
        <section className="py-24 px-6 relative z-10" id="faq">
            <div className="container mx-auto max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-sm font-bold tracking-widest uppercase mb-4">
                        FAQ
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight mb-6">
                        You&apos;re already asking <br />
                        <span className="gradient-text">the right questions.</span>
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                            transition={{ delay: i * 0.1 }}
                            className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="font-bold font-heading text-lg">{faq.q}</span>
                                <ChevronDown
                                    className={cn(
                                        "w-5 h-5 text-purple-400 transition-transform duration-300",
                                        openIdx === i ? "rotate-180" : ""
                                    )}
                                />
                            </button>

                            <AnimatePresence>
                                {openIdx === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

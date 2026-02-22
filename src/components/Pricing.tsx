"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Explorer",
        desc: "For individual traders building their first automated portfolio.",
        priceMonthly: "Free",
        priceAnnually: "Free",
        features: [
            "Track up to 3 wallets",
            "5 chains supported",
            "Daily portfolio sync",
            "Community Discord access",
        ],
        cta: "Start Free",
        popular: false,
    },
    {
        name: "Builder",
        desc: "For serious investors scaling cross-chain execution.",
        priceMonthly: "$49",
        priceAnnually: "$39",
        features: [
            "Unlimited wallets tracked",
            "All 14+ chains supported",
            "10,000 algorithmic simulations",
            "1-click trade execution",
            "Priority API access",
        ],
        cta: "Start 14-Day Trial",
        popular: true,
    },
    {
        name: "Protocol",
        desc: "For DAOs, prop-desks, and institutional treasuries.",
        priceMonthly: "$299",
        priceAnnually: "$249",
        features: [
            "Custom RPC integrations",
            "Multi-sig native integration",
            "Dedicated Slack channel",
            "White-glove onboarding",
            "Unlimited API calls",
        ],
        cta: "Contact Sales",
        popular: false,
    },
];

export function Pricing() {
    const [annual, setAnnual] = useState(true);

    return (
        <section className="py-24 px-6 relative z-10" id="pricing">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-sm font-bold tracking-widest uppercase mb-4">
                        Transparent Scaling
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight mb-6">
                        Pay for <span className="gradient-text">performance.</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
                        Choose the tier that fits your operation. Downgrade or pause anytime.
                    </p>

                    {/* Billing Toggle */}
                    <div className="inline-flex items-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 mx-auto">
                        <button
                            onClick={() => setAnnual(false)}
                            className={cn(
                                "px-6 py-2 rounded-xl text-sm font-bold transition-all",
                                !annual ? "bg-purple-500 text-white shadow-lg" : "text-slate-400 hover:text-white"
                            )}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setAnnual(true)}
                            className={cn(
                                "px-6 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2",
                                annual ? "bg-purple-500 text-white shadow-lg" : "text-slate-400 hover:text-white"
                            )}
                        >
                            Annually <span className="bg-white/20 text-white px-2 py-0.5 rounded text-xs ml-1">Save 20%</span>
                        </button>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                            transition={{ delay: i * 0.15 }}
                            className={cn(
                                "p-8 rounded-3xl border transition-all relative flex flex-col",
                                plan.popular
                                    ? "bg-[#070712] border-purple-500/50 shadow-[0_20px_40px_-15px_rgba(99,102,241,0.3)] md:-mt-8 md:mb-8"
                                    : "bg-white/5 border-white/5"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-3.5 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-bold font-heading mb-2">{plan.name}</h3>
                            <p className="text-slate-400 text-sm h-10 mb-6">{plan.desc}</p>

                            <div className="mb-8 flex items-baseline gap-1">
                                <span className="text-4xl font-black font-heading">
                                    {annual ? plan.priceAnnually : plan.priceMonthly}
                                </span>
                                {plan.priceMonthly !== "Free" && <span className="text-slate-400">/mo</span>}
                            </div>

                            <button
                                className={cn(
                                    "w-full py-3.5 rounded-xl font-bold mb-8 transition-colors",
                                    plan.popular
                                        ? "bg-purple-500 text-white hover:bg-purple-400 shadow-[inset_0_0_10px_rgba(255,255,255,0.2),0_10px_20px_rgba(99,102,241,0.2)]"
                                        : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                                )}
                            >
                                {plan.cta}
                            </button>

                            <div className="text-sm font-bold text-slate-300 mb-4 uppercase tracking-wider">
                                What&apos;s included:
                            </div>
                            <ul className="space-y-3 flex-1">
                                {plan.features.map((feat, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-400">
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

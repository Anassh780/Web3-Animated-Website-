"use client";

import { useRef } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { RefreshCcw, HandCoins, Activity, BarChart4, ShieldCheck, Cpu } from "lucide-react";

const features = [
    {
        icon: RefreshCcw,
        title: "Auto-Rebalancing",
        desc: "Our AI constantly models expected yields across chains and automatically rebalances your LP positions to capture the highest proven APYs, accounting for gas and slippage.",
    },
    {
        icon: HandCoins,
        title: "IL Protection",
        desc: "Advanced impermanent loss simulation runs before every trade. We only execute LP shifts when the projected yield outweighs the mathematical risk of holding divergent assets.",
    },
    {
        icon: Activity,
        title: "Predictive Analytics",
        desc: "See into the future of your portfolio. We aggregate historical volatility and current order book depth to project your 30, 60, and 90-day returns with 94% accuracy.",
    },
    {
        icon: BarChart4,
        title: "Consolidated Dashboard",
        desc: "View your entire on-chain net worth across 14+ networks in one place. No more switching RPCs or opening 12 different tabs to calculate your total exposure.",
    },
    {
        icon: ShieldCheck,
        title: "Institutional Security",
        desc: "NexusChain operates purely as a routing and simulation layer. You maintain self-custody. Our smart contracts are audited by Halborn and Zellic with zero critical vulnerabilities.",
    },
    {
        icon: Cpu,
        title: "API Access",
        desc: "Builders can tap into our core routing engine. Integrate our strategic Web3 logic directly into your own dApps, wallets, or treasury management systems.",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export function Features() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1 0"], // from top hitting bottom, to bottom hitting top
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]); // Moves up as you scroll down

    return (
        <section ref={ref} className="py-24 px-6 relative z-10" id="features">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                    className="text-center mb-20"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-sm font-bold tracking-widest uppercase mb-4">
                        Platform Capabilities
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight mb-6">
                        Institutional power, <br className="hidden md:block" />
                        <span className="gradient-text">retail simplicity.</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Everything you need to scale your on-chain operations. Engineered for
                        precision, built for profitability.
                    </p>
                </motion.div>

                <motion.div
                    style={{ y: yParallax }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 will-change-transform"
                >
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/10 transition-all group hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-3 text-white">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

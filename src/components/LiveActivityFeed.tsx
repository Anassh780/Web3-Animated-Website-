"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Activity, ExternalLink } from "lucide-react";

// Mock data to simulate live institutional network activity
const activities = [
    { type: "rebalance", text: "Auto-rebalanced $450k USDC on Arbitrum", time: "Just now" },
    { type: "save", text: "Saved $112 in slippage via NexusRoute", time: "2s ago" },
    { type: "yield", text: "Harvested 4.2 ETH from Curve vault", time: "14s ago" },
    { type: "protect", text: "IL Protection prevented -$42 base loss", time: "22s ago" },
    { type: "route", text: "Routed 50 ETH Base → Optimism", time: "41s ago" },
];

interface ActivityItem {
    type: string;
    text: string;
    time: string;
}

export function LiveActivityFeed() {
    const [currentActivity, setCurrentActivity] = useState<ActivityItem | null>(null);

    useEffect(() => {
        // Show first activity after 4 seconds
        const initialTimer = setTimeout(() => {
            setCurrentActivity(activities[0]);
            setTimeout(() => setCurrentActivity(null), 5000);
        }, 4000);

        // Randomly pop up activities to simulate high network volume
        const interval = setInterval(() => {
            const randomActivity = activities[Math.floor(Math.random() * activities.length)];
            setCurrentActivity(randomActivity);

            // Hide the toast after 5 seconds
            setTimeout(() => {
                setCurrentActivity(null);
            }, 5000);
        }, 12000);

        return () => {
            clearTimeout(initialTimer);
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="fixed bottom-6 left-6 z-[100] pointer-events-none">
            <AnimatePresence>
                {currentActivity && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="flex items-center gap-3 bg-[#0a0b1e]/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(99,102,241,0.3)] rounded-2xl p-4 pr-8"
                    >
                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30 shrink-0">
                            {currentActivity.type === "save" || currentActivity.type === "yield" ? (
                                <Zap className="w-5 h-5 text-purple-400" />
                            ) : (
                                <Activity className="w-5 h-5 text-purple-400" />
                            )}
                        </div>
                        <div>
                            <div className="text-sm font-bold text-white tracking-tight">
                                {currentActivity.text}
                            </div>
                            <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-1 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                                {currentActivity.time} <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

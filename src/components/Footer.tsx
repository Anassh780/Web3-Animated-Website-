import { ArrowRight, PlayCircle } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#020202] pt-24 pb-8 relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <a href="#" className="flex items-center gap-3 decoration-transparent">
                            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10">
                                <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                                    <polygon
                                        points="14,2 26,8 26,20 14,26 2,20 2,8"
                                        stroke="url(#logoGradFoot)"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                    <circle cx="14" cy="14" r="3" fill="url(#logoGradFoot)" />
                                    <defs>
                                        <linearGradient id="logoGradFoot" x1="0" y1="0" x2="28" y2="28">
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
                        <p className="text-slate-400 text-sm max-w-sm">
                            Your strategic Web3 ally for profitable on-chain businesses. Build, scale, and optimize with confidence.
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                            <button className="px-5 py-2.5 rounded-xl bg-purple-500 text-white text-sm font-bold border border-white/20 hover:bg-purple-400 transition-colors flex items-center gap-2 group">
                                Start Free Trial
                                <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-5 py-2.5 rounded-xl bg-white/5 text-white text-sm font-bold border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2">
                                <PlayCircle className="w-4 h-4 text-purple-400" /> View Features
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-white">Product</h4>
                        <div className="flex flex-col gap-3 text-sm text-slate-400">
                            <a href="#" className="hover:text-purple-400 transition-colors">Dashboard</a>
                            <a href="#" className="hover:text-purple-400 transition-colors">Analytics</a>
                            <a href="#" className="hover:text-purple-400 transition-colors">Yield Engine</a>
                            <a href="#" className="hover:text-purple-400 transition-colors">Pricing</a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-white">Resources</h4>
                        <div className="flex flex-col gap-3 text-sm text-slate-400">
                            <a href="#" className="hover:text-purple-400 transition-colors">Documentation</a>
                            <a href="#" className="hover:text-purple-400 transition-colors">API Reference</a>
                            <a href="#" className="hover:text-purple-400 transition-colors">Case Studies</a>
                            <a href="#" className="hover:text-purple-400 transition-colors">Blog</a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-white">Company</h4>
                        <div className="flex flex-col gap-3 text-sm text-slate-400">
                            <a href="#" className="hover:text-purple-400 transition-colors">About</a>
                            <a href="#" className="hover:text-purple-400 transition-colors">Careers</a>
                            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} NexusChain. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-white transition-colors">Twitter/X</a>
                        <a href="#" className="hover:text-white transition-colors">Discord</a>
                        <a href="#" className="hover:text-white transition-colors">GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

"use client";
import { motion } from "framer-motion";

const paymentPlatforms = [
    { name: "Apple Pay", logo: "/applepay.svg" },
    { name: "Google Pay", logo: "/googlepay.svg" },
    { name: "Alipay", logo: "/alipay.svg" },
    // 可根据资源补充更多
];

const scenarios = [
    { icon: "🛒", label: "Online Shopping" },
    { icon: "☕", label: "Cafes & Restaurants" },
    { icon: "✈️", label: "Overseas Payments" },
];

export default function CardFeatureSection() {
    return (
        <section
            id="card"
            className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-gray-950"
        >
            {/* 动态全球地图背景占位 */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" className="w-full h-full opacity-30 animate-pulse-slow">
                    <ellipse cx="720" cy="400" rx="600" ry="300" fill="#3b82f6" fillOpacity="0.12" />
                    <ellipse cx="900" cy="500" rx="400" ry="180" fill="#6366f1" fillOpacity="0.10" />
                </svg>
            </div>
            <div className="relative z-10 w-full flex flex-col items-center px-4 py-20" style={{ maxWidth: 1300 }}>
                {/* 标题 */}
                <motion.h2
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white mb-12 text-center drop-shadow-lg"
                >
                    Virtual Card for Global Payments
                </motion.h2>
                {/* 虚拟信用卡卡面展示 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, type: "spring" }}
                    viewport={{ once: true }}
                    className="w-[340px] h-[210px] rounded-3xl bg-gradient-to-tr from-blue-700 to-purple-700 shadow-2xl flex flex-col justify-between p-8 mb-10"
                >
                    <div className="text-white text-lg font-semibold">MP Card</div>
                    <div className="text-white text-2xl font-bold tracking-widest mb-2">Unlock Your Crypto Spending Power</div>
                    <div className="flex justify-between items-center">
                        <span className="text-white/80 text-sm">**** 1234</span>
                        <span className="text-white/60 text-xs">VIRTUAL</span>
                    </div>
                </motion.div>
                {/* 支付平台 Logo 横向排列 */}
                <div className="flex flex-row items-center justify-center gap-8 mb-12">
                    {paymentPlatforms.map((p, i) => (
                        <motion.div
                            key={p.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.15, type: "spring" }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-md mb-2">
                                <img src={p.logo} alt={p.name} className="w-10 h-10 object-contain" />
                            </div>
                            <span className="text-xs text-white/80">{p.name}</span>
                        </motion.div>
                    ))}
                </div>
                {/* 应用场景图标+英文描述 */}
                <div className="flex flex-row items-center justify-center gap-10 mt-4">
                    {scenarios.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.18, type: "spring" }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-14 h-14 rounded-full bg-blue-800 flex items-center justify-center text-2xl text-white mb-2 shadow-lg">
                                {s.icon}
                            </div>
                            <span className="text-sm text-white/90 text-center">{s.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-slow { animation: pulse-slow 12s ease-in-out infinite; }
      `}</style>
        </section>
    );
} 
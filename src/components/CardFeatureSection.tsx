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
            className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden"
        >
            {/* 背景图片+深色蒙版 */}
            <div className="absolute inset-0 z-0">
                <img src="/pexels-jack-sparrow-4199490.jpg" alt="global map" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative z-10 w-full flex flex-col items-center px-4 py-20" style={{ maxWidth: 1300 }}>
                {/* 主标题+副标题 */}
                <motion.h2
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white mb-4 text-center drop-shadow-lg"
                >
                    Virtual Card for Global Payments
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
                    viewport={{ once: true }}
                    className="text-lg md:text-2xl text-blue-100 mb-10 text-center max-w-2xl"
                >
                    Unlock your crypto spending power. Connect your digital assets to the global payment network. Pay anywhere, anytime, securely and instantly.
                </motion.p>
                {/* 内容区：卡片+平台+场景 */}
                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-12">
                    {/* 左侧：安全便捷卖点 */}
                    <div className="flex-1 flex flex-col items-center md:items-start gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
                            viewport={{ once: true }}
                            className="bg-blue-900/80 rounded-2xl p-6 text-white max-w-xs shadow-lg"
                        >
                            <div className="text-xl font-bold mb-2">Smart, Secure, Instant</div>
                            <ul className="list-disc pl-5 text-base text-blue-100 space-y-1">
                                <li>Instant virtual card issuance</li>
                                <li>Bank-level security & privacy</li>
                                <li>Easy management in the app</li>
                                <li>Real-time spending control</li>
                            </ul>
                        </motion.div>
                    </div>
                    {/* 中央：虚拟卡片+平台logo+连线 */}
                    <div className="flex-1 flex flex-col items-center gap-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.7 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, type: "spring" }}
                            viewport={{ once: true }}
                            className="w-[340px] h-[210px] rounded-3xl bg-gradient-to-tr from-blue-700 to-purple-700 shadow-2xl flex flex-col justify-between p-8 mb-2 border-2 border-white/10"
                        >
                            <div className="text-white text-lg font-semibold">MP Card</div>
                            <div className="text-white text-2xl font-bold tracking-widest mb-2">Unlock Your Crypto Spending Power</div>
                            <div className="flex justify-between items-center">
                                <span className="text-white/80 text-sm">**** 1234</span>
                                <span className="text-white/60 text-xs">VIRTUAL</span>
                            </div>
                        </motion.div>
                        {/* 平台logo+连线 */}
                        <div className="relative flex flex-row items-center justify-center gap-8 mt-2">
                            {paymentPlatforms.map((p, i) => (
                                <motion.div
                                    key={p.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.15, type: "spring" }}
                                    viewport={{ once: true }}
                                    className="flex flex-col items-center"
                                >
                                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-md mb-2 relative">
                                        <img src={p.logo} alt={p.name} className="w-10 h-10 object-contain" />
                                        {/* 连线 */}
                                        {i === 0 && <div className="absolute right-[-18px] top-1/2 w-8 h-0.5 bg-blue-400" />}
                                        {i === 1 && <div className="absolute right-[-18px] top-1/2 w-8 h-0.5 bg-blue-400" />}
                                    </div>
                                    <span className="text-xs text-white/80">{p.name}</span>
                                </motion.div>
                            ))}
                        </div>
                        <div className="text-sm text-blue-200 mt-2 text-center max-w-xs">Bind your MP Card to Apple Pay, Google Pay, Alipay and more. Use it anywhere, online or offline.</div>
                    </div>
                    {/* 右侧：应用场景 */}
                    <div className="flex-1 flex flex-col items-center md:items-end gap-6">
                        <div className="flex flex-row gap-8">
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
                        <div className="text-sm text-blue-200 mt-2 text-center max-w-xs">Shop online, pay in cafes, travel globally—MP Card is accepted everywhere Visa/Mastercard is supported.</div>
                    </div>
                </div>
            </div>
        </section>
    );
} 
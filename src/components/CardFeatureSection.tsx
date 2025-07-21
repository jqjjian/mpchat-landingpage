'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CardFeatureSection() {
    return (
        <section
            id="card"
            className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden"
        >
            {/* 背景图片+深色蒙版 */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/pexels-jack-sparrow-4199490.jpg"
                    alt="global map"
                    className="w-full h-full object-cover"
                    width={1920}
                    height={1080}
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>

            <div className="relative z-10 w-full flex flex-col items-center px-4 py-20" style={{ maxWidth: 1700 }}>
                {/* 主标题+副标题 */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 font-display tracking-tight drop-shadow-lg">
                        MP Card
                    </h2>
                    <p className="text-2xl text-blue-100 mb-6 font-medium">Spend Crypto. Anywhere.</p>
                    <p className="text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed">
                        Transform your cryptocurrency into everyday purchasing power with our globally accepted payment
                        card.
                    </p>
                </motion.div>

                {/* 核心价值说明 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="w-full max-w-5xl mb-16"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg">
                                <svg
                                    className="w-10 h-10 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                    />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3 font-display">Instant Conversion</h4>
                            <p className="text-blue-100 text-base leading-relaxed">
                                Seamless crypto-to-fiat conversion for everyday purchases
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg">
                                <svg
                                    className="w-10 h-10 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3 font-display">Secure & Fast</h4>
                            <p className="text-blue-100 text-base leading-relaxed">
                                Bank-level security with instant transaction processing
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg">
                                <svg
                                    className="w-10 h-10 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3 font-display">Global Access</h4>
                            <p className="text-blue-100 text-base leading-relaxed">
                                Accepted worldwide wherever cards are supported
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* 核心卡片展示 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <div className="w-[380px] h-[240px] rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl flex flex-col justify-between p-8 border border-white/10 relative overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                        {/* 卡片装饰 */}
                        <div className="absolute top-6 right-6">
                            <div className="w-12 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-md flex items-center justify-center">
                                <span className="text-white text-xs font-bold">MP</span>
                            </div>
                        </div>

                        {/* 卡片信息 */}
                        <div className="flex flex-col">
                            <div className="text-white/60 text-sm font-medium mb-8">Digital Payment Card</div>
                            <div className="flex justify-between items-end">
                                <div className="text-white text-lg font-mono tracking-wider">•••• •••• •••• 1234</div>
                                <div className="text-white/80 text-xs font-medium bg-white/10 px-3 py-1 rounded-full">
                                    VIRTUAL
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
                @media (min-width: 768px) {
                    div[style*='max-width: 1700px'] {
                        max-width: 1200px !important;
                    }
                }
                @media (min-width: 1920px) {
                    div[style*='max-width: 1700px'] {
                        max-width: 1250px !important;
                    }
                }
                @media (min-width: 2520px) {
                    div[style*='max-width: 1700px'] {
                        max-width: 1432px !important;
                    }
                }
            `}</style>
        </section>
    )
}

'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Shield, Coins, Zap } from 'lucide-react'

export default function ChatFeatureSection() {
    return (
        <section
            id="chat"
            className="relative min-h-screen w-full flex items-center justify-center py-20"
            style={{ background: 'linear-gradient(to bottom, #f8fafc, #f1f5f9)' }}
        >
            <div className="w-full mx-auto px-6" style={{ maxWidth: 1700 }}>
                {/* 标题区域 */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 font-display tracking-tight">
                        MP Chat
                    </h2>
                    <p className="text-2xl text-gray-700 mb-6 font-medium">Secure. Private. Instant.</p>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        The future of communication starts here. We offer end-to-end encryption, multi-currency
                        integration, and instant transfers — all on one powerful platform.
                    </p>
                </motion.div>

                {/* 主要内容区域 */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* 左侧演示图片 */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
                        viewport={{ once: true }}
                        className="flex-1 flex justify-center"
                    >
                        {/* 替换为 send.webp 图片 */}
                        <div className="relative">
                            <Image
                                src="/send.webp"
                                alt="MP Chat Demo"
                                className="w-80 h-auto rounded-3xl "
                                width={320}
                                height={640}
                            />
                        </div>

                        {/* 原始手机界面动画组件 - 已隐藏但保留
                        <div className="relative chat-phone">
                            <div className="w-80 h-[640px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative flex flex-col">
                                    状态栏、聊天头部、聊天内容等所有组件都在这里...
                                    (为了简洁，这里省略了完整的手机界面代码)
                                </div>
                            </div>
                        </div>
                        */}
                    </motion.div>

                    {/* 右侧功能介绍 */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-10 chat-features"
                    >
                        {/* 功能点1：端到端加密 */}
                        <div className="flex items-start space-x-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                <Shield className="text-white w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">
                                    End-to-End Encryption
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Military-grade encryption ensures your conversations remain completely private and
                                    secure.
                                </p>
                            </div>
                        </div>

                        {/* 功能点2：加密货币集成 */}
                        <div className="flex items-start space-x-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                <Coins className="text-white w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">
                                    Multi-currency support
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Designed for global traders and expatriates. Seamlessly integrate multiple
                                    currencies for instant transfers.
                                </p>
                            </div>
                        </div>

                        {/* 功能点3：即时转账 */}
                        <div className="flex items-start space-x-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                <Zap className="text-white w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">
                                    Instant Transfers
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    No fees, no delays. Instantly and seamlessly transfer multiple currencies right
                                    within your chats.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
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
                @media (min-width: 2560px) {
                    div[style*='max-width: 1700px'] {
                        max-width: 1432px !important;
                    }
                }
            `}</style>
        </section>
    )
}

'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

// 卡片数据
const cards = [
    {
        id: 'physical',
        type: 'Physical Card',
        title: 'MP Card',
        subtitle: 'Premium Metal Card',
        number: '•••• •••• •••• 8756',
        background: 'bg-gray-900',
        chipColor: 'bg-yellow-500',
        logoColor: 'text-white',
        textColor: 'text-white',
        badge: 'PHYSICAL',
        badgeColor: 'bg-yellow-500/20 text-yellow-300',
        shadow: 'shadow-2xl shadow-black/30',
        border: 'border-gray-600/30'
    },
    {
        id: 'virtual',
        type: 'Virtual Card',
        title: 'MP Card',
        subtitle: 'Digital Payment Card',
        number: '•••• •••• •••• 1234',
        background: 'bg-blue-700',
        chipColor: 'bg-cyan-400',
        logoColor: 'text-white',
        textColor: 'text-white',
        badge: 'VIRTUAL',
        badgeColor: 'bg-cyan-500/20 text-cyan-300',
        shadow: 'shadow-2xl shadow-blue-500/20',
        border: 'border-blue-400/30'
    }
]

export default function CardFeatureSection() {
    const [currentCardIndex, setCurrentCardIndex] = useState(0)

    // 自动切换卡片
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentCardIndex(prev => (prev + 1) % cards.length)
        }, 4000) // 每4秒切换一次

        return () => clearInterval(timer)
    }, [])
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

                {/* 核心卡片展示 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-16"
                >
                    <div className="relative w-[380px] h-[280px]">
                        {cards.map((card, index) => {
                            const isFront = index === currentCardIndex
                            const isBack = index === (currentCardIndex + 1) % cards.length

                            if (!isFront && !isBack) return null

                            return (
                                <motion.div
                                    key={card.id}
                                    initial={false}
                                    animate={{
                                        x: isFront ? 0 : 20,
                                        y: isFront ? 0 : 20,
                                        scale: isFront ? 1 : 0.95,
                                        zIndex: isFront ? 20 : 10,
                                        rotateY: isFront ? 0 : -5,
                                        rotateX: isFront ? 0 : 5
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        ease: 'easeInOut',
                                        type: 'spring',
                                        stiffness: 100
                                    }}
                                    className={`absolute top-0 left-0 w-[380px] h-[240px] rounded-3xl ${card.background} ${card.shadow} flex flex-col justify-between p-8 border ${card.border} overflow-hidden cursor-pointer`}
                                    style={{
                                        transformStyle: 'preserve-3d',
                                        transformOrigin: 'center center'
                                    }}
                                    whileHover={isFront ? { scale: 1.02 } : {}}
                                >
                                    {/* 卡片背景纹理 */}
                                    <div className="absolute inset-0 opacity-5">
                                        <div className="absolute top-0 left-0 w-full h-full bg-white/10"></div>
                                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full"></div>
                                    </div>

                                    {/* 卡片顶部 */}
                                    <div className="relative z-10 flex justify-between items-start">
                                        <div>
                                            <div className={`${card.textColor}/60 text-sm font-medium mb-2`}>
                                                {card.subtitle}
                                            </div>
                                            <div className={`${card.textColor} text-xl font-bold font-display`}>
                                                {card.title}
                                            </div>
                                        </div>

                                        {/* 芯片 */}
                                        <div
                                            className={`w-12 h-8 ${card.chipColor} rounded-md flex items-center justify-center shadow-lg`}
                                        >
                                            <div className="w-8 h-6 bg-white/20 rounded-sm"></div>
                                        </div>
                                    </div>

                                    {/* 卡片底部 */}
                                    <div className="relative z-10 flex justify-between items-end">
                                        <div className={`${card.textColor} text-lg font-mono tracking-wider`}>
                                            {card.number}
                                        </div>
                                        <div
                                            className={`text-xs font-medium ${card.badgeColor} px-3 py-1 rounded-full backdrop-blur-sm`}
                                        >
                                            {card.badge}
                                        </div>
                                    </div>

                                    {/* Mastercard 标志 */}
                                    <div className="absolute bottom-6 right-6">
                                        <div className="flex items-center space-x-[-8px]">
                                            <div className="w-8 h-8 bg-red-500 rounded-full opacity-90"></div>
                                            <div className="w-8 h-8 bg-yellow-500 rounded-full opacity-90"></div>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>

                {/* 核心价值说明 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="w-full max-w-5xl"
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

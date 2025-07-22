'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { DollarSign, CheckCircle, Globe } from 'lucide-react'

// 新的卡片动画组件
const CardAnimation = () => {
    const [animationStep, setAnimationStep] = useState(-1) // -1: 未开始, 0: 淡入显示, 1: 一分为二, 2: 循环切换
    const [rightCardToggle, setRightCardToggle] = useState(true) // true: front.webp, false: back.webp
    const [hasStarted, setHasStarted] = useState(false) // 标记动画是否已经开始过

    // 当首次进入视图时开始动画
    const handleViewportEnter = () => {
        if (!hasStarted) {
            setHasStarted(true)
            setAnimationStep(0)
        }
    }

    useEffect(() => {
        if (animationStep === 0) {
            // 步骤1: card.webp 淡入显示 (2.5秒后直接一分为二)
            const timer = setTimeout(() => setAnimationStep(1), 2500)
            return () => clearTimeout(timer)
        } else if (animationStep === 1) {
            // 步骤2: 一分为二 (2秒动画完成后进入循环切换)
            const timer = setTimeout(() => setAnimationStep(2), 2000)
            return () => clearTimeout(timer)
        } else if (animationStep === 2) {
            // 步骤3: 右边卡片循环切换 (每3秒切换一次，无限循环)
            const interval = setInterval(() => {
                setRightCardToggle(prev => !prev)
            }, 3000)

            return () => {
                clearInterval(interval)
            }
        }
    }, [animationStep])

    return (
        <motion.div
            className="relative w-[700px] h-[450px] flex items-center justify-center"
            onViewportEnter={handleViewportEnter}
            viewport={{ once: true, margin: '-100px' }}
        >
            {/* 未开始状态：显示静态的card.webp */}
            {animationStep === -1 && (
                <img src="/card.webp" alt="MP Card" className="w-64 h-auto rounded-3xl shadow-2xl opacity-100" />
            )}

            {/* 步骤1: card.webp 淡入显示 - 使用最终尺寸 */}
            {animationStep === 0 && (
                <motion.img
                    src="/card.webp"
                    alt="MP Card"
                    className="w-64 h-auto rounded-3xl shadow-2xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                />
            )}

            {/* 步骤2: 一分为二 - card.webp移到左边，front.webp在原位置出现 */}
            {animationStep === 1 && (
                <div className="flex space-x-8 w-full justify-center items-center">
                    <motion.img
                        src="/card.webp"
                        alt="MP Card"
                        className="w-64 h-auto rounded-3xl shadow-2xl"
                        initial={{ x: 0, opacity: 1, scale: 1 }}
                        animate={{ x: -80, opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1.6,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            type: 'spring',
                            stiffness: 100,
                            damping: 15
                        }}
                    />
                    <motion.img
                        src="/front.webp"
                        alt="MP Card Front"
                        className="w-80 h-auto rounded-3xl shadow-2xl"
                        initial={{ x: 0, opacity: 0, scale: 0.9 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1.6,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            delay: 0.3,
                            type: 'spring',
                            stiffness: 120,
                            damping: 12
                        }}
                    />
                </div>
            )}

            {/* 步骤3: 左边card.webp保持不动，右边front.webp和back.webp在原位置循环切换 */}
            {animationStep === 2 && (
                <div className="flex space-x-8 w-full justify-center items-center">
                    {/* 左边：card.webp 保持不动 */}
                    <motion.img
                        src="/card.webp"
                        alt="MP Card"
                        className="w-64 h-auto rounded-3xl shadow-2xl"
                        initial={{ x: -80, opacity: 1 }}
                        animate={{ x: -80, opacity: 1 }}
                    />

                    {/* 右边：front.webp 和 back.webp 在原位置循环切换 */}
                    <div className="relative">
                        <motion.img
                            src="/front.webp"
                            alt="MP Card Front"
                            className="w-80 h-auto rounded-3xl shadow-2xl"
                            animate={{ opacity: rightCardToggle ? 1 : 0 }}
                            transition={{ duration: 1.2, ease: 'easeInOut' }}
                        />
                        <motion.img
                            src="/back.webp"
                            alt="MP Card Back"
                            className="absolute top-0 left-0 w-80 h-auto rounded-3xl shadow-2xl"
                            animate={{ opacity: rightCardToggle ? 0 : 1 }}
                            transition={{ duration: 1.2, ease: 'easeInOut' }}
                        />
                    </div>
                </div>
            )}
        </motion.div>
    )
}

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

                {/* 核心卡片展示 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-16"
                >
                    {/* 新的卡片动画效果 */}
                    <CardAnimation />

                    {/* 原始卡片动画组件 - 已隐藏但保留
                    <div className="relative w-[380px] h-[280px]">
                        原始卡片动画代码在这里...
                        (为了简洁，这里省略了完整的卡片动画代码)
                    </div>
                    */}
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
                                <DollarSign className="w-10 h-10 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3 font-display">Instant Conversion</h4>
                            <p className="text-blue-100 text-base leading-relaxed">
                                Seamless crypto-to-fiat conversion for everyday purchases
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg">
                                <CheckCircle className="w-10 h-10 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3 font-display">Secure & Fast</h4>
                            <p className="text-blue-100 text-base leading-relaxed">
                                Bank-level security with instant transaction processing
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg">
                                <Globe className="w-10 h-10 text-white" />
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

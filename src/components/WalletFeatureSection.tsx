'use client'
import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const sections = [
    {
        title: 'Institutional-Grade Security',
        desc: 'MP Wallet employs advanced multi-signature technology and hardware security modules to protect your assets with institutional-grade security standards.',
        bg: '/3.webp'
    }
]

export default function WalletFeatureSection() {
    // Intersection Observer 动画触发
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
    const [visibleIdx, setVisibleIdx] = useState(-1)
    useEffect(() => {
        if (typeof window === 'undefined') return
        const observer = new window.IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const idx = Number(entry.target.getAttribute('data-idx'))
                        setVisibleIdx(prev => (idx > prev ? idx : prev))
                    }
                })
            },
            { threshold: 0.3 }
        )
        const currentRefs = sectionRefs.current
        currentRefs.forEach(el => el && observer.observe(el))
        return () => {
            currentRefs.forEach(el => el && observer.unobserve(el))
        }
    }, [])
    return (
        <section
            id="wallet"
            className="relative min-h-screen w-full flex flex-col justify-center items-center bg-white"
        >
            <div className="w-full flex flex-col items-center px-4 py-20" style={{ maxWidth: 1700 }}>
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 font-display tracking-tight">
                        MP Wallet
                    </h2>
                    <p className="text-2xl text-gray-700 mb-6 font-medium">Trust. Security. Compliance.</p>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Designed for global expatriates, it offers institutional-grade security with regulatory
                        compliance.
                    </p>
                </motion.div>
                <div className="w-full flex flex-col gap-16">
                    {sections.map((s, i) => (
                        <motion.div
                            key={s.title}
                            ref={el => {
                                sectionRefs.current[i] = el
                            }}
                            data-idx={i}
                            initial={{ opacity: 0, y: 60 }}
                            animate={visibleIdx >= i ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className={`w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 ${
                                i % 2 === 0 ? '' : 'md:flex-row-reverse'
                            }`}
                        >
                            {/* 内容区域 */}
                            <div className="flex-1 flex flex-col items-center md:items-start px-4 md:px-12">
                                <motion.h3
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={visibleIdx >= i ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight text-center md:text-left font-display"
                                >
                                    {s.title}
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={visibleIdx >= i ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                                    className="text-xl text-gray-600 leading-relaxed max-w-2xl text-center md:text-left"
                                >
                                    {s.desc}
                                </motion.p>
                            </div>
                            {/* 图片展示 */}
                            <div className="flex-1 flex items-center justify-center px-4">
                                <motion.div
                                    initial={{ opacity: 0, x: i % 2 === 0 ? 60 : -60 }}
                                    animate={
                                        visibleIdx >= i
                                            ? { opacity: 1, x: 0 }
                                            : { opacity: 0, x: i % 2 === 0 ? 60 : -60 }
                                    }
                                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                                    className="relative group"
                                >
                                    <Image
                                        src={s.bg}
                                        alt="MP Wallet Interface"
                                        width={484}
                                        height={216}
                                        className="h-auto rounded-2xl transition-all duration-300 "
                                        priority
                                    />
                                    {/* 光晕效果 */}
                                    {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-200/50 to-gray-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div> */}
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

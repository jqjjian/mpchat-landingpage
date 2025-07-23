'use client'
import { useEffect, useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
    const [isMobile, setIsMobile] = useState(false)
    const [isTablet, setIsTablet] = useState(false)

    // 检测屏幕宽度
    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth
            setIsMobile(width < 890)
            setIsTablet(width >= 890 && width < 1024)
        }
        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)
        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    return (
        <section className="hero-section relative h-screen flex items-center justify-center pt-16 overflow-hidden">
            {/* 背景图片 */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(/pexels-photo-1275393.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
            <div
                className="w-full flex flex-col items-center justify-between px-4 sm:px-6 relative z-20 mx-auto"
                style={{
                    maxWidth: 1700,
                    width: '100%',
                    minWidth: 0,
                    flexDirection: isMobile ? 'column' : 'row'
                }}
            >
                {/* 左侧 slogan 和描述 */}
                <div
                    className="flex-1 flex flex-col items-start justify-center w-full"
                    style={{
                        minWidth: 0,
                        paddingRight: isMobile ? 0 : '3rem'
                    }}
                >
                    <Parallax speed={isMobile ? 0 : -20}>
                        <motion.h1
                            initial={{ opacity: 0, x: -80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, type: 'spring' }}
                            className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[110px] font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 drop-shadow-lg leading-tight font-display text-white tracking-tight"
                        >
                            LIVE WITH CRYPTO
                        </motion.h1>
                    </Parallax>
                    <Parallax speed={isMobile ? 0 : -10}>
                        <motion.p
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2, type: 'spring' }}
                            className="hero-description text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-normal mb-4 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-10 text-white/90 leading-relaxed pt-2 sm:pt-4 md:pt-6 lg:pt-12 xl:pt-20"
                        >
                            MP seamlessly blends secure encrypted chat, an easy-to-use crypto wallet, and a globally
                            accepted payment card. Effortlessly send, manage, and spend your crypto assets – start truly
                            living with crypto.
                        </motion.p>
                        {/* Get the app 按钮区块 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
                            className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8"
                        >
                            <span className="text-sm sm:text-base font-bold text-white mb-2 sm:mb-0 sm:mr-2 md:mr-4">
                                Get the app
                            </span>
                            <div className="app-store-buttons flex justify-center sm:justify-start w-full sm:w-auto">
                                <a
                                    href="https://sukkdl.oss-accelerate.aliyuncs.com/MP.apk"
                                    className="relative w-40 h-12 flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-white text-neutral-800 font-bold text-sm sm:text-base shadow-lg hover:bg-neutral-100 transition"
                                >
                                    <Image
                                        src="/Google_Play-Logo.wine.svg"
                                        alt="Google Play"
                                        className="w-6 h-6 sm:w-7 sm:h-7 "
                                        layout="fill"
                                    />
                                </a>
                            </div>
                        </motion.div>
                    </Parallax>
                </div>
                {/* 右侧图片视差动效 - 890px以下隐藏 */}
                {!isMobile && (
                    <Parallax speed={isMobile ? 0 : 10}>
                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4, type: 'spring' }}
                            className="flex items-center justify-center w-auto mt-6 md:mt-8 lg:mt-0"
                            style={{
                                flexShrink: 0,
                                maxWidth: isTablet ? '280px' : '400px'
                            }}
                        >
                            <div className="rounded-3xl flex items-center justify-center">
                                <Image
                                    src="/1.webp"
                                    alt="MP"
                                    className="max-w-full h-auto"
                                    width={400}
                                    height={400}
                                    style={{
                                        width: isTablet ? '280px' : '400px',
                                        height: 'auto'
                                    }}
                                />
                            </div>
                        </motion.div>
                    </Parallax>
                )}
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

'use client'
import { useEffect, useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import { motion } from 'framer-motion'
import Image from 'next/image'

const BG_IMAGES = ['/pg1.webp', '/pexels-asphotograpy-230544.webp']

export default function HeroSection() {
    const [bgIdx, setBgIdx] = useState(0)
    const [fade, setFade] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [isTablet, setIsTablet] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true)
            setTimeout(() => {
                setBgIdx(idx => (idx + 1) % BG_IMAGES.length)
                setFade(false)
            }, 300) // 动画持续300ms
        }, 10000) // 10秒切换
        return () => clearInterval(interval)
    }, [])

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
            {/* 背景图片淡入淡出 */}
            <div
                className="absolute inset-0 z-0 transition-opacity duration-700"
                style={{
                    opacity: fade ? 0 : 1,
                    backgroundImage: `url(${BG_IMAGES[bgIdx]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
            <div
                className="w-full flex flex-col items-center justify-between px-4 sm:px-6 relative z-20 mx-auto"
                style={{
                    maxWidth: 1200,
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
                            className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[110px] font-extrabold mb-3 sm:mb-4 md:mb-5 lg:mb-6 drop-shadow-lg leading-tight font-sans text-white"
                        >
                            LIVE WITH CRYPTO
                        </motion.h1>
                    </Parallax>
                    <Parallax speed={isMobile ? 0 : -10}>
                        <motion.p
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2, type: 'spring' }}
                            className="hero-description text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-medium mb-4 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-10 text-white/90 leading-relaxed pt-2 sm:pt-4 md:pt-6 lg:pt-12 xl:pt-20"
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
                            <div className="app-store-buttons flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-3 sm:px-5 py-2 sm:py-3 rounded-xl bg-white text-neutral-800 font-bold text-sm sm:text-base shadow-lg gap-1 sm:gap-2 hover:bg-neutral-100 transition min-w-0 flex-1 sm:flex-none"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        className="flex-shrink-0"
                                    >
                                        <path
                                            d="M23.6 17.2c-.1-2.5 2-3.7 2.1-3.8-1.2-1.7-3-1.9-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.3 2 2.7 3.4 2.6 1.4-.1 1.9-.8 3.6-.8 1.7 0 2.1.8 3.5.8 1.4 0 2.3-1.3 3.2-2.6.6-.9.8-1.3 1.2-2.3-3.1-1.2-3.6-4.5-3.6-4.6zm-3.4-8.6c.7-.8 1.2-2 1-3.2-1 .1-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 .1.1 1.2.2 2.9-1.3z"
                                            fill="#111"
                                        />
                                    </svg>
                                    <span className="truncate">APP STORE</span>
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-3 sm:px-5 py-2 sm:py-3 rounded-xl bg-white text-neutral-800 font-bold text-sm sm:text-base shadow-lg gap-1 sm:gap-2 hover:bg-neutral-100 transition min-w-0 flex-1 sm:flex-none"
                                >
                                    <Image
                                        src="/Google.ee741aca.svg"
                                        alt="Google"
                                        className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                                    />
                                    <span className="truncate">GOOGLE PLAY</span>
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
                    div[style*='max-width: 1200px'] {
                        max-width: 1200px !important;
                    }
                }
                @media (min-width: 1920px) {
                    div[style*='max-width: 1200px'] {
                        max-width: 1250px !important;
                    }
                }
                @media (min-width: 2520px) {
                    div[style*='max-width: 1200px'] {
                        max-width: 1432px !important;
                    }
                }
            `}</style>
        </section>
    )
}

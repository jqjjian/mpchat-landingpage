"use client";
import { useEffect, useState } from "react";
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const BG_IMAGES = ["/pg1.webp", "/pexels-asphotograpy-230544.webp"];

export default function HeroSection() {
    const [bgIdx, setBgIdx] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setBgIdx(idx => (idx + 1) % BG_IMAGES.length);
                setFade(false);
            }, 300); // 动画持续300ms
        }, 10000); // 10秒切换
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center pt-16 overflow-hidden">
            {/* 背景图片淡入淡出 */}
            <div className="absolute inset-0 z-0 transition-opacity duration-700" style={{ opacity: fade ? 0 : 1, backgroundImage: `url(${BG_IMAGES[bgIdx]})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
            <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
            <div
                className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-0 relative z-20 mx-auto"
                style={{
                    maxWidth: 1200,
                    width: '100%',
                    minWidth: 0,
                }}
            >
                {/* 左侧 slogan 和描述 */}
                <div
                    className="flex-1 flex flex-col items-start justify-center md:pr-12"
                    style={{ width: '100%', minWidth: 0 }}
                >
                    <Parallax speed={-20}>
                        <motion.h1
                            initial={{ opacity: 0, x: -80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, type: 'spring' }}
                            className="text-4xl md:text-[110px] font-extrabold mb-6 drop-shadow-lg leading-tight font-sans"
                        >
                            LIVE WITH CRYPTO
                        </motion.h1>
                    </Parallax>
                    <Parallax speed={-10}>
                        <motion.p
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2, type: 'spring' }}
                            className="text-lg md:text-2xl font-medium mb-10 text-white/90 leading-relaxed pt-20"
                        >
                            MP seamlessly blends secure encrypted chat, an easy-to-use crypto wallet, and a globally accepted payment card. Effortlessly send, manage, and spend your crypto assets – start truly living with crypto.
                        </motion.p>
                        {/* Get the app 按钮区块 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
                            className="flex flex-col md:flex-row items-center gap-4 mb-8"
                        >
                            <span className="text-base font-bold text-white mb-2 md:mb-0 md:mr-6">Get the app</span>
                            <div className="flex flex-row gap-3">
                                <a href="#" className="flex items-center px-5 py-3 rounded-xl bg-white text-neutral-800 font-bold text-base shadow-lg gap-2 hover:bg-neutral-100 transition">
                                    <svg width="22" height="22" viewBox="0 0 32 32" fill="none" className="mr-1"><path d="M23.6 17.2c-.1-2.5 2-3.7 2.1-3.8-1.2-1.7-3-1.9-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.3 2 2.7 3.4 2.6 1.4-.1 1.9-.8 3.6-.8 1.7 0 2.1.8 3.5.8 1.4 0 2.3-1.3 3.2-2.6.6-.9.8-1.3 1.2-2.3-3.1-1.2-3.6-4.5-3.6-4.6zm-3.4-8.6c.7-.8 1.2-2 1-3.2-1 .1-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 .1.1 1.2.2 2.9-1.3z" fill="#111" /></svg>
                                    APP STORE
                                </a>
                                <a href="#" className="flex items-center px-5 py-3 rounded-xl bg-white text-neutral-800 font-bold text-base shadow-lg gap-2 hover:bg-neutral-100 transition">
                                    <img src="/Google.ee741aca.svg" alt="Google" className="w-5 h-5 mr-1" />
                                    GOOGLE PLAY
                                </a>
                            </div>
                        </motion.div>
                    </Parallax>
                </div>
                {/* 右侧图片视差动效 */}
                <Parallax speed={10}>
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4, type: 'spring' }}
                        className="flex items-center justify-center w-full md:w-auto mt-10 md:mt-0"
                    >
                        <div className="md:w-96 md:h-96 rounded-3xl  flex items-center justify-center text-3xl text-white/60 font-bold">
                            {/* <img src="/iphones.webp" alt="MP" width={400} height={400} /> */}

                            <img src="/1.webp" alt="MP" width={400} />
                        </div>
                    </motion.div>
                </Parallax>
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
    );
} 
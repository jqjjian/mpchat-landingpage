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
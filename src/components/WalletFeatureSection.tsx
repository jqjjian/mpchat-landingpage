"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
    {
        title: "Digital Asset Command Center",
        en: "Your Digital Asset Command Center",
        desc: "Effortlessly visualize and manage your digital assets. Take control of your wealth anytime, anywhere.",
        bg: "bg-blue-800",
    },
    {
        title: "Multi-Layered Security & Privacy",
        en: "Multi-Layered Security & Privacy",
        desc: "End-to-end encryption and institutional-grade security architecture protect your assets and privacy.",
        bg: "bg-purple-900",
    },
    {
        title: "Seamless Transfers & Red Packets",
        en: "Seamless Transfers & Red Packets",
        desc: "Peer-to-peer transfers and USDT red packets. Fast, fun, and efficient payment experience.",
        bg: "bg-gray-800",
    },
    {
        title: "KYC & Easy Top-up",
        en: "KYC & Easy Top-up",
        desc: "One-stop KYC process. Multiple top-up options. Compliance and convenience in one place.",
        bg: "bg-indigo-900",
    },
];

export default function WalletFeatureSection() {
    // Intersection Observer 动画触发
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [visibleIdx, setVisibleIdx] = useState(-1);
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const observer = new window.IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const idx = Number(entry.target.getAttribute('data-idx'));
                    setVisibleIdx((prev) => (idx > prev ? idx : prev));
                }
            });
        }, { threshold: 0.3 });
        sectionRefs.current.forEach((el) => el && observer.observe(el));
        return () => { sectionRefs.current.forEach((el) => el && observer.unobserve(el)); };
    }, []);
    return (
        <section
            id="wallet"
            className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden"
            style={{ background: "linear-gradient(135deg, #2a1746 0%, #1a1a2e 60%, #1e2a4a 100%)" }}
        >
            {/* 背景科技感粒子/微光 */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <svg className="absolute w-full h-full" style={{ filter: 'blur(2px)' }}>
                    <circle cx="20%" cy="30%" r="80" fill="#7f5af0" fillOpacity="0.18">
                        <animate attributeName="cy" values="30%;35%;30%" dur="8s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="70%" cy="60%" r="120" fill="#00d4ff" fillOpacity="0.12">
                        <animate attributeName="cx" values="70%;75%;70%" dur="10s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="50%" cy="80%" r="60" fill="#fff" fillOpacity="0.08">
                        <animate attributeName="r" values="60;80;60" dur="12s" repeatCount="indefinite" />
                    </circle>
                </svg>
            </div>
            <div className="relative z-10 w-full flex flex-col items-center px-4 py-20" style={{ maxWidth: 1300 }}>
                <motion.h2
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white mb-12 text-center drop-shadow-lg"
                >
                    Revolutionary Crypto Wallet <span className="text-lg font-normal text-blue-200 ml-4">Revolutionary Crypto Wallet</span>
                </motion.h2>
                <div className="w-full flex flex-col gap-16">
                    {sections.map((s, i) => (
                        <motion.div
                            key={s.title}
                            ref={el => { sectionRefs.current[i] = el; }}
                            data-idx={i}
                            initial={{ opacity: 0, y: 60 }}
                            animate={visibleIdx >= i ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className={`w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                        >
                            {/* 图标与内容 */}
                            <div className="flex-1 flex flex-col items-center md:items-start px-4">
                                {/* <div className="text-5xl mb-4 drop-shadow-xl">{s.icon}</div> */}
                                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{s.title}</div>
                                <div className="text-base md:text-lg text-blue-100 mb-2">{s.en}</div>
                                <div className="text-lg text-blue-200 mb-4 max-w-md">{s.desc}</div>
                            </div>
                            {/* 占位图/动画 */}
                            <div className="flex-1 flex items-center justify-center px-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={visibleIdx >= i ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                                    transition={{ duration: 0.5, ease: 'easeOut' }}
                                    className={`w-[260px] h-[400px] md:w-[320px] md:h-[440px] rounded-3xl ${s.bg} flex items-center justify-center shadow-2xl border-2 border-white/10`}
                                >
                                    <span className="text-3xl text-white/60">图片/动画占位</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 
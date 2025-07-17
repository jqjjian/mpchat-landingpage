"use client";
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const USE_IMAGE_BG = false; // 关闭图片背景，使用深色背景
const BG_COLOR = '#1e293b'; // 深蓝色背景

function FeatureCard({ iconColor, title, desc, align = 'left', imgSrc, imgAlt }: { iconColor: string, title: string, desc: string, align?: 'left' | 'right', imgSrc?: string, imgAlt?: string }) {
    const phoneW = 240, phoneH = 440, phoneWBig = 400, phoneHBig = 540;
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: 'spring' }}
            viewport={{ once: true, amount: 0.5 }}
            className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 bg-white/90 rounded-2xl p-4 md:p-8 shadow-xl relative ${align === 'right' ? 'md:flex-row-reverse' : ''}`}
        >
            {/* 卡片内动效：图片、标题、描述分方向淡入 */}
            <motion.div
                initial={{ opacity: 0, x: align === 'left' ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3, type: 'spring' }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex flex-col items-center justify-center shrink-0 group cursor-pointer"
            >
                {imgSrc ? (
                    <img
                        src={imgSrc}
                        alt={imgAlt}
                        className="rounded-2xl object-contain  transition-all duration-300 group-hover:scale-150 group-hover:z-20"
                        style={{ width: phoneW, height: phoneH }}
                    />
                ) : (
                    <div
                        className="rounded-2xl flex items-center justify-center text-xs text-gray-400 bg-gray-200 border border-gray-300 shadow-lg transition-all duration-300 group-hover:scale-150 group-hover:z-20"
                        style={{ width: phoneW, height: phoneH }}
                    >
                        Screenshot<br />{phoneW}x{phoneH}
                    </div>
                )}
            </motion.div>
            <div className="flex-1 flex flex-col justify-center h-full px-0 md:px-6 py-4 md:py-0">
                <motion.h3
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5, type: 'spring' }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-xl md:text-2xl font-bold mb-2 text-gray-900 leading-tight"
                >{title}</motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7, type: 'spring' }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-base md:text-lg leading-relaxed text-gray-700 whitespace-pre-line"
                >{desc}</motion.p>
            </div>
        </motion.div>
    );
}

export default function ChatFeatureSection() {
    return (
        <section
            id="chat"
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
            style={{ background: BG_COLOR }}
        >
            {/* 内容区 垂直居中 */}
            <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-16 py-20 justify-center flex-1">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-col items-center mb-8"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-4 text-center">Encrypted Chat, Share the Crypto World</h2>
                    <p className="text-lg md:text-xl text-blue-100 text-center max-w-2xl">Experience secure, end-to-end encrypted messaging. Share the latest in crypto, send USDT red packets or transfers right in your chat, and connect with the future of digital communication.</p>
                </motion.div>
                <div className="flex flex-col gap-10 md:gap-16">
                    <FeatureCard
                        imgSrc="/5.webp"
                        iconColor="#60a5fa"
                        title="Truly Encrypted Chat"
                        desc="All messages are end-to-end encrypted. No one can read your chat except you and your contacts. Enjoy private, secure, and worry-free conversations."
                        align="left"
                        imgAlt="Encrypted Chat Screenshot"
                    />
                    <FeatureCard
                        imgSrc="/4.webp"
                        iconColor="#f59e42"
                        title="Share the Latest in Crypto"
                        desc="Share news, trends, and insights from the crypto world. Discuss market moves, project updates, and more with your friends in real time."
                        align="right"
                        imgAlt="Crypto News Screenshot"
                    />
                    <FeatureCard
                        imgSrc="/2.webp"
                        iconColor="#34d399"
                        title="Send USDT Red Packets & Transfers"
                        desc="Send and receive USDT red packets or direct transfers in your chat. Fast, simple, and secure—empowering your crypto social life."
                        align="left"
                        imgAlt="USDT Red Packet Screenshot"
                    />
                </div>
            </div>
        </section>
    );
} 
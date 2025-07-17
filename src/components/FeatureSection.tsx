"use client";
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

interface FeatureSectionProps {
    id: string;
    title: string;
    desc: string;
    color: string;
}

export default function FeatureSection({ id, title, desc, color }: FeatureSectionProps) {
    return (
        <section
            id={id}
            className={`relative min-h-screen w-full flex flex-col justify-center items-center ${color} transition-all duration-300`}
        >
            <div
                className="w-full flex flex-col items-center justify-center px-4 md:px-0 mx-auto"
                style={{
                    maxWidth: 1700,
                    width: '100%',
                    minWidth: 0,
                }}
            >
                <Parallax speed={-10}>
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, type: 'spring' }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 text-center break-words"
                    >
                        {title}
                    </motion.div>
                </Parallax>
                <Parallax speed={-5}>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-gray-700 mb-8 text-center max-w-2xl break-words"
                    >
                        {desc}
                    </motion.div>
                </Parallax>
                <Parallax speed={10}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
                        viewport={{ once: true }}
                        className="w-full max-w-xs md:max-w-lg h-48 md:h-64 bg-white/40 rounded-2xl flex items-center justify-center text-gray-400 text-2xl mx-auto"
                    >
                        图片/动画占位
                    </motion.div>
                </Parallax>
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
    );
} 
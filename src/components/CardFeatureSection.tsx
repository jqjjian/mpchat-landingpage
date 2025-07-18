'use client'
import { motion } from 'framer-motion'

const paymentPlatforms = [
    { name: 'Apple Pay', logo: '/applepay.svg' },
    { name: 'Google Pay', logo: '/googlepay.svg' },
    { name: 'Alipay', logo: '/alipay.svg' }
    // 可根据资源补充更多
]

const scenarios = [
    { icon: '🛒', label: 'Online Shopping' },
    { icon: '☕', label: 'Cafes & Restaurants' },
    { icon: '✈️', label: 'Overseas Payments' }
]

export default function CardFeatureSection() {
    return (
        <section
            id="card"
            className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden"
        >
            {/* 背景图片+深色蒙版 */}
            <div className="absolute inset-0 z-0">
                <img src="/pexels-jack-sparrow-4199490.jpg" alt="global map" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative z-10 w-full flex flex-col items-center px-4 py-20" style={{ maxWidth: 1300 }}>
                {/* 主标题+副标题 */}
                <motion.h2
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6 text-center drop-shadow-lg"
                >
                    MP Card
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, type: 'spring' }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-semibold text-blue-100 mb-4 text-center"
                >
                    Enabling everyday purchases with cryptocurrency.
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
                    viewport={{ once: true }}
                    className="text-lg text-blue-200 mb-12 text-center max-w-3xl leading-relaxed"
                >
                    MP Card allows users to make everyday purchases using cryptocurrency, bridging the gap between
                    digital currencies and daily transactions.
                </motion.p>
                {/* 内容区：重新设计的卡片展示 */}
                <div className="w-full flex flex-col items-center justify-center gap-12">
                    {/* 核心价值说明 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-center max-w-4xl"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                                    <svg
                                        className="w-8 h-8 text-blue-600"
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
                                <h4 className="text-lg font-semibold text-white mb-2">Crypto Payments</h4>
                                <p className="text-blue-200 text-sm">
                                    Use your cryptocurrency for everyday purchases with instant conversion
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                    <svg
                                        className="w-8 h-8 text-green-600"
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
                                <h4 className="text-lg font-semibold text-white mb-2">Secure & Fast</h4>
                                <p className="text-blue-200 text-sm">
                                    Bank-level security with real-time transaction processing
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                                    <svg
                                        className="w-8 h-8 text-purple-600"
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
                                <h4 className="text-lg font-semibold text-white mb-2">Global Access</h4>
                                <p className="text-blue-200 text-sm">
                                    Accepted worldwide wherever Visa/Mastercard is supported
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* 核心卡片展示区 */}
                    <div className="flex flex-col items-center gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                            className="w-[320px] h-[200px] rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg flex flex-col justify-between p-6 mb-2 border border-gray-300/50 relative overflow-hidden group cursor-pointer"
                        >
                            {/* 简洁的装饰元素 */}
                            <div className="absolute top-4 left-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-600">
                                    <path
                                        d="M12 2L2 7L12 12L22 7L12 2Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2 17L12 22L22 17"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2 12L12 17L22 12"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            {/* Mastercard风格的圆形 */}
                            <div className="absolute top-4 right-4 flex">
                                <div className="w-6 h-6 rounded-full bg-red-500 opacity-80"></div>
                                <div className="w-6 h-6 rounded-full bg-orange-400 opacity-80 -ml-2"></div>
                            </div>

                            <div className="relative z-10 mt-8">
                                <div className="text-gray-700 text-lg font-semibold mb-1">MP Card</div>
                                <div className="text-gray-600 text-sm font-medium mb-6">Digital Payment Solution</div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700 text-base font-mono tracking-wider">
                                        •••• •••• •••• 1234
                                    </span>
                                    <span className="text-gray-500 text-xs font-medium bg-gray-200 px-2 py-1 rounded">
                                        VIRTUAL
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* 支付平台和应用场景统一展示 */}
                    <div className="w-full max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-center mb-8"
                        >
                            <h3 className="text-2xl font-semibold text-white mb-4">Supported Platforms & Use Cases</h3>
                            <p className="text-blue-200 max-w-2xl mx-auto">
                                Connect your MP Card to popular payment platforms and use it across various scenarios -
                                from online shopping to in-store purchases
                            </p>
                        </motion.div>

                        {/* 支付平台展示 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <h4 className="text-lg font-medium text-white mb-6 text-center">Payment Platforms</h4>
                            <div className="flex justify-center items-center gap-8 flex-wrap">
                                {paymentPlatforms.map((p, i) => (
                                    <motion.div
                                        key={p.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: i * 0.1 + 0.5,
                                            type: 'spring',
                                            bounce: 0.3
                                        }}
                                        viewport={{ once: true }}
                                        whileHover={{
                                            y: -5,
                                            scale: 1.05,
                                            transition: { duration: 0.2 }
                                        }}
                                        className="flex flex-col items-center group"
                                    >
                                        <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-md mb-3 relative overflow-hidden group-hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                                            <img
                                                src={p.logo}
                                                alt={p.name}
                                                className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 rounded-xl bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                        <span className="text-xs text-white/80 group-hover:text-white transition-colors duration-300">
                                            {p.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* 应用场景展示 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-lg font-medium text-white mb-6 text-center">Use Cases</h4>
                            <div className="flex justify-center items-center gap-12 flex-wrap">
                                {scenarios.map((s, i) => (
                                    <motion.div
                                        key={s.label}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: i * 0.15 + 0.7,
                                            type: 'spring',
                                            bounce: 0.3
                                        }}
                                        viewport={{ once: true }}
                                        whileHover={{
                                            y: -5,
                                            scale: 1.05,
                                            transition: { duration: 0.2 }
                                        }}
                                        className="flex flex-col items-center group cursor-pointer"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-2xl text-gray-600 mb-3 shadow-md relative overflow-hidden group-hover:shadow-lg transition-shadow duration-300 border border-gray-300">
                                            <motion.span whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                                                {s.icon}
                                            </motion.span>
                                            <div className="absolute inset-0 rounded-full bg-white/50 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                        </div>
                                        <span className="text-sm text-white/90 text-center group-hover:text-white transition-colors duration-300">
                                            {s.label}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

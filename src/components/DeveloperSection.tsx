'use client'

import { motion } from 'framer-motion'

export default function DeveloperSection() {
    const features = [
        {
            icon: '🔗',
            title: 'APIs & SDKs',
            description: 'Comprehensive REST APIs and SDKs for multiple programming languages',
            details: ['RESTful APIs', 'JavaScript SDK', 'Python SDK', 'React Components']
        },
        {
            icon: '💬',
            title: 'Secure Communications',
            description: 'End-to-end encrypted messaging and real-time communication features',
            details: ['E2E Encryption', 'Real-time Chat', 'Voice & Video', 'File Sharing']
        },
        {
            icon: '💰',
            title: 'Crypto Payments',
            description: 'Seamless integration of cryptocurrency payment solutions',
            details: ['Multi-chain Support', 'Instant Settlement', 'Low Fees', 'DeFi Integration']
        },
        {
            icon: '🌐',
            title: 'Social Features',
            description: 'Social sharing and engagement tools for community building',
            details: ['Social Login', 'Content Sharing', 'Community Tools', 'Analytics']
        }
    ]

    const stats = [
        { number: '99.9%', label: 'Uptime SLA', suffix: '' },
        { number: '50', label: 'API Endpoints', suffix: '+' },
        { number: '10', label: 'Programming Languages', suffix: '+' },
        { number: '24/7', label: 'Developer Support', suffix: '' }
    ]

    const codeExample = `// Initialize MP SDK
import { MPClient } from '@mp/sdk'

const client = new MPClient({
  apiKey: 'your-api-key',
  environment: 'production'
})

// Send crypto payment
const payment = await client.payments.create({
  amount: 100,
  currency: 'USDC',
  recipient: 'wallet-address'
})

// Real-time messaging
client.chat.onMessage((message) => {
  console.log('New message:', message)
})`

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
            {/* 背景装饰 */}
            <div className="absolute inset-0">
                {/* 网格背景 */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                            backgroundSize: '50px 50px'
                        }}
                    />
                </div>

                {/* 浮动的代码片段 */}
                <div className="absolute top-20 left-10 opacity-20">
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                        className="text-blue-300 font-mono text-sm"
                    >
                        {'{ "api": "v2.0" }'}
                    </motion.div>
                </div>

                <div className="absolute top-40 right-20 opacity-20">
                    <motion.div
                        animate={{
                            y: [0, 15, 0],
                            rotate: [0, -3, 0]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 1
                        }}
                        className="text-purple-300 font-mono text-sm"
                    >
                        {'<SDK />'}
                    </motion.div>
                </div>

                {/* 几何图形装饰 */}
                <div className="absolute bottom-20 left-20 opacity-10">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: 'linear'
                        }}
                        className="w-32 h-32 border-2 border-blue-400 rounded-lg"
                    />
                </div>
            </div>

            <div
                className="relative z-10 w-full flex flex-col items-center px-4 py-20"
                style={{ maxWidth: 1300, margin: '0 auto' }}
            >
                {/* 主标题+副标题 */}
                <motion.h2
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6 text-center drop-shadow-lg"
                >
                    MP Developer
                </motion.h2>

                <motion.h3
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, type: 'spring' }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-semibold text-blue-100 mb-4 text-center"
                >
                    Build applications that define the crypto experience
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
                    viewport={{ once: true }}
                    className="text-lg text-blue-200 mb-16 text-center max-w-4xl leading-relaxed"
                >
                    MP Developer provides the APIs, SDKs, and support for you to create innovative applications.
                    Seamlessly integrate secure communications, crypto payments, and social sharing and engagement
                    features to build what's next for users in the MP ecosystem.
                </motion.p>

                {/* 统计数据 */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 w-full max-w-4xl"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.1 + 0.4,
                                type: 'spring',
                                bounce: 0.4
                            }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                                {stat.number}
                                {stat.suffix}
                            </div>
                            <div className="text-blue-200 text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* 功能特性网格 */}
                <div className="w-full max-w-6xl mb-20">
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-2xl font-semibold text-white mb-12 text-center"
                    >
                        Powerful Developer Tools
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: i * 0.15 + 0.2,
                                    type: 'spring',
                                    bounce: 0.3
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -5,
                                    transition: { duration: 0.2 }
                                }}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 group"
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ duration: 0.2 }}
                                        className="text-4xl"
                                    >
                                        {feature.icon}
                                    </motion.div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                                            {feature.title}
                                        </h4>
                                        <p className="text-blue-200 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    {feature.details.map((detail, j) => (
                                        <motion.div
                                            key={detail}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.4,
                                                delay: i * 0.15 + j * 0.1 + 0.5
                                            }}
                                            viewport={{ once: true }}
                                            className="flex items-center gap-2 text-sm text-blue-100"
                                        >
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                            {detail}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 代码示例 */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full max-w-4xl"
                >
                    <h3 className="text-2xl font-semibold text-white mb-8 text-center">Get Started in Minutes</h3>

                    <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden">
                        <div className="flex items-center gap-2 px-6 py-4 bg-gray-800/50 border-b border-gray-700">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="ml-4 text-gray-400 text-sm font-mono">mp-sdk-example.js</span>
                        </div>

                        <motion.pre
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="p-6 text-sm font-mono text-gray-300 overflow-x-auto"
                        >
                            <code>{codeExample}</code>
                        </motion.pre>
                    </div>
                </motion.div>

                {/* CTA按钮 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-4 mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Start Building
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300"
                    >
                        View Documentation
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

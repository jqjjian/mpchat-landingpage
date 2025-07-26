'use client'

import { motion } from 'framer-motion'
import {
    MessageCircle,
    Shield,
    Zap,
    Code,
    BookOpen,
    Users,
    Headphones,
    Palette,
    ArrowRight,
    CheckCircle
} from 'lucide-react'

export default function DeveloperSection() {
    // Core Features
    const coreFeatures = [
        {
            icon: MessageCircle,
            title: 'Native Social Integration',
            description: 'Seamlessly integrate chat, groups, and social features into your application',
            highlights: ['Real-time Messaging', 'Group Management', 'Social Login', 'Content Sharing']
        },
        {
            icon: Shield,
            title: 'Seamless Multi-currency Functionality',
            description: 'Enterprise-grade security with multi-currency asset management and encrypted communications',
            highlights: ['End-to-End Encryption', 'Multi-currency Assets', 'Secure Payments', 'Privacy Protection']
        },
        {
            icon: Zap,
            title: 'Lightweight MiniApp Experience',
            description: 'High-performance, low-resource application development experience',
            highlights: ['Fast Launch', 'Low Memory Usage', 'Smooth Experience', 'Cross-platform Support']
        },
        {
            icon: Code,
            title: 'Developer-Friendly Environment',
            description: 'Complete SDK, detailed documentation, and rich development tools',
            highlights: ['Complete SDK', 'API Documentation', 'Code Examples', 'Development Tools']
        }
    ]

    // Quick Start Steps
    const quickStartSteps = [
        {
            step: '1',
            title: 'Create Developer Account',
            description: 'Register on the MPChat Developer Platform',
            action: 'Sign Up Now'
        },
        {
            step: '2',
            title: 'Create Your Application',
            description: 'Configure application parameters and permissions',
            action: 'Create App'
        },
        {
            step: '3',
            title: 'Integrate SDK & Start Building',
            description: 'Use APIs and SDKs to build powerful features',
            action: 'View SDK Docs'
        }
    ]

    // Developer Resources
    const developerResources = [
        {
            icon: BookOpen,
            title: 'Comprehensive Documentation',
            description: 'API references, tutorials, guides, and best practice examples',
            link: 'View Docs'
        },
        {
            icon: Users,
            title: 'Active Developer Community',
            description: 'Technical discussions, Q&A, developer events and updates',
            link: 'Join Community'
        },
        {
            icon: Palette,
            title: 'Design Resources',
            description: 'UI components, design guidelines, icons and asset libraries',
            link: 'Download Resources'
        },
        {
            icon: Headphones,
            title: 'Professional Developer Support',
            description: '24/7 technical support with dedicated team assistance',
            link: 'Contact Support'
        }
    ]

    const codeExample = `// Initialize MPChat SDK
import { MPChatClient } from '@mpchat/sdk'

const client = new MPChatClient({
  apiKey: 'your-api-key',
  environment: 'production'
})

// Send encrypted message
const message = await client.chat.sendMessage({
  to: 'user-id',
  content: 'Hello from MPChat!',
  encrypted: true
})`

    return (
        <section
            id="dev"
            className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden"
        >
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
                        {'{ "mpchat": "sdk" }'}
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
                        {'<MPChat />'}
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
                style={{ maxWidth: 1700, margin: '0 auto' }}
            >
                {/* Hero Section */}
                <motion.h2
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6 text-center drop-shadow-lg"
                >
                    🚀 Build the Next Generation Social Ecosystem
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
                    viewport={{ once: true }}
                    className="text-lg text-blue-200 mb-12 text-center max-w-4xl leading-relaxed"
                >
                    Leverage MPChat&apos;s powerful APIs and MiniApp framework to seamlessly integrate secure
                    communications, multi-currency asset management, and innovative social experiences into your
                    applications
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-4 mb-20"
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

                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-purple-600/20 hover:bg-purple-600/30 text-white font-semibold rounded-xl border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300"
                    >
                        Try Online
                    </motion.button>
                </motion.div>

                {/* Core Features */}
                <div className="w-full max-w-6xl mb-20">
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-semibold text-white mb-12 text-center"
                    >
                        Core Technology Features
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {coreFeatures.map((feature, i) => (
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
                                        className="text-white"
                                    >
                                        <feature.icon className="w-10 h-10" />
                                    </motion.div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                                            {feature.title}
                                        </h4>
                                        <p className="text-blue-200 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    {feature.highlights.map((highlight, j) => (
                                        <motion.div
                                            key={highlight}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.4,
                                                delay: i * 0.15 + j * 0.1 + 0.5
                                            }}
                                            viewport={{ once: true }}
                                            className="flex items-center gap-2 text-sm text-blue-100"
                                        >
                                            <CheckCircle className="w-4 h-4 text-green-400" />
                                            {highlight}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Quick Start Guide */}
                <div className="w-full max-w-6xl mb-20">
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-semibold text-white mb-12 text-center"
                    >
                        🎯 Start Your Development Journey in 3 Steps
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {quickStartSteps.map((step, i) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: i * 0.2 + 0.2,
                                    type: 'spring',
                                    bounce: 0.3
                                }}
                                viewport={{ once: true }}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 text-center group"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6"
                                >
                                    {step.step}
                                </motion.div>

                                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
                                    {step.title}
                                </h4>

                                <p className="text-blue-200 mb-6 leading-relaxed">{step.description}</p>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 text-blue-200 font-medium rounded-lg border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 flex items-center gap-2 mx-auto"
                                >
                                    {step.action}
                                    <ArrowRight className="w-4 h-4" />
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Code Example */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full max-w-4xl mb-20"
                >
                    <h3 className="text-2xl font-semibold text-white mb-8 text-center">Get Started in Minutes</h3>

                    <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden">
                        <div className="flex items-center gap-2 px-6 py-4 bg-gray-800/50 border-b border-gray-700">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="ml-4 text-gray-400 text-sm font-mono">mpchat-example.js</span>
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

                {/* Developer Resources */}
                <div className="w-full max-w-6xl">
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-semibold text-white mb-12 text-center"
                    >
                        📚 Complete Developer Ecosystem Support
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {developerResources.map((resource, i) => (
                            <motion.div
                                key={resource.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: i * 0.1 + 0.2,
                                    type: 'spring',
                                    bounce: 0.3
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -5,
                                    transition: { duration: 0.2 }
                                }}
                                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-center group"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-white mb-4"
                                >
                                    <resource.icon className="w-12 h-12 mx-auto" />
                                </motion.div>

                                <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
                                    {resource.title}
                                </h4>

                                <p className="text-blue-200 text-sm mb-4 leading-relaxed">{resource.description}</p>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="text-blue-300 hover:text-blue-200 font-medium text-sm transition-colors duration-300 flex items-center gap-1 mx-auto"
                                >
                                    {resource.link}
                                    <ArrowRight className="w-3 h-3" />
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                </div>
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

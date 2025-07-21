'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

// 消息类型定义
interface Message {
    id: number
    type: 'received' | 'sent' | 'redpacket' | 'transfer'
    content: string
    time: string
    delay: number
    amount?: string
    message?: string
}

// 打字指示器组件
const TypingIndicator = () => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="flex flex-col items-start"
    >
        <div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-sm">
            <div className="flex space-x-1">
                <motion.div
                    className="w-2 h-2 bg-gray-400 rounded-full"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                    className="w-2 h-2 bg-gray-400 rounded-full"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div
                    className="w-2 h-2 bg-gray-400 rounded-full"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                />
            </div>
        </div>
    </motion.div>
)

export default function ChatFeatureSection() {
    const [visibleMessages, setVisibleMessages] = useState<number[]>([])
    const [showTyping, setShowTyping] = useState(false)
    const chatContainerRef = useRef<HTMLDivElement>(null)

    // 消息数据
    const messages: Message[] = [
        {
            id: 1,
            type: 'received',
            content: 'Hey! Ready for our Paris trip? 🗼',
            time: '03:44',
            delay: 1000
        },
        {
            id: 2,
            type: 'sent',
            content: 'Yes! So excited! 🎉',
            time: '03:44',
            delay: 2500
        },
        {
            id: 3,
            type: 'received',
            content: 'Found perfect Airbnb + flights! Need $1000 per person. Book ASAP?',
            time: '03:45',
            delay: 4000
        },
        {
            id: 4,
            type: 'sent',
            content: 'Perfect! Sending my share now! 💰',
            time: '03:46',
            delay: 5500
        },
        {
            id: 5,
            type: 'redpacket',
            content: 'Paris Trip Fund',
            amount: '1000 USDT',
            message: 'For our amazing Paris adventure! 🇫🇷✈️',
            time: '03:47',
            delay: 7000
        },
        {
            id: 6,
            type: 'received',
            content: "Amazing! Red packet received! You're the best! 🙏 Paris here we come! 🥳",
            time: '03:47',
            delay: 9000
        }
    ]

    // 自动滚动到底部
    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: 'smooth'
            })
        }
    }

    useEffect(() => {
        const showMessagesSequentially = () => {
            // 重置状态
            setVisibleMessages([])
            setShowTyping(false)

            messages.forEach(message => {
                // 显示打字指示器
                if (message.type === 'received') {
                    setTimeout(() => {
                        setShowTyping(true)
                        scrollToBottom()
                    }, message.delay - 1500)
                }

                // 显示消息
                setTimeout(() => {
                    setShowTyping(false)
                    setVisibleMessages(prev => {
                        const newMessages = [...prev, message.id]
                        // 延迟滚动，确保消息已渲染
                        setTimeout(scrollToBottom, 100)
                        return newMessages
                    })
                }, message.delay)
            })
        }

        // 初始播放
        const initialTimer = setTimeout(showMessagesSequentially, 1000)

        // 循环播放
        const interval = setInterval(showMessagesSequentially, 12000)

        return () => {
            clearTimeout(initialTimer)
            clearInterval(interval)
        }
    }, [])
    return (
        <section
            id="chat"
            className="relative min-h-screen w-full flex items-center justify-center py-20"
            style={{ background: 'linear-gradient(to bottom, #f8fafc, #f1f5f9)' }}
        >
            <div className="w-full mx-auto px-6" style={{ maxWidth: 1700 }}>
                {/* 标题区域 */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 font-display tracking-tight">
                        MP Chat
                    </h2>
                    <p className="text-2xl text-gray-700 mb-6 font-medium">Secure. Private. Instant.</p>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Experience the future of messaging with end-to-end encryption, seamless crypto integration, and
                        instant transfers - all in one powerful platform.
                    </p>
                </motion.div>

                {/* 主要内容区域 */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* 左侧手机界面 */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
                        viewport={{ once: true }}
                        className="flex-1 flex justify-center"
                    >
                        {/* 手机外框 */}
                        <div className="relative chat-phone">
                            <div className="w-80 h-[640px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                                {/* 手机屏幕 */}
                                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative flex flex-col">
                                    {/* 状态栏 */}
                                    <div className="h-11 bg-white flex items-center justify-between px-6 text-sm font-medium text-black">
                                        <span>9:41</span>
                                        <div className="flex items-center space-x-1">
                                            {/* 信号强度 */}
                                            <div className="flex space-x-1">
                                                <div className="w-1 h-2 bg-black rounded-full"></div>
                                                <div className="w-1 h-3 bg-black rounded-full"></div>
                                                <div className="w-1 h-4 bg-black rounded-full"></div>
                                                <div className="w-1 h-4 bg-black rounded-full"></div>
                                            </div>
                                            {/* WiFi */}
                                            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.166 4.999c1.112-1.111 2.646-1.8 4.334-1.8s3.222.689 4.334 1.8L12 6.165 10.834 5c-.889-.889-2.11-1.444-3.334-1.444S5.055 4.111 4.166 5L2.166 4.999zM5.5 8.5c.556-.556 1.333-.9 2.167-.9s1.611.344 2.167.9L11 9.665 9.833 8.5c-.444-.444-1.055-.722-1.666-.722S7.277 8.056 6.833 8.5L5.5 8.5zM8.5 12c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5z" />
                                            </svg>
                                            {/* 电池 */}
                                            <div className="w-6 h-3 border border-black rounded-sm relative ml-1">
                                                <div className="w-full h-full bg-black rounded-sm"></div>
                                                <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-black rounded-r"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 聊天头部 */}
                                    <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center">
                                        {/* 返回按钮 */}
                                        <svg
                                            className="w-6 h-6 text-gray-600 mr-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 19l-7-7 7-7"
                                            />
                                        </svg>

                                        {/* 用户头像和信息 */}
                                        <div className="flex items-center flex-1">
                                            <div className="relative">
                                                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                                                    <span className="text-white font-bold text-sm">E</span>
                                                </div>
                                                {/* 在线状态 */}
                                                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                            </div>
                                            <div className="ml-3">
                                                <h3 className="font-semibold text-gray-900 text-base">Ethan</h3>
                                                <p className="text-xs text-green-500">Online</p>
                                            </div>
                                        </div>

                                        {/* 更多选项 */}
                                        <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                        </svg>
                                    </div>

                                    {/* 聊天内容区域 */}
                                    <div
                                        ref={chatContainerRef}
                                        className="flex-1 bg-gray-50 p-3 space-y-3 overflow-y-auto overflow-x-hidden"
                                    >
                                        {/* 日期分隔 */}
                                        <div className="text-center">
                                            <span className="bg-gray-300 text-gray-600 text-xs px-3 py-1 rounded-full">
                                                Today
                                            </span>
                                        </div>

                                        {/* 聊天消息 */}
                                        <div className="space-y-3">
                                            <AnimatePresence mode="popLayout">
                                                {/* 打字指示器 */}
                                                {showTyping && <TypingIndicator />}

                                                {/* 动态消息渲染 */}
                                                {messages.map(message => {
                                                    if (!visibleMessages.includes(message.id)) return null

                                                    if (message.type === 'received') {
                                                        return (
                                                            <motion.div
                                                                key={message.id}
                                                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                                transition={{
                                                                    duration: 0.5,
                                                                    type: 'spring',
                                                                    stiffness: 200
                                                                }}
                                                                className="flex flex-col items-start"
                                                            >
                                                                <motion.div
                                                                    className="bg-white rounded-2xl rounded-tl-md px-4 py-3 max-w-[240px] shadow-sm"
                                                                    whileHover={{ scale: 1.02 }}
                                                                    transition={{ duration: 0.2 }}
                                                                >
                                                                    <p className="text-sm text-gray-800 leading-relaxed">
                                                                        {message.content}
                                                                    </p>
                                                                </motion.div>
                                                                <motion.span
                                                                    className="text-xs text-gray-500 mt-1 ml-2"
                                                                    initial={{ opacity: 0 }}
                                                                    animate={{ opacity: 1 }}
                                                                    transition={{ delay: 0.3 }}
                                                                >
                                                                    {message.time}
                                                                </motion.span>
                                                            </motion.div>
                                                        )
                                                    }

                                                    if (message.type === 'sent') {
                                                        return (
                                                            <motion.div
                                                                key={message.id}
                                                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                                transition={{
                                                                    duration: 0.5,
                                                                    type: 'spring',
                                                                    stiffness: 200
                                                                }}
                                                                className="flex flex-col items-end"
                                                            >
                                                                <motion.div
                                                                    className="bg-green-400 text-white rounded-2xl rounded-tr-md px-4 py-3 max-w-[240px]"
                                                                    whileHover={{ scale: 1.02 }}
                                                                    transition={{ duration: 0.2 }}
                                                                >
                                                                    <p className="text-sm leading-relaxed">
                                                                        {message.content}
                                                                    </p>
                                                                </motion.div>
                                                                <motion.div
                                                                    className="flex items-center mt-1 mr-2"
                                                                    initial={{ opacity: 0 }}
                                                                    animate={{ opacity: 1 }}
                                                                    transition={{ delay: 0.3 }}
                                                                >
                                                                    <span className="text-xs text-gray-500">
                                                                        {message.time}
                                                                    </span>
                                                                    <motion.svg
                                                                        className="w-4 h-4 text-blue-500 ml-1"
                                                                        fill="currentColor"
                                                                        viewBox="0 0 20 20"
                                                                        initial={{ scale: 0 }}
                                                                        animate={{ scale: 1 }}
                                                                        transition={{ delay: 0.5, type: 'spring' }}
                                                                    >
                                                                        <path
                                                                            fillRule="evenodd"
                                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                            clipRule="evenodd"
                                                                        />
                                                                    </motion.svg>
                                                                </motion.div>
                                                            </motion.div>
                                                        )
                                                    }

                                                    if (message.type === 'transfer') {
                                                        return (
                                                            <motion.div
                                                                key={message.id}
                                                                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                                transition={{
                                                                    duration: 0.6,
                                                                    type: 'spring',
                                                                    stiffness: 150
                                                                }}
                                                                className="flex justify-center my-4"
                                                            >
                                                                <motion.div
                                                                    className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl p-4 shadow-lg max-w-[280px] w-full"
                                                                    whileHover={{ scale: 1.05 }}
                                                                    animate={{
                                                                        boxShadow: [
                                                                            '0 10px 25px rgba(251, 146, 60, 0.3)',
                                                                            '0 15px 35px rgba(251, 146, 60, 0.5)',
                                                                            '0 10px 25px rgba(251, 146, 60, 0.3)'
                                                                        ]
                                                                    }}
                                                                    transition={{
                                                                        boxShadow: {
                                                                            duration: 2,
                                                                            repeat: Infinity,
                                                                            ease: 'easeInOut'
                                                                        }
                                                                    }}
                                                                >
                                                                    <div className="flex items-center space-x-3">
                                                                        <motion.div
                                                                            className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                                                                            animate={{ rotate: 360 }}
                                                                            transition={{
                                                                                duration: 2,
                                                                                repeat: Infinity,
                                                                                ease: 'linear'
                                                                            }}
                                                                        >
                                                                            <span className="text-white text-xl font-bold">
                                                                                T
                                                                            </span>
                                                                        </motion.div>
                                                                        <div className="flex-1">
                                                                            <motion.p
                                                                                className="text-white font-semibold text-lg"
                                                                                initial={{ scale: 0.8 }}
                                                                                animate={{ scale: 1 }}
                                                                                transition={{ delay: 0.2 }}
                                                                            >
                                                                                1000 USDT
                                                                            </motion.p>
                                                                            <motion.p
                                                                                className="text-white/80 text-sm"
                                                                                initial={{ opacity: 0 }}
                                                                                animate={{ opacity: 1 }}
                                                                                transition={{ delay: 0.4 }}
                                                                            >
                                                                                The other party initiated a transfer
                                                                            </motion.p>
                                                                        </div>
                                                                    </div>
                                                                    <motion.div
                                                                        className="mt-3 flex justify-between items-center"
                                                                        initial={{ opacity: 0 }}
                                                                        animate={{ opacity: 1 }}
                                                                        transition={{ delay: 0.6 }}
                                                                    >
                                                                        <span className="text-white/70 text-sm">
                                                                            Transfer
                                                                        </span>
                                                                        <span className="text-white/70 text-sm">
                                                                            {message.time}
                                                                        </span>
                                                                    </motion.div>
                                                                </motion.div>
                                                            </motion.div>
                                                        )
                                                    }

                                                    if (message.type === 'redpacket') {
                                                        return (
                                                            <motion.div
                                                                key={message.id}
                                                                initial={{
                                                                    opacity: 0,
                                                                    scale: 0.3,
                                                                    y: 50,
                                                                    rotateY: -90
                                                                }}
                                                                animate={{
                                                                    opacity: 1,
                                                                    scale: 1,
                                                                    y: 0,
                                                                    rotateY: 0
                                                                }}
                                                                transition={{
                                                                    duration: 1.2,
                                                                    type: 'spring',
                                                                    stiffness: 100,
                                                                    damping: 15
                                                                }}
                                                                className="flex flex-col items-end my-4 w-full"
                                                            >
                                                                <motion.div
                                                                    className="relative bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-2xl p-4 shadow-2xl max-w-[250px] w-full border-2 border-red-400 overflow-hidden"
                                                                    whileHover={{ scale: 1.05, rotateY: 5 }}
                                                                    animate={{
                                                                        boxShadow: [
                                                                            '0 8px 25px rgba(239, 68, 68, 0.4)',
                                                                            '0 15px 40px rgba(239, 68, 68, 0.8)',
                                                                            '0 8px 25px rgba(239, 68, 68, 0.4)'
                                                                        ]
                                                                    }}
                                                                    transition={{
                                                                        boxShadow: {
                                                                            duration: 2,
                                                                            repeat: Infinity,
                                                                            ease: 'easeInOut'
                                                                        }
                                                                    }}
                                                                >
                                                                    {/* 红包闪光效果 */}
                                                                    <motion.div
                                                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/30 to-transparent"
                                                                        initial={{ x: '-100%' }}
                                                                        animate={{ x: '100%' }}
                                                                        transition={{
                                                                            duration: 2,
                                                                            repeat: Infinity,
                                                                            repeatDelay: 3,
                                                                            ease: 'easeInOut'
                                                                        }}
                                                                    />

                                                                    {/* 红包装饰粒子 */}
                                                                    <div className="absolute inset-0 pointer-events-none">
                                                                        {[...Array(8)].map((_, i) => (
                                                                            <motion.div
                                                                                key={i}
                                                                                className="absolute w-1 h-1 bg-yellow-300 rounded-full"
                                                                                style={{
                                                                                    left: `${15 + i * 10}%`,
                                                                                    top: `${20 + (i % 3) * 20}%`
                                                                                }}
                                                                                animate={{
                                                                                    y: [-3, -8, -3],
                                                                                    opacity: [0.3, 1, 0.3],
                                                                                    scale: [0.5, 1.2, 0.5]
                                                                                }}
                                                                                transition={{
                                                                                    duration: 1.5 + i * 0.2,
                                                                                    repeat: Infinity,
                                                                                    ease: 'easeInOut',
                                                                                    delay: i * 0.3
                                                                                }}
                                                                            />
                                                                        ))}
                                                                    </div>
                                                                    {/* 红包头部 */}
                                                                    <motion.div
                                                                        className="relative z-10 text-center mb-2"
                                                                        initial={{ opacity: 0, y: 20 }}
                                                                        animate={{ opacity: 1, y: 0 }}
                                                                        transition={{ delay: 0.3, duration: 0.6 }}
                                                                    >
                                                                        <motion.div
                                                                            className="inline-flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-full mb-2 shadow-lg"
                                                                            animate={{
                                                                                rotate: [0, -10, 10, -10, 0],
                                                                                scale: [1, 1.1, 1]
                                                                            }}
                                                                            transition={{
                                                                                duration: 2,
                                                                                repeat: Infinity,
                                                                                ease: 'easeInOut'
                                                                            }}
                                                                        >
                                                                            <span className="text-2xl">🧧</span>
                                                                        </motion.div>
                                                                        <motion.h3
                                                                            className="text-white font-bold text-base"
                                                                            initial={{ opacity: 0 }}
                                                                            animate={{ opacity: 1 }}
                                                                            transition={{ delay: 0.5 }}
                                                                        >
                                                                            {message.content}
                                                                        </motion.h3>
                                                                    </motion.div>

                                                                    {/* 红包金额 */}
                                                                    <motion.div
                                                                        className="relative z-10 text-center mb-2"
                                                                        initial={{ opacity: 0, scale: 0.5 }}
                                                                        animate={{ opacity: 1, scale: 1 }}
                                                                        transition={{
                                                                            delay: 0.7,
                                                                            duration: 0.5,
                                                                            type: 'spring'
                                                                        }}
                                                                    >
                                                                        <motion.p
                                                                            className="text-yellow-200 text-xl font-bold"
                                                                            animate={{
                                                                                textShadow: [
                                                                                    '0 0 10px rgba(254, 240, 138, 0.5)',
                                                                                    '0 0 20px rgba(254, 240, 138, 1)',
                                                                                    '0 0 10px rgba(254, 240, 138, 0.5)'
                                                                                ]
                                                                            }}
                                                                            transition={{
                                                                                duration: 2,
                                                                                repeat: Infinity,
                                                                                ease: 'easeInOut'
                                                                            }}
                                                                        >
                                                                            {message.amount}
                                                                        </motion.p>
                                                                    </motion.div>

                                                                    {/* 红包消息 */}
                                                                    <motion.div
                                                                        className="relative z-10 text-center mb-2"
                                                                        initial={{ opacity: 0 }}
                                                                        animate={{ opacity: 1 }}
                                                                        transition={{ delay: 0.9 }}
                                                                    >
                                                                        <p className="text-red-100 text-xs leading-relaxed">
                                                                            {message.message}
                                                                        </p>
                                                                    </motion.div>

                                                                    {/* 红包底部 */}
                                                                    <motion.div
                                                                        className="relative z-10 text-center"
                                                                        initial={{ opacity: 0, y: 10 }}
                                                                        animate={{ opacity: 1, y: 0 }}
                                                                        transition={{ delay: 1.1 }}
                                                                    >
                                                                        <motion.div
                                                                            className="bg-red-800/30 rounded-lg px-2 py-1"
                                                                            animate={{
                                                                                backgroundColor: [
                                                                                    'rgba(153, 27, 27, 0.3)',
                                                                                    'rgba(153, 27, 27, 0.5)',
                                                                                    'rgba(153, 27, 27, 0.3)'
                                                                                ]
                                                                            }}
                                                                            transition={{
                                                                                duration: 2,
                                                                                repeat: Infinity,
                                                                                ease: 'easeInOut'
                                                                            }}
                                                                        >
                                                                            <p className="text-red-200 text-xs font-medium">
                                                                                🎉 Tap to open
                                                                            </p>
                                                                        </motion.div>
                                                                    </motion.div>
                                                                </motion.div>

                                                                {/* 时间戳 */}
                                                                <motion.div
                                                                    className="flex items-center mt-1 mr-2"
                                                                    initial={{ opacity: 0 }}
                                                                    animate={{ opacity: 1 }}
                                                                    transition={{ delay: 1.2 }}
                                                                >
                                                                    <span className="text-xs text-gray-500">
                                                                        {message.time}
                                                                    </span>
                                                                    <motion.svg
                                                                        className="w-4 h-4 text-blue-500 ml-1"
                                                                        fill="currentColor"
                                                                        viewBox="0 0 20 20"
                                                                        initial={{ scale: 0 }}
                                                                        animate={{ scale: 1 }}
                                                                        transition={{ delay: 1.4, type: 'spring' }}
                                                                    >
                                                                        <path
                                                                            fillRule="evenodd"
                                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                            clipRule="evenodd"
                                                                        />
                                                                    </motion.svg>
                                                                </motion.div>
                                                            </motion.div>
                                                        )
                                                    }

                                                    return null
                                                })}
                                            </AnimatePresence>
                                        </div>
                                    </div>

                                    {/* 输入框区域 */}
                                    <div className="bg-white border-t border-gray-200 p-3">
                                        <div className="flex items-center space-x-3">
                                            <button className="w-8 h-8 flex items-center justify-center">
                                                <svg
                                                    className="w-6 h-6 text-gray-500"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                    />
                                                </svg>
                                            </button>
                                            <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                                                <span className="text-gray-500 text-sm">Send Message</span>
                                            </div>
                                            <button className="w-8 h-8 flex items-center justify-center">
                                                <svg
                                                    className="w-6 h-6 text-gray-500"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="w-8 h-8 flex items-center justify-center">
                                                <svg
                                                    className="w-6 h-6 text-gray-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    {/* 底部指示器 */}
                                    <div className="h-1 bg-white flex justify-center items-center">
                                        <div className="w-32 h-1 bg-black rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 右侧功能介绍 */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-10 chat-features"
                    >
                        {/* 功能点1：端到端加密 */}
                        <div className="flex items-start space-x-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                <span className="text-white text-2xl">🔒</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">
                                    End-to-End Encryption
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Military-grade encryption ensures your conversations remain completely private and
                                    secure.
                                </p>
                            </div>
                        </div>

                        {/* 功能点2：加密货币集成 */}
                        <div className="flex items-start space-x-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                <span className="text-white text-2xl">₿</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">Crypto Native</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Built for the crypto community with seamless integration and instant transfers.
                                </p>
                            </div>
                        </div>

                        {/* 功能点3：即时转账 */}
                        <div className="flex items-start space-x-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                <span className="text-white text-2xl">⚡</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">
                                    Instant Transfers
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Send crypto instantly within conversations. No fees, no delays, just seamless
                                    transfers.
                                </p>
                            </div>
                        </div>
                    </motion.div>
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

'use client'
import { motion } from 'framer-motion'

export default function ChatFeatureSection() {
    return (
        <section
            id="chat"
            className="relative min-h-screen w-full flex items-center justify-center py-20"
            style={{ background: '#f8fafc' }}
        >
            <div className="w-full max-w-6xl mx-auto px-6">
                {/* 标题区域 */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">MP Chat</h2>
                    <p className="text-xl text-gray-600 mb-4">Peer-to-peer encrypted instant messaging</p>
                    <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        MP Chat is a peer-to-peer encrypted instant messaging service, ensuring your conversations
                        remain private and secure.
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
                            <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                                {/* 手机屏幕 */}
                                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                                    {/* 状态栏 */}
                                    <div className="h-12 bg-gray-50 flex items-center justify-between px-6 text-sm text-gray-600">
                                        <span>9:41</span>
                                        <span>●●●</span>
                                    </div>

                                    {/* 聊天界面 */}
                                    <div className="flex-1 bg-gray-50 p-4 space-y-4">
                                        {/* 聊天标题 */}
                                        <div className="text-center py-2">
                                            <h3 className="font-semibold text-gray-800">Crypto Group</h3>
                                        </div>

                                        {/* 聊天消息 */}
                                        <div className="space-y-3">
                                            {/* 接收消息 */}
                                            <div className="flex items-start space-x-2">
                                                <div className="w-8 h-8 bg-blue-500 rounded-full flex-shrink-0"></div>
                                                <div className="bg-white rounded-2xl rounded-tl-md px-4 py-2 max-w-[200px] shadow-sm">
                                                    <p className="text-sm text-gray-800">
                                                        Hey! Did you see BTC hit $50k?
                                                    </p>
                                                </div>
                                            </div>

                                            {/* 发送消息 */}
                                            <div className="flex justify-end">
                                                <div className="bg-blue-500 text-white rounded-2xl rounded-tr-md px-4 py-2 max-w-[200px]">
                                                    <p className="text-sm">Yes! Amazing news 🚀</p>
                                                </div>
                                            </div>

                                            {/* 红包消息 */}
                                            <div className="flex items-start space-x-2">
                                                <div className="w-8 h-8 bg-green-500 rounded-full flex-shrink-0"></div>
                                                <div className="bg-red-500 text-white rounded-2xl px-4 py-3 shadow-sm">
                                                    <div className="flex items-center space-x-2">
                                                        <span className="text-yellow-300">🧧</span>
                                                        <div>
                                                            <p className="text-sm font-medium">USDT Red Packet</p>
                                                            <p className="text-xs opacity-90">Tap to open</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* 加密提示 */}
                                            <div className="text-center py-2">
                                                <div className="inline-flex items-center space-x-1 text-xs text-gray-500">
                                                    <span>🔒</span>
                                                    <span>End-to-end encrypted</span>
                                                </div>
                                            </div>
                                        </div>
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
                        className="flex-1 space-y-6 md:space-y-8 chat-features"
                    >
                        {/* 功能点1：端到端加密 */}
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-xl">🔒</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">End-to-End Encryption</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    All messages are fully encrypted. Only you and your contacts can read your
                                    conversations.
                                </p>
                            </div>
                        </div>

                        {/* 功能点2：加密货币集成 */}
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-xl">₿</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Crypto Integration</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Share crypto news, market insights, and discuss the latest trends with your
                                    community.
                                </p>
                            </div>
                        </div>

                        {/* 功能点3：USDT红包 */}
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-xl">🧧</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">USDT Red Packets</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Send and receive USDT red packets directly in chat. Fast, secure, and fun way to
                                    share crypto.
                                </p>
                            </div>
                        </div>

                        {/* 功能点4：即时转账 */}
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-xl">⚡</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Transfers</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Send crypto transfers instantly within your conversations. Simple, secure, and
                                    seamless.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

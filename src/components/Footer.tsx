'use client'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white pt-12 pb-6 px-4 border-t border-neutral-800">
            <div className="mx-auto" style={{ maxWidth: 1700, width: '100%' }}>
                {/* Get the App & Main Links */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 border-b border-neutral-700 pb-8">
                    {/* Get the App with QR Code */}
                    <div className="mb-6 md:mb-0 min-w-[200px] flex flex-col items-center md:items-start">
                        <div className="font-bold text-xl mb-4">Get the App</div>
                        <div className="bg-white p-3 rounded-lg">
                            <Image
                                src="/qrcode.png"
                                alt="Download App QR Code"
                                className="w-[120px] h-[120px]"
                                width={120}
                                height={120}
                            />
                        </div>
                        <p className="text-xs text-neutral-400 mt-2 text-center md:text-left">Scan to download</p>
                    </div>
                    {/* Links */}
                    <div className="flex justify-between w-full">
                        <div>
                            <div className="font-semibold mb-3">Product</div>
                            <ul className="space-y-2 text-sm text-neutral-300">
                                <li>
                                    <a href="#chat" className="hover:text-white transition-colors">
                                        Chat
                                    </a>
                                </li>
                                <li>
                                    <a href="#wallet" className="hover:text-white transition-colors">
                                        Wallet
                                    </a>
                                </li>
                                <li>
                                    <a href="#card" className="hover:text-white transition-colors">
                                        MP Card
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Download App
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Security Center
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="font-semibold mb-3">Developers</div>
                            <ul className="space-y-2 text-sm text-neutral-300">
                                <li>
                                    <a href="#dev" className="hover:text-white transition-colors">
                                        Developer Platform
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        API Documentation
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        SDK Downloads
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        MiniApp Framework
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Developer Community
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Code Examples
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="font-semibold mb-3">Company</div>
                            <ul className="space-y-2 text-sm text-neutral-300">
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Join Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="font-semibold mb-3">Resources & Support</div>
                            <ul className="space-y-2 text-sm text-neutral-300">
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Guides
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Developer Support
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="font-semibold mb-3">Legal</div>
                            <ul className="space-y-2 text-sm text-neutral-300">
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Cookie Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        AML/KYC Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Bottom Row: Logo & Social Media */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-6 gap-4 border-b border-neutral-700 pb-4">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        {/* Logo */}
                        <div className="w-8 h-8 relative">
                            <Image src="/logo.svg" alt="MP Logo" layout="fill" />
                        </div>
                        <span className="font-bold text-lg text-white">MPChat</span>
                    </div>

                    {/* Social Media & Language */}
                    <div className="flex flex-row flex-wrap gap-6 items-center text-neutral-400 text-sm">
                        {/* Language Switcher */}
                        <a href="#" className="hover:text-white transition-colors">
                            🌐 Language
                        </a>
                        {/* Social Media Icons */}
                        <a href="#" className="hover:text-white transition-colors">
                            Twitter
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Telegram
                        </a>
                    </div>
                </div>
                {/* Copyright */}
                <div className="text-xs text-neutral-500 text-center mt-4">Copyright © 2025 MP All Rights Reserved</div>
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
        </footer>
    )
}

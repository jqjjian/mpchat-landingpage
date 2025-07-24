'use client'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white pt-16 pb-8 px-6 border-t border-neutral-800">
            <div className="mx-auto" style={{ maxWidth: 1700, width: '100%' }}>
                {/* Get the App & Main Links */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-10 border-b border-neutral-700 pb-8">
                    {/* Get the App with QR Code */}
                    <div className="mb-6 lg:mb-0 min-w-[200px] flex flex-col items-center lg:items-start">
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
                        <p className="text-xs text-neutral-400 mt-2 text-center lg:text-left">Scan to download</p>
                    </div>
                    {/* Links */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between w-full gap-6 lg:gap-4">
                        {/* <div className="min-w-0">
                            <div className="font-semibold mb-3 text-white">Product</div>
                            <ul className="space-y-2 text-sm text-neutral-300">
                                <li>
                                    <a href="#chat" className="hover:text-white transition-colors block">
                                        Chat
                                    </a>
                                </li>
                                <li>
                                    <a href="#wallet" className="hover:text-white transition-colors block">
                                        Wallet
                                    </a>
                                </li>
                                <li>
                                    <a href="#card" className="hover:text-white transition-colors block">
                                        MP Card
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors block">
                                        Download App
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors block">
                                        Security Center
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="min-w-0">
                            <div className="font-semibold mb-3 text-white">Developers</div>
                            <ul className="space-y-2 text-sm text-neutral-300">
                                <li>
                                    <a href="#dev" className="hover:text-white transition-colors block">
                                        Developer Platform
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors block">
                                        API Documentation
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors block">
                                        SDK Downloads
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors block">
                                        MiniApp Framework
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors block">
                                        Developer Community
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors block">
                                        Code Examples
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="min-w-0">
                            <div className="font-semibold mb-3 text-white">Company</div>
                            <ul className="space-y-2 text-sm text-neutral-300">
                                <li>
                                    <a href="#" className="hover:text-white transition-colors block">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors block">
                                        Join Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors block">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors block">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="min-w-0 md:col-span-2 lg:col-span-1">
                            <div className="font-semibold mb-3 text-white">Resources & Support</div>
                            <ul className="space-y-2 text-sm text-neutral-300">
                                <li>
                                    <a href="#" className="hover:text-white transition-colors block">
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors block">
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors block">
                                        Guides
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors block">
                                        Developer Support
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                        <div className="min-w-0 md:col-span-1 lg:col-span-1">
                            <div className="font-semibold mb-3 text-white">Legal</div>
                            <ul className="space-y-2 text-sm text-neutral-300">
                                <li>
                                    <a href="/terms" className="hover:text-white transition-colors block">
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a href="/privacy" className="hover:text-white transition-colors block">
                                        Privacy Policy
                                    </a>
                                </li>
                                {/* <li>
                                    <a href="#" className="hover:text-white transition-colors block">
                                        Cookie Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors block">
                                        AML/KYC Policy
                                    </a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Bottom Row: Logo & Social Media */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-8 gap-4 border-b border-neutral-700 pb-6">
                    {/* Logo */}
                    <div className="flex items-center justify-center sm:justify-start gap-3">
                        {/* Logo */}
                        <div className="w-8 h-8 relative">
                            <Image src="/logo.svg" alt="MP Logo" layout="fill" />
                        </div>
                        <span className="font-bold text-lg text-white">MPChat</span>
                    </div>

                    {/* Social Media & Language */}
                    {/* <div className="flex flex-row flex-wrap gap-4 sm:gap-6 items-center justify-center sm:justify-end text-neutral-400 text-sm">
                        <a href="#" className="hover:text-white transition-colors">
                            🌐 Language
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Twitter
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Telegram
                        </a>
                    </div> */}
                </div>
                {/* Copyright */}
                <div className="text-xs text-neutral-500 text-center mt-6">Copyright © 2025 MP All Rights Reserved</div>
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

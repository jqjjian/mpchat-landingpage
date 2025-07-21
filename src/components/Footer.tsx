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
                            {/* <Image
                                src=""
                                alt="Download App QR Code"
                                className="w-[120px] h-[120px]"
                                width={120}
                                height={120}
                            /> */}
                        </div>
                        <p className="text-xs text-neutral-400 mt-2 text-center md:text-left">Scan to download</p>
                    </div>
                    {/* Links */}
                    <div className="flex justify-between w-full">
                        <div>
                            <div className="font-semibold mb-3">Product</div>
                            <ul className="space-y-2 text-sm text-neutral-300">
                                <li>
                                    <a href="#">Chat</a>
                                </li>
                                <li>
                                    <a href="#">Wallet</a>
                                </li>
                                <li>
                                    <a href="#">MP Card</a>
                                </li>
                                <li>
                                    <a href="#">Download App</a>
                                </li>
                                <li>
                                    <a href="#">Security Center</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="font-semibold mb-3">Developers</div>
                            <ul className="space-y-2 text-sm text-neutral-300">
                                <li>
                                    <a href="#">Developer Platform</a>
                                </li>
                                <li>
                                    <a href="#">API Docs</a>
                                </li>
                                <li>
                                    <a href="#">MiniApp Dev</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="font-semibold mb-3">Company</div>
                            <ul className="space-y-2 text-sm text-neutral-300">
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#">Join Us</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="font-semibold mb-3">Resources & Support</div>
                            <ul className="space-y-2 text-sm text-neutral-300">
                                <li>
                                    <a href="#">Help Center</a>
                                </li>
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                                <li>
                                    <a href="#">Guides</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="font-semibold mb-3">Legal</div>
                            <ul className="space-y-2 text-sm text-neutral-300">
                                <li>
                                    <a href="#">Terms of Service</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Cookie Policy</a>
                                </li>
                                <li>
                                    <a href="#">AML/KYC Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Bottom Row: Logo & Social Media */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-6 gap-4 border-b border-neutral-700 pb-4">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <Image src="/logo.6c0933db.png" alt="MP Logo" width={32} height={32} className="h-8 w-auto" />
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

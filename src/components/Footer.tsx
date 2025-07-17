"use client";

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white pt-12 pb-6 px-4 border-t border-neutral-800">
            <div className="max-w-7xl mx-auto">
                {/* Logo & Main Links */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 border-b border-neutral-700 pb-8">
                    {/* Logo */}
                    <div className="mb-6 md:mb-0 min-w-[120px]">
                        <div className="font-bold text-xl mb-2">MP Logo (Optional)</div>
                    </div>
                    {/* Links */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 w-full">
                        <div>
                            <div className="font-semibold mb-3">Product</div>
                            <ul className="space-y-2 text-sm text-neutral-300">
                                <li><a href="#">Chat</a></li>
                                <li><a href="#">Wallet</a></li>
                                <li><a href="#">MP Card</a></li>
                                <li><a href="#">Download App</a></li>
                                <li><a href="#">Security Center</a></li>
                            </ul>
                        </div>
                        <div>
                            <div className="font-semibold mb-3">Developers</div>
                            <ul className="space-y-2 text-sm text-neutral-300">
                                <li><a href="#">Developer Platform</a></li>
                                <li><a href="#">API Docs</a></li>
                                <li><a href="#">MiniApp Dev</a></li>
                            </ul>
                        </div>
                        <div>
                            <div className="font-semibold mb-3">Company</div>
                            <ul className="space-y-2 text-sm text-neutral-300">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Join Us</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <div className="font-semibold mb-3">Resources & Support</div>
                            <ul className="space-y-2 text-sm text-neutral-300">
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Guides</a></li>
                            </ul>
                        </div>
                        <div>
                            <div className="font-semibold mb-3">Legal</div>
                            <ul className="space-y-2 text-sm text-neutral-300">
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Cookie Policy</a></li>
                                <li><a href="#">AML/KYC Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Bottom Row: Social, Language, Store */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-6 gap-4 border-b border-neutral-700 pb-4">
                    <div className="flex flex-row flex-wrap gap-6 items-center text-neutral-400 text-sm">
                        {/* Language Switcher Icon */}
                        <a href="#" className="hover:text-white">🌐 Language</a>
                        {/* Social Media Icons */}
                        <a href="#" className="hover:text-white">Twitter</a>
                        <a href="#" className="hover:text-white">Telegram</a>
                        {/* App Store/Google Play Icons */}
                        <a href="#" className="hover:text-white">App Store</a>
                        <a href="#" className="hover:text-white">Google Play</a>
                    </div>
                </div>
                {/* Copyright */}
                <div className="text-xs text-neutral-500 text-center mt-4">
                    Copyright © 2025 MP All Rights Reserved
                </div>
            </div>
        </footer>
    );
} 
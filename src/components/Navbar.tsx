"use client";
import { useState, useRef, useEffect } from "react";

const navs = [
    { id: "chat", label: "Chat" },
    { id: "wallet", label: "Wallet" },
    { id: "card", label: "MP Card" },
    // { id: "crypto", label: "Transfer" },
    { id: "dev", label: "Developers" },
    // { id: "dev", label: "Developers" },
];

const QR_CODE_URL = "https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://mpchat.app/download"; // 占位二维码

function getSectionTop(id: string) {
    const el = document.getElementById(id);
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    return rect.top + window.scrollY;
}

export default function Navbar() {
    const [active, setActive] = useState("");
    const [showQR, setShowQR] = useState(false);
    const [lang, setLang] = useState("en");
    const [showLangList, setShowLangList] = useState(false);
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
    const [navHover, setNavHover] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navRefs = useRef<(HTMLButtonElement | null)[]>([]);

    // 滚动监听，自动高亮当前模块
    useEffect(() => {
        function onScroll() {
            let minDelta = Infinity;
            let current = "";
            for (let i = 0; i < navs.length; i++) {
                const el = document.getElementById(navs[i].id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    const delta = Math.abs(rect.top - 80);
                    if (rect.top - 80 <= 0 && delta < minDelta) {
                        minDelta = delta;
                        current = navs[i].id;
                    }
                }
            }
            // 确保hero区块id为hero
            const hero = document.getElementById('hero');
            if (hero) {
                const heroRect = hero.getBoundingClientRect();
                if (heroRect.bottom - 80 > 0) {
                    current = "";
                }
            }
            setActive(current);
            setScrolled(window.scrollY > 40);
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // 下划线滑动
    useEffect(() => {
        const idx = navs.findIndex(n => n.id === active);
        const btn = navRefs.current[idx];
        if (btn) {
            const rect = btn.getBoundingClientRect();
            const parentRect = btn.parentElement?.parentElement?.getBoundingClientRect();
            if (parentRect) {
                setUnderlineStyle({
                    left: rect.left - parentRect.left,
                    width: rect.width
                });
            }
        }
    }, [active]);

    const handleClick = (id: string) => {
        setActive(id);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <nav className="fixed top-0 left-0 w-full z-50 font-sans">
            <div
                className={`w-full transition-colors duration-300 ${navHover || scrolled ? "bg-black/30" : "bg-transparent"}`}
                onMouseEnter={() => setNavHover(true)}
                onMouseLeave={() => setNavHover(false)}
            >
                <div
                    className="flex items-center justify-between px-6 h-16 relative mx-auto"
                    style={{
                        maxWidth: 1700,
                        width: '100%',
                        justifyContent: 'space-between',
                        minWidth: 0,
                    }}
                >
                    <div className="flex items-center space-x-3 cursor-pointer" onClick={() => {
                        const el = document.getElementById("__next");
                        if (el) {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                    }}>
                        <img src="/logo.6c0933db.png" alt="logo" className="h-9 w-auto" />
                        <span className="font-bold text-xl text-white tracking-wide">MPChat</span>
                    </div>
                    <div className="relative flex-1 flex justify-center">
                        <ul className="flex space-x-8 font-medium relative">
                            {/* 下划线动画 */}
                            <li
                                className="absolute left-0 top-full h-0.5 transition-all duration-200"
                                style={{
                                    left: underlineStyle.left,
                                    width: active ? underlineStyle.width : 0,
                                    background: '#fff',
                                    borderRadius: 2,
                                    pointerEvents: 'none',
                                    opacity: active ? 1 : 0,
                                }}
                            />
                            {navs.map((nav, idx) => (
                                <li key={nav.id} className="relative">
                                    <button
                                        ref={el => { navRefs.current[idx] = el; }}
                                        className={`text-white px-3 py-1 rounded-md transition-colors duration-200 flex items-center gap-2
                                            ${active === nav.id ? "font-bold" : "font-normal"}
                                            hover:font-bold hover:bg-black/20 cursor-pointer
                                        `}
                                        onClick={() => handleClick(nav.id)}
                                    >
                                        {nav.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center space-x-4">
                        {/* 多语言切换 */}
                        <div className="relative">
                            <button
                                className="px-3 py-1 rounded text-sm font-semibold text-white bg-transparent border-none outline-none flex items-center gap-1"
                                onMouseEnter={() => setShowLangList(true)}
                                onMouseLeave={() => setShowLangList(false)}
                                onClick={() => setShowLangList(v => !v)}
                            >
                                EN
                                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                            </button>
                            {showLangList && (
                                <div
                                    className="absolute right-0 mt-2 w-20 bg-white rounded shadow-lg z-50 text-gray-700 text-sm"
                                    onMouseEnter={() => setShowLangList(true)}
                                    onMouseLeave={() => setShowLangList(false)}
                                >
                                    <div className="px-4 py-2 cursor-pointer hover:bg-gray-100">English</div>
                                </div>
                            )}
                        </div>
                        {/* 下载APP按钮及二维码 */}
                        <div className="relative">
                            <button
                                className="px-4 py-2 rounded-full border border-white text-white font-bold transition text-base bg-transparent hover:bg-white hover:text-blue-600 shadow-none"
                                onMouseEnter={() => setShowQR(true)}
                                onMouseLeave={() => setShowQR(false)}
                                onClick={() => setShowQR((v) => !v)}
                            >
                                Download App
                            </button>
                            {showQR && (
                                <div
                                    className="absolute right-0 mt-2 w-44 p-3 bg-white border border-gray-200 rounded-xl shadow-xl flex flex-col items-center animate-fade-in z-50"
                                    onMouseEnter={() => setShowQR(true)}
                                    onMouseLeave={() => setShowQR(false)}
                                >
                                    <img src={QR_CODE_URL} alt="Download App QR" className="w-32 h-32 mb-2" />
                                    <div className="text-xs text-gray-500">Scan to download</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
} 
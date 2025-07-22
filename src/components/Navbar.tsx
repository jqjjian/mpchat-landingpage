'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const navs = [
    { id: 'chat', label: 'Chat' },
    { id: 'wallet', label: 'Wallet' },
    { id: 'card', label: 'MP Card' },
    // { id: "crypto", label: "Transfer" },
    { id: 'dev', label: 'Developers' }
    // { id: "dev", label: "Developers" },
]

const QR_CODE_URL = '/qrcode.png' //'https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://mpchat.app/download' // 占位二维码

// function getSectionTop(id: string) {
//     const el = document.getElementById(id)
//     if (!el) return 0
//     const rect = el.getBoundingClientRect()
//     return rect.top + window.scrollY
// }

export default function Navbar() {
    const [active, setActive] = useState('')
    const [showQR, setShowQR] = useState(false)
    // const [lang, setLang] = useState('en')
    const [showLangList, setShowLangList] = useState(false)
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })
    const [navHover, setNavHover] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const navRefs = useRef<(HTMLElement | null)[]>([])

    // 滚动监听，自动高亮当前模块
    useEffect(() => {
        function onScroll() {
            let minDelta = Infinity
            let current = ''
            for (let i = 0; i < navs.length; i++) {
                const el = document.getElementById(navs[i].id)
                if (el) {
                    const rect = el.getBoundingClientRect()
                    const delta = Math.abs(rect.top - 64)
                    if (rect.top - 64 <= 0 && delta < minDelta) {
                        minDelta = delta
                        current = navs[i].id
                    }
                }
            }
            // 确保hero区块id为hero
            const hero = document.getElementById('hero')
            if (hero) {
                const heroRect = hero.getBoundingClientRect()
                if (heroRect.bottom - 64 > 0) {
                    current = ''
                }
            }
            setActive(current)
            setScrolled(window.scrollY > 40)
            // 滚动时关闭移动菜单
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false)
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [isMobileMenuOpen])

    // 点击外部区域关闭移动菜单
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (isMobileMenuOpen && event.target instanceof Element) {
                const nav = document.querySelector('nav')
                if (nav && !nav.contains(event.target)) {
                    setIsMobileMenuOpen(false)
                }
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [isMobileMenuOpen])

    // 防止移动菜单打开时页面滚动
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add('mobile-menu-open')
        } else {
            document.body.classList.remove('mobile-menu-open')
        }
        return () => {
            document.body.classList.remove('mobile-menu-open')
        }
    }, [isMobileMenuOpen])

    // 下划线滑动
    useEffect(() => {
        const idx = navs.findIndex(n => n.id === active)
        const btn = navRefs.current[idx]
        if (btn) {
            const rect = btn.getBoundingClientRect()
            const parentRect = btn.parentElement?.parentElement?.getBoundingClientRect()
            if (parentRect) {
                setUnderlineStyle({
                    left: rect.left - parentRect.left,
                    width: rect.width
                })
            }
        }
    }, [active])

    const handleClick = (id: string) => {
        setActive(id)
        setIsMobileMenuOpen(false) // 关闭移动菜单
        const el = document.getElementById(id)
        if (el) {
            // 计算滚动位置，确保板块完整显示
            const rect = el.getBoundingClientRect()
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop
            // 使用导航栏高度64px作为偏移量，确保板块顶部完全可见
            const targetPosition = rect.top + scrollTop - 64

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            })
        }
    }

    // 汉堡菜单图标组件
    const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
        <div className="w-6 h-6 flex flex-col justify-center items-center relative">
            <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
                    isOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
            />
            <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out mt-1 ${
                    isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}
            />
            <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out mt-1 ${
                    isOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
            />
        </div>
    )
    return (
        <nav className="fixed top-0 left-0 w-full z-50" style={{ fontFamily: 'var(--font-redotpay)' }}>
            <div
                className={`w-full transition-colors duration-300 ${
                    navHover || scrolled ? 'bg-black/30' : 'bg-transparent'
                }`}
                onMouseEnter={() => setNavHover(true)}
                onMouseLeave={() => setNavHover(false)}
            >
                <div
                    className="flex items-center justify-between px-6 h-16 relative mx-auto"
                    style={{
                        maxWidth: 1700,
                        width: '100%',
                        justifyContent: 'space-between',
                        minWidth: 0
                    }}
                >
                    <div
                        className="flex items-center space-x-3 cursor-pointer"
                        onClick={() => {
                            const el = document.getElementById('__next')
                            if (el) {
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                            }
                        }}
                    >
                        {/* Logo */}
                        <div className="w-10 h-10 relative">
                            <Image src="/logo.svg" alt="MP logo" layout="fill" />
                        </div>
                        <span
                            className="font-bold text-xl text-white tracking-wide"
                            style={{ fontFamily: 'var(--font-redotpay)', fontWeight: 700 }}
                        >
                            MPChat
                        </span>
                    </div>
                    {/* 桌面端菜单 - 1300px以上显示 */}
                    <div className="relative flex-1 justify-center desktop-menu">
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
                                    opacity: active ? 1 : 0
                                }}
                            />
                            {navs.map((nav, idx) => (
                                <li key={nav.id} className="relative">
                                    <div
                                        ref={el => {
                                            navRefs.current[idx] = el
                                        }}
                                        className={`text-white px-4 py-2 transition-all duration-300 flex items-center gap-2 relative cursor-pointer
                                            ${active === nav.id ? 'font-bold' : 'font-normal hover:font-bold'}
                                            focus:outline-none
                                        `}
                                        onClick={() => handleClick(nav.id)}
                                        onKeyDown={e => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault()
                                                handleClick(nav.id)
                                            }
                                        }}
                                        tabIndex={0}
                                        role="button"
                                        aria-label={`Navigate to ${nav.label} section`}
                                        style={{
                                            fontFamily: 'var(--font-redotpay)',
                                            fontWeight: active === nav.id ? 700 : 400,
                                            border: 'none',
                                            background: 'transparent'
                                        }}
                                    >
                                        {nav.label}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center space-x-4">
                        {/* 桌面端：多语言切换 */}
                        <div className="relative desktop-menu-item">
                            <button
                                className="px-3 py-1 rounded text-sm font-semibold text-white bg-transparent border-none outline-none flex items-center gap-1"
                                onMouseEnter={() => setShowLangList(true)}
                                onMouseLeave={() => setShowLangList(false)}
                                onClick={() => setShowLangList(v => !v)}
                                style={{ fontFamily: 'var(--font-redotpay)', fontWeight: 700 }}
                            >
                                EN
                                <svg
                                    className="w-3 h-3 ml-1"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
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
                        {/* 桌面端：下载APP按钮及二维码 */}
                        <div className="relative desktop-menu-item">
                            <button
                                className="px-4 py-2 rounded-full border border-white text-white font-bold transition text-base bg-transparent hover:bg-white hover:text-blue-600 shadow-none"
                                onMouseEnter={() => setShowQR(true)}
                                onMouseLeave={() => setShowQR(false)}
                                onClick={() => setShowQR(v => !v)}
                                style={{ fontFamily: 'var(--font-redotpay)', fontWeight: 700 }}
                            >
                                Download App
                            </button>
                            {showQR && (
                                <div
                                    className="absolute right-0 mt-2 w-44 p-3 bg-white border border-gray-200 rounded-xl shadow-xl flex flex-col items-center animate-fade-in z-50"
                                    onMouseEnter={() => setShowQR(true)}
                                    onMouseLeave={() => setShowQR(false)}
                                >
                                    <Image
                                        src={QR_CODE_URL}
                                        alt="Download App QR"
                                        className="w-32 h-32 mb-2"
                                        width={128}
                                        height={128}
                                    />
                                    <div className="text-xs text-gray-500">Scan to download</div>
                                </div>
                            )}
                        </div>

                        {/* 移动端：汉堡菜单按钮 */}
                        <button
                            className="mobile-menu-button p-3 text-white transition-all duration-300 focus:outline-none"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            onKeyDown={e => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault()
                                    setIsMobileMenuOpen(!isMobileMenuOpen)
                                }
                            }}
                            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
                            aria-expanded={isMobileMenuOpen}
                            tabIndex={0}
                        >
                            <HamburgerIcon isOpen={isMobileMenuOpen} />
                        </button>
                    </div>
                </div>
            </div>

            {/* 移动端滑出菜单 */}
            <div
                className={`mobile-menu fixed top-16 left-0 w-full bg-black/95 backdrop-blur-md transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                }`}
                style={{ zIndex: 40 }}
            >
                <div className="px-6 py-4 space-y-4">
                    {/* 移动端菜单项 */}
                    {navs.map((nav, index) => (
                        <div
                            key={nav.id}
                            className={`block w-full text-left px-6 py-4 text-white text-lg font-medium transition-all duration-300 cursor-pointer ${
                                active === nav.id ? 'font-bold' : 'font-normal'
                            } ${isMobileMenuOpen ? 'animate-slide-in' : ''}`}
                            style={{
                                animationDelay: `${index * 100}ms`,
                                fontFamily: 'var(--font-redotpay)',
                                fontWeight: active === nav.id ? 700 : 400,
                                border: 'none',
                                background: 'transparent'
                            }}
                            onClick={() => handleClick(nav.id)}
                            onKeyDown={e => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault()
                                    handleClick(nav.id)
                                }
                            }}
                            tabIndex={0}
                            role="button"
                            aria-label={`Navigate to ${nav.label} section`}
                        >
                            <span className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-white/60 rounded-full"></span>
                                {nav.label}
                            </span>
                        </div>
                    ))}

                    {/* 移动端：语言切换 */}
                    <div className="border-t border-white/20 pt-4">
                        <div
                            className="block w-full text-left px-4 py-3 text-white text-lg font-medium rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                            onClick={() => setShowLangList(!showLangList)}
                            role="button"
                            tabIndex={0}
                            style={{ fontFamily: 'var(--font-redotpay)', fontWeight: 700 }}
                        >
                            Language: EN
                        </div>
                    </div>

                    {/* 移动端：下载按钮 */}
                    <div className="pt-2">
                        <div
                            className="w-full px-4 py-3 rounded-full border border-white text-white font-bold transition bg-transparent hover:bg-white hover:text-black cursor-pointer text-center"
                            onClick={() => setShowQR(!showQR)}
                            role="button"
                            tabIndex={0}
                            style={{ fontFamily: 'var(--font-redotpay)', fontWeight: 700 }}
                        >
                            Download App
                        </div>
                        {showQR && (
                            <div className="mt-4 flex flex-col items-center p-4 bg-white rounded-xl">
                                <Image
                                    src={QR_CODE_URL}
                                    alt="Download App QR"
                                    className="w-32 h-32 mb-2"
                                    width={128}
                                    height={128}
                                />
                                <div className="text-xs text-gray-500">Scan to download</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

'use client'
import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ChatFeatureSection from '@/components/ChatFeatureSection'
// import FeatureSection from '@/components/FeatureSection'
import WalletFeatureSection from '@/components/WalletFeatureSection'
import CardFeatureSection from '@/components/CardFeatureSection'
import DeveloperSection from '@/components/DeveloperSection'
import Footer from '@/components/Footer'
export default function Home() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'auto' })
        }
    }, [])
    return (
        <div className="relative min-h-screen bg-gray-50 font-sans">
            <Navbar />
            <HeroSection />
            <ChatFeatureSection />
            <WalletFeatureSection />
            <CardFeatureSection />
            <DeveloperSection />
            <Footer />
        </div>
    )
}

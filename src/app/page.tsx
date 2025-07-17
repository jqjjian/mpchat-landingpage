"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ChatFeatureSection from "@/components/ChatFeatureSection";
import FeatureSection from "@/components/FeatureSection";
import WalletFeatureSection from "@/components/WalletFeatureSection";
export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, []);
  return (
    <div className="relative min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <HeroSection />
      <ChatFeatureSection />
      <WalletFeatureSection />
      <FeatureSection id="card" title="Virtual Card" desc="Safe and convenient virtual card for global payments." color="bg-yellow-200" />
      <FeatureSection id="crypto" title="Crypto Transfer" desc="Peer-to-peer crypto transfers, fast and reliable." color="bg-purple-200" />
    </div>
  );
}

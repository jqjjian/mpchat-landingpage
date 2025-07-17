"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ChatFeatureSection from "@/components/ChatFeatureSection";
import FeatureSection from "@/components/FeatureSection";
import WalletFeatureSection from "@/components/WalletFeatureSection";
import CardFeatureSection from "@/components/CardFeatureSection";
import Footer from "@/components/Footer";
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
      <CardFeatureSection />
      <FeatureSection id="dev" title="MP Developer" desc="Peer-to-peer crypto transfers, fast and reliable." color="bg-purple-200" />
      <Footer />
    </div>
  );
}

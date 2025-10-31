import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { ProcessSection } from "../components/ProcessSection";
import { RecentWorkSection } from "../components/RecentWorkSection";
import { PricingSection } from "../components/PricingSection";
import { FAQSection } from "../components/FAQSection";
import { FinalCTA } from "../components/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <RecentWorkSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}

import { Hero } from "@/components/sections/Hero";
import { ArchitectureSection } from "@/components/sections/Architecture";
import { ScenariosSection } from "@/components/sections/Scenarios";
import { IndustriesSection } from "@/components/sections/Industries";
import { BenefitsSection } from "@/components/sections/Benefits";
import { HowItWorksSection } from "@/components/sections/HowItWorks";
import { InterfaceSection } from "@/components/sections/Interface";
import { PricingSection } from "@/components/sections/Pricing";
import { FinalCtaSection } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Hero />
      <ArchitectureSection />
      <ScenariosSection />
      <IndustriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <InterfaceSection />
      <PricingSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
}

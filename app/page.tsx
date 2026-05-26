import { Hero } from "@/components/sections/Hero";
import { DirectionsSection } from "@/components/sections/Directions";
import { CapabilitiesSection } from "@/components/sections/Capabilities";
import { IndustriesSection } from "@/components/sections/Industries";
import { PlatformSection } from "@/components/sections/Platform";
import { BenefitsSection } from "@/components/sections/Benefits";
import { HowItWorksSection } from "@/components/sections/HowItWorks";
import { SocialProofSection } from "@/components/sections/SocialProof";
import { GrowthPathSection } from "@/components/sections/GrowthPath";
import { LaunchFormatsSection } from "@/components/sections/LaunchFormats";
import { FinalCtaSection } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Hero />
      <DirectionsSection />
      <CapabilitiesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <SocialProofSection />
      <GrowthPathSection />
      <LaunchFormatsSection />
      <PlatformSection />
      <IndustriesSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
}

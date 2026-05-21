import { Hero } from "@/components/sections/Hero";
import { DirectionsSection } from "@/components/sections/Directions";
import { CapabilitiesSection } from "@/components/sections/Capabilities";
import { IndustriesSection } from "@/components/sections/Industries";
import { WhatWeBuildSection } from "@/components/sections/WhatWeBuild";
import { BenefitsSection } from "@/components/sections/Benefits";
import { HowItWorksSection } from "@/components/sections/HowItWorks";
import { SocialProofSection } from "@/components/sections/SocialProof";
import { FinalCtaSection } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Hero />
      <DirectionsSection />
      <CapabilitiesSection />
      <IndustriesSection />
      <WhatWeBuildSection />
      <BenefitsSection />
      <HowItWorksSection />
      <SocialProofSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
}

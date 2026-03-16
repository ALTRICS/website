import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/Problem";
import { SolutionSection } from "@/components/sections/Solution";
import { UseCasesSection } from "@/components/sections/UseCases";
import { HowItWorksSection } from "@/components/sections/HowItWorks";
import { BenefitsSection } from "@/components/sections/Benefits";
// import { SocialProofSection } from "@/components/sections/SocialProof";
import { FinalCtaSection } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <UseCasesSection />
      <HowItWorksSection />
      <BenefitsSection />
      {/* <SocialProofSection /> */}
      <FinalCtaSection />
      <Footer />
    </div>
  );
}


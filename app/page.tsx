import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { Services } from "@/components/sections/Services";
import { BigStatement } from "@/components/sections/BigStatement";
import { Industries } from "@/components/sections/Industries";
import { Scenarios } from "@/components/sections/Scenarios";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { AuditForm } from "@/components/sections/AuditForm";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhySmartFlow } from "@/components/sections/WhySmartFlow";
import { Technology } from "@/components/sections/Technology";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <ValueProposition />
      <Services />
      <BigStatement />
      <Industries />
      <Scenarios />
      <BeforeAfter />
      <HowItWorks />
      <AuditForm />
      <CaseStudies />
      <Testimonials />
      <WhySmartFlow />
      <Technology />
      <FAQ />
      <FinalCTA />
      <Contact />
    </>
  );
}

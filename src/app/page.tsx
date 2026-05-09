import { Header } from "@/components/Header";
import { StickyCTA } from "@/components/StickyCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhySection } from "@/components/sections/WhySection";
import { AttendanceSection } from "@/components/sections/AttendanceSection";
import { LeaderSection } from "@/components/sections/LeaderSection";
import { PlansSection } from "@/components/sections/PlansSection";
import { OTSection } from "@/components/sections/OTSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalSection } from "@/components/sections/FinalSection";

export default function Home() {
  return (
    <>
      <Header />

      <main className="scroll-smooth" style={{ scrollSnapType: "y proximity" }}>
        <HeroSection />
        <WhySection />
        <AttendanceSection />
        <LeaderSection />
        <PlansSection />
        <OTSection />
        <FAQSection />
        <FinalSection />
      </main>

      <StickyCTA />
    </>
  );
}

import ContactCTA from "@/components/shared/cta";

import { AboutIntroSection } from "./components/about-intro-section";
import { CommitmentSection } from "./components/commitment-section";
import { HeroSection } from "./components/hero-section";
import MediaCoverage from "./components/media-coverage";
import { OurAimSection } from "./components/our-aim";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutIntroSection />
      <CommitmentSection />
      <OurAimSection />
      <MediaCoverage />
      <ContactCTA />
    </>
  );
}

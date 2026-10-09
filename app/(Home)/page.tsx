import { AboutIntroSection } from "./components/about-intro-section";
import { CommitmentSection } from "./components/commitment-section";
import { HeroSection } from "./components/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutIntroSection />
      <CommitmentSection />
    </>
  );
}

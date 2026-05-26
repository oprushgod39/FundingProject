import HeroSection from "@/components/HeroSection";
import StatsCounter from "@/components/StatsCounter";
import AboutSection from "@/components/AboutSection";
import DivisionsSection from "@/components/DivisionsSection";
import EcosystemSection from "@/components/EcosystemSection";
import GovernmentSection from "@/components/GovernmentSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactCTA from "@/components/ContactCTA";
import CapabilityStatement from "@/components/CapabilityStatement";
import OperationsMapSection from "@/components/OperationsMapSection";
import InstitutionalBenchmarkSection from "@/components/InstitutionalBenchmarkSection";
import CinematicStorySection from "@/components/CinematicStorySection";
import EcosystemDiagramSection from "@/components/EcosystemDiagramSection";
import TrustArchitectureSection from "@/components/TrustArchitectureSection";
import InteractiveCapabilitiesDashboard from "@/components/InteractiveCapabilitiesDashboard";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsCounter />
      <CinematicStorySection />
      <InteractiveCapabilitiesDashboard />
      <CapabilityStatement />
      <AboutSection />
      <DivisionsSection />
      <EcosystemDiagramSection />
      <EcosystemSection />
      <OperationsMapSection />
      <GovernmentSection />
      <InstitutionalBenchmarkSection />
      <WhyUsSection />
      <TrustArchitectureSection />
      <ContactCTA />
    </>
  );
}

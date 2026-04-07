import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CommunityTextSection from "@/components/CommunityTextSection";
import ExperienceSection from "@/components/ExperienceSection";
import FeaturesSection from "@/components/FeaturesSection";
import CommunityGradientSection from "@/components/CommunityGradientSection";
import SafetySection from "@/components/SafetySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DownloadCTA from "@/components/DownloadCTA";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <CommunityTextSection />
    <ExperienceSection />
    <FeaturesSection />
    <CommunityGradientSection />
    <SafetySection />
    <TestimonialsSection />
    <DownloadCTA />
    <FAQSection />
    <Footer />
  </div>
);

export default Index;

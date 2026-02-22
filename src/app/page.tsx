import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { DashboardPreview } from "@/components/DashboardPreview";
import { Integrations } from "@/components/Integrations";
import { Features } from "@/components/Features";
import { Methodology } from "@/components/Methodology";
import { Profiles } from "@/components/Profiles";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { Founder } from "@/components/Founder";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030303] text-white overflow-hidden selection:bg-purple-500/30">
      <Navbar />
      <HeroSection />
      <DashboardPreview />
      <Integrations />
      <Features />
      <Methodology />
      <Profiles />
      <Pricing />
      <Testimonials />
      <Founder />
      <FAQ />
      <Footer />
    </main>
  );
}

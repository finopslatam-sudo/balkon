import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "BALKON | Balcones, Terrazas y Remodelaciones en Chile",
  description:
    "Empresa chilena especializada en construcción de balcones, terrazas y remodelaciones. Más de 10 años de experiencia. Cotización sin costo.",
  keywords: ["balcones", "terrazas", "remodelaciones", "construcción", "Chile", "Santiago"],
  openGraph: {
    title: "BALKON | Construcciones CJ",
    description: "Construimos espacios que inspiran. Balcones, terrazas y remodelaciones en Chile.",
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <PortfolioSection />
        <ProductsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

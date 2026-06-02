import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "BALKON | Construcciones CJ",
  description:
    "Balcones, terrazas y remodelaciones con diseño de excelencia en Chile.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}

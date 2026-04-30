import dynamic from "next/dynamic";
import Header from "@/components/Header";
import HeroScroll from "@/components/HeroScroll";

const FeaturesSection = dynamic(() => import("@/components/FeaturesSection"));
const IngredientsSection = dynamic(() => import("@/components/IngredientsSection"));
const GallerySection = dynamic(() => import("@/components/GallerySection"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#F1CA41] selection:text-[#0f2e1c]">
      <Header />
      <HeroScroll />
      <FeaturesSection />
      <IngredientsSection />
      <GallerySection />
      <Footer />
    </main>
  );
}

import HeroSection from "@/components/sections/HeroSection";
import RivieraCollection from "@/components/sections/RivieraCollection";
import TrustSection from "@/components/sections/TrustSection";
import MediterraneanSection from "@/components/sections/MediterraneanSection";
import ArtistSection from "@/components/sections/ArtistSection";
import TrustBadgesCircle from "@/components/sections/TrustBadgesCircle";
import GallerySection from "@/components/sections/GallerySection";
import CTASection from "@/components/sections/CTASection";

export default function Index() {
  return (
    <div className="bg-white">
      <HeroSection />
      <RivieraCollection />
      <TrustSection />
      <MediterraneanSection />
      <ArtistSection />
      <TrustBadgesCircle />
      <GallerySection />
      <CTASection />
    </div>
  );
}

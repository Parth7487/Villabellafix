import ProductsHeader from "@/components/sections/ProductsHeader";
import ProductsGrid from "@/components/sections/ProductsGrid";
import LifestyleGallery from "@/components/sections/LifestyleGallery";
import ProductsTrust from "@/components/sections/ProductsTrust";

export default function Products() {
  return (
    <div className="bg-white">
      <ProductsHeader />
      <ProductsGrid />
      <LifestyleGallery />
      <ProductsTrust />
    </div>
  );
}

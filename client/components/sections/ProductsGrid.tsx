import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ProductsGrid() {
  const { t } = useLanguage();
  const { formatPrice } = useCurrency();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <SectionHeader
            heading={t("products.collectionHeading")}
            description={t("products.collectionDescription")}
            center
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 mb-20">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group cursor-pointer transition duration-300"
            >
              <ProductCard
                name={product.title}
                description={product.subtitle}
                price={formatPrice(product.basePrice)}
                images={product.images}
                bgGradient="bg-gradient-to-br from-stone-100 to-stone-50"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

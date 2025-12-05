import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import ProductCard from "@/components/ProductCard";
import SectionHeader from "@/components/ui/SectionHeader";

const RIVIERA_PRODUCTS = [
  {
    id: "riviera-tree",
    name: "Peacock Mosaic",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2Feea18823dba549558ea837e33683ed56?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F3d2e70bd145845ebbf0cfe480a5fe954?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2Fa94b10c4e8a54f7b85172b93de4f3bd2?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2Fda7589f9820947c49d38b7ef90428275?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2Fb3a5da4389604f86804763b12edac687?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F8794fb9299944d8fb22f836d8a1d9ff5?format=webp&width=800",
    ],
    bgGradient: "bg-gradient-to-br from-stone-100 to-stone-50",
  },
  {
    id: "riviera-woman",
    name: "Garden Arch",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F0fbe66729078445480d3ce6031e21397?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F7a1ad6da2a4747fc819df1b04990de15?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2Fab4340141e5c49d990a90e70c1ed9bd5?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F8e758c8ec0c9458791f752486df8abfb?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F639ae31eb17848c4a7c71830744f2827?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F45a82758b1ea476bb2620b2abe37d659?format=webp&width=800",
    ],
    bgGradient: "bg-gradient-to-br from-sage-50 to-stone-50",
  },
  {
    id: "riviera-peacock",
    name: "Olive Grove",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F1b4a24ec65264a83b27f8c6ab1bec8de?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F9fa6e7b091cc402d956c3f3c07b9a671?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2Fd9173963b0be4571af804cf2f2e6bc53?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F27f4bf48bde94c77b17002f113b031b2?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F9de34c18c954484293b6d6858cc0df6b?format=webp&width=800",
    ],
    bgGradient: "bg-gradient-to-br from-olive-50 to-stone-50",
  },
];

export default function RivieraCollection() {
  const { t } = useLanguage();
  const { formatPrice } = useCurrency();

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label={t("riviera.label")}
          heading={t("riviera.heading")}
          description={t("riviera.description")}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 mt-16">
          {RIVIERA_PRODUCTS.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group cursor-pointer"
            >
              <ProductCard
                name={product.name}
                description={t("product.cushionSize")}
                price={formatPrice(parseInt(t("product.price")))}
                images={product.images}
                bgGradient={product.bgGradient}
              />
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-r from-stone-100 to-stone-50 rounded-lg p-12 text-center border border-stone-200">
          <p className="text-xs tracking-widest font-light text-stone-600 uppercase mb-4">
            {t("riviera.specialLabel")}
          </p>
          <h3 className="text-3xl font-light text-stone-900 mb-4">
            {t("riviera.special.two")}{" "}
            {formatPrice(parseInt(t("riviera.special.two_price")))} •{" "}
            {t("riviera.special.three")}{" "}
            {formatPrice(parseInt(t("riviera.special.three_price")))}
          </h3>
          <p className="text-stone-600 font-light mb-6 max-w-2xl mx-auto">
            {t("riviera.specialDesc")}
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-3 px-6 sm:px-12 py-3.5 bg-stone-800 hover:bg-stone-900 text-white font-light uppercase tracking-widest text-xs rounded-sm shadow-lg hover:shadow-xl hover:shadow-stone-800/50 transition duration-300 hover:-translate-y-0.5"
          >
            {t("riviera.shop")} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

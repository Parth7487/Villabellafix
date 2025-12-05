import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeader from "@/components/ui/SectionHeader";

const LIFESTYLE_IMAGES = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2Fa823fb3706024cb6a456b310a63c139a?format=webp&width=800",
    alt: "VillaBella Cushion on Rattan Chair",
    dimensions: { width: 600, height: 700 },
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2F4596621349714abcbed19051e4a7e8f0?format=webp&width=800",
    alt: "VillaBella Cushion at Beach",
    dimensions: { width: 600, height: 700 },
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2Fbba1f46d852146e5a6c2933c89fb6265?format=webp&width=800",
    alt: "VillaBella Tote Bag with Cushion",
    dimensions: { width: 600, height: 700 },
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2F5892bc65aff14345aa9f1ab651180318?format=webp&width=800",
    alt: "Intricate Mosaic Design Detail",
    dimensions: { width: 600, height: 700 },
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2F49442462fd4642868154edba834d76e0?format=webp&width=800",
    alt: "Cushion with Olive Details",
    dimensions: { width: 600, height: 700 },
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2Fe912e6a28431429585f636dd9310093c?format=webp&width=800",
    alt: "VillaBella Tote Bag in Tropical Setting",
    dimensions: { width: 600, height: 700 },
  },
];

export default function LifestyleGallery() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs tracking-widest font-light text-stone-400 uppercase mb-4">
            {t("products.lifestyleLabel")}
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
            {t("products.lifestyleHeading")}
          </h2>
          <p className="text-lg text-stone-300 font-light max-w-2xl mx-auto">
            {t("products.lifestyleDescription")}
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {LIFESTYLE_IMAGES.map((image, idx) => (
            <div key={idx} className="break-inside-avoid">
              <div className="overflow-hidden rounded-lg shadow-2xl hover:shadow-stone-900/30 transition duration-500">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover hover:scale-105 transition duration-500"
                  width={image.dimensions.width}
                  height={image.dimensions.height}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

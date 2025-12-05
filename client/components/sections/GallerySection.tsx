import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeader from "@/components/ui/SectionHeader";

const GALLERY_IMAGES = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2Fd971585a431447f288b6b6fba2521d06%2F5a0bebef1a4449d9affa2025f6bea709?format=webp&width=800",
    alt: "VillaBella lifestyle - Mediterranean tote with pillows",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2Fd971585a431447f288b6b6fba2521d06%2Fc0ecb85e649643b7a66bfb42bc27b0d9?format=webp&width=800",
    alt: "VillaBella tote bag close-up detail",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2Fd971585a431447f288b6b6fba2521d06%2Fe0d5bce37e904deea60384ee7554be49?format=webp&width=800",
    alt: "Pillow detail with Mediterranean botanical elements",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2Fd971585a431447f288b6b6fba2521d06%2Fa193a42a0fbb4c7fb74471c62134584f?format=webp&width=800",
    alt: "VillaBella pillow on elegant rattan furniture",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2Fd971585a431447f288b6b6fba2521d06%2F7aea2373f59a4727af61ccb188d9f93a?format=webp&width=800",
    alt: "VillaBella tote bag in natural Mediterranean setting",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2Fd971585a431447f288b6b6fba2521d06%2Fcf7951f72fae4e908dfe5d42138e3c44?format=webp&width=800",
    alt: "Handcrafted pillow details in nature",
  },
];

export default function GallerySection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24 space-y-6">
          <SectionHeader
            label={t("gallery.label") || "Lifestyle"}
            heading={t("gallery.title") || "Experience the Mediterranean"}
            description={
              t("gallery.description") ||
              "Each pillow tells a story of Mediterranean heritage, crafted for those who bring the warmth of the South into their Scandinavian homes. Discover how VillaBella transforms everyday moments into Mediterranean memories."
            }
          />
        </div>

        <div className="space-y-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 md:gap-1.5 items-stretch">
            <div className="flex flex-col gap-1 md:gap-1.5">
              {GALLERY_IMAGES.slice(0, 2).map((img, idx) => (
                <div key={idx} className="flex items-center justify-center">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="max-w-full h-auto object-contain hover:opacity-90 transition-opacity duration-700"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center h-[89.5%]">
              <img
                src={GALLERY_IMAGES[2].src}
                alt={GALLERY_IMAGES[2].alt}
                className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-700"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-1.5 -mt-12 md:-mt-[160px]">
            {GALLERY_IMAGES.slice(3).map((img, idx) => (
              <div key={idx} className="flex items-center justify-center">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="max-w-full h-auto object-contain hover:opacity-90 transition-opacity duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

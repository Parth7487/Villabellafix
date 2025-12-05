import { useLanguage } from "@/contexts/LanguageContext";

const BADGES = [
  {
    id: "cotton",
    src: "https://cdn.builder.io/api/v1/image/assets%2Fd971585a431447f288b6b6fba2521d06%2F7f42e97a91164525b5990f1c7159678d?format=webp&width=800",
    labelKey: "trust.cotton",
    descKey: "trust.cottonDesc",
  },
  {
    id: "europe",
    src: "https://cdn.builder.io/api/v1/image/assets%2Fd971585a431447f288b6b6fba2521d06%2Fac2b05c61cb84f349eae3429ae30d34c?format=webp&width=800",
    labelKey: "trust.europeanProduction",
    descKey: "trust.europeanProductionDesc",
  },
  {
    id: "artist",
    src: "https://cdn.builder.io/api/v1/image/assets%2Fd971585a431447f288b6b6fba2521d06%2F1cf66f7dd0d64553b7d0311a8f2106e0?format=webp&width=800",
    labelKey: "trust.artistDesign",
    descKey: "trust.artistDesignDesc",
  },
  {
    id: "feathers",
    src: "https://cdn.builder.io/api/v1/image/assets%2Fd971585a431447f288b6b6fba2521d06%2F1372431f1ff34f848e72687c12dfe264?format=webp&width=800",
    labelKey: "trust.europeanFeathers",
    descKey: "trust.europeanFeaturesDesc",
  },
];

export default function TrustBadgesCircle() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {BADGES.map((badge) => (
            <div key={badge.id} className="flex flex-col items-center text-center space-y-4">
              <div className="w-32 h-32 flex-shrink-0">
                <img
                  src={badge.src}
                  alt={t(badge.labelKey)}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2">
                <h4 className="text-stone-900 font-light text-base md:text-lg">
                  {t(badge.labelKey)}
                </h4>
                <p className="text-stone-600 text-xs md:text-sm font-light leading-relaxed">
                  {t(badge.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

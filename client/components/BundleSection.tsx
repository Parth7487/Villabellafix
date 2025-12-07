import { useLanguage } from "@/contexts/LanguageContext";
import { useCurrency } from "@/contexts/CurrencyContext";

interface BundleOption {
  id: string;
  label: string;
  title: string;
  description: string;
  price: number;
  savings?: number;
  isPopular?: boolean;
  image: string;
  quantity: number;
}

export default function BundleSection() {
  const { t } = useLanguage();

  const bundleOptions: BundleOption[] = [
    {
      id: "cover-only",
      label: t("bundle.coverOnly"),
      title: "Putekasse alene",
      description: t("bundle.coverOnlyDesc"),
      price: 599,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2F808c482bedef4853baeeb36908805c3d?format=webp&width=600",
      quantity: 1,
    },
    {
      id: "with-pillow",
      label: t("bundle.withPillow"),
      title: "Med innerpute",
      description: t("bundle.withPillowDesc"),
      price: 1099,
      savings: 100,
      isPopular: true,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2Fa823fb3706024cb6a456b310a63c139a?format=webp&width=600",
      quantity: 1,
    },
    {
      id: "buy-2",
      label: "Kjøp 2",
      title: "To puter",
      description: "Komplett sett med to puter og putekasser",
      price: 2499,
      savings: 399,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2F4596621349714abcbed19051e4a7e8f0?format=webp&width=600",
      quantity: 2,
    },
    {
      id: "buy-3",
      label: "Kjøp 3",
      title: "Tre puter",
      description: "Maksimal verdi med tre komplette putesett",
      price: 3499,
      savings: 899,
      isPopular: true,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2F5892bc65aff14345aa9f1ab651180318?format=webp&width=600",
      quantity: 3,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs tracking-widest font-light text-stone-500 uppercase mb-3">
            {t("bundle.multipleOffers")}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-stone-900 mb-6">
            {t("bundle.selectProduct")}
          </h2>
          <p className="text-lg text-stone-600 font-light max-w-2xl mx-auto leading-relaxed">
            Oppdag hvordan du kan spare ved å kjøpe flere puter
          </p>
        </div>

        {/* Bundle Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {bundleOptions.map((bundle) => (
            <div
              key={bundle.id}
              className={`group relative overflow-hidden ${
                bundle.isPopular ? "md:col-span-1 md:row-span-2" : ""
              }`}
            >
              {/* Popular Badge */}
              {bundle.isPopular && (
                <div className="absolute top-6 right-6 z-20">
                  <span className="inline-block px-4 py-1.5 bg-stone-900 text-white text-xs font-light tracking-widest uppercase rounded-full">
                    Anbefalt
                  </span>
                </div>
              )}

              {/* Card Container */}
              <div
                className={`relative h-full flex flex-col overflow-hidden transition duration-500 ${
                  bundle.isPopular
                    ? "bg-stone-900"
                    : "bg-white border border-stone-200 hover:border-stone-400"
                }`}
              >
                {/* Image Section */}
                <div
                  className={`relative w-full h-64 md:h-80 overflow-hidden ${
                    !bundle.isPopular ? "border-b border-stone-200" : ""
                  }`}
                >
                  <img
                    src={bundle.image}
                    alt={bundle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  {bundle.isPopular && (
                    <div className="absolute inset-0 bg-black/10"></div>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col p-8 md:p-10">
                  {/* Label */}
                  <div className="mb-4">
                    <span
                      className={`text-xs tracking-widest font-light uppercase ${
                        bundle.isPopular
                          ? "text-stone-400"
                          : "text-stone-500"
                      }`}
                    >
                      {bundle.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-2xl md:text-3xl font-light tracking-tight mb-3 ${
                      bundle.isPopular ? "text-white" : "text-stone-900"
                    }`}
                  >
                    {bundle.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm font-light leading-relaxed mb-8 ${
                      bundle.isPopular
                        ? "text-stone-300"
                        : "text-stone-600"
                    }`}
                  >
                    {bundle.description}
                  </p>

                  {/* Spacer */}
                  <div className="flex-1"></div>

                  {/* Pricing Section */}
                  <div className="space-y-4">
                    {/* Price */}
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`text-4xl md:text-5xl font-light ${
                          bundle.isPopular
                            ? "text-white"
                            : "text-stone-900"
                        }`}
                      >
                        {bundle.price.toLocaleString()}
                      </span>
                      <span
                        className={`text-sm font-light ${
                          bundle.isPopular
                            ? "text-stone-400"
                            : "text-stone-500"
                        }`}
                      >
                        kr
                      </span>
                    </div>

                    {/* Savings Badge */}
                    {bundle.savings && (
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-0.5 w-2 ${
                            bundle.isPopular ? "bg-emerald-400" : "bg-emerald-600"
                          }`}
                        ></div>
                        <span
                          className={`text-xs font-light ${
                            bundle.isPopular
                              ? "text-emerald-400"
                              : "text-emerald-600"
                          }`}
                        >
                          Spar {bundle.savings} kr
                        </span>
                      </div>
                    )}

                    {/* CTA Button */}
                    <button
                      className={`w-full px-6 py-4 font-light uppercase tracking-wider text-sm rounded-sm transition duration-300 mt-6 ${
                        bundle.isPopular
                          ? "bg-white hover:bg-stone-50 text-stone-900"
                          : "bg-stone-900 hover:bg-stone-800 text-white"
                      }`}
                    >
                      Velg
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Message */}
        <div className="mt-16 md:mt-20 pt-16 md:pt-20 border-t border-stone-200">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-stone-600 font-light text-lg leading-relaxed">
              Alle bundle-alternativer inkluderer gratis levering og 30 dagers
              returrett. Høy kvalitet, lav miljøpåvirkning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

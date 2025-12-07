import { useLanguage } from "@/contexts/LanguageContext";

interface BundleOption {
  id: string;
  label: string;
  title: string;
  description: string;
  price: number;
  savings?: number;
  isPopular?: boolean;
  image: string;
}

export default function BundleSection() {
  const { t } = useLanguage();

  const bundleOptions: BundleOption[] = [
    {
      id: "cover-only",
      label: t("bundle.essentials"),
      title: t("bundle.essentialsTitle"),
      description: t("bundle.essentialsDesc"),
      price: 599,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2Fa823fb3706024cb6a456b310a63c139a?format=webp&width=600",
    },
    {
      id: "with-pillow",
      label: t("bundle.mostPopular"),
      title: t("bundle.completeSet"),
      description: t("bundle.completeSetDesc"),
      price: 1099,
      savings: 100,
      isPopular: true,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2F4596621349714abcbed19051e4a7e8f0?format=webp&width=600",
    },
    {
      id: "buy-3",
      label: t("bundle.ultimateValue"),
      title: t("bundle.threeSets"),
      description: t("bundle.threeSetsDesc"),
      price: 3499,
      savings: 899,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2Fbba1f46d852146e5a6c2933c89fb6265?format=webp&width=600",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs tracking-[0.2em] font-light text-stone-600 uppercase block mb-3">
            {t("bundle.sectionTitle")}
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-stone-900 leading-tight">
            {t("bundle.sectionHeading")}
          </h2>
        </div>

        {/* Unique Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {bundleOptions.map((bundle, index) => (
            <div
              key={bundle.id}
              className={`group relative overflow-hidden rounded-lg transition duration-500 ${
                bundle.isPopular
                  ? "md:col-span-1 md:transform md:scale-105 md:z-10 shadow-2xl"
                  : "shadow-lg hover:shadow-xl"
              } ${bundle.isPopular ? "bg-stone-900" : "bg-white border border-stone-200 hover:border-stone-900"}`}
            >
              {/* Background overlay for popular */}
              {bundle.isPopular && (
                <div className="absolute inset-0 bg-gradient-to-br from-stone-900/50 to-stone-800/50 z-10 pointer-events-none"></div>
              )}

              {/* Image */}
              <div className="relative w-full h-48 md:h-56 overflow-hidden">
                <img
                  src={bundle.image}
                  alt={bundle.title}
                  className={`w-full h-full object-cover group-hover:scale-110 transition duration-700 ${
                    bundle.isPopular ? "opacity-60 group-hover:opacity-80" : "opacity-100"
                  }`}
                />

                {/* Popular Badge */}
                {bundle.isPopular && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-block px-3 py-1 bg-emerald-500 text-white text-xs tracking-[0.15em] font-light uppercase rounded-full">
                      {t("bundle.popular")}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div
                className={`relative z-10 p-6 md:p-7 ${
                  bundle.isPopular ? "text-white" : "text-stone-900"
                }`}
              >
                {/* Label */}
                <span
                  className={`text-xs tracking-[0.2em] font-light uppercase block mb-2 ${
                    bundle.isPopular ? "text-emerald-300" : "text-stone-600"
                  }`}
                >
                  {bundle.label}
                </span>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-light mb-2 leading-tight">
                  {bundle.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm font-light leading-relaxed mb-6 ${
                    bundle.isPopular ? "text-stone-200" : "text-stone-600"
                  }`}
                >
                  {bundle.description}
                </p>

                {/* Divider */}
                <div
                  className={`h-px mb-6 ${
                    bundle.isPopular ? "bg-stone-700" : "bg-stone-200"
                  }`}
                ></div>

                {/* Pricing Section */}
                <div className="flex items-end justify-between mb-5">
                  <div>
                    <p
                      className={`text-xs tracking-[0.1em] font-light uppercase mb-2 ${
                        bundle.isPopular ? "text-stone-400" : "text-stone-500"
                      }`}
                    >
                      {t("bundle.from")}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl font-light">
                        {bundle.price}
                      </span>
                      <span
                        className={`text-sm font-light ${
                          bundle.isPopular ? "text-stone-400" : "text-stone-500"
                        }`}
                      >
                        kr
                      </span>
                    </div>
                  </div>

                  {/* Savings Badge */}
                  {bundle.savings && (
                    <div
                      className={`text-xs text-center font-light px-3 py-2 rounded-full ${
                        bundle.isPopular
                          ? "bg-emerald-500/20 text-emerald-200 border border-emerald-500/30"
                          : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      }`}
                    >
                      <span className="block text-xs">{t("bundle.save")}</span>
                      <span className="block font-light">
                        {bundle.savings} kr
                      </span>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full px-6 py-3 text-sm font-light tracking-wider uppercase rounded-sm transition duration-300 ${
                    bundle.isPopular
                      ? "bg-white hover:bg-stone-50 text-stone-900"
                      : "bg-stone-900 hover:bg-stone-800 text-white"
                  }`}
                >
                  {t("bundle.choose")}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Trust Indicators */}
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 rounded-full bg-stone-900"></div>
            <p className="text-xs tracking-[0.1em] font-light text-stone-600 uppercase">
              {t("bundle.freeShipping")}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 rounded-full bg-stone-900"></div>
            <p className="text-xs tracking-[0.1em] font-light text-stone-600 uppercase">
              {t("bundle.thirtyDayReturn")}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 rounded-full bg-stone-900"></div>
            <p className="text-xs tracking-[0.1em] font-light text-stone-600 uppercase">
              {t("bundle.handmadeNorway")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

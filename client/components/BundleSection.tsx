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
  quantity: number;
}

export default function BundleSection() {
  const { t } = useLanguage();

  const bundleOptions: BundleOption[] = [
    {
      id: "cover-only",
      label: "Basis",
      title: "Putekasse",
      description: "Eksklusiv putekasse i håndlagd stoff",
      price: 599,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2Fa823fb3706024cb6a456b310a63c139a?format=webp&width=800",
      quantity: 1,
    },
    {
      id: "with-pillow",
      label: "Populært",
      title: "Komplett sett",
      description: "Putekasse + innerpute",
      price: 1099,
      savings: 100,
      isPopular: true,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2F4596621349714abcbed19051e4a7e8f0?format=webp&width=800",
      quantity: 1,
    },
    {
      id: "buy-2",
      label: "Sparepakke",
      title: "To sett",
      description: "Dobbel luksus med rabatt",
      price: 2499,
      savings: 399,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2F5892bc65aff14345aa9f1ab651180318?format=webp&width=800",
      quantity: 2,
    },
    {
      id: "buy-3",
      label: "Beste verdi",
      title: "Tre sett",
      description: "Maksimal sparing og stil",
      price: 3499,
      savings: 899,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2Fbba1f46d852146e5a6c2933c89fb6265?format=webp&width=800",
      quantity: 3,
    },
  ];

  return (
    <section className="py-28 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
          <span className="text-xs tracking-[0.15em] font-light text-stone-500 uppercase block mb-4">
            Smarte kombinasjoner
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-stone-900 mb-6 leading-tight">
            Velg ditt perfekte sett
          </h2>
          <p className="text-base md:text-lg text-stone-600 font-light leading-relaxed">
            Fra enkelt til komplett – finn din ideelle kombinasjon av våre håndlagde puter
          </p>
        </div>

        {/* Mobile/Tablet: Stack all cards vertically */}
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-8">
          {/* Card 1 - Basis */}
          <div className="group bg-gradient-to-br from-stone-50 to-white border border-stone-200 hover:border-stone-900 transition duration-500 overflow-hidden relative h-full">
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition duration-500">
              <img
                src={bundleOptions[0].image}
                alt={bundleOptions[0].title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 h-full flex flex-col p-8">
              <div className="space-y-3 mb-8 flex-1">
                <span className="inline-block text-xs tracking-[0.15em] font-light text-stone-600 uppercase">
                  {bundleOptions[0].label}
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-stone-900">
                  {bundleOptions[0].title}
                </h3>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  {bundleOptions[0].description}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-light text-stone-900">
                    {bundleOptions[0].price}
                  </span>
                  <span className="text-sm font-light text-stone-500">kr</span>
                </div>
                <button className="w-full px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white text-sm font-light tracking-wider uppercase rounded-sm transition duration-300">
                  Velg
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 - Featured Popular */}
          <div className="group md:col-span-2 bg-gradient-to-br from-stone-900 to-stone-800 relative overflow-hidden lg:col-span-2">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={bundleOptions[1].image}
                alt={bundleOptions[1].title}
                className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-stone-900/60 via-stone-900/50 to-stone-900/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col p-8 min-h-[500px] md:min-h-[600px]">
              {/* Badge */}
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-emerald-600/20 text-emerald-300 text-xs tracking-[0.15em] font-light uppercase rounded-full border border-emerald-500/30">
                  Rekommendert
                </span>
              </div>

              {/* Main Content */}
              <div className="flex-1">
                <div className="space-y-4 mb-8">
                  <h3 className="text-4xl md:text-5xl font-light text-white leading-tight">
                    {bundleOptions[1].title}
                  </h3>
                  <p className="text-base text-stone-200 font-light leading-relaxed">
                    {bundleOptions[1].description} – Vår mest populære valg for de som vil ha det hele.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4 py-8 border-y border-stone-700/50">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span className="text-sm text-stone-300 font-light">
                      Håndlagd putekasse i eksklusivt stoff
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span className="text-sm text-stone-300 font-light">
                      Komfortabel innerpute inkludert
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span className="text-sm text-stone-300 font-light">
                      Gratis levering til hele Norge
                    </span>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="space-y-4 pt-8">
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-5xl md:text-6xl font-light text-white">
                      {bundleOptions[1].price}
                    </span>
                    <span className="text-base text-stone-400 font-light">kr</span>
                  </div>
                  {bundleOptions[1].savings && (
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-0.5 bg-emerald-400"></span>
                      <span className="text-xs text-emerald-400 font-light tracking-wide">
                        Spar {bundleOptions[1].savings} kr vs individuell kjøp
                      </span>
                    </div>
                  )}
                </div>
                <button className="w-full px-8 py-4 bg-white hover:bg-stone-50 text-stone-900 text-sm font-light tracking-wider uppercase rounded-sm transition duration-300">
                  Velg nå
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 - To sett */}
          <div className="group bg-gradient-to-br from-stone-50 to-white border border-stone-200 hover:border-stone-900 transition duration-500 overflow-hidden relative h-full">
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition duration-500">
              <img
                src={bundleOptions[2].image}
                alt={bundleOptions[2].title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 h-full flex flex-col p-8">
              <div className="space-y-3 mb-8 flex-1">
                <span className="inline-block text-xs tracking-[0.15em] font-light text-stone-600 uppercase">
                  {bundleOptions[2].label}
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-stone-900">
                  {bundleOptions[2].title}
                </h3>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  {bundleOptions[2].description}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-light text-stone-900">
                    {bundleOptions[2].price}
                  </span>
                  <span className="text-sm font-light text-stone-500">kr</span>
                </div>
                {bundleOptions[2].savings && (
                  <p className="text-xs text-emerald-700 font-light tracking-wide">
                    ✓ Du sparer {bundleOptions[2].savings} kr
                  </p>
                )}
                <button className="w-full px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white text-sm font-light tracking-wider uppercase rounded-sm transition duration-300">
                  Velg
                </button>
              </div>
            </div>
          </div>

          {/* Card 4 - Tre sett */}
          <div className="group bg-gradient-to-br from-stone-50 to-white border border-stone-200 hover:border-stone-900 transition duration-500 overflow-hidden relative h-full">
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition duration-500">
              <img
                src={bundleOptions[3].image}
                alt={bundleOptions[3].title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 h-full flex flex-col p-8">
              <div className="space-y-3 mb-8 flex-1">
                <span className="inline-block text-xs tracking-[0.15em] font-light text-stone-600 uppercase">
                  {bundleOptions[3].label}
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-stone-900">
                  {bundleOptions[3].title}
                </h3>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  {bundleOptions[3].description}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-light text-stone-900">
                    {bundleOptions[3].price}
                  </span>
                  <span className="text-sm font-light text-stone-500">kr</span>
                </div>
                {bundleOptions[3].savings && (
                  <p className="text-xs text-emerald-700 font-light tracking-wide">
                    ✓ Du sparer {bundleOptions[3].savings} kr
                  </p>
                )}
                <button className="w-full px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white text-sm font-light tracking-wider uppercase rounded-sm transition duration-300">
                  Velg
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-20 pt-16 border-t border-stone-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center md:text-left space-y-2">
              <p className="text-xs tracking-[0.15em] font-light text-stone-600 uppercase">
                Fri frakt
              </p>
              <p className="text-sm text-stone-600 font-light">
                Levering til hele Norge
              </p>
            </div>
            <div className="text-center md:text-left space-y-2">
              <p className="text-xs tracking-[0.15em] font-light text-stone-600 uppercase">
                30 dagers retur
              </p>
              <p className="text-sm text-stone-600 font-light">
                Risikofritt kjøp
              </p>
            </div>
            <div className="text-center md:text-left space-y-2">
              <p className="text-xs tracking-[0.15em] font-light text-stone-600 uppercase">
                Håndlagd i Norge
              </p>
              <p className="text-sm text-stone-600 font-light">
                Høy kvalitet og bærekraft
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

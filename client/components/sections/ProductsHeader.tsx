import { useLanguage } from "@/contexts/LanguageContext";

export default function ProductsHeader() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden bg-stone-900">
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2Fe39acd0515c343298f9577041fa60f29%2F808c482bedef4853baeeb36908805c3d?format=webp&width=1200"
        alt="VillaBella Products"
        className="absolute inset-0 w-full h-full object-cover"
        width="1200"
        height="400"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-widest font-light text-stone-300 uppercase mb-4">
          {t("products.pageLabel")}
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-4">
          {t("products.pageHeading")}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white/90 font-light max-w-2xl mx-auto">
          {t("products.pageDescription")}
        </p>
      </div>
    </section>
  );
}

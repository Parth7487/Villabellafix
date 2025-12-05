import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section
      className="py-12 md:py-16 relative overflow-hidden"
      style={{
        backgroundColor: "#1c1917",
        backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F4cd739e8b5a04122bfbd47151e3cded1%2Fbebb4f4dc1f84085a0898f435b21a2c3?format=webp&width=800')`,
        backgroundSize: "auto",
        backgroundPosition: "0 0",
        backgroundRepeat: "repeat",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900/90 to-stone-950/90 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="text-xs tracking-widest font-light text-stone-400 uppercase mb-6">
          {t("cta.heading")}
        </p>
        <h2 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-8">
          {t("cta.subheading")}
        </h2>
        <p className="text-lg text-stone-300 font-light mb-10 max-w-2xl mx-auto">
          {t("cta.description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/products"
            className="px-8 sm:px-12 py-3.5 bg-stone-700 hover:bg-stone-800 text-white font-medium uppercase tracking-widest text-xs transition duration-300 ease-out inline-block text-center shadow-lg hover:shadow-stone-900/40 relative group"
          >
            <span className="relative z-10">{t("cta.shop")}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-stone-800 to-stone-700 opacity-0 group-hover:opacity-100 transition duration-300" />
          </Link>
          <Link
            to="/about"
            className="px-8 sm:px-12 py-3.5 border-2 border-white hover:border-stone-300 text-white hover:text-stone-200 font-medium uppercase tracking-widest text-xs transition duration-300 inline-block text-center hover:bg-white/5 backdrop-blur-sm"
          >
            {t("cta.learn")}
          </Link>
        </div>
      </div>
    </section>
  );
}

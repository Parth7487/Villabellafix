import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-screen bg-stone-900 overflow-hidden flex flex-col items-center justify-between pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950" />
      <video
        autoPlay
        muted
        loop
        playsInline
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://cdn.builder.io/o/assets%2Fa5269a01680d457f83a73f069f858527%2F5181c31eae5d40d1a99de211aaef8ab5?alt=media&token=4ce9c61f-5e82-4868-a637-c074b5c85fcf&apiKey=a5269a01680d457f83a73f069f858527"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-stone-950/30 via-stone-900/50 to-stone-950/70" />

      <div className="relative z-10 mt-auto">
        <Link
          to="/products"
          className="group inline-flex px-6 sm:px-16 lg:px-20 py-6 bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 text-white font-light uppercase tracking-widest text-sm transition duration-500 shadow-2xl hover:bg-white/15 hover:shadow-stone-900/30"
        >
          <span className="flex items-center gap-4">
            {t("hero.cta")}
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}

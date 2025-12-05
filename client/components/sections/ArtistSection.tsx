import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ArtistSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-last lg:order-first">
            <div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[700px] overflow-hidden shadow-lg bg-black flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F681f21f8ea574ef690553b20ef9eda65?format=webp&width=800"
                alt="Jelena Zivkovic, mosaic artist"
                className="w-full h-full object-cover"
                width="800"
                height="700"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-widest font-light text-white uppercase mb-4">
                {t("artist.label")}
              </p>
              <h2 className="text-5xl font-light tracking-tight text-white">
                {t("artist.heading")}
              </h2>
            </div>

            <p className="text-lg text-stone-300 font-light leading-relaxed">
              {t("artist.p1")}
            </p>

            <p className="text-base text-stone-400 font-light leading-relaxed">
              {t("artist.p2")}
            </p>

            <blockquote className="border-l-4 border-stone-700 pl-6 py-6 italic text-stone-300 font-light text-lg">
              "This collection grew from my lifelong love of mosaic storytelling
              and the warm, symbolic world of Mediterranean art. As an artist
              shaped by both traditional iconography and imaginative painting, I
              am inspired by symbols that reveal themselves slowly. In these
              pieces, I wanted to capture timelessness, where myth, nature, and
              memory blend into a calm, luminous atmosphere."
            </blockquote>

            <p className="text-sm text-stone-400 font-light">
              — Jelena Zivkovic, Mosaic Artist
            </p>

            <Link
              to="/"
              className="inline-flex items-center gap-3 text-stone-400 hover:text-stone-300 font-light uppercase tracking-wider text-sm transition mt-4"
            >
              {t("artist.cta")} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

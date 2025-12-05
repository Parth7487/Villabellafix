import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeader from "@/components/ui/SectionHeader";

export default function MediterraneanSection() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [gdprAccepted, setGdprAccepted] = useState(false);
  const [subscriptionLoading, setSubscriptionLoading] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gdprAccepted) return;
    
    setSubscriptionLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setEmail("");
      setGdprAccepted(false);
    } finally {
      setSubscriptionLoading(false);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-10 order-last lg:order-first">
            <div>
              <h2 className="text-5xl md:text-6xl font-light tracking-tight text-stone-900 leading-tight mb-6">
                {t("mediterranean.heading")}
              </h2>
              <p className="text-lg text-stone-600 font-light leading-relaxed">
                {t("mediterranean.description")}
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-stone-200">
              <div>
                <h3 className="text-2xl font-light text-stone-900 mb-2">
                  {t("newsletter.heading")}
                </h3>
                <p className="text-sm text-stone-600 font-light">
                  {t("mediterranean.newsletterSubheading")}
                </p>
              </div>

              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("newsletter.placeholder")}
                    required
                    className="flex-1 px-6 py-4 bg-stone-50 border border-stone-300 text-stone-900 placeholder-stone-500 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent transition"
                  />
                  <button
                    type="submit"
                    disabled={!gdprAccepted || subscriptionLoading}
                    className="px-6 sm:px-10 py-4 bg-stone-900 hover:bg-stone-800 disabled:bg-stone-400 text-white font-light uppercase tracking-wider text-sm transition duration-300 rounded-sm"
                  >
                    {subscriptionLoading ? "..." : t("newsletter.subscribe")}
                  </button>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="gdpr"
                    checked={gdprAccepted}
                    onChange={(e) => setGdprAccepted(e.target.checked)}
                    className="w-5 h-5 mt-0.5 bg-white border border-stone-300 rounded cursor-pointer accent-stone-900 flex-shrink-0"
                  />
                  <label
                    htmlFor="gdpr"
                    className="text-xs text-stone-600 font-light cursor-pointer"
                  >
                    {t("newsletter.gdprDescription")}
                  </label>
                </div>
              </form>
            </div>
          </div>

          <div className="relative h-64 sm:h-80 md:h-96 lg:h-full min-h-96 rounded-lg overflow-hidden shadow-2xl border border-stone-200">
            <img
              src="https://images.pexels.com/photos/11898897/pexels-photo-11898897.jpeg"
              alt="Mediterranean coastline with calm sea and rocky cliffs"
              className="w-full h-full object-cover"
              width="800"
              height="600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

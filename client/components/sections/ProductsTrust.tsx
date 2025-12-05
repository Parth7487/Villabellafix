import { Leaf, Truck, RotateCcw, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import TrustBadge from "@/components/ui/TrustBadge";

const TRUST_ITEMS = [
  {
    id: "delivery",
    icon: Truck,
    labelKey: "trust.delivery",
    descKey: "trust.deliveryDesc",
  },
  {
    id: "leaf",
    icon: Leaf,
    labelKey: "trust.madeInEurope",
    descKey: "trust.madeInEuropeDesc",
  },
  {
    id: "rotate",
    icon: RotateCcw,
    labelKey: "trust.returns",
    descKey: "trust.returnsDesc",
  },
  {
    id: "check",
    icon: CheckCircle,
    labelKey: "trust.norwegianShop",
    descKey: "trust.norwegianShopDesc",
  },
];

export default function ProductsTrust() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-stone-50 to-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-light tracking-tight text-stone-900 mb-2">
            {t("products.whyChoose")}
          </h3>
          <p className="text-stone-600 font-light max-w-xl mx-auto">
            {t("products.whyChooseDesc")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {TRUST_ITEMS.map((item) => (
            <TrustBadge
              key={item.id}
              icon={item.icon}
              title={t(item.labelKey)}
              description={t(item.descKey)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

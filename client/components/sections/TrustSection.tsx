import { Leaf, Truck, RotateCcw, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import TrustBadge from "@/components/ui/TrustBadge";

const TRUST_ITEMS = [
  { id: "leaf", icon: Leaf, labelKey: "trust.madeInEurope", descKey: "trust.madeInEuropeDesc" },
  { id: "truck", icon: Truck, labelKey: "trust.delivery", descKey: "trust.deliveryDesc" },
  { id: "rotate", icon: RotateCcw, labelKey: "trust.returns", descKey: "trust.returnsDesc" },
  { id: "check", icon: CheckCircle, labelKey: "trust.norwegianShop", descKey: "trust.norwegianShopDesc" },
];

export default function TrustSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

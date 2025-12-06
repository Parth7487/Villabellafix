import { Leaf, Truck, RotateCcw, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TrustBar() {
  const { t } = useLanguage();

  return (
    <div className="bg-stone-50 rounded-lg p-6 border border-stone-200">
      <h4 className="text-sm font-light uppercase tracking-wider text-stone-600 mb-6">
        {t("trust.buyWithConfidence")}
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Eco-Friendly */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-stone-900 border border-stone-700">
              <Leaf size={20} className="text-stone-100" />
            </div>
          </div>
          <div>
            <p className="text-sm font-light text-stone-900">Eco-Friendly</p>
            <p className="text-xs text-stone-500 font-light mt-1">
              Sustainable materials
            </p>
          </div>
        </div>

        {/* Free Shipping */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-stone-900 border border-stone-700">
              <Truck size={20} className="text-stone-100" />
            </div>
          </div>
          <div>
            <p className="text-sm font-light text-stone-900">Free Shipping</p>
            <p className="text-xs text-stone-500 font-light mt-1">
              On orders over $50
            </p>
          </div>
        </div>

        {/* Easy Returns */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-stone-900 border border-stone-700">
              <RotateCcw size={20} className="text-stone-100" />
            </div>
          </div>
          <div>
            <p className="text-sm font-light text-stone-900">Easy Returns</p>
            <p className="text-xs text-stone-500 font-light mt-1">
              30-day return policy
            </p>
          </div>
        </div>

        {/* Quality Guaranteed */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-stone-900 border border-stone-700">
              <Award size={20} className="text-stone-100" />
            </div>
          </div>
          <div>
            <p className="text-sm font-light text-stone-900">
              Quality Guaranteed
            </p>
            <p className="text-xs text-stone-500 font-light mt-1">
              Premium craftsmanship
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

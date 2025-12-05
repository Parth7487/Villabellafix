interface LanguageCurrencyBarProps {
  language: string;
  currency: string;
  isScrolled: boolean;
  onLanguageChange: (lang: string) => void;
  onCurrencyChange: (curr: string) => void;
}

export default function LanguageCurrencyBar({
  language,
  currency,
  isScrolled,
  onLanguageChange,
  onCurrencyChange,
}: LanguageCurrencyBarProps) {
  const activeClass = isScrolled ? "text-stone-900" : "text-white";
  const inactiveClass = isScrolled
    ? "text-stone-400 hover:text-stone-700"
    : "text-white/40 hover:text-white/70";
  const separatorClass = isScrolled ? "text-stone-300" : "text-white/30";
  const borderClass = isScrolled ? "border-stone-200" : "border-white/20";

  return (
    <div
      className={`transition-all duration-300 hidden sm:flex items-center ${borderClass} border-r pr-4 sm:pr-6`}
    >
      <div className="flex items-center gap-1 sm:gap-2">
        <button
          onClick={() => onLanguageChange("NO")}
          className={`transition-all duration-300 px-2 sm:px-3 py-1 sm:py-2 text-xs font-light uppercase tracking-wider ${
            language === "NO" ? activeClass : inactiveClass
          }`}
        >
          NO
        </button>
        <span
          className={`transition-all duration-300 text-xs ${separatorClass}`}
        >
          /
        </span>
        <button
          onClick={() => onLanguageChange("EN")}
          className={`transition-all duration-300 px-2 sm:px-3 py-1 sm:py-2 text-xs font-light uppercase tracking-wider ${
            language === "EN" ? activeClass : inactiveClass
          }`}
        >
          EN
        </button>
      </div>

      <div
        className={`transition-all duration-300 ${borderClass} border-l pl-4 sm:pl-6 ml-4 sm:ml-6`}
      >
        <select
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className={`transition-all duration-300 px-2 sm:px-3 py-1 sm:py-2 text-xs font-light uppercase tracking-wider bg-transparent border-0 focus:outline-none cursor-pointer ${
            isScrolled
              ? "text-stone-700 hover:text-stone-900"
              : "text-white/60 hover:text-white"
          }`}
        >
          <option value="NOK" className="bg-stone-900 text-white">
            NOK
          </option>
          <option value="EUR" className="bg-stone-900 text-white">
            EUR
          </option>
          <option value="USD" className="bg-stone-900 text-white">
            USD
          </option>
          <option value="GBP" className="bg-stone-900 text-white">
            GBP
          </option>
          <option value="SEK" className="bg-stone-900 text-white">
            SEK
          </option>
        </select>
      </div>
    </div>
  );
}

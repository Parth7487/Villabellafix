import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Heart, ShoppingBag, User } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import NavItem from "@/components/ui/NavItem";
import LanguageCurrencyBar from "@/components/ui/LanguageCurrencyBar";
import HeaderIconButton from "@/components/ui/HeaderIconButton";

interface HeaderProps {
  showAlways?: boolean;
}

const Header = ({ showAlways = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { currency, setCurrency } = useCurrency();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.products"), href: "/products" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  const shouldShowHeader = showAlways || isScrolled;

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        shouldShowHeader
          ? "bg-white border-b border-stone-200/80 shadow-sm"
          : "bg-white/0 border-b border-transparent"
      }`}
    >
      <div
        className={`text-center py-2 text-xs font-light tracking-wide transition-all duration-300 ${
          shouldShowHeader
            ? "bg-gradient-to-r from-stone-100/80 to-stone-50/80 text-stone-600"
            : "bg-white/0 text-white/60"
        }`}
      >
        {t("banner.text")}
      </div>

      <div
        className={`w-full transition-all duration-300 ${
          shouldShowHeader ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between py-4 sm:py-6">
            <div className="flex items-center flex-shrink-0">
              <LanguageCurrencyBar
                language={language}
                currency={currency}
                isScrolled={shouldShowHeader}
                onLanguageChange={setLanguage}
                onCurrencyChange={setCurrency}
              />
            </div>

            <Link
              to="/"
              className="absolute left-1/2 transform -translate-x-1/2 flex-shrink-0 z-10 transition-transform duration-300 hover:scale-105 inline-flex"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fa5269a01680d457f83a73f069f858527%2Fb5a2f56b6f5443dca184426b4e01a8a8?format=webp&width=300"
                alt="VillaBella Logo"
                className="h-10 sm:h-14 w-auto"
              />
            </Link>

            <div className="flex items-center space-x-2 sm:space-x-6 flex-shrink-0">
              <HeaderIconButton
                icon={Search}
                isScrolled={shouldShowHeader}
                label="Search"
              />
              <HeaderIconButton
                icon={Heart}
                isScrolled={shouldShowHeader}
                label="Wishlist"
              />
              <HeaderIconButton
                icon={ShoppingBag}
                isScrolled={shouldShowHeader}
                label="Shopping bag"
                badge={0}
              />
              <HeaderIconButton
                icon={User}
                isScrolled={shouldShowHeader}
                label="User account"
              />

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 transition-all duration-300 rounded-full flex-shrink-0 ${
                  shouldShowHeader
                    ? "text-stone-700 hover:bg-stone-100"
                    : "text-white/70 hover:bg-white/10"
                }`}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          <nav className="hidden lg:flex items-center justify-center space-x-1 pb-6">
            {navItems.map((item) => (
              <NavItem
                key={item.label}
                label={item.label}
                href={item.href}
                isScrolled={shouldShowHeader}
              />
            ))}
          </nav>

          {isMenuOpen && (
            <nav
              className={`lg:hidden pb-4 sm:pb-6 space-y-1 pt-4 sm:pt-6 transition-all duration-300 ${
                shouldShowHeader
                  ? "border-t border-stone-200/50 bg-white"
                  : "border-t border-white/20 bg-stone-900/20"
              }`}
            >
              {navItems.map((item) => (
                <NavItem
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  isScrolled={shouldShowHeader}
                  onClick={() => setIsMenuOpen(false)}
                  mobile
                />
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const [footerEmail, setFooterEmail] = useState("");
  const [footerGdprAccepted, setFooterGdprAccepted] = useState(false);

  return (
    <footer className="bg-stone-950 text-stone-100">
      {/* Newsletter section */}
      <div className="border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-light tracking-wide mb-4">
                {t("footer.newsletter")}
              </h3>
              <p className="text-stone-400 mb-6 text-sm leading-relaxed">
                {t("footer.newsletterDesc")}
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setFooterEmail("");
                setFooterGdprAccepted(false);
              }}
              className="space-y-4"
            >
              <div className="flex gap-3">
                <input
                  type="email"
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                  placeholder={t("footer.emailPlaceholder")}
                  required
                  className="flex-1 px-5 py-3 bg-stone-900 text-white placeholder-stone-500 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-stone-600 transition"
                />
                <button
                  type="submit"
                  disabled={!footerGdprAccepted}
                  className="px-8 py-3 bg-stone-800 hover:bg-stone-700 disabled:bg-stone-600 text-white font-light rounded-sm transition duration-300"
                >
                  {t("footer.subscribe")}
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-stone-800 p-4 rounded-sm border-2 border-stone-700">
                  <input
                    type="checkbox"
                    id="footer-gdpr"
                    checked={footerGdprAccepted}
                    onChange={(e) => setFooterGdprAccepted(e.target.checked)}
                    className="w-6 h-6 cursor-pointer flex-shrink-0 accent-yellow-500"
                  />
                  <label
                    htmlFor="footer-gdpr"
                    className="text-sm text-stone-200 font-light cursor-pointer leading-relaxed flex-1"
                  >
                    {t("newsletter.gdprDescription")}
                  </label>
                </div>
                {!footerGdprAccepted && (
                  <p className="text-xs text-yellow-500 font-light px-4 py-2 bg-stone-900/50 rounded-sm border border-yellow-500/30">
                    ✓ Click the checkbox above to enable the Subscribe button
                  </p>
                )}
                {footerGdprAccepted && (
                  <p className="text-xs text-green-400 font-light px-4 py-2 bg-stone-900/50 rounded-sm border border-green-400/30">
                    ✓ You're all set! Click Subscribe to join our circle.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h4 className="font-light text-sm uppercase tracking-wider mb-6 text-stone-100">
              {t("footer.brand")}
            </h4>
            <p className="text-stone-400 text-sm leading-relaxed mb-4">
              {t("footer.brandDesc")}
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-light text-sm uppercase tracking-wider mb-6 text-stone-100">
              {t("footer.shop")}
            </h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <Link
                  to="/products"
                  className="hover:text-stone-300 transition"
                >
                  {t("footer.allCollections")}
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-stone-300 transition"
                >
                  {t("footer.newArrivals")}
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-stone-300 transition"
                >
                  {t("footer.bestsellers")}
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-stone-300 transition"
                >
                  {t("footer.bundleOffers")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-light text-sm uppercase tracking-wider mb-6 text-stone-100">
              {t("footer.company")}
            </h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <Link to="/about" className="hover:text-stone-300 transition">
                  {t("footer.aboutUs")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-stone-300 transition">
                  {t("footer.sustainability")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-stone-300 transition">
                  {t("footer.journal")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-stone-300 transition">
                  {t("footer.careers")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-light text-sm uppercase tracking-wider mb-6 text-stone-100">
              {t("footer.support")}
            </h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <Link to="/contact" className="hover:text-stone-300 transition">
                  {t("footer.contact")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-stone-300 transition">
                  {t("footer.shippingReturns")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-stone-300 transition">
                  {t("footer.faq")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-stone-300 transition">
                  {t("footer.careGuide")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-light text-sm uppercase tracking-wider mb-6 text-stone-100">
              {t("footer.contactInfo")}
            </h4>
            <ul className="space-y-4 text-sm text-stone-400">
              <li className="flex items-start gap-3">
                <Phone
                  size={16}
                  className="mt-1 flex-shrink-0 text-stone-600"
                />
                <span>+47 950 00 000</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-1 flex-shrink-0 text-stone-600" />
                <span>hello@villabella.no</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-1 flex-shrink-0 text-stone-600"
                />
                <span>Oslo, Norway</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social, Payment Methods and legal */}
        <div className="border-t border-stone-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex gap-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-stone-300 transition duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-stone-300 transition duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-stone-300 transition duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>

            {/* Payment Methods */}
            <div className="flex gap-6 items-center">
              <span className="text-xs text-stone-500 uppercase tracking-wider font-light">
                Secured Payments:
              </span>
              <div className="flex gap-4 items-center">
                {/* VIPPS */}
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4cd739e8b5a04122bfbd47151e3cded1%2F76bccc4d8a1d4e969483764473bfab63?format=webp&width=800"
                  alt="Vipps payment method"
                  className="w-12 h-8 object-contain rounded"
                />
                {/* VISA */}
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4cd739e8b5a04122bfbd47151e3cded1%2Fe76ff3c9cbc04ba7bea4ddea48c02702?format=webp&width=800"
                  alt="Visa payment method"
                  className="w-12 h-8 object-contain rounded"
                />
                {/* Mastercard */}
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4cd739e8b5a04122bfbd47151e3cded1%2F9fa2bf4c31664545a325a7747a2bf613?format=webp&width=800"
                  alt="Mastercard payment method"
                  className="w-12 h-8 object-contain rounded"
                />
              </div>
            </div>

            <div className="flex gap-6 text-sm text-stone-500">
              <a href="#privacy" className="hover:text-stone-300 transition">
                {t("footer.privacy")}
              </a>
              <a href="#terms" className="hover:text-stone-300 transition">
                {t("footer.terms")}
              </a>
              <a href="#cookies" className="hover:text-stone-300 transition">
                {t("footer.cookies")}
              </a>
            </div>
          </div>

          {/* Logo Section */}
          <div className="py-12 border-t border-stone-800 mt-8">
            <div className="flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fba3f4bd2002c4d26822c396fc3c66d31%2F49cb9620668644b095cd0cfbe9bd3d1e?format=webp&width=800"
                alt="VillaBella Logo"
                className="h-20 sm:h-32 md:h-48 lg:h-64 object-contain opacity-90 hover:opacity-100 transition duration-300"
              />
            </div>
          </div>

          <p className="text-center text-xs text-stone-600 pt-8 border-t border-stone-800">
            {t("footer.copyright")}
          </p>
          <p className="text-center text-xs text-stone-600 pt-4">
            Designed & Developed by{" "}
            <a
              href="https://shopifydevstudio.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600 hover:text-stone-300 transition duration-300 underline"
            >
              Shopifydevstudio.tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

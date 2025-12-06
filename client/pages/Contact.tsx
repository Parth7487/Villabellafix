import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 overflow-hidden"
        style={{
          backgroundColor: "#1c1917",
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F4cd739e8b5a04122bfbd47151e3cded1%2Fbebb4f4dc1f84085a0898f435b21a2c3?format=webp&width=800')`,
          backgroundSize: "auto",
          backgroundPosition: "0 0",
          backgroundRepeat: "repeat",
          backgroundAttachment: "scroll",
        }}
      >
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/90 to-stone-950/90 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-6">
            {t("contact.title") || "Get in Touch"}
          </h1>
          <p className="text-lg text-stone-300 font-light max-w-2xl mx-auto">
            {t("contact.subtitle") ||
              "We'd love to hear from you. Reach out to us with any questions or inquiries."}
          </p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Contact Info Cards */}
            <div className="space-y-8">
              {/* Email */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-stone-900 border border-stone-700 rounded-full flex items-center justify-center">
                    <Mail size={24} className="text-stone-100" />
                  </div>
                  <h3 className="text-lg font-light text-stone-900">
                    {t("contact.email") || "Email"}
                  </h3>
                </div>
                <p className="text-stone-600 font-light ml-16">
                  hello@villabella.no
                </p>
                <p className="text-sm text-stone-500 font-light ml-16 mt-1">
                  {t("contact.emailResponse") ||
                    "We'll respond within 24 hours"}
                </p>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-stone-900 border border-stone-700 rounded-full flex items-center justify-center">
                    <Phone size={24} className="text-stone-100" />
                  </div>
                  <h3 className="text-lg font-light text-stone-900">
                    {t("contact.phone") || "Phone"}
                  </h3>
                </div>
                <p className="text-stone-600 font-light ml-16">
                  +47 99 99 99 99
                </p>
                <p className="text-sm text-stone-500 font-light ml-16 mt-1">
                  {t("contact.phoneHours") || "Monday - Friday, 10am - 6pm CET"}
                </p>
              </div>

              {/* Address */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-stone-900 border border-stone-700 rounded-full flex items-center justify-center">
                    <MapPin size={24} className="text-stone-100" />
                  </div>
                  <h3 className="text-lg font-light text-stone-900">
                    {t("contact.address") || "Address"}
                  </h3>
                </div>
                <p className="text-stone-600 font-light ml-16">
                  Ferner Jacobsens gate 15
                </p>
                <p className="text-stone-600 font-light ml-16">
                  0553 Oslo, Norway
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-light text-stone-900 mb-2">
                    {t("contact.formName") || "Your Name"}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-stone-300 rounded-sm font-light text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 transition"
                    placeholder={
                      t("contact.namePlaceholder") || "Enter your name"
                    }
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-light text-stone-900 mb-2">
                    {t("contact.formEmail") || "Your Email"}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-stone-300 rounded-sm font-light text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 transition"
                    placeholder={
                      t("contact.emailPlaceholder") || "your@email.com"
                    }
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-light text-stone-900 mb-2">
                    {t("contact.formSubject") || "Subject"}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-stone-300 rounded-sm font-light text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 transition"
                    placeholder={
                      t("contact.subjectPlaceholder") || "How can we help?"
                    }
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-light text-stone-900 mb-2">
                    {t("contact.formMessage") || "Message"}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 border border-stone-300 rounded-sm font-light text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 transition resize-none"
                    placeholder={
                      t("contact.messagePlaceholder") ||
                      "Tell us more about your inquiry..."
                    }
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white font-light uppercase tracking-wider text-sm rounded-sm transition duration-300 flex items-center justify-center gap-2"
                >
                  {t("contact.sendMessage") || "Send Message"}
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

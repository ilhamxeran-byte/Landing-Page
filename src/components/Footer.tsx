import { Phone, MapPin, Globe, MessageCircle, Send, Sparkles } from "lucide-react";
import React from "react";
import PixelVerseLogo from "./PixelVerseLogo";
import { useLanguage } from "./LanguageContext";

interface FooterProps {
  onPageChange: (pageId: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const { language, t } = useLanguage();

  const handlePageClick = (pageId: string) => {
    onPageChange(pageId);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { id: "home", label: t("nav.home") },
    { id: "services", label: t("nav.services") },
    { id: "pricing", label: t("nav.pricing") },
    { id: "about", label: t("nav.about") },
    { id: "contact", label: t("nav.contact") },
  ];

  const whatsAppNumber = "+6285733309949";
  const whatsAppMessage = "Halo PixelVerse Studio, saya ingin bertanya lebih lanjut mengenai jasa pembuatan website.";
  const whatsUrl = `https://wa.me/${whatsAppNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(whatsAppMessage)}`;

  return (
    <footer id="kontak" className="relative bg-zinc-950 border-t border-cosmic-border pt-20 pb-8 overflow-hidden">
      {/* Decorative Blur Element */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* Col 1: Brand pitch and socials */}
          <div className="lg:col-span-4 space-y-6">
            <div className="cursor-pointer group" onClick={() => handlePageClick("home")}>
              <PixelVerseLogo size={42} />
            </div>

            <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
              {language === "en"
                ? "Reliable and premier website and landing page design studio helping modern brands establish high-converting online presence."
                : language === "ja"
                ? "高品質なウェブサイトとランディングページを制作する、信頼されるクリエイティブオフィス。CVを重視した設計を提供します。"
                : language === "ar"
                ? "استوديو رائد وموثوق لتصميم مواقع الويب وصفحات الهبوط لمساعدة الأنشطة التجارية على بناء حضور رقمي راقٍ ومدر للربح."
                : language === "zh"
                ? "最受企业信赖的官方网站与线索单页定制开发中心。我们为现代商业提供最具视觉冲击和最高流量转化率的线上旗舰渠道。"
                : "Agency website dan landing page terpercaya di Indonesia yang membantu bisnis membangun kehadiran digital profesional, elegan, dan berorientasi konversi pelanggan."}
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a 
                href={whatsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 hover:bg-cyan-950/20 text-gray-400 hover:text-cyan-400 flex items-center justify-center transition-all duration-300"
                aria-label="Direct WhatsApp Link"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation linkings */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans font-extrabold text-sm text-white tracking-wide uppercase">
              {language === "en" ? "Navigation" : language === "ja" ? "メニュー" : language === "ar" ? "روابط سريعة" : language === "zh" ? "导航目录" : "Navigasi Halaman"}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handlePageClick(link.id)}
                    className="font-sans text-xs sm:text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct contact details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans font-extrabold text-sm text-white tracking-wide uppercase">
              {language === "en" ? "Get in Touch" : language === "ja" ? "お問い合わせ" : language === "ar" ? "تواصل معنا" : language === "zh" ? "联系方式" : "Hubungi Pembuat Web"}
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <a href={whatsUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200">
                  +62 857-3330-9949 (WhatsApp)
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                <span>
                  Malang, Jawa Timur, Indonesia
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter or Instant consultation invitation */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans font-extrabold text-sm text-white tracking-wide uppercase">
              {language === "en" ? "Free Consultation" : language === "ja" ? "無料相談窓口" : language === "ar" ? "استشارة فورية" : language === "zh" ? "旗舰级专属对接" : "Konsultasi Langsung"}
            </h4>
            <p className="font-sans text-xs text-gray-400 leading-relaxed">
              {language === "en"
                ? "Discuss your brilliant business idea with PixelVerse Studio team to lock in premier design solutions."
                : language === "ja"
                ? "PixelVerse Studio のクリエイティブチームとあなたの素晴らしいビジネスのアイデアを相談しましょう。"
                : language === "ar"
                ? "ناقش فكرة مشروعك الابتكاري الآن مع فريق PixelVerse للحصول على أفضل الحلول الذكية والتنافسية."
                : language === "zh"
                ? "与 PixelVerse Studio 精锐开发团队对齐细节，为您锁定当前市场上极具含金量且符合未来化的大设计方案。"
                : "Diskusikan ide bisnis luar biasa Anda bersama tim PixelVerse Studio untuk mendapatkan penawaran desain terbaik."}
            </p>
            
            <a
              href={whatsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-xs py-3 rounded-xl hover:shadow-lg hover:shadow-violet-500/20 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <Sparkles className="w-4.5 h-4.5 text-cyan-400" />
              <span>
                {language === "en" ? "Chat on WhatsApp" : language === "ja" ? "WhatsAppで相談する" : language === "ar" ? "تواصل الآن عبر الواتساب" : language === "zh" ? "微信/WhatsApp直达" : "Mulai Chatting Cepat WA"}
              </span>
            </a>
          </div>

        </div>

        {/* Divider and copyright notices */}
        <div className="pt-8 border-t border-cosmic-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="font-sans">
            &copy; {new Date().getFullYear()} PixelVerse Studio. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <span className="font-mono text-[10px]">PREMIUM CONVERSION AGENCY</span>
            <span className="font-mono text-[10px]">INDONESIA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

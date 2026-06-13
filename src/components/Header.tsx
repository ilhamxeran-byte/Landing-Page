import { useState, useEffect, useRef } from "react";
import { MessageSquare, Phone, Menu, X, Globe, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import PixelVerseLogo from "./PixelVerseLogo";
import { useLanguage, Language } from "./LanguageContext";

interface HeaderProps {
  activePage: string;
  onPageChange: (pageId: string) => void;
}

const languagesList: { code: Language; name: string; flag: string }[] = [
  { code: "id", name: "Indonesia", flag: "🇮🇩" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "zh", name: "中文", flag: "🇨🇳" }
];

export default function Header({ activePage, onPageChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const { language, setLanguage, t, dir } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle clicking outside language dropdown to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (pageId: string) => {
    setMobileMenuOpen(false);
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
  const whatsAppMessage = "Halo PixelVerse Studio, saya ingin berkonsultasi mengenai kebutuhan website/landing page saya.";
  const whatsUrl = `https://wa.me/${whatsAppNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(whatsAppMessage)}`;

  const currentLangObj = languagesList.find((l) => l.code === language) || languagesList[0];

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-cosmic-bg/85 backdrop-blur-md border-b border-cosmic-border"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <div 
            onClick={() => handleNavClick("home")} 
            className="cursor-pointer group flex items-center"
          >
            <PixelVerseLogo size={42} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-cosmic-card/40 border border-cosmic-border/60 py-1.5 px-2 rounded-full">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activePage === link.id
                    ? "bg-violet-600/20 text-cyan-400 border border-violet-500/30 shadow-sm shadow-violet-500/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Header Controls (Desktop) */}
          <div className="hidden md:flex items-center space-x-3" ref={dropdownRef}>
            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-cosmic-card/85 hover:bg-cosmic-card border border-cosmic-border text-gray-300 hover:text-white text-sm font-medium transition-all duration-200"
                aria-label="Select Language"
              >
                <span className="text-base">{currentLangObj.flag}</span>
                <span className="uppercase text-xs tracking-wider">{currentLangObj.code}</span>
                <Globe className="w-3.5 h-3.5 text-gray-500" />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className={`absolute mt-2 w-48 rounded-xl bg-cosmic-card border border-cosmic-border p-1.5 shadow-xl z-50 ${
                      dir === "rtl" ? "left-0" : "right-0"
                    }`}
                  >
                    <div className="px-3 py-1.5 border-b border-white/5 mb-1.5">
                      <span className="text-[10px] uppercase tracking-wider font-extrabold text-gray-400">
                        {t("lang.name")}
                      </span>
                    </div>
                    <div className="space-y-0.5">
                      {languagesList.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                            language === lang.code
                              ? "bg-violet-600/30 text-cyan-400 border border-violet-500/20"
                              : "text-gray-300 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                            <span className="text-base">{lang.flag}</span>
                            <span>{lang.name}</span>
                          </div>
                          {language === lang.code && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Business Contact Button */}
            <div className="hidden lg:flex items-center">
              <a
                href={whatsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-sm px-5 py-2.5 rounded-xl border border-violet-400/20 shadow-md shadow-violet-500/20 hover:shadow-violet-500/30 transform hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <Phone className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                <span>+62 857-3330-9949</span>
              </a>
            </div>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Language Switcher Button (Mobile) */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-center p-2.5 rounded-xl bg-cosmic-card border border-cosmic-border text-gray-300"
                aria-label="Bahasa"
              >
                <span className="text-base">{currentLangObj.flag}</span>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute mt-2 w-44 right-0 rounded-xl bg-cosmic-card border border-cosmic-border p-1.5 shadow-xl z-50"
                  >
                    {languagesList.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold ${
                          language === lang.code
                            ? "bg-violet-600/30 text-cyan-400 border border-violet-500/20"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <span className="text-base">{lang.flag}</span>
                          <span>{lang.name}</span>
                        </div>
                        {language === lang.code && <Check className="w-3 h-3 text-cyan-400" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href={whatsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center p-2.5 rounded-xl bg-violet-600/20 text-cyan-400 border border-violet-500/30"
              aria-label="Hubungi via WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-cosmic-card/80 border border-cosmic-border text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Slidedown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden w-full overflow-hidden border-t border-cosmic-border bg-cosmic-bg/95 backdrop-blur-xl"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-200 flex items-center ${
                    activePage === link.id
                      ? "bg-violet-600/25 text-cyan-400 border-l-4 border-l-violet-500 pl-3"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              
              <div className="pt-4 border-t border-cosmic-border/50">
                <a
                  href={whatsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold py-3 rounded-xl border border-violet-400/20 shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t("nav.mobile_cta")}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

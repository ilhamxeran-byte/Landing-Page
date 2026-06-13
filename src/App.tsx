import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Check, CheckCircle2, ChevronRight, X, Sparkles, Phone, Mail, MapPin, 
  MessageSquare, Star, ArrowUpRight, ArrowRight, Zap, Globe, ShieldCheck, 
  Layers, Info, MessageCircle, Heart, Trophy, Target, Eye 
} from "lucide-react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import PricingCalculator from "./components/PricingCalculator";
import ClientBlueprint from "./components/ClientBlueprint";
import AboutFAQ from "./components/AboutFAQ";
import Footer from "./components/Footer";
import { useLanguage } from "./components/LanguageContext";

export default function App() {
  const { t, language } = useLanguage();
  const [activePage, setActivePage] = useState<"home" | "services" | "pricing" | "about" | "contact">("home");
  const [selectedServiceId, setSelectedServiceId] = useState("landing-page");

  // Contact Form States
  const [contactName, setContactName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [selectedService, setSelectedService] = useState("business-website");
  const [estimatedBudget, setEstimatedBudget] = useState("Rp2.5M - Rp5M");
  const [contactMessage, setContactMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    if (serviceId === "maintenance") {
      setActivePage("contact");
    } else {
      setActivePage("pricing");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePageChange = (pageId: string) => {
    setActivePage(pageId as any);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName) return;

    // Compile dynamic structured text msg for instant WhatsApp connection
    const textMsg = `Halo Tim PixelVerse Studio!\n\nPerkenalkan saya *${contactName}* dari *${businessName || "Bisnis Mandiri"}*.\n\nSaya tertarik berkonsultasi mengenai pembuatan website dengan rincian:\n- Layanan: *${selectedService.toUpperCase()}*\n- Estimasi Anggaran: *${estimatedBudget}*\n- Kebutuhan/Catatan: _"${contactMessage || "Ingin mendiskusikan penawaran awal"}"_\n\nMohon informasi selanjutnya, terima kasih!`;
    const waUrl = `https://wa.me/6285733309949?text=${encodeURIComponent(textMsg)}`;
    
    window.open(waUrl, "_blank");
    setFormSubmitted(true);
  };

  // FAQ list specifically optimized for pricing page
  const pricingFaqs = [
    {
      q: "Bagaimana sistem termin pembayaran proyek?",
      a: "Kami menggunakan alur standar industri: 50% Down Payment (DP) untuk meresmikan penulangan desain dan pemesanan infrastruktur, dan 50% Pelunasan setelah peninjauan web final disetujui penuh sebelum launching domain premium live."
    },
    {
      q: "Apakah ada biaya bulanan / tahunan perpanjangan website?",
      a: "Tahun pertama 100% GRATIS Domain premium (.com / .id) + Cloud hosting berkecepatan tinggi. Perpanjangan tahunan berikutnya hanya berkisar Rp 590.000 s/d Rp 950.000 per tahun untuk sewa server hosting, lisensi, dan pemeliharaan domain, tanpa ada biaya tagihan tersembunyi."
    },
    {
      q: "Apakah kami mendapatkan file source code / hak milik penuh?",
      a: "Tentu saja! Keamanan aset Anda adalah prioritas. Kami menyerahkan kredensial admin CMS, dokumentasi video tutorial pengelolaan, dan hak kepemilikan source code secara utuh kepada klien setelah proses pelunasan selesai dilakukan."
    },
    {
      q: "Bisakah kami beralih paket dari Starter ke Business Website nantinya?",
      a: "Sangat bisa! Struktur arsitektur codebase yang kami bangun sangat modular dan fleksibel. Anda dapat mengupgrade landing page 1 halaman Anda menjadi sistem multi-portal bisnis lengkap kapan saja tanpa perlu membangun ulang dari awal."
    }
  ];

  const [openPricingFaq, setOpenPricingFaq] = useState<number | null>(0);

  return (
    <div className="relative min-h-screen bg-cosmic-bg text-gray-100 selection:bg-violet-600/50 selection:text-white bg-cosmic-radial">
      {/* Dynamic Ambient Glowing Orbs */}
      <div className="absolute top-0 left-0 w-full h-[600px] pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[130px] animate-pulse-slow"></div>
        <div className="absolute top-[200px] right-[-100px] w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[110px]"></div>
      </div>

      {/* Floating Header Navbar */}
      <Header activePage={activePage} onPageChange={handlePageChange} />

      {/* Page Routing Contents container */}
      <main id="main-content" className="relative z-10 pt-10">
        <AnimatePresence mode="wait">
          
          {/* PAGE 1: HOME */}
          {activePage === "home" && (
            <motion.div
              key="home-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <Hero />

              {/* Home Page: Brand Trust Indicators */}
              <section className="py-12 bg-black/40 border-y border-cosmic-border/30">
                <div className="max-w-7xl mx-auto px-4 text-center">
                  <p className="font-mono text-[10px] uppercase font-semibold text-gray-400 tracking-[0.2em] mb-6">
                    {t("hero.trust")}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="font-sans font-black text-white text-base tracking-wider flex items-center space-x-1">
                      <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                      <span>{language === "en" ? "RESTAURANT" : language === "ja" ? "レストラン" : language === "ar" ? "مطعم" : language === "zh" ? "餐饮机构" : "RESTORAN"}</span>
                    </span>
                    <span className="font-sans font-black text-white text-base tracking-wider flex items-center space-x-1">
                      <Sparkles className="w-4 h-4 text-pink-400" />
                      <span>{language === "en" ? "FASHION" : language === "ja" ? "ファッション" : language === "ar" ? "أزياء" : language === "zh" ? "时尚品牌" : "FASHION"}</span>
                    </span>
                    <span className="font-sans font-black text-white text-base tracking-wider flex items-center space-x-1">
                      <Globe className="w-4 h-4 text-blue-400" />
                      <span>{language === "en" ? "PROPERTY" : language === "ja" ? "不動産" : language === "ar" ? "عقارات" : language === "zh" ? "房地产" : "PROPERTI"}</span>
                    </span>
                    <span className="font-sans font-black text-white text-base tracking-wider flex items-center space-x-1">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>{language === "en" ? "SMB PARTNER" : language === "ja" ? "中小企業" : language === "ar" ? "المشاريع الصغيرة" : language === "zh" ? "小微企业" : "UMKM MITRA"}</span>
                    </span>
                    <span className="font-sans font-black text-white text-base tracking-wider flex items-center space-x-1">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <span>{language === "en" ? "CONSULTANT" : language === "ja" ? "コンサルタント" : language === "ar" ? "مستشار" : language === "zh" ? "专业顾问" : "KONSULTAN"}</span>
                    </span>
                  </div>
                </div>
              </section>

              {/* Home Page: Pricing Preview */}
              <section className="relative py-24 bg-cosmic-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 bg-cyan-950/40 border border-cyan-800/20 px-3 py-1 rounded-full">
                      PRICING PREVIEW
                    </span>
                    <h2 className="mt-4 font-sans font-black text-3xl sm:text-4xl text-white tracking-tight">
                      {t("pricing.title")}
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-4 rounded-full"></div>
                    <p className="mt-4 text-gray-400">
                      {t("pricing.desc")}
                    </p>
                  </div>

                  {/* Teaser columns */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    
                    {/* Starter Teaser Card */}
                    <div className="p-6 rounded-2xl bg-cosmic-card border border-cosmic-border flex flex-col justify-between">
                      <div>
                        <span className="font-mono text-[9px] uppercase font-black text-gray-500 tracking-wider">STARTER PACK</span>
                        <h3 className="font-sans font-black text-xl text-white mt-1">Landing Page</h3>
                        <p className="font-mono text-xs text-cyan-400 font-bold mt-2">Rp1.900.000</p>
                        <ul className="mt-4 space-y-2 text-xs text-gray-400">
                          <li className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-cyan-400" />
                            <span>Desain 1 Halaman Responsif</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-cyan-400" />
                            <span>Tombol Direct WA &amp; Maps</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-cyan-400" />
                            <span>Basic SEO &amp; Security SSL</span>
                          </li>
                        </ul>
                      </div>
                      <button 
                        onClick={() => handlePageChange("pricing")}
                        className="mt-6 w-full py-2.5 rounded-xl border border-cosmic-border bg-white/5 hover:bg-violet-600 hover:border-violet-500 text-xs text-white font-bold transition-all duration-300"
                      >
                        Pilih Starter Pack
                      </button>
                    </div>

                    {/* Pro Teaser Card */}
                    <div className="p-6 rounded-2xl bg-cosmic-card border-2 border-violet-500/45 flex flex-col justify-between relative shadow-lg shadow-violet-500/5">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-indigo-600 border border-violet-400/20 px-3 py-0.5 rounded-full">
                        <span className="font-mono text-[8px] uppercase font-black tracking-widest text-white">TERPOPULER 🔥</span>
                      </div>
                      <div>
                        <span className="font-mono text-[9px] uppercase font-black text-violet-400 tracking-wider">BUSINESS STYLE</span>
                        <h3 className="font-sans font-black text-xl text-white mt-1">Website Bisnis</h3>
                        <p className="font-mono text-xs text-emerald-400 font-bold mt-2">Rp5.900.000</p>
                        <ul className="mt-4 space-y-2 text-xs text-gray-400">
                          <li className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-cyan-400" />
                            <span>5 – 8 Halaman Lengkap</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-cyan-400" />
                            <span>Gratis Domain .com/.id 1 Tahun</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-cyan-400" />
                            <span>Blog / Galeri Produk &amp; Maps</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-cyan-400" />
                            <span>Dukungan Google Analytics</span>
                          </li>
                        </ul>
                      </div>
                      <button 
                        onClick={() => handlePageChange("pricing")}
                        className="mt-6 w-full py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 border border-violet-400/20 text-xs text-white font-bold shadow-md transition-all duration-300"
                      >
                        Pilih Paket Pro
                      </button>
                    </div>

                    {/* Custom Teaser Card */}
                    <div className="p-6 rounded-2xl bg-cosmic-card border border-cosmic-border flex flex-col justify-between">
                      <div>
                        <span className="font-mono text-[9px] uppercase font-black text-cyan-400 tracking-wider">ENTERPRISE SYSTEM</span>
                        <h3 className="font-sans font-black text-xl text-white mt-1">Website Custom</h3>
                        <p className="font-mono text-xs text-gray-400 mt-2">Katalog / Sistem Booking</p>
                        <ul className="mt-4 space-y-2 text-xs text-gray-400">
                          <li className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-cyan-400" />
                            <span>Kustom Desain Sesuai Request</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-cyan-400" />
                            <span>Sistem Booking / Listing / CRM</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-cyan-400" />
                            <span>Garansi Support Penuh 60 Hari</span>
                          </li>
                        </ul>
                      </div>
                      <button 
                        onClick={() => handlePageChange("pricing")}
                        className="mt-6 w-full py-2.5 rounded-xl border border-cosmic-border bg-white/5 hover:bg-violet-600 hover:border-violet-500 text-xs text-white font-bold transition-all duration-300"
                      >
                        Pilih Paket Custom
                      </button>
                    </div>

                  </div>

                  <div className="text-center mt-12">
                    <button
                      onClick={() => handlePageChange("pricing")}
                      className="inline-flex items-center space-x-2 bg-violet-600/15 border border-violet-500/30 text-cyan-400 text-sm px-6 py-3 rounded-full hover:bg-violet-600 hover:text-white transition-all duration-300"
                    >
                      <span>Bandingkan Detail Seluruh Fitur Paket</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </section>

              {/* Portfolio showcase snippet on Home */}
              <Portfolio />
            </motion.div>
          )}

          {/* PAGE 2: SERVICES */}
          {activePage === "services" && (
            <motion.div
              key="services-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="py-16 md:py-24"
            >
              {/* Services Hero Header */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative">
                <div className="p-8 sm:p-12 rounded-3xl bg-cosmic-card/30 border border-cosmic-border/60 relative overflow-hidden text-center max-w-4xl mx-auto backdrop-blur-sm">
                  <div className="absolute top-0 left-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none"></div>
                  
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 bg-cyan-950/40 border border-cyan-800/35 px-4 py-1.5 rounded-full">
                    ⚡ OUTSTANDING SERVICES
                  </span>
                  
                  <h1 className="mt-6 font-sans font-black text-4xl sm:text-5xl text-white tracking-tight leading-[1.1]">
                    Layanan Pembuatan Website dan <span className="text-gradient-primary">Landing Page Kami</span>
                  </h1>
                  
                  <p className="mt-6 text-gray-300 font-medium text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                    Kami membangun arsitektur website berkinerja tinggi, optimasi kecepatan, setup SEO dasar, serta konversi direct WhatsApp untuk mendukung kelancaran promosi Anda.
                  </p>
                </div>
              </div>

              {/* Renders Services original detailed component with props */}
              <Services onSelectService={handleSelectService} onPageChange={handlePageChange} />

              {/* Services Detail List */}
              <section className="py-20 bg-zinc-950/60 border-t border-cosmic-border/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="font-mono text-[10px] uppercase font-black text-violet-400 tracking-wider">DETAILED SPECS</span>
                    <h2 className="font-sans font-black text-2xl sm:text-3xl text-white mt-2">Dukungan Standar Kualitas Setiap Paket</h2>
                    <p className="text-gray-400 text-xs sm:text-sm mt-3">PixelVerse Studio menetapkan komitmen performa demi kepuasan mitra beriklan.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {[
                      { title: "Optimasi Kecepatan", desc: "Target 90%+ Mobile PageSpeed Score. Website memuat kurang dari 2 detik demi menekan bounce rate iklan.", icon: Zap, color: "text-yellow-400" },
                      { title: "SOP SEO Setup", desc: "Integrasi struktur metadata standar, sitemap Google, dan optimasi tag robot agar mudah terindeks Google.", icon: Globe, color: "text-blue-400" },
                      { title: "Mobile Responsive", desc: "Kami memastikan seluruh tautan, tombol, teks, dan menu berjalan lancar di layar mana saja termasuk handphone cerdas.", icon: Layers, color: "text-purple-400" },
                      { title: "Keamanan Server SSL", desc: "Koneksi HTTPS berlisensi SSL gratis menjaga kerahasiaan pertukaran data formulir prospek secara utuh.", icon: ShieldCheck, color: "text-emerald-400" }
                    ].map((item, idx) => {
                      const IconComp = item.icon;
                      return (
                        <div key={idx} className="p-6 rounded-2xl bg-cosmic-card border border-cosmic-border flex flex-col justify-between">
                          <div>
                            <div className="p-3 bg-white/5 border border-white/10 rounded-xl w-max mb-5">
                              <IconComp className={`w-5 h-5 ${item.color}`} />
                            </div>
                            <h4 className="font-sans font-black text-sm text-white">{item.title}</h4>
                            <p className="font-sans text-xs text-gray-400 mt-2 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* Integrating Portfolio on Services Page for Immediate Conversion */}
              <Portfolio />
            </motion.div>
          )}

          {/* PAGE 3: PRICING */}
          {activePage === "pricing" && (
            <motion.div
              key="pricing-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="py-16 md:py-24"
            >
              {/* Pricing Hero Header */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 bg-cyan-950/40 border border-cyan-800/25 px-4 py-1.5 rounded-full">
                  💰 TRANSPARENT INVESTMENTS
                </span>
                <h1 className="mt-6 font-sans font-black text-4xl sm:text-5xl text-white tracking-tight leading-[1.1]">
                  Daftar Paket Investasi &amp; <span className="text-gradient-primary">Kalkulator Estimasi</span>
                </h1>
                <p className="mt-6 text-gray-300 font-medium text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                  Silakan tinjau paket andalan kami atau gunakan kalkulator estimasi di bawah untuk menaksir harga secara real-time sesuai preferensi fitur Anda.
                </p>
              </div>

              {/* Renders PricingCalculator containing calculator slider + contact inquiry */}
              <PricingCalculator selectedServiceId={selectedServiceId} />

              {/* Side-by-Side Vercel-style Feature Comparison Table */}
              <section className="py-20 bg-zinc-950/40 border-t border-cosmic-border/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="font-mono text-xs uppercase text-violet-400 font-bold tracking-wider">COMPARISON CHART</span>
                    <h2 className="font-sans font-black text-2xl sm:text-3xl text-white mt-1">Perbandingan Fitur Terperinci</h2>
                    <p className="text-gray-400 text-xs sm:text-sm mt-2">Bandingkan kapabilitas teknis komprehensif dari setiap paket pengerjaan.</p>
                  </div>

                  {/* Feature Table Grid */}
                  <div className="overflow-x-auto w-full border border-cosmic-border/30 rounded-2xl bg-cosmic-card/30 backdrop-blur-sm">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-cosmic-border bg-cosmic-bg/40 font-mono text-[10px] text-gray-400 uppercase tracking-wider">
                          <th className="p-4 sm:p-5">Spesifikasi Detail</th>
                          <th className="p-4 sm:p-5 text-center">Starter</th>
                          <th className="p-4 sm:p-5 text-center text-cyan-400 font-bold">Professional</th>
                          <th className="p-4 sm:p-5 text-center text-violet-400 font-bold">Custom Website</th>
                          <th className="p-4 sm:p-5 text-center">Maintenance</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-cosmic-border/30 text-gray-300">
                        {[
                          { feat: "Jumlah Halaman", starter: "1 Halaman", pro: "5 – 8 Halaman", custom: "Custom Layout", maint: "Sesuai Request" },
                          { feat: "Bantuan Copywriting", starter: "Teks Disediakan Klien", pro: "Optimasi Copywriting Core", custom: "Full SEO Copywriting", maint: "Update Konten Bulanan" },
                          { feat: "Google PageSpeed Score", starter: "90% Target", pro: "95% Target Score", custom: "98% Target Maksimal", maint: "Uptime Monitoring" },
                          { feat: "SEO Setup Core", starter: "Basic Meta Tags", pro: "Sitemap / Analytics Integration", custom: "Full Search Console Audit", maint: "Laporan Teknis Mingguan" },
                          { feat: "Server & Hosting 1 Th", starter: "Optional Buffer", pro: "Gratis Cloud Hosting Premium", custom: "Gratis High-Spec Server", maint: "Backup Buffer Mingguan" },
                          { feat: "Domain .com / .id", starter: "Pakai Domain Sendiri", pro: "Gratis Registrasi 1 Th", custom: "Gratis Registrasi 1 Th", maint: "Monitoring DNS SSL" },
                          { feat: "Garansi Pasca Serah", starter: "14 Hari Garansi Bug", pro: "30 Hari Garansi Bug", custom: "60 Hari Garansi Support", maint: "Pemeliharaan Kontinu" },
                        ].map((row, idx) => (
                          <tr key={idx} className="hover:bg-white/5 transition-colors">
                            <td className="p-4 sm:p-5 font-semibold text-white">{row.feat}</td>
                            <td className="p-4 sm:p-5 text-center">{row.starter}</td>
                            <td className="p-4 sm:p-5 text-center text-cyan-300 font-medium">{row.pro}</td>
                            <td className="p-4 sm:p-5 text-center text-violet-300 font-medium">{row.custom}</td>
                            <td className="p-4 sm:p-5 text-center">{row.maint}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Pricing FAQ accordion block */}
              <section className="py-20 bg-cosmic-bg border-t border-cosmic-border/30">
                <div className="max-w-4xl mx-auto px-4">
                  <div className="text-center mb-12">
                    <span className="font-mono text-[9px] uppercase font-bold text-cyan-400 bg-cyan-950/40 border border-cyan-800/20 px-3 py-1 rounded">PRICING FAQS</span>
                    <h3 className="font-sans font-black text-2xl text-white mt-1">FAQ Terkait Pembiayaan</h3>
                  </div>

                  <div className="space-y-4">
                    {pricingFaqs.map((faq, index) => {
                      const isOpen = openPricingFaq === index;
                      return (
                        <div
                          key={index}
                          className="rounded-2xl border border-cosmic-border bg-cosmic-card overflow-hidden transition-all duration-200"
                        >
                          <button
                            onClick={() => setOpenPricingFaq(isOpen ? null : index)}
                            className="w-full text-left p-5 flex items-center justify-between gap-4 font-sans font-extrabold text-xs sm:text-sm text-zinc-100 hover:text-white"
                          >
                            <span>{faq.q}</span>
                            <span className="flex-shrink-0 p-1 rounded-lg bg-white/5 text-gray-400">
                              {isOpen ? "-" : "+"}
                            </span>
                          </button>
                          
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden bg-black/20"
                              >
                                <p className="p-5 pt-0 font-sans text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-cosmic-border/30">
                                  {faq.a}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* PAGE 4: ABOUT */}
          {activePage === "about" && (
            <motion.div
              key="about-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="py-16 md:py-24"
            >
              {/* About Hero Header */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 bg-cyan-950/40 border border-cyan-800/25 px-4 py-1.5 rounded-full">
                  🏢 ABOUT PIXELVERSE
                </span>
                <h1 className="mt-6 font-sans font-black text-4xl sm:text-5xl text-white tracking-tight leading-[1.1]">
                  Agensi Pembuat Website &amp; <span className="text-gradient-primary">Partner Bisnis Anda</span>
                </h1>
                <p className="mt-6 text-gray-300 font-medium text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                  Didedikasikan penuh untuk menghadirkan desain kelas premium, performa optimal, serta alur pengerjaan transparan yang membantu bisnis melompat secara digital.
                </p>
              </div>

              {/* Story, Vision, USP, values */}
              <AboutFAQ />

              {/* Partnerships and detailed workflow Blueprint SOP (ClientBlueprint component) */}
              <div className="border-t border-cosmic-border/30 pt-10">
                <ClientBlueprint />
              </div>
            </motion.div>
          )}

          {/* PAGE 5: CONTACT */}
          {activePage === "contact" && (
            <motion.div
              key="contact-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="py-16 md:py-24"
            >
              {/* Contact Hero Header */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 bg-cyan-950/40 border border-cyan-800/25 px-4 py-1.5 rounded-full">
                  📞 DIRECT CHANNELS
                </span>
                <h1 className="mt-6 font-sans font-black text-4xl sm:text-5xl text-white tracking-tight leading-[1.1]">
                  Hubungi Tim PixelVerse &amp; <span className="text-gradient-primary">Ajukan Ketersediaan</span>
                </h1>
                <p className="mt-6 text-gray-300 font-medium text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                  Konsultasikan ide cemerlang Anda secara instan. Ajukan spesifikasi custom untuk memperoleh estimasi biaya pengerjaan resmi.
                </p>
              </div>

              {/* Main Column Forms and Details */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  
                  {/* Left Column Info Card */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="p-6 sm:p-8 rounded-2xl bg-cosmic-card border border-cosmic-border space-y-6">
                      <div className="flex items-center space-x-3 pb-3 border-b border-cosmic-border">
                        <span className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/25 text-violet-400">
                          <Info className="w-5 h-5" />
                        </span>
                        <div>
                          <h4 className="font-sans font-black text-base text-white">Hubungi Kami Secara Langsung</h4>
                          <span className="text-xs text-gray-500 font-mono uppercase">100% Respons Cepat dalam 2 jam</span>
                        </div>
                      </div>

                      <div className="space-y-5 text-gray-300 text-xs sm:text-sm">
                        <a 
                          href="https://wa.me/6285733309949?text=Halo%25-30%20PixelVerse%20Studio%20" 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-start space-x-3 p-4 rounded-xl bg-black/40 border border-white/5 hover:border-cyan-500/25 hover:bg-cyan-950/20 group transition-all duration-300"
                        >
                          <Phone className="w-5 h-5 text-cyan-400 mt-0.5 group-hover:scale-110 transition-transform" />
                          <div>
                            <span className="block font-mono text-[9px] uppercase tracking-wider text-gray-550">WhatsApp Business</span>
                            <span className="font-bold text-white group-hover:text-cyan-400 transition-colors">+62 857-3330-9949</span>
                            <p className="text-[10px] text-gray-400 mt-1">Respons cepat chat interaktif harian (09.00 - 21.00 WIB)</p>
                          </div>
                        </a>

                        <div className="flex items-start space-x-3 p-4 rounded-xl bg-black/40 border border-white/5">
                          <MapPin className="w-5 h-5 text-pink-400 mt-0.5" />
                          <div>
                            <span className="block font-mono text-[9px] uppercase tracking-wider text-gray-550">Lokasi / Pusat Operasi</span>
                            <span className="font-bold text-white">Malang, Jawa Timur, Indonesia</span>
                            <p className="text-[10px] text-gray-400 mt-1">Tim kami siap mengadakan pertemuan fisik atau evaluasi digital melalui zoom.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-gradient-to-r from-violet-950/40 via-violet-950/20 to-transparent border border-violet-850/40 flex items-center space-x-3.5">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 animate-pulse" />
                      <div className="text-xs">
                        <span className="text-white font-bold block">GRATIS DESAIN AWAL</span>
                        <p className="text-gray-400 mt-0.5">Dapatkan draf blueprint wireframe layout gratis setelah diskusi live.</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column Stripe-style Interactive Contact Form Component */}
                  <div className="lg:col-span-7">
                    <form 
                      onSubmit={handleContactSubmit}
                      className="p-6 sm:p-8 rounded-2xl bg-cosmic-card border border-cosmic-border space-y-6 relative"
                    >
                      <h3 className="font-sans font-black text-xl text-white">Ajukan Konsultasi Estimasi Biaya</h3>
                      <div className="w-10 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mt-2"></div>
                      <p className="text-gray-400 text-xs sm:text-sm">Silakan isi detail singkat proyek Anda, lalu tekan tombol usulkan.</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-sans text-xs sm:text-sm">
                        <div className="space-y-1">
                          <label className="text-gray-400 font-semibold uppercase font-mono text-[10px] block">Nama Lengkap Anda *</label>
                          <input 
                            type="text" 
                            required
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            placeholder="Contoh: Pak Budi"
                            className="w-full bg-black/40 border border-cosmic-border px-3 py-2.5 rounded-xl text-white outline-none focus:border-violet-500"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-gray-400 font-semibold uppercase font-mono text-[10px] block">Nama Bisnis / Usaha Anda</label>
                          <input 
                            type="text" 
                            value={businessName}
                            onChange={(e) => setBusinessName(e.target.value)}
                            placeholder="Contoh: Kopi Nusantara"
                            className="w-full bg-black/40 border border-cosmic-border px-3 py-2.5 rounded-xl text-white outline-none focus:border-violet-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-sans text-xs sm:text-sm">
                        <div className="space-y-1">
                          <label className="text-gray-400 font-semibold uppercase font-mono text-[10px] block font-bold">Kategori Layanan Utama</label>
                          <select 
                            value={selectedService}
                            onChange={(e) => setSelectedService(e.target.value)}
                            className="w-full bg-black/40 border border-cosmic-border px-3 py-2.5 rounded-xl text-white outline-none focus:border-violet-500"
                          >
                            <option value="landing-page">Landing Page (Mulai Rp1.9M)</option>
                            <option value="business-website">Website Bisnis (Mulai Rp5.9M)</option>
                            <option value="custom-website">Sistem Website Custom (Mulai Rp12.9M)</option>
                            <option value="maintenance">Website Maintenance Bulanan</option>
                          </select>
                        </div>

                        <div className="space-y-1">
                          <label className="text-gray-400 font-semibold uppercase font-mono text-[10px] block">Estimasi Rentang Anggaran</label>
                          <select 
                            value={estimatedBudget}
                            onChange={(e) => setEstimatedBudget(e.target.value)}
                            className="w-full bg-black/40 border border-cosmic-border px-3 py-2.5 rounded-xl text-white outline-none focus:border-violet-500"
                          >
                            <option value="Di bawah Rp2M">Di bawah Rp2.000.000</option>
                            <option value="Rp2.5M - Rp5M">Rp 2.000.000 – Rp 5.000.000</option>
                            <option value="Rp5M - Rp10M">Rp 5.000.000 – Rp 10.000.000</option>
                            <option value="Rp10M+">Di atas Rp 10.000.000+</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1 font-sans text-xs sm:text-sm">
                        <label className="text-gray-400 font-semibold uppercase font-mono text-[10px] block">Gambaran Singkat Proyek / Pesan Tambahan</label>
                        <textarea 
                          rows={4}
                          value={contactMessage}
                          onChange={(e) => setContactMessage(e.target.value)}
                          placeholder="Sampaikan rincian halaman yang anda inginkan, referensi website yang anda sukai, atau target bisnis penjualan website anda..."
                          className="w-full bg-black/40 border border-cosmic-border px-3 py-2.5 rounded-xl text-white outline-none focus:border-violet-500 text-xs font-sans leading-relaxed"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-650 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-violet-500/20 active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-2.5"
                        >
                          <Phone className="w-5 h-5 text-cyan-300" />
                          <span>Mulai Kirim via WhatsApp Baru</span>
                        </button>
                      </div>

                      {/* Floating Confirmation messages */}
                      <AnimatePresence>
                        {formSubmitted && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="bg-emerald-500/10 border border-emerald-500/35 p-4 rounded-xl flex items-start space-x-3 mt-4"
                          >
                            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <div className="text-xs text-gray-300">
                              <span className="font-bold text-white block">Form Berhasil Dikirim ke WA!</span>
                              Format chat estimasi biaya telah dikompilasi secara otomatis dan draf dikirim langsung ke WhatsApp pembuat web. Tim kami akan merespon dalam waktu dekat!
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </form>
                  </div>

                </div>
              </div>

              {/* General support FAQs */}
              <AboutFAQ />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Persistent General Footer */}
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}

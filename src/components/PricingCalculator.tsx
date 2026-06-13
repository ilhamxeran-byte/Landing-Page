import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calculator, CheckSquare, Square, Check, MessageSquare, ArrowRight, Sparkles, Send, ShieldAlert, BadgeInfo } from "lucide-react";
import { InquiryFormState } from "../types";
import { useLanguage } from "./LanguageContext";

interface PricingCalculatorProps {
  selectedServiceId: string;
}

export default function PricingCalculator({ selectedServiceId }: PricingCalculatorProps) {
  const { language } = useLanguage();

  // Base plan packages setup
  const basePackages = [
    { id: "landing-page", name: "STARTER", basePrice: 1900000, duration: language === "en" ? "3 - 5 Business Days" : language === "ja" ? "3〜5営業日" : language === "ar" ? "3 - 5 أيام عمل" : language === "zh" ? "3 - 5 个工作日" : "3 – 5 Hari Kerja" },
    { id: "business-website", name: "PROFESSIONAL", basePrice: 5900000, duration: language === "en" ? "7 - 14 Business Days" : language === "ja" ? "7〜14営業日" : language === "ar" ? "7 - 14 يوم عمل" : language === "zh" ? "7 - 14 个工作日" : "7 – 14 Hari Kerja" },
    { id: "premium-website", name: "BUSINESS", basePrice: 12900000, duration: language === "en" ? "14 - 30 Business Days" : language === "ja" ? "14〜30営業日" : language === "ar" ? "14 - 30 يوم عمل" : language === "zh" ? "14 - 30 个工作日" : "14 – 30 Hari Kerja" },
    { id: "maintenance", name: "MAINTENANCE", basePrice: 500000, duration: language === "en" ? "Monthly" : language === "ja" ? "月額プラン" : language === "ar" ? "شهريًا" : language === "zh" ? "按月维护" : "Bulanan" },
  ];

  // Niche list suitability
  const niches = [
    { value: "umkm-retail", label: language === "en" ? "SME / Retail Shop" : language === "ja" ? "中小企業・小売店" : language === "ar" ? "المشاريع الصغيرة وتجارة التجزئة" : language === "zh" ? "中小企业与新零售店" : "UMKM / Toko Ritel" },
    { value: "restoran-cafe", label: language === "en" ? "Restaurant & Cafe" : language === "ja" ? "飲食店・カフェ" : language === "ar" ? "المطاعم والمقاهي" : language === "zh" ? "品牌餐饮与咖啡厅" : "Restoran & Cafe" },
    { value: "fashion-brand", label: language === "en" ? "Fashion Brand" : language === "ja" ? "アパレル・ヘルス" : language === "ar" ? "علامة ملابس وأزياء" : language === "zh" ? "时尚及潮流服饰品牌" : "Fashion Brand" },
    { value: "properti-broker", label: language === "en" ? "Property Agency" : language === "ja" ? "不動産総合仲介" : language === "ar" ? "الاستثمار والوكالة العقارية" : language === "zh" ? "房地产经纪公司" : "Keagenan Properti" },
    { value: "profesional-konsultan", label: language === "en" ? "Freelancer & Consultant" : language === "ja" ? "専門士・コンサルタント" : language === "ar" ? "المستشارون والأطباء والمستقلون" : language === "zh" ? "自由职业与专家顾问" : "Freelancer & Konsultan" },
    { value: "klinik-sehat", label: language === "en" ? "Medical Clinics" : language === "ja" ? "クリニック・デンタル" : language === "ar" ? "العيادات السكنية والطبية" : language === "zh" ? "专业医疗及专科诊所" : "Klinik & Klinik Medis" },
    { value: "jasa-lokal", label: language === "en" ? "Local Services Agency" : language === "ja" ? "地域サービス代理店" : language === "ar" ? "الخدمات والمهن الحرة المحلية" : language === "zh" ? "本地特色生活服务" : "Jasa Keagenan Lokal" },
    { value: "lainnya", label: language === "en" ? "Other Business Niche" : language === "ja" ? "その他業種" : language === "ar" ? "مجالات أخرى مختلفة" : language === "zh" ? "其他未知细分行业" : "Niche Lainnya" },
  ];

  // Additional Conversion Boosters addons list
  const boostersList = [
    { 
      id: "wa-gateway", 
      name: language === "en" ? "WhatsApp Gateway Chatbot" : language === "ja" ? "WhatsApp接客ボット自動連携" : language === "ar" ? "تكامل وبوت للرد التلقائي للواتساب" : language === "zh" ? "自适应WhatsApp客服网关联接" : "Integrasi WA Chatbot Gateway", 
      price: 350000, 
      desc: language === "en" ? "Auto-route client requests directly into multi-staff WhatsApp accounts." : language === "ja" ? "作成したお問い合せ・注文を即時に複数の担当者携帯へ自動ルーティングします。" : language === "ar" ? "تحويل الاستشارات والرسائل الواردة بشكل تلقائي لأرقام الموظفين عبر الواتساب." : language === "zh" ? "实现一键无延迟将订单抄送路由至多位运营客服的专属WhatsApp收件箱。" : "Sistem routing otomatis pesanan langsung ke multi-nomor staff WhatsApp." 
    },
    { 
      id: "seo-deep", 
      name: language === "en" ? "In-depth SEO & Keyword Research" : language === "ja" ? "Google検索順位の最適化 (SEO)" : language === "ar" ? "تحسين عميق لمحركات البحث SEO" : language === "zh" ? "全套高端独立站SEO诊断及关键词调研" : "Sistem SEO Mendalam & Riset Keyword", 
      price: 600000, 
      desc: language === "en" ? "Setup Search Console & schema tags to trigger ranking multipliers." : language === "ja" ? "Google サーチコンソール設定。ターゲットKWによる検索エンジン1位への基盤を作ります。" : language === "ar" ? "إعداد مشرفي المواقع وقوائم الميتا الدقيقة للمساعدة في الصعود للصفحات الأولى بجوجل." : language === "zh" ? "高阶站点SEO收录优化，深度挖掘行业流量底词并协助配置谷歌控制台。" : "Pendaftaran Google Search Console & optimasi meta tag halaman agar masuk Ranking 1." 
    },
    { 
      id: "marketing-pixels", 
      name: language === "en" ? "Dynamic Ad Tracking & Pixels" : language === "ja" ? "広告効果計測ピクセルタグの実装" : language === "ar" ? "تثبيت بكسل التتبع والحملات التسويقية" : language === "zh" ? "全渠道动态数字营销追踪像素挂载" : "Pemasangan Dynamic Marketing Pixels", 
      price: 250000, 
      desc: language === "en" ? "Installs Meta, TikTok Pixels & GA4 for detailed conversion tagging." : language === "ja" ? "Meta（Facebook）、TikTokピクセルおよび最新のGoogleアナリティクス（GA4）との連携。" : language === "ar" ? "تركيب بكسل فيسبوك ميتا وتيك توك وخرائط تحليلات جوجل GA4 لدراسة سلوك العملاء." : language === "zh" ? "无缝植入 Meta Pixel / TikTok 广告及最新版谷歌分析仪 GA4 以实现高级再营销。" : "Integrasi Meta Pixel, TikTok Ads, & Google Analytics GA4 untuk retargeting audiens." 
    },
    { 
      id: "lead-funnel", 
      name: language === "en" ? "Custom Multi-Step Form Funnel" : language === "ja" ? "多段式条件分岐アンケート・フォーム" : language === "ar" ? "قمع مخصص لجمع وتدقيق بيانات العملاء" : language === "zh" ? "沉浸式交互线索收集多步骤漏斗" : "Custom Interactive Form Funnel", 
      price: 400000, 
      desc: language === "en" ? "Design intelligent logic funnels to filter high quality customer inquiries." : language === "ja" ? "ユーザーの回答に基づいて次の質問を変え、質のいい確実な顧客のみを絞り込む動的設问フォーム。" : language === "ar" ? "تطوير أداة لترشيح وجذب العملاء الجادين بتقديم تفاصيل مصنفة حسب الاهتمام." : language === "zh" ? "设计智能化分类收集框，引导高净值真实活跃客群在表单内填写精确采购指标。" : "Formulir interaktif multi-step cerdas untuk menyaring kualitas lead pelanggan potensial." 
    },
    { 
      id: "copy-writing", 
      name: language === "en" ? "Persuasive Call-to-Action Copywriting" : language === "ja" ? "心理学に基づく本格コピーライティング" : language === "ar" ? "كتابة نصوص بيعية جذابة تناسب تخصصك" : language === "zh" ? "基于消费心理学的高转化文案深度撰写" : "Persuasive Copywriting / Naskah Jualan", 
      price: 500000, 
      desc: language === "en" ? "High leverage marketing scripts produced by in-house conversion specialists." : language === "ja" ? "購買心理を深く理解した PixelVerse 専任のライターがお好みの文脈で魅力的な文章をご用意します。" : language === "ar" ? "كتابة وتنسيق الكلمات المفتاحية المقنعة وعناوين النداء من خبراء الكتابة لدينا لتنشيط الشراء." : language === "zh" ? "由 PixelVerse 运营大师操刀，直击人心并极具引导倾向的商业卖点文案。" : "Penulisan teks penawaran khusus psikologi pembeli oleh Tim PixelVerse Copywriter." 
    },
    { 
      id: "speed-booster", 
      name: language === "en" ? "Core Web Vitals Velocity Optimizer" : language === "ja" ? "Core Web Vitals 表示速度極限最適化" : language === "ar" ? "تحسين سرعة الموقع لأرقام قياسية" : language === "zh" ? "谷歌 Core Web Vitals 极限加载速度打磨" : "Speed Optimization Core Web Vitals", 
      price: 300000, 
      desc: language === "en" ? "Lossless graphics compression, cache triggers so site loads under 1.2 seconds." : language === "ja" ? "画像の高度な圧縮、余分なJS読み込み削減等により、表示から成約決定までわずか1.2秒未満の速度を追求します。" : language === "ar" ? "ضغط الصور المطور، تهيئة التخزين المؤقت لتنزيل صفحة الهاتف بأقل من 1.2 ثانية." : language === "zh" ? "无损批量图片云加速重塑，启用静态资源预加载使首屏渲染时长压缩至1.2秒内。" : "Optimasi aset gambar, kompresi script, CDN setup untuk speed loading di bawah 1.2s." 
    },
  ];

  const [formState, setFormState] = useState<InquiryFormState>({
    name: "",
    businessName: "",
    businessNiche: "umkm-retail",
    serviceId: "landing-page",
    customFeatures: [],
    notes: "",
    budgetRange: "Rp 1jt - Rp 3jt",
  });

  const [validationError, setValidationError] = useState<string | null>(null);
  const [successLink, setSuccessLink] = useState<string | null>(null);

  // Watch for selected service ID triggers from services cards
  useEffect(() => {
    if (selectedServiceId) {
      setFormState((prev) => ({ ...prev, serviceId: selectedServiceId }));
    }
  }, [selectedServiceId]);

  const [totalPrice, setTotalPrice] = useState(1900000);
  const [estimateDays, setEstimateDays] = useState("3 – 5 Hari Kerja");

  // Recalculate price dynamically whenever base service or addons change
  useEffect(() => {
    const selectedBase = basePackages.find((pkg) => pkg.id === formState.serviceId);
    if (!selectedBase) return;

    let baseCost = selectedBase.basePrice;
    let days = selectedBase.duration;

    // Sum additional features prices
    let addOnCost = 0;
    formState.customFeatures.forEach((featureId) => {
      const featureObj = boostersList.find((f) => f.id === featureId);
      if (featureObj) {
        addOnCost += featureObj.price;
      }
    });

    setTotalPrice(baseCost + addOnCost);
    setEstimateDays(days);
    setSuccessLink(null); // Clear direct fallback links on settings change
  }, [formState.serviceId, formState.customFeatures]);

  const handleToggleFeature = (featureId: string) => {
    setFormState((prev) => {
      const exists = prev.customFeatures.includes(featureId);
      const updated = exists
        ? prev.customFeatures.filter((id) => id !== featureId)
        : [...prev.customFeatures, featureId];

      return { ...prev, customFeatures: updated };
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Compile final selection and redirect client directly into WhatsApp to book PixelVerse
  const handleSubmitProposal = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name.trim() || !formState.businessName.trim()) {
      setValidationError("Mohon isi Nama Lengkap dan Nama Bisnis Anda untuk memproses estimasi.");
      return;
    }

    setValidationError(null);

    const selectedPkg = basePackages.find((p) => p.id === formState.serviceId);
    const selectedNicheLabel = niches.find((n) => n.value === formState.businessNiche)?.label || formState.businessNiche;

    const addonsText = formState.customFeatures.length > 0
      ? formState.customFeatures.map((id) => `- ${boostersList.find((b) => b.id === id)?.name}`).join("\n")
      : "- Tidak ada booster tambahan";

    // Standard business proposal format
    const waMessage = `*PROPOSAL ESTIMASI WEBSITE - PIXELVERSE STUDIO*

Halo Tim PixelVerse, saya telah mengisi kalkulator estimasi di website Anda dan ingin berdiskusi mengenai proyek website saya:

*INFORMASI KLIEN:*
• Nama Lengkap: ${formState.name}
• Nama Bisnis: ${formState.businessName}
• Niche Industri: ${selectedNicheLabel}

*KONFIGURASI PAKET:*
• Paket Utama: ${selectedPkg?.name}
• Estimasi Durasi: ${estimateDays}

*BOOSTER KONVERSI TAMBAHAN:*
${addonsText}

*CATATAN KHUSUS / GOALS:*
${formState.notes || "- Tidak ada catatan tambahan"}

*ESTIMASI TOTAL INVESTASI:*
👉 *${formatCurrency(totalPrice)}* ${formState.serviceId === "maintenance" ? "/ Bulan" : ""}

Mohon verifikasi ketersediaan slot pembuatannya. Terima kasih!`;

    const whatsAppNumber = "6285733309949";
    const whatsUrl = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(waMessage)}`;
    
    // Set fallback link for iframe friendliness
    setSuccessLink(whatsUrl);
    
    try {
      window.open(whatsUrl, "_blank");
    } catch (e) {
      console.warn("Iframe blocked window.open, fallback link generated instead.");
    }
  };

  return (
    <section id="harga" className="relative py-24 bg-zinc-950">
      {/* Animated accent gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 bg-cyan-950/40 border border-cyan-800/20 px-3 py-1 rounded-full">
            {language === "en" ? "Conversion Calculator" : language === "ja" ? "料金シミュレーター" : language === "ar" ? "حاسبة تكاليف الويب" : language === "zh" ? "高保真数字预算工具" : "Kalkulator Konversi"}
          </span>
          <h2 className="mt-4 font-sans font-black text-3xl sm:text-4xl text-white tracking-tight">
            {language === "en" ? "Cost Estimator & Business Website Scope Calculator" : language === "ja" ? "ビジネス用ウェブサイトの見積価格・仕様シミュレーター" : language === "ar" ? "حاسبة تقدير التكلفة ونطاق العمل المخصص للمشروع" : language === "zh" ? "企业独立站建设周期及功能定制预算自动生成器" : "Kalkulator Estimasi Biaya & Scope Website Bisnis"}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-gray-400 font-medium text-sm sm:text-base">
            {language === "en" ? "Customize your digital modules in real-time. Transparently calculate investments and directly forward requests to our technical staff via WhatsApp." : language === "ja" ? "実装したいシステム要件や機能を直感的にカスタマイズ。リアルタイムでの仕様算出と、見積もり詳細のWhatsAppへの連携が可能です。" : language === "ar" ? "قم بتخصيص ميزات موقعك الرقمي آنيًا وحساب الاستثمار المالي بشفافية تامة لتتمكن من إرسال التفاصيل مباشرة للواتساب." : language === "zh" ? "支持全天候实时按需勾选您的专属数字化业务板块。公开透明化预估您的初始研发额度并一键直拨至技术顾问信箱。" : "Kustomisasi fitur digital Anda secara real-time. Hitung investasi pembuatan transparan dan kirim pengajuan konsultasi Anda langsung ke WhatsApp tim teknis kami."}
          </p>
        </div>

        {/* Dynamic Calculator Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side Form Configurator */}
          <div className="lg:col-span-7 bg-cosmic-card border border-cosmic-border rounded-2xl p-6 sm:p-8 space-y-6">
            <form onSubmit={handleSubmitProposal} className="space-y-6">
              
              {/* Step 1: Choose Core Plan Package */}
              <div className="space-y-3">
                <label className="font-mono text-xs uppercase font-bold tracking-wider text-gray-400 flex items-center space-x-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-500/15 text-[10px] text-cyan-400 font-black border border-violet-500/30">1</span>
                  <span>{language === "en" ? "Choose Base Web Plan" : language === "ja" ? "基本プラン構成を選択" : language === "ar" ? "اختر باقة الموقع الرئيسية" : language === "zh" ? "第一步：挑选基础搭建版块" : "Pilih Paket Utama Website"}</span>
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {basePackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => setFormState((prev) => ({ ...prev, serviceId: pkg.id }))}
                      className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 relative ${
                        formState.serviceId === pkg.id
                          ? "bg-violet-600/15 border-violet-500 shadow-md shadow-violet-500/5 text-white"
                          : "bg-black/30 border-cosmic-border text-gray-400 hover:text-white hover:border-violet-500/20"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-sans font-extrabold text-sm sm:text-base">{pkg.name}</span>
                        {formState.serviceId === pkg.id ? (
                          <div className="w-4 h-4 rounded-full bg-cyan-400 flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 text-black" />
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-gray-600"></div>
                        )}
                      </div>
                      <span className="block mt-2 font-mono text-xs font-bold text-cyan-400">
                        {formatCurrency(pkg.basePrice)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2: Niche and Personal details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-mono text-xs font-bold uppercase tracking-wider text-gray-400">
                    {language === "en" ? "Business Industry Niche" : language === "ja" ? "事業カテゴリー・分野" : language === "ar" ? "مجال عمل وتخصص العلامة" : language === "zh" ? "第二步：选择垂直业务细分领域" : "Niche/Kategori Bisnis"}
                  </label>
                  <select
                    value={formState.businessNiche}
                    onChange={(e) => setFormState((p) => ({ ...p, businessNiche: e.target.value }))}
                    className="w-full bg-black/40 border border-cosmic-border rounded-xl px-4 py-3 text-zinc-300 text-sm focus:outline-none focus:border-violet-500 transition-colors"
                  >
                    {niches.map((n) => (
                      <option key={n.value} value={n.value}>
                        {n.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs font-bold uppercase tracking-wider text-gray-400">
                    {language === "en" ? "Maximum Estimated Budget" : language === "ja" ? "ご希望の概算投資予算幅" : language === "ar" ? "متوسط الميزانية المستهدفة للمشروع" : language === "zh" ? "预设企业数字资产最高预算档位" : "Estimasi Anggaran Maksimum"}
                  </label>
                  <select
                    value={formState.budgetRange}
                    onChange={(e) => setFormState((p) => ({ ...p, budgetRange: e.target.value }))}
                    className="w-full bg-black/40 border border-cosmic-border rounded-xl px-4 py-3 text-zinc-300 text-sm focus:outline-none focus:border-violet-500 transition-colors"
                  >
                    <option value="Rp 1jt - Rp 3jt">Rp 1.000.000 - Rp 3.000.000</option>
                    <option value="Rp 3jt - Rp 5jt">Rp 3.000.000 - Rp 5.000.000</option>
                    <option value="Rp 5jt - Rp 10jt">Rp 5.000.000 - Rp 10.000.000</option>
                    <option value="Rp > 10jt">Lebih dari Rp 10.000.000</option>
                  </select>
                </div>
              </div>

              <div className="h-px bg-cosmic-border/60"></div>

              {/* Step 3: Choose dynamic boosters (Add-ons) */}
              <div className="space-y-3">
                <label className="font-mono text-xs uppercase font-bold tracking-wider text-gray-400 flex items-center space-x-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-500/15 text-[10px] text-cyan-400 font-black border border-violet-500/30">2</span>
                  <span>{language === "en" ? "Add Conversion Booster Modules" : language === "ja" ? "集客・高成約率アップのアドオン追加" : language === "ar" ? "إضافة ميزات تنشيط المبيعات الإضافية" : language === "zh" ? "配置专属深度获客增长与安全保障插件" : "Tambahkan Fitur Booster Konversi"}</span>
                </label>
                
                <div className="space-y-3">
                  {boostersList.map((booster) => {
                    const isSelected = formState.customFeatures.includes(booster.id);
                    return (
                      <div
                        key={booster.id}
                        onClick={() => handleToggleFeature(booster.id)}
                        className={`flex items-start space-x-4 p-3.5 rounded-xl border cursor-pointer transition-all duration-200 ${
                          isSelected
                            ? "bg-cyan-950/20 border-cyan-500/40"
                            : "bg-black/30 border-cosmic-border hover:border-violet-500/15"
                        }`}
                      >
                        <div className="mt-0.5">
                          {isSelected ? (
                            <CheckSquare className="w-5 h-5 text-cyan-400" />
                          ) : (
                            <Square className="w-5 h-5 text-gray-600" />
                          )}
                        </div>
                        
                        <div className="flex-grow space-y-0.5">
                          <div className="flex items-center justify-between flex-wrap gap-1">
                            <span className="font-sans font-bold text-sm text-gray-200">{booster.name}</span>
                            <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/40 border border-cyan-800/10 px-2 py-0.5 rounded">
                              +{formatCurrency(booster.price)}
                            </span>
                          </div>
                          <p className="font-sans text-xs text-gray-400 leading-snug">{booster.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="h-px bg-cosmic-border/60"></div>

              {/* Step 4: Contact details */}
              <div className="space-y-4">
                <label className="font-mono text-xs uppercase font-bold tracking-wider text-gray-400 flex items-center space-x-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-500/15 text-[10px] text-cyan-400 font-black border border-violet-500/30">3</span>
                  <span>{language === "en" ? "Contact Details & Submit Details" : language === "ja" ? "ご連絡先を入力して見積書を送信" : language === "ar" ? "معلومات الاتصال وإرسال المقترح" : language === "zh" ? "第三步：填写基础通信字段与交付对接" : "Data Kontak & Kirim Proposal"}</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <span className="block font-sans text-xs font-bold text-gray-300">
                      {language === "en" ? "Your Full Name" : language === "ja" ? "担当者氏名 / お名前" : language === "ar" ? "الاسم الكامل" : language === "zh" ? "主理人或业务联系姓名" : "Nama Lengkap Anda"} <span className="text-red-500">*</span>
                    </span>
                    <input
                      type="text"
                      required
                      placeholder={language === "en" ? "e.g., John Doe" : language === "ja" ? "例: 田中 太郎" : language === "ar" ? "مثال: أحمد المصطفى" : language === "zh" ? "输入姓名，如：陈先生" : "Contoh: Budi Santoso"}
                      value={formState.name}
                      onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
                      className="w-full bg-black/40 border border-cosmic-border rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <span className="block font-sans text-xs font-bold text-gray-300">
                      {language === "en" ? "Store / Business Name" : language === "ja" ? "貴社名・ショップ名" : language === "ar" ? "اسم المتجر أو المؤسسة" : language === "zh" ? "企业品牌名称或线上商号" : "Nama Toko / Bisnis Utama"} <span className="text-red-500">*</span>
                    </span>
                    <input
                      type="text"
                      required
                      placeholder={language === "en" ? "e.g., Fresh Brew, Delicious Resto" : language === "ja" ? "例: グローバル商事、カフェ心" : language === "ar" ? "مثال: قهوة الأصالة، المطعم العربي" : language === "zh" ? "输入公司或品牌名，如：酷玩餐饮、极客数码" : "Contoh: Kopi Nusantara, Resto Enak"}
                      value={formState.businessName}
                      onChange={(e) => setFormState((p) => ({ ...p, businessName: e.target.value }))}
                      className="w-full bg-black/40 border border-cosmic-border rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="block font-sans text-xs font-bold text-gray-300">
                    {language === "en" ? "Special Project Requirements / Goals (Optional)" : language === "ja" ? "特定の要件、質問、要望（任意）" : language === "ar" ? "ملاحظات إضافية وتفاصيل مخصصة (اختياري)" : language === "zh" ? "特定业务拓展诉求及交付细节陈述（选填）" : "Catatan Khusus Kebutuhan Web Anda (Opsional)"}
                  </span>
                  <textarea
                    rows={3}
                    placeholder={language === "en" ? "e.g., I need credit card billing, stripe integration, or dynamic newsletters..." : language === "ja" ? "例: クレジットカード決済代行やサブスク会員システムの組み込み、特殊な商品検索システムなど..." : language === "ar" ? "مثال: أحتاج لتكامل بوابة الدفع مدى أو فيزا أو أبل باي وخيارات توصيل مخصصة..." : language === "zh" ? "例如：我们需要对接 Stripe / 微信海外支付，并需要多语言内容自动化汇入体系..." : "Contoh: Saya membutuhkan integrasi payment gateway Midtrans dan fitur voucher promo..."}
                    value={formState.notes}
                    onChange={(e) => setFormState((p) => ({ ...p, notes: e.target.value }))}
                    className="w-full bg-black/40 border border-cosmic-border rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                  />
                </div>
              </div>

            </form>
          </div>

          {/* Right Side Invoice / Invoice Preview */}
          <div className="lg:col-span-5 space-y-6 sticky top-24">
            
            <div className="bg-gradient-to-br from-indigo-950/20 to-cosmic-card border-2 border-dashed border-violet-500/20 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/5 rounded-full blur-2xl"></div>
              
              <div className="flex items-center justify-between border-b border-cosmic-border pb-4">
                <div className="flex items-center space-x-2.5">
                  <Calculator className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-sans font-black text-lg text-white">{language === "en" ? "Simulated Invoice" : language === "ja" ? "お見積り書 (自動・シミュレーション)" : language === "ar" ? "فاتورة تقديرية" : language === "zh" ? "预估电子对账单" : "Invoice Simulasi"}</h3>
                </div>
                <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 rounded-md">
                  {language === "en" ? "Scope Preview" : language === "ja" ? "構成プレビュー" : language === "ar" ? "معاينة النطاق" : language === "zh" ? "功能清单一览" : "Scope Preview"}
                </span>
              </div>

              {/* Breakdown list */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="font-mono text-[9px] uppercase font-bold text-gray-500">
                    {language === "en" ? "Selected Package Plan" : language === "ja" ? "選択されたプラン内容" : language === "ar" ? "الباقة المحددة" : language === "zh" ? "当前选定的服务方案" : "Paket Terpilih"}
                  </span>
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-gray-300">
                      {basePackages.find((p) => p.id === formState.serviceId)?.name}
                    </span>
                    <span className="font-mono text-zinc-100">
                      {formatCurrency(basePackages.find((p) => p.id === formState.serviceId)?.basePrice || 0)}
                    </span>
                  </div>
                </div>

                {/* Selected Addons List */}
                {formState.customFeatures.length > 0 ? (
                  <div className="space-y-2 pt-2 border-t border-cosmic-border/50">
                    <span className="font-mono text-[9px] uppercase font-bold text-gray-500">
                      {language === "en" ? "Custom Conversion Boosters" : language === "ja" ? "集客アドオン特長追加分" : language === "ar" ? "الميزات التسويقية المضافة" : language === "zh" ? "定制高阶插件清单" : "Kustomasi Booster Tambahan"}
                    </span>
                    <div className="space-y-1.5">
                      {formState.customFeatures.map((fid) => {
                        const boosterObj = boostersList.find((b) => b.id === fid);
                        return (
                          <div key={fid} className="flex justify-between items-center text-xs text-gray-400">
                            <span>{boosterObj?.name}</span>
                            <span className="font-mono text-zinc-300 font-semibold">
                              {formatCurrency(boosterObj?.price || 0)}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : null}

                {/* Estimated Delivery Time */}
                <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center justify-between text-xs">
                  <span className="font-medium text-gray-400">{language === "en" ? "Timeline duration:" : language === "ja" ? "納品予定期間：" : language === "ar" ? "مدة التنفيذ المطلوبة:" : language === "zh" ? "系统开发标准周期：" : "Durasi Pembuatan:"}</span>
                  <span className="font-bold text-cyan-400">⚡ {estimateDays}</span>
                </div>
              </div>

              <div className="h-px bg-cosmic-border"></div>

              {/* Total Invest */}
              <div className="flex flex-col space-y-1">
                <span className="font-mono text-[9px] uppercase font-bold text-gray-500">
                  {language === "en" ? "Total Estimated Investment" : language === "ja" ? "初期構築投資額 (想定総額)" : language === "ar" ? "إجمالي الاستثمار التقديري" : language === "zh" ? "数字化建设预估总投入" : "Estimasi Total Investasi"}
                </span>
                <div className="flex items-baseline space-x-1 justify-between">
                  <span className="font-sans font-black text-2xl sm:text-3xl text-white tracking-tight">
                    {formatCurrency(totalPrice)}
                  </span>
                </div>
                <span className="text-[10px] text-gray-500 font-sans leading-relaxed block">
                  {language === "en" 
                    ? "* Prices are accurate estimates based on standard project scopes. Final pricing is confirmed after consultations." 
                    : language === "ja" 
                    ? "※ この価格は標準的な機能構築に基づいた確度の高い概算です。要件定義後に正式な御見積書を提示します。" 
                    : language === "ar" 
                    ? "* الأسعار تقديرية بناءً على نطاق العمل القياسي. يتم الاتفاق النهائي على الشروط والأسعار بعد مراجعة المتطلبات." 
                    : language === "zh" 
                    ? "⚠️ 以上价格仅作为初步估算额度。实际最终投入将根据具体业务及最终功能清单重新确定。" 
                    : "* Harga bersifat estimasi akurat berdasarkan scope pengerjaan standar. Finalisasi harga ditentukan setelah konsultasi."}
                </span>
              </div>

              {validationError && (
                <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 text-xs text-red-300 font-medium">
                  ⚠️ {validationError}
                </div>
              )}

              {successLink && (
                <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-cyan-300 font-medium space-y-2">
                  <p>
                    {language === "en" ? "✨ Your estimate was successfully generated! If WhatsApp does not open automatically, please click below:" : language === "ja" ? "✨ 見積り書を正常に出力しました！もし、自動的にブラウザが開かなかった場合、こちらのボタンを押してください：" : language === "ar" ? "✨ تم إنشاء تقديرك بنجاح! إذا لم يفتح WhatsApp تلقائيًا، فالرجاء النقر أدناه:" : language === "zh" ? "✨ 估算信息已生成完毕！若WhatsApp未自动唤醒，请点击下方进行手动直连沟通：" : "✨ Estimasi Anda berhasil dibuat! Jika WhatsApp tidak terbuka otomatis, silakan klik tombol di bawah:"}
                  </p>
                  <a
                    href={successLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-2 text-white bg-cyan-600 hover:bg-cyan-500 font-bold px-4 py-2 rounded-lg text-xs"
                  >
                    <span>{language === "en" ? "Open WhatsApp Now" : language === "ja" ? "WhatsAppを開く" : language === "ar" ? "تواصل معنا مباشرة عبر واتساب" : language === "zh" ? "立即启动WhatsApp进行咨询对接" : "Buka WhatsApp Sekarang"}</span>
                  </a>
                </div>
              )}

              <button
                onClick={handleSubmitProposal}
                className="w-full inline-flex items-center justify-center space-x-2.5 py-4 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-indigo-700 hover:from-violet-500 hover:via-indigo-500 hover:to-indigo-600 text-white font-black text-sm tracking-wide shadow-lg shadow-violet-500/20 hover:shadow-violet-500/35 transition-all duration-300 group"
              >
                <span>{language === "en" ? "Generate & Send Proposal" : language === "ja" ? "見積書を出力して直接WhatsAppに予約" : language === "ar" ? "توليد وإرسال المقترح للواتساب" : language === "zh" ? "一键生成数字预算并抄送至技术团队" : "Hasilkan & Kirim Proposal WA"}</span>
                <Send className="w-4 h-4 text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

            </div>

            {/* Direct consultation assistance banner */}
            <div className="p-4 bg-violet-950/10 border border-violet-800/25 rounded-xl flex items-start space-x-3 text-xs leading-relaxed text-gray-400">
              <BadgeInfo className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Conversion First Design Guarantee</span>
                {language === "en" 
                  ? "Every website developed is complete with speed checks, SSL, responsive design, and analytics integrations." 
                  : language === "ja" 
                  ? "ご提供するすべてのサイトは表示速度テスト、SSL構成、完全なモバイルレスポンス設計と分析連携を含みます。" 
                  : language === "ar" 
                  ? "كل موقع ويب يتم تسليمه منا يضم مقاييس سرعة استثنائية، وشهادة SSL لحماية البيانات، وضبط القياس لجميع الشاشات." 
                  : language === "zh" 
                  ? "我们交付的每一个独立站都经过严格的性能优化、免费部署SSL、兼容多端全自适应并在后台提供转化漏斗分析。" 
                  : "Setiap situs web yang dikerjakan oleh PixelVerse Studio dilengkapi uji performa kecepatan Google Lighthouse, integrasi security SSL, responsivitas multi-device Google Mobile-Ready, dan tautan analytics."}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

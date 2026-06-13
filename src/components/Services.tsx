import { motion } from "motion/react";
import { Sparkles, Globe, Zap, ShieldCheck, ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import { useLanguage } from "./LanguageContext";

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
  onPageChange?: (pageId: string) => void;
}

export default function Services({ onSelectService, onPageChange }: ServicesProps) {
  const { language, t } = useLanguage();

  const servicesList = [
    {
      id: "landing-page",
      title: language === "en" ? "Landing Page" : language === "ja" ? "ランディングページ" : language === "ar" ? "صفحات الهبوط" : language === "zh" ? "单页落地页" : "Landing Page",
      badge: language === "en" ? "1-Page Design" : language === "ja" ? "単一ページ" : language === "ar" ? "تصميم صفحة واحدة" : language === "zh" ? "单页设计" : "Desain 1 Halaman",
      description: language === "en" 
        ? "Landing pages are perfect for promoting simple services, products, campaigns, or personal branding. Focus is strictly on presenting a clear message and driving high conversions."
        : language === "ja"
        ? "単一の製品、サービス、キャンペーン、またはパーソナルブランディングのプロモーションに最適です。明確な行動喚起を促します。"
        : language === "ar"
        ? "صفحات الهبوط مثالية للترويج لخدمات بسيطة، أو منتجات، أو حملات تسويقية وتصميمها يركز على تحقيق أعلى معدل تحويل للزائر."
        : language === "zh"
        ? "单页落地页是推广特定服务、单品、营销活动或个人IP品牌的最佳选择，聚焦于高转化率。"
        : "Landing page cocok untuk promosi layanan, produk, kampanye pemasaran, atau personal branding. Fokus utama adalah menyampaikan pesan dengan jelas dan memudahkan pengunjung mengambil tindakan.",
      features: language === "en"
        ? ["1-Page Custom Design", "Fully Responsive Layout", "WhatsApp Action CTA", "Leads Collection Form", "Performance Optimized"]
        : language === "ja"
        ? ["1ページのカスタムデザイン", "完全レスポンシブ対応", "WhatsApp直接連携", "リード獲得フォーム", "表示速度の適正化"]
        : language === "ar"
        ? ["تصميم مخصص لصفحة واحدة", "متوافق مع جميع الشاشات", "زر تواصل مباشر للواتساب", "نموذج جمع بيانات العملاء", "تحسين سرعة التحميل"]
        : language === "zh"
        ? ["专业单页面定制设计", "多端自适应响应式布局", "微信-海外WhatsApp直连", "表单线索收集系统", "底层代码极致速度优化"]
        : [
            "Desain 1 Halaman",
            "Responsif di Semua Perangkat",
            "CTA WhatsApp",
            "Formulir Lead",
            "Optimasi Dasar",
          ],
      duration: language === "en" ? "3 – 5 Business Days" : language === "ja" ? "3〜5営業日" : language === "ar" ? "3 - 5 أيام عمل" : language === "zh" ? "3 - 5 个工作日" : "3 – 5 Hari Kerja",
      suitability: language === "en" ? "Freelancers, Ad Campaigns, Solopreneurs" : language === "ja" ? "フリーランス、広告、個人ブランド" : language === "ar" ? "المستقلون، الحملات الإعلانية، الهوية الشخصية" : language === "zh" ? "自由职业、广告投放、个人品牌" : "Freelancer, Kampanye Iklan, Personal Brand",
      iconName: "Sparkles",
      priceText: language === "en" ? "From Rp1,900k" : language === "ja" ? "1.900.000ルピア〜" : language === "ar" ? "من 1,900,000 روبية" : language === "zh" ? "1,900,000 印尼盾起" : "Mulai Rp1.900.000",
    },
    {
      id: "business-website",
      title: language === "en" ? "Business Website" : language === "ja" ? "ビジネスサイト" : language === "ar" ? "موقع ويب احترافي" : language === "zh" ? "企业官网" : "Website Bisnis",
      badge: language === "en" ? "5 – 8 Pages" : language === "ja" ? "5〜8ページ" : language === "ar" ? "5 - 8 صفحات لنمو عملك" : language === "zh" ? "5 - 8 个页面" : "5 – 8 Halaman",
      description: language === "en"
        ? "Professional multi-page website to display your company profile, services catalog, projects portfolio, and location details."
        : language === "ja"
        ? "会社情報、サービス項目、ギャラリー、製品カテゴリなど、より総合的な会社ホームページを構築。中小企業やサロン等に。"
        : language === "ar"
        ? "موقع ويب كامل لعرض ملف شركتك التعريفي، وخدماتك بشكل منظم، ومعرض لأعمالك، وتفصيلات نشاطك التجاري بدقة."
        : language === "zh"
        ? "用于多维度展示企业形象、服务清单、品牌优势等的专业官网。非常适合中小企业、餐饮和咨询行业。"
        : "Website profesional untuk menampilkan profil perusahaan, layanan, galeri, dan informasi bisnis secara lengkap. Cocok untuk UMKM, restoran, fashion, dan konsultan.",
      features: language === "en"
        ? ["5 – 8 Dedicated Pages", "Built-in Blog & Gallery", "In-depth On-Page SEO", "Premium Fast Server", "WhatsApp Interactive CTA"]
        : language === "ja"
        ? ["5〜8ページの詳細構成", "ブログ・実績ギャラリー", "SEO初期対策・高速化", "高スペッククラウド構築", "WhatsApp・お問合せ連携"]
        : language === "ar"
        ? ["من 5 إلى 8 صفحات منسقة", "أقسام مدونة ومعرض للصور", "تهيئة أساسيات الـ SEO", "تحميل فائق السرعة", "تكامل وتواصل مباشر للواتساب"]
        : language === "zh"
        ? ["5 - 8 个定制子页面", "内置多功能博客与画册", "全面基础独立站SEO", "极速高端云计算托管", "多重WhatsApp无缝对接"]
        : [
            "5 – 8 Halaman",
            "Blog & Galeri",
            "SEO Dasar",
            "Kecepatan Optimal",
            "Integrasi WhatsApp",
          ],
      duration: language === "en" ? "7 – 14 Business Days" : language === "ja" ? "7〜14営業日" : language === "ar" ? "7 - 14 يوم عمل" : language === "zh" ? "7 - 14 个工作日" : "7 – 14 Hari Kerja",
      suitability: language === "en" ? "SMEs, Fine Dining, Retailers, Agencies" : language === "ja" ? "中小企業、飲食店、アパレル、コンサルティング" : language === "ar" ? "المؤسسات، المطاعم، صالونات التجميل، المستشارين" : language === "zh" ? "中小企业、时尚商铺、独立顾问咨询" : "UMKM, Restoran, Fashion, Konsultan",
      iconName: "Globe",
      priceText: language === "en" ? "From Rp5,900k" : language === "ja" ? "5.900.000ルピア〜" : language === "ar" ? "من 5,900,000 روبية" : language === "zh" ? "5,900,000 印尼盾起" : "Mulai Rp5.900.000",
    },
    {
      id: "premium-website",
      title: language === "en" ? "Website Custom" : language === "ja" ? "カスタムサイト" : language === "ar" ? "موقع مخصص بالكامل" : language === "zh" ? "定制功能网站" : "Website Custom",
      badge: language === "en" ? "Custom System" : language === "ja" ? "カスタム機能" : language === "ar" ? "ميزات مخصصة" : language === "zh" ? "多功能定制" : "Fitur Custom",
      description: language === "en"
        ? "Tailored layout and structure with advanced capabilities like booking software, listings databases, or custom user CRM dashboards."
        : language === "ja"
        ? "予約システム、不動産のカタログ、CRM管理、ログイン機能など、特定のアクション向けに完全に構築されたカスタムソリューションです。"
        : language === "ar"
        ? "تصميم وهيكلة مخصصة تخدم احتياجاتك المتقدمة مثل أنظمة الحجز، أو كتالوجات العقارات، أو لوحات تحكم علاقات العملاء."
        : language === "zh"
        ? "专为复杂行业场景定制研发，如在线预约系统、产品名册数据库、定制客户CRM看板等专属业务系统。"
        : "Untuk kebutuhan yang lebih spesifik seperti sistem booking, katalog properti, integrasi CRM, dan kebutuhan bisnis lainnya.",
      features: language === "en"
        ? ["Bespoke Custom Functionality", "Systems & Database Integration", "Robust Scalable Architecture", "Advanced Firewall Protection", "Optimized Loading Velocity"]
        : language === "ja"
        ? ["独自のカスタム機能実装", "外部システム・DB連携", "拡張性の高いアーキテクチャ", "最高峰のセキュリティ対策", "極限の表示速度パフォーマンス"]
        : language === "ar"
        ? ["وظائف مخصصة حسب الطلب", "تكامل للأنظمة وقواعد البيانات", "هندسة معمارية مرنة وقابلة للتوسع", "أعلى مستويات الأمان والحماية", "أفضل أداء وسرعة تحميل ممكنة"]
        : language === "zh"
        ? ["按需专属系统模块定制研发", "与第三方ERP、CRM及数据库集成", "高并发性易拓展架构体系", "全方位高安全防护防火墙", "尊享极限处理性能与流畅度运维"]
        : [
            "Fitur Custom",
            "Integrasi Sistem",
            "Struktur Fleksibel",
            "Keamanan Tinggi",
            "Performa Optimal",
          ],
      duration: language === "en" ? "14 – 30 Business Days" : language === "ja" ? "14〜30営業日" : language === "ar" ? "14 - 30 يوم عمل" : language === "zh" ? "14 - 30 个工作日" : "14 – 30 Hari Kerja",
      suitability: language === "en" ? "Booking Engine, Realty, CRM Systems" : language === "ja" ? "予約管理、不動産物件集、独自管理システム" : language === "ar" ? "أنظمة حجز مستقلة، تسويق عقاري، خدمات الربط للشركات" : language === "zh" ? "预订调度服务、跨国房产平台、管理系统CRM" : "Sistem Booking, Properti, CRM, Integrasi Khusus",
      iconName: "Zap",
      priceText: language === "en" ? "From Rp12,900k" : language === "ja" ? "12.900.000ルピア〜" : language === "ar" ? "من 12,900,000 روبية" : language === "zh" ? "12,900,000 印尼盾起" : "Mulai Rp12.900.000",
    },
    {
      id: "maintenance",
      title: language === "en" ? "Website Maintenance" : language === "ja" ? "ウェブサイト保守" : language === "ar" ? "صيانة مواقع الويب" : language === "zh" ? "网站长期运维" : "Website Maintenance",
      badge: language === "en" ? "Continuous Uptime" : language === "ja" ? "安定稼働保守" : language === "ar" ? "ضمان استمرارية التشغيل" : language === "zh" ? "极速高可用保障" : "Uptime Kontinu",
      description: language === "en"
        ? "Ensure security updates, regular database backups, page speed check-ups and structural changes to focus entirely on your scaling operations."
        : language === "ja"
        ? "Webサイトを常に最新・安全に保ち、バックアップ、稼働監視、コンテンツ修正などの保守運営を一括代行します。"
        : language === "ar"
        ? "حافظ على موقعك آمنًا ومحدثًا باستمرار وخاليًا من الأخطاء من خلال خدمات النسخ الاحتياطي وحماية السيرفر لتركز تمامًا على نمو عملك."
        : language === "zh"
        ? "保障您的官方网站时刻平稳工作、避免被攻击，提供定期备份、病毒扫描、系统升级、日常内容改版等一站式运维托管服务。"
        : "Membantu menjaga website tetap aman, terbarui, dan berjalan dengan baik sehingga Anda bisa fokus pada bisnis.",
      features: language === "en"
        ? ["Seamless Layout & Copy Updates", "Safe Periodical Core Backups", "24/7 Security Health Scans", "Dedicated Webmaster Technical Support", "Continual Loading Enhancements"]
        : language === "ja"
        ? ["画像追加やテキストの改訂", "定期データの自動安全保存", "サーバー死活監視、セキュリティスキャン", "緊急時や不具合トラブルの優先サポート", "表示改善やデータベースの定期最適化"]
        : language === "ar"
        ? ["تعديل وتحديث مستمر للمحتوى", "عمل نسخ احتياطية دورية آمنة", "فحص دوري ومكافحة برمجيات ضارة", "دعم فني مخصص لحل المشاكل التقنية", "تحسينات دورية للأداء والسرعة"]
        : language === "zh"
        ? ["极速响应的产品与文字改版更新", "专业加密周期数据库异地冷备份", "全天候无死角安全监测木马扫描", "VIP一对一技术架构师顾问级保障", "对服务器节点架构优化加速"]
        : [
            "Update Konten",
            "Backup Rutin",
            "Monitoring Keamanan",
            "Support Teknis",
            "Performa Optimal",
          ],
      duration: language === "en" ? "Monthly / Yearly" : language === "ja" ? "月額 / 年間プラン" : language === "ar" ? "شهري / سنوي" : language === "zh" ? "按月度 / 按年度" : "Bulanan / Tahunan",
      suitability: language === "en" ? "Corporate Portals, News Portals, Online Catalogues" : language === "ja" ? "企業サイト、定期更新メディア、製品カタログ" : language === "ar" ? "مواقع ومتاجر الشركات الكبرى، البوابات الخدمية الفعالة" : language === "zh" ? "中大型企业站、高变动资讯门户、高承载电商" : "Keamanan, Backup Rutin, Update Konten",
      iconName: "ShieldCheck",
      priceText: language === "en" ? "Custom Pricing" : language === "ja" ? "ご相談プラン" : language === "ar" ? "أسعار مخصصة حسب العمل" : language === "zh" ? "定制报价范围" : "Biaya Menyesuaikan",
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-violet-400" />;
      case "Globe":
        return <Globe className="w-6 h-6 text-indigo-400" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-cyan-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      default:
        return <Globe className="w-6 h-6 text-violet-400" />;
    }
  };

  const handleSelect = (serviceId: string) => {
    onSelectService(serviceId);
    if (onPageChange) {
      if (serviceId === "maintenance") {
        onPageChange("contact");
      } else {
        onPageChange("pricing");
      }
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const element = document.getElementById(serviceId === "maintenance" ? "kontak" : "harga");
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section id="layanan" className="relative py-24 bg-cosmic-bg border-b border-cosmic-border/60">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 bg-cyan-950/40 border border-cyan-800/20 px-3 py-1 rounded-full">
            {language === "en" ? "Our Premium Services" : language === "ja" ? "プレミアムサービス" : language === "ar" ? "خدماتنا المتميزة" : language === "zh" ? "我们的核心业务" : "Layanan Kami"}
          </span>
          <h2 className="mt-4 font-sans font-black text-3xl sm:text-4xl text-white tracking-tight">
            {language === "en" 
              ? "Website and Landing Page Solutions for Growth"
              : language === "ja"
              ? "ビジネス成長を支えるウェブ・LP制作ソリューション"
              : language === "ar"
              ? "حلول مواقع الويب وصفحات الهبوط لدعم نمو الأعمال"
              : language === "zh"
              ? "助力业务高效增长的网站与单页解决方案"
              : "Layanan Website dan Landing Page untuk Bisnis Modern"}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-gray-405 font-medium text-sm sm:text-base">
            {language === "en"
              ? "Choose the best digital strategy built for your business scaling phase."
              : language === "ja"
              ? "ビジネスの成長段階や目的に合わせて、最適なプランと機能をお選びください。"
              : language === "ar"
              ? "اختر الحل التقني الأنسب لتطلعاتك وقدرات عملك وتوسعه الرقمي."
              : language === "zh"
              ? "选择最符合您产品周期与整体业务体量的优秀数字化渠道方案。"
              : "Pilih solusi yang sesuai dengan kebutuhan dan tahap pertumbuhan bisnis Anda."}
          </p>
        </div>

        {/* Services Grid (4 items - 2x2 layout on large screens) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col h-full rounded-2xl bg-cosmic-card border border-cosmic-border hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/5 group transition-all duration-300 overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-6 sm:p-8 flex items-start justify-between border-b border-cosmic-border bg-cosmic-card/30">
                <div className="flex items-center space-x-4">
                  <div className="p-3.5 rounded-xl bg-violet-500/10 border border-violet-500/25 flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                  <div>
                    <h3 className="font-sans font-extrabold text-xl text-white group-hover:text-cyan-400 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <div className="mt-1 flex items-center space-x-2">
                      <span className="font-mono text-[10px] uppercase font-semibold text-gray-500">
                        {language === "en" ? "Target:" : language === "ja" ? "ターゲット:" : language === "ar" ? "ملائم لـ:" : language === "zh" ? "最适用于:" : "Niche:"}
                      </span>
                      <span className="font-sans text-[11px] font-semibold text-violet-300">
                        {service.suitability}
                      </span>
                    </div>
                  </div>
                </div>
                
                {service.badge && (
                  <span className="hidden sm:inline-block font-sans text-[9px] uppercase font-black tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-2.5 py-1 rounded-full">
                    {service.badge}
                  </span>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Price info tag */}
                  <div className="flex items-baseline space-x-2">
                    <span className="font-sans font-black text-2xl text-white tracking-tight">
                      {service.priceText}
                    </span>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed min-h-[60px]">
                    {service.description}
                  </p>

                  <div className="h-px bg-cosmic-border/50"></div>

                  {/* Bullet features list */}
                  <div className="space-y-2.5">
                    <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-gray-500 block">
                      {language === "en" ? "Key Inclusions:" : language === "ja" ? "主な内容:" : language === "ar" ? "قائمة الميزات:" : language === "zh" ? "包含明细要素:" : "Fitur:"}
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="font-sans text-xs text-gray-200 leading-snug">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-cosmic-border/40">
                  <div className="flex flex-col text-center sm:text-left self-start">
                    <span className="font-sans text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                      {language === "en" ? "Build Time" : language === "ja" ? "納期予定" : language === "ar" ? "مدة التنفيذ" : language === "zh" ? "交付周期" : "Waktu Pembuatan"}
                    </span>
                    <span className="font-sans text-xs font-bold text-white">
                      💡 {service.duration}
                    </span>
                  </div>

                  <button
                    onClick={() => handleSelect(service.id)}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-violet-600/10 hover:bg-violet-600 border border-violet-500/40 hover:border-violet-400 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all duration-300 group"
                  >
                    <span>
                      {service.id === "maintenance" 
                        ? (language === "en" ? "Request Quote" : language === "ja" ? "お見積依頼" : language === "ar" ? "طلب تسعير" : language === "zh" ? "提交预算咨询" : "Minta Penawaran")
                        : (language === "en" ? "Select Plan & Setup" : language === "ja" ? "プラン選択" : language === "ar" ? "اختر الخطة وابدأ" : language === "zh" ? "锁定并获取方案" : "Pelajari Selengkapnya →")
                      }
                    </span>
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
        
        {/* Niche suitability and strategy notes */}
        <div className="mt-16 bg-gradient-to-r from-violet-950/20 via-cosmic-card to-indigo-950/20 border border-cosmic-border p-6 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            <div className="flex-grow space-y-2 text-center md:text-left">
              <h4 className="font-sans font-bold text-lg text-white">
                {language === "en" ? "Need a custom enterprise architecture?" : language === "ja" ? "特殊な開発や相談が必要ですか？" : language === "ar" ? "هل تبحث عن هندسة برمجية مخصصة لشركتك؟" : language === "zh" ? "需要特别定制的复杂商业系统架构吗？" : "Butuh solusi yang sesuai dengan kebutuhan Anda?"}
              </h4>
              <p className="font-sans text-xs sm:text-sm text-gray-400 max-w-3xl leading-relaxed">
                {language === "en"
                  ? "Talk directly to our professional engineering team at PixelVerse Studio to bring your dynamic web portal vision to reality."
                  : language === "ja"
                  ? "PixelVerse Studio の専任の技術指導チームと直接ご相談ください。あなたのビジネス要件を満たす素晴らしいデザインサイトをご提案します。"
                  : language === "ar"
                  ? "تواصل مباشرة مع المهندسين المحترفين في PixelVerse Studio لتصميم وتطوير رؤية موقعك المطور بكفاءة ودقة متناهية."
                  : language === "zh"
                  ? "直接与 PixelVerse Studio 旗舰技术专家团队进行畅快交流，助您将前沿的企业数字化设想稳健转化为卓越落地成果。"
                  : "Konsultasikan proyek Anda sekarang juga bersama tim profesional PixelVerse Studio untuk merealisasikan website impian Anda secara efisien."}
              </p>
            </div>
            <a
              href="https://wa.me/6285733309949?text=Halo%20PixelVerse%20Studio%2C%20saya%20tertarik%20berkonsultasi%20mengenai%20jasa%20desain%20dan%20pembuatan%20website%20saya."
              target="_blank"
              rel="noreferrer"
              className="w-full md:w-auto flex-shrink-0 inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs shadow-lg transition-colors duration-300"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{language === "en" ? "Consult Free Now" : language === "ja" ? "今すぐ無料相談" : language === "ar" ? "استشرنا مجانًا الآن" : language === "zh" ? "立即开启免费咨询" : "Konsultasi Gratis"}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

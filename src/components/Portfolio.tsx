import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, ArrowUpRight, Check, X, Calendar, Clock, Sparkles, AlertCircle } from "lucide-react";
import { PortfolioItem } from "../types";
import { useLanguage } from "./LanguageContext";

// Paths of the generated images
const restoImg = "/src/assets/images/portfolio_resto_1781379737735.jpg";
const fashionImg = "/src/assets/images/portfolio_fashion_1781379752886.jpg";
const propertyImg = "/src/assets/images/portfolio_property_1781379765019.jpg";
const consultantImg = "/src/assets/images/portfolio_consultant_1781379778282.jpg";

export default function Portfolio() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categoriesList = [
    { id: "Semua", label: language === "en" ? "All" : language === "ja" ? "すべて" : language === "ar" ? "الكل" : language === "zh" ? "全选" : "Semua" },
    { id: "Kuliner", label: language === "en" ? "Culinary" : language === "ja" ? "グルメ" : language === "ar" ? "طهي وطعام" : language === "zh" ? "餐饮美食" : "Kuliner" },
    { id: "Fashion", label: language === "en" ? "Fashion" : language === "ja" ? "ファッション" : language === "ar" ? "أزياء" : language === "zh" ? "潮流时装" : "Fashion" },
    { id: "Properti", label: language === "en" ? "Property" : language === "ja" ? "不動産" : language === "ar" ? "عقارات" : language === "zh" ? "房产 listings" : "Properti" },
    { id: "Profesional", label: language === "en" ? "Professional" : language === "ja" ? "ビジネス" : language === "ar" ? "احترافي" : language === "zh" ? "商务咨询" : "Profesional" }
  ];

  const portfolioListOriginal: PortfolioItem[] = [
    {
      id: "resto-nusantara",
      title: "Resto Nusantara",
      category: "Kuliner",
      tag: "Culinary & Dining",
      image: restoImg,
      description: "Website profil dan menu interaktif premium untuk restoran masakan khas nusantara bergaya modern. Menyediakan fitur pemesanan online bawaan yang menghubungkan langsung ke WhatsApp restuaran.",
      features: [
        "Menu Kuliner Digital Terkategori dengan Foto High-Res",
        "Sistem Reservasi Meja Instan Tanpa Aplikasi Tambahan",
        "Pemberitahuan Pesanan Masuk Otomatis ke Dapur via WhatsApp",
        "Integrasi Google Maps API dengan Penunjuk Arah Langsung",
        "Galeri Foto Suasana Restoran & Instagram Feed Integration"
      ],
      techStack: ["Google Maps Integration", "Interactive Ordering", "Premium UI"],
      duration: "5 Hari Kerja",
      objective: "Meningkatkan kredibilitas digital kuliner lokal, memudahkan reservasi meja saat jam sibuk, dan menyederhanakan sistem pemesanan menu online.",
      ctaText: "Pesan Reservasi Digital",
    },
    {
      id: "urban-style",
      title: "Urban Style",
      category: "Fashion",
      tag: "E-Commerce Landing Page",
      image: fashionImg,
      description: "Landing page penjualan eksklusif yang dirancang khusus untuk memasarkan koleksi pakaian terbaru (casual streetwear). Fokus penuh pada visual produk dan kemudahan checkout.",
      features: [
        "Desain Editorial Premium & High-Fashion Vibe",
        "Struktur Satu Halaman Teratur Khusus Campaign Iklan",
        "Sistem Checkout Cepat dengan Pilihan Ukuran & Jumlah",
        "Integrasi Kupon Diskon Dinamis untuk Memacu Pembelian",
        "Facebook Pixel & TikTok Pixel Tracker Terpasang"
      ],
      techStack: ["High-Speed Performance", "Ad Tracker Integration", "Editorial Grid"],
      duration: "4 Hari Kerja",
      objective: "Meluncurkan produk fashion dengan landing page berkecepatan loading tinggi untuk target traffic dari berbayar (FB Ads & TikTok Ads).",
      ctaText: "Order Casual Streetwear",
    },
    {
      id: "griya-property",
      title: "Griya Property",
      category: "Properti",
      tag: "Real Estate Listing",
      image: propertyImg,
      description: "Aset website listing real estate modern untuk memperkenalkan perumahan baru, tipe klaster, spesifikasi unit, dan pendaftaran jadwal survei fisik lokasi.",
      features: [
        "Katalog Listing Unit Interaktif dengan Filter Harga & Tipe",
        "Formulir Pendaftaran Jadwal Survei (Booking physical tour)",
        "Spesifikasi Bangunan Lengkap & Download Brosur Instan PDF",
        "Profil Agen Penanggung Jawab dengan Tautan WhatsApp Langsung",
        "Skema Simulasi Perhitungan KPR (Kredit Pemilikan Rumah) Interaktif"
      ],
      techStack: ["Mortgage Calculator", "PDF Download Hub", "Interactive Listings"],
      duration: "7 Hari Kerja",
      objective: "Menyaring leads prospektif yang serius ingin membeli rumah dan menyediakan portal informasi properti yang transparan.",
      ctaText: "Jadwalkan Survei Rumah",
    },
    {
      id: "digital-consultant",
      title: "Digital Consultant",
      category: "Profesional",
      tag: "Professional Portfolio",
      image: consultantImg,
      description: "Landing page personal branding eksklusif untuk konsultan manajemen bisnis, pembicara, dan pengajar profesional agar lebih mudah memperoleh klien korporat.",
      features: [
        "Desain Minimalis Elegan yang Memancarkan Kredibilitas",
        "Tinjauan Portofolio & Case Study Riwayat Kerjasama Klien",
        "Widget Integrasi Kalender untuk Booking Jadwal Konsultasi",
        "Ulasan Testimoni Berupa Teks, Logo, & Video Testimonial",
        "Pendaftaran Nawala (Newsletter Registration) Terintegrasi"
      ],
      techStack: ["Personal Brand Engine", "Calendly Scheduler", "Newsletter System"],
      duration: "5 Hari Kerja",
      objective: "Membangun kehadiran digital yang solid bagi konsultan mandiri untuk menaikkan tarif konsultasi formal dan membuktikan reputasi.",
      ctaText: "Mulai Konsultasi Bisnis",
    }
  ];

  const getLocalizedProject = (project: PortfolioItem): PortfolioItem => {
    if (language === "id") return project;
    
    if (language === "en") {
      if (project.id === "resto-nusantara") {
        return {
          ...project,
          category: "Culinary",
          tag: "Culinary & Dining",
          description: "Premium interactive profile and menu website for a modern Indonesian specialty cuisine restaurant. Features a built-in online ordering system connected directly to WhatsApp.",
          duration: "5 Business Days",
          objective: "Enhance local culinary digital presence, simplify table reservations during busy hours, and streamline the online food ordering pipeline.",
          ctaText: "Book Table Online",
          features: [
            "Categorized Digital Menu with High-Res Photos",
            "Instant Table Reservation with No Apps Required",
            "Orders Automatically Routed to Kitchen via WhatsApp",
            "Google Maps API Integration with Live Navigation",
            "Beautiful Ambience Gallery & Social Feeds Integration"
          ]
        };
      }
      if (project.id === "urban-style") {
        return {
          ...project,
          category: "Fashion",
          tag: "E-Commerce Landing Page",
          description: "Exclusive conversion landing page designed to market the latest apparel collections (casual streetwear). Fully optimized for sleek visuals and friction-free checkout.",
          duration: "4 Business Days",
          objective: "Launch high-performance fashion campaign with optimized page load speeds for paid traffic acquisition (Facebook & TikTok Ads).",
          ctaText: "Shop Collection Now",
          features: [
            "Premium Editorial Design with High-Fashion Vibes",
            "Single-Page Conversion Layout for Ad Campaigns",
            "Swift Checkout System with Size & Quantity Selectors",
            "Dynamic Coupon Code System to Drive Urgency",
            "Facebook Pixel & TikTok Pixel Trackers Integration"
          ]
        };
      }
      if (project.id === "griya-property") {
        return {
          ...project,
          category: "Property",
          tag: "Real Estate Listing",
          description: "A modern real estate listing website to showcase new housing projects, cluster types, unit specifications, and organize physical site tours.",
          duration: "7 Business Days",
          objective: "Filter high-quality leads looking for properties and provide a transparent real estate portal.",
          ctaText: "Schedule Private Tour",
          features: [
            "Interactive Listing Catalog with Price & Plan Filters",
            "Physical Site Tour Registration Form Builder",
            "Complete Specs & PDF Brochure Fast Downloads",
            "Agent Profiles with Direct WhatsApp Floating Cards",
            "Interactive Mortgage Simulator Calculator"
          ]
        };
      }
      if (project.id === "digital-consultant") {
        return {
          ...project,
          category: "Professional",
          tag: "Professional Portfolio",
          description: "Exclusive personal branding landing page for business consultants, keynote speakers, and educators to attract corporate contracts.",
          duration: "5 Business Days",
          objective: "Build a authoritative digital presence for independent consultants to boost pricing and validate industry reputation.",
          ctaText: "Book Consultation Today",
          features: [
            "Aesthetic Minimalist Layout Broadcasting Authority",
            "Portfolio & Case Studies Corporate Client Showcases",
            "Interactive Calendar Widget for Meeting Bookings",
            "Testimonials Showcase with Logos, Text, & Video Links",
            "Integrated Newsletter Subscriptions Management"
          ]
        };
      }
    }
    
    if (language === "ja") {
      if (project.id === "resto-nusantara") {
        return {
          ...project,
          category: "グルメ",
          tag: "フード ＆ レストラン",
          description: "伝統的なインドネシア料理をモダンに提供するレストランの紹介とデジタルメニュー。直感的なオンライン注文機能付き（WhatsApp直結）。",
          duration: "5営業日",
          objective: "地元グルメ店としての評判を高め、混雑時のテーブル予約プロセスを簡素化し、オンライン注文体制を効率化する事。",
          ctaText: "テーブルを予約する",
          features: [
            "高画質写真付きのカテゴリ別メニュー",
            "専用アプリ不要のインスタント席予約",
            "受け付けた注文をWhatsApp経由で即時共有",
            "経路説明付きGoogleマップ連携",
            "店内ギャラリーおよびSNSタイムライン"
          ]
        };
      }
      if (project.id === "urban-style") {
        return {
          ...project,
          category: "ファッション",
          tag: "特設ランディングページ",
          description: "最新のカジュアルストリート衣類コレクション向けに制作した特設販売LP。高品質な商品アピールと決済・注文へのスムーズな滑り出しを実現。",
          duration: "4営業日",
          objective: "広告配信（FB・TikTok等）から流入する見込み顧客へ向けて、表示ロスを極限まで減らした最速ランディングページにて新製品をローンチする事。",
          ctaText: "コレクションを注文する",
          features: [
            "高級感のあるマガジンスタイルデザイン",
            "広告キャンペーン用1ページ構成",
            "サイズ・数量選択可能なスピーディ購入システム",
            "購買意欲を促す動的割引クーポン機能",
            "広告効果タグ（Facebook・TikTok等）標準搭載"
          ]
        };
      }
      if (project.id === "griya-property") {
        return {
          ...project,
          category: "不動産",
          tag: "物件カタログ",
          description: "新規分ajaran分譲住宅や賃貸物件の内外装、仕様条件、内見見学の申し込みをスムーズに行うためのモダンな不動産紹介ウェブサイト。",
          duration: "7営業日",
          objective: "具体的な購入意欲の高い見込み物件購入層の連絡先を特定し、物件資料をクリアに示すプラットフォームを構築する事。",
          ctaText: "内見見学を申し込む",
          features: [
            "価格・条件で探せるインタラクティブ物件一覧",
            "物件見学ツアー予約フォーム",
            "詳細スペック掲載および資料PDFワンクリック保存",
            "担当エージェント独自の即時対応チャットカード",
            "月々のお支払いを試算できる住宅ローン計算ツール"
          ]
        };
      }
      if (project.id === "digital-consultant") {
        return {
          ...project,
          category: "ビジネス",
          tag: "個人実績集",
          description: "企業の経営コンサルタントや講師などの専門職が、企業の契約や講演をより獲得しやすくするためのパーソナルブランディングLP。",
          duration: "5営業日",
          objective: "独立プロとしてのデジタルプレゼンスを確立し、オフィシャル価格を引き上げ、それに見合う評判を証明する事。",
          ctaText: "個別相談を予約する",
          features: [
            "高い専門性を際立たせるミニマリストデザイン",
            "過去の取引企業事例や詳細ケーススタディ掲載",
            "自動スケジュール（Calendly等）埋め込み",
            "実績証明ロゴ・推薦文・ビデオレビュー紹介",
            "ニュースレター（メルマガ）登録 of 動線配置"
          ]
        };
      }
    }

    if (language === "ar") {
      if (project.id === "resto-nusantara") {
        return {
          ...project,
          category: "طهي وطعام",
          tag: "مطاعم مأكولات",
          description: "موقع ويب تعريفي وقائمة وجبات تفاعلية للمطاعم الفاخرة، مع ميزة حجز الطاولات والطلب المباشر وإرسالها الفوري لواتساب المطعم.",
          duration: "5 أيام عمل",
          objective: "تعزيز السمعة الرقمية للأطعمة المحلية، وتبسيط حجز الطاولات في الأوقات المزدحمة، وتسهيل عملية طلب الوجبات.",
          ctaText: "حجز طاولة الآن",
          features: [
            "قائمة للأطباق مبوبة بصور عالية الجودة",
            "نظام حجز طاولات فوري دون تطبيقات إضافية",
            "تحويل الطلبات مباشرة للمطبخ عبر الواتساب",
            "خرائط جوجل مدمجة لتوجيه الزوار لعنوانك",
            "معرض للصور وخلاصة متجددة لحساب إنستغرام"
          ]
        };
      }
      if (project.id === "urban-style") {
        return {
          ...project,
          category: "أزياء",
          tag: "صفحة هبوط مبيعات",
          description: "صفحة هبوط مبيعات حصرية لخط أزياء حديث لملابس الشارع، يركز بشكل كامل على النقاء البصري والتسوق بخطوة واحدة.",
          duration: "4 أيام عمل",
          objective: "حملة إطلاق خط ملابس حديث بسلعة فريدة وصفحة هبوط فائقة السرعة مهيأة لاستقبال حملات فيسبوك وتيك توك الترويجية.",
          ctaText: "اطلب أزياء الشارع الآن",
          features: [
            "تصميم تحريري مميز يعزز قيمة العلامة الفخرية",
            "هيكلة مخصصة للحملات الإعلانية المدفوعة",
            "نظام دفع آمن مع اختيار المقاسات والكميات",
            "أكواد خصم ديناميكية ترفع رغبة الشراء",
            "تكامل بكسل فيسبوك وتيك توك للتعقب"
          ]
        };
      }
      if (project.id === "griya-property") {
        return {
          ...project,
          category: "عقارات",
          tag: "دليل عقاري",
          description: "منصة ممتازة لعرض المشاريع العقارية الجديدة والمواصفات السكنية وتنظيم زيارات المعاينة للمواقع.",
          duration: "7 أيام عمل",
          objective: "فرز العملاء الجادين الراغبين بالاقتناء السكني وتوفير واجهة تفصيلية غنية بالمعلومات.",
          ctaText: "احجز موعد المعاينة",
          features: [
            "دليل عقاري تفاعلي بميزات وسعر محدد",
            "نموذج لحجز زيارات وتفقد العقار ميدانيًا",
            "مواصفات الفلل الإنشائية مع تحميل كتيب PDF",
            "بطاقات تواصل مخصصة للوكلاء مع واتساب مباشر",
            "حاسبة التمويل العقاري المتكاملة لمعاينة الأقساط"
          ]
        };
      }
      if (project.id === "digital-consultant") {
        return {
          ...project,
          category: "احترافي",
          tag: "ملف أعمال شخصي",
          description: "صفحة هبوط فاخرة لتسويق العلامة الشخصية للمستشارين والخبراء، صممت للحصول على عقود تجارية جديدة.",
          duration: "5 أيام عمل",
          objective: "صناعة حضور رقمي رفيع للاستشاريين المستقلين يسهل عليهم رفع تكلفة استشاراتهم وإثبات خبرتهم.",
          ctaText: "احجز جلسة استشارة الآن",
          features: [
            "تصميم أنيق وبسيط يعزز درجات الموثوقية الشخصية",
            "أقسام لدراسة الحالات والمقترحات السابقة",
            "أدوات مدمجة لحجز مواعيد الجلسات مباشرة",
            "منصة لعرض آراء الشركاء بشهادات مصورة ومقروءة",
            "نظامات مدمجة للتسجيل في النشرة البريدية"
          ]
        };
      }
    }

    if (language === "zh") {
      if (project.id === "resto-nusantara") {
        return {
          ...project,
          category: "餐饮美食",
          tag: "餐饮美食单页",
          description: "为现代印尼特色风味餐厅定制的高端互动详情页与电子菜单。支持一键将线上排队预约和点单数据流转至微信号。",
          duration: "5 个工作日",
          objective: "提升数字获客信任度，解决门店高峰期订座难题，提供轻量化高效点餐体验。",
          ctaText: "一键选座预约",
          features: [
            "支持高清大屏图文的品类及菜系分类菜单",
            "无需加装App的线上快速秒级订座",
            "订单秒级抄送至WhatsApp或接收端",
            "深度整合谷歌地图一键路线规划与导航",
            "高品质实景装饰图册与媒体社交链集成"
          ]
        };
      }
      if (project.id === "urban-style") {
        return {
          ...project,
          category: "潮流时装",
          tag: "时装推广单页",
          description: "专为潮牌服饰新品发布量身定制的爆款单品单页。专注于产品美学展示和极简一键购买结算。",
          duration: "4 个工作日",
          objective: "针对社交渠道买量（FB/TikTok广告等）构建加载时延极短的时装专线高转化详情落地页。",
          ctaText: "立即抢购最新搭配",
          features: [
            "杂志排版风格的高雅美学潮流设计",
            "专为硬核商业广告打造的高纯净漏斗架构",
            "自带规格和订购量快速下单系统",
            "配置倒计时折扣浮窗，全天候激发下单欲",
            "内置 Facebook / TikTok Pixel 效果归因追踪"
          ]
        };
      }
      if (project.id === "griya-property") {
        return {
          ...project,
          category: "房地产",
          tag: "楼盘名册项目",
          description: "为地产代理机构和开发商定制的展示界面。用于全方位剖析新开盘楼盘、户型图纸、装潢参数并一键锁定实地预约。",
          duration: "7 个工作日",
          objective: "清洗和提炼高客单价高意愿住宅客户，打造安全真实的看房渠道。",
          ctaText: "预约专属看房时间",
          features: [
            "带有价格、区域一键检索的模块化楼盘检索",
            "自带日历看房时间锁定表单系统",
            "房屋细节描述以及一键打印/下载高档PDF画册",
            "内置资深经纪人一键呼叫悬浮工具栏",
            "内置交互式首付及房贷分期测算模拟计算器"
          ]
        };
      }
      if (project.id === "digital-consultant") {
        return {
          ...project,
          category: "商务咨询",
          tag: "学术形象画廊",
          description: "为企业管理咨询师、行业意见领袖、特聘讲师等定制的高端品格全景橱窗落地页。便于谈妥高端客单合约。",
          duration: "5 个工作日",
          objective: "建立权威的线上学术形象，增强商务谈判筹码，提供坚实背书。",
          ctaText: "即刻连线商业顾问",
          features: [
            "处处透露行业顶尖身份的奢雅简约美学包装",
            "涵盖完整实操案例剖析与项目成效陈列",
            "内置无缝多日程系统如 Calendly 挂载",
            "附带精美企业标志栏与图文录像反馈版块",
            "全集成数字订阅注册入口"
          ]
        };
      }
    }

    return project;
  };

  const filteredItems = (activeCategory === "Semua"
    ? portfolioListOriginal
    : portfolioListOriginal.filter(item => item.category === activeCategory)
  ).map(getLocalizedProject);

  return (
    <section id="portfolio" className="relative py-24 bg-zinc-950">
      
      {/* Background Decorative Neon Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left max-w-xl">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-violet-400 bg-violet-950/40 border border-violet-800/25 px-3 py-1 rounded-full">
              {language === "en" ? "Latest Portfolio" : language === "ja" ? "ポートフォリオ実績" : language === "ar" ? "حقيبة أعمالنا" : language === "zh" ? "精品数字画册" : "Portfolio Terbaru"}
            </span>
            <h2 className="mt-4 font-sans font-black text-3xl sm:text-4xl text-white tracking-tight">
              {language === "en" ? "Gallery of Our Successful Web Projects" : language === "ja" ? "ウェブサイト・LP制作の成功実績ギャラリー" : language === "ar" ? "معرض مشاريع الويب وصفحات الهبوط الناجحة" : language === "zh" ? "已交付独立站及高转化单页系列画廊" : "Galeri Proyek Desain Website & Landing Page Sukses"}
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mt-4 rounded-full"></div>
            <p className="mt-4 text-gray-400 font-medium text-sm">
              {language === "en" ? "Explore our selected high-conversion, beautifully designed web projects built for brands across diverse industries." : language === "ja" ? "様々な業種のクライアントに向けて、集客と高い離脱防止・成約率向上を追求した代表的な制作事例です。" : language === "ar" ? "دليل لبعض أهم المشاريع والمواقع التي شيدناها لعملائنا في شتى القطاعات لتنال ثقة الأسواق وترفع المبيعات." : language === "zh" ? "这里展示的是我们近期为全球各垂直领域、细分行业精英客户量身定制并已成功上线的高表现力、高转化旗舰级独立站项目。" : "Beberapa hasil proyek website yang telah kami kerjakan untuk klien dari berbagai latar belakang industri, sepenuhnya berfokus pada hasil konversi."}
            </p>
          </div>

          {/* Filtering buttons list */}
          <div className="flex flex-wrap gap-2 self-start justify-start md:justify-end">
            {categoriesList.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-600/15"
                    : "bg-cosmic-card/45 border-cosmic-border text-gray-400 hover:text-white hover:border-violet-500/30"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Dynamic Responsive Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col rounded-2xl bg-cosmic-card border border-cosmic-border hover:border-violet-500/30 overflow-hidden shadow-xl"
              >
                {/* Visual Image container with eye zoom hover effect */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  {/* Category Pill Tag floating left top */}
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-[9px] uppercase font-black tracking-widest text-cyan-400 bg-cyan-950/80 border border-cyan-500/25 px-2.5 py-1 rounded-md">
                      {project.tag}
                    </span>
                  </div>

                  {/* Desktop Hover Action overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <button
                      onClick={() => setSelectedItem(project)}
                      className="p-4 rounded-full bg-violet-600/90 text-white border border-violet-400/30 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Card description overlay */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-gray-400 tracking-wider uppercase">
                        {language === "en" ? `${project.category} Project` : language === "ja" ? `${project.category}の実績` : language === "ar" ? `مشروع ${project.category}` : language === "zh" ? `${project.category} 项目案例` : `${project.category} Website Project`}
                      </span>
                      <span className="font-mono text-[10px] text-zinc-400 flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-cyan-400" />
                        <span>{project.duration}</span>
                      </span>
                    </div>
                    
                    <h3 className="font-sans font-black text-xl text-white group-hover:text-cyan-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-cosmic-border/50 flex items-center justify-between">
                    {/* Tags list */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 3).map((stack, sIdx) => (
                        <span key={sIdx} className="font-mono text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-md text-gray-300">
                          {stack}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedItem(project)}
                      className="inline-flex items-center space-x-1 text-xs font-bold text-cyan-400 group-hover:text-white transition-colors duration-200"
                    >
                      <span>{language === "en" ? "View Details" : language === "ja" ? "詳細を見る" : language === "ar" ? "عرض التفاصيل" : language === "zh" ? "查看详情" : "Lihat Detail"}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Case Study Lightbox Overlay */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="relative w-full max-w-4xl bg-cosmic-bg border border-cosmic-border rounded-2xl overflow-hidden shadow-2xl my-8"
              >
                {/* Close Button top corner */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-black/80 text-gray-400 hover:text-white border border-white/10 z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Dynamic Content Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                  
                  {/* Left Column visual screenshot */}
                  <div className="relative aspect-[4/3] md:aspect-auto md:h-full bg-black">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Branding Tag Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="font-mono text-[9px] uppercase font-black tracking-widest text-cyan-400 bg-cyan-950/80 border border-cyan-500/25 px-2.5 py-1 rounded">
                        {selectedItem.tag}
                      </span>
                      <h2 className="text-2xl font-black font-sans text-white mt-2">
                        {selectedItem.title}
                      </h2>
                      <p className="text-[11px] text-gray-300 font-medium font-sans mt-1">
                        {language === "en" ? "PixelVerse Studio Success Case Study" : language === "ja" ? "PixelVerse Studio 成功事例の実績報告" : language === "ar" ? "دراسة حالة ناجحة من استوديو البكسل" : language === "zh" ? "PixelVerse Studio 系列数字转型优秀案列" : "PixelVerse Studio Success Case Study"}
                      </p>
                    </div>
                  </div>

                  {/* Right Column written case detail */}
                  <div className="p-6 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
                    <div>
                      <span className="font-mono text-[9px] uppercase font-bold tracking-wider text-gray-500">
                        {language === "en" ? "Problem & Business Objective" : language === "ja" ? "ビジネスの課題と改善目標" : language === "ar" ? "المشكلة التجارية والهدف" : language === "zh" ? "核心商业痛点与落地目标" : "Masalah & Objektif Bisnis"}
                      </span>
                      <p className="mt-1.5 font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-semibold">
                        {selectedItem.objective}
                      </p>
                    </div>

                    <div className="h-px bg-cosmic-border"></div>

                    <div>
                      <span className="font-mono text-[9px] uppercase font-bold tracking-wider text-gray-500">
                        {language === "en" ? "Service Description" : language === "ja" ? "ご提供サービス詳細" : language === "ar" ? "وصف الخدمة ونطاق العمل" : language === "zh" ? "项目深度描述与服务细节" : "Deskripsi Layanan"}
                      </span>
                      <p className="mt-1.5 font-sans text-xs text-gray-400 leading-relaxed">
                        {selectedItem.description}
                      </p>
                    </div>

                    <div className="space-y-2.5">
                      <span className="font-mono text-[9px] uppercase font-bold tracking-wider text-gray-500 block">
                        {language === "en" ? "High-Conversion Key Features" : language === "ja" ? "成約率を高めるための主要モジュール" : language === "ar" ? "ميزات هندسية تضمن أعلى معدل تحويل" : language === "zh" ? "高转化率设计与全栈核心交付要素" : "Fitur Utama Konversi Tinggi"}
                      </span>
                      <ul className="space-y-2">
                        {selectedItem.features.map((feat, idx) => (
                           <li key={idx} className="flex items-start space-x-2.5">
                             <span className="flex-shrink-0 w-4.5 h-4.5 rounded-full bg-violet-500/15 border border-violet-500/30 flex items-center justify-center mt-0.5">
                               <Check className="w-3 h-3 text-cyan-400" />
                             </span>
                             <span className="font-sans text-xs text-gray-200">
                               {feat}
                             </span>
                           </li>
                        ))}
                      </ul>
                    </div>

                    {/* Meta stats list */}
                    <div className="grid grid-cols-2 gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                      <div className="flex items-center space-x-2.5">
                        <Clock className="w-4 h-4 text-cyan-400" />
                        <div>
                          <span className="block font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                            {language === "en" ? "Timeline Duration" : language === "ja" ? "制作にかかった期間" : language === "ar" ? "مدة التنفيذ" : language === "zh" ? "系统交付周期" : "Durasi Pengerjaan"}
                          </span>
                          <span className="font-sans text-xs font-bold text-white">
                            {selectedItem.duration}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2.5">
                        <Sparkles className="w-4 h-4 text-violet-400" />
                        <div>
                          <span className="block font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                            {language === "en" ? "Performance Result" : language === "ja" ? "最適化速度スコア" : language === "ar" ? "مقياس السرعة والأداء" : language === "zh" ? "极限加载速度表现" : "Hasil Kecepatan"}
                          </span>
                          <span className="font-sans text-xs font-bold text-emerald-400">
                            99/100 Mobile Speed
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Tech stacks and footer action to go booking */}
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-cosmic-border">
                      <div className="self-start">
                        <span className="block font-mono text-[9px] uppercase font-bold tracking-wider text-zinc-500 mb-1">
                          {language === "en" ? "Architecture Stack" : language === "ja" ? "採用技術構成スタック" : language === "ar" ? "البنية التقنية للبرمجة" : language === "zh" ? "部署技术与底层架构" : "Arsitektur Stack"}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedItem.techStack.map((stack, idx) => (
                            <span key={idx} className="font-mono text-[9px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white font-medium">
                              {stack}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setSelectedItem(null);
                          // Select correct service in parent and scroll to prices
                          const element = document.getElementById("harga");
                          if (element) {
                            const offsetTop = element.offsetTop - 80;
                            window.scrollTo({
                              top: offsetTop,
                              behavior: "smooth",
                            });
                          }
                        }}
                        className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md transition-all duration-300"
                      >
                        <span>{language === "en" ? "Want a Website Like This?" : language === "ja" ? "このようなサイトを作りたいですか？" : language === "ar" ? "هل تريد موقعًا مثل هذا؟" : language === "zh" ? "想要拥有类似的极速独立站吗？" : "Mau Website Seperti Ini?"}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                      </button>
                    </div>

                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

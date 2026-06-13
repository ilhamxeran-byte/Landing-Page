import { ArrowUpRight, Check, Star, Utensils, ShoppingBag, Home, User, Users, Briefcase, Phone, AlertTriangle, Compass, PenTool, ClipboardList, Eye, Rocket, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "./LanguageContext";

// Paths of the generated images
const restoImg = "/src/assets/images/portfolio_resto_1781379737735.jpg";
const fashionImg = "/src/assets/images/portfolio_fashion_1781379752886.jpg";
const propertyImg = "/src/assets/images/portfolio_property_1781379765019.jpg";

export default function Hero() {
  const { t, language } = useLanguage();
  const handleScrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const whatsAppNumber = "+6285733309949";
  const whatsAppMessage = "Halo PixelVerse Studio, saya ingin konsultasi gratis mengenai landing page/website bisnis saya.";
  const whatsUrl = `https://wa.me/${whatsAppNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(whatsAppMessage)}`;

  // Section 4 - Target Industries Data
  const targetIndustries = [
    {
      title: language === "en" ? "Restaurant" : language === "ja" ? "飲食店・カフェ" : language === "ar" ? "المطاعم والمقاهي" : language === "zh" ? "品牌餐饮与咖啡厅" : "Restoran",
      description: language === "en" ? "Show food menu, locations, reservations, and information in one place." : language === "ja" ? "メニューリスト、店舗地図、事前予約フォームを美しく一元管理可能。" : language === "ar" ? "اعرض لوائح الطعام، وموقع الفروع، والحجز في مكان تواصل واحد ذكي." : language === "zh" ? "在一个地方展示您的精美菜单、多店地理位置、线上预约和商户状态。" : "Tampilkan menu, lokasi, reservasi, dan informasi bisnis dalam satu tempat.",
      icon: Utensils,
      color: "from-amber-500/20 to-orange-500/10 border-orange-500/20 text-orange-400",
    },
    {
      title: language === "en" ? "Fashion Brand" : language === "ja" ? "アパレルブランド" : language === "ar" ? "الأزياء والملابس" : language === "zh" ? "时尚及潮流服饰品牌" : "Fashion",
      description: language === "en" ? "Strengthen branding and showcase products catalog professionally." : language === "ja" ? "独特な商品カタログ、ブランドの世界観を最大限に伝えるデザイン。" : language === "ar" ? "عزز مكانة علامتك التجارية واعرض كتالوج المنتجات بلمسات بيعية جذابة." : language === "zh" ? "树立高端设计感，并以富有张力的排版全面呈现您的高清单品画册。" : "Perkuat branding dan tampilkan katalog produk secara profesional.",
      icon: ShoppingBag,
      color: "from-pink-500/20 to-rose-500/10 border-rose-500/20 text-rose-400",
    },
    {
      title: language === "en" ? "Property Agency" : language === "ja" ? "不動産・仲介" : language === "ar" ? "الخدمات العقارية" : language === "zh" ? "房地产经纪公司" : "Properti",
      description: language === "en" ? "Showcase property listings, projects, and structured inquiry forms." : language === "ja" ? "物件情報、内覧申し込み予約システム、構造化された情報展示。" : language === "ar" ? "اعرض العقارات الجارية والمشاريع وفورم استشارات بنسق مريح وجذاب." : language === "zh" ? "结构化排列全新开盘项目、精细户型纸及在线预约实地看房系统。" : "Tampilkan listing, proyek, dan formulir konsultasi secara terstruktur.",
      icon: Home,
      color: "from-blue-500/20 to-indigo-500/10 border-indigo-500/20 text-blue-400",
    },
    {
      title: language === "en" ? "SMEs & Retail" : language === "ja" ? "中小企業・小売り" : language === "ar" ? "المشاريع الصغرى" : language === "zh" ? "中小企业与新零售店" : "UMKM",
      description: language === "en" ? "Enhance local credibility with lightning fast professional business website." : language === "ja" ? "地域顧客の信頼を確実にするため、表示の早さと高級感ある企業サイトを構築。" : language === "ar" ? "ابن ثقة لا تتزعزع مع عملائك المحليين بتصميم فائق الجودة وسريع الاستجابة." : language === "zh" ? "利用极速加载体验与极富美感的设计，全方位增强中小企业的本地化品牌力。" : "Bangun kepercayaan pelanggan dengan website yang profesional.",
      icon: Users,
      color: "from-emerald-500/20 to-teal-500/10 border-teal-500/20 text-emerald-400",
    },
    {
      title: language === "en" ? "Freelancers" : language === "ja" ? "フリーランサー" : language === "ar" ? "المستقلون والمبدعون" : language === "zh" ? "自由职业与专家顾问" : "Freelancer",
      description: language === "en" ? "Display selected portfolios and contact buttons with higher authority." : language === "ja" ? "自身の素晴らしい実績やサービス内容、連絡窓口をより魅力的に表示。" : language === "ar" ? "اعرض أعمالك السابقة وباقات تقديم الخدمة بأسلوب يجلب التعاقدات." : language === "zh" ? "将个人优秀作品集及按件计价模块以优雅前沿的姿态全面曝光。" : "Perlihatkan portofolio dan layanan Anda dengan lebih meyakinkan.",
      icon: User,
      color: "from-violet-500/20 to-purple-500/10 border-purple-500/20 text-purple-400",
    },
    {
      title: language === "en" ? "Consultants" : language === "ja" ? "専門職・コンサル" : language === "ar" ? "المستشارون والأطباء" : language === "zh" ? "专家与顾问" : "Konsultan",
      description: language === "en" ? "Multiply expert authority and capture high quality lead generation." : language === "ja" ? "専門的なバックグラウンドを裏付け、新規リードを容易に獲得。" : language === "ar" ? "ضاعف من موثوقيتك كخبير واجتذب العملاء الجادين بطلبات استشارة مخصصة." : language === "zh" ? "树立行业内至高无上的权威形象，缩短获客服商的前期决策阻力。" : "Tingkatkan kredibilitas dan kemudahan mendapatkan prospek.",
      icon: Briefcase,
      color: "from-cyan-500/20 to-sky-500/10 border-sky-500/20 text-cyan-400",
    },
  ];

  // Section 5 - Process Data
  const processes = [
    {
      step: "01",
      title: "Discovery Call",
      description: language === "en" ? "Understand business goals and define technical needs." : language === "ja" ? "ビジネスの目標と現在の技術的ニーズのヒアリング。" : language === "ar" ? "فهم تطلعات العمل وتحديد المتطلبات الفنية للمشروع." : language === "zh" ? "充分摸排商业期望并确定核心开发指标。" : "Memahami kebutuhan dan tujuan bisnis.",
    },
    {
      step: "02",
      title: language === "en" ? "Planning & Scoping" : language === "ja" ? "設計・構成決定" : language === "ar" ? "التخطيط والهندسة" : language === "zh" ? "规划与模型确立" : "Perencanaan",
      description: language === "en" ? "Formulate structure map and copywriting strategy." : language === "ja" ? "サイトの全体構造と訴求コピーライティングの策定。" : language === "ar" ? "تحديد هيكل الموقع وخارطة تدفق الزائرين." : language === "zh" ? "确定整站目录架构以及转化文案主轴线。" : "Menentukan struktur dan konten website.",
    },
    {
      step: "03",
      title: language === "en" ? "Design & Development" : language === "ja" ? "開発・コーディング" : language === "ar" ? "البرمجة والتصميم" : language === "zh" ? "尖端设计与部署" : "Desain dan Pengembangan",
      description: language === "en" ? "Craft user interfaces, interactive codes, and responsive elements." : language === "ja" ? "レスポンシブデザインと高速動作のための本格コーディング。" : language === "ar" ? "تحويل المسودة لتصميم رقمي حي وتطوير كود فائق الخفة والسرعة." : language === "zh" ? "搭建精美UI，实现真实代码并对多设备完美自适应。" : "Membangun website sesuai kebutuhan.",
    },
    {
      step: "04",
      title: language === "en" ? "Testing & Revisions" : language === "ja" ? "動作テスト・修正" : language === "ar" ? "المراجعة والتعديل" : language === "zh" ? "测试与评审修改" : "Review",
      description: language === "en" ? "Conduct mutual testing and proceed with target modifications." : language === "ja" ? "表示バグや各機能チェック、フィードバックによる調整。" : language === "ar" ? "عمل اختبار شامل للموقع لمعالجة الأخطاء وإجراء التعديلات." : language === "zh" ? "进行全站流畅度与功能检测并配合进行合理的修正调整。" : "Melakukan revisi yang disepakati.",
    },
    {
      step: "05",
      title: language === "en" ? "Launch & Training" : language === "ja" ? "公開・引き渡し" : language === "ar" ? "التشغيل والتدريب" : language === "zh" ? "正式上线与交付" : "Launch",
      description: language === "en" ? "Connect custom domain registry, SEO indexes, and provide walkthrough guides." : language === "ja" ? "ドメイン紐付け。公開後の基本管理マニュアルの引き渡し。" : language === "ar" ? "ربط النطاق وتفعيل الحماية وجعل الموقع جاهزًا للتمويل والزوار." : language === "zh" ? "绑定国际域名与证书，注册谷歌控制台，提供自助维护指南。" : "Website siap digunakan.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-cosmic-bg">
      {/* Decorative Orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full filter blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-[100px] pointer-events-none"></div>

      {/* SECTION 1 — HERO */}
      <section
        id="beranda"
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-cosmic-border/60"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
                           {/* Tagline Badge */}
              <div className="inline-flex self-start items-center space-x-2 bg-violet-950/40 border border-violet-800/30 px-3.5 py-1.5 rounded-full shadow-inner">
                <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="font-mono text-[10px] font-black uppercase tracking-widest text-cyan-400">
                  DESIGN. BUILD. CONVERT.
                </span>
                <span className="text-gray-500 font-mono text-[10px]">|</span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-violet-300">
                  {t("hero.badge")}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-sans font-extrabold text-4xl sm:text-5xl xl:text-6xl text-white tracking-tight leading-[1.1] md:leading-[1.15]">
                {t("hero.title_part1")}{" "}
                {t("hero.title_part2")}{" "}
                <span className="text-gradient-primary">{t("hero.title_part3")}</span>
              </h1>

              {/* Subheadline Description */}
              <p className="text-gray-300 font-medium text-base sm:text-lg max-w-2xl leading-relaxed">
                {t("hero.desc")}
              </p>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={whatsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center space-x-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-base shadow-lg shadow-violet-500/20 hover:shadow-violet-500/35 transition-all duration-300 transform hover:-translate-y-0.5 group"
                >
                  <span>{t("hero.cta_main")}</span>
                  <ArrowUpRight className="w-5 h-5 text-cyan-455 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>
                
                <button
                  onClick={() => handleScrollToId("layanan")}
                  className="inline-flex items-center justify-center space-x-2.5 px-7 py-4 rounded-xl bg-cosmic-card/80 border border-cosmic-border hover:border-violet-500/40 text-gray-200 hover:text-white font-bold text-base transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>{t("hero.cta_secondary")}</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-400" />
                </button>
              </div>

              {/* Extra Copy Block */}
              <div className="mt-6 pt-6 border-t border-cosmic-border/50 max-w-xl">
                <p className="text-sm text-gray-400 leading-relaxed">
                  {language === "en" 
                    ? "In the digital era, a website is not just a complement. A website is a business asset that helps prospective customers discover, understand, and trust your brand."
                    : language === "ja"
                    ? "デジタル時代において、ウェブサイトは単なるおまけではありません。それは潜在的な顧客があなたのブランドを発見し、理解し、信頼するのを助ける重要なビジネス拠点です。"
                    : language === "ar"
                    ? "في العصر الرقمي، لا يعد موقع الويب مجرد مكمل عادي. بل هو أصل تجاري يساعد العملاء المحتملين على اكتشاف علامتك التجارية وفهمها والوثوق بها."
                    : language === "zh"
                    ? "在数字时代，网站不仅仅是一个补充品。它是一项关键的企业资产，能够帮助潜在客户发现、了解并信任您的品牌。"
                    : "Di era digital, website bukan sekadar pelengkap. Website adalah aset bisnis yang membantu calon pelanggan mengenal, memahami, dan mempercayai bisnis Anda."}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed mt-3 font-semibold text-zinc-300">
                  {language === "en"
                    ? "We help you build clean, modern, responsive websites focused on clear business objectives."
                    : language === "ja"
                    ? "明確なビジネス目標に焦点を当てた、クリーンでモダン、レスポンシブなウェブサイトの構築を支援します。"
                    : language === "ar"
                    ? "نساعدك في بناء مواقع ويب نظيفة وحديثة وسريعة الاستجابة تركز على تحقيق أهداف تجارية واضحة ومحددة."
                    : language === "zh"
                    ? "我们致力于为您构建界面纯净、设计现代、完美响应并聚焦于明确商业目标的旗舰级网站。"
                    : "Kami membantu Anda membangun website yang bersih, modern, responsif, dan berfokus pada tujuan bisnis yang jelas."}
                </p>
              </div>
            </div>

            {/* Right Visual mockups block containing highly detailed laptop & mobile floating interface */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center items-center">
              
              {/* Glowing orb in background */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl"></div>
              
              {/* 3D Orbit circle path element */}
              <div className="absolute w-[110%] h-[110%] border border-violet-500/5 rounded-full pointer-events-none"></div>
              <div className="absolute w-[125%] h-[125%] border border-cyan-500/5 rounded-full pointer-events-none rotate-45"></div>

              {/* Composition Wrapper */}
              <div className="relative w-full max-w-lg aspect-4/3 flex items-center justify-center">
                
                {/* Laptop mockup */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative w-[85%] z-10 transform -rotate-1 shadow-2xl shadow-black/80"
                >
                  {/* Laptop Body Outer Border */}
                  <div className="p-2.5 rounded-2xl bg-neutral-900 border border-neutral-700 shadow-2xl relative">
                    {/* Web Frame Header */}
                    <div className="flex items-center justify-between pb-1.5 px-1 bg-neutral-900 border-b border-neutral-800 rounded-t-lg">
                      <div className="flex items-center space-x-1">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      </div>
                      <div className="w-32 h-3.5 rounded bg-neutral-800 text-[8px] text-gray-500 flex items-center justify-center font-mono select-none">
                        pixelversestudio.com
                      </div>
                      <span className="w-2 h-2 opacity-0"></span>
                    </div>
                    
                    {/* Screen Content Window */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-zinc-950">
                      <img 
                        src={propertyImg} 
                        alt="Website Preview" 
                        className="w-full h-full object-cover brightness-95 contrast-[1.02]" 
                      />
                      {/* Hover Glow Accent */}
                      <div className="absolute inset-0 bg-indigo-500/5 mix-blend-overlay pointer-events-none"></div>
                    </div>
                  </div>
                  
                  {/* Keyboard Base Accent */}
                  <div className="w-[104%] h-4 bg-neutral-800 rounded-b-xl border-t border-neutral-700/80 mx-auto -mt-1 shadow-md shadow-black relative z-20">
                    <div className="w-16 h-1 bg-neutral-950/80 mx-auto rounded-full mt-0.5"></div>
                  </div>
                </motion.div>

                {/* Mobile Phone Mockup floating on the side */}
                <motion.div
                  initial={{ opacity: 0, x: 40, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="absolute right-0 bottom-4 w-[32%] z-30 shadow-2xl shadow-black/90 transform rotate-3"
                >
                  {/* Phone Body */}
                  <div className="p-1.5 rounded-3xl bg-neutral-900 border-[3px] border-neutral-700 shadow-inner relative">
                    {/* Speaker Notch */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-3.5 bg-neutral-950 rounded-full flex items-center justify-center z-10">
                      <span className="w-4 h-0.5 bg-zinc-800 rounded-full"></span>
                    </div>
                    
                    {/* Screen Content Window */}
                    <div className="relative aspect-[9/19] overflow-hidden rounded-[22px] bg-zinc-950">
                      <img 
                        src={fashionImg} 
                        alt="Mobile UI Showcase" 
                        className="w-full h-full object-cover brightness-[0.98] saturate-[1.05]" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Spherical decoration floating matching the design picture floating orb */}
                <div className="absolute top-4 right-12 w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-500/20 border border-violet-400/30 flex items-center justify-center animate-float pointer-events-none shadow-lg">
                  <div className="w-8 h-8 rounded-full bg-cosmic-bg flex items-center justify-center">
                    <Star className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PROBLEM */}
      <section
        id="masalah"
        className="relative py-24 border-b border-cosmic-border/60 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 bg-cyan-950/40 border border-cyan-800/25 px-3 py-1 rounded-full">
              Masalah Yang Sering Dihadapi
            </span>
            <h2 className="mt-4 font-sans font-black text-3xl sm:text-4xl text-white tracking-tight">
              Apakah Bisnis Anda Mengalami Salah Satu Masalah Ini?
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-gray-300 font-medium text-sm sm:text-base leading-relaxed">
              Banyak bisnis masih mengandalkan media sosial sebagai satu-satunya kanal digital.
            </p>
          </div>

          {/* Elegant Bento-style Pain List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-cosmic-card border border-cosmic-border/80 hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 w-max text-cyan-400 mb-6">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans font-extrabold text-sm text-white mb-2">
                  Kredibilitas Profesional
                </h3>
                <p className="font-sans text-xs text-gray-400 leading-relaxed">
                  Sulit membangun kredibilitas profesional di mata calon mitra maupun klien tanpa website resmi.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-cosmic-card border border-cosmic-border/80 hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 w-max text-cyan-400 mb-6">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans font-extrabold text-sm text-white mb-2">
                  Informasi Tersebar
                </h3>
                <p className="font-sans text-xs text-gray-400 leading-relaxed">
                  Informasi usaha tersebar di banyak tempat tanpa memiliki satu pusat platform informasi digital resmi.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-cosmic-card border border-cosmic-border/80 hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 w-max text-cyan-400 mb-6">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans font-extrabold text-sm text-white mb-2">
                  Sulit Menemukan Info
                </h3>
                <p className="font-sans text-xs text-gray-400 leading-relaxed">
                  Calon pelanggan kesulitan menemukan informasi penting secara cepat seperti menu, katalog, pricelist, atau lokasi.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-cosmic-card border border-cosmic-border/80 hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 w-max text-cyan-400 mb-6">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans font-extrabold text-sm text-white mb-2">
                  Peluang Hilang
                </h3>
                <p className="font-sans text-xs text-gray-400 leading-relaxed">
                  Peluang penjualan terlewat karena proses komunikasi digital yang tidak terstruktur atau terlalu lambat direspons.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-violet-950/40 to-cyan-950/20 border border-violet-800/30 text-center max-w-3xl mx-auto">
            <p className="font-sans text-sm sm:text-base text-gray-200">
              💡 <span className="font-bold text-white">Website membantu mengatasi masalah tersebut</span> dengan menghadirkan pusat informasi digital yang profesional, kredibel, dan sangat mudah diakses 24/7.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 3 — SOLUTION */}
      <section
        id="solusi"
        className="relative py-24 border-b border-cosmic-border/60 bg-cosmic-radial"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Graphics Side - Dashboard Mockup representing structured solution */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md p-4 rounded-3xl bg-neutral-900 border border-neutral-700/80 shadow-2xl">
                <div className="pb-3 border-b border-cosmic-border flex items-center justify-between">
                  <div className="flex space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  </div>
                  <span className="font-mono text-[9px] text-gray-500 uppercase">Your Business Website</span>
                </div>
                <div className="mt-4 p-4 rounded-xl bg-zinc-950 border border-cosmic-border space-y-4">
                  <div className="h-6 w-24 bg-violet-500/20 border border-violet-500/30 rounded-md"></div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-gray-800 rounded"></div>
                    <div className="h-2 w-3/4 bg-gray-800 rounded"></div>
                    <div className="h-2 w-[40%] bg-gray-800 rounded"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="h-14 bg-white/5 rounded-lg border border-white/5 flex flex-col justify-center px-3 space-y-1">
                      <span className="text-[10px] text-gray-400">Visitor Reach</span>
                      <span className="text-xs font-bold text-white">+342% 🔥</span>
                    </div>
                    <div className="h-14 bg-white/5 rounded-lg border border-white/5 flex flex-col justify-center px-3 space-y-1">
                      <span className="text-[10px] text-gray-400">Leads Convert</span>
                      <span className="text-xs font-bold text-cyan-400">98% Success</span>
                    </div>
                  </div>
                  <div className="h-10 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center text-xs font-bold text-white gap-2">
                    <span>Lihat Penawaran</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Information Side */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 bg-cyan-950/40 border border-cyan-800/20 px-3 py-1 rounded-full w-max">
                Solusi Kami
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Solusi Website yang Dirancang untuk Tujuan Bisnis Anda
              </h2>
              <p className="text-gray-300 font-medium text-sm sm:text-base leading-relaxed">
                Kami tidak hanya membuat Tampilan yang Menarik. Setiap website dirancang secara khusus untuk mencapai target usaha dan hasil nyata:
              </p>

              {/* Solution Lists */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="flex items-start space-x-3 p-3 rounded-xl bg-cosmic-card border border-cosmic-border/60">
                  <div className="p-1 rounded bg-violet-500/20 border border-violet-400/30 text-cyan-400 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-white">Layanan Profesional</h4>
                    <p className="font-sans text-xs text-gray-400 mt-0.5">Menampilkan seluruh layanan dan value usaha secara profesional & kredibel.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-xl bg-cosmic-card border border-cosmic-border/60">
                  <div className="p-1 rounded bg-violet-500/20 border border-violet-400/30 text-cyan-400 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-white">Kemudahan Komunikasi</h4>
                    <p className="font-sans text-xs text-gray-400 mt-0.5">Mempertajam Call to Action (CTA) yang memudahkan calon pelanggan menghubungi WhatsApp Anda.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-xl bg-cosmic-card border border-cosmic-border/60">
                  <div className="p-1 rounded bg-violet-500/20 border border-violet-400/30 text-cyan-400 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-white">Navigasi User-Friendly</h4>
                    <p className="font-sans text-xs text-gray-400 mt-0.5">Menyediakan seluruh informasi yang dicari calon pembeli dalam navigasi instan.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-xl bg-cosmic-card border border-cosmic-border/60">
                  <div className="p-1 rounded bg-violet-500/20 border border-violet-400/30 text-cyan-400 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-white">Pemasaran Digital</h4>
                    <p className="font-sans text-xs text-gray-400 mt-0.5">Mendukung aktivitas periklanan berbayar, analitik pixel, serta optimasi SEO organik.</p>
                  </div>
                </div>

              </div>

              {/* Solusi CTA */}
              <div className="pt-4">
                <button
                  onClick={() => handleScrollToId("kontak")}
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-650 via-indigo-600 to-cyan-600 text-white font-bold text-sm shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Diskusikan Kebutuhan Anda</span>
                  <ArrowUpRight className="w-4.5 h-4.5" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — TARGET INDUSTRIES */}
      <section
        id="industri"
        className="relative py-24 border-b border-cosmic-border/60 bg-zinc-950"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-violet-400 bg-violet-950/40 border border-violet-800/25 px-3 py-1 rounded-full">
              Industri Sasaran kami
            </span>
            <h2 className="mt-4 font-sans font-black text-3xl sm:text-4xl text-white tracking-tight">
              Kami Membantu Berbagai Jenis Bisnis Anda
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-gray-300 font-medium text-sm sm:text-base leading-relaxed">
              Setiap industri memerlukan strategi digital dan struktur konten yang berbeda untuk memancing konversi.
            </p>
          </div>

          {/* Grid of Target Industries */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetIndustries.map((ind, i) => {
              const IconComp = ind.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-cosmic-card border border-cosmic-border hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 group"
                >
                  <div className={`p-3 rounded-xl w-max mb-5 bg-gradient-to-br ${ind.color}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-sans font-extrabold text-base text-zinc-100 group-hover:text-white transition-colors">
                    {ind.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
                    {ind.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 5 — PROCESS */}
      <section
        id="sop"
        className="relative py-24 border-b border-cosmic-border/60 bg-cosmic-radial"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 bg-cyan-950/40 border border-cyan-800/20 px-3 py-1 rounded-full">
              SOP Alur Kerja
            </span>
            <h2 className="mt-4 font-sans font-black text-3xl sm:text-4xl text-white tracking-tight">
              Proses Pengerjaan yang Jelas dan Transparan
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-gray-300 font-medium text-sm sm:text-base leading-relaxed">
              Langkah terstruktur untuk memastikan website diselesaikan tepat waktu, sesuai ekspektasi, dan siap pakai.
            </p>
          </div>

          {/* Timeline Sequence */}
          <div className="relative mt-12">
            
            {/* Thread Line across timeline items - visible on screen size */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-violet-600/10 via-cyan-500/20 to-violet-600/10 -translate-y-1/2 hidden lg:block"></div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {processes.map((p, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                  
                  {/* Step bubble */}
                  <div className="w-16 h-16 rounded-2xl bg-zinc-900 border-2 border-cosmic-border group-hover:border-violet-500/60 flex items-center justify-center font-mono text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 shadow-xl transition-all duration-300 mb-4 transform group-hover:scale-105">
                    {p.step}
                  </div>

                  <h3 className="font-sans font-extrabold text-sm text-white group-hover:text-cyan-400 transition-colors">
                    {p.title}
                  </h3>
                  
                  <p className="font-sans text-xs text-gray-400 mt-2 leading-relaxed max-w-[200px]">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6 — CTA */}
      <section
        id="cta-home"
        className="relative py-20 bg-gradient-to-br from-[#0c0f1d] via-[#120e29] to-[#0c0f1d]"
      >
        {/* Background neon glows */}
        <div className="absolute inset-0 bg-violet-600/5 rounded-3xl pointer-events-none filter blur-xl"></div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 relative z-10">
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Siap Memiliki Website yang Lebih Profesional?
          </h2>
          
          <p className="mt-4 text-gray-300 font-medium text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Mari diskusikan kebutuhan bisnis Anda dan temukan solusi website yang sesuai.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href={whatsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-indigo-700 text-white font-extrabold text-base shadow-lg shadow-violet-500/20 hover:shadow-violet-500/45 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 text-cyan-400" />
              <span>Hubungi via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

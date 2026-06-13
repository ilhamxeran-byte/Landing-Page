import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, Target, Eye, Sparkles, Zap, DollarSign, MessageSquare, Briefcase, HelpCircle, Shield, AlertTriangle } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function AboutFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { language, t } = useLanguage();

  const values = [
    {
      title: language === "en" 
        ? "Conversion First Design" 
        : language === "ja" 
        ? "CV最優先のデザイン" 
        : language === "ar" 
        ? "التصميم الموجه للتحويل" 
        : language === "zh" 
        ? "高转化率优先设计" 
        : "Conversion First Design",
      desc: language === "en"
        ? "Every website is structured clearly to drive Whatsapp consultation bookings, catalog downloads, and phone leads."
        : language === "ja"
        ? "すべてのページは、訪問者がスムーズに相談、見積、カタログ請求をして頂ける動線を徹底追求しています。"
        : language === "ar"
        ? "كل موقع مصمم خصيصاً لدفع الزوار لحجز استشارات الواتساب، وتحميل الكتالوجات، والتواصل الفوري."
        : language === "zh"
        ? "每个层级的页面设计都经过精心构造，旨在全方位促进访客迅速触发在线咨询、申请书下载和直接电话留存。"
        : "Setiap halaman dirancang untuk mendorong pengunjung melakukan chat WhatsApp, mengisi formulir, booking, atau memesan katalog Anda secara instan.",
      icon: Zap,
    },
    {
      title: language === "en"
        ? "Fast Delivery"
        : language === "ja"
        ? "迅速な納品スピード"
        : language === "ar"
        ? "التسليم السريع"
        : language === "zh"
        ? "严谨极速高质交付"
        : "Fast Delivery",
      desc: language === "en"
        ? "Efficient agile development sprint process to support your project launch on time without any weeks of delays."
        : language === "ja"
        ? "透明性の高いアジャイル開発により、無駄な引き延ばしなしにプロジェクトを迅速に立ち上げます。"
        : language === "ar"
        ? "عمليات تطوير رشيقة وشفافة تضمن تشغيل مشروعك الرقمي في وقته المحدد دون تأخير لأسابيع."
        : language === "zh"
        ? "采用行业一流的高敏捷性项目研发流程，帮助您的品牌及项目在目标时间段内实现快速上线，分秒必争。"
        : "Proses pengerjaan cepat dan transparan guna mendukung peluncuran digital bisnis Anda tanpa penundaan berminggu-minggu.",
      icon: Sparkles,
    },
    {
      title: language === "en"
        ? "Affordable Premium"
        : language === "ja"
        ? "圧倒的コストパフォーマンス"
        : language === "ar"
        ? "جودة متميزة بتكلفة مرنة"
        : language === "zh"
        ? "极优性价比高端体验"
        : "Affordable Premium",
      desc: language === "en"
        ? "Outstanding top class modern designs at practical local pricing optimized perfectly for local SMB owners."
        : language === "ja"
        ? "海外や国内の大手水準に劣らない高品質デザインを、中小企業様や個人様にも手の届く合理的な価格でご提供します。"
        : language === "ar"
        ? "تقديم تصميمات ممتازة ومواقع فائقة السرعة بأسعار عادلة ومدروسة للمشاريع والشركات الناشئة."
        : language === "zh"
        ? "将国际顶尖水准的现代高端设计与本地化的透明合理报价结合，全心呵护中小微创业者的每一分预算。"
        : "Menghadirkan desain kelas atas berkecepatan tinggi dengan biaya yang rasional untuk UMKM dan pemilik bisnis lokal Indonesia.",
      icon: DollarSign,
    },
    {
      title: language === "en"
        ? "Direct Communication"
        : language === "ja"
        ? "制作者との直接対話"
        : language === "ar"
        ? "تواصل مباشر وبسيط"
        : language === "zh"
        ? "一对一技术骨干直连"
        : "Direct Communication",
      desc: language === "en"
        ? "Communicate directly with our lead developers with no bureaucratic layers for quick corrections and updates."
        : language === "ja"
        ? "営業マンの仲介を挟まずに、エンジニアと直接ご相談頂けるため、修正や追加要望をスピーディに反映可能です。"
        : language === "ar"
        ? "تتواصل مباشرة مع المهندسين والمصممين دون وسطاء، مما يجعل إجراء التعديلات يتم بسرعة وبدقة متناهية."
        : language === "zh"
        ? "打破传统销售人员传话筒式的冗长沟通壁垒，让您直面核心技术团队沟通，大幅削减修改与迭代时间成本。"
        : "Anda berkomunikasi langsung dengan tim teknis pembuat website tanpa hambatan birokrasi, pengerjaan revisi jadi lebih cepat tepat sasaran.",
      icon: MessageSquare,
    },
    {
      title: language === "en"
        ? "Business-Oriented"
        : language === "ja"
        ? "成果重視のアプローチ"
        : language === "ar"
        ? "التركيز على تحقيق الأرباح"
        : language === "zh"
        ? "核心商业战略驱动"
        : "Business-Oriented Approach",
      desc: language === "en"
        ? "Our priority is maximizing your conversions and supporting your sales goals, not just clean aesthetic look."
        : language === "ja"
        ? "単なる見た目の美しさに留まらず、アクセスした顧客をアクションへ導くためのビジネスの成果を追求します。"
        : language === "ar"
        ? "هدفنا الأساسي هو تحويل موقعك إلى مصدر حقيقي للأرباح وجذب العملاء بدلاً من مجرد تصميم مظهر جمالي فقط."
        : language === "zh"
        ? "我们秉持的原则是：视觉只是辅助手段，助力您攻城略地、获取源源不断的客户询盘与销售额才是坚若磐石的根本。"
        : "Fokus utama kami adalah mendukung pencapaian tujuan bisnis Anda secara nyata, bukan sekadar aspek estetika visual belaka.",
      icon: Briefcase,
    }
  ];

  const painPoints = [
    { 
      title: language === "en" ? "Difficult to Get Customers Online" : language === "ja" ? "Webからの集客が難しい" : language === "ar" ? "صعوبة جذب عملاء جدد عبر الإنترنت" : language === "zh" ? "传统线下模式获取客源日益维艰" : "Sulit Mendapatkan Pelanggan Online", 
      text: language === "en" 
        ? "Relying purely on manual word-of-mouth builds slow pipeline. Introduce an automated lead capture page." 
        : language === "ja" 
        ? "紹介や看板、ビラだけで稼働する集客にはいつか限界がきます。今こそ、効率の良いオンライン発信が不可欠です。" 
        : language === "ar" 
        ? "الاعتماد فقط على الترويج الشفهي أو الإعلانات الموزعة يدويًا أمر مرهق ومجهد، الوقت حان لتبني أساليب رقمية ذكية." 
        : language === "zh" 
        ? "单纯依仗实体老客转介绍会使业务蓄水池干涸，现在应全面配置全套全自动引流获客单页系统。" 
        : "Mengandalkan sebaran leaflet fisik atau rujukan manual terasa melelahkan, saatnya membuat sistem lead generation otomatis dengan landing page." 
    },
    { 
      title: language === "en" ? "Competitors Look Highly Credible" : language === "ja" ? "競合のサイトが圧倒的に魅力的" : language === "ar" ? "المنافسون يظهرون بشكل أكثر احترافية" : language === "zh" ? "竞品同行在官网上尽显高大上" : "Kompetitor Terlihat Jauh Lebih Profesional", 
      text: language === "en" 
        ? "They already possess modern lightning-fast websites. Don't lose prospects to competitors due to laggy details." 
        : language === "ja" 
        ? "ライバル企業が洗練された高速ウェブサイトを持っているなら、ただでさえ有望な顧客が流出してしまうかもしれません。" 
        : language === "ar" 
        ? "المنافسون يمتلكون بالفعل مواقع ويب حديثة وفائقة السرعة، لا تدع عملائك يذهبون لمكان آخر لعدم توفر بياناتك بوضوح." 
        : language === "zh" 
        ? "您的绝佳客户在暗中早已访问了同行配置的极致轻巧的科技感独立网站，绝不能在最初印象上败下阵来。" 
        : "Kompetitor Anda barangkali sudah memiliki website modern berkecepatan tinggi, jangan biarkan calon pelanggan beralih tempat karena keterbatasan info." 
    },
    { 
      title: language === "en" ? "Relying 100% on Social Media Platforms" : language === "ja" ? "SNSにのみ高依存している" : language === "ar" ? "الاعتماد حصرًا على شبكات التواصل الاجتماعي" : language === "zh" ? "重度或完全绑定社交公域流量" : "Hanya Mengandalkan Media Sosial", 
      text: language === "en" 
        ? "Social apps are great driver of eye-balls, but ownership of your web ensures immunity to sudden bans." 
        : language === "ja" 
        ? "SNSのアカウントは効果的ですが「自分の城」ではありません。アルゴリズム変更やアカウント凍結の心配不要なウェブサイトを作りましょう。" 
        : language === "ar" 
        ? "وسائل التواصل رائعة للغاية لجلب المتابعين، لكن الموقع هو أصلك الدائم غير المعرض لخطر الإغلاق أو القيود المفاجئة." 
        : language === "zh" 
        ? "自媒体平台当然带来不错的公域流量，但自己的线上旗舰官网才是最稳健的资产，抗封防禁、可控性最高。" 
        : "Media sosial adalah kendaraan traffic yang bagus, tapi website adalah kantor milik Anda sendiri. Tidak rentan banned dan meningkatkan konversi." 
    },
  ];

  const faqs = [
    {
      q: language === "en" 
        ? "What is the detailed development process?" 
        : language === "ja" 
        ? "制作から公開までの具体的な流れはどのようになりますか？" 
        : language === "ar" 
        ? "ما هي خطوات ومراحل تطوير موقعي بالتفصيل؟" 
        : language === "zh" 
        ? "请问网站建设与落地页交付的完整步骤是什么？" 
        : "Bagaimana proses pengerjaan website di PixelVerse Studio?",
      a: language === "en"
        ? "Extremely straightforward: (1) WhatsApp deep consultation study, (2) Detailed package & spec mapping, (3) Prototype design preview, (4) Swift code development and speed SEO integrations, (5) Launch & hand-over files training."
        : language === "ja"
        ? "非常にシンプルです。(1)お問い合わせ・方向性確認、(2)要件・仕様・概算のお見積りの確定、(3)プロトタイプ画面デザイン案、(4)コーディング開発とSEOの最適化テスト、(5)検収・納品および基本的な管理マニュアルの引き渡しとなります。"
        : language === "ar"
        ? "(1) استشارة واتساب عميقة، (2) اختيار وتخصيص الخطة والخصائص بدقة، (3) معاينة مسودة التصميم المبدئي، (4) البرمجة والترميز الفعلي واختبار سرعة الموقع وجاهزية الـ SEO، (5) تدريب وإطلاق وتسليم الملفات النهائية."
        : language === "zh"
        ? "极其清晰透明：(1) 通过 WhatsApp/微信 开展对痛点需求的深度剖析洽谈； (2) 签订具体的配置项包与交付时间； (3) 呈送定制的模型设计草案进行评审； (4) 进行卓越编写并实施前沿的SEO与页面加载速度调整； (5) 将域名关联并正式交付上线并提供日常自助维护视频使用培训。"
        : "Prosesnya sangat transparan: (1) Konsultasi via WA untuk membedah kebutuhan, (2) Pengisian form estimasi & kustomisasi, (3) Pembuatan mockup desain awal, (4) Development & uji kecepatan optimasi SEO, dan (5) Serah terima file beserta training pengelolaan mandiri.",
    },
    {
      q: language === "en"
        ? "Can we edit contents and values ourselves later?"
        : language === "ja" 
        ? "公開後に、ニュースやテキスト、写真素材などを自分自身で更新できますか？" 
        : language === "ar" 
        ? "هل يمكنني تعديل وإدارة المحتوى والبيانات بنفسي لاحقاً؟" 
        : language === "zh" 
        ? "网站落成启用之后，我自己能够便捷地上传产品或更新文字吗？" 
        : "Apakah website yang dibuat bisa di-edit sendiri nantinya?",
      a: language === "en"
        ? "Yes! We build with highly localized and visual management systems. We also supply a 5-minute custom learning video so you can add images, change services description, or download leads instantly."
        : language === "ja"
        ? "はい、可能です！私たちは更新作業が簡単な管理システムを採用して設計しているため、基本的な操作ガイドラインがあれば特別な知識ゼロでテキストや画像を書き換えることができます。"
        : language === "ar"
        ? "بالتأكيد! نعتمد على لوحات تحكم وإدارة سهلة للغاية وبسيطة. بجانب تدريب مباشر وتوفير فيديو قصير يوضح لك كيفية تبديل النصوص وتنزيل مدخلات وبيانات الزوار بأنفسكم."
        : language === "zh"
        ? "绝对没有压力！我们采用极度直观对新手非常友好的可视化后台系统进行底层搭建。随交付会专门附赠一部10分钟的微型实操保姆级演示视频，协助您的职员掌握自行修改价格、替换图文和导出门诊表单的高层秘笈。"
        : "Tentu saja! Kami membangun website dengan CMS (Content Management System) yang ramah pengguna. Kami juga menyediakan panduan video pembelajaran singkat bagi staff Anda untuk mengubah teks, foto produk, blog, atau mengunduh leads formulir secara mandiri.",
    },
    {
      q: language === "en"
        ? "Are Domain name and Cloud hosting included in the pricing?"
        : language === "ja" 
        ? "表示されている料金にはドメインやレンタルサーバーの維持費も含まれていますか？" 
        : language === "ar" 
        ? "هل تكلفة حجز اسم النطاق (domain) والاستضافة (hosting) مشمولة بالخطط؟" 
        : language === "zh" 
        ? "公示的套餐价格是不是已经包揽了域名购买与云服务器的租赁开销？" 
        : "Apakah harga tersebut sudah termasuk domain dan hosting?",
      a: language === "en"
        ? "Yes! The Business Website and Custom Enterprise plans include free registration of .com or .id domain names & full 1-year ultra fast premium Cloud Hosting server. Starter values can run with your own domain or we setup for a tiny addon."
        : language === "ja"
        ? "ビジネスサイト、およびカスタム開発のプランには、1年間有効な無料の独自ドメイン（.com など）と高速なプレミアムサーバーの初期使用料が最初から含まれております。ご安心ください。"
        : language === "ar"
        ? "نعم! تشمل باقات موقع الشركة والطلب المخصص حجز اسم النطاق (.com أو .id حسب المتوفر) واستضافة سحابية متميزة وفائقة السرعة مجانًا للعام الأول."
        : "Ya! Paket Business Website & Premium Custom sudah termasuk gratis Domain (.com atau .id sesuai ketersediaan) serta Premium Cloud Hosting berkecepatan penuh selama 1 tahun pertama. Untuk Landing Page Starter, Anda bisa menggunakan domain kustom sendiri atau kami bantu siapkan dengan biaya terjangkau.",
    },
    {
      q: language === "en"
        ? "Does PixelVerse Studio assist with maintenance operations?"
        : language === "ja" 
        ? "出来上がったホームページの、納品後の運用サポートやメンテナンスも提供していますか？" 
        : language === "ar" 
        ? "هل يقدم استوديو PixelVerse خدمات المتابعة والصيانة المستمرة للموقع؟" 
        : language === "zh" 
        ? "在系统完工交给客户后，PixelVerse 还会提供技术维护保障吗？" 
        : "Apakah PixelVerse Studio menyediakan layanan maintenance setelah website selesai?",
      a: language === "en"
        ? "Yes, we support our projects with monthly Website Maintenance plans. It includes database backups updates, Server uptime check-ups, antivirus scans, and custom emergency resolution technical support."
        : language === "ja"
        ? "はい、ご提供しております。サーバーの安定稼働監視、ファイルの自動定期バックアップ、OS側のセキュリティ調整等のトータル管理パッケージを用意していますので、安心してお任せください。"
        : language === "ar"
        ? "نعم بالقطع! نقدم باقات صيانة دورية للمواقع تشمل حماية وتحديث خوادم السيرفر، وإنشاء نسخ احتياطية آمنة، وضمان التشغيل المستقر 24/7."
        : "Ya, kami menyediakan paket Website Maintenance bulanan. Layanan ini mencakup update konten berkelanjutan, backup mingguan, pemantauan uptime server, proteksi malware, serta support darurat jika terjadi kegagalan teknis.",
    },
    {
      q: language === "en"
        ? "What is the typical timeframe needed to launch?"
        : language === "ja" 
        ? "標準的な各プランの納期はどのくらいの日数になりますか？" 
        : language === "ar" 
        ? "كم تبلغ مدة ووقت إنجاز الموقع بالكامل عادة؟" 
        : language === "zh" 
        ? "平均研发需要几个周期？" 
        : "Berapa lama estimasi pengerjaan rata-rata?",
      a: language === "en"
        ? "Landing Page project usually requires 3-5 days. Dedicated multi-page business website needs 7-14 days. Premium Enterprise solutions ranges between 14-30 days according to database logic depth."
        : language === "ja"
        ? "ランディングページ制作は通常3〜5営業日です。複数の下層を含むビジネス向けのマルチページ構成は7〜14営業日。複雑な社内データベース構築等は14〜30営業日を目安としております。"
        : language === "ar"
        ? "صفحة الهبوط البسيطة تحتاج من 3 إلى 5 أيام عمل فقط. باقة موقع الشركة الكامل تتطلب من 7 إلى 14 يومًا، أما الأنظمة والطلبات الخاصة فتحتاج من 14 إلى 30 يوم عمل كحد أقصى تبعا لتعقيد المخرجات المطلوبة."
        : "Landing Page Starter membutuhkan waktu sekitar 3-5 hari kerja. Business Website multi-halaman membutuhkan 7-14 hari kerja, sedangkan Premium Custom Website memerlukan 14-21 hari kerja sesuai kompleksitas sistem integrasi yang diminta.",
    }
  ];

  return (
    <section id="tentang-kami" className="relative py-24 bg-cosmic-radial border-t border-cosmic-border">
      
      {/* Decorative Blur Element */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Pitch, Mission & Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 bg-cyan-950/40 border border-cyan-800/20 px-3 py-1 rounded-full">
              {language === "en" ? "Missions & Vision" : language === "ja" ? "ミッション & ビジョン" : language === "ar" ? "الرؤية والرسالة" : language === "zh" ? "核心企业愿景" : "Misi & Visi PixelVerse"}
            </span>
            
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight leading-snug">
              {language === "en" 
                ? "Reliable Digital Growth Partner for Outstanding Operations"
                : language === "ja"
                ? "ビジネスの価値を最大化する絶対的オンラインパートナー"
                : language === "ar"
                ? "شريكك الرقمي الموثوق لدعم نمو وازدهار علامتك التجارية"
                : language === "zh"
                ? "您值得托付、值得信赖的品牌成长商业数字化伙伴"
                : "Agency Partner Pertumbuhan Digital Andal Bisnis"}
            </h2>
            
            <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed">
              {language === "en"
                ? "PixelVerse Studio was founded with a unified mission: help brands, freelance consultants, local businesses, and modern enterprises build lightning-fast web infrastructure that is affordable, striking, and built strictly to drive business results."
                : language === "ja"
                ? "PixelVerse Studioは、ブランド、フリーランス、ローカルビジネス、そして現代の企業が、手頃な価格で美しく、ビジネスの成果を導く高速かつ安定したウェブサイトを持つ重要性を理解し、その実現を全力で支援します。"
                : language === "ar"
                ? "نسعى لتمكين الشركات والأفراد من امتلاك مواقع هادفة وراقية ترفع مستوى الثقة وتسهل وصول العملاء لخدماتهم بسلاسة تامة ومردود عالي."
                : language === "zh"
                ? "PixelVerse Studio 拥有一群懂技术、更懂商业变现的顶级开发极客学子。我们只致力于打磨能产生实质效益、界面高端、速度一流的现代化企业官网与线索引流落地页。"
                : "PixelVerse Studio hadir sebagai solusi agensi pembuatan website dan landing page yang dirancang khusus untuk membantu UMKM, bisnis lokal, profesional, dan brand berkembang. Kami fokus merancang sistem halaman penjualan berkinerja tinggi, modern, responsif, dan terjangkau."}
            </p>

            <div className="p-5 rounded-2xl bg-cosmic-card border border-cosmic-border space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/25 mt-0.5">
                  <Target className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-base text-white">
                    {language === "en" ? "Our Mission" : language === "ja" ? "わたしたちのミッション" : language === "ar" ? "مهمتنا الأساسية" : language === "zh" ? "我们的重大使命" : "Misi Kami"}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">
                    {language === "en"
                      ? "Boost brand credibility and simplify user client acquisition channels with highly localized premium developer design."
                      : language === "ja"
                      ? "卓越したデザイン、強力な表示パフォーマンス、洗練されたインターフェースを通じて、競合より頭一つ抜けた信用度を築くお手伝いをします。"
                      : language === "ar"
                      ? "تمكين عملائنا من بناء هويات رقمية مذهلة تزيد من الموثوقية وتبسّط قنوات البيع والحصول على عملاء باستمرار."
                      : "Membantu bisnis dan profesional membangun kehadiran digital yang kuat melalui website berkualitas tinggi, desain modern, dan pengalaman pengguna yang berorientasi nyata pada hasil bisnis."}
                  </p>
                </div>
              </div>

              <div className="h-px bg-cosmic-border/60"></div>

              <div className="flex items-start space-x-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/25 mt-0.5">
                  <Eye className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-base text-white">
                    {language === "en" ? "Our Vision" : language === "ja" ? "わたしたちのビジョン" : language === "ar" ? "رؤيتنا المستقبلية" : language === "zh" ? "我们的长远愿景" : "Visi Kami"}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">
                    {language === "en"
                      ? "Empower enterprise scalability worldwide with swift turnaround, beautiful art vectors, and 24/7 web security."
                      : language === "ja"
                      ? "スピーディーかつ透明性の高いサービスを提供することで、インターネットから生まれる無限のビジネス機会を身近にすることです。"
                      : language === "ar"
                      ? "أن نكون الوجهة الراقية والموثوقة لبناء وتأمين الخوادم والمواقع الإلكترونية ورفع مستويات الكفاءة لجميع الشركات الناشئة."
                      : "Menjadi agency website dan landing page terpercaya di Indonesia yang dikenal karena kualitas desain yang estetik, waktu pengerjaan cepat, dan kontribusi nyata terhadap kelangsungan omzet klien."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Painpoints/Ideal Profiles mapping */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-violet-400 bg-violet-950/40 border border-violet-800/25 px-3 py-1 rounded-full">
              {language === "en" ? "Critical Industry Problems" : language === "ja" ? "よくあるビジネスの課題" : language === "ar" ? "قائمة التحديات والصعوبات" : language === "zh" ? "核心商业痛点" : "Ideal Customer Profile Painpoints"}
            </span>

            <h3 className="font-sans font-black text-2xl sm:text-3xl text-white tracking-tight">
              {language === "en" 
                ? "Is Your Business Stagnant Due To These?"
                : language === "ja"
                ? "あなたの店舗や会社は、この壁に直面していませんか？"
                : language === "ar"
                ? "هل يواجه نشاطك التجاري هذه العوائق بانتظام؟"
                : language === "zh"
                ? "您的企业与品牌是否也深受以下掣肘影响？"
                : "Apakah Bisnis Anda Menghadapi Masalah Ini?"}
            </h3>
            
            <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
              {language === "en"
                ? "Local business operations often struggle in digital domains due to lacking internal tech developers. PixelVerse Studio handles all complexities."
                : language === "ja"
                ? "専門の人材も技術的な時間も不足しているオーナー様のために、PixelVerse Studioが保守、安全対策、集客構造を完全に代行します。"
                : language === "ar"
                ? "كثير من أصحاب الأعمال يواجهون صعوبة لعدم وجود الوقت أو الكوادر الفنية اللازمة، هنا يأخذ استوديوونا هذه المهمة المعقدة عن كاهلك."
                : "Banyak pemilik usaha lokal menemui hambatan digital karena tidak memiliki waktu dan tim teknis internal. PixelVerse Studio mengambil alih kerumitan tersebut untuk Anda."}
            </p>

            <div className="space-y-3">
              {painPoints.map((pain, id) => (
                <div key={id} className="p-4 rounded-xl bg-black/40 border border-red-500/10 hover:border-red-500/20 flex space-x-3 transition-colors duration-200">
                  <div className="flex-shrink-0 mt-0.5">
                    <span className="inline-flex items-center justify-center p-1.5 rounded bg-red-950/20 border border-red-500/30">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                    </span>
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-sm text-white">{pain.title}</h5>
                    <p className="font-sans text-xs text-gray-400 mt-1 leading-normal">{pain.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Unique Selling Propositions Bento Grid */}
        <div className="mb-24 space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="font-sans font-black text-2xl text-white tracking-tight">
              {language === "en" ? "Why Partner With Us?" : language === "ja" ? "選ばれる5つの強み" : language === "ar" ? "لماذا استوديو PixelVerse؟" : language === "zh" ? "为什么选择我们的定制方案？" : "Mengapa Memilih PixelVerse Studio?"}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-gray-400 mt-2">
              {language === "en"
                ? "Our unique values designed to put your business above standard web design studios."
                : language === "ja"
                ? "単なるテンプレート制作会社とは圧倒的に異なる、高い品質保証の理由です。"
                : language === "ar"
                ? "الميزات التنافسية والقيم الحقيقية التي ننفرد بها لنكون دائمًا أفضل شريك لعملك."
                : "USP (Unique Selling Proposition) yang membedakan kualitas agensi kami dibanding studio pembuatan standar lainnya."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((v, idx) => {
              const IconComp = v.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-cosmic-card border border-cosmic-border hover:border-violet-500/20 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between space-y-4"
                >
                  <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/25 flex items-center justify-center w-max">
                    <IconComp className="w-4.5 h-4.5 text-cyan-400" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-sans font-extrabold text-sm text-white leading-tight">
                      {v.title}
                    </h4>
                    <p className="font-sans text-[11px] text-gray-400 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Accordions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-15 space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 bg-cyan-950/40 border border-cyan-800/20 px-3 py-1 rounded-full">
              {language === "en" ? " frequently asked questions" : "frequently asked questions (FAQ)"}
            </span>
            <h3 className="font-sans font-black text-2xl sm:text-3xl text-white tracking-tight">
              {language === "en" ? "Frequently Asked Questions" : language === "ja" ? "よくある質問と回答" : language === "ar" ? "الأسئلة الشائعة والمكررة" : language === "zh" ? "客户常见高频疑问解答" : "Pertanyaan yang Sering Diajukan Klien kami"}
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mt-2"></div>
            <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
              {language === "en"
                ? "Details on digital asset ownership rights, server updates, pricing structures, and post-launch master technical support."
                : language === "ja"
                ? "ドメイン名簿、所有権、年間ランニングコスト、修正対応、セキュア対策等に関してクリアに回答いたします。"
                : language === "ar"
                ? "إجابات شافية وواضحة حول حقوق ملكية الأصول، وتكاليف الخوادم السنوية، وآليات الصيانة المباشرة والدعم."
                : "Mulai dari kepemilikan aset, biaya tahunan, cara perubahan sistem, hingga proses support teknis harian. Cari jawabannya secara cepat di sini."}
            </p>
          </div>

          <div className="lg:col-span-7 space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-cosmic-border bg-cosmic-card overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-sans font-extrabold text-xs sm:text-sm text-zinc-100 hover:text-white"
                  >
                    <span>{faq.q}</span>
                    <span className="flex-shrink-0 p-1 rounded-lg bg-white/5 text-gray-400">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
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

      </div>
    </section>
  );
}

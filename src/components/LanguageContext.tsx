import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "id" | "en" | "ja" | "ar" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  id: {
    // Header & Navigation
    "nav.home": "Beranda",
    "nav.services": "Layanan",
    "nav.pricing": "Harga",
    "nav.about": "Tentang Kami",
    "nav.contact": "Kontak",
    "nav.cta": "+62 857-3330-9949",
    "nav.mobile_cta": "Konsultasi WhatsApp Gratis",
    
    // Header language text
    "lang.name": "Bahasa",
    "lang.id": "Bahasa Indonesia",
    "lang.en": "English",
    "lang.ja": "日本語",
    "lang.ar": "العربية",
    "lang.zh": "中文",

    // Hero Section
    "hero.badge": "⚡ PIXELVERSE STUDIO",
    "hero.title_part1": "Website Elegan &",
    "hero.title_part2": "Kinerja Tinggi",
    "hero.title_part3": "Untuk Bisnis Anda",
    "hero.desc": "Kami membantu Anda membangun website yang bersih, modern, responsif, dan berfokus pada tujuan bisnis yang jelas.",
    "hero.cta_main": "Mulai Konsultasi",
    "hero.cta_secondary": "Lihat Portofolio",
    "hero.trust": "Dipercaya oleh mitra bisnis & pemilik usaha di Indonesia",

    // Hero Section Pain Points Title
    "hero.pain_title": "Tantangan Bisnis Tanpa Website",
    "hero.pain_subtitle": "Jangan biarkan kompetitor merebut pasar Anda hanya karena kehadiran digital Anda kurang profesional.",
    "hero.pain_1_title": "Kurang Kredibilitas",
    "hero.pain_1_desc": "Sulit membangun kredibilitas profesional di mata calon mitra maupun klien tanpa website resmi.",
    "hero.pain_2_title": "Aset Berpencar",
    "hero.pain_2_desc": "Informasi usaha tersebar di banyak tempat tanpa memiliki satu pusat platform informasi digital resmi.",
    "hero.pain_3_title": "Peluang Hilang",
    "hero.pain_3_desc": "Peluang penjualan terlewat karena proses komunikasi digital yang tidak terstruktur atau terlalu lambat direspons.",

    // Services Section
    "services.badge": "LAYANAN KAMI",
    "services.title": "Solusi Digital Terbaik Untuk Bisnis Anda",
    "services.desc": "Sistem terintegrasi dari hulu ke hilir untuk mempercepat pertumbuhan dan kredibilitas di dunia digital.",
    "services.action_text": "Pilih Layanan Ini",
    
    "service.lp.title": "Landing Page Penjualan",
    "service.lp.desc": "Solusi halaman tunggal (one-page) profesional dengan copywriting persuasif yang dirancang khusus untuk mengonversi pengunjung iklan Anda menjadi prospek penjualan.",
    "service.lp.feature1": "Copywriting Jualan Persuasif",
    "service.lp.feature2": "Desain Berorientasi Konversi",
    "service.lp.feature3": "Kecepatan Loading Super Cepat",
    
    "service.web.title": "Website Profil Bisnis",
    "service.web.desc": "Website multi-halaman elegan untuk menyajikan identitas brand, struktur tim, galeri portofolio, katalog produk, dan formulir pendaftaran secara kredibel.",
    "service.web.feature1": "Struktur Multi-halaman Rapi",
    "service.web.feature2": "Desain Premium Eksklusif",
    "service.web.feature3": "Dukungan Optimasi SEO",

    "service.maint.title": "Pemeliharaan & Optimasi",
    "service.maint.desc": "Layanan pemeliharaan sistem bulanan mencakup update konten berkelanjutan, backup mingguan, patch keamanan, proteksi malware, dan support teknis darurat.",
    "service.maint.feature1": "Keamanan SSL & Backup Terjadwal",
    "service.maint.feature2": "Update Konten Kapan Saja",
    "service.maint.feature3": "Pemantauan Uptime Server 24/7",

    // Portfolio Section
    "portfolio.badge": "PORTFOLIO",
    "portfolio.title": "Karya yang Telah Kami Selesaikan",
    "portfolio.desc": "Jelajahi portofolio website premium yang dirancang khusus untuk kesuksesan operasional mitra kami.",
    "portfolio.category.all": "Semua Karya",
    "portfolio.visit": "Kunjungi Situs",

    // Pricing & Calculator Section
    "pricing.badge": "PAKET INVESTASI",
    "pricing.title": "Pilih Paket atau Hitung Estimasi Anda",
    "pricing.desc": "Tersedia paket andalan kami atau gunakan kalkulator estimasi di bawah untuk menaksir harga secara real-time sesuai preferensi fitur Anda.",
    "pricing.custom_calculator": "Kalkulator Estimasi Biaya Custom",
    "pricing.calc_summary": "Format chat estimasi biaya telah dikompilasi secara otomatis untuk dikirim langsung ke WhatsApp pembuat web.",

    "pkg.starter.name": "Landing Page Starter",
    "pkg.starter.desc": "Sempurna untuk promosi produk tunggal, peluncuran UMKM, atau kampanye iklan berbayar.",
    "pkg.starter.price": "Rp1.900.000",
    "pkg.starter.feature1": "1 Halaman Landing Page",
    "pkg.starter.feature2": "Copywriting Standar Industri",
    "pkg.starter.feature3": "Domain .com/.id + Hosting Gratis 1 Tahun",
    "pkg.starter.feature4": "Tombol WhatsApp Instan",

    "pkg.biz.name": "Business Website Pro",
    "pkg.biz.desc": "Solusi terbaik untuk portofolio perusahaan, bisnis jasa profesional, dan brand yang ingin mendominasi Google.",
    "pkg.biz.price": "Rp3.500.000",
    "pkg.biz.feature1": "Hingga 8 Halaman Profesional",
    "pkg.biz.feature2": "Desain UI/UX Eksklusif & Modern",
    "pkg.biz.feature3": "Domain .com/.id + Server Hosting Cepat 1 Tahun",
    "pkg.biz.feature4": "SEO On-Page & Google Search Console",

    "pkg.custom.name": "Custom Enterprise",
    "pkg.custom.desc": "Untuk website kustom kompleks, portal e-commerce, integrasi API, atau kebutuhan dashboard internal.",
    "pkg.custom.price": "Hubungi Kami",
    "pkg.custom.feature1": "Pilihan Fitur Sesuai Keinginan",
    "pkg.custom.feature2": "Integrasi Database & API Pihak Ketiga",
    "pkg.custom.feature3": "Keamanan Tingkat Tinggi (Enterprise Grade)",
    "pkg.custom.feature4": "Prioritas Pelayanan & Dukungan 24/7",

    // Pricing Calculator Specifics
    "calc.step1": "Langkah 1: Pilih Tipe Layanan Utama",
    "calc.step2": "Langkah 2: Tambahkan Fitur Tambahan (Opsional)",
    "calc.step3": "Langkah 3: Detail Informasi & Kirim Estimasi",
    "calc.form_name": "Nama Lengkap Anda",
    "calc.form_biz": "Nama Bisnis / Perusahaan",
    "calc.form_msg": "Kebutuhan Khusus / Catatan Tambahan",
    "calc.btn_send": "Kirim Estimasi via WhatsApp",
    "calc.success": "Estimasi Berhasil Dikirim!",
    "calc.warning": "Peringatan Keamanan",

    // FAQ Section
    "faq.badge": "TANYA JAWAB (FAQ)",
    "faq.title": "Pertanyaan yang Sering Diajukan",
    "faq.desc": "Cari jawaban cepat seputar pembuatan website, lisensi hak milik, sistem termin pembayaran, dan pemeliharaan rutin di sini.",

    // Contact Section
    "contact.badge": "HUBUNGI KAMI",
    "contact.title": "Mari Diskusikan Proyek Hebat Anda",
    "contact.desc": "Konsultasikan kebutuhan digital bisnis Anda secara gratis. Tim PixelVerse siap memberikan rekomendasi terbaik.",
    "contact.form_btn": "Kirim via WhatsApp",
    "contact.fast_response": "100% Respons Cepat dalam 2 jam",
    "contact.office": "Kantor PixelVerse Studio",
    "contact.office_loc": "Surabaya, Jawa Timur, Indonesia",

    // Footer
    "footer.rights": "Hak Cipta Dilindungi Undang-Undang.",
    "footer.sop_btn": "Blueprint Khusus Klien (SOP Kerja Kami)",

    // Client Blueprint SOP Section
    "sop.badge": "SOP INTERNAL PIXELVERSE",
    "sop.title": "Blueprint Kolaborasi & Akuisisi Klien",
    "sop.desc": "Proses kerja transparan dan panduan akuisisi untuk memastikan proyek berjalan lancar dan tepat waktu.",
    "sop.tab.dev": "Proses Kerja (Development SOP)",
    "sop.tab.sales": "Naskah Diskusi Klien (Sales Script)",
    "sop.tab.acq": "Peta Jalan 30 Hari & Prospek Klien",
  },
  en: {
    // Header & Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    "nav.cta": "+62 857-3330-9949",
    "nav.mobile_cta": "Free WhatsApp Consultation",
    
    // Header language text
    "lang.name": "Language",
    "lang.id": "Bahasa Indonesia",
    "lang.en": "English",
    "lang.ja": "日本語",
    "lang.ar": "العربية",
    "lang.zh": "中文",

    // Hero Section
    "hero.badge": "⚡ PIXELVERSE STUDIO",
    "hero.title_part1": "Elegant &",
    "hero.title_part2": "High-Performance",
    "hero.title_part3": "Websites For Your Business",
    "hero.desc": "We help you build clean, modern, responsive websites focused on clear business objectives.",
    "hero.cta_main": "Start Consultation",
    "hero.cta_secondary": "View Portfolio",
    "hero.trust": "Trusted by business partners & business owners in Indonesia",

    // Hero Section Pain Points Title
    "hero.pain_title": "Business Obstacles Without a Website",
    "hero.pain_subtitle": "Do not let competitors capture your market just because your digital footprint looks unprofessional.",
    "hero.pain_1_title": "Lack of Credibility",
    "hero.pain_1_desc": "It is difficult to build professional credibility in the eyes of potential partners or clients without an official website.",
    "hero.pain_2_title": "Scattered Assets",
    "hero.pain_2_desc": "Business information is scattered across many outlets without an authorized centralized digital platform.",
    "hero.pain_3_title": "Lost Opportunities",
    "hero.pain_3_desc": "Sales opportunities are missed due to unstructured digital communication paths or slow response times.",

    // Services Section
    "services.badge": "OUR SERVICES",
    "services.title": "Best Digital Solutions For Your Business",
    "services.desc": "Integrated end-to-end systems to accelerate growth and digital authority.",
    "services.action_text": "Choose This Service",
    
    "service.lp.title": "Sales Landing Page",
    "service.lp.desc": "Professional single-page solution with persuasive copywriting optimized to convert ad visitors into valuable sales prospects.",
    "service.lp.feature1": "Persuasive Sales Copywriting",
    "service.lp.feature2": "Conversion-Oriented Design",
    "service.lp.feature3": "Ultra-Fast Loading Speed",
    
    "service.web.title": "Business Profile Website",
    "service.web.desc": "Elegant multi-page website to represent brand authority, team structure, portfolio galleries, product catalogs, and registry contact forms.",
    "service.web.feature1": "Neat Multi-Page Architecture",
    "service.web.feature2": "Exclusive Premium Design",
    "service.web.feature3": "SEO Optimization Groundwork",

    "service.maint.title": "Maintenance & Optimization",
    "service.maint.desc": "Monthly support services comprising ongoing content updates, weekly backups, security patches, malware protection, and emergency operations.",
    "service.maint.feature1": "SSL Security & Scheduled Backups",
    "service.maint.feature2": "Content Updates At Any Time",
    "service.maint.feature3": "24/7 Server Uptime Monitoring",

    // Portfolio Section
    "portfolio.badge": "PORTFOLIO",
    "portfolio.title": "Masterpieces We Have Created",
    "portfolio.desc": "Explore our premium websites customized for the operational success of our global partners.",
    "portfolio.category.all": "All Masterpieces",
    "portfolio.visit": "Visit Website",

    // Pricing & Calculator Section
    "pricing.badge": "INVESTMENT PACKS",
    "pricing.title": "Choose Plan or Compute Your Estimate",
    "pricing.desc": "Select one of our popular packages or use the interactive calculator below to evaluate quotes in real-time according to your features.",
    "pricing.custom_calculator": "Custom Estimate Budget Calculator",
    "pricing.calc_summary": "The estimation chat draft has been automatically compiled to send directly to our WhatsApp specialists.",

    "pkg.starter.name": "Starter Landing Page",
    "pkg.starter.desc": "Perfect for single-product campaigns, emerging businesses, or high-intent paid advertising landing areas.",
    "pkg.starter.price": "Rp1.900.000",
    "pkg.starter.feature1": "1 Custom Landing Page",
    "pkg.starter.feature2": "Industry Standard Copywriting",
    "pkg.starter.feature3": "Free .com/.id Domain + High-Speed Hosting (1 Year)",
    "pkg.starter.feature4": "Instant WhatsApp CTA Integration",

    "pkg.biz.name": "Business Website Pro",
    "pkg.biz.desc": "The ultimate solution for commercial suites, consulting firms, professional agencies, and brands striving to dominate Google.",
    "pkg.biz.price": "Rp3.500.000",
    "pkg.biz.feature1": "Up to 8 Custom Professional Pages",
    "pkg.biz.feature2": "Exclusive UI/UX Modern Artwork",
    "pkg.biz.feature3": "Free .com/.id Domain + High-Speed Server (1 Year)",
    "pkg.biz.feature4": "On-Page SEO Grounding & Search Console Setup",

    "pkg.custom.name": "Custom Enterprise",
    "pkg.custom.desc": "Designed for complex bespoke projects, e-commerce networks, API integrations, and internal enterprise dashboards.",
    "pkg.custom.price": "Contact Us",
    "pkg.custom.feature1": "Tailored Architecture & Unlimited Functions",
    "pkg.custom.feature2": "Bespoke Database & External API Bridges",
    "pkg.custom.feature3": "Enterprise Grade Advanced Security Suite",
    "pkg.custom.feature4": "Dedicated Project Manager & 24/7 Priority Support",

    // Pricing Calculator Specifics
    "calc.step1": "Step 1: Choose Core Service",
    "calc.step2": "Step 2: Add Extra Features (Optional)",
    "calc.step3": "Step 3: Business Information & Deploy Quote",
    "calc.form_name": "Your Full Name",
    "calc.form_biz": "Your Company / Brand Name",
    "calc.form_msg": "Bespoke Requirements / Extra Notes",
    "calc.btn_send": "Send Quote via WhatsApp",
    "calc.success": "Quote Successfully Prepared!",
    "calc.warning": "Security Precaution",

    // FAQ Section
    "faq.badge": "QUESTIONS & ANSWERS (FAQ)",
    "faq.title": "Frequently Asked Questions",
    "faq.desc": "Browse immediate insights about website design, full layout ownership, terms, and regular technical maintenance.",

    // Contact Section
    "contact.badge": "GET IN TOUCH",
    "contact.title": "Let's Kickstart Your Exceptional Project",
    "contact.desc": "Consult your business objectives for free. Our digital engineers will recommend optimal growth paths.",
    "contact.form_btn": "Send via WhatsApp",
    "contact.fast_response": "100% Quick Response within 2 hours",
    "contact.office": "PixelVerse Studio Office",
    "contact.office_loc": "Surabaya, East Java, Indonesia",

    // Footer
    "footer.rights": "All Rights Reserved.",
    "footer.sop_btn": "Client Blueprint (Our Workspace SOP)",

    // Client Blueprint SOP Section
    "sop.badge": "INTERNAL PIXELVERSE SOP",
    "sop.title": "Outreach & Engagement Master Blueprint",
    "sop.desc": "Open workflows and prospecting steps ensuring perfect project completion and milestones.",
    "sop.tab.dev": "Development Workflow (SOP)",
    "sop.tab.sales": "Client Interview Script (Sales)",
    "sop.tab.acq": "30-Day Project Milestone Maps",
  },
  ja: {
    // Header & Navigation
    "nav.home": "ホーム",
    "nav.services": "サービス",
    "nav.pricing": "料金",
    "nav.about": "会社概要",
    "nav.contact": "お問い合わせ",
    "nav.cta": "+62 857-3330-9949",
    "nav.mobile_cta": "無料WhatsApp相談",
    
    // Header language text
    "lang.name": "言語",
    "lang.id": "インドネシア語",
    "lang.en": "英語",
    "lang.ja": "日本語",
    "lang.ar": "アラビア語",
    "lang.zh": "中国語",

    // Hero Section
    "hero.badge": "⚡ PIXELVERSE STUDIO",
    "hero.title_part1": "エレガントで",
    "hero.title_part2": "高パフォーマンスな",
    "hero.title_part3": "ビジネスサイト",
    "hero.desc": "明確なビジネス目標に焦点を当てた、クリーンでモダン、レスポンシブなウェブサイトの構築を支援します。",
    "hero.cta_main": "無料相談を始める",
    "hero.cta_secondary": "ポートフォリオ",
    "hero.trust": "インドネシア国内外のビジネスオーナーに信頼されています",

    // Hero Section Pain Points Title
    "hero.pain_title": "ウェブサイトがないことによる障壁",
    "hero.pain_subtitle": "実店舗があっても、デジタルプレゼンスの欠如により競合他社に市場シェアを奪われないようにしましょう。",
    "hero.pain_1_title": "信頼性の欠如",
    "hero.pain_1_desc": "公式サイトがない状態では、潜在的なパートナーや顧客に対するビジネスの信頼構築は困難です。",
    "hero.pain_2_title": "情報の散在",
    "hero.pain_2_desc": "公式な中心プラットフォームがなく、会社情報が各種SNSに散在して顧客に届きにくくなります。",
    "hero.pain_3_title": "機会損失",
    "hero.pain_3_desc": "システム化されていない顧客との通信プロパティや、応答遅延により貴重な売上機会を逃します。",

    // Services Section
    "services.badge": "提供サービス",
    "services.title": "ビジネスを加速する最適なデジタルソリューション",
    "services.desc": "競争力を高め、デジタルオーソリティを盤石にするための一貫した統合開発システム。",
    "services.action_text": "このサービスを選択",
    
    "service.lp.title": "ランディングページ制作",
    "service.lp.desc": "顧客獲得に特化し、広告流入したユーザーを購入やリードへ効果的に転換するコピーライティング＆デザイン設計。",
    "service.lp.feature1": "成約率を高める心理コピーライティング",
    "service.lp.feature2": "コンバージョン最大化UI/UXレイアウト",
    "service.lp.feature3": "高速表示最適化パフォーマンス",
    
    "service.web.title": "ブランドビジネス公式サイト",
    "service.web.desc": "ブランド価値を示し、複数の事業、実績、お問い合わせフォームなどをエレガントに整理した複数ページ構造のサイト。",
    "service.web.feature1": "整理された複数ページアーカイブ体系",
    "service.web.feature2": "完全オリジナル高品質プレミアムデザイン",
    "service.web.feature3": "標準SEOエンジニアリング構造",

    "service.maint.title": "保守監視・サイト改善",
    "service.maint.desc": "恒久的なコンテンツ修正、毎週の安全バックアップ、セキュリティパッチ適用、マルウェア防御、緊急復旧を含む月額保守プラン。",
    "service.maint.feature1": "SSL暗号化通信＆定期同期バックアップ",
    "service.maint.feature2": "回数無制限コンテンツ定期更新",
    "service.maint.feature3": "24/7 サーバーアップタイム死活監視",

    // Portfolio Section
    "portfolio.badge": "実績紹介",
    "portfolio.title": "制作させていただいた主要プロジェクト",
    "portfolio.desc": "パートナーの業務上の成功と美的な完成度を同時に満たす、厳選されたプレミアム実績。",
    "portfolio.category.all": "すべての制作実績",
    "portfolio.visit": "サイトを見に行く",

    // Pricing & Calculator Section
    "pricing.badge": "投資パッケージ",
    "pricing.title": "特製プランまたは即時料金見積もり",
    "pricing.desc": "用途に応じたセットパッケージ、または以下のリアルタイム・シュミレーターでお好みの組み合わせの見積を作成できます。",
    "pricing.custom_calculator": "リアルタイム見積計算ツール",
    "pricing.calc_summary": "WhatsApp経由でPixelVerseの専門担当者に即時お見積り内容を送信可能なメッセージが生成されます。",

    "pkg.starter.name": "スタータLPパック",
    "pkg.starter.desc": "単一商品のキャンペーン、新ブランドの市場展開、広告用ランディングページに最も最適化されたお求めやすいプラン。",
    "pkg.starter.price": "1,900,000 IDR",
    "pkg.starter.feature1": "1ページのカスタムLPデザイン",
    "pkg.starter.feature2": "業界標準に即した成約心理テキスト",
    "pkg.starter.feature3": "ドメイン.com/.id無料取得＋高速サーバー1年間",
    "pkg.starter.feature4": "簡単導入常時設置WhatsAppお問い合わせ",

    "pkg.biz.name": "ビジネスプロWEB",
    "pkg.biz.desc": "中堅企業公式サイト、士業・専門家ポートフォリオ、検索結果で上位を狙う企業に最適な標準ソリューション。",
    "pkg.biz.price": "3,500,000 IDR",
    "pkg.biz.feature1": "最大8構造構成公式カスタムページ",
    "pkg.biz.feature2": "エクスクルーシブUI/UX新世代モダン外観",
    "pkg.biz.feature3": "ドメイン.com/.id無料指定＋専用高性能サーバー1年間",
    "pkg.biz.feature4": "完全On-Page SEO対策＆Google Console登録",

    "pkg.custom.name": "エンプラカスタム",
    "pkg.custom.desc": "複雑なAPI連携、データベース駆動、カスタム仕様のECネットワーク、またはクローズドな社内業務ツールの構築に。",
    "pkg.custom.price": "要ご相談",
    "pkg.custom.feature1": "無制限の追加定義機能と高度な設計",
    "pkg.custom.feature2": "外部APIゲートウェイ＆DB接続基盤の構築",
    "pkg.custom.feature3": "エンタープライズ対応高水準ファイアウォール",
    "pkg.custom.feature4": "優先的な即時連絡チャネル＆24/7テクニカルサポート",

    // Pricing Calculator Specifics
    "calc.step1": "ステップ1：メインのシステム構成を選択",
    "calc.step2": "ステップ2：追加オプションパーツの指定（任意）",
    "calc.step3": "ステップ3：ご連絡先・事業内容の入力",
    "calc.form_name": "お客様のお名前（漢字）",
    "calc.form_biz": "貴社名／屋号",
    "calc.form_msg": "具体的なご要望や注記したい要件",
    "calc.btn_send": "WhatsAppで見積もりを送信",
    "calc.success": "見積もりデータが正常に生成されました！",
    "calc.warning": "セキュリティ対策通知",

    // FAQ Section
    "faq.badge": "よくあるご質問 (FAQ)",
    "faq.title": "疑問点を解消いたします",
    "faq.desc": "制作の流れ、お支払い時期、ファイル一式の所有権移転、サーバー保守に関する回答をまとめました。",

    // Contact Section
    "contact.badge": "お問い合わせ",
    "contact.title": "次の素晴らしい計画についてお話ししましょう",
    "contact.desc": "ご相談は完全無料です。PixelVerseのテクニカルコンサルタントが最適な成長ルートをご提案します。",
    "contact.form_btn": "WhatsAppで今すぐ送信",
    "contact.fast_response": "100% 営業日2時間以内の即時回答保証",
    "contact.office": "PixelVerse Studio 事務局",
    "contact.office_loc": "インドネシア・東ジャワ州スラバヤ",

    // Footer
    "footer.rights": "All Rights Reserved. 無断転載を禁止します。",
    "footer.sop_btn": "クライアント公開内部規定（業務管理SOP）",

    // Client Blueprint SOP Section
    "sop.badge": "PixelVerse開発本部SOP",
    "sop.title": "共同プロジェクト実行ロードマップ",
    "sop.desc": "開発における節目ごとの役割分担と、確実なマイルストーンを担保する内部透明フロー。",
    "sop.tab.dev": "要件開発ステップ（標準SOP）",
    "sop.tab.sales": "お役立ちヒアリング用スクリプト",
    "sop.tab.acq": "30日間進行マイルストーン進捗チャート",
  },
  ar: {
    // Header & Navigation
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.pricing": "الأسعار",
    "nav.about": "من نحن",
    "nav.contact": "اتصل بنا",
    "nav.cta": "+62 857-3330-9949",
    "nav.mobile_cta": "استشارة مجانية عبر واتساب",
    
    // Header language text
    "lang.name": "اللغة",
    "lang.id": "الإندونيسية",
    "lang.en": "الإنجليزية",
    "lang.ja": "اليابانية",
    "lang.ar": "العربية",
    "lang.zh": "الصينية",

    // Hero Section
    "hero.badge": "⚡ استوديو بيكسل فيرس",
    "hero.title_part1": "مواقع أنيقة و",
    "hero.title_part2": "عالية الأداء",
    "hero.title_part3": "لخدمة أعمالك",
    "hero.desc": "نساعدك في بناء مواقع ويب نظيفة وحديثة وسريعة الاستجابة تركز على تحقيق أهداف تجارية واضحة ومحددة.",
    "hero.cta_main": "ابدأ استشارة مجانية",
    "hero.cta_secondary": "عرض المعرض",
    "hero.trust": "محل ثقة الشركاء وأصحاب الأعمال في إندونيسيا وخارجها",

    // Hero Section Pain Points Title
    "hero.pain_title": "أضرار غياب الموقع الإلكتروني",
    "hero.pain_subtitle": "لا تدع منافسيك يستحوذون على حصتك السوقية لمجرد أن ظهورك الرقمي يبدو غير احترافي.",
    "hero.pain_1_title": "ضعف المصداقية",
    "hero.pain_1_desc": "من الصعب بناء صورة احترافية وموثوقة لدى الشركاء والعملاء المحتملين دون موقع رسمي موثق.",
    "hero.pain_2_title": "تشتت المعلومات",
    "hero.pain_2_desc": "تشتت بياناتك وعناوين خدماتك عبر منصات متعددة دون وجود موقع مؤسسي مركزي موحد.",
    "hero.pain_3_title": "ضياع الفرص",
    "hero.pain_3_desc": "فوات فرص بيع حاسمة نتيجة لغياب أدوات تواصل سريعة ومنهجية أو التأخر في الرد على العملاء.",

    // Services Section
    "services.badge": "خدماتنا المتميزة",
    "services.title": "حلول رقمية متكاملة لنمو أعمالك وتفوقها",
    "services.desc": "أنظمة متطورة من البداية وحتى الإطلاق لتعزيز سلطتك الرقمية ومضاعفة أرباحك في الأسواق.",
    "services.action_text": "اختر هذه الخدمة",
    
    "service.lp.title": "صفحات الهبوط المخصصة للبيع",
    "service.lp.desc": "تصميم صفحة واحدة جذابة ومصممة علميًا بنصوص تسويقية مقنعة بهدف تحويل زوار الإعلانات لعملاء فعليين.",
    "service.lp.feature1": "نصوص بيع ونصوص ترويجية مقنعة",
    "service.lp.feature2": "تصميم ذكي يركز على زيادة معدل التحويل",
    "service.lp.feature3": "سرعة فائقة مطابقة لمعايير جوجل لسهولة التصفح",
    
    "service.web.title": "المواقع التعريفية للشركات والبراندات",
    "service.web.desc": "موقع إلكتروني متعدد الصفحات فائق الجودة يمثل هويتك التجارية وأعمالك ونماذج خدماتك بشكل متطور وجذاب.",
    "service.web.feature1": "هيكلية احترافية ومنظمة للمحتوى والصفحات",
    "service.web.feature2": "تصميمات بريميوم حصرية لا مثيل لها",
    "service.web.feature3": "تهيئة الموقع لسهولة الأرشفة على محركات البحث Google",

    "service.maint.title": "الدعم الفني والصيانة الدورية للمواقع",
    "service.maint.desc": "باقة شهرية تشمل تحديث المحتوى الفني، النسخ الاحتياطية الدورية، حل المشاكل الطارئة، الحماية من البرمجيات الخبيثة وتأمين نظام العمل.",
    "service.maint.feature1": "تأمين شامل بشهادة SSL الموثقة والنسخ الأسبوعي",
    "service.maint.feature2": "تحديث المحتوى وتعديل النصوص حسب رغبتك وفي أي وقت",
    "service.maint.feature3": "مراقبة مستمرة لاستقرار السيرفر لضمان عمل الموقع 24/7",

    // Portfolio Section
    "portfolio.badge": "معرض الأعمال",
    "portfolio.title": "شاهد روائع مشروعات عملائنا السابقة",
    "portfolio.desc": "استكشف قائمة مشروعاتنا الراقية والمخصصة لضمان التشغيل المثالي والمظهر الرائد لشركائنا.",
    "portfolio.category.all": "كافة الأعمال",
    "portfolio.visit": "زيارة الرابط المباشر",

    // Pricing & Calculator Section
    "pricing.badge": "باقات الاستثمار",
    "pricing.title": "اختر باقة أو احسب التكلفة الإجمالية فورًا",
    "pricing.desc": "يسعدنا اختيار إحدى باقاتنا الشهيرة أو استخدام حاسبة التكلفة المبتكرة بالأسفل للحصول على تسعير فوري ومباشر.",
    "pricing.custom_calculator": "حاسبة تقدير ميزانية المواقع الذكية",
    "pricing.calc_summary": "سيتم صياغة رسالة واتساب مخصصة بتقديرات طلبك لتسهيل مناقشتها مع المستشار التقني المتخصص.",

    "pkg.starter.name": "باقة المبتدئين لصفحات الهبوط",
    "pkg.starter.desc": "مثالية لتسويق منتج واحد فريد، أو إطلاق مشروعات صغيرة جديدة، أو إدارة الحملات الإعلانية الممولة بكفاءة.",
    "pkg.starter.price": "1,900,000 روبية",
    "pkg.starter.feature1": "صفحة هبوط مخصصة واحترافية بالكامل",
    "pkg.starter.feature2": "كتابة نصوص ترويجية متوافقة مع معايير التسويق",
    "pkg.starter.feature3": "دومين مستقل (.com / .id) + استضافة سريعة مجانًا سنة",
    "pkg.starter.feature4": "ربط مدمج لزر واتساب للتواصل الفوري المباشر",

    "pkg.biz.name": "موقع بروفايل الشركات المتكامل Pro",
    "pkg.biz.desc": "الحل الشامل والمقترح للشركات والمؤسسات والبراندات التي تطمح لتصدر نتائج بحث جوجل وبناء هيبة متميزة.",
    "pkg.biz.price": "3,500,000 روبية",
    "pkg.biz.feature1": "موقع ويب كامل يشمل حتى 8 صفحات داخلية مخصصة",
    "pkg.biz.feature2": "واجهة مستخدم UI/UX راقية وعصرية لمظهر استثنائي",
    "pkg.biz.feature3": "حجز دومين (.com / .id) + سيرفر عالي الأداء مجانًا سنة",
    "pkg.biz.feature4": "تجهيز السيو الداخلي On-Page بالكامل وأدوات مشرفي جوجل",

    "pkg.custom.name": "موقع مخصص لشركات ومتاجر متميزة",
    "pkg.custom.desc": "مخصص للمواقع المعقدة، بوابات التجارة الإلكترونية المتقدمة، ربط الـ APIs المختلفة، أو لوحات البيانات الداخلية للمنظومات.",
    "pkg.custom.price": "حسب الطلب والعمل",
    "pkg.custom.feature1": "ميزات وخصائص وعدد صفحات غير محدود حسب حاجتك",
    "pkg.custom.feature2": "بناء قواعد بيانات متقدمة والربط بالأنظمة والأنشطة الخارجية",
    "pkg.custom.feature3": "مستويات أمان متقدمة وحماية ضد الهجمات الإلكترونية وبمستوى مؤسسي",
    "pkg.custom.feature4": "مدير مشروع مخصص ودعم فني متميز ومتاح على مدار الساعة 24/7",

    // Pricing Calculator Specifics
    "calc.step1": "الخطوة الأولى: حدد نوع الخدمة الأساسية المطلوبة",
    "calc.step2": "الخطوة الثانية: أضف الميزات الفرعية المطلوبة (اختياري)",
    "calc.step3": "الخطوة الثالثة: بيانات الاتصال للحصول على المقايسة فورًا",
    "calc.form_name": "اسمك الثلاثي بالكامل",
    "calc.form_biz": "اسم شركتك أو علامتك التجارية",
    "calc.form_msg": "متطلبات خاصة أو ملاحظات إضافية ترغب بذكرها",
    "calc.btn_send": "إرسال تقدير المقايسة عبر واتساب فورًا",
    "calc.success": "تم تجهيز المقايسة بنجاح وبشكل متكامل!",
    "calc.warning": "إشعار أمني وقائي",

    // FAQ Section
    "faq.badge": "الأسئلة الشائعة وتوضيحات (FAQ)",
    "faq.title": "إجابات فورية لتساؤلاتك واستفساراتك",
    "faq.desc": "اكتشف إجابات سريعة حول ملكية الكود وسير مراحل العمل وشروط الدفع ومستويات جودة الاستضافات والسيرفرات.",

    // Contact Section
    "contact.badge": "تواصل معنا مباشرة",
    "contact.title": "دعنا نحول مشروعك وتطلعاتك إلى واقع ملموس ورائد",
    "contact.desc": "استشر خبراءنا مجانًا ومباشرة. فريق بيكسل فيرس على استعداد كامل لتقديم الحلول والتمكين الرقمي الفعال لأعمالك.",
    "contact.form_btn": "إرسال البيانات والتواصل عبر واتساب",
    "contact.fast_response": "100٪ استجابة ورد فوري وسريع وخلال ساعتين فقط",
    "contact.office": "مقر إدارة استوديو بيكسل فيرس",
    "contact.office_loc": "سورابايا، جاوة الشرقية، إندونيسيا",

    // Footer
    "footer.rights": "كافة الحقوق محفوظة وبيكسل فيرس © 2026.",
    "footer.sop_btn": "دليل العميل المنهجي (SOP آلية العمل الفنية)",

    // Client Blueprint SOP Section
    "sop.badge": "دليل وإطار عمل بيكسل فيرس الداخلي SOP",
    "sop.title": "منهجية التنفيذ والتخطيط لنجاح باهر لشركائنا",
    "sop.desc": "سلسلة خطوات عمل فنية متكاملة ومراحل واضحة تضمن التسليم بجودة قياسية وفي الموعد المتفق عليه.",
    "sop.tab.dev": "خطوات العمل البرمجية (SOP المنهجي)",
    "sop.tab.sales": "محاور الحوار الفني لجمع المتطلبات والـ Brief",
    "sop.tab.acq": "خريطة ومراحل تسليم المشروع خلال 30 يومًا",
  },
  zh: {
    // Header & Navigation
    "nav.home": "首页",
    "nav.services": "服务项目",
    "nav.pricing": "价格方案",
    "nav.about": "关于我们",
    "nav.contact": "联系我们",
    "nav.cta": "+62 857-3330-9949",
    "nav.mobile_cta": "免费 WhatsApp 咨询通道",
    
    // Header language text
    "lang.name": "语言设置",
    "lang.id": "印尼语 (Bahasa Indonesia)",
    "lang.en": "英文 (English)",
    "lang.ja": "日文 (日本語)",
    "lang.ar": "阿拉伯语 (العربية)",
    "lang.zh": "中文 (简体)",

    // Hero Section
    "hero.badge": "⚡ PIXELVERSE 黄金工作室",
    "hero.title_part1": "精美、高端 且",
    "hero.title_part2": "极致高性能的",
    "hero.title_part3": "新世代商业网站",
    "hero.desc": "我们致力于为您构建界面纯净、设计现代、完美响应并聚焦于明确商业目标的旗舰级网站。",
    "hero.cta_main": "开启免费咨询",
    "hero.cta_secondary": "查看过往作品",
    "hero.trust": "深受印尼及海外企业家和品牌合伙人的信赖",

    // Hero Section Pain Points Title
    "hero.pain_title": "无官方网站对业务造成的硬伤",
    "hero.pain_subtitle": "不要因为您缺乏专业的数字化名片，而眼睁睁看着竞争对手轻易抢占您的潜在市场份额。",
    "hero.pain_1_title": "缺乏品牌公信力",
    "hero.pain_1_desc": "在潜在客户或投资人眼中，没有官方认证渠道的品牌几乎难以构建持久长远的专业信任。",
    "hero.pain_2_title": "业务资产零散无章",
    "hero.pain_2_desc": "核心业务信息散落在各个不同的社交媒体平台，难以形成权威且集中的企业官方展示阵地。",
    "hero.pain_3_title": "商业机遇流失频频",
    "hero.pain_3_desc": "由于缺少系统化的客户留存入口、表单或客服响应过于迟缓，导致大量精准询盘白白痛失。",

    // Services Section
    "services.badge": "我们的服务",
    "services.title": "全方位商业加速数字化解决方案",
    "services.desc": "整合行业上下游最佳实践，用设计美学与扎实技术为您在数字世界奠定领导者地位。",
    "services.action_text": "选定此项服务",
    
    "service.lp.title": "金牌高转化销售落地页 (Landing Page)",
    "service.lp.desc": "专为付费广告投放和精准引流设计的单页网站。融入高水准营销文案（Copywriting）和转化路径，让点击直接变成最终成单率。",
    "service.lp.feature1": "由金牌营销师撰写的心理营销文案",
    "service.lp.feature2": "以高点击转化率为导向的完美 UI/UX 排版",
    "service.lp.feature3": "适配 Chrome/Safari 极速加载引擎优化",
    
    "service.web.title": "多维企业品牌官网 / 形象站",
    "service.web.desc": "适合多业务线企业全景呈现，包含多层导航、团队形象、精品案例库、动态文章、产品目录及询盘表单系统。",
    "service.web.feature1": "清晰合理且可无限增加的多页面层级逻辑",
    "service.web.feature2": "全人工独家匠心定制，不采用雷同的粗制模版",
    "service.web.feature3": "深度部署全站内部 SEO 搜索引擎架构设计",

    "service.maint.title": "全托管托管运维与安全保障服务",
    "service.maint.desc": "月度技术服务套餐包含：持续性业务内容代更新、按周全站备份、服务器优化、高防护防火墙，以及 24 分钟内应急恢复响应机制。",
    "service.maint.feature1": "企业级 SSL 通信安全防护机制与自动化备份",
    "service.maint.feature2": "无忧的日常文案和图片不限频更新服务",
    "service.maint.feature3": "全天候 24/7 监控服务器健康指标与在线率率",

    // Portfolio Section
    "portfolio.badge": "精品案例库",
    "portfolio.title": "我们精心雕琢的瞩目成果",
    "portfolio.desc": "查阅我们为本地与国际合作伙伴量身定制的高端、多端适配的旗舰项目，用成果证明实力。",
    "portfolio.category.all": "全部精品作品",
    "portfolio.visit": "访问官方在线站点",

    // Pricing & Calculator Section
    "pricing.badge": "投资方案一览",
    "pricing.title": "选择旗舰套餐或即时计算自定义估价",
    "pricing.desc": "挑选我们为您量身定做的三大主打方案，亦或亲自通过下方功能计算器获得完全透明且实时的初步项目预算估测。",
    "pricing.custom_calculator": "独家智能精准项目预算计算器",
    "pricing.calc_summary": "我们已帮您生成标准的需求估价清单草稿，您可以直接在 WhatsApp 中发送给我们并开始高效对接。",

    "pkg.starter.name": "Starter 初代高转化单页",
    "pkg.starter.desc": "专门针对单一主打产品发售、新兴工作室启动初期或针对特定社交广告高引流的高能落脚点。",
    "pkg.starter.price": "Rp1.900.000",
    "pkg.starter.feature1": "1 个完整且支持极速加载的落地页页面",
    "pkg.starter.feature2": "核心卖点突出的成熟行业标准文案包装",
    "pkg.starter.feature3": "免费赠送 1 年高速稳定主机 + 旗舰级 .com/.id 域名",
    "pkg.starter.feature4": "一键快速唤起 WhatsApp 按钮支持直达沟通",

    "pkg.biz.name": "Business 品牌中坚官网 Pro",
    "pkg.biz.desc": "适合咨询机构、专业中大型服务机构以及所有致力于在 Google 搜索结果中建立长久行业绝对话语权的企业。",
    "pkg.biz.price": "Rp3.500.000",
    "pkg.biz.feature1": "多达 8 个高度自定义的模块设计与内页",
    "pkg.biz.feature2": "融入国际化美学观念，拒绝千篇一律的视觉排布",
    "pkg.biz.feature3": "附赠 1 年高性能超速云服务器租用费用 + 首年免费域名",
    "pkg.biz.feature4": "深度绑定 On-Page SEO + Google 搜索引擎控制台注册",

    "pkg.custom.name": "Custom 旗舰无限定制方案",
    "pkg.custom.desc": "专门面向高度定制的系统工程、品牌电商独立站、第三方复杂 API 互联或大型内部控制仪表盘需求。",
    "pkg.custom.price": "专家私享面议",
    "pkg.custom.feature1": "没有页数与功能上限，按照最天马行空的需求实现",
    "pkg.custom.feature2": "高并发数据库读写架构与第三方高级付款信道对接",
    "pkg.custom.feature3": "部署企业级高防护防 CC/DDoS 策略以抗击风险",
    "pkg.custom.feature4": "专属技术主管全程对接，享受 24/7 年底无休极速响应",

    // Pricing Calculator Specifics
    "calc.step1": "步骤 1： 选定您的首要网站主程序类型",
    "calc.step2": "步骤 2： 轻松挂载额外的高级定制模块（可选）",
    "calc.step3": "步骤 3： 补充基本衔接资料即可快速导出预估报价",
    "calc.form_name": "您的真实姓名 / 称呼",
    "calc.form_biz": "您的业务实体名字 / 品牌名",
    "calc.form_msg": "有关该项目的特定说明、功能需求或参考方向",
    "calc.btn_send": "通过 WhatsApp 发出估算配置",
    "calc.success": "数据已在本地后台通过安全校验并完美编译！",
    "calc.warning": "数据传输安全通知",

    // FAQ Section
    "faq.badge": "常见问题答疑集 (FAQ)",
    "faq.title": "为您解答关于项目落地的所有疑虑",
    "faq.desc": "这里包含关于著作权归属、按阶段分期支付货款流程、日常更新和主机的全景式解答，解除您的后顾之忧。",

    // Contact Section
    "contact.badge": "期待与您携手",
    "contact.title": "开启一次极具商业想象力的伟大合作",
    "contact.desc": "完全免费的研究与沟通机会。PixelVerse 的产品技术架构师将给出让您在同赛道中脱颖而出的专业建议方案。",
    "contact.form_btn": "立刻通过 WhatsApp 连接",
    "contact.fast_response": "我们承诺在 2 个工作小时内 100% 飞速反馈为您保驾护航",
    "contact.office": "PixelVerse 亚太区运营总部",
    "contact.office_loc": "印尼·东爪哇省·泗水市 (Surabaya)",

    // Footer
    "footer.rights": "PixelVerse 黄金工作室版所有，受国际知识产权协议合理保护 © 2026.",
    "footer.sop_btn": "公开透明作业流程手册 (SOP 黄金执行蓝图)",

    // Client Blueprint SOP Section
    "sop.badge": "PixelVerse 工艺标准 SOP",
    "sop.title": "业务高水平落地与全程执行蓝图",
    "sop.desc": "我们将整个开发阶段拆解为公开而严格的里程碑进度，在保质保量的前提下极速兑现承诺。",
    "sop.tab.dev": "系统开发工序标准规范 (SOP)",
    "sop.tab.sales": "项目前期深度定制沟通提问大纲 (Sales)",
    "sop.tab.acq": "高效率 30 天项目节点完成度控制树",
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Default to 'id' or try to sniff browser settings
    return "id";
  });

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    // Persist to local storage if available so refresh doesn't wipe choice
    try {
      localStorage.setItem("pixelverse_language", newLang);
    } catch (e) {
      // Ignored
    }
  };

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem("pixelverse_language");
      if (stored && (stored === "id" || stored === "en" || stored === "ja" || stored === "ar" || stored === "zh")) {
        setLanguageState(stored as Language);
      }
    } catch (e) {
      // Ignored
    }
  }, []);

  const t = (key: string): string => {
    const value = translations[language]?.[key] || translations["id"]?.[key] || key;
    return value;
  };

  const dir = language === "ar" ? "rtl" : "ltr";

  // When language is Arabic, we can also inject CSS to body/root if needed, 
  // but standard tailwind rtl support or flex direction reversal using standard hooks works excellently.
  React.useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language, dir]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

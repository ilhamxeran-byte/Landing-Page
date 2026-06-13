import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import PixelVerseLogo from "./PixelVerseLogo";
import { 
  FileText, ClipboardList, Receipt, Landmark, Check, 
  Copy, PlayCircle, Star, PhoneCall, Gift, HelpCircle, Sparkles, Send, FileCheck2,
  Target, TrendingUp, Users, Calendar, MessageSquare, ChevronRight, Share2, Award, Info
} from "lucide-react";

export default function ClientBlueprint() {
  const [activeTab, setActiveTab] = useState<"process" | "scripts" | "proposal" | "invoice" | "acquisition">("process");
  
  // Acquisition States
  const [acqClientName, setAcqClientName] = useState("Pak/Bu Budi");
  const [acqBizName, setAcqBizName] = useState("Restoran Kopi");
  const [selectedIndustry, setSelectedIndustry] = useState("Restoran");
  const [outreachTarget, setOutreachTarget] = useState(100);
  const [activeContentIdx, setActiveContentIdx] = useState(0);
  const [activeAcqScriptTab, setActiveAcqScriptTab] = useState<"first" | "follow1" | "follow2" | "closing" | "testi">("first");
  const [completedSopTasks, setCompletedSopTasks] = useState<Record<string, boolean>>({
    "opt-linkedin": false,
    "opt-fb": false,
    "pvs-web": true,
    "portfolio-ready": false,
    "post-contents": false,
  });

  // Script States
  const [clientName, setClientName] = useState("Pak Budi");
  const [niche, setNiche] = useState("Kopi Nusantara");
  const [chosenPackage, setChosenPackage] = useState("PROFESSIONAL");
  const [packageNameInput, setPackageNameInput] = useState("PROFESSIONAL");
  const [packagePrice, setPackagePrice] = useState("5.900.000");
  const [customFeaturesText, setCustomFeaturesText] = useState("Website 5-8 Halaman, Home, About, Services, dsb");
  const [copiedScript, setCopiedScript] = useState<string | null>(null);

  // Proposal States
  const [propClient, setPropClient] = useState("Budi Santoso");
  const [propBiz, setPropBiz] = useState("Restoran Kopi Nusantara");
  const [propDate, setPropDate] = useState("13 Juni 2026");
  const [propPkg, setPropPkg] = useState("PROFESSIONAL");
  const [propCost, setPropCost] = useState("Rp 5.900.000");
  const [propDeliverables, setPropDeliverables] = useState(
    "✓ Website 5–8 Halaman (Home, About, Services, Portfolio, Contact, Blog)\n" +
    "✓ Mobile Responsive & Speed Optimization\n" +
    "✓ SEO Setup & Google Analytics\n" +
    "✓ WhatsApp Integration\n" +
    "✓ Bonus: 3 Social Media Banner, Website Training, SEO Checklist"
  );
  const [propTimeline, setPropTimeline] = useState("7 – 14 Hari Kerja");

  // Invoice States
  const [invoiceClient, setInvoiceClient] = useState("Budi Santoso");
  const [invoiceNo, setInvoiceNo] = useState("PVS-2026-001");
  const [invoiceDate, setInvoiceDate] = useState("13 Juni 2026");
  const [invoiceItemPrice, setInvoiceItemPrice] = useState(5900000);
  const [isPaid, setIsPaid] = useState(false);

  // Payment process data
  const steps = [
    { number: "1", title: "Discovery Call", detail: "Memahami model bisnis, target profit, dan tantangan digital sebelum merumuskan solusi.", label: "Analisis Target" },
    { number: "2", title: "Proposal & Quotation", detail: "Mengirimkan tawaran solusi visual, detail halaman, estimasi biaya, dan jadwal pengerjaan.", label: "Solusi Kustom" },
    { number: "3", title: "Persetujuan Klien", detail: "Tinjauan keselarasan draft pengerjaan, scope fitur, serta penandatanganan kesepakatan.", label: "Konfirmasi" },
    { number: "4", title: "DP 50%", detail: "Pembayaran DP awal 50% untuk meresmikan penulangan desain dan pemesanan server.", label: "Komitmen" },
    { number: "5", title: "Design & Development", detail: "Tim mendesain mockup berkecepatan tinggi, setup arsitektur, dan mengunggah kode situs.", label: "Pengkodean" },
    { number: "6", title: "Review Klien", detail: "Pengujian fungsionalitas tombol, responsivitas seluler, dan penyesuaian revisi minor.", label: "Revisi" },
    { number: "7", title: "Pelunasan 50%", detail: "Sisa pengerjaan dilunaskan setelah persetujuan penuh terhadap versi web final.", label: "Pelunasan" },
    { number: "8", title: "Website Launch", detail: "Penyambungan domain premium (.com/.id), instalasi SSL aman, dan website go live!", label: "Peluncuran" },
    { number: "9", title: "Support & Maintenance", detail: "Pendampingan pasca-launch, checklist SEO, dan garansi penuh atas bug teknologi.", label: "Pemeliharaan" },
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedScript(id);
    setTimeout(() => setCopiedScript(null), 2000);
  };

  // Dynamic values based on selected script package
  const handlePkgChange = (pkg: string) => {
    setChosenPackage(pkg);
    if (pkg === "STARTER") {
      setPackagePrice("1.900.000");
      setCustomFeaturesText("Landing Page 1 Halaman, Mobile Responsive, CTA WhatsApp, Contact Form, Basic SEO Setup, SSL");
    } else if (pkg === "PROFESSIONAL") {
      setPackagePrice("5.900.000");
      setCustomFeaturesText("Website 5–8 Halaman (Home, About, Services, Portfolio, Contact, Blog), SEO Setup, Speed Optimization");
    } else {
      setPackagePrice("12.900.000");
      setCustomFeaturesText("Custom Website, Conversion Strategy, Booking System, CRM Integration, Analytics Dashboard, Speed Optimization");
    }
  };

  const formattedProposalText = `PIXELVERSE STUDIO\nWebsite & Landing Page Proposal\n-----------------------------\nNama Klien: ${propClient}\nNama Bisnis: ${propBiz}\nTanggal: ${propDate}\n\nPROJECT OVERVIEW\nTujuan website ini adalah:\n✓ Meningkatkan kredibilitas bisnis\n✓ Menghasilkan prospek (leads) potensial\n✓ Mendukung promosi dan meningkatkan penjualan\n\nSCOPE OF WORK (DELIVERABLES)\n${propDeliverables}\n\nTIMELINE PENGERJAAN (${propTimeline})\n- Discovery & Wireframing\n- Desain Visual (UI/UX)\n- Development & Coding\n- Testing & Optimasi Kecepatan\n- Launch & Go-Live\n\nINVESTMENT & COST\n- Pilihan Paket: ${propPkg}\n- Total Investasi: ${propCost}\n- Metode Pembayaran:\n  * 50% DP untuk memulai proyek\n  * 50% Pelunasan sebelum situs diluncurkan\n\nNEXT STEP\n1. Konfirmasi Proposal\n2. Pembayaran DP\n3. Kickoff Project`;

  const formattedInvoiceText = `INVOICE\nPixelVerse Studio\nWhatsApp: +62 857 3330 9949\n-----------------------------\nNomor Invoice: ${invoiceNo}\nTanggal: ${invoiceDate}\nKlien: ${invoiceClient}\n\nDESKRIPSI PROYEK:\nPembuatan Website & Landing Page Profesional\n\nKETERANGAN:\n- Paket Utama: Paket ${propPkg}\n- Total Tagihan: Rp ${invoiceItemPrice.toLocaleString("id-ID")}\n- DP 50%: Rp ${(invoiceItemPrice * 0.5).toLocaleString("id-ID")}\n- Sisa Pembayaran: Rp ${(invoiceItemPrice * 0.5).toLocaleString("id-ID")}\n\nMETODE PEMBAYARAN:\nBank BCA\n1234 5678 9012\na.n PixelVerse Studio\n\nSTATUS PEMBAYARAN: ${isPaid ? "LUNAS" : "BELUM DIBAYAR"}`;

  return (
    <section id="sop" className="relative py-24 bg-cosmic-bg text-gray-100 overflow-hidden border-b border-cosmic-border/30">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 bg-cyan-950/40 border border-cyan-800/20 px-4 py-1.5 rounded-full">
            SOP &amp; Blueprint
          </span>
          <h2 className="mt-4 font-sans font-black text-3xl sm:text-4xl text-white tracking-tight">
            Sistem SOP &amp; Alur Kerja Kemitraan Digital
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-gray-400 font-medium text-sm sm:text-base">
            Kami menjamin proses pengerjaan website terstruktur, tepat waktu, dan sangat transparan mulai dari tahap awal perkenalan hingga website didorong online.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 max-w-5xl mx-auto p-1.5 rounded-2xl bg-cosmic-card border border-cosmic-border/60">
          <button
            onClick={() => setActiveTab("process")}
            className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
              activeTab === "process"
                ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/10"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Landmark className="w-4 h-4" />
            <span>1. Alur &amp; Kebijakan Pembayaran</span>
          </button>
          
          <button
            onClick={() => setActiveTab("scripts")}
            className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
              activeTab === "scripts"
                ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/10"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <PhoneCall className="w-4 h-4" />
            <span>2. Call Scripts Hub</span>
          </button>

          <button
            onClick={() => setActiveTab("proposal")}
            className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
              activeTab === "proposal"
                ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/10"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>3. Proposal Generator</span>
          </button>

          <button
            onClick={() => setActiveTab("invoice")}
            className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
              activeTab === "invoice"
                ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/10"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Receipt className="w-4 h-4" />
            <span>4. Invoice Simulator</span>
          </button>

          <button
            onClick={() => setActiveTab("acquisition")}
            className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
              activeTab === "acquisition"
                ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/10"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Target className="w-4 h-4" />
            <span>5. Client Acquisition Hub</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="relative">
          
          {/* TAB 1: PROCESS PIPELINE & POLICIES */}
          {activeTab === "process" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {/* Timeline Container */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {steps.map((step, idx) => (
                  <div 
                    key={idx} 
                    className="relative p-6 rounded-2xl bg-cosmic-card border border-cosmic-border hover:border-cyan-500/30 group transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Step Number Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600/10 text-cyan-400 border border-violet-500/30 font-black text-sm">
                          {step.number}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-wider font-extrabold text-violet-300 bg-violet-950/40 border border-violet-800/40 px-2 py-0.5 rounded">
                          {step.label}
                        </span>
                      </div>
                      <h3 className="font-sans font-bold text-base text-white group-hover:text-cyan-400 transition-colors duration-200">
                        {step.title}
                      </h3>
                      <p className="mt-2 font-sans text-xs text-gray-400 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                    {idx < 8 && (
                      <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 text-gray-700 font-mono text-xl pointer-events-none">
                        →
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Payment Policy Cards */}
              <div className="mt-12 bg-cosmic-card border border-cosmic-border rounded-2xl p-6 sm:p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Landmark className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-sans font-extrabold text-lg sm:text-xl text-white">Recommended Payment Policy</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Starter Policy */}
                  <div className="p-5 rounded-xl bg-black/30 border border-cosmic-border space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-sans font-black text-sm text-white">STARTER POLICY</span>
                      <span className="font-mono text-[10px] text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">Aman &amp; Cepat</span>
                    </div>
                    <p className="font-sans text-xs text-gray-400 leading-relaxed">
                      Kebijakan pembayaran untuk Paket Starter:
                    </p>
                    <div className="space-y-1.5 font-sans text-xs text-gray-200">
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-cyan-400" />
                        <span>100% Pembayaran di Awal</span>
                      </div>
                      <div className="text-gray-500 text-[11px] pl-6">Atau alternatif:</div>
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-violet-400" />
                        <span>50% DP + 50% Pelunasan sebelum Launch</span>
                      </div>
                    </div>
                  </div>

                  {/* Professional Policy */}
                  <div className="p-5 rounded-xl bg-black/30 border border-cosmic-border space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-sans font-black text-sm text-white">PROFESSIONAL POLICY</span>
                      <span className="font-mono text-[10px] text-violet-400 bg-violet-950/40 px-2 py-0.5 rounded border border-violet-800/20">Standard</span>
                    </div>
                    <p className="font-sans text-xs text-gray-400 leading-relaxed">
                      Kebijakan pembayaran untuk Paket Professional:
                    </p>
                    <div className="space-y-2 font-sans text-xs text-gray-200">
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-cyan-400" />
                        <span>50% Pembayaran DP Awal</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-cyan-400" />
                        <span>50% Pelunasan sebelum Launching</span>
                      </div>
                    </div>
                  </div>

                  {/* Business Policy */}
                  <div className="p-5 rounded-xl bg-black/30 border border-cosmic-border space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-sans font-black text-sm text-white">BUSINESS POLICY</span>
                      <span className="font-mono text-[10px] text-pink-400 bg-pink-950/40 px-2 py-0.5 rounded border border-pink-800/20">3 Tahap</span>
                    </div>
                    <p className="font-sans text-xs text-gray-400 leading-relaxed">
                      Kebijakan pembayaran untuk Mitra Korporasi &amp; Business:
                    </p>
                    <div className="space-y-1.5 font-sans text-xs text-gray-200">
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-cyan-400" />
                        <span>50% DP untuk Kickoff Project</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-cyan-400" />
                        <span>25% Setelah Tahap Development</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-cyan-400" />
                        <span>25% Sebelum Launching</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: INTERACTIVE CALL SCRIPTS BOOK */}
          {activeTab === "scripts" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Settings Sidebar */}
              <div className="lg:col-span-4 bg-cosmic-card border border-cosmic-border rounded-2xl p-6 space-y-5">
                <div className="flex items-center space-x-2 pb-3 border-b border-cosmic-border/50">
                  <PlayCircle className="w-4 h-4 text-cyan-400" />
                  <h4 className="font-sans font-black text-sm text-white">SOP Script Personalizer</h4>
                </div>

                <div className="space-y-4 font-sans text-xs">
                  <div className="space-y-1.5">
                    <span className="text-gray-400 font-semibold">Nama Klien / Bisnis Target</span>
                    <input 
                      type="text" 
                      value={clientName} 
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-black/40 border border-cosmic-border px-3 py-2 rounded-xl text-white focus:outline-none focus:border-violet-500"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <span className="text-gray-400 font-semibold">Nama Bisnis Klien</span>
                    <input 
                      type="text" 
                      value={niche} 
                      onChange={(e) => setNiche(e.target.value)}
                      className="w-full bg-black/40 border border-cosmic-border px-3 py-2 rounded-xl text-white focus:outline-none focus:border-violet-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-gray-400 font-semibold">Pilih Paket</span>
                    <select 
                      value={chosenPackage} 
                      onChange={(e) => handlePkgChange(e.target.value)}
                      className="w-full bg-black/40 border border-cosmic-border px-3 py-2 rounded-xl text-white focus:outline-none focus:border-violet-500"
                    >
                      <option value="STARTER">STARTER (Rp 1.900.000)</option>
                      <option value="PROFESSIONAL">PROFESSIONAL (Rp 5.900.000)</option>
                      <option value="BUSINESS">BUSINESS (Rp 12.900.000)</option>
                    </select>
                  </div>
                </div>

                <div className="p-3.5 bg-violet-950/20 border border-violet-800/30 rounded-xl space-y-1 font-sans text-[11px] leading-relaxed text-violet-300">
                  <span className="font-bold flex items-center space-x-1.5 text-white">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    <span>Latih Komunikasi Anda</span>
                  </span>
                  Gunakan variabel di atas untuk merefresh seluruh script presentasi penjualan secara real-time di samping kanan.
                </div>
              </div>

              {/* Right Scripts Viewer Grid */}
              <div className="lg:col-span-8 space-y-6">
                {/* 1. Discovery Call Script */}
                <div className="p-6 rounded-2xl bg-cosmic-card border border-cosmic-border space-y-3 relative overflow-hidden group">
                  <div className="flex items-center justify-between border-b border-cosmic-border pb-3">
                    <span className="font-mono text-[10px] font-black uppercase text-cyan-400 tracking-wider">
                      💬 1. DISCOVERY CALL SCRIPT
                    </span>
                    <button
                      onClick={() => handleCopy(
                        `Halo ${clientName},\n\nTerima kasih sudah meluangkan waktu.\n\nSebelum membahas website, saya ingin memahami bisnis ${niche} dan target yang ingin dicapai terlebih dahulu.\n\nPertanyaan:\n1. Bisnis Anda bergerak di bidang apa?\n2. Saat ini bagaimana pelanggan menemukan bisnis Anda?\n3. Apakah sudah memiliki website?\n4. Apa tantangan terbesar saat ini?\n5. Apa target bisnis dalam 6–12 bulan ke depan?\n6. Apa tujuan utama website ini (Branding/Leads/Penjualan/Booking)?\n7. Apakah ada website referensi yang disukai?`,
                        "discovery"
                      )}
                      className="flex items-center space-x-1 text-xs text-gray-400 hover:text-white bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg"
                    >
                      {copiedScript === "discovery" ? <Check className="w-3 h-3 text-cyan-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedScript === "discovery" ? "Disalin!" : "Salin Script"}</span>
                    </button>
                  </div>

                  <div className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed bg-black/20 p-4 rounded-xl border border-white/5 space-y-3">
                    <p className="font-bold text-white">Halo {clientName},</p>
                    <p>Terima kasih sudah meluangkan waktu.</p>
                    <p>Sebelum membahas website, saya ingin memahami bisnis <span className="text-cyan-400 font-bold">{niche}</span> dan target yang ingin dicapai terlebih dahulu.</p>
                    <p className="font-bold text-violet-300">Pertanyaan Discovery:</p>
                    <ol className="list-decimal pl-5 space-y-1 text-gray-400">
                      <li>Bisnis Anda bergerak di bidang apa?</li>
                      <li>Saat ini bagaimana pelanggan menemukan bisnis Anda?</li>
                      <li>Apakah sudah memiliki website?</li>
                      <li>Apa tantangan terbesar saat ini?</li>
                      <li>Apa target bisnis dalam 6–12 bulan ke depan?</li>
                      <li>Apa tujuan utama website ini? (Branding, Leads, Penjualan, atau Booking)</li>
                      <li>Apakah ada website referensi yang disukai?</li>
                    </ol>
                    <p className="text-[11px] text-cyan-400/80 italic font-mono pt-2 border-t border-cosmic-border/30">
                      💡 Tujuan discovery adalah menemukan kebutuhan sebenarnya sebelum menawarkan solusi.
                    </p>
                  </div>
                </div>

                {/* 2. Sales Call Script */}
                <div className="p-6 rounded-2xl bg-cosmic-card border border-cosmic-border space-y-3 relative overflow-hidden group">
                  <div className="flex items-center justify-between border-b border-cosmic-border pb-3">
                    <span className="font-mono text-[10px] font-black uppercase text-violet-400 tracking-wider">
                      🔥 2. SALES CALL SCRIPT
                    </span>
                    <button
                      onClick={() => handleCopy(
                        `Berdasarkan kebutuhan yang Anda sampaikan, saya melihat website dapat membantu pada tiga area utama:\n1. Meningkatkan kredibilitas bisnis ${niche}\n2. Mempermudah calon pelanggan menghubungi Anda\n3. Membantu menghasilkan leads secara konsisten\n\nDari kebutuhan tersebut saya merekomendasikan Paket ${chosenPackage}.\nPaket ini mencakup:\n- ${customFeaturesText}\n\nInvestasinya sebesar Rp ${packagePrice}.\nMenurut ${clientName} apakah solusi ini sudah sesuai dengan kebutuhan bisnis saat ini?`,
                        "sales"
                      )}
                      className="flex items-center space-x-1 text-xs text-gray-400 hover:text-white bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg"
                    >
                      {copiedScript === "sales" ? <Check className="w-3 h-3 text-cyan-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedScript === "sales" ? "Disalin!" : "Salin Script"}</span>
                    </button>
                  </div>

                  <div className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed bg-black/20 p-4 rounded-xl border border-white/5 space-y-3">
                    <p>Berdasarkan kebutuhan yang Anda sampaikan, saya melihat website dapat membantu pada tiga area utama:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-400">
                      <li>Meningkatkan kredibilitas bisnis <span className="text-white font-bold">{niche}</span></li>
                      <li>Mempermudah calon pelanggan menghubungi Anda</li>
                      <li>Membantu menghasilkan leads secara konsisten</li>
                    </ul>
                    <p>Dari kebutuhan tersebut saya merekomendasikan <span className="text-cyan-400 font-bold">Paket {chosenPackage}</span>.</p>
                    <p className="font-mono text-xs text-gray-400 bg-black/40 p-2 border border-cosmic-border rounded-lg">{customFeaturesText}</p>
                    <p>Investasinya sebesar <span className="text-emerald-400 font-extrabold font-mono">Rp {packagePrice}</span>.</p>
                    <p className="font-semibold text-white">Menurut {clientName}, apakah solusi ini sudah sesuai dengan kebutuhan bisnis saat ini?</p>
                  </div>
                </div>

                {/* 3. Follow Up & Closing Scripts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-cosmic-card border border-cosmic-border space-y-3">
                    <div className="flex justify-between items-center border-b border-cosmic-border pb-2">
                      <span className="font-mono text-[9px] uppercase font-black text-cyan-400">📬 3. FOLLOW UP</span>
                      <button 
                        onClick={() => handleCopy(`Halo ${clientName},\n\nTerima kasih atas waktunya kemarin.\n\nSaya ingin menindaklanjuti proposal yang telah saya kirimkan. Apakah ada pertanyaan atau penyesuaian yang ingin didiskusikan?\n\nTerima kasih.\nPixelVerse Studio`, "follow")}
                        className="text-gray-500 hover:text-white p-1"
                      >
                        {copiedScript === "follow" ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                    <div className="font-sans text-xs text-gray-400 space-y-2 leading-relaxed">
                      <p>Halo {clientName},</p>
                      <p>Terima kasih atas waktunya kemarin.</p>
                      <p>Saya ingin menindaklanjuti proposal yang telah saya kirimkan.</p>
                      <p>Apakah ada pertanyaan atau penyesuaian yang ingin didiskusikan?</p>
                      <p className="text-white font-semibold">PixelVerse Studio</p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-cosmic-card border border-cosmic-border space-y-3">
                    <div className="flex justify-between items-center border-b border-cosmic-border pb-2">
                      <span className="font-mono text-[9px] uppercase font-black text-violet-400">🤝 4. CLOSING SCRIPT</span>
                      <button 
                        onClick={() => handleCopy(`Dari diskusi kita sebelumnya, tujuan utama proyek ini adalah:\n✓ Meningkatkan kredibilitas\n✓ Mendapatkan lebih banyak pelanggan\n\nJika siap memulai, langkah berikutnya hanya:\n1. Konfirmasi proyek\n2. Pembayaran DP\n3. Kickoff pengerjaan`, "close")}
                        className="text-gray-500 hover:text-white p-1"
                      >
                        {copiedScript === "close" ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                    <div className="font-sans text-xs text-gray-400 space-y-2 leading-relaxed">
                      <p className="font-bold text-white">Dari diskusi kita sebelumnya, tujuannya:</p>
                      <p>✓ Meningkatkan kredibilitas</p>
                      <p>✓ Mendapatkan leads &amp; pelanggan baru</p>
                      <p>Langkah selanjutnya:</p>
                      <ol className="list-decimal pl-4 text-cyan-300">
                        <li>Konfirmasi proyek</li>
                        <li>Pembayaran DP (50%)</li>
                        <li>Kickoff pengerjaan</li>
                      </ol>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 3: LIVE PROPOSAL GENERATOR */}
          {activeTab === "proposal" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Creator Config Form */}
              <div className="lg:col-span-5 bg-cosmic-card border border-cosmic-border rounded-2xl p-6 space-y-4">
                <div className="flex items-center space-x-2 pb-2 border-b border-cosmic-border">
                  <FileCheck2 className="w-4 h-4 text-cyan-400" />
                  <h4 className="font-sans font-black text-sm text-white">Proposal Customizer</h4>
                </div>

                <div className="space-y-4 font-sans text-xs">
                  <div className="space-y-1">
                    <span className="text-gray-400">Nama Klien Utama</span>
                    <input 
                      type="text" 
                      value={propClient} 
                      onChange={(e) => setPropClient(e.target.value)}
                      className="w-full bg-black/40 border border-cosmic-border px-3 py-2 rounded-xl text-white outline-none focus:border-violet-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-gray-400">Nama Perusahaan / Bisnis</span>
                    <input 
                      type="text" 
                      value={propBiz} 
                      onChange={(e) => setPropBiz(e.target.value)}
                      className="w-full bg-black/40 border border-cosmic-border px-3 py-2 rounded-xl text-white outline-none focus:border-violet-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-gray-400">Tanggal Proposal</span>
                    <input 
                      type="text" 
                      value={propDate} 
                      onChange={(e) => setPropDate(e.target.value)}
                      className="w-full bg-black/40 border border-cosmic-border px-3 py-2 rounded-xl text-white outline-none focus:border-violet-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-gray-400">Paket Terpilih</span>
                    <select 
                      value={propPkg} 
                      onChange={(e) => {
                        setPropPkg(e.target.value);
                        if (e.target.value === "STARTER") {
                          setPropCost("Rp 1.900.000");
                          setPropTimeline("3 – 5 Hari Kerja");
                          setPropDeliverables("✓ Landing Page 1 Halaman\n✓ Mobile Responsive\n✓ CTA WhatsApp & Contact Form\n✓ Basic SEO Setup & SSL Connection\n✓ Bonus: Free Hero Banner & WA Integration");
                        } else if (e.target.value === "PROFESSIONAL") {
                          setPropCost("Rp 5.900.000");
                          setPropTimeline("7 – 14 Hari Kerja");
                          setPropDeliverables("✓ Website 5–8 Halaman (Home, About, Services, Portfolio, Contact, Blog)\n✓ Mobile Responsive & SEO Setup\n✓ Speed Optimization & Google Analytics\n✓ Bonus: 3 Social Media Banner & Training");
                        } else {
                          setPropCost("Rp 12.900.000+");
                          setPropTimeline("14 – 30 Hari Kerja");
                          setPropDeliverables("✓ Custom Website & Conversion Strategy\n✓ Lead Gen Setup & Google Search Console\n✓ Booking System & CRM Integration\n✓ Garansi 60 Hari Support & Bug Fix");
                        }
                      }}
                      className="w-full bg-black/40 border border-cosmic-border px-3 py-2 rounded-xl text-white outline-none focus:border-violet-500"
                    >
                      <option value="STARTER">STARTER (Rp 1.900.000)</option>
                      <option value="PROFESSIONAL">PROFESSIONAL (Rp 5.900.000)</option>
                      <option value="BUSINESS">BUSINESS (Rp 12.900.000+)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <span className="text-gray-400">Dana Target Investasi</span>
                    <input 
                      type="text" 
                      value={propCost} 
                      onChange={(e) => setPropCost(e.target.value)}
                      className="w-full bg-black/40 border border-cosmic-border px-3 py-2 rounded-xl text-white outline-none focus:border-violet-500 font-mono"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-gray-400">Deliverables List</span>
                    <textarea 
                      rows={4}
                      value={propDeliverables} 
                      onChange={(e) => setPropDeliverables(e.target.value)}
                      className="w-full bg-black/40 border border-cosmic-border px-3 py-2 rounded-xl text-white outline-none focus:border-violet-500 text-xs font-sans"
                    />
                  </div>
                </div>
              </div>

              {/* Document Simulator Render */}
              <div className="lg:col-span-7 bg-[#111827] border-2 border-dashed border-violet-500/25 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
                <div className="absolute top-4 right-4 flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded bg-violet-600/10 border border-violet-500/35 text-[9px] font-mono font-bold text-violet-400 uppercase tracking-widest">
                    Live Preview
                  </span>
                  <button 
                    onClick={() => handleCopy(formattedProposalText, "propCopy")}
                    className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-cyan-950/40 text-cyan-400 hover:bg-cyan-900/30 text-xs border border-cyan-500/30"
                  >
                    {copiedScript === "propCopy" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedScript === "propCopy" ? "Disalin!" : "Salin Proposal"}</span>
                  </button>
                </div>

                {/* Proposal Theme Frame */}
                <div className="p-4 sm:p-6 bg-slate-900/40 border border-white/5 rounded-xl space-y-6">
                  
                  {/* Proposal Header */}
                  <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <PixelVerseLogo size={36} />
                    <div className="text-right font-sans text-xs">
                      <span className="text-gray-400 block font-mono text-[10px]">TANGGAL PROPOSAL</span>
                      <span className="text-white font-semibold">{propDate}</span>
                    </div>
                  </div>

                  {/* Client metadata */}
                  <div className="grid grid-cols-2 gap-4 font-sans text-xs border-b border-white/5 pb-4">
                    <div>
                      <span className="text-gray-500 block font-mono text-[10px]">PREPARED FOR</span>
                      <span className="text-white font-bold block">{propClient}</span>
                      <span className="text-gray-400">{propBiz}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-500 block font-mono text-[10px]">ESTIMASI TIMELINE</span>
                      <span className="text-white font-bold">{propTimeline}</span>
                    </div>
                  </div>

                  {/* Core layout sections */}
                  <div className="space-y-4 font-sans text-xs sm:text-sm">
                    <div className="space-y-1">
                      <h4 className="font-bold text-white text-xs tracking-wider uppercase text-cyan-400">PROJECT OVERVIEW</h4>
                      <p className="text-gray-400 italic">
                        Tujuan pembuatan website adalah meningkatkan kredibilitas digital bisnis, mengintegrasikan funnel direct marketing, serta mempermudah konversi Leads potensial secara konsisten.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="font-bold text-white text-xs tracking-wider uppercase text-cyan-400">SCOPE OF WORK</h4>
                      <div className="bg-black/20 p-3 rounded-lg border border-white/5 text-[11px] font-sans text-gray-300 leading-relaxed whitespace-pre-line">
                        {propDeliverables}
                      </div>
                    </div>

                    <div className="space-y-1 pt-2 border-t border-white/5">
                      <div className="flex justify-between items-center bg-violet-600/10 border border-violet-500/20 p-3 rounded-lg">
                        <div>
                          <span className="text-gray-400 text-[10px] block font-mono">PILOSI PAKET ({propPkg})</span>
                          <span className="text-white text-xs font-bold font-mono">Draf Total Investasi</span>
                        </div>
                        <span className="text-emerald-400 font-black font-mono text-base">{propCost}</span>
                      </div>
                      <p className="text-[10px] text-gray-500 mt-1">
                        * Skema Pembayaran: 50% Down Payment (DP) untuk kickoff pengerjaan, dan 50% Pelunasan sebelum penyerahan aset &amp; Launching.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 4: LIVE INVOICE SIMULATOR */}
          {activeTab === "invoice" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Creator Config Form */}
              <div className="lg:col-span-5 bg-cosmic-card border border-cosmic-border rounded-2xl p-6 space-y-4">
                <div className="flex items-center space-x-2 pb-2 border-b border-cosmic-border">
                  <Receipt className="w-4 h-4 text-cyan-400" />
                  <h4 className="font-sans font-black text-sm text-white">Invoice Configurator</h4>
                </div>

                <div className="space-y-4 font-sans text-xs">
                  <div className="space-y-1">
                    <span className="text-gray-400">Nama Penerima / Klien</span>
                    <input 
                      type="text" 
                      value={invoiceClient} 
                      onChange={(e) => setInvoiceClient(e.target.value)}
                      className="w-full bg-black/40 border border-cosmic-border px-3 py-2 rounded-xl text-white outline-none focus:border-violet-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-gray-400">Nomor Invoice</span>
                    <input 
                      type="text" 
                      value={invoiceNo} 
                      onChange={(e) => setInvoiceNo(e.target.value)}
                      className="w-full bg-black/40 border border-cosmic-border px-3 py-2 rounded-xl text-white outline-none focus:border-violet-500 font-mono"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-gray-400">Tanggal Transaksi</span>
                    <input 
                      type="text" 
                      value={invoiceDate} 
                      onChange={(e) => setInvoiceDate(e.target.value)}
                      className="w-full bg-black/40 border border-cosmic-border px-3 py-2 rounded-xl text-white outline-none focus:border-violet-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <span className="text-gray-400">Pilih Paket Tagihan Utama</span>
                    <div className="grid grid-cols-3 gap-2">
                      <button 
                        onClick={() => { setInvoiceItemPrice(1900000); }} 
                        className={`py-2 rounded-lg border text-[11px] font-bold ${invoiceItemPrice === 1900000 ? "bg-violet-600 border-violet-500 text-white" : "border-cosmic-border text-gray-400"}`}
                      >
                        STARTER
                      </button>
                      <button 
                        onClick={() => { setInvoiceItemPrice(5900000); }} 
                        className={`py-2 rounded-lg border text-[11px] font-bold ${invoiceItemPrice === 5900000 ? "bg-violet-600 border-violet-500 text-white" : "border-cosmic-border text-gray-400"}`}
                      >
                        PRO
                      </button>
                      <button 
                        onClick={() => { setInvoiceItemPrice(12900000); }} 
                        className={`py-2 rounded-lg border text-[11px] font-bold ${invoiceItemPrice === 12900000 ? "bg-violet-600 border-violet-500 text-white" : "border-cosmic-border text-gray-400"}`}
                      >
                        BIZ
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-gray-400">Setting Nilai Custom Tagihan (Rp)</span>
                    <input 
                      type="number" 
                      value={invoiceItemPrice} 
                      onChange={(e) => setInvoiceItemPrice(Number(e.target.value))}
                      className="w-full bg-black/40 border border-cosmic-border px-3 py-2 rounded-xl text-white outline-none focus:border-violet-500 font-mono"
                    />
                  </div>

                  <div className="flex items-center justify-between p-3 bg-black/30 border border-cosmic-border rounded-xl">
                    <span className="text-gray-400 font-bold">Status Pembayaran</span>
                    <button
                      onClick={() => setIsPaid(!isPaid)}
                      className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-colors duration-300 ${
                        isPaid 
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                          : "bg-red-500/20 text-red-400 border border-red-500/40"
                      }`}
                    >
                      {isPaid ? "LUNAS" : "BELUM DIBAYAR"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Document Simulator Render */}
              <div className="lg:col-span-7 bg-[#111827] border-2 border-dashed border-violet-500/25 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
                <div className="absolute top-4 right-4 flex items-center space-x-2">
                  <span className={`px-2.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-widest ${isPaid ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}>
                    {isPaid ? "Lunas" : "Belum Dibayar"}
                  </span>
                  <button 
                    onClick={() => handleCopy(formattedInvoiceText, "invoiceCopy")}
                    className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-cyan-950/40 text-cyan-400 hover:bg-cyan-900/30 text-xs border border-cyan-500/30"
                  >
                    {copiedScript === "invoiceCopy" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedScript === "invoiceCopy" ? "Disalin!" : "Salin Invoice"}</span>
                  </button>
                </div>

                {/* Proposal Theme Frame */}
                <div className="p-4 sm:p-6 bg-slate-900/40 border border-white/5 rounded-xl space-y-6">
                  
                  {/* Invoice Header */}
                  <div className="flex justify-between items-start border-b border-white/5 pb-4">
                    <div>
                      <h3 className="font-sans font-black text-xl text-white tracking-wider">INVOICE</h3>
                      <p className="font-sans text-[11px] text-gray-400 font-medium">
                        PixelVerse Studio Agency
                      </p>
                      <span className="font-mono text-[9px] text-cyan-400 block mt-1">WhatsApp: +62 857-3330-9949</span>
                    </div>
                    <div className="text-right font-sans text-xs">
                      <span className="text-gray-500 block font-mono text-[10px]">NO. INVOICE</span>
                      <span className="text-white font-mono font-bold block">{invoiceNo}</span>
                      <span className="text-gray-500 block font-mono text-[10px] mt-2">TANGGAL</span>
                      <span className="text-white font-semibold">{invoiceDate}</span>
                    </div>
                  </div>

                  {/* Customer Info */}
                  <div className="font-sans text-xs">
                    <span className="text-gray-500 block font-mono text-[10px]">DITERBITKAN UNTUK</span>
                    <span className="text-white font-bold text-sm block">{invoiceClient}</span>
                  </div>

                  {/* Calculations Table */}
                  <div className="space-y-4 font-sans text-xs">
                    <div className="border-t border-b border-white/5 py-3 grid grid-cols-12 text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider">
                      <div className="col-span-8">Deskripsi Produk</div>
                      <div className="col-span-4 text-right">Harga</div>
                    </div>

                    <div className="grid grid-cols-12 text-xs text-gray-300">
                      <div className="col-span-8 space-y-0.5">
                        <span className="text-white font-bold block">Pembuatan Website &amp; Landing Page</span>
                        <span className="text-gray-400 text-[11px]">Metode Full Pengerjaan, Security Hardening, Integrasi WhatsApp.</span>
                      </div>
                      <div className="col-span-4 text-right font-mono font-bold text-white self-center">
                        Rp {invoiceItemPrice.toLocaleString("id-ID")}
                      </div>
                    </div>

                    {/* Breakdown of Payments */}
                    <div className="pt-4 border-t border-white/5 space-y-2">
                      <div className="flex justify-between items-center text-gray-400">
                        <span>Total Tagihan:</span>
                        <span className="font-mono text-white font-semibold">Rp {invoiceItemPrice.toLocaleString("id-ID")}</span>
                      </div>
                      <div className="flex justify-between items-center text-gray-400">
                        <span>Pembayaran Down Payment (DP 50%):</span>
                        <span className="font-mono text-cyan-400 font-bold">Rp {(invoiceItemPrice * 0.5).toLocaleString("id-ID")}</span>
                      </div>
                      <div className="flex justify-between items-center text-gray-400">
                        <span>Sisa Pelunasan (50%):</span>
                        <span className="font-mono text-violet-300 font-bold">Rp {(invoiceItemPrice * 0.5).toLocaleString("id-ID")}</span>
                      </div>
                    </div>

                    {/* Payment Account Details */}
                    <div className="bg-violet-950/10 border border-violet-500/25 p-4 rounded-xl space-y-1 mt-4">
                      <span className="font-bold text-white block text-xs">Metode Pembayaran:</span>
                      <p className="text-xs text-gray-300 font-semibold">Bank BCA: <span className="font-mono text-cyan-300">1234 5678 9012</span></p>
                      <p className="text-[11px] text-gray-500">Atas Nama: <span className="font-bold text-white text-xs">PixelVerse Studio</span></p>
                    </div>

                    {/* Footer text */}
                    <p className="text-[10px] text-center text-gray-500 pt-4 border-t border-white/5">
                      Terima kasih atas kepercayaan Anda bermitra bersama PixelVerse Studio!
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "acquisition" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {/* Top Bento Cards: Target Industries & Key Rules */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Rules & Key Guidelines */}
                <div className="lg:col-span-5 bg-cosmic-card border border-cosmic-border rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 pb-3 border-b border-cosmic-border/50 mb-4">
                      <Target className="w-5 h-5 text-pink-400" />
                      <h4 className="font-sans font-black text-sm text-white">Outreach Rules &amp; Philosophy</h4>
                    </div>
                    <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                      SOP Dasar PixelVerse Studio mengutamakan kualitas hubungan sebelum melakukan penawaran dagang. Ikuti tiga aturan mutlak ini:
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 p-3 bg-black/20 border border-white/5 rounded-xl">
                        <span className="flex h-6 w-6 items-center justify-center rounded bg-violet-600/10 text-violet-400 border border-violet-500/20 text-xs font-bold font-mono">1</span>
                        <div>
                          <h5 className="text-xs font-bold text-white">Jangan langsung menjual!</h5>
                          <p className="text-[10.5px] text-gray-400 mt-1">Interaksi langsung di awal yang berbau jualan akan memicu resistensi prospek.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-black/20 border border-white/5 rounded-xl">
                        <span className="flex h-6 w-6 items-center justify-center rounded bg-cyan-600/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold font-mono">2</span>
                        <div>
                          <h5 className="text-xs font-bold text-white">Fokus Membuka Percakapan</h5>
                          <p className="text-[10.5px] text-gray-400 mt-1">Tawarkan bantuan, diskusikan model bisnis, atau ajukan pertanyaan terbuka.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-black/20 border border-white/5 rounded-xl">
                        <span className="flex h-6 w-6 items-center justify-center rounded bg-pink-600/10 text-pink-400 border border-pink-500/20 text-xs font-bold font-mono">3</span>
                        <div>
                          <h5 className="text-xs font-bold text-white">Personalisasi Nama &amp; Bisnis</h5>
                          <p className="text-[10.5px] text-gray-400 mt-1">Hindari blast template seragam. Sebutkan nama spesifik bisnis &amp; industri mereka.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-cosmic-border/55 flex justify-between items-center text-[11px] text-gray-500 font-mono">
                    <span>STRATEGY: DESIGN. BUILD. CONVERT</span>
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>

                {/* Target Industry & Workspace */}
                <div className="lg:col-span-7 bg-cosmic-card border border-cosmic-border rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-cosmic-border/50 mb-4">
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-cyan-400" />
                        <h4 className="font-sans font-black text-sm text-white">Target Industri &amp; Prospek</h4>
                      </div>
                      <span className="font-mono text-[10px] text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-2 py-0.5 rounded">
                        Kategori Terpilih
                      </span>
                    </div>

                    <p className="text-xs text-gray-400 mb-4">
                      Pilih target industri di bawah untuk mempersonalisasi template pesan di bawah secara otomatis:
                    </p>

                    {/* Industry Selector Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 font-sans">
                      {[
                        { id: "Restoran", label: "Restoran & Kafe", icon: "🍟" },
                        { id: "Fashion Brand", label: "Fashion Brand", icon: "👕" },
                        { id: "Properti", label: "Properti & Developer", icon: "🏢" },
                        { id: "UMKM", label: "UMKM Lokal", icon: "🛍️" },
                        { id: "Freelancer", label: "Freelancer", icon: "🎨" },
                        { id: "Konsultan", label: "Konsultan Profesional", icon: "📈" }
                      ].map((ind) => (
                        <button
                          key={ind.id}
                          onClick={() => {
                            setSelectedIndustry(ind.id);
                            if (acqBizName === "Restoran Kopi" || acqBizName === "" || acqBizName.toLowerCase().includes("properti") || acqBizName.toLowerCase().includes("umkm") || acqBizName.toLowerCase().includes("kafe") || acqBizName.toLowerCase().includes("fashion")) {
                              if (ind.id === "Restoran") setAcqBizName("Restoran Kopi");
                              else if (ind.id === "Fashion Brand") setAcqBizName("Butik Kebaya");
                              else if (ind.id === "Properti") setAcqBizName("Agensi Properti");
                              else if (ind.id === "UMKM") setAcqBizName("Kerajinan Kulit");
                              else if (ind.id === "Freelancer") setAcqBizName("Desain Interior");
                              else if (ind.id === "Konsultan") setAcqBizName("Konsultan Keuangan");
                            }
                          }}
                          className={`p-3 rounded-xl border text-xs font-bold transition-all text-left flex items-center space-x-2 ${
                            selectedIndustry === ind.id
                              ? "bg-gradient-to-r from-violet-600/20 to-cyan-600/20 border-cyan-500 text-white shadow-lg"
                              : "bg-black/20 border-white/5 text-gray-400 hover:text-white hover:border-white/10"
                          }`}
                        >
                          <span className="text-sm">{ind.icon}</span>
                          <span>{ind.label}</span>
                        </button>
                      ))}
                    </div>

                    {/* Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5 font-sans text-xs">
                        <label className="text-gray-400 font-semibold block">Nama Prospek (Pemilik)</label>
                        <input
                          type="text"
                          value={acqClientName}
                          onChange={(e) => setAcqClientName(e.target.value)}
                          className="w-full bg-black/40 border border-cosmic-border px-3 py-2 rounded-xl text-white outline-none focus:border-violet-500 font-medium"
                          placeholder="Contoh: Pak Budi / Bu Maria"
                        />
                      </div>
                      <div className="space-y-1.5 font-sans text-xs">
                        <label className="text-gray-400 font-semibold block">Nama Bisnis / Brand</label>
                        <input
                          type="text"
                          value={acqBizName}
                          onChange={(e) => setAcqBizName(e.target.value)}
                          className="w-full bg-black/40 border border-cosmic-border px-3 py-2 rounded-xl text-white outline-none focus:border-violet-500 font-medium"
                          placeholder="Contoh: Kopi Nusantara"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-[10px] text-gray-500 flex items-center space-x-1.5 bg-black/20 px-3 py-2 rounded-lg border border-white/5">
                    <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Lengkapi data di atas untuk merelasikan variabel pesan dinamis di generator bawah.</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Outreach Messenger */}
              <div className="bg-cosmic-card border border-cosmic-border rounded-3xl p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-cosmic-border pb-5">
                  <div className="flex items-center space-x-2.5">
                    <MessageSquare className="w-5 h-5 text-violet-400" />
                    <div>
                      <h4 className="font-sans font-black text-base text-white">WhatsApp Outreach Script Generator</h4>
                      <p className="text-xs text-gray-400 mt-0.5">Template pesan pembuka percakapan hingga closing yang sudah dipersonalisasi.</p>
                    </div>
                  </div>
                  
                  {/* Pipeline Script Navigator */}
                  <div className="flex flex-wrap gap-1 bg-black/40 border border-white/5 p-1 rounded-xl">
                    {[
                      { id: "first", label: "1. First Message" },
                      { id: "follow1", label: "2. Follow Up #1" },
                      { id: "follow2", label: "3. Follow Up #2" },
                      { id: "closing", label: "4. Closing Message" },
                      { id: "testi", label: "5. Minta Testimoni" }
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        onClick={() => setActiveAcqScriptTab(btn.id as any)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
                          activeAcqScriptTab === btn.id
                            ? "bg-violet-600 text-white shadow"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Generator Result Frame */}
                {(() => {
                  let text = "";
                  let description = "";
                  let label = "";

                  if (activeAcqScriptTab === "first") {
                    label = "PESAN PERTAMA (OUTREACH AWAL)";
                    description = "Kiriman pesan pembuka yang tulus untuk memicu respons tawar-menawar tanpa unsur paksaan jualan.";
                    text = `Halo Pak/Bu ${acqClientName},

Perkenalkan, saya Xeran dari PixelVerse Studio.

Saya melihat bisnis Bapak/Ibu bergerak di bidang ${selectedIndustry}.

Saat ini saya sedang membantu beberapa bisnis membangun website profesional untuk memudahkan pelanggan menemukan informasi dan menghubungi mereka secara langsung.

Saya penasaran, apakah saat ini bisnis Bapak/Ibu sudah memiliki website sendiri?

Salam,
Xeran
PixelVerse Studio`;
                  } else if (activeAcqScriptTab === "follow1") {
                    label = "FOLLOW UP PERTAMA (H+2/3)";
                    description = "Tindak lanjut santai untuk memastikan pesan sebelumnya diterima, dengan tawaran review audit website gratis.";
                    text = `Halo Pak/Bu ${acqClientName},

Saya hanya ingin memastikan pesan sebelumnya sudah diterima.

Jika saat ini belum membutuhkan website, tidak masalah.

Namun saya dengan senang hati dapat memberikan masukan gratis terkait tampilan digital bisnis Bapak/Ibu apabila diperlukan.

Terima kasih.`;
                  } else if (activeAcqScriptTab === "follow2") {
                    label = "FOLLOW UP KEDUA (H+5)";
                    description = "Pesan perpisahan/tutup buku yang ramah, memberikan kesan siap membantu kapan saja prospek membutuhkan.";
                    text = `Halo Pak/Bu ${acqClientName},

Saya memahami mungkin sedang sibuk.

Jika suatu saat Bapak/Ibu membutuhkan landing page atau website untuk meningkatkan kredibilitas bisnis dan mempermudah calon pelanggan menghubungi bisnis Anda, saya siap membantu.

Terima kasih atas waktunya.

Salam,
Xeran`;
                  } else if (activeAcqScriptTab === "closing") {
                    label = "CLOSING & OFFER RECOMMENDATION";
                    description = "Digunakan saat prospek merespons positif posisi harga paket dan ingin melanjutkan ke alur kerja resmi.";
                    text = `Terima kasih Pak/Bu ${acqClientName}.

Berdasarkan kebutuhan yang telah kita diskusikan, saya merekomendasikan Paket ${chosenPackage}.

Langkah selanjutnya:

✓ Konfirmasi kebutuhan
✓ Pengiriman proposal
✓ Pembayaran DP
✓ Kickoff proyek

Apabila sudah sesuai, saya dapat mengirim proposal resmi hari ini.`;
                  } else {
                    label = "PERMINTAAN TESTIMONI PERTAMA (SETELAH PROYEK FINISH)";
                    description = "Trik krusial mengumpulkan bukti ulasan kepuasan pelanggan pertama Anda untuk bekal portofolio mendatang.";
                    text = `Pak/Bu ${acqClientName},

Terima kasih telah mempercayakan proyek website kepada PixelVerse Studio.

Apabila berkenan, bolehkah saya meminta ulasan singkat mengenai pengalaman bekerja sama selama proyek berlangsung?

Masukan Bapak/Ibu akan sangat membantu perkembangan studio kami.

Terima kasih.`;
                  }

                  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;

                  return (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* Left: Explanations */}
                      <div className="lg:col-span-4 space-y-4 font-sans text-xs sm:text-sm">
                        <div className="p-4 rounded-2xl bg-black/25 border border-white/5 space-y-2">
                          <span className="font-mono text-[9px] uppercase tracking-widest text-cyan-400 block">Tipe Script</span>
                          <span className="text-white font-bold block">{label}</span>
                          <p className="text-[11.5px] text-gray-400 leading-relaxed mt-1">{description}</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-violet-950/20 to-indigo-950/20 border border-violet-800/25 p-4 rounded-xl space-y-2">
                          <span className="text-white font-bold flex items-center gap-1 text-xs">
                            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                            <span>Action Tip</span>
                          </span>
                          <p className="text-[11px] text-violet-300 leading-relaxed font-sans">
                            Cukup isi variabel nama dan bisnis target di atas, salin pesan ini atau klik tombol kirim langsung ke aplikasi WhatsApp tujuan Anda. Jangan lupa lakukan modifikasi kecil yang relevan agar terasa tulus!
                          </p>
                        </div>
                      </div>

                      {/* Right: Message Bubble Frame */}
                      <div className="lg:col-span-8 bg-[#090e17] rounded-2xl border border-cosmic-border/60 p-5 sm:p-6 relative shadow-inner overflow-hidden">
                        <div className="absolute top-4 right-4 flex items-center space-x-2">
                          {/* Copy Button */}
                          <button
                            onClick={() => handleCopy(text, `acq_${activeAcqScriptTab}`)}
                            className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 text-xs border border-white/10"
                          >
                            {copiedScript === `acq_${activeAcqScriptTab}` ? <Check className="w-3 h-3 text-cyan-400" /> : <Copy className="w-3 h-3" />}
                            <span>{copiedScript === `acq_${activeAcqScriptTab}` ? "Disalin!" : "Salin Pesan"}</span>
                          </button>
                          
                          {/* Send WhatsApp */}
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/35 text-emerald-400 text-xs border border-emerald-500/30"
                          >
                            <Share2 className="w-3 h-3" />
                            <span>Kirim ke WhatsApp</span>
                          </a>
                        </div>

                        {/* Speech Bubble Simulator */}
                        <div className="mt-8 p-5 bg-[#0f172a] rounded-2xl border border-white/5 space-y-3 font-sans text-xs sm:text-sm text-gray-200 leading-relaxed whitespace-pre-line shadow">
                          {text}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Action Plan & Interactive Roadmap */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch font-sans">
                {/* 30 Day Master plan */}
                <div className="lg:col-span-8 bg-cosmic-card border border-cosmic-border rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 pb-3 border-b border-cosmic-border/50">
                      <Calendar className="w-5 h-5 text-cyan-400" />
                      <div>
                        <h4 className="font-sans font-black text-sm text-white">Action Plan 30 Hari Klien Pertama</h4>
                        <p className="text-[11px] text-gray-500 mt-0.5 text-sans">Metodologi aksi bertahap empat pekan untuk meraih prospek &amp; meresmikan proyek pertama.</p>
                      </div>
                    </div>

                    <div className="relative border-l border-violet-500/25 ml-4 pl-6 space-y-8 mt-6">
                      {/* Week 1 */}
                      <div className="relative">
                        {/* Node circle */}
                        <span className="absolute -left-[31px] top-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-violet-600 border border-violet-400 shadow-sm shadow-violet-500/50"></span>
                        <div>
                          <span className="font-mono text-[9px] font-black uppercase text-violet-400 bg-violet-950/50 border border-violet-800/40 px-2 py-0.5 rounded tracking-wider">
                            Minggu 1: Persiapan &amp; Prospek
                          </span>
                          <h5 className="font-sans font-extrabold text-white text-xs sm:text-sm mt-1.5">Fokus: Persiapan dan Prospek</h5>
                          <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                            Menata saluran penemuan digital agensi, mendesain website portfolio studio, serta mengumpulkan list prospek industri.
                          </p>
                          
                          {/* Action items checkboxes */}
                          <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                            {[
                              { id: "opt-linkedin", label: "Optimalkan LinkedIn Profil" },
                              { id: "opt-fb", label: "Optimalkan Facebook Profil/Page" },
                              { id: "pvs-web", label: "Persiapkan Web PixelVerse Studio" },
                              { id: "portfolio-ready", label: "Buat Portfolio Page Siap Tampil" },
                              { id: "post-contents", label: "Posting 3 Konten Awal Terjadwal" }
                            ].map((task) => (
                              <label key={task.id} className="flex items-center space-x-2 p-2 rounded bg-black/25 border border-white/5 hover:border-violet-500/20 cursor-pointer transition">
                                <input
                                  type="checkbox"
                                  checked={!!completedSopTasks[task.id]}
                                  onChange={(e) => setCompletedSopTasks({ ...completedSopTasks, [task.id]: e.target.checked })}
                                  className="rounded text-violet-600 bg-black border-cosmic-border focus:ring-0"
                                />
                                <span className={`text-[11px] ${completedSopTasks[task.id] ? "text-gray-500 line-through" : "text-gray-300"}`}>{task.label}</span>
                              </label>
                            ))}
                          </div>
                          <div className="mt-2.5 flex items-center space-x-4 text-[11px] font-mono text-gray-500">
                            <span className="text-cyan-400 font-bold">Target: 50 Prospek</span>
                            <span>Output: Daftar Bisnis Lokal</span>
                          </div>
                        </div>
                      </div>

                      {/* Week 2 */}
                      <div className="relative">
                        <span className="absolute -left-[31px] top-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-cyan-600 border border-cyan-400 shadow-sm shadow-cyan-500/50"></span>
                        <div>
                          <span className="font-mono text-[9px] font-black uppercase text-cyan-400 bg-cyan-950/50 border border-cyan-800/40 px-2 py-0.5 rounded tracking-wider">
                            Minggu 2: Outreach Gencar
                          </span>
                          <h5 className="font-sans font-extrabold text-white text-xs sm:text-sm mt-1.5">Fokus: Outreach Gencar</h5>
                          <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                            Meluncurkan promosi bertarget. Target mingguan adalah menghubungi 70 prospek potensial agar menuai tanggapan.
                          </p>
                          <ul className="mt-2.5 space-y-1.5 text-[11px] text-gray-400 font-mono">
                            <li className="flex items-center space-x-2">
                              <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
                              <span>• 10 WhatsApp Outreach per Hari</span>
                            </li>
                            <li className="flex items-center space-x-2">
                              <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
                              <span>• 5 Komentar Bernilai di LinkedIn per Hari</span>
                            </li>
                            <li className="flex items-center space-x-2">
                              <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
                              <span>• 3 Konten per Minggu</span>
                            </li>
                          </ul>
                          <div className="mt-2 text-[11px] font-mono text-cyan-400 font-bold">
                            Target: 70 Outreach | 10–15 Respons | 1 Meeting Terbentuk
                          </div>
                        </div>
                      </div>

                      {/* Week 3 */}
                      <div className="relative">
                        <span className="absolute -left-[31px] top-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-pink-600 border border-pink-400 shadow-sm"></span>
                        <div>
                          <span className="font-mono text-[9px] font-black uppercase text-pink-400 bg-pink-950/50 border border-pink-800/40 px-2 py-0.5 rounded tracking-wider">
                            Minggu 3: Sesi Discovery &amp; Proposal
                          </span>
                          <h5 className="font-sans font-extrabold text-white text-xs sm:text-sm mt-1.5">Fokus: Discovery Call</h5>
                          <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                            Menjalani sesi meeting dengan prospek, mengonfirmasi pain points, serta mendistribusikan proposal resmi.
                          </p>
                          <ul className="mt-2.5 space-y-1 text-[11px] text-gray-400 font-mono pl-2">
                            <li>• Kirim proposal maksimal 24 jam setelah meeting</li>
                            <li>• Lakukan follow up prospek lama secara profesional</li>
                          </ul>
                          <div className="mt-2 text-[11px] font-mono text-pink-400 font-bold font-sans">
                            Target: 3 Meeting | 2 Proposal Terkirim
                          </div>
                        </div>
                      </div>

                      {/* Week 4 */}
                      <div className="relative">
                        <span className="absolute -left-[31px] top-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-emerald-600 border border-emerald-400 shadow-sm shadow-emerald-500/50"></span>
                        <div>
                          <span className="font-mono text-[9px] font-black uppercase text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2 py-0.5 rounded tracking-wider">
                            Minggu 4: Closing Kontrak
                          </span>
                          <h5 className="font-sans font-extrabold text-white text-xs sm:text-sm mt-1.5">Fokus: Closing</h5>
                          <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                            Mengirimkan follow-up proposal persuasif, menawarkan paket Starter atau Professional, penagihan DP awal, dan kickoff proyek perdana.
                          </p>
                          <div className="mt-2 text-[11px] font-mono text-emerald-400 font-bold font-sans">
                            Target Utama: 1 Klien Pertama Resmi Mulai Proyek!
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 border-t border-white/5 pt-4 flex items-center justify-between text-xs text-gray-500">
                    <span>*Rasio konversi akan terasah tajam seiring waktu.</span>
                    <span>PIXELVERSE &copy; 2026</span>
                  </div>
                </div>

                {/* Right: Funnel Simulator & Content System Mini Panel */}
                <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
                  {/* Funnel Calc */}
                  <div className="bg-cosmic-card border border-cosmic-border rounded-2xl p-6 space-y-4">
                    <div className="flex items-center space-x-2 pb-2 border-b border-cosmic-border">
                      <TrendingUp className="w-4 h-4 text-cyan-400" />
                      <h4 className="font-sans font-black text-xs sm:text-sm text-white">Funnel Target Simulator</h4>
                    </div>

                    <div className="space-y-4 font-sans text-xs">
                      <div>
                        <div className="flex justify-between text-[11px] text-gray-400 mb-1 font-bold">
                          <span>Target Outreach Bulanan</span>
                          <span className="text-white font-mono">{outreachTarget} Prospek</span>
                        </div>
                        <input
                          type="range"
                          min="10"
                          max="300"
                          step="10"
                          value={outreachTarget}
                          onChange={(e) => setOutreachTarget(Number(e.target.value))}
                          className="w-full accent-cyan-400 mt-1 cursor-pointer"
                        />
                      </div>

                      <div className="space-y-2 bg-[#090e17] p-4 rounded-xl border border-white/5 font-mono text-[11px]">
                        <div className="flex justify-between border-b border-white/5 pb-1 text-gray-300">
                          <span>1. Outreach Awal:</span>
                          <span className="text-white font-bold">{outreachTarget}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-1 text-cyan-300">
                          <span>2. Respons (15%):</span>
                          <span className="font-bold">{Math.round(outreachTarget * 0.15)}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-1 text-violet-300 font-medium">
                          <span>3. Percakapan (5%):</span>
                          <span className="font-bold">{Math.round(outreachTarget * 0.05)}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-1 text-pink-300">
                          <span>4. Target Meeting (3%):</span>
                          <span className="font-bold">{Math.round(outreachTarget * 0.03)}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-1 text-yellow-300">
                          <span>5. Kirim Proposal (2%):</span>
                          <span className="font-bold">{Math.round(outreachTarget * 0.02)}</span>
                        </div>
                        <div className="flex justify-between text-emerald-400 pt-1 font-sans text-xs font-bold">
                          <span>6. ESTIMASI CLOSING (1%):</span>
                          <span className="font-sans text-xs bg-emerald-950/30 border border-emerald-500/20 px-2 py-0.5 rounded">
                            {Math.max(1, Math.round(outreachTarget * 0.01))} Klien
                          </span>
                        </div>
                      </div>

                      <p className="text-[9.5px] text-gray-500 text-center leading-relaxed">
                        Tingkat keberhasilan berdasarkan standar benchmark konversi WhatsApp outreach cold-campaign.
                      </p>
                    </div>
                  </div>

                  {/* KPI Targets */}
                  <div className="bg-cosmic-card border border-cosmic-border rounded-2xl p-5 space-y-4">
                    <div className="flex items-center space-x-2 pb-2 border-b border-cosmic-border">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <h4 className="font-sans font-black text-xs tracking-wider text-white">KPI TARGET BULAN #1</h4>
                    </div>
                    
                    <div className="space-y-2 font-mono text-[10.5px]">
                      {[
                        { label: "100 Prospek Terlist", val: "Ok" },
                        { label: "100 Outreach Kontak", val: "Ok" },
                        { label: "15 Respons Balasan", val: "15%" },
                        { label: "3 Discovery Meeting", val: "3%" },
                        { label: "2 Proposal Dikirim", val: "2%" },
                        { label: "1 Klien Perdana (Goal)", val: "1%" },
                        { label: "1 Review/Testimoni", val: "Finish" }
                      ].map((kpi, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-black/25 px-3 py-1.5 rounded border border-white/5">
                          <span className="text-gray-300">{kpi.label}</span>
                          <span className={`px-1.5 py-0.5 rounded text-[8.5px] font-bold ${
                            kpi.val === "Ok" ? "text-cyan-400 bg-cyan-950/40" : kpi.val === "Finish" ? "text-emerald-400 bg-emerald-950/40" : "text-violet-400 bg-violet-950/50"
                          }`}>{kpi.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Strategy Hub Panel */}
              <div className="bg-cosmic-card border border-cosmic-border rounded-3xl p-6 sm:p-8 space-y-6">
                <div className="flex items-center space-x-2 pb-4 border-b border-cosmic-border/50">
                  <Share2 className="w-5 h-5 text-cyan-400" />
                  <div>
                    <h4 className="font-sans font-black text-base text-white">Content Marketing Strategy Hub</h4>
                    <p className="text-xs text-gray-400 mt-0.5">Publish konten bernilai tinggi ini di LinkedIn, Facebook, atau Instagram untuk memicu ketertarikan pasif.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch font-sans">
                  {/* Left: Content List selector */}
                  <div className="lg:col-span-5 space-y-2 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                    {[
                      { id: 0, title: "Konten #1: Media Sosial vs Kepastian Website", tag: "Ownership Asset" },
                      { id: 1, title: "Konten #2: Kehilangan Pelanggan dalam Detikan", tag: "User Retention" },
                      { id: 2, title: "Konten #3: Website Bukan Hanya Milik Korporasi", tag: "Business Credibility" },
                      { id: 3, title: "Konten #4: Cara Pelanggan Menghargai Bisnis", tag: "First Impression" },
                      { id: 4, title: "Konten #5: Tiga Elemen Krusial Website Bisnis", tag: "SOP Core Layout" },
                      { id: 5, title: "Konten #6: Mengapa Desain Tertentu Ramah Konversi?", tag: "Call to Action" }
                    ].map((cont) => (
                      <button
                        key={cont.id}
                        onClick={() => setActiveContentIdx(cont.id)}
                        className={`w-full p-3.5 rounded-xl text-left border transition-all flex flex-col justify-between space-y-1.5 ${
                          activeContentIdx === cont.id
                            ? "bg-gradient-to-r from-violet-600/10 to-cyan-600/10 border-cyan-500 text-white"
                            : "bg-black/20 border-white/5 text-gray-400 hover:text-white"
                        }`}
                      >
                        <span className="text-[11.5px] font-bold">{cont.title}</span>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-cyan-400 font-bold">{cont.tag}</span>
                      </button>
                    ))}
                  </div>

                  {/* Right: Content details panel */}
                  <div className="lg:col-span-7 bg-[#090e17] rounded-3xl border border-cosmic-border/50 p-6 flex flex-col justify-between min-h-[300px]">
                    {(() => {
                      const contents = [
                        {
                          hook: "Banyak bisnis aktif di media sosial, tetapi belum memiliki website sendiri.",
                          body: "Media sosial memegang peranan penting dalam berpromosi.\n\nNamun, akun media sosial bukanlah aset digital yang sepenuhnya Anda miliki secara mutlak. Algoritma raksasa dapat berubah sewaktu-waktu dan menutup akun tanpa peringatan apa pun.\n\nWebsite membantu bisnis memiliki pusat informasi resmi profesional yang independen, stabil, dan dapat diakses kapan saja oleh pelanggan gratis.",
                          cta: "Apakah bisnis Anda sudah memiliki website?"
                        },
                        {
                          hook: "Calon pelanggan mencari info penting bisnis Anda dalam hitungan detik.",
                          body: "Jika pengunjung membuang waktu karena kesulitan menggali perincian dasar seperti daftar layanan, lokasi lengkap, tarif, atau kontak, peluang bisnis emas Anda dapat menguap begitu saja.\n\nWebsite terstruktur rapi membantu menyajikan seluruh berkas bernilai ini secara instan dan efisien.",
                          cta: "Bagian informasi apa yang paling sering ditanyakan pelanggan Anda?"
                        },
                        {
                          hook: "Website bukan eksklusif milik perusahaan raksasa saja.",
                          body: "Pelaku freelance, jasa konsultan, industri UMKM kreatif, hingga toko fisik lokal wajib menggunakan website untuk memamerkan reputasi, mendata jaminan kualitas, serta merapikan visual penawaran layanan agar bersaing di tingkat global.",
                          cta: "Jika memiliki website hari ini, apa tujuan utama yang paling ingin Anda capai?"
                        },
                        {
                          hook: "Sebelum sepakat bertransaksi, pembeli selalu menggali alasan kuat untuk percaya.",
                          body: "Website representatif membantu mengukuhkan identitas premium Anda, menampilkan portofolio memikat, menyajikan testimoni sukses, dan memandu saluran konversi. Kesan pertama inilah kunci pembuka keputusan transaksi mereka.",
                          cta: "Apakah website bisnis Anda sudah mencerminkan kualitas layanan terbaik yang Anda berikan?"
                        },
                        {
                          hook: "Tiga komponen esensial website bisnis modern ramah konversi.",
                          body: "1. Kejelasan menyajikan informasi ringkas\n2. Estetika layout visual yang profesional & navigasi responsif\n3. Saluran interaksi mumpuni seperti tombol chat WhatsApp instan\n\nTanpa ketiga poin mutlak di atas, pengunjung akan meninggalkan situs tanpa bertindak apa-apa.",
                          cta: "Menurut kacamata bisnis Anda, manakah dari tiga komponen yang paling berpengaruh?"
                        },
                        {
                          hook: "Mengapa beberapa jenis website menghasilkan tingkat prospek yang berlipat ganda dibanding lainnya?",
                          body: "Jawabannya terletak pada navigasi konversi.\n\nDesain yang mengutamakan kemudahan navigator, estetika yang bersih, pengetikan persuasif, serta penempatan tombol ajakan bertindak (Call To Action) yang jelas mempermudah audiens melakukan kontak bisnis seketika.",
                          cta: "Sudahkah website Anda memiliki CTA (pemicu respons) yang ramah & lugas?"
                        }
                      ];

                      const currentCont = contents[activeContentIdx];
                      const formattedPostText = `📌 [HOOK]\n${currentCont.hook}\n\n📝 [BODY]\n${currentCont.body}\n\n💬 [CTA]\n${currentCont.cta}`;

                      return (
                        <div className="space-y-4 font-sans text-xs sm:text-sm h-full flex flex-col justify-between">
                          <div className="flex justify-between items-center border-b border-white/5 pb-3">
                            <span className="font-mono text-[9px] font-bold text-violet-400 bg-violet-950/40 px-2 py-0.5 rounded uppercase tracking-widest">
                              Content Template #{activeContentIdx + 1}
                            </span>
                            <button
                              onClick={() => handleCopy(formattedPostText, `cont_${activeContentIdx}`)}
                              className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-white/5 text-gray-300 hover:text-white text-xs border border-white/10"
                            >
                              {copiedScript === `cont_${activeContentIdx}` ? <Check className="w-3 h-3 text-cyan-400" /> : <Copy className="w-3 h-3" />}
                              <span>{copiedScript === `cont_${activeContentIdx}` ? "Disalin!" : "Salin Postingan"}</span>
                            </button>
                          </div>

                          <div className="space-y-4 flex-1 pt-2">
                            <div>
                              <span className="block font-sans text-[10px] text-gray-500 font-extrabold uppercase mb-1">1. Hook Konten</span>
                              <p className="font-bold text-white leading-relaxed">{currentCont.hook}</p>
                            </div>
                            
                            <div className="border-t border-white/5 pt-3">
                              <span className="block font-sans text-[10px] text-gray-500 font-extrabold uppercase mb-1">2. Konten Isi (Body)</span>
                              <div className="text-gray-300 leading-relaxed whitespace-pre-line text-xs bg-slate-900/40 border border-white/5 p-3 rounded-xl mt-1">
                                {currentCont.body}
                              </div>
                            </div>

                            <div className="border-t border-white/5 pt-3">
                              <span className="block font-sans text-[10px] text-gray-500 font-extrabold uppercase mb-1">3. Call To Action (CTA)</span>
                              <p className="text-cyan-400 font-bold leading-relaxed">{currentCont.cta}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}

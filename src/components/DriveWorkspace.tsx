import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Folder,
  File as FileIcon,
  Search,
  Upload,
  FolderPlus,
  Trash2,
  ExternalLink,
  Lock,
  RefreshCw,
  LogOut,
  X,
  Plus,
  CheckCircle2,
  Info,
  Settings,
  AlertTriangle,
  HelpCircle,
  FileText
} from "lucide-react";
import {
  listDriveFiles,
  createDriveFolder,
  uploadFileToDrive,
  deleteDriveFile,
  getStoredCredentials,
  setStoredCredentials,
  removeStoredCredentials,
  buildAuthUrl,
  setCachedToken,
  getCachedToken,
  clearCachedToken,
  GoogleDriveFile
} from "../lib/googleDriveService";
import { useLanguage } from "./LanguageContext";

export default function DriveWorkspace() {
  const { t, language } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [files, setFiles] = useState<GoogleDriveFile[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentFolderId, setCurrentFolderId] = useState<string | undefined>(undefined);
  const [folderHistory, setFolderHistory] = useState<{ id: string | undefined; name: string }[]>([
    { id: undefined, name: "Google Drive" }
  ]);

  // Credentials config (custom override drawer)
  const [creds, setCreds] = useState(getStoredCredentials());
  const [showConfig, setShowConfig] = useState(false);
  const [configClientId, setConfigClientId] = useState(creds.clientId);
  const [configApiKey, setConfigApiKey] = useState(creds.apiKey);

  // File Upload State
  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Create Folder State
  const [showFolderModal, setShowFolderModal] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  // Delete Confirmation State
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [deleteConfirmName, setDeleteConfirmName] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // General Notification Alert
  const [toastMessage, setToastMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Check URL has access_token (callback from Google auth implicit grant flow)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1)); // strip '#'
      const accessToken = params.get("access_token");
      const expiresIn = params.get("expires_in");
      
      if (accessToken) {
        const seconds = expiresIn ? parseInt(expiresIn) : 3600;
        setCachedToken(accessToken, seconds);
        setToken(accessToken);
        setIsAuthenticated(true);
        showToast("success", language === "id" ? "Sign-in Google Berhasil!" : "Google Sign-in Successful!");
        
        // Clean URL hash
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    } else {
      // Check memory cache
      const cached = getCachedToken();
      if (cached) {
        setToken(cached);
        setIsAuthenticated(true);
      }
    }
  }, [language]);

  /** Runs file fetch whenever auth token or folder navigation changes */
  useEffect(() => {
    if (token && isAuthenticated) {
      fetchFiles();
    }
  }, [token, isAuthenticated, currentFolderId]);

  const showToast = (type: "success" | "error", text: string) => {
    setToastMessage({ type, text });
    setTimeout(() => setToastMessage(null), 4000);
  };

  const fetchFiles = async () => {
    if (!token) return;
    setIsLoading(true);
    try {
      const filesList = await listDriveFiles(token, searchQuery || undefined, currentFolderId);
      setFiles(filesList);
    } catch (error: any) {
      console.error(error);
      showToast("error", error.message || "Failed to load files from Google Drive.");
      // Token might be invalid/expired, log out or clear
      if (error.message?.includes("Invalid Credentials") || error.message?.includes("expired")) {
        handleLogout();
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchFiles();
  };

  const handleGoogleLogin = () => {
    // If client ID is empty, show the config panel first
    if (!configClientId) {
      setShowConfig(true);
      showToast("error", language === "id" ? "Mohon tentukan Google Client ID Anda terlebih dahulu." : "Please define your Google Client ID first.");
      return;
    }

    const redirectUri = window.location.origin + window.location.pathname;
    const authUrl = buildAuthUrl(configClientId, redirectUri);
    
    // Redirect to auth url
    window.location.href = authUrl;
  };

  const handleLogout = () => {
    clearCachedToken();
    setToken(null);
    setIsAuthenticated(false);
    setFiles([]);
    setFolderHistory([{ id: undefined, name: "Google Drive" }]);
    setCurrentFolderId(undefined);
    showToast("success", language === "id" ? "Logged out dari Google Drive." : "Successfully logged out from Google Drive.");
  };

  const handleSaveCredentials = (e: React.FormEvent) => {
    e.preventDefault();
    setStoredCredentials(configClientId, configApiKey);
    setCreds({ clientId: configClientId, apiKey: configApiKey });
    setShowConfig(false);
    showToast("success", language === "id" ? "Kredensial berhasil disimpan!" : "Credentials stored successfully!");
  };

  const handleResetCredentials = () => {
    removeStoredCredentials();
    setConfigClientId("");
    setConfigApiKey("");
    setCreds({ clientId: "", apiKey: "" });
    setShowConfig(false);
    showToast("success", language === "id" ? "Kredensial berhasil direset." : "Credentials cleared.");
  };

  // Folder navigation helpers
  const handleFolderClick = (folder: GoogleDriveFile) => {
    setCurrentFolderId(folder.id);
    setFolderHistory((prev) => [...prev, { id: folder.id, name: folder.name }]);
  };

  const handleBreadcrumbClick = (hist: { id: string | undefined; name: string }, index: number) => {
    setCurrentFolderId(hist.id);
    setFolderHistory((prev) => prev.slice(0, index + 1));
  };

  // Folder creation handler
  const handleCreateFolder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFolderName.trim() || !token) return;
    try {
      await createDriveFolder(token, newFolderName.trim(), currentFolderId);
      setNewFolderName("");
      setShowFolderModal(false);
      showToast("success", language === "id" ? `Folder '${newFolderName}' berhasil dibuat!` : `Folder '${newFolderName}' created successfully!`);
      fetchFiles();
    } catch (err: any) {
      showToast("error", err.message || "Failed to create folder.");
    }
  };

  // Drag and drop handers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const handleFileUpload = async (file: File) => {
    if (!token) return;
    setUploadProgress(language === "id" ? "Mengunggah..." : "Uploading...");
    try {
      await uploadFileToDrive(token, file, currentFolderId);
      showToast("success", language === "id" ? `File '${file.name}' berhasil diunggah!` : `File '${file.name}' uploaded successfully!`);
      fetchFiles();
    } catch (err: any) {
      showToast("error", err.message || "Upload failed.");
    } finally {
      setUploadProgress(null);
    }
  };

  // Delete Dialog confirmation handler
  const triggerDeleteConfirm = (file: GoogleDriveFile) => {
    setDeleteConfirmId(file.id);
    setDeleteConfirmName(file.name);
  };

  const executeDelete = async () => {
    if (!deleteConfirmId || !token) return;
    setIsDeleting(true);
    try {
      await deleteDriveFile(token, deleteConfirmId);
      showToast("success", language === "id" ? `Aset '${deleteConfirmName}' berhasil dihapus.` : `Asset '${deleteConfirmName}' successfully deleted.`);
      setDeleteConfirmId(null);
      setDeleteConfirmName(null);
      fetchFiles();
    } catch (err: any) {
      showToast("error", err.message || "Deletion failed.");
    } finally {
      setIsDeleting(false);
    }
  };

  const formatBytes = (bytesStr?: string) => {
    if (!bytesStr) return "Folder";
    const bytes = parseInt(bytesStr);
    if (isNaN(bytes)) return "—";
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };

  const isFolder = (file: GoogleDriveFile) => {
    return file.mimeType === "application/vnd.google-apps.folder";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
      <div className="absolute top-[-100px] right-[-50px] w-96 h-96 bg-cyan-600/5 rounded-full blur-[110px] pointer-events-none"></div>

      {/* Dynamic Toast Notice */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            className={`fixed top-24 left-1/2 -translate-x-1/2 p-4 rounded-xl z-50 flex items-center space-x-2.5 shadow-2xl border text-sm max-w-sm ${
              toastMessage.type === "success"
                ? "bg-emerald-950/90 border-emerald-500/30 text-emerald-300"
                : "bg-red-950/90 border-red-500/30 text-red-300"
            }`}
          >
            {toastMessage.type === "success" ? <CheckCircle2 className="w-5 h-5 flex-shrink-0" /> : <AlertTriangle className="w-5 h-5 flex-shrink-0" />}
            <span>{toastMessage.text}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header section of Workspace */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-5 border-b border-cosmic-border pb-6">
        <div>
          <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/25 px-3 py-1 rounded-full">
            📁 LIVE CLOUD FILESYS
          </span>
          <h1 className="text-3xl font-sans font-black mt-3 text-white leading-tight">
            {language === "id" ? "Google Drive Portal Bisnis" : "Google Drive Business Portal"}
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            {language === "id"
              ? "Kelola materi berkas, diagram, draf blueprint mockup, atau rincian proposal harga digital langsung di Google Drive Anda."
              : "Manage files, blueprints, asset mockups, and client service estimate reports directly inside your personal Google Drive."}
          </p>
        </div>

        <div className="flex items-center space-x-3 self-start md:self-center">
          <button
            onClick={() => setShowConfig(!showConfig)}
            className="p-3 rounded-xl bg-cosmic-card hover:bg-white/5 border border-cosmic-border text-gray-300 transition-all duration-200"
            title="Setup Google API Credentials"
          >
            <Settings className="w-4 h-4" />
          </button>

          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="inline-flex items-center space-x-1.5 px-4.5 py-2.5 rounded-xl bg-red-650/15 border border-red-600/20 text-red-400 hover:bg-red-600 hover:text-white transition-all duration-300 font-bold text-xs"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>{language === "id" ? "Keluar Drive" : "Disconnect Drive"}</span>
            </button>
          ) : (
            <button
              onClick={handleGoogleLogin}
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 border border-violet-400/20 text-white font-black text-xs shadow-md shadow-violet-500/10 transition-all duration-300"
            >
              <Lock className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language === "id" ? "Hubungkan Google Drive" : "Connect Google Drive"}</span>
            </button>
          )}
        </div>
      </div>

      {/* Info Drawer regarding Setup & credentials */}
      <AnimatePresence>
        {showConfig && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mb-8 p-6 rounded-2xl bg-cosmic-card border border-violet-500/20 overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-sm font-sans font-black uppercase tracking-wider text-cyan-400 flex items-center space-x-2">
                <Settings className="w-4 h-4 text-violet-400 animate-spin" />
                <span>Google API Project Configurator</span>
              </h3>
              <button onClick={() => setShowConfig(false)} className="text-gray-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed mt-2.5 max-w-3xl">
              {language === "id"
                ? "Untuk memastikan integrasi Cloud dapat langsung melakukan sinkronisasi dengan Google Drive Anda, masukkan Google OAuth Client ID dari Google Cloud Console Anda di bawah ini. ID disimpan secara aman pada browser lokal."
                : "To run cloud synchronization and save proposal sheets directly into your private Drive storage, please provide your Google Cloud Console OAuth Client ID. Creds are stored safely in local browser memory."}
            </p>

            <form onSubmit={handleSaveCredentials} className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5 font-sans">
                <span className="block text-[11px] font-mono uppercase font-bold text-gray-300">Google OAuth Client ID</span>
                <input
                  type="text"
                  required
                  placeholder="e.g. 12345678-abcde.apps.googleusercontent.com"
                  value={configClientId}
                  onChange={(e) => setConfigClientId(e.target.value)}
                  className="w-full bg-black/40 border border-cosmic-border rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-violet-500"
                />
              </div>

              <div className="space-y-1.5 font-sans">
                <span className="block text-[11px] font-mono uppercase font-bold text-gray-300">Google API Key (Optional)</span>
                <input
                  type="password"
                  placeholder="e.g. AIzaSy..."
                  value={configApiKey}
                  onChange={(e) => setConfigApiKey(e.target.value)}
                  className="w-full bg-black/40 border border-cosmic-border rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-violet-500"
                />
              </div>

              <div className="md:col-span-2 flex items-center justify-between pt-2 border-t border-white/5">
                <div className="flex items-center space-x-2.5">
                  <a
                    href="https://console.cloud.google.com/apis/credentials"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] text-violet-400 hover:underline flex items-center space-x-1 font-semibold"
                  >
                    <span>Get client ID from Google Cloud Console</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
                
                <div className="flex space-x-2.5">
                  <button
                    type="button"
                    onClick={handleResetCredentials}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-extrabold text-xs tracking-wide shadow-md transition-all"
                  >
                    Save Configuration
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Workspace Frame */}
      {!isAuthenticated ? (
        <div className="py-20 text-center max-w-xl mx-auto bg-cosmic-card border border-cosmic-border/60 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-violet-600/5 rounded-full blur-2xl"></div>
          
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
            <Lock className="w-6 h-6 text-violet-400" />
          </div>

          <h3 className="font-sans font-black text-xl text-white">
            {language === "id" ? "Akses Terkunci: Hubungkan Akun" : "Locked Access: Connect Credentials"}
          </h3>
          
          <p className="text-gray-400 text-xs sm:text-sm mt-3 leading-relaxed">
            {language === "id"
              ? "Gunakan Google Drive Portal untuk melihat blueprint aset Anda sendiri, merancang sitemap folder, mengunggah materi, dan mendownload log harga yang tersinkronisasi di Cloud Storage Anda sendiri."
              : "To view your project folders, build visual hierarchies, search metadata, upload asset files, or export quote files, please sign in securely with Google."}
          </p>

          {/* Quick instructions and warnings */}
          <div className="mt-6 p-4 rounded-2xl bg-blue-950/15 border border-blue-500/25 text-left text-xs text-gray-300">
            <div className="flex items-start space-x-2">
              <Info className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Cara Menghubungkan Google Drive Anda:</span>
                <ol className="list-decimal pl-4 mt-1 space-y-1 text-gray-400 font-sans">
                  <li>
                    Tekan tombol <strong className="text-gray-200">ikon gerigi (Konfigurasi)</strong> di kanan atas.
                  </li>
                  <li>
                    Masukkan <strong className="text-gray-200">Google Client ID</strong> yang terdaftar di Google Cloud Console Anda dengan scope <code className="text-cyan-400 font-mono">drive</code> diizinkan.
                  </li>
                  <li>
                    Simpan konfigurasi, kemudian tekan tombol <strong className="text-cyan-300">Hubungkan Google Drive</strong> berwarna ungu di atas.
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4 items-center justify-center">
            <button
              onClick={() => {
                setConfigClientId("897375975552-example.apps.googleusercontent.com");
                setShowConfig(true);
              }}
              className="text-[11px] text-cyan-400 hover:semibold hover:underline"
            >
              Use demo playground client ID?
            </button>
            <span className="text-gray-600 text-xs">|</span>
            <button
              onClick={() => setShowConfig(true)}
              className="inline-flex items-center space-x-1 text-[11px] text-violet-400 hover:semibold hover:underline"
            >
              <span>Setup Custom Client Credentials Now</span>
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        /* Authenticated view: Fully Interactive Google Drive Workspace File Sys */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* File Upload Box & Operations (Left Column 4 columns) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Folder & Upload operation pane */}
            <div className="bg-cosmic-card border border-cosmic-border rounded-2xl p-6 space-y-5">
              <h3 className="font-sans font-black text-sm text-white uppercase tracking-wider border-b border-cosmic-border pb-3">
                {language === "id" ? "Panel Operasi" : "Operations Hub"}
              </h3>

              {/* Breadcrumbs for location */}
              <div className="flex flex-wrap items-center gap-1.5 text-xs text-gray-400 font-medium">
                {folderHistory.map((hist, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <span className="text-gray-600">/</span>}
                    <button
                      onClick={() => handleBreadcrumbClick(hist, index)}
                      className={`hover:text-cyan-400 truncate max-w-[110px] ${
                        index === folderHistory.length - 1 ? "text-cyan-400 font-bold" : ""
                      }`}
                    >
                      {hist.name}
                    </button>
                  </React.Fragment>
                ))}
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  onClick={() => setShowFolderModal(true)}
                  className="inline-flex items-center justify-center space-x-1.5 p-3 rounded-xl bg-violet-600/15 border border-violet-500/20 text-cyan-400 hover:bg-violet-600 hover:text-white text-xs font-bold transition-all duration-300"
                >
                  <FolderPlus className="w-3.5 h-3.5" />
                  <span>{language === "id" ? "Buat Folder" : "New Folder"}</span>
                </button>

                <button
                  onClick={() => fetchFiles()}
                  disabled={isLoading}
                  className="inline-flex items-center justify-center space-x-1.5 p-3 rounded-xl bg-white/5 border border-cosmic-border text-gray-300 hover:bg-white/10 text-xs font-bold transition-all duration-300 disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
                  <span>{language === "id" ? "Refresh" : "Reload"}</span>
                </button>
              </div>

              {/* Drag and Drop Box */}
              <div
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all duration-300 ${
                  dragActive
                    ? "border-cyan-400 bg-cyan-950/15 text-cyan-300"
                    : "border-cosmic-border bg-black/20 hover:border-violet-500/30 text-gray-400 hover:text-gray-300"
                }`}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileSelectChange}
                  className="hidden"
                />
                
                {uploadProgress ? (
                  <div className="space-y-2 py-2">
                    <RefreshCw className="w-6 h-6 text-cyan-400 animate-spin mx-auto" />
                    <p className="text-xs font-medium text-cyan-300 animate-pulse">{uploadProgress}</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Upload className="w-6 h-6 text-violet-400 mx-auto" />
                    <span className="block text-xs font-bold text-gray-200">
                      {language === "id" ? "Unggah Manual Berkas" : "Upload Google Drive Files"}
                    </span>
                    <p className="text-[10px] text-gray-500 leading-normal">
                      {language === "id"
                        ? "Dukung seret-dan-lepas (drag & drop) atau ketuk untuk browse dari perangkat local komputer."
                        : "Click to select or drag and drop images, sitemaps, PDFs, and assets to upload."}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Support guide card */}
            <div className="p-4 rounded-2xl bg-zinc-950 border border-cosmic-border text-xs leading-relaxed text-gray-400 space-y-2">
              <span className="font-bold text-white block flex items-center space-x-1">
                <HelpCircle className="w-4 h-4 text-violet-400" />
                <span>Drive Workspace Guide</span>
              </span>
              <p>
                {language === "id"
                  ? "Portal Workspace dikonfigurasi menggunakan Google Drive REST API v3. Anda memiliki kontrol penuh atas files sys Anda, termasuk mengunduh berkas gambar, sitemap XML, logo, PDF harga, atau draf penulisan."
                  : "Sync items in real-time. This dynamic client application uses live endpoints. You can search files, inspect hierarchy paths, and upload images safely."}
              </p>
            </div>

          </div>

          {/* Files List Showcase (Right Column 8 columns) */}
          <div className="lg:col-span-8 bg-cosmic-card border border-cosmic-border rounded-2xl p-6 min-h-[480px] flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Search Bar / Filter forms */}
              <form onSubmit={handleSearchSubmit} className="flex gap-2">
                <div className="relative flex-grow">
                  <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder={language === "id" ? "Cari nama file atau ekstensi berkas..." : "Search file name or extensions..."}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-black/40 border border-cosmic-border rounded-xl pl-9.5 pr-4 py-2.5 text-xs text-white placeholder-gray-500 outline-none focus:border-violet-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-violet-600/20 border border-violet-500/30 text-cyan-400 hover:bg-violet-600 hover:text-white transition-all text-xs font-bold"
                >
                  {language === "id" ? "Cari" : "Search"}
                </button>
              </form>

              {/* Loader */}
              {isLoading ? (
                <div className="py-24 text-center">
                  <RefreshCw className="w-8 h-8 text-cyan-400 animate-spin mx-auto mb-3" />
                  <span className="text-xs text-gray-500 font-mono uppercase tracking-wider animate-pulse">
                    Synchronizing items...
                  </span>
                </div>
              ) : files.length === 0 ? (
                /* Empty Workspace state */
                <div className="py-24 text-center border-2 border-dashed border-cosmic-border/50 rounded-xl">
                  <Info className="w-8 h-8 text-gray-500 mx-auto mb-3" />
                  <h4 className="font-sans font-bold text-sm text-gray-300">
                    {language === "id" ? "Folder / Workspace Kosong" : "No Files Found"}
                  </h4>
                  <p className="text-[11px] text-gray-500 mt-1 max-w-sm mx-auto leading-relaxed">
                    {language === "id"
                      ? "Tidak ada berkas yang ditemukan dalam scope directory ini. Gunakan panel kiri untuk mengunggah sitemap / proposal."
                      : "No files match your folders or search criteria. Upload some documents to see them listed."}
                  </p>
                </div>
              ) : (
                /* Interactive file grid/list layout */
                <div className="space-y-3.5">
                  <span className="font-mono text-[9px] uppercase font-black text-gray-550 tracking-wider">
                    {language === "id" ? "Daftar Berkas Terdeteksi" : "Drive Collection"} ({files.length})
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {files.map((file) => (
                      <div
                        key={file.id}
                        className="p-4 rounded-xl border border-cosmic-border bg-black/25 flex justify-between items-start group hover:border-violet-550 hover:bg-white/5 transition-all duration-300"
                      >
                        <div className="flex items-start space-x-3 truncate">
                          <div className={`p-2.5 rounded-lg border ${
                            isFolder(file) 
                              ? "bg-violet-600/10 border-violet-500/25 text-violet-400" 
                              : "bg-cyan-950/20 border-cyan-800/25 text-cyan-400"
                          }`}>
                            {isFolder(file) ? <Folder className="w-4 h-4" /> : <FileIcon className="w-4 h-4" />}
                          </div>
                          
                          <div className="truncate space-y-0.5">
                            <h4
                              onClick={() => isFolder(file) && handleFolderClick(file)}
                              className={`text-xs font-bold text-gray-200 truncate ${
                                isFolder(file) ? "cursor-pointer hover:text-cyan-400 hover:underline" : ""
                              }`}
                              title={file.name}
                            >
                              {file.name}
                            </h4>
                            <span className="block text-[10px] font-mono text-gray-500">
                              {formatBytes(file.size)}
                            </span>
                          </div>
                        </div>

                        {/* Dropdown actions */}
                        <div className="flex items-center space-x-1 p-0.5 rounded-lg bg-black/40 border border-white/5 opacity-80 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {file.webViewLink && (
                            <a
                              href={file.webViewLink}
                              target="_blank"
                              rel="noreferrer"
                              className="p-1 rounded text-gray-400 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                              title="Open file in Google Drive"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                          <button
                            onClick={() => triggerDeleteConfirm(file)}
                            className="p-1 rounded text-gray-400 hover:text-red-400 hover:bg-red-950/10 transition-colors"
                            title="Delete file"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Pagination / current location indicator footer */}
            <div className="pt-6 border-t border-cosmic-border/50 flex flex-wrap items-center justify-between text-xs text-gray-500 mt-6 gap-2">
              <span>
                {language === "id" ? "Portal Live Sync" : "OAuth Live Session Auth Tracker"}
              </span>

              <span className="font-mono text-[10px] bg-cyan-950/20 border border-cyan-800/15 px-2 py-0.5 rounded text-cyan-400 font-semibold flex items-center space-x-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>ONLINE SESSION</span>
              </span>
            </div>

          </div>

        </div>
      )}

      {/* MODAL 1: Create Folder modal */}
      <AnimatePresence>
        {showFolderModal && (
          <div className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-cosmic-card border border-cosmic-border rounded-2xl p-6 max-w-sm w-full space-y-4 shadow-2xl relative"
            >
              <button
                onClick={() => setShowFolderModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center space-x-2.5 pb-2 border-b border-cosmic-border">
                <FolderPlus className="w-5 h-5 text-violet-400" />
                <h3 className="font-sans font-black text-sm text-white uppercase tracking-wider">
                  {language === "id" ? "Buat Folder Baru" : "Create New Directory"}
                </h3>
              </div>

              <form onSubmit={handleCreateFolder} className="space-y-4">
                <div className="space-y-1.5 font-sans text-xs sm:text-sm">
                  <label className="text-gray-400 font-semibold uppercase font-mono text-[9px] block">
                    {language === "id" ? "Nama Folder *" : "Folder Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    autoFocus
                    placeholder={language === "id" ? "Contoh: Aset Logo Mitra" : "e.g., Logo Assets"}
                    value={newFolderName}
                    onChange={(e) => setNewFolderName(e.target.value)}
                    className="w-full bg-black/40 border border-cosmic-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-violet-500"
                  />
                </div>

                <div className="flex gap-2.5 justify-end">
                  <button
                    type="button"
                    onClick={() => setShowFolderModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                  >
                    {language === "id" ? "Batal" : "Cancel"}
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-extrabold text-xs tracking-wide shadow-md transition-all"
                  >
                    {language === "id" ? "Konfirmasi Buat" : "Create Folder"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL 2: STRICT EXPLICIT USER CONFIRMATION DIALOG FOR MUTATION/DELETING (MANDATORY REQUIREMENT) */}
      <AnimatePresence>
        {deleteConfirmId && (
          <div className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-cosmic-card border border-red-500/20 rounded-2xl p-6 max-w-sm w-full space-y-4 shadow-2xl relative"
            >
              <div className="flex items-center space-x-2.5 pb-2 border-b border-cosmic-border text-red-400">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 animate-bounce" />
                <h3 className="font-sans font-black text-sm uppercase tracking-wider">
                  {language === "id" ? "Konfirmasi Hapus Berkas" : "Authorize Data Deletion"}
                </h3>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                {language === "id" ? (
                  <span>
                    Apakah Anda yakin ingin menghapus berkas <strong className="text-white">"{deleteConfirmName}"</strong> secara permanen dari Google Drive? Tindakan ini bersifat destruktif dan tidak dapat dibatalkan.
                  </span>
                ) : (
                  <span>
                    Are you absolutely sure you want to permanently delete asset <strong className="text-white">"{deleteConfirmName}"</strong> from your cloud. This operation is destructive and cannot be undone.
                  </span>
                )}
              </p>

              <div className="flex gap-2.5 justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setDeleteConfirmId(null);
                    setDeleteConfirmName(null);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                  disabled={isDeleting}
                >
                  {language === "id" ? "Batal" : "Cancel"}
                </button>
                <button
                  onClick={executeDelete}
                  disabled={isDeleting}
                  className="px-5 py-2 rounded-xl bg-red-650 hover:bg-red-600 text-white font-extrabold text-xs tracking-wide shadow-md flex items-center space-x-1.5 transition-all"
                >
                  {isDeleting && <RefreshCw className="w-3 h-3 animate-spin" />}
                  <span>{language === "id" ? "Hapus Permanen" : "Yes, Delete Permanently"}</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

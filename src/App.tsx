import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Menu, X, ArrowUp, Sparkles, HelpCircle, Users, Layout, Wand2 } from "lucide-react";

import Hero from "./components/Hero";
import Speakers from "./components/Speakers";
import Philosophy from "./components/Philosophy";
import Timeline from "./components/Timeline";
import PromptBuilder from "./components/PromptBuilder";
import Troubleshooting from "./components/Troubleshooting";
import Preparation from "./components/Preparation";
import AppDemos from "./components/AppDemos";
import FAQ from "./components/FAQ";
import Community from "./components/Community";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("gioi-thieu");

  const navLinks = [
    { id: "gioi-thieu", label: "Giới thiệu" },
    { id: "dien-gia", label: "Diễn giả" },
    { id: "triet-ly", label: "Triết lý" },
    { id: "hanh-trinh", label: "6 Chặng" },
    { id: "bo-tao-prompt", label: "Tạo Prompt" },
    { id: "cuu-ho", label: "Cẩm nang" },
    { id: "chuan-bi", label: "Chuẩn bị" },
    { id: "hoc-lieu", label: "Học liệu" },
    { id: "giai-dap", label: "Hỏi đáp" },
    { id: "cong-dong", label: "Cộng đồng" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll top button
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Simple active section detection
      const scrollPosition = window.scrollY + 100;
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-gray-800 font-sans antialiased selection:bg-brand-100 selection:text-brand-900">
      {/* Sticky Navigation Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo / Title Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 text-left hover:opacity-90 transition"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-sm shadow-brand-500/15 shrink-0">
              <Wand2 className="w-5.5 h-5.5" />
            </div>
            <div>
              <span className="block text-base md:text-lg font-extrabold text-white tracking-tight leading-tight">
                XƯỞNG KIẾN TẠO
                <br />
                HỌC LIỆU
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-extrabold tracking-tight transition-all duration-200 border shadow-xs ${
                    isActive
                      ? "text-white bg-brand-600 border-brand-500 shadow-md shadow-brand-600/30"
                      : "text-slate-100 bg-slate-800/80 hover:bg-slate-800 border-slate-700/80 hover:border-slate-600 hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Mở menu"
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden border-t border-slate-800 bg-slate-900 overflow-hidden shadow-inner"
            >
              <div className="px-4 py-3 space-y-1.5">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-xs md:text-sm font-extrabold flex items-center justify-between border transition-all ${
                        isActive
                          ? "bg-brand-600 border-brand-500 text-white shadow-sm"
                          : "bg-slate-800/60 border-slate-700/80 text-slate-100 hover:bg-slate-800 hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive ? (
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Page Layout */}
      <main>
        {/* Section - Hero (Giới thiệu) */}
        <div id="gioi-thieu">
          <Hero />
        </div>

        {/* Section - Speakers (Diễn giả) */}
        <div id="dien-gia">
          <Speakers />
        </div>

        {/* Section - Philosophy (Triết lý) */}
        <div id="triet-ly">
          <Philosophy />
        </div>

        {/* Section - Timeline (Tiến trình 6 chặng) */}
        <div id="hanh-trinh">
          <Timeline />
        </div>

        {/* Section - Prompt Builder (Bộ thiết kế prompt Hiểu mình biết người) */}
        <div id="bo-tao-prompt">
          <PromptBuilder />
        </div>

        {/* Section - Troubleshooting (Cứu hộ Vibe Coding) */}
        <div id="cuu-ho">
          <Troubleshooting />
        </div>

        {/* Section - Preparation (Chuẩn bị) */}
        <div id="chuan-bi">
          <Preparation />
        </div>

        {/* Section - App Demos (Kho học liệu) */}
        <div id="hoc-lieu">
          <AppDemos />
        </div>

        {/* Section - FAQ (Hỏi đáp) */}
        <div id="giai-dap">
          <FAQ />
        </div>

        {/* Section - Community & Zalo/FB (Kết nối) */}
        <div id="cong-dong">
          <Community />
        </div>
      </main>

      {/* Elegant Professional Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎓</span>
                <span className="text-xl font-bold text-white tracking-tight">XƯỞNG KIẾN TẠO HỌC LIỆU</span>
              </div>
              <p className="text-base text-slate-300 leading-relaxed max-w-md">
                Workshop 03 đồng hành cùng giáo viên trong kỷ nguyên trí tuệ nhân tạo, đổi mới phương thức giảng dạy theo triết lý Creative Learning của MIT Media Lab.
              </p>
            </div>

            <div className="space-y-4 md:pl-12">
              <h4 className="text-sm font-bold text-slate-200 uppercase tracking-widest mb-3">Chương trình & Đơn vị tổ chức</h4>
              <div className="space-y-3 text-base text-slate-300">
                <div>
                  <span className="block font-semibold text-white">Chương trình đào tạo:</span>
                  <span className="font-bold text-xl">Super Teachers with AI</span>
                </div>
                <div>
                  <span className="block font-semibold text-white">Đơn vị tổ chức:</span>
                  <ul className="space-y-1 text-slate-400 mt-1">
                    <li className="font-bold text-xl">•  STEAM for Vietnam</li>
                    <li className="font-bold text-xl">•  American Center HCMC</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <div className="flex items-center">
              <a 
                href="https://www.facebook.com/people/Ham-Ch%C6%A1i-Education/100081637728642/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-[1.02] transition-transform duration-200 block"
              >
                <img 
                  src="https://lh3.googleusercontent.com/d/1CihXmyKfVHJz6283B2Zz_L6i2pvEmB7Q" 
                  alt="Ham Chơi Education Logo" 
                  className="h-[124px] w-[183.75px] opacity-95 hover:opacity-100 transition rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>
            <p className="font-mono text-sm">Thiết kế bởi Trí tuệ Nhân tạo</p>
          </div>
        </div>
      </footer>

      {/* Sticky Floating Scroll to Top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-xl bg-brand-600 hover:bg-brand-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200"
            aria-label="Về đầu trang"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

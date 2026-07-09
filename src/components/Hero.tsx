import React from "react";
import { motion } from "motion/react";
import { Sparkles, Calendar, MapPin, Clock } from "lucide-react";
import { WORKSHOP_INFO } from "../data";
import AboutWorkshop from "./AboutWorkshop";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-[#eef4fc] to-[#f0f4f8] text-slate-900 py-16 md:py-24 border-b border-gray-200" id="gioi-thieu">
      {/* Decorative vector background */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-brand-100 blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-indigo-100/50 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900 text-sm font-semibold tracking-wide shadow-xs animate-pulse"
          >
            <Sparkles className="w-4 h-4 text-brand-600" />
            <span>{WORKSHOP_INFO.workshopNumber}</span>
          </motion.div>
        </div>

        {/* Title */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight"
          >
            {WORKSHOP_INFO.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl font-bold text-brand-800 mt-3 md:mt-4 italic"
          >
            &ldquo;{WORKSHOP_INFO.subtitle}&rdquo;
          </motion.p>
        </div>

        {/* Info Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12 bg-white/90 p-4 md:p-6 rounded-2xl shadow-md border border-slate-200/80 backdrop-blur-xs"
        >
          <div className="flex items-center gap-3.5 p-2 md:border-r border-slate-150 last:border-0">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Thời lượng</p>
              <p className="text-sm font-extrabold text-slate-900">{WORKSHOP_INFO.duration}</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2 md:border-r border-slate-150 last:border-0">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Địa điểm</p>
              <p className="text-sm font-extrabold text-slate-900">{WORKSHOP_INFO.location}</p>
              <p className="text-[11px] text-gray-500 font-medium leading-tight">Tầng 8, Diamond Plaza, 34 Lê Duẩn, Q.1</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Đối tượng</p>
              <p className="text-sm font-extrabold text-slate-900">Giáo viên</p>
            </div>
          </div>
        </motion.div>

        {/* Content Panel */}
        <div className="mt-6 flex justify-center">
          <AboutWorkshop className="max-w-4xl w-full bg-white border border-gray-150 rounded-3xl p-6 md:p-8 shadow-xs space-y-6" />
        </div>
      </div>
    </section>
  );
}

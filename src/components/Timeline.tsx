import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, Gift, Award, HelpCircle, CheckCircle, Flame, Sparkles, BookOpen, ChevronRight, Compass } from "lucide-react";
import { WORKSHOP_STAGES } from "../data";

export default function Timeline() {
  const [selectedStageId, setSelectedStageId] = useState<number>(1);

  const getStageIconBadge = (id: number) => {
    switch (id) {
      case 1:
        return "👀";
      case 2:
        return "🚀";
      case 3:
        return "🧠";
      case 4:
        return "🎨";
      case 5:
        return "🌐";
      case 6:
        return "💬";
      default:
        return "✨";
    }
  };

  return (
    <section className="py-16 bg-white border-y border-gray-200" id="hanh-trinh">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-brand-600 font-bold text-sm uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
            Hành Trình Workshop
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 tracking-tight">
            Lộ trình 6 Chặng: Từ ý tưởng đến sản phẩm
          </h2>
          <p className="text-base text-gray-750 mt-2 max-w-xl mx-auto">
            Hành trình kéo dài 2 giờ đồng hồ được chia thành các chặng giúp thầy cô từng bước trải nghiệm và tự tin kiến tạo học liệu.
          </p>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Timeline navigation - Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-sm font-bold text-gray-700 uppercase tracking-widest pl-2 mb-4">
              Danh sách các chặng
            </h3>
            
            {WORKSHOP_STAGES.map((stage) => {
              const isSelected = selectedStageId === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStageId(stage.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                    isSelected
                      ? "bg-white border-brand-500 shadow-md translate-x-1"
                      : "bg-white/60 border-gray-100 hover:border-brand-300 hover:bg-white"
                  }`}
                >
                  {/* Circle number */}
                  <div
                    className={`w-10 h-10 rounded-xl font-bold flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? "bg-brand-600 text-white"
                        : "bg-brand-50 text-brand-700"
                    }`}
                  >
                    {getStageIconBadge(stage.id)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-bold text-brand-600 uppercase tracking-wider">
                        Chặng {stage.id}
                      </span>
                      <span className="text-sm text-gray-600 font-semibold flex items-center gap-1 shrink-0">
                        <Clock className="w-3 h-3" />
                        {stage.duration}
                      </span>
                    </div>
                    <h4 className={`text-base font-bold truncate mt-0.5 ${isSelected ? "text-brand-900" : "text-gray-800"}`}>
                      {stage.title}
                    </h4>
                  </div>

                  <ChevronRight className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${isSelected ? "rotate-90 text-brand-600" : ""}`} />
                </button>
              );
            })}
          </div>

          {/* Timeline details content - Right Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#bdeffc] p-6 md:p-8 rounded-3xl border border-gray-150 shadow-xs min-h-[460px] flex flex-col justify-between">
            <div>
              {/* Selected Stage Heading */}
              {WORKSHOP_STAGES.filter((s) => s.id === selectedStageId).map((stage) => (
                <div key={stage.id} className="space-y-6">
                  {/* Top line metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
                    <div>
                      <span className="text-sm font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-2.5 py-1 rounded">
                        Chi tiết Chặng {stage.id}
                      </span>
                      <h3 className="text-lg md:text-2xl font-bold text-gray-900 mt-2">
                        {stage.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-3 py-1.5 shrink-0 text-sm font-bold text-gray-700">
                      <Clock className="w-3.5 h-3.5 text-brand-600" />
                      <span>{stage.duration}</span>
                    </div>
                  </div>

                  {/* Hành trang value */}
                  <div className="bg-gradient-to-r from-brand-600 to-brand-700 text-white px-4 py-3.5 rounded-2xl shadow-xs">
                    <p className="text-sm text-brand-100 font-bold uppercase tracking-widest">
                      🎒 Hành trang kỹ năng nhận được
                    </p>
                    <p className="text-base md:text-lg font-bold mt-1 flex items-center gap-1.5">
                      <Flame className="w-4 h-4 text-amber-300 animate-bounce" />
                      {stage.equipment}
                    </p>
                  </div>

                  {/* General description */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Mục tiêu & bối cảnh hoạt động
                    </h4>
                    <p className="text-base text-gray-750 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  {/* Core Activities for students */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Nội dung & hoạt động cụ thể cho học viên
                    </h4>
                    <ul className="space-y-3">
                      {stage.activities.map((activity, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-3 text-base text-gray-800 leading-relaxed font-medium">
                          <span className="w-5 h-5 rounded-full bg-brand-50 text-brand-700 border border-brand-100 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                            {aIdx + 1}
                          </span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Note message, if exists */}
                  {stage.note && (
                    <p className="text-base text-amber-900 bg-amber-50 border border-amber-100 p-3.5 rounded-xl leading-relaxed italic font-medium">
                      ⚠️ {stage.note}
                    </p>
                  )}

                  {/* Direct interactive links */}
                  {stage.links && (
                    <div className="flex flex-wrap gap-2.5 pt-1">
                      {stage.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl font-bold text-sm shadow-xs hover:shadow-md transition duration-200 ${
                            link.secondary
                              ? "bg-slate-100 hover:bg-slate-200 text-slate-700"
                              : "bg-[#117beb] text-[#dfe9f8] hover:bg-[#0c62bd]"
                          }`}
                        >
                          {link.label}
                          <span className="text-xs font-bold">↗</span>
                        </a>
                      ))}
                    </div>
                  )}

                  {/* References list for other apps */}
                  {stage.references && (
                    <div className="space-y-3 pt-4 border-t border-gray-100">
                      <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                        <span>📚</span> Thư viện ứng dụng tham khảo thêm (Khám phá sau)
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        {stage.references.map((ref) => (
                          <a
                            key={ref.label}
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-2.5 rounded-xl border border-gray-150 bg-gray-50 hover:bg-brand-50 hover:border-brand-300 transition text-sm font-bold text-gray-800 hover:text-brand-700 group"
                          >
                            <span className="truncate">{ref.label}</span>
                            <span className="text-xs shrink-0 text-gray-550 group-hover:text-brand-600">↗</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Next Button */}
            <div className="border-t border-gray-100 pt-6 mt-8 flex justify-between items-center text-sm text-gray-750 font-bold">
              <span>Trực tiếp trải nghiệm theo thứ tự</span>
              <button
                onClick={() => {
                  setSelectedStageId((prev) => (prev % 6) + 1);
                }}
                className="text-brand-600 font-extrabold hover:text-brand-800 transition flex items-center gap-1 bg-brand-50 hover:bg-brand-100 px-3 py-1.5 rounded-lg text-sm"
              >
                Chuyển chặng kế tiếp
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

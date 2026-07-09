import React from "react";
import { motion } from "motion/react";
import { Award, GraduationCap, CheckCircle2 } from "lucide-react";
import { SPEAKER_DATA } from "../data";

export default function Speakers() {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  return (
    <section className="py-16 bg-white" id="dien-gia">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-brand-600 font-bold text-sm uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
            Người Đồng Hành
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 tracking-tight">
            Gặp gỡ Diễn giả
          </h2>
          <p className="text-base text-gray-750 mt-2 max-w-2xl mx-auto">
            Học tập trực tiếp từ các nhà thực hành sư phạm và chuyên gia tiên phong trong lĩnh vực giáo dục sáng tạo kết hợp AI.
          </p>
        </div>

        {/* Speakers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {SPEAKER_DATA.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-500 rounded-2xl transform rotate-3 scale-102 group-hover:rotate-6 transition-all duration-300"></div>
                  <img
                    src={speaker.avatarUrl}
                    alt={speaker.name}
                    referrerPolicy="no-referrer"
                    className="relative w-20 h-20 rounded-2xl object-cover border-2 border-white shadow-md cursor-zoom-in hover:scale-105 transition-all duration-300"
                    onClick={() => setSelectedImage(speaker.avatarUrl)}
                  />
                  <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center border border-white shadow-xs">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-brand-700 transition">
                    {speaker.name}
                  </h3>
                  <p className="text-sm font-bold text-brand-600 mt-1">
                    {speaker.role}
                  </p>
                </div>
              </div>

              {/* Bio description */}
              <div className="space-y-3 mb-6 shrink-0">
                {speaker.bio.map((para, pIdx) => (
                  <p key={pIdx} className="text-base text-gray-700 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Credentials / Badges */}
              <div className="mt-auto border-t border-gray-150 pt-4">
                <p className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-gray-500" />
                  Vai trò nổi bật & Thành tựu
                </p>
                <ul className="space-y-2">
                  {speaker.credentials.map((cred, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2 text-sm md:text-base text-gray-800 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Zoom Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-3xl max-h-[90vh] overflow-hidden rounded-2xl bg-white p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Speaker zoom"
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[80vh] rounded-xl object-contain cursor-default"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/85 text-white w-9 h-9 rounded-full flex items-center justify-center transition duration-200 shadow-md cursor-pointer text-sm font-bold"
              aria-label="Close"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}

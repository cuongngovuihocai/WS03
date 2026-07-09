import React, { useState } from "react";
import { motion } from "motion/react";
import { HelpCircle, ChevronRight, Sparkles, TrendingUp, Layout, Compass, Play, Share2, Lightbulb, Users } from "lucide-react";
import { DESIGN_PRINCIPLES } from "../data";

export default function Philosophy() {
  const [activeSpiralStep, setActiveSpiralStep] = useState<number>(0);

  const spiralSteps = [
    {
      name: "Imagine",
      vnName: "Hình dung",
      icon: Lightbulb,
      color: "bg-amber-100 text-amber-700 border-amber-200",
      activeColor: "bg-amber-600 text-white border-amber-600",
      desc: "Nảy ra ý tưởng sư phạm: một game trắc nghiệm, ô chữ, chatbot nhân vật lịch sử, hay con lắc vật lý mô phỏng trực quan."
    },
    {
      name: "Create",
      vnName: "Sáng tạo",
      icon: Sparkles,
      color: "bg-brand-100 text-brand-700 border-brand-200",
      activeColor: "bg-brand-600 text-white border-brand-600",
      desc: "Dùng Build App và Vibe Coding trong Google AI Studio, biến phác thảo ban đầu thành ứng dụng thực chạy được."
    },
    {
      name: "Play",
      vnName: "Thử nghiệm",
      icon: Play,
      color: "bg-rose-100 text-rose-700 border-rose-200",
      activeColor: "bg-rose-600 text-white border-rose-600",
      desc: "Trực tiếp tương tác, chơi thử sản phẩm, kiểm tra các tình huống sư phạm thực tế xem ứng dụng phản hồi ra sao."
    },
    {
      name: "Share",
      vnName: "Chia sẻ",
      icon: Share2,
      color: "bg-blue-100 text-blue-700 border-blue-200",
      activeColor: "bg-blue-600 text-white border-blue-600",
      desc: "Xuất bản lên GitHub Pages, tạo QR và gửi vào cộng đồng hoặc nhóm lớp học để học sinh và đồng nghiệp trải nghiệm."
    },
    {
      name: "Reflect",
      vnName: "Suy ngẫm",
      icon: Users,
      color: "bg-indigo-100 text-indigo-700 border-indigo-200",
      activeColor: "bg-indigo-600 text-white border-indigo-600",
      desc: "Nhận góp ý, đánh giá hiệu quả sư phạm, suy nghĩ cách tinh chỉnh prompt hoặc bổ sung tính năng mới."
    }
  ];

  const getPrincipleIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="w-5 h-5" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5" />;
      case "Layout":
        return <Layout className="w-5 h-5" />;
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-16 bg-[#e8eff9] border-y border-slate-200" id="triet-ly">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-brand-600 font-bold text-sm uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
            Phương Pháp Sư Phạm
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 tracking-tight">
            Triết lý Học tập Sáng tạo (Creative Learning)
          </h2>
          <p className="text-base text-gray-750 mt-2 max-w-2xl mx-auto">
            Workshop được thiết kế dựa trên phương pháp giáo dục tiên phong của Giáo sư Mitchel Resnick (MIT Media Lab) – cha đẻ của Scratch.
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-xs mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive spiral diagram */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-brand-50 text-brand-600">🌀</span>
                Vòng lặp học tập sư phạm (Creative Learning Spiral)
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Thay vì học thụ động theo kiểu tuyến tính lý thuyết, thầy cô sẽ học tập bằng cách trải nghiệm vòng lặp liên tục. Việc học không khép lại khi buổi học kết thúc, mỗi sản phẩm sẽ là khởi đầu cho một hành trình sáng tạo mới.
              </p>

              {/* Steps indicators */}
              <div className="grid grid-cols-5 gap-2 pt-2">
                {spiralSteps.map((step, idx) => {
                  const IconComp = step.icon;
                  const isActive = activeSpiralStep === idx;
                  return (
                    <button
                      key={step.name}
                      onClick={() => setActiveSpiralStep(idx)}
                      className={`flex flex-col items-center p-2.5 rounded-xl border text-center transition-all ${
                        isActive
                          ? `${step.activeColor} shadow-md font-bold scale-105`
                          : `${step.color} hover:bg-opacity-80`
                      }`}
                    >
                      <IconComp className="w-5 h-5 mb-1.5" />
                      <span className="text-sm font-bold uppercase tracking-wider block">
                        {step.name}
                      </span>
                      <span className="hidden sm:inline text-xs font-semibold opacity-80 mt-0.5">
                        ({step.vnName})
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Expanded active step info */}
              <div className="bg-slate-50 border border-gray-150 p-4 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-brand-600"></div>
                <div className="pl-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-brand-700 uppercase tracking-widest bg-brand-100 px-2 py-0.5 rounded">
                      Bước {activeSpiralStep + 1}
                    </span>
                    <h4 className="text-base font-bold text-gray-800">
                      {spiralSteps[activeSpiralStep].name} – {spiralSteps[activeSpiralStep].vnName}
                    </h4>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed mt-1.5">
                    {spiralSteps[activeSpiralStep].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Illustration quote box */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between min-h-[250px] border border-slate-800 shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-800 rounded-full blur-2xl opacity-50"></div>
              
              <div className="relative z-10">
                <span className="text-brand-400 font-bold text-2xl font-serif">&ldquo;</span>
                <p className="text-base leading-relaxed text-slate-200 italic">
                  AI không thay thế sự sáng tạo của giáo viên. AI mở rộng khả năng sáng tạo của giáo viên. Năng lực thực sự không nằm ở một công cụ cụ thể, mà ở phương pháp đồng sáng tạo cùng công nghệ.
                </p>
              </div>

              <div className="relative z-10 mt-6 pt-4 border-t border-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center font-bold text-brand-300 text-xs">
                  CN
                </div>
                <div>
                  <h5 className="text-sm font-bold">Cường Ngô</h5>
                  <p className="text-sm text-brand-400 font-bold">HAM CHƠI EDUCATION</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Principles */}
        <h3 className="text-lg md:text-xl font-bold text-gray-850 text-center mb-6">
          Ba Nguyên Lý Thiết Kế Trải Nghiệm Học Tập
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DESIGN_PRINCIPLES.map((principle, idx) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 15 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-gray-150 p-6 rounded-2xl shadow-xs hover:border-brand-300 transition duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                {getPrincipleIcon(principle.icon)}
              </div>
              <h4 className="text-base font-bold text-gray-900">{principle.title}</h4>
              <p className="text-sm text-brand-600 font-bold mt-0.5 uppercase tracking-wide">
                {principle.subtitle}
              </p>
              <p className="text-base text-gray-700 leading-relaxed mt-3">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

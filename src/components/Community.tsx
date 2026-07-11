import React from "react";
import { motion } from "motion/react";
import { Users, Calendar, Award, ExternalLink, MessageCircle, Gamepad2, ArrowRight } from "lucide-react";
import { WORKSHOP_INFO } from "../data";

export default function Community() {
  return (
    <section className="py-16 bg-white border-y border-gray-200" id="cong-dong">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-brand-600 font-bold text-sm uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
            Kết Nối Đồng Sáng Tạo
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 tracking-tight">
            Đồng hành cùng cộng đồng giáo viên sáng tạo
          </h2>
          <p className="text-base text-gray-750 mt-2 max-w-2xl mx-auto">
            Việc học không chỉ dừng lại trong 2 giờ workshop. Hãy cùng tham gia mạng lưới liên kết lâu dài để tiếp tục được tiếp lửa và nâng cấp kỹ năng.
          </p>
        </div>

        {/* 2 Columns Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-12">
          {/* Facebook Group */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-3xl flex flex-col justify-between hover:shadow-md transition duration-300"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 border border-blue-100">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-950">
                Cộng đồng FB Bụi Phấn
              </h3>
              <p className="text-sm md:text-base text-gray-750 mt-2 leading-relaxed font-medium">
                Nơi quy tụ hàng nghìn giáo viên tiên phong đổi mới phương pháp. Hãy chia sẻ sản phẩm học liệu của bạn, học hỏi kinh nghiệm thực chiến từ đồng nghiệp toàn quốc.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-150">
              <a
                href={WORKSHOP_INFO.communityFb}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 hover:underline"
              >
                Gia nhập nhóm Facebook công khai
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Online Session */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-brand-50/40 border border-brand-100 p-6 md:p-8 rounded-3xl flex flex-col justify-between hover:shadow-md transition duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-500/5 rounded-full blur-xl"></div>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5 border border-brand-100">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-gray-950">
                  Buổi Học Online trên Zoom
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-750 mt-2 leading-relaxed font-medium">
                Buổi sinh hoạt trực tuyến cùng chủ đề "Xưởng Kiến Tạo Học Liệu" sử dụng Vibe Coding. Với ưu thế thời gian linh hoạt trực tuyến, thầy cô sẽ có cơ hội tương tác sâu hơn, thực hành tiếp, thực hành lại, đặt câu hỏi và được hỗ trợ trực tiếp mọi khó khăn phát sinh khi thiết kế.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-brand-100/50">
              <p className="text-sm font-bold text-brand-800 bg-brand-100/60 px-3 py-1.5 rounded-xl inline-block">
                📅 Lịch hẹn: 19h30 ngày {WORKSHOP_INFO.nextSessionDate}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Closing banner */}
        <div className="bg-slate-900 text-slate-100 rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800 max-w-4xl mx-auto">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-white">Thầy cô sẵn sàng kiến tạo học liệu của riêng mình?</h3>
            <p className="text-sm md:text-base text-slate-300 font-medium">Đăng nhập Google AI Studio và kết nối tài khoản GitHub để mở khoá sức mạnh sư phạm số.</p>
          </div>
          <a
            href="https://aistudio.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm transition shrink-0 shadow-md shadow-brand-500/10"
          >
            Bắt đầu Vibe Coding ngay
            <ArrowRight className="w-4.5 h-4.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

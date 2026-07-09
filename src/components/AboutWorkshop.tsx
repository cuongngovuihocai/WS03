import React from "react";
import { motion } from "motion/react";
import { ArrowRight, GraduationCap, Award } from "lucide-react";
import { WORKSHOP_INFO } from "../data";

interface AboutWorkshopProps {
  className?: string;
}

export default function AboutWorkshop({ className = "lg:col-span-6 space-y-6" }: AboutWorkshopProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      className={className}
    >
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
          Chào mừng thầy cô và các bạn học viên đến với không gian số của <span className="font-semibold text-brand-700">Workshop 03</span> thuộc chương trình đào tạo <span className="font-extrabold text-indigo-700">Super Teachers with AI</span>.
          Trang thông tin này được thiết kế riêng nhằm giúp bạn nắm bắt mục tiêu, lộ trình, triết lý sư phạm cũng như chuẩn bị sẵn sàng nhất trước và trong giờ thực hành.
        </p>

        {/* Two key program columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          {/* SuperTeachers Program Card */}
          <div className="bg-gradient-to-br from-indigo-50/60 to-white border border-indigo-100 rounded-2xl p-5 space-y-3 shadow-xs">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-indigo-100/80 rounded-xl text-indigo-700">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-gray-900">
                Chương trình Super Teachers
              </h4>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Khóa học <strong className="text-indigo-950 font-semibold">"Super Teachers with AI"</strong> là chương trình đào tạo tiên phong do <span className="font-medium text-gray-800">Trung tâm Hoa Kỳ TP.HCM (U.S. Consulate General HCMC)</span> tổ chức nhằm nâng tầm sự nghiệp cùng AI từ lý thuyết đến thực hành thực tế cho các nhà giáo dục.
            </p>
            <div className="pt-1">
              <a 
                href="https://www.facebook.com/USConsulateHCMC/posts/-kh%C3%B3a-h%E1%BB%8Dc-superteachers-with-ai-n%C3%A2ng-t%E1%BA%A7m-s%E1%BB%B1-nghi%E1%BB%87p-c%C3%B9ng-ai-t%E1%BB%AB-l%C3%BD-thuy%E1%BA%BFt-%C4%91%E1%BA%BFn-th%E1%BB%B1c/1339501061699202/"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-semibold text-indigo-700 hover:text-indigo-800 hover:underline inline-flex items-center gap-1 transition"
              >
                Xem chi tiết chương trình ↗
              </a>
            </div>
          </div>

          {/* Workshop 03 Card */}
          <div className="bg-gradient-to-br from-brand-50/50 to-white border border-brand-100 rounded-2xl p-5 space-y-3 shadow-xs">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-brand-100 rounded-xl text-brand-700">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-gray-900">
                Workshop 03
              </h4>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Workshop 03 <strong className="text-brand-950 font-semibold">"Xưởng Kiến Tạo Học Liệu"</strong> là 1 trong 5 workshop chuyên sâu thuộc chuỗi chương trình. Tại đây, thầy cô trực tiếp ứng dụng phương thức <span className="font-medium text-gray-800">Vibe Coding</span> để chuyển hóa mọi ý tưởng sư phạm thành học liệu số sinh động.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 space-y-2">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-3.5 bg-brand-500 rounded-full"></span>
            Về khóa học
          </h3>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            {WORKSHOP_INFO.shortDesc}
          </p>
        </div>
      </div>

      <div className="bg-brand-50/70 border border-brand-100 rounded-xl p-4.5 text-sm text-brand-800 flex items-start gap-3">
        <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">💡</div>
        <div>
          <p className="text-brand-900/85 text-[17px]">
            Mục tiêu lớn nhất hôm nay không phải là làm ra một phần mềm hoàn hảo ngay lập tức, mà là hiểu được <strong>cách trò chuyện hiệu quả với AI</strong> để biến bất kỳ ý tưởng sư phạm nào thành hiện thực.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href="#hanh-trinh"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-600 text-white font-semibold text-sm hover:bg-brand-700 transition shadow-md shadow-brand-100 hover:shadow-lg hover:-translate-y-0.5 duration-200"
        >
          Khám phá 6 Chặng
          <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="#chuan-bi"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition hover:border-brand-500 hover:text-brand-700 duration-200"
        >
          Chuẩn bị bài học
        </a>
      </div>
    </motion.div>
  );
}

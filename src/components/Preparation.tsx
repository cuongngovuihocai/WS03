import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { CheckSquare, Square, ExternalLink, HelpCircle, CheckCircle2, ChevronRight, AlertCircle, Shield } from "lucide-react";
import { PREPARATION_ITEMS } from "../data";

export default function Preparation() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const saved = localStorage.getItem("workshop_prep_checklist");
    if (saved) {
      try {
        setCheckedItems(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const toggleItem = (id: string) => {
    const updated = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(updated);
    localStorage.setItem("workshop_prep_checklist", JSON.stringify(updated));
  };

  const completedCount = PREPARATION_ITEMS.filter((item) => checkedItems[item.id]).length;
  const progressPercent = Math.round((completedCount / PREPARATION_ITEMS.length) * 100);

  return (
    <section className="py-16 bg-[#e8eff9] border-y border-slate-200" id="chuan-bi">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-amber-600 font-bold text-sm uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
            Hành Trang Học Viên
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 tracking-tight">
            Những điều học viên cần chuẩn bị trước
          </h2>
          <p className="text-base text-gray-750 mt-2 max-w-xl mx-auto">
            Để giờ học diễn ra suôn sẻ và tối ưu hoá thời gian thực hành, thầy cô vui lòng chuẩn bị sẵn 3 hành trang kỹ thuật dưới đây nhé!
          </p>
        </div>

        {/* Card wrapper */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xs">
          {/* Progress Banner */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 font-bold text-lg shrink-0 border border-brand-100">
                {progressPercent}%
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">Tiến trình chuẩn bị hành trang</h3>
                <p className="text-sm text-gray-750 mt-0.5 font-medium">
                  {completedCount === PREPARATION_ITEMS.length
                     ? "🎉 Tuyệt vời! Bạn đã hoàn tất toàn bộ hành trang và sẵn sàng bùng nổ!"
                    : `Đã hoàn thành ${completedCount}/${PREPARATION_ITEMS.length} bước. Click để đánh dấu.`}
                </p>
              </div>
            </div>

            {/* Progress bar container */}
            <div className="w-full sm:w-48 bg-gray-100 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                className="bg-brand-500 h-full rounded-full"
              />
            </div>
          </div>

          {/* Checklist items */}
          <div className="space-y-4">
            {PREPARATION_ITEMS.map((item, idx) => {
              const isChecked = !!checkedItems[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isChecked
                      ? "border-brand-300 bg-brand-50/20 shadow-xs"
                      : "border-gray-150 bg-white hover:border-brand-400"
                  }`}
                >
                  {/* Custom checkbox */}
                  <button
                    aria-label={`Đánh dấu bước ${item.title}`}
                    className={`mt-0.5 shrink-0 transition-colors ${isChecked ? "text-brand-600" : "text-gray-400 hover:text-brand-500"}`}
                  >
                    {isChecked ? (
                      <CheckSquare className="w-6 h-6 fill-brand-100" />
                    ) : (
                      <Square className="w-6 h-6" />
                    )}
                  </button>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded">
                        Bước {idx + 1}
                      </span>
                      <h4 className={`text-base md:text-lg font-bold ${isChecked ? "text-brand-900 line-through opacity-85" : "text-gray-800"}`}>
                        {item.title}
                      </h4>
                      {item.required && (
                        <span className="text-xs font-bold text-rose-700 bg-rose-50 border border-rose-100 px-1.5 py-0.5 rounded">
                          Bắt buộc
                        </span>
                      )}
                    </div>

                    <p className={`text-base mt-1.5 leading-relaxed ${isChecked ? "text-brand-850 opacity-75" : "text-gray-750 font-medium"}`}>
                      {item.description}
                    </p>

                    {item.guideUrl && (
                      <div className="mt-3.5" onClick={(e) => e.stopPropagation()}>
                        <a
                          href={item.guideUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 hover:text-brand-800 hover:underline"
                        >
                          Xem hướng dẫn / Đăng ký tại đây
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Setup tips */}
          <div className="mt-6 bg-amber-50/70 border border-amber-100 rounded-2xl p-5 flex gap-3 text-base text-amber-950 font-bold">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-950">Lưu ý bảo mật & tài nguyên:</p>
              <ul className="list-disc pl-4 space-y-1 mt-1 text-sm text-amber-900 font-medium leading-relaxed">
                <li>Tài khoản Google AI Studio và GitHub hoàn toàn miễn phí, đăng ký trong 2 phút.</li>
                <li>Buổi học diễn ra trực tiếp trên laptop cá nhân, vui lòng mang máy theo và sạc đầy pin.</li>
                <li>Nếu chưa kịp kết nối tài khoản GitHub, đừng lo lắng! Các trợ giảng tại American Center sẽ hỗ trợ bạn trực tiếp tại lớp học.</li>
              </ul>
            </div>
          </div>

          {/* Security regulations */}
          <div className="mt-4 bg-rose-50/70 border border-rose-150 rounded-2xl p-5 flex gap-3 text-base text-rose-950 font-bold">
            <Shield className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-rose-950 text-base">🛡️ Quy định an ninh bắt buộc tại Trung tâm Hoa Kỳ:</p>
              <ul className="list-disc pl-4 space-y-2 mt-2 text-sm text-rose-900 font-medium leading-relaxed">
                <li><strong>Giấy tờ tùy thân:</strong> Mang theo giấy tờ tùy thân có ảnh (CCCD hoặc hộ chiếu) - đây là điều kiện <strong>bắt buộc</strong> để vào tòa nhà.</li>
                <li><strong>Thời gian ra vào:</strong> Nên đến sớm <strong>20–30 phút</strong> để hoàn tất các thủ tục kiểm tra an ninh tại cổng chính.</li>
                <li><strong>Kiểm tra thiết bị:</strong> Các thiết bị điện tử cá nhân (laptop, điện thoại, đồng hồ thông minh...) sẽ đi qua băng chuyền kiểm tra an ninh. Vui lòng sạc đầy pin trước khi đến lớp và hạn chế mang theo các thiết bị không cần thiết.</li>
                <li><strong>Thiết bị mạng:</strong> Tuyệt đối không mang theo cục phát wifi cá nhân.</li>
                <li><strong>Vật dụng cấm:</strong> Không mang vật sắc nhọn (dao, kéo, dao rọc giấy...) hoặc các chất dễ gây cháy nổ. Quý học viên sẽ bị từ chối vào cửa nếu mang theo vật phẩm cấm.</li>
                <li><strong>Thiết bị ghi hình chuyên nghiệp:</strong> Máy ảnh/máy quay phim chuyên dụng phải được báo trước 48 tiếng để Ban tổ chức xin cấp phép an ninh của American Center.</li>
                <li><strong>Ghi hình sự kiện:</strong> Trung tâm Hoa Kỳ (American Center) thường xuyên ghi hình, chụp ảnh chương trình để phục vụ lưu trữ và đăng trên các kênh truyền thông chính thức.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

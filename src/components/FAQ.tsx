import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, CheckCircle, Award } from "lucide-react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      question: "Tôi chưa từng biết lập trình hoặc viết code bao giờ, tôi có tham gia được không?",
      answer: "Hoàn toàn được! Workshop được thiết kế theo nguyên lý 'Sàn thấp' (Low Floors) của Creative Learning. Thầy cô không cần biết code hay công nghệ cao siêu. Thầy cô chỉ cần chuẩn bị ý tưởng sư phạm, còn việc viết mã và xây dựng ứng dụng sẽ do AI đồng hành xử lý dưới sự hướng dẫn tỉ mỉ của hai diễn giả."
    },
    {
      question: "Làm sao để liên kết tài khoản GitHub với Google AI Studio?",
      answer: "Rất đơn giản! Thầy cô chỉ cần truy cập trang hướng dẫn chính thức được chuẩn bị sẵn tại địa chỉ https://cuongngovuihocai.github.io/GitHub/ và thực hiện theo 3 bước ngắn gọn có hình ảnh minh hoạ. Thầy cô nên liên kết trước giờ học để khi vào lớp có thể xuất bản ứng dụng ngay lập tức."
    },
    {
      question: "Sau workshop, nếu tôi gặp lỗi khi tự làm ứng dụng thì làm thế nào?",
      answer: "Hành trình sáng tạo không dừng lại sau 2 giờ học! Diễn giả đã chuẩn bị sẵn tài liệu phát tay chứa 'Hướng dẫn fix lỗi nhanh' và các prompt mẫu. Đặc biệt, thầy cô sẽ gia nhập Cộng đồng FB 'Bụi Phấn' để luôn có sự hỗ trợ trực tiếp từ diễn giả và đồng nghiệp có kinh nghiệm."
    },
    {
      question: "Việc sử dụng Google AI Studio và xuất bản web lên GitHub có tốn phí không?",
      answer: "Hoàn toàn MIỄN PHÍ! Cả Google AI Studio (tính năng Build App) và nền tảng lưu trữ GitHub (GitHub Pages) đều cung cấp dịch vụ miễn phí vô cùng mạnh mẽ, cực kỳ tối ưu và dư dùng đối với mục đích giảng dạy và phân phát học liệu của giáo viên phổ thông."
    },
    {
      question: "Tôi cần mang gì đến buổi học thực hành trực tiếp?",
      answer: "Thầy cô vui lòng chuẩn bị: một chiếc laptop cá nhân (đã sạc đầy pin, đã đăng nhập sẵn tài khoản Google (Gmail) và tài khoản GitHub), mang theo Căn cước công dân (CCCD) để vào cổng, cùng một vài ý tưởng trò chơi hoặc học liệu mà thầy cô luôn ao ước xây dựng cho môn học của mình!"
    },
    {
      question: "Quy định an ninh khi đến học trực tiếp tại Trung tâm Hoa Kỳ (American Center) như thế nào?",
      answer: (
        <div>
          <p className="mb-2">Để đảm bảo an ninh cho tòa nhà văn phòng, Trung tâm Hoa Kỳ (American Center) áp dụng các quy định ra vào nghiêm ngặt. Thầy cô vui lòng lưu ý:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm md:text-base">
            <li><strong>Giấy tờ tùy thân:</strong> Mang theo giấy tờ tùy thân có ảnh (CCCD hoặc Hộ chiếu) - đây là điều kiện <strong>bắt buộc</strong> để qua cổng an ninh.</li>
            <li><strong>Thời gian:</strong> Có mặt sớm <strong>20–30 phút</strong> so với giờ học để xếp hàng và làm thủ tục kiểm tra an ninh tại sảnh.</li>
            <li><strong>Thiết bị điện tử:</strong> Laptop, điện thoại, đồng hồ thông minh... sẽ được kiểm tra an ninh qua máy quét. Thầy cô hãy sạc đầy pin thiết bị trước và hạn chế mang theo vật dụng công nghệ không cần thiết.</li>
            <li><strong>Thiết bị mạng:</strong> Tuyệt đối không mang theo cục phát wifi cá nhân.</li>
            <li><strong>Vật dụng cấm:</strong> Không mang vật sắc nhọn (dao, kéo, dao rọc giấy...) hoặc chất dễ cháy nổ.</li>
            <li><strong>Máy ảnh/máy quay chuyên dụng:</strong> Phải báo trước 48 tiếng để American Center xin cấp phép an ninh đặc biệt.</li>
            <li><strong>Truyền thông:</strong> American Center thường ghi hình, chụp ảnh chương trình để đăng trên các kênh truyền thông chính thức.</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <section className="py-16 bg-[#e8eff9] border-y border-slate-200" id="giai-dap">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-brand-600 font-bold text-sm uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
            Hỏi Đáp Nhanh
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 tracking-tight">
            Giải đáp thắc mắc cho học viên
          </h2>
          <p className="text-base text-gray-750 mt-2">
            Tổng hợp các câu hỏi thường gặp nhất để giúp thầy cô gạt bỏ mọi rào cản tâm lý trước giờ lên xưởng.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-150 rounded-2xl overflow-hidden transition-all duration-350 shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-900 text-base md:text-lg hover:text-brand-700 transition gap-4"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? "text-brand-600" : "text-gray-400"}`} />
                    <span>{item.question}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${isOpen ? "rotate-180 text-brand-600" : ""}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-5 pt-0 border-t border-gray-100 text-sm md:text-base text-gray-750 leading-relaxed bg-slate-50/50 font-medium">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

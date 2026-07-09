import React, { useState } from "react";
import { motion } from "motion/react";
import { Copy, Check, ShieldAlert, KeyRound, Sparkles, AlertCircle, HelpCircle, Users, Lightbulb } from "lucide-react";

export default function Troubleshooting() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const spells = [
    {
      id: "spell-1",
      title: "Trường hợp 1: Ứng dụng không chạy được hoặc báo lỗi code",
      text: "Tôi gặp lỗi này khi chạy ứng dụng: [Dán dòng lỗi hoặc mô tả lỗi vào đây]. Hãy phân tích nguyên nhân và sửa lại code cho tôi.",
      desc: "Dùng khi màn hình bị trắng, báo lỗi đỏ gay gắt hoặc có dòng chữ báo lỗi kỹ thuật.",
      accent: "rose"
    },
    {
      id: "spell-2",
      title: "Trường hợp 2: Giao diện xấu, không đúng ý thiết kế",
      text: "Giao diện hiện tại trông chưa đẹp. Hãy chỉnh sửa để nó trông hiện đại, chuyên nghiệp hơn, phù hợp với học sinh [Cấp học của bạn]. Cụ thể: [Mô tả: ví dụ đổi màu nền thành xanh, tăng cỡ chữ, căn giữa nút bấm].",
      desc: "Dùng để lột xác giao diện, đổi phong cách thẩm mỹ mượt mà hơn.",
      accent: "amber"
    },
    {
      id: "spell-3",
      title: "Trường hợp 3: Muốn tích hợp thêm tính năng mới",
      text: "Ứng dụng đang hoạt động tốt. Bây giờ, hãy thêm cho tôi chức năng [Mô tả tính năng: ví dụ hiện bảng điểm sau khi kết thúc trò chơi] vào code hiện tại.",
      desc: "Dùng khi tính năng cũ ổn định và thầy cô muốn nâng cấp học liệu.",
      accent: "brand"
    },
    {
      id: "spell-4",
      title: "Trường hợp 4: AI viết quá dài hoặc làm hỏng chức năng cũ",
      text: "Hãy chỉ sửa phần [Tên phần bị lỗi], giữ nguyên các chức năng còn lại. Đừng viết lại toàn bộ code nếu không cần thiết.",
      desc: "Dùng để kiểm soát AI, giữ cho ứng dụng không bị phát sinh lỗi không mong muốn.",
      accent: "slate"
    }
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-200" id="cuu-ho-vibe-coding">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-sm font-bold text-rose-700 uppercase tracking-wider">
            🚨 SOS Vibe Coding
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 tracking-tight mt-3">
            Cứu Hộ Vibe Coding: Khi AI &ldquo;Lầy&rdquo; Hoặc Gặp Lỗi
          </h2>
          <p className="text-base text-gray-750 mt-2 max-w-2xl mx-auto">
            Không cần sợ lỗi, lỗi chính là cơ hội tuyệt vời để AI học lại! Hãy bình tĩnh áp dụng quy trình gỡ rối chuẩn sư phạm dưới đây.
          </p>
        </div>

        {/* 3 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Step 1 */}
          <div className="bg-white border border-gray-200/80 rounded-3xl p-6 shadow-xs hover:shadow-md transition duration-250 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold uppercase tracking-wider text-rose-600 font-mono bg-rose-50 px-2.5 py-1 rounded-lg">
                  Bước 1
                </span>
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                Xác Định Lỗi (Đừng đoán mò)
              </h3>
              <p className="text-sm md:text-base text-gray-750 leading-relaxed mb-4 font-semibold">
                Hãy quan sát kỹ biểu hiện thực tế của ứng dụng để truyền đạt chính xác nhất cho AI:
              </p>
              <ul className="space-y-2 text-sm text-gray-700 font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-0.5">•</span>
                  <span><strong>Màn hình hiện chữ đỏ/vàng/lỗi:</strong> Hãy bấm xem Console, copy toàn bộ dòng chữ lỗi đó lại.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-0.5">•</span>
                  <span><strong>Ứng dụng không chạy đúng ý:</strong> Mô tả chính xác nó đang làm sai ở đâu (ví dụ: <em>&ldquo;Nút bấm không chuyển trang&rdquo;</em>, <em>&ldquo;Ảnh bị mất&rdquo;</em>).</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-gray-200/80 rounded-3xl p-6 shadow-xs hover:shadow-md transition duration-250 flex flex-col justify-between md:col-span-2">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold uppercase tracking-wider text-brand-600 font-mono bg-brand-50 px-2.5 py-1 rounded-lg">
                  Bước 2
                </span>
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">
                &ldquo;Câu Thần Chú&rdquo; Để Fix Lỗi
              </h3>
              <p className="text-sm text-gray-700 font-semibold mb-4">
                Nhấp vào từng nút để sao chép nhanh câu lệnh chuẩn hóa dán vào khung chat của AI:
              </p>

              <div className="space-y-3">
                {spells.map((spell) => {
                  const isCopied = copiedText === spell.id;
                  return (
                    <div
                      key={spell.id}
                      className="border border-slate-100 rounded-2xl p-3.5 bg-slate-50/50 hover:bg-slate-50 transition"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="space-y-0.5">
                          <h4 className="text-sm font-bold text-slate-900">{spell.title}</h4>
                          <p className="text-xs text-slate-600 italic font-medium">{spell.desc}</p>
                        </div>
                        <button
                          onClick={() => handleCopy(spell.text, spell.id)}
                          className={`shrink-0 inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border text-xs font-bold transition-all ${
                            isCopied
                              ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                              : "bg-white border-slate-200 hover:border-slate-300 text-slate-600"
                          }`}
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600" />
                              <span>Đã chép</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Sao chép</span>
                            </>
                          )}
                        </button>
                      </div>
                      <div className="font-mono text-xs md:text-sm text-slate-850 bg-white border border-slate-150 p-2.5 rounded-xl whitespace-pre-wrap leading-relaxed select-all font-semibold">
                        {spell.text}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Mẹo vàng */}
        <div className="bg-amber-50/40 border border-amber-200/60 rounded-3xl p-6 md:p-8 space-y-5">
          <div className="flex items-center gap-2.5 border-b border-amber-200/40 pb-3">
            <div className="p-2 bg-amber-100 rounded-xl text-amber-800">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-gray-900">
              Bước 3: Mẹo Vàng Cho Giáo Viên Sáng Tạo
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex gap-3 bg-white p-5 rounded-2xl border border-amber-100/60 shadow-xs">
              <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                1
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">Quy tắc &ldquo;Chia để trị&rdquo;</h4>
                <p className="text-sm md:text-base text-gray-750 mt-1.5 leading-relaxed font-medium">
                  Đừng bắt AI làm 10 việc phức tạp cùng lúc. Hãy chia nhỏ nhiệm vụ: <span className="font-bold text-brand-700">&ldquo;Làm giao diện trước&rdquo;</span> &rarr; Xong chạy thử &rarr; <span className="font-bold text-brand-700">&ldquo;Giờ thêm logic câu hỏi&rdquo;</span> &rarr; Xong chạy thử &rarr; <span className="font-bold text-brand-700">&ldquo;Giờ thêm nhạc&rdquo;</span>.
                </p>
              </div>
            </div>

            <div className="flex gap-3 bg-white p-5 rounded-2xl border border-amber-100/60 shadow-xs">
              <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                2
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">Làm mới (Refresh) là chân ái</h4>
                <p className="text-sm md:text-base text-gray-750 mt-1.5 leading-relaxed font-medium">
                  Nếu AI bị &ldquo;lú&rdquo;, chồng chéo nhiều code rác hoặc lặp lỗi, hãy kéo lên bản sao tốt trước đó hoặc ra lệnh dứt khoát: <span className="italic bg-slate-50 px-1.5 py-0.5 rounded border text-xs text-gray-800 font-semibold">&ldquo;Hãy reset lại code cho ứng dụng này dựa trên những gì chúng ta đã thống nhất&rdquo;</span>.
                </p>
              </div>
            </div>

            <div className="flex gap-3 bg-white p-5 rounded-2xl border border-emerald-100/80 shadow-xs">
              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                3
              </div>
              <div>
                <h4 className="text-base font-bold text-emerald-950 flex items-center gap-1">
                  🤝 Hỏi bạn bên cạnh
                </h4>
                <p className="text-sm md:text-base text-gray-750 mt-1.5 leading-relaxed font-medium">
                  Trước khi gọi giảng viên hoặc trợ giảng, hãy quay sang thảo luận với người bạn đồng nghiệp ngồi ngay bên cạnh mình. Hai cái đầu luôn thông minh hơn một cái đầu, và ba cái đầu thì chắc chắn tốt hơn hai! Gắn kết sư phạm chính là sức mạnh cốt lõi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

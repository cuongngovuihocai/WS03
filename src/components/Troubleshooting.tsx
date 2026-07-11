import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Copy, Check, Sparkles, AlertCircle, HelpCircle, Users, Lightbulb, 
  Compass, Share2, Settings, Eye, Code, Edit3, Github, RefreshCw, Sliders, Pencil, ArrowRight
} from "lucide-react";

export default function Troubleshooting() {
  const [activeTab, setActiveTab] = useState<"quy-trinh" | "nut-bam" | "cuu-ho" | "meo-vang">("quy-trinh");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const steps = [
    {
      num: "1",
      title: "Hình dung học liệu",
      desc: "Bạn cần làm game hay học liệu gì? Xác định rõ chủ đề và ý tưởng cốt lõi (Ví dụ: Quiz Toán, Vòng quay may mắn, Flashcard từ vựng, Game ô chữ)."
    },
    {
      num: "2",
      title: "Khởi động AI Studio",
      desc: "Mở công cụ Google AI Studio &rarr; Chọn chức năng Build App để bắt đầu khởi tạo môi trường lập trình trực quan bằng ngôn ngữ tự nhiên."
    },
    {
      num: "3",
      title: "Trò chuyện & Thiết kế",
      desc: "Gõ mô tả ý tưởng chi tiết vào ô chat. Sử dụng Công thức Prompt Thần Thánh bên dưới để AI hiểu và tạo ra ứng dụng chính xác nhất."
    },
    {
      num: "4",
      title: "Đồng bộ lưu trữ",
      desc: "Khi ứng dụng chạy mượt mà, bấm nút GitHub ở góc phải màn hình để tự động đồng bộ mã nguồn vào kho lưu trữ cá nhân của bạn."
    },
    {
      num: "5",
      title: "Hoàn tất & Xuất bản",
      desc: "Mở kho lưu trữ GitHub của bạn và kích hoạt tính năng GitHub Pages để xuất bản ứng dụng thành đường link công khai, sẵn sàng cho học sinh trải nghiệm!"
    }
  ];

  const buttonsInfo = {
    topRow: [
      {
        icon: <RefreshCw className="w-5 h-5 text-indigo-600" />,
        name: "Remix",
        desc: "Dùng lại dự án của người khác để chỉnh sửa hoặc làm mới nội dung nhanh chóng theo nhu cầu giảng dạy của mình."
      },
      {
        icon: <Share2 className="w-5 h-5 text-sky-600" />,
        name: "Share",
        desc: "Chia sẻ liên kết thiết kế dự án của mình cho đồng nghiệp hoặc cộng đồng giáo viên cùng tham khảo và sử dụng."
      },
      {
        icon: <Settings className="w-5 h-5 text-slate-600" />,
        name: "Settings (icon bánh răng)",
        desc: "Mở menu tùy chỉnh nâng cao, quản lý các thiết lập chung, biến môi trường và cấu hình của ứng dụng."
      },
      {
        icon: <Sliders className="w-5 h-5 text-amber-600" />,
        name: "Chat setting",
        desc: "Lựa chọn phiên bản mô hình ngôn ngữ lớn AI (như các phiên bản Gemini) sẽ đồng hành và hỗ trợ bạn thiết kế."
      },
      {
        icon: <Github className="w-5 h-5 text-gray-900" />,
        name: "GitHub",
        desc: "Đưa mã nguồn sản phẩm trực tiếp vào kho lưu trữ GitHub cá nhân để lưu giữ bảo mật và phục vụ xuất bản."
      }
    ],
    secondRow: [
      {
        icon: <Eye className="w-5 h-5 text-emerald-600" />,
        name: "Preview",
        desc: "Khởi chạy và xem thử giao diện, tính năng tương tác của học liệu ngay lập tức trước khi tiến hành xuất bản."
      },
      {
        icon: <Code className="w-5 h-5 text-violet-600" />,
        name: "Code",
        desc: "Xem mã nguồn lập trình chi tiết của ứng dụng nếu thầy cô muốn tìm hiểu cấu trúc code đằng sau giao diện."
      },
      {
        icon: <Pencil className="w-5 h-5 text-rose-600" />,
        name: "Edit tool (icon cây bút)",
        desc: "Chọn trực tiếp một vùng cụ thể trên giao diện xem thử để yêu cầu AI chỉnh sửa riêng vùng đó (Vibe Coding cực kỳ chính xác)."
      }
    ]
  };

  const spells = [
    {
      id: "spell-1",
      title: "Trường hợp 1: Ứng dụng không chạy được hoặc báo lỗi code",
      text: "Tôi gặp lỗi này khi chạy ứng dụng: [Dán dòng chữ lỗi kỹ thuật vào đây]. Hãy phân tích nguyên nhân và sửa lại code cho tôi.",
      desc: "Dùng khi màn hình bị lỗi trắng xóa, báo lỗi đỏ gay gắt hoặc có dòng chữ báo lỗi kỹ thuật.",
      accent: "rose"
    },
    {
      id: "spell-2",
      title: "Trường hợp 2: Giao diện xấu, không đúng ý",
      text: "Giao diện hiện tại trông chưa đẹp. Hãy chỉnh sửa để nó trông hiện đại, chuyên nghiệp hơn, phù hợp với học sinh [Cấp học của bạn]. Cụ thể: [Mô tả: ví dụ đổi màu nền thành xanh, tăng cỡ chữ, căn giữa nút bấm].",
      desc: "Dùng để lột xác giao diện, tinh chỉnh màu sắc, khoảng cách, font chữ cho hút mắt học sinh.",
      accent: "amber"
    },
    {
      id: "spell-3",
      title: "Trường hợp 3: Muốn thêm tính năng mới",
      text: "Ứng dụng đang hoạt động tốt. Bây giờ, hãy thêm cho tôi chức năng [Mô tả tính năng: ví dụ hiện bảng điểm sau khi kết thúc trò chơi] vào code hiện tại.",
      desc: "Dùng khi cốt lõi game đã chạy tốt và thầy cô muốn mở rộng thêm trải nghiệm kịch tính.",
      accent: "brand"
    },
    {
      id: "spell-4",
      title: "Trường hợp 4: AI viết quá dài hoặc làm hỏng chức năng cũ",
      text: "Hãy chỉ sửa phần [Tên phần bị lỗi], giữ nguyên các chức năng còn lại. Đừng viết lại toàn bộ code nếu không cần thiết.",
      desc: "Dùng để kiểm soát hành vi của AI, giữ cho hệ thống ổn định, tránh phát sinh lỗi phụ.",
      accent: "slate"
    }
  ];

  const promptFormula = `Hãy tạo một ứng dụng [Tên học liệu].
Nội dung gồm [Danh sách câu hỏi/từ vựng].
Luật chơi: [Đúng thì làm gì, sai thì làm gì].
Giao diện: [Màu sắc, bố cục, đối tượng học sinh].`;

  const tabsConfig = [
    { id: "quy-trinh" as const, label: "🚀 5 Bước & Công Thức", desc: "Quy trình thiết kế chuẩn & Prompt thần thánh" },
    { id: "nut-bam" as const, label: "🎮 Nút Bấm Cần Biết", desc: "Hiểu rõ các công cụ trên màn hình AI Studio" },
    { id: "cuu-ho" as const, label: "🛠️ Gỡ Lỗi & Thần Chú", desc: "Xử lý lỗi nhanh chóng khi AI làm không đúng ý" },
    { id: "meo-vang" as const, label: "💡 Mẹo Vàng Sư Phạm", desc: "Bí kíp làm chủ Vibe Coding từ kinh nghiệm thực tế" }
  ];

  return (
    <section className="py-20 bg-white border-y border-gray-200" id="cuu-ho">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs md:text-sm font-extrabold text-indigo-700 uppercase tracking-wider">
            📖 HƯỚNG DẪN &amp; CỨU HỘ VIBE CODING
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-950 tracking-tight mt-3">
            Hướng Dẫn Nhanh Vibe Coding
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-2.5 max-w-2xl mx-auto font-medium">
            Biến ý tưởng thành trải nghiệm học tập sinh động. Đừng lo lắng về lỗi — mỗi thử thách là một cơ hội để sáng tạo và nâng cấp học liệu tuyệt vời hơn!
          </p>
        </div>

        {/* Interactive Tab Bar */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-10 max-w-4xl mx-auto p-1.5 bg-slate-100 rounded-3xl border border-slate-200/60">
          {tabsConfig.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full md:w-auto md:flex-1 py-3 px-4 rounded-2xl text-center transition-all duration-200 flex flex-col items-center justify-center ${
                  isActive
                    ? "bg-white text-brand-700 shadow-md border border-slate-200/40"
                    : "text-gray-600 hover:text-gray-950 hover:bg-white/50"
                }`}
              >
                <span className="text-xs md:text-sm font-extrabold tracking-tight">{tab.label}</span>
                <span className="text-[10px] text-gray-400 mt-0.5 font-medium hidden sm:inline">{tab.desc}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Contents Panel */}
        <div className="min-h-[420px] bg-slate-50/50 rounded-3xl border border-slate-100 p-6 md:p-10 shadow-inner">
          <AnimatePresence mode="wait">
            {activeTab === "quy-trinh" && (
              <motion.div
                key="quy-trinh"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* 5 Steps vertical process */}
                <div className="lg:col-span-7 space-y-6">
                  <h3 className="text-lg md:text-xl font-extrabold text-gray-950 flex items-center gap-2 mb-4">
                    <span className="text-indigo-600">⚡</span> Quy trình 5 bước cơ bản
                  </h3>
                  <div className="relative border-l-2 border-indigo-100 pl-6 ml-3 space-y-8">
                    {steps.map((step, idx) => (
                      <div key={idx} className="relative">
                        <span className="absolute -left-[35px] top-0 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shadow-md shadow-indigo-600/20">
                          {step.num}
                        </span>
                        <h4 className="text-base font-extrabold text-gray-900 leading-none mb-1.5">
                          {step.title}
                        </h4>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 神 Prompt formula side card */}
                <div className="lg:col-span-5 bg-gradient-to-br from-indigo-50/80 to-purple-50/80 border border-indigo-100 rounded-3xl p-6 shadow-xs">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-slate-950 leading-tight">Công thức &ldquo;Prompt&rdquo; Thần Thánh</h3>
                      <p className="text-[11px] text-indigo-600 font-bold uppercase tracking-wider mt-0.5">Viết nhẹ nhàng - AI làm mượt mà</p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-medium mb-4">
                    Không cần viết prompt quá phức tạp hay nặng tính kỹ thuật. Thầy cô cứ tự tin trò chuyện thoải mái với AI như nói chuyện với cộng sự tâm đắc:
                  </p>
                  <div className="relative group">
                    <pre className="text-xs md:text-sm font-mono bg-white border border-indigo-200/60 p-4 rounded-2xl text-slate-800 leading-relaxed whitespace-pre-wrap select-all font-semibold">
                      {promptFormula}
                    </pre>
                    <button
                      onClick={() => handleCopy(promptFormula, "formula")}
                      className={`absolute top-2 right-2 inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl border text-xs font-extrabold transition-all ${
                        copiedText === "formula"
                          ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                          : "bg-white border-indigo-100 hover:border-indigo-200 text-slate-600 hover:text-slate-800"
                      }`}
                    >
                      {copiedText === "formula" ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Đã sao chép</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Sao chép</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="mt-4 flex gap-2.5 items-start text-xs text-indigo-800 bg-indigo-100/40 p-3 rounded-xl border border-indigo-100/50 font-medium leading-relaxed">
                    <span>💡</span>
                    <span><strong>Mẹo nhanh:</strong> Nhấp nút sao chép ở trên, điền tên học liệu và danh sách kiến thức rồi gửi cho AI. Ứng dụng mẫu sẽ xuất hiện sau vài giây!</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "nut-bam" && (
              <motion.div
                key="nut-bam"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-lg md:text-xl font-extrabold text-gray-950 flex items-center gap-2 mb-2">
                    <span className="text-indigo-600">🎮</span> Các nút bấm &ldquo;Phải biết&rdquo; trong AI Studio
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 font-medium">
                    Để thiết kế ứng dụng trôi chảy, thầy cô hãy lưu ý và làm quen với các nút công cụ thông minh sau đây:
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Top row controls */}
                  <div className="bg-white border border-slate-200/60 rounded-3xl p-6 space-y-4">
                    <div className="border-b border-slate-100 pb-2 mb-3">
                      <span className="text-xs font-extrabold text-indigo-700 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
                        Hàng trên cùng (Góc phải màn hình)
                      </span>
                      <h4 className="text-sm font-bold text-gray-500 mt-1.5">Quản lý và cộng tác dự án</h4>
                    </div>
                    <div className="space-y-4">
                      {buttonsInfo.topRow.map((btn, idx) => (
                        <div key={idx} className="flex gap-4 items-start">
                          <div className="w-10 h-10 rounded-xl bg-slate-100 shrink-0 flex items-center justify-center border border-slate-200/40 shadow-xs">
                            {btn.icon}
                          </div>
                          <div>
                            <span className="font-extrabold text-sm md:text-base text-slate-900 block">{btn.name}</span>
                            <span className="text-xs md:text-sm text-gray-600 font-medium mt-0.5 block leading-relaxed">{btn.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Second row controls */}
                  <div className="bg-white border border-slate-200/60 rounded-3xl p-6 space-y-4">
                    <div className="border-b border-slate-100 pb-2 mb-3">
                      <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
                        Hàng thứ hai (Giữa màn hình)
                      </span>
                      <h4 className="text-sm font-bold text-gray-500 mt-1.5">Sáng tạo, chạy thử và tinh chỉnh</h4>
                    </div>
                    <div className="space-y-4">
                      {buttonsInfo.secondRow.map((btn, idx) => (
                        <div key={idx} className="flex gap-4 items-start">
                          <div className="w-10 h-10 rounded-xl bg-slate-100 shrink-0 flex items-center justify-center border border-slate-200/40 shadow-xs">
                            {btn.icon}
                          </div>
                          <div>
                            <span className="font-extrabold text-sm md:text-base text-slate-900 block">{btn.name}</span>
                            <span className="text-xs md:text-sm text-gray-600 font-medium mt-0.5 block leading-relaxed">{btn.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 bg-amber-50/50 border border-amber-200/60 p-4 rounded-2xl flex gap-3 items-start text-xs text-amber-900 font-medium">
                      <span>💡</span>
                      <div>
                        <strong>Mẹo Remix cực mạnh:</strong> Nếu thầy cô thấy một học liệu của đồng nghiệp hoặc giảng viên hay, hãy chụp ảnh màn hình và hỏi AI: <span className="italic font-bold">&ldquo;Hãy phân tích cấu trúc ứng dụng này và tạo cho tôi ứng dụng tương tự với chủ đề [Môn của bạn].&rdquo;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "cuu-ho" && (
              <motion.div
                key="cuu-ho"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Step 1: Identifying errors */}
                <div className="lg:col-span-4 bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-rose-600 font-mono bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-100">
                        Bước 1
                      </span>
                      <span className="text-xl">🔍</span>
                    </div>
                    <h3 className="text-base font-extrabold text-gray-900 mb-2.5">
                      Xác Định Lỗi (Đừng đoán mò)
                    </h3>
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4 font-medium">
                      Để sửa lỗi triệt để, hãy bình tĩnh cung cấp đúng dữ kiện mà AI cần xử lý:
                    </p>
                    <ul className="space-y-4 text-xs md:text-sm text-gray-600 font-medium">
                      <li className="flex items-start gap-2.5 bg-rose-50/30 p-3 rounded-2xl border border-rose-100/50">
                        <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                        <span><strong>Màn hình hiện chữ đỏ/vàng/lỗi code:</strong> Copy toàn bộ văn bản lỗi đó, hoặc chụp màn hình (nhấn nút PrtSc trên bàn phím) rồi dán vào ô chat AI.</span>
                      </li>
                      <li className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-2xl border border-slate-200/40">
                        <span className="text-slate-500 font-bold shrink-0 mt-0.5">•</span>
                        <span><strong>Học liệu chạy sai luật / thiếu hình ảnh:</strong> Hãy miêu tả thật chân thực hoạt động thực tế (ví dụ: <em>&ldquo;Nút bắt đầu bấm không có tác dụng&rdquo;</em>, <em>&ldquo;Khi chọn đáp án đúng thì chưa thấy cộng điểm&rdquo;</em>).</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Step 2: Magic Spells for copy */}
                <div className="lg:col-span-8 bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xs">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-600 font-mono bg-brand-50 px-2.5 py-1 rounded-lg border border-brand-100">
                      Bước 2
                    </span>
                    <span className="text-xl">✨</span>
                  </div>
                  <h3 className="text-base font-extrabold text-gray-900 mb-1">
                    &ldquo;Câu Thần Chú&rdquo; Để Fix Lỗi
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 font-medium mb-4">
                    Chọn nhanh câu lệnh chuẩn mẫu dưới đây, nhấp sao chép và gửi cho AI:
                  </p>

                  <div className="space-y-4">
                    {spells.map((spell) => {
                      const isCopied = copiedText === spell.id;
                      return (
                        <div
                          key={spell.id}
                          className="border border-slate-100 rounded-2xl p-4 bg-slate-50/50 hover:bg-slate-50/80 transition"
                        >
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div className="space-y-0.5">
                              <h4 className="text-sm font-extrabold text-slate-900 leading-tight">{spell.title}</h4>
                              <p className="text-xs text-slate-500 font-medium italic">{spell.desc}</p>
                            </div>
                            <button
                              onClick={() => handleCopy(spell.text, spell.id)}
                              className={`shrink-0 inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl border text-xs font-extrabold transition-all ${
                                isCopied
                                  ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                                  : "bg-white border-slate-200 hover:border-slate-300 text-slate-600"
                              }`}
                            >
                              {isCopied ? (
                                <>
                                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                                  <span>Đã sao chép</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5" />
                                  <span>Sao chép</span>
                                </>
                              )}
                            </button>
                          </div>
                          <div className="font-mono text-xs md:text-sm text-slate-700 bg-white border border-slate-150 p-3 rounded-xl whitespace-pre-wrap leading-relaxed select-all font-semibold">
                            {spell.text}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "meo-vang" && (
              <motion.div
                key="meo-vang"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-2.5 border-b border-slate-200 pb-3 mb-4">
                  <div className="p-2 bg-amber-100 rounded-xl text-amber-800">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-extrabold text-gray-900">
                      Bí Kíp Sáng Tạo Học Liệu &amp; Vibe Coding
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 font-medium">Lời khuyên sư phạm thiết thực cho giáo viên trong kỷ nguyên số</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Tip 1 */}
                  <div className="flex flex-col gap-3.5 bg-white p-6 rounded-2xl border border-slate-200/60 shadow-xs hover:shadow-md transition">
                    <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-slate-950 mb-1.5">Quy tắc &ldquo;Chia để trị&rdquo;</h4>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium">
                        Đừng bắt AI làm 10 việc phức tạp cùng một lúc. Hãy phân chia nhiệm vụ tuần tự: 
                        <span className="block mt-1.5 p-2 rounded-xl bg-slate-50 border border-slate-100 font-bold text-[11px] md:text-xs text-indigo-800 leading-relaxed">
                          &ldquo;Thiết kế giao diện trước&rdquo; &rarr; Kiểm tra tốt &rarr; &ldquo;Giờ thêm logic trò chơi&rdquo; &rarr; Kiểm tra tốt &rarr; &ldquo;Thêm nhạc nền và hiệu ứng&rdquo;.
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Tip 2 */}
                  <div className="flex flex-col gap-3.5 bg-white p-6 rounded-2xl border border-slate-200/60 shadow-xs hover:shadow-md transition">
                    <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-slate-950 mb-1.5">Làm mới (Refresh) là chân ái</h4>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium">
                        Nếu AI bị &ldquo;lú&rdquo;, chồng chéo nhiều code thừa rác hoặc liên tục lặp lỗi, hãy yêu cầu thiết lập lại dứt khoát:
                        <span className="block mt-1.5 p-2 rounded-xl bg-slate-50 border border-slate-100 font-bold text-[11px] md:text-xs text-amber-800 leading-relaxed">
                          &ldquo;Hãy reset lại code cho ứng dụng này dựa trên những gì chúng ta đã thống nhất ban đầu.&rdquo;
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Tip 3 */}
                  <div className="flex flex-col gap-3.5 bg-white p-6 rounded-2xl border border-slate-200/60 shadow-xs hover:shadow-md transition">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-slate-950 mb-1.5">🤝 Thảo luận cùng đồng nghiệp</h4>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium">
                        Trước khi gọi diễn giả hỗ trợ, hãy quay sang thảo luận trao đổi ý tưởng với đồng nghiệp bên cạnh:
                        <span className="block mt-1.5 p-2 rounded-xl bg-slate-50 border border-slate-100 font-bold text-[11px] md:text-xs text-emerald-800 leading-relaxed">
                          Hai cái đầu luôn thông minh hơn một cái đầu! Gắn kết sư phạm và chia sẻ cộng đồng chính là cốt lõi của Workshop 03.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Closing quote card */}
                <div className="mt-6 p-4 rounded-2xl bg-indigo-50/40 border border-indigo-100 text-center">
                  <p className="text-xs md:text-sm italic font-extrabold text-indigo-950">
                    &ldquo;Trong Vibe Coding, không có lỗi sai, chỉ có những lần thử nghiệm chưa thành công!&rdquo;
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}


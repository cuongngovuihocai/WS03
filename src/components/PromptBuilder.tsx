import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Copy, Check, Sparkles, Wand2, RefreshCw, Layout, BookOpen, AlertCircle, HelpCircle } from "lucide-react";

export default function PromptBuilder() {
  const [approach, setApproach] = useState("structured"); // "structured" | "vibe"
  const [appType, setAppType] = useState("crossword");
  const [subject, setSubject] = useState("Tiếng Anh");
  const [grade, setGrade] = useState("THCS (Lớp 6-9)");
  const [themeStyle, setThemeStyle] = useState("minimal");
  const [extraFeature, setExtraFeature] = useState("timer");
  const [copied, setCopied] = useState(false);

  // Approach 2 states
  const [vibeStep, setVibeStep] = useState(1);
  const [vibeCopied, setVibeCopied] = useState(false);

  const appTypes = [
    { id: "crossword", name: "Trò chơi Giải Ô Chữ", desc: "Tạo các ô chữ đoán từ vựng, khái niệm sinh động" },
    { id: "wheel", name: "Vòng Quay May Mắn", desc: "Gọi tên ngẫu nhiên học sinh, bốc thăm câu hỏi ôn tập" },
    { id: "quiz", name: "Trắc Nghiệm Tương Tác", desc: "Kiểm tra kiến thức nhanh có tính điểm, âm thanh sống động" },
    { id: "chatbot", name: "Chatbot Nhập Vai", desc: "Nhập vai nhân vật lịch sử, nhà khoa học để trò chuyện với học sinh" },
    { id: "math", name: "Mô Phỏng Học Tập Toán/Khoa Học", desc: "Trực quan hoá đồ thị, con lắc, phép tính toán" }
  ];

  const themeStyles = [
    { id: "minimal", name: "Hiện đại - Tối giản (Modern Light)", color: "Nền trắng, viền mảnh xám, màu chủ đạo Teal xanh lục ấm áp, Font Quicksand" },
    { id: "playful", name: "Hoạt hình - Vui nhộn (Playful Pastel)", color: "Nền xanh nhạt, các nút bo góc tròn lớn, màu vàng cam sáng tạo, hoạt hoạ sinh động" },
    { id: "techno", name: "Công nghệ - Khoa học (Techno Neon)", color: "Nền tối huyền bí, chữ neon xanh neon hoặc tím sáng rực rỡ, thích hợp Vật lý/Tin học" },
    { id: "vintage", name: "Cổ điển - Hoài cổ (Vintage Warm)", color: "Nền giấy xi măng nhạt, màu nâu trầm ấm, thích hợp Lịch sử/Văn học" }
  ];

  const vibeSteps = [
    {
      id: 1,
      title: "Chặng 1: Khởi động ý tưởng (Cơ bản)",
      focus: "Mô tả mong muốn cốt lõi bằng ngôn từ tự nhiên nhất.",
      thinking: "Hiểu mình: Tôi muốn học sinh ôn tập các phép nhân thông qua trò chơi bắn bong bóng. Tôi không biết lập trình, chỉ cần AI tạo ra cơ chế bắn và tính điểm.",
      prompt: `Tôi muốn làm một trò chơi ôn tập bảng cửu chương cho học sinh tiểu học. 
Giao diện sẽ có các bong bóng bay từ dưới lên trên, mỗi bong bóng mang một phép nhân (ví dụ: 3 x 4). 
Ở dưới cùng có một khẩu pháo và các viên đạn ghi kết quả số. Học sinh phải bắn viên đạn mang kết quả đúng vào bong bóng tương ứng. 
Hãy bắt đầu với một phiên bản đơn giản nhất có thể chạy được để tôi kiểm tra cơ chế chơi nhé.`,
      aiResponse: "AI sẽ dựng khung trò chơi với khẩu pháo bắn đạn và bong bóng bay. Trò chơi ban đầu có thể thô sơ về mặt hình ảnh nhưng cơ chế cốt lõi hoạt động được ngay lập tức để bạn kiểm nghiệm thực tế."
    },
    {
      id: 2,
      title: "Chặng 2: Thử nghiệm & Sửa đổi (Từng bước một)",
      focus: "Chạy thử, nhận diện điểm cần cải tiến và ra lệnh cụ thể như nói chuyện với cộng sự.",
      thinking: "Đồng hành: Phiên bản đầu tiên chạy tốt nhưng giao diện còn đơn điệu, font chữ xấu và các quả bóng bay hơi nhanh.",
      prompt: `Tuyệt vời, cơ chế bắn bóng hoạt động rất tốt rồi! Bây giờ bạn hãy giúp tôi cải thiện giao diện và trải nghiệm:
1. Đổi tông màu sang phong cách hoài cổ (Vintage Warm) với nền màu giấy kraft ấm áp, tạo cảm giác thư giãn cho học sinh.
2. Đổi phông chữ sang "Quicksand" bo tròn thân thiện.
3. Giảm tốc độ bay của bong bóng xuống một chút để học sinh kịp suy nghĩ tính toán nhé.`,
      aiResponse: "AI sẽ cập nhật toàn bộ CSS (Tailwind CSS) và tinh chỉnh tham số tốc độ trong mã nguồn. Giao diện trở nên vô cùng ấm áp, thu hút và mang đậm tính sư phạm."
    },
    {
      id: 3,
      title: "Chặng 3: Tối ưu hoá Sư phạm & Cảm xúc",
      focus: "Đề cao tính nhân văn, khích lệ tinh thần học sinh và hoàn thiện trải nghiệm.",
      thinking: "Tinh tế: Cần khích lệ khi học sinh bắn trúng, tránh trừng phạt tiêu cực khi bắn sai, tạo không khí học tập tích cực.",
      prompt: `Rất đẹp rồi! Bây giờ chúng ta cùng hoàn thiện trải nghiệm cảm xúc sư phạm nhé:
1. Khi học sinh bắn trúng đáp án đúng, hãy phát ra tiếng nhạc vui nhộn (ding-dong) và hiện hiệu ứng pháo hoa giấy chúc mừng.
2. Khi bắn sai, thay vì báo lỗi đỏ gay gắt, hãy hiện thông điệp nhẹ nhàng ở góc màn hình: "Gần đúng rồi, thầy cô tin em sẽ làm được ở lượt sau!".
3. Thêm một bảng điểm lưu kỷ lục điểm cao nhất (High Score) bằng LocalStorage để kích thích tinh thần tự học của các em.`,
      aiResponse: "AI tích hợp hiệu ứng âm thanh Web Audio API sinh động, hiệu ứng hạt giấy confetti mượt mà và cơ chế lưu trữ điểm số cục bộ. Một sản phẩm học liệu hoàn chỉnh mang đậm dấu ấn cá nhân đã sẵn sàng!"
    }
  ];

  const generatePrompt = () => {
    let appDesc = "";
    let systemLogic = "";

    switch (appType) {
      case "crossword":
        appDesc = `Xây dựng trò chơi Giải Mã Ô Chữ tương tác cho môn ${subject}, đối tượng học sinh ${grade}.`;
        systemLogic = `- Trò chơi gồm lưới ô chữ (ví dụ 5 từ hàng ngang và 1 từ chìa khoá hàng dọc).
- Mỗi từ hàng ngang có một câu hỏi gợi ý tương ứng.
- Người chơi nhấp vào ô chữ để điền chữ cái. Có nút 'Kiểm tra đáp án' để báo đúng/sai bằng màu xanh/đỏ.
- Giao diện có bảng hiển thị câu hỏi gợi ý và ô nhập câu trả lời nhanh.`;
        break;
      case "wheel":
        appDesc = `Xây dựng ứng dụng Vòng Quay May Mắn ngẫu nhiên cho môn ${subject}, đối tượng học sinh ${grade}.`;
        systemLogic = `- Người dùng có thể nhập danh sách học sinh hoặc danh sách câu hỏi ôn tập (mỗi dòng một mục).
- Vòng quay hiển thị đẹp mắt chia thành nhiều múi màu sắc khác nhau, xoay mượt mà sử dụng CSS transition.
- Có hiệu ứng âm thanh (giả lập bằng hiệu ứng hình ảnh hoặc rung nhẹ) khi dừng lại và hiện popup chúc mừng người trúng tuyển nổi bật.`;
        break;
      case "quiz":
        appDesc = `Xây dựng bộ Trắc Nghiệm Tương Tác trắc nghiệm 4 đáp án cho môn ${subject}, đối tượng học sinh ${grade}.`;
        systemLogic = `- Gồm ngân hàng 5 câu hỏi trắc nghiệm chất lượng liên quan trực tiếp đến môn ${subject}.
- Giao diện hiển thị lần lượt từng câu hỏi, có thanh tiến trình (progress bar).
- Mỗi khi chọn đáp án, báo ngay đúng/sai bằng màu sắc, giải thích ngắn gọn vì sao đúng.
- Kết thúc có trang tổng kết điểm, xếp hạng mức độ hoàn thành và nút 'Chơi lại'.`;
        break;
      case "chatbot":
        appDesc = `Xây dựng ứng dụng Chatbot Nhập Vai thông minh tương tác cho môn ${subject}, đối tượng học sinh ${grade}.`;
        systemLogic = `- Đóng vai là một chuyên gia/nhân vật đặc trưng trong lĩnh vực ${subject} (ví dụ: nhà khoa học hoặc giáo sư).
- Giao diện khung chat giống Messenger thanh lịch với bong bóng chat hai bên rõ ràng.
- Sử dụng mô hình xử lý tình huống trả lời sẵn (hoặc hướng dẫn kết nối API key) để phản hồi học sinh bằng ngôn từ dí dỏm, dễ hiểu phù hợp lứa tuổi.`;
        break;
      case "math":
        appDesc = `Xây dựng ứng dụng Mô Phỏng Học Tập trực quan sinh động cho môn ${subject}, đối tượng học sinh ${grade}.`;
        systemLogic = `- Trực quan hoá một mô hình kiến thức cốt lõi bằng đồ hoạ tương tác (ví dụ: các thanh trượt điều khiển tham số, đồ thị chuyển động).
- Người học có thể kéo/thả thanh trượt (slider) để thay đổi thông số và nhìn thấy kết quả học tập thay đổi trực quan theo thời gian thực.
- Có phần giải thích lý thuyết bên cạnh mô hình trực quan để học sinh tự học.`;
        break;
    }

    let extraText = "";
    if (extraFeature === "timer") {
      extraText = "- Có đồng hồ đếm ngược (countdown timer) 30 giây kịch tính để tăng tính thử thách cho học sinh.\n";
    } else if (extraFeature === "score") {
      extraText = "- Có hệ thống cộng điểm, tích luỹ huy hiệu và lưu kỷ lục điểm số cao nhất (High Score) bằng localStorage để học sinh thi đua.\n";
    } else if (extraFeature === "sound") {
      extraText = "- Tích hợp hiệu ứng âm thanh vui nhộn (ding-dong khi đúng, buzz khi sai) được tổng hợp bằng Web Audio API trực tiếp không cần file mp3 ngoài.\n";
    }

    const styleSelected = themeStyles.find((t) => t.id === themeStyle);

    return `Bạn là một lập trình viên AI chuyên nghiệp và là một chuyên gia thiết kế trải nghiệm học tập (UX/UI trong giáo dục). 
Hãy kiến tạo một ứng dụng web (Single Page Application - SPA) chạy hoàn toàn ở Client-side bằng HTML, CSS (Tailwind) và JavaScript thuần túy (hoặc React/Vite) với các thông tin sau:

1. Ý TƯỞNG SƯ PHẠM (HIỂU MÌNH):
- Mục tiêu: ${appDesc}
- Phong cách giao diện: ${styleSelected?.name} (${styleSelected?.color}).
- Phông chữ chủ đạo: Phông chữ Google Font "Quicksand" mang lại cảm giác thân thiện, hiện đại, dễ đọc cho học sinh.
- Màu sắc chủ đạo: Đảm bảo độ tương phản cao, dịu mát mắt, thiết kế logic bento-grid.

2. CHỨC NĂNG CHÍNH & LOGIC:
${systemLogic}
${extraText}- Thiết kế có tính tương tác cao (Interactive): Có hover hiệu ứng trên mọi nút bấm, có các thông báo chuyển trạng thái mượt mà bằng CSS animation.

3. TIÊU CHUẨN KỸ THUẬT (BIẾT NGƯỜI):
- Ứng dụng phải chạy độc lập hoàn toàn trong một file, không cần server-side (sử dụng LocalStorage để lưu trạng thái nếu cần).
- Sử dụng thư viện icon "lucide-react" được nhập trực tiếp qua CDN (hoặc sử dụng emoji sinh động phù hợp lớp học).
- Đảm bảo giao diện hiển thị xuất sắc cả trên màn hình máy tính (PC) lẫn điện thoại di động (Mobile) để học sinh dễ dàng quét mã QR chơi thử tại lớp.`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatePrompt());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVibeCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setVibeCopied(true);
    setTimeout(() => setVibeCopied(false), 2000);
  };

  return (
    <section className="py-16 bg-[#e8eff9] border-y border-slate-200" id="bo-tao-prompt">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-brand-600 font-bold text-sm uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
            Công Cụ Hỗ Trợ Thực Hành
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 tracking-tight">
            Bộ tạo Prompt &ldquo;Hiểu Mình Biết Người&rdquo;
          </h2>
          <p className="text-base text-gray-750 mt-2 max-w-2xl mx-auto">
            Khám phá 2 phương pháp giao tiếp với AI để hiện thực hóa ý tưởng học liệu của riêng thầy cô một cách hiệu quả nhất!
          </p>
        </div>

        {/* Approach Selector Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 mb-10 max-w-2xl mx-auto">
          <button
            onClick={() => setApproach("structured")}
            className={`flex-1 px-5 py-3 rounded-2xl font-bold text-sm md:text-base transition-all duration-200 border flex items-center justify-center gap-2 ${
              approach === "structured"
                ? "bg-brand-50 border-brand-200 text-brand-700 shadow-xs"
                : "bg-gray-50 border-gray-200 text-gray-550 hover:text-gray-800 hover:bg-gray-100"
            }`}
          >
            <Layout className="w-4.5 h-4.5" />
            Cách 1: Thiết lập theo công thức (Đầy đủ cấu trúc)
          </button>
          <button
            onClick={() => setApproach("vibe")}
            className={`flex-1 px-5 py-3 rounded-2xl font-bold text-sm md:text-base transition-all duration-200 border flex items-center justify-center gap-2 ${
              approach === "vibe"
                ? "bg-brand-50 border-brand-200 text-brand-700 shadow-xs"
                : "bg-gray-50 border-gray-200 text-gray-550 hover:text-gray-800 hover:bg-gray-100"
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            Cách 2: Vibe Coding (Giao tiếp Tự nhiên & Đồng hành)
          </button>
        </div>

        <AnimatePresence mode="wait">
          {approach === "structured" ? (
            <motion.div
              key="structured"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Settings panel - Left */}
              <div className="lg:col-span-5 bg-slate-50 border border-slate-150 rounded-3xl p-6 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-1.5">
                    <Layout className="w-4.5 h-4.5 text-brand-600" />
                    Cấu hình ý tưởng sư phạm
                  </h3>

                  {/* App Type */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                      1. Dạng học liệu mong muốn:
                    </label>
                    <select
                      value={appType}
                      onChange={(e) => setAppType(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-gray-250 bg-white text-base font-bold focus:border-brand-500 outline-none text-gray-850"
                    >
                      {appTypes.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.name}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs text-gray-600 italic font-medium">
                      {appTypes.find((t) => t.id === appType)?.desc}
                    </p>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                      2. Môn học / Lĩnh vực:
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Ví dụ: Tiếng Anh, Lịch sử 7, Hoá học 11..."
                      className="w-full p-2.5 rounded-xl border border-gray-250 bg-white text-base font-bold focus:border-brand-500 outline-none text-gray-850"
                    />
                  </div>

                  {/* Grade */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                      3. Đối tượng học sinh:
                    </label>
                    <select
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-gray-250 bg-white text-base font-bold focus:border-brand-500 outline-none text-gray-850"
                    >
                      <option value="Tiểu học (Lớp 1-5)">Tiểu học (Lớp 1-5)</option>
                      <option value="THCS (Lớp 6-9)">THCS (Lớp 6-9)</option>
                      <option value="THPT (Lớp 10-12)">THPT (Lớp 10-12)</option>
                      <option value="Đại học / Người đi làm">Đại học / Người đi làm</option>
                    </select>
                  </div>

                  {/* Visual Theme Style */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                      4. Phong cách thiết kế:
                    </label>
                    <select
                      value={themeStyle}
                      onChange={(e) => setThemeStyle(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-gray-250 bg-white text-base font-bold focus:border-brand-500 outline-none text-gray-850"
                    >
                      {themeStyles.map((style) => (
                        <option key={style.id} value={style.id}>
                          {style.name}
                        </option>
                      ))}
                    </select>
                    <p className="text-sm text-brand-600 font-bold">
                      🎨 {themeStyles.find((style) => style.id === themeStyle)?.color}
                    </p>
                  </div>

                  {/* Additional logic feature */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                      5. Tính năng bổ sung lý tưởng:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setExtraFeature("timer")}
                        className={`p-2 rounded-lg border text-sm font-bold transition-all ${
                          extraFeature === "timer"
                            ? "bg-brand-600 border-brand-600 text-white"
                            : "bg-white border-gray-200 text-gray-650 hover:border-brand-400"
                        }`}
                      >
                        ⏱️ Đếm ngược
                      </button>
                      <button
                        onClick={() => setExtraFeature("score")}
                        className={`p-2 rounded-lg border text-sm font-bold transition-all ${
                          extraFeature === "score"
                            ? "bg-brand-600 border-brand-600 text-white"
                            : "bg-white border-gray-200 text-gray-650 hover:border-brand-400"
                        }`}
                      >
                        🏆 Tính điểm
                      </button>
                      <button
                        onClick={() => setExtraFeature("sound")}
                        className={`p-2 rounded-lg border text-sm font-bold transition-all ${
                          extraFeature === "sound"
                            ? "bg-brand-600 border-brand-600 text-white"
                            : "bg-white border-gray-200 text-gray-650 hover:border-brand-400"
                        }`}
                      >
                        🔊 Âm thanh
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-100 rounded-xl p-3.5 flex items-start gap-2 text-sm text-amber-900 leading-relaxed pt-3 font-medium">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    Thầy cô có thể điều chỉnh các mục để tự động thay đổi prompt tương ứng ở khung bên cạnh ngay lập tức!
                  </span>
                </div>
              </div>

              {/* Prompt output box - Right */}
              <div className="lg:col-span-7 bg-slate-900 text-slate-100 rounded-3xl p-6 md:p-8 flex flex-col justify-between border border-slate-800 min-h-[460px]">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                      <span className="text-sm font-mono text-slate-300 font-bold uppercase tracking-wider">
                        Prompt tự động khởi tạo thành công
                      </span>
                    </div>

                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-bold transition"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-bold">Đã sao chép!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Sao chép</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Textarea simulation */}
                  <div className="font-mono text-xs md:text-sm leading-relaxed text-slate-300 max-h-[380px] overflow-y-auto whitespace-pre-wrap pr-2">
                    {generatePrompt()}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs md:text-sm text-slate-300 font-medium">
                  <span className="flex items-center gap-1">
                    <Wand2 className="w-3.5 h-3.5 text-brand-400" />
                    Đồng bộ hoàn hảo với Build App (Google AI Studio)
                  </span>
                  <span className="italic font-mono">Quicksand font, Tailwind CSS</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="vibe"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Vibe Philosophy Panel - Left */}
                <div className="lg:col-span-5 bg-gradient-to-b from-brand-50/50 to-white border border-brand-100 rounded-3xl p-6 flex flex-col justify-between space-y-6">
                  <div className="space-y-5">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-brand-100 rounded-xl">
                        <Sparkles className="w-5 h-5 text-brand-700" />
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-gray-950">
                        Triết lý Vibe Coding & Đồng hành
                      </h3>
                    </div>

                    <p className="text-base text-gray-700 leading-relaxed">
                      Trọng tâm của <span className="font-semibold text-brand-700">Vibe Coding</span> không phải là những câu lệnh phức tạp hay cú pháp kỹ thuật khô khan. Đó là sự thấu hiểu sâu sắc mục tiêu sư phạm của chính bạn và khả năng giao tiếp tự nhiên với AI như một người đồng nghiệp kỹ thuật tận tuỵ.
                    </p>

                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          1
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-gray-900">Hiểu mình là then chốt</h4>
                          <p className="text-sm text-gray-700 mt-0.5 font-medium leading-relaxed">
                            Biết rõ học sinh cần gì, bài học diễn ra như thế nào, và giao diện cần tạo cảm xúc gì. Pedagogy (Sư phạm) đi trước, Technology (Công nghệ) theo sau.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          2
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-gray-900">Giao tiếp như với con người</h4>
                          <p className="text-sm text-gray-700 mt-0.5 font-medium leading-relaxed">
                            Coi AI là một trợ giảng kỹ thuật đắc lực. Dùng ngôn ngữ tự nhiên, chia sẻ băn khoăn sư phạm, khen ngợi điểm tốt và chỉ ra lỗi cần sửa cụ thể.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          3
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-gray-900">Từng bước làm, từng bước sửa</h4>
                          <p className="text-sm text-gray-700 mt-0.5 font-medium leading-relaxed">
                            Đừng cố tạo ra một sản phẩm hoàn hảo chỉ với 1 prompt duy nhất. Hãy bắt đầu từ tính năng cơ bản nhất, chạy thử ứng dụng, rồi tiếp tục ra lệnh tinh chỉnh dần dần.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-3.5 text-sm md:text-base text-amber-900 leading-relaxed font-bold">
                    💡 <span>Đề cao tính Người:</span> AI chỉ thực thi, nhưng chính thầy cô mới là người nắm giữ linh hồn và trải nghiệm của bài học!
                  </div>
                </div>

                {/* Practical Steps Walkthrough - Right */}
                <div className="lg:col-span-7 bg-slate-900 text-slate-100 rounded-3xl p-6 md:p-8 flex flex-col justify-between border border-slate-800">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
                      <div className="space-y-0.5">
                        <span className="text-xs font-mono text-amber-300 font-bold uppercase tracking-wider">
                          Kịch bản thực tế minh họa
                        </span>
                        <h3 className="text-base md:text-lg font-bold text-slate-100">
                          Ví dụ: Trò chơi Toán &ldquo;Bong Bóng Phép Nhân&rdquo;
                        </h3>
                      </div>

                      <div className="flex gap-1.5 bg-slate-800 p-1 rounded-xl">
                        {vibeSteps.map((step) => (
                          <button
                            key={step.id}
                            onClick={() => setVibeStep(step.id)}
                            className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${
                              vibeStep === step.id
                                ? "bg-brand-600 text-white"
                                : "text-slate-400 hover:text-slate-200"
                            }`}
                          >
                            Chặng {step.id}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Active Step Content */}
                    <div className="space-y-4">
                      <div className="bg-slate-850 border border-slate-800 rounded-2xl p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-brand-400">
                            {vibeSteps[vibeStep - 1].title}
                          </span>
                          <span className="text-xs text-slate-300 italic font-medium">
                            {vibeSteps[vibeStep - 1].focus}
                          </span>
                        </div>
                        <p className="text-sm md:text-base text-slate-200 leading-relaxed bg-slate-800/50 p-2.5 rounded-lg border border-slate-800 font-medium">
                          🧠 <span className="font-bold text-slate-200">Tư duy Sư phạm:</span> {vibeSteps[vibeStep - 1].thinking}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1">
                            💬 Bạn sẽ nói với AI (Câu lệnh):
                          </span>
                          <button
                            onClick={() => handleVibeCopy(vibeSteps[vibeStep - 1].prompt)}
                            className="inline-flex items-center gap-1 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition"
                          >
                            {vibeCopied ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span className="text-emerald-400">Đã sao chép!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Sao chép Prompt</span>
                              </>
                            )}
                          </button>
                        </div>

                        <div className="font-mono text-sm text-slate-200 bg-slate-950 p-4 rounded-xl border border-slate-850 max-h-[160px] overflow-y-auto whitespace-pre-wrap leading-relaxed">
                          {vibeSteps[vibeStep - 1].prompt}
                        </div>
                      </div>

                      <div className="bg-emerald-950/40 border border-emerald-900/50 rounded-xl p-3 text-sm md:text-base text-emerald-300 leading-relaxed font-medium">
                        <div className="font-bold text-emerald-400 flex items-center gap-1 mb-1">
                          <span>🤖</span> Phản hồi thực tế từ AI:
                        </div>
                        {vibeSteps[vibeStep - 1].aiResponse}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 text-xs md:text-sm text-slate-300 text-center italic font-medium">
                    💡 Thầy cô hãy thử áp dụng kịch bản 3 chặng này trên Google AI Studio để thấy điều kỳ diệu!
                  </div>
                </div>
              </div>

              {/* Mẹo Vibe Coding Prompt hiệu quả hơn */}
              <div className="bg-gradient-to-r from-brand-50 to-indigo-50 border border-brand-100 rounded-3xl p-6 md:p-8">
                <div className="flex items-center gap-2.5 mb-5 border-b border-brand-100 pb-3">
                  <div className="p-2 bg-brand-100 rounded-xl text-brand-800">
                    <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900">
                      💡 Mẹo &ldquo;Vibe Coding&rdquo; Để Prompt Hiệu Quả Hơn
                    </h3>
                    <p className="text-sm text-gray-700 font-bold">
                      Những đúc kết vàng giúp thầy cô tương tác tự nhiên và khai phóng tối đa sức sáng tạo của AI
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur-xs p-5 rounded-2xl border border-brand-100/50">
                    <h4 className="text-base font-bold text-gray-900 flex items-center gap-1.5 mb-2">
                      <span className="text-brand-600">🔄</span> Làm từng bước (Iterative)
                    </h4>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                      Nếu AI làm ra sản phẩm chưa hoàn toàn ưng ý, đừng xóa đi làm lại từ đầu. Hãy bảo: <span className="font-bold text-brand-800">&ldquo;Giữ nguyên cấu trúc này, chỉ thay đổi câu hỏi thành [Câu hỏi mới]&rdquo;</span> hoặc chỉ chỉnh riêng một thành phần nhỏ. AI tiếp thu và nâng cấp cực kỳ mượt mà qua các bước nhỏ!
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-xs p-5 rounded-2xl border border-brand-100/50">
                    <h4 className="text-base font-bold text-gray-900 flex items-center gap-1.5 mb-2">
                      <span className="text-brand-600">🎨</span> Thêm cá tính cho học liệu
                    </h4>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                      Đừng ngại ra các câu lệnh mang phong thái cảm xúc, thẩm mỹ: <span className="font-bold text-brand-800">&ldquo;Hãy làm cho giao diện trông giống của một trò chơi phiêu lưu&rdquo;</span> hoặc <span className="font-bold text-brand-800">&ldquo;Hãy dùng tông màu pastel dịu mắt giống như trò chơi Kahoot&rdquo;</span>. AI hiểu rất tốt các tính từ mô tả cảm xúc và màu sắc!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

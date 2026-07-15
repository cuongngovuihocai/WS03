import React, { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Flame, ShieldAlert, Sparkles, BookOpen, Layers, GitFork, Crown, Image, FileText, Play } from "lucide-react";
import { APP_DEMOS } from "../data";

export default function AppDemos() {
  const [activeTab, setActiveTab] = useState<"class" | "handout" | "remix" | "images" | "slides" | "video">("class");
  const [selectedZoomImage, setSelectedZoomImage] = useState<string | null>(null);

  const classApps = APP_DEMOS.filter((app) => app.isMain);
  const handoutApps = APP_DEMOS.filter((app) => !app.isMain && !app.isRemix);
  const remixApps = APP_DEMOS.filter((app) => app.isRemix);

  const practiceImages = [
    {
      src: "https://lh3.googleusercontent.com/d/1JlbxfZ0dKEfqHjO4Xi-WZCWfzDnLK66h",
      title: "Hình 1",
      desc: "Hình vẽ phác thảo cấu trúc và ý tưởng trò chơi tương tác cho học viên."
    },
    {
      src: "https://lh3.googleusercontent.com/d/13sD-jMcXfrDQLDgE8kXwTow4CNXHJpmX",
      title: "Hình 2",
      desc: "Bản vẽ phác thảo giao diện trò chơi và bảng số liệu trực quan sinh động."
    },
    {
      src: "https://lh3.googleusercontent.com/d/1n9h9sZE3oEhRIqwtBw10qaVw-qLaLPjh",
      title: "Hình 3",
      desc: "Ý tưởng phác thảo học liệu số tương tác, sinh động và trực quan."
    },
    {
      src: "https://lh3.googleusercontent.com/d/1g44lRJfPpfa3Rc_Wb_U7Ydfc7j6fPWoO",
      title: "Hình 4",
      desc: "Phác thảo giao diện bài giảng tương tác đa phương tiện hiện đại."
    },
    {
      src: "https://lh3.googleusercontent.com/d/1xUygGSPcaaM7m0GyB-bUgdaZf6Ecb5Ij",
      title: "Hình 5",
      desc: "Ý tưởng thiết kế trò chơi hóa bài tập giúp kích thích tư duy học sinh."
    },
    {
      src: "https://lh3.googleusercontent.com/d/1b5pFlSvjVznyG2kEH90Z9xgpPyKJAXHo",
      title: "Hình 6",
      desc: "Phác thảo bảng hỏi trắc nghiệm và đánh giá nhanh kết quả học tập."
    }
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-200" id="hoc-lieu">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-brand-600 font-bold text-sm uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
            Học Liệu Web Thực Tế
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 tracking-tight">
            Kho học liệu và ứng dụng mẫu
          </h2>
          <p className="text-base text-gray-750 mt-2 max-w-2xl mx-auto">
            Các học liệu được xây dựng hoàn toàn từ Vibe Coding
          </p>
        </div>

        {/* Tab selection */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-100 p-1.5 rounded-2xl inline-flex flex-wrap justify-center gap-1.5 border border-gray-150">
            <button
              onClick={() => setActiveTab("class")}
              className={`px-5 py-2.5 rounded-xl text-sm md:text-base font-bold transition-all flex items-center gap-2 ${
                activeTab === "class"
                  ? "bg-white text-brand-700 shadow-sm"
                  : "text-gray-650 hover:text-gray-800"
              }`}
            >
              <Sparkles className="w-4 h-4 text-brand-600" />
              Trải nghiệm chính tại lớp ({classApps.length} App)
            </button>
            <button
              onClick={() => setActiveTab("slides")}
              className={`px-5 py-2.5 rounded-xl text-sm md:text-base font-bold transition-all flex items-center gap-2 ${
                activeTab === "slides"
                  ? "bg-white text-rose-700 shadow-sm border border-rose-100"
                  : "text-gray-650 hover:text-gray-800"
              }`}
            >
              <BookOpen className="w-4 h-4 text-rose-600" />
              Bài trình chiếu
            </button>
            <button
              onClick={() => setActiveTab("handout")}
              className={`px-5 py-2.5 rounded-xl text-sm md:text-base font-bold transition-all flex items-center gap-2 ${
                activeTab === "handout"
                  ? "bg-white text-brand-700 shadow-sm"
                  : "text-gray-650 hover:text-gray-800"
              }`}
            >
              <Layers className="w-4 h-4 text-brand-600" />
              Thư viện tự trải nghiệm ({handoutApps.length} App)
            </button>
            <button
              onClick={() => setActiveTab("remix")}
              className={`px-5 py-2.5 rounded-xl text-sm md:text-base font-bold transition-all flex items-center gap-2 ${
                activeTab === "remix"
                  ? "bg-white text-indigo-700 shadow-sm border border-indigo-100"
                  : "text-gray-650 hover:text-gray-800"
              }`}
            >
              <GitFork className="w-4 h-4 text-indigo-600 animate-pulse" />
              Ứng dụng chờ Remix chặng 4 ({remixApps.length} App)
            </button>
            <button
              onClick={() => setActiveTab("images")}
              className={`px-5 py-2.5 rounded-xl text-sm md:text-base font-bold transition-all flex items-center gap-2 ${
                activeTab === "images"
                  ? "bg-white text-emerald-700 shadow-sm border border-emerald-100"
                  : "text-gray-650 hover:text-gray-800"
              }`}
            >
              <Image className="w-4 h-4 text-emerald-600" />
              Hình ảnh thực hành chặng 2
            </button>
            <button
              onClick={() => setActiveTab("video")}
              className={`px-5 py-2.5 rounded-xl text-sm md:text-base font-bold transition-all flex items-center gap-2 ${
                activeTab === "video"
                  ? "bg-white text-red-700 shadow-sm border border-red-100"
                  : "text-gray-650 hover:text-gray-800"
              }`}
            >
              <Play className="w-4 h-4 text-red-600" />
              Clip minh hoạ
            </button>
          </div>
        </div>

        {/* Apps Render */}
        {activeTab === "class" && (
          <div>
            {/* Warning / Instruction for Class tab */}
            <div className="bg-brand-50/60 border border-brand-100 rounded-2xl p-5 mb-8 flex items-start gap-3 max-w-3xl mx-auto text-base text-brand-950 font-bold">
              <span className="text-lg">📢</span>
              <div>
                <p className="font-extrabold text-base md:text-lg">Hướng dẫn trải nghiệm Chặng 1:</p>
                <p className="text-sm md:text-base text-brand-950 font-medium mt-1 leading-relaxed">
                  Trong Chặng 1, chúng ta sẽ tập trung trải nghiệm nhanh 3 ứng dụng này để thảo luận về phương thức lập trình. Thầy cô hãy nhấp chuột mở trực tiếp trên tab mới để chơi thử nhé!
                </p>
              </div>
            </div>

            {/* Featured class apps grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {classApps.map((app) => (
                <div
                  key={app.name}
                  className="bg-slate-50 border border-slate-100 rounded-3xl p-6 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div>
                    <span className="text-xs font-bold text-brand-700 uppercase tracking-wider bg-brand-100 px-2.5 py-1 rounded-md">
                      {app.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-4 group-hover:text-brand-700 transition">
                      {app.name}
                    </h3>
                    <p className="text-sm md:text-base text-gray-750 mt-2 leading-relaxed font-medium">
                      Học liệu chất lượng cao, giao diện trực quan sinh động, sẵn sàng sử dụng ngay.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-150">
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm md:text-base shadow-xs transition duration-200"
                    >
                      Mở ứng dụng trải nghiệm
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "slides" && (
          <div className="max-w-3xl mx-auto">
            {/* Info Box */}
            <div className="bg-rose-50/60 border border-rose-100 rounded-2xl p-5 mb-8 flex items-start gap-3.5 text-base text-rose-950 font-bold">
              <span className="text-xl shrink-0">📊</span>
              <div>
                <p className="font-extrabold text-base md:text-lg">Bài trình chiếu chính thức của Workshop:</p>
                <p className="text-sm md:text-base text-rose-950 mt-1 leading-relaxed font-medium">
                  Học viên có thể mở để xem lại hoặc theo dõi trong quá trình học
                </p>
              </div>
            </div>

            {/* Slide Card */}
            <div className="bg-gradient-to-br from-white to-rose-50/20 border border-rose-150 rounded-3xl p-8 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-full blur-3xl -mr-10 -mt-10 opacity-70 group-hover:bg-rose-100 transition-colors" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-4 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-rose-700 uppercase tracking-wider bg-rose-100 px-2.5 py-1 rounded-md">
                      Slide Bài Giảng
                    </span>
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-md flex items-center gap-1">
                      Canva Presentation
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-rose-800 transition">
                    Workshop 03: Xưởng Kiến tạo Học liệu
                  </h3>
                </div>

                <div className="shrink-0 flex flex-col gap-3 min-w-[200px]">
                  <a
                    href="https://ws03.my.canva.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-sm md:text-base shadow-xs hover:shadow-md transition duration-200"
                  >
                    Xem bài trình chiếu
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "handout" && (
          <div>
            {/* API limit notice for handout apps */}
            <div className="bg-amber-50/70 border border-amber-100 rounded-2xl p-5 mb-8 flex items-start gap-3 max-w-3xl mx-auto text-base text-amber-950 font-bold">
              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Lưu ý về các ứng dụng tích hợp Trí tuệ nhân tạo (AI):</p>
                <p className="text-sm md:text-base text-amber-950 font-medium mt-1 leading-relaxed">
                  Các ứng dụng được đánh dấu <span className="bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded font-bold text-xs">Có AI</span> hiện đang chạy trên hạn ngạch AI miễn phí của diễn giả. Để tránh nghẽn mạng và hết token, thầy cô vui lòng hạn chế truy cập và không spam yêu cầu liên tục!
                </p>
              </div>
            </div>

            {/* Handout grid - tight card size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {handoutApps.map((app) => (
                <div
                  key={app.name}
                  className="bg-white border border-gray-150 rounded-2xl p-5 hover:border-brand-300 hover:shadow-xs transition duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-xs font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded">
                        {app.category}
                      </span>
                      {app.hasApiLimit && (
                        <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-100 px-1.5 py-0.2 rounded-md">
                          Có AI *
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm md:text-base font-bold text-gray-800 mt-3">
                      {app.name}
                    </h4>
                    <p className="text-sm text-gray-750 mt-1 font-medium">
                      Học liệu tự chọn / Tài liệu phát tay bổ sung
                    </p>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-gray-100 flex justify-end">
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 hover:text-brand-800 hover:underline"
                    >
                      Mở trải nghiệm
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "remix" && (
          <div className="max-w-3xl mx-auto">
            {/* Info Box */}
            <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-5 mb-8 flex items-start gap-3 text-base text-indigo-950 font-bold">
              <span className="text-xl">💡</span>
              <div>
                <p className="font-extrabold text-base md:text-lg">Phương án dự phòng:</p>
                <p className="text-sm md:text-base text-indigo-950 mt-1 leading-relaxed font-medium">
                  Trong trường hợp quý thầy cô chưa hoàn thiện được ứng dụng riêng trong <strong>Chặng 4 (Đến lượt bạn!)</strong>, thầy cô hoàn toàn có thể sử dụng ứng dụng <strong>Học chơi cờ vua</strong> đã được chuẩn bị sẵn dưới đây để tiếp tục thực hành phần <strong>Xuất bản và Chia sẻ của Chặng 5</strong> một cách mượt mà nhất.
                </p>
              </div>
            </div>

            {/* Special Highlighted Remix Card */}
            {remixApps.map((app) => (
              <div
                key={app.name}
                className="bg-gradient-to-br from-slate-50 to-indigo-50/20 border border-indigo-100 rounded-3xl p-8 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden group"
              >
                {/* Decorative background circle */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl -mr-10 -mt-10 opacity-70 group-hover:bg-indigo-100 transition-colors" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-4 max-w-xl">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider bg-indigo-100 px-2.5 py-1 rounded-md">
                        {app.category}
                      </span>
                      <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-md flex items-center gap-1">
                        <Crown className="w-3 h-3" /> Trực quan & Tương tác
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-indigo-800 transition">
                      {app.name}
                    </h3>

                    <p className="text-sm md:text-base text-gray-750 leading-relaxed font-medium">
                      Ứng dụng web trực quan, tương tác cao giúp trẻ em làm quen và học chơi cờ vua một cách hứng thú và vui vẻ nhất. Một học liệu mẫu cho phương pháp dạy học thông qua trò chơi (Gamification).
                    </p>
                  </div>

                  <div className="shrink-0 flex flex-col gap-3 min-w-[200px]">
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm md:text-base shadow-xs hover:shadow-md transition duration-200"
                    >
                      <GitFork className="w-4 h-4" />
                      Remix trên AI Studio
                    </a>

                    <div className="text-center">
                      <span className="text-xs text-gray-700 font-bold">
                        Bấm nút để lưu bản sao & xuất bản
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "images" && (
          <div className="max-w-3xl mx-auto">
            {/* Info Box */}
            <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-5 mb-6 flex items-start gap-3 text-base text-emerald-950 font-bold">
              <span className="text-xl">🖼️</span>
              <div>
                <p className="font-extrabold text-base md:text-lg">Hình ảnh mẫu cho Chặng 2 thực hành:</p>
                <p className="text-sm md:text-base text-emerald-950 mt-1 leading-relaxed font-medium">
                  Thầy cô hãy nhấp chuột vào hình vẽ bên dưới để phóng to xem chi tiết, hoặc nhấp vào nút tải ảnh để tải về máy tính cá nhân. Sau đó, sử dụng các file hình này để tải lên ứng dụng <strong>Bring Anything to Life</strong> tại Chặng 2 nhé!
                </p>
              </div>
            </div>

            {/* PDF Document Card */}
            <div className="bg-red-50/50 border border-red-100 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 hover:shadow-xs transition duration-200">
              <div className="flex items-start gap-3.5">
                <div className="p-3 bg-red-100 text-red-600 rounded-xl shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">Tài liệu thực hành Chặng 2 (PDF)</h4>
                </div>
              </div>
              <a
                href="https://drive.google.com/file/d/1-nHOXnUtw36io2Pak8iiCHoBNUiQ6x0b/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-xs hover:shadow-sm transition shrink-0"
              >
                <ExternalLink className="w-4 h-4" />
                Tải file PDF
              </a>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {practiceImages.map((image, index) => (
                <div key={index} className="bg-slate-50 border border-slate-200 rounded-3xl p-5 flex flex-col justify-between hover:shadow-md transition duration-250">
                  <div className="space-y-3">
                    <div 
                      onClick={() => setSelectedZoomImage(image.src)}
                      className="overflow-hidden rounded-2xl border border-gray-150 aspect-[4/3] bg-white flex items-center justify-center cursor-zoom-in group"
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        referrerPolicy="no-referrer"
                        className="max-w-full max-h-full object-contain group-hover:scale-102 transition duration-200"
                      />
                    </div>
                    <h4 className="text-base font-bold text-gray-900 mt-2">{image.title}</h4>
                  </div>
                  <div className="mt-5 pt-3 border-t border-gray-150 flex gap-2">
                    <a
                      href={image.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xs transition"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Mở / Tải ảnh {index + 1}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "video" && (
          <div className="max-w-3xl mx-auto">
            {/* Info Box */}
            <div className="bg-red-50/50 border border-red-100 rounded-2xl p-5 mb-8 flex items-start gap-3 text-base text-red-950 font-bold">
              <span className="text-xl">🎥</span>
              <div>
                <p className="font-extrabold text-base md:text-lg">Clip minh hoạ:</p>
                <p className="text-sm md:text-base text-red-950 font-medium mt-1 leading-relaxed">
                  Thầy cô hãy xem các clip minh hoạ bên dưới để biết cách làm, trong trường hợp không theo kịp phần thực hành.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Video 1 Container */}
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 hover:shadow-md transition duration-250">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-red-600">▶</span> Khám phá Bring Anything to Life
                </h3>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-150 bg-black shadow-xs">
                  <iframe
                    src="https://drive.google.com/file/d/1W2KcA3lg4n-SGNyg7FyVkKsR4iJkI4Or/preview"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Khám phá Bring Anything to Life"
                  ></iframe>
                </div>
              </div>

              {/* Video 2 Container */}
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 hover:shadow-md transition duration-250">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-red-600">▶</span> Tạo ứng dụng mới trong Build App
                </h3>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-150 bg-black shadow-xs">
                  <iframe
                    src="https://drive.google.com/file/d/15M_C_7CPXGzcc8AQu7wXTSntCAXmlHfr/preview"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Tạo ứng dụng mới trong Build App"
                  ></iframe>
                </div>
              </div>

              {/* Video 3 Container */}
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 hover:shadow-md transition duration-250">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-red-600">▶</span> Xuất bản Web App lên GitHub Pages
                </h3>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-150 bg-black shadow-xs">
                  <iframe
                    src="https://drive.google.com/file/d/1tOXx3FcrUhsZjBukIA89ALwFLCH9-NdM/preview"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Xuất bản Web App lên GitHub Pages"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Image Zoom Modal */}
      {selectedZoomImage && (
        <div 
          className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedZoomImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.15 }}
            className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-white p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedZoomImage}
              alt="Học liệu phác thảo"
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[80vh] rounded-xl object-contain cursor-default"
            />
            <button
              onClick={() => setSelectedZoomImage(null)}
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

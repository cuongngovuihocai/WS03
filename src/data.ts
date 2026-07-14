import { Speaker, WorkshopStage, AppDemo, DesignPrinciple, PreparationItem } from "./types";

export const SPEAKER_DATA: Speaker[] = [
  {
    id: "speaker-1",
    name: "Thầy Ngô Văn Cường",
    role: "Chuyên gia Giáo dục & Phát triển Cộng đồng",
    avatarUrl: "https://lh3.googleusercontent.com/d/1k8xcdA7wMuVbYmLXf5VupH1W15UHDw3Y",
    bio: [
      "Giám đốc Đào tạo & Giáo dục tại Ham Chơi Education – Tổ chức giáo dục tiên phong trong đổi mới phương pháp giảng dạy và học tập sáng tạo."
    ],
    credentials: [
      "Giám đốc Đào tạo & Giáo dục – Ham Chơi Education",
      "Giáo viên Đại sứ – STEAM for Vietnam",
      "Cựu Trưởng phòng Đào tạo Chương trình \"An Toàn cho Em\" – Well-being JSC",
      "Cựu Cố vấn Dự án UP SHIFT – UNICEF Việt Nam",
      "Cựu Cán bộ Dự án – Save the Children"
    ]
  },
  {
    id: "speaker-2",
    name: "Cô Nguyễn Kim Ngân",
    role: "Giáo viên THCS Nguyễn Trãi - Cần Thơ",
    avatarUrl: "https://lh3.googleusercontent.com/d/1SusynPrT4wbcADd66x_XM-X7HOeEdr_5",
    bio: [
      "Giáo viên sáng tạo không ngừng nghỉ, luôn đi đầu trong việc ứng dụng công nghệ để làm mới lớp học.",
      "Chuyên gia Giáo dục Sáng tạo Microsoft (MIE Expert) và Nhà Giáo dục Google (Google Certified Educator)."
    ],
    credentials: [
      "Giáo viên trường THCS Nguyễn Trãi - Cần Thơ",
      "Chuyên gia giáo dục sáng tạo Microsoft (MIE Expert)",
      "Nhà Giáo dục Google (Google Certified Educator)",
      "Giáo viên Đại sứ - STEAM for Vietnam"
    ]
  }
];

export const WORKSHOP_INFO = {
  title: "XƯỞNG KIẾN TẠO HỌC LIỆU",
  subtitle: "Biến ý tưởng thành trải nghiệm học tập",
  workshopNumber: "WORKSHOP 03",
  duration: "2 giờ",
  location: "American Center HCMC",
  shortDesc: "Không phải là một khoá học lập trình khô khan, cũng không dừng lại ở việc giới thiệu công cụ. Đây là xưởng thực hành để mỗi giáo viên bước vào thế giới Vibe Coding - nơi lập trình bằng chính ý tưởng sư phạm, kiến tạo nên học liệu trực quan sử dụng ngay cho lớp học của mình.",
  philosophyTitle: "Triết lý Thiết kế Trải nghiệm",
  philosophyDesc: "Workshop được xây dựng dựa trên triết lý Học tập Sáng tạo (Creative Learning) của Giáo sư Mitchel Resnick (MIT Media Lab) – cha đẻ của ngôn ngữ lập trình Scratch.",
  communityFb: "https://www.facebook.com/groups/buiphan", // Placeholder of "Cộng đồng FB Bụi Phấn"
  nextSessionDate: "23/07/2026",
};

export const DESIGN_PRINCIPLES: DesignPrinciple[] = [
  {
    title: "Sàn thấp (Low Floors)",
    subtitle: "Ai cũng có thể bắt đầu",
    description: "Thầy cô không cần biết lập trình, không cần giỏi công nghệ hay rành rẽ Prompt Engineering. Chỉ cần mang theo một ý tưởng bài dạy và sự tò mò, thầy cô sẽ tạo được sản phẩm đầu tiên ngay trong workshop.",
    icon: "Sparkles"
  },
  {
    title: "Trần cao (High Ceilings)",
    subtitle: "Sáng tạo không giới hạn",
    description: "Sau khi nắm bắt quy trình cốt lõi, thầy cô có thể tự phát triển vô vàn dạng học liệu phức tạp hơn: trò chơi học tập, mô phỏng khoa học, chatbot tương tác, website bài dạy hay các dạng thẻ tương tác đa năng.",
    icon: "TrendingUp"
  },
  {
    title: "Tường rộng (Wide Walls)",
    subtitle: "Đa dạng con đường khám phá",
    description: "Không có một đáp án khuôn mẫu duy nhất. Mỗi sản phẩm thầy cô tạo ra sẽ phản ánh đúng nhu cầu thực tế, bối cảnh lớp học và phong cách giảng dạy độc bản của chính mình.",
    icon: "Layout"
  }
];

export const APP_DEMOS: AppDemo[] = [
  {
    name: "Lô tô",
    url: "https://cuongngovuihocai.github.io/LoTo/player.html",
    category: "Game tương tác",
    hasApiLimit: false,
    isMain: true
  },
  {
    name: "Gold miner (đào vàng)",
    url: "https://cuongngovuihocai.github.io/GoldMiner/",
    category: "Game tương tác",
    hasApiLimit: false,
    isMain: true
  },
  {
    name: "Magic Math Defender",
    url: "https://cuongngovuihocai.github.io/MagicMathDefender/",
    category: "Toán học tương tác",
    hasApiLimit: false,
    isMain: true
  },
  {
    name: "Giải mã ô chữ",
    url: "https://giaiochu.netlify.app/",
    category: "Game học tập",
    hasApiLimit: false,
    isMain: false
  },
  {
    name: "Vòng quay may mắn",
    url: "https://cuongngovuihocai.github.io/luckyWheels/",
    category: "Công cụ lớp học",
    hasApiLimit: false,
    isMain: false
  },
  {
    name: "Tây Balô Chatbot (Có AI)",
    url: "https://t-y-bal-chatbot-279871130462.asia-southeast1.run.app",
    category: "Ngoại ngữ - AI",
    hasApiLimit: true
  },
  {
    name: "Mùa Dâu (Chu kỳ kinh nguyệt - Có AI)",
    url: "https://m-a-d-u-279871130462.asia-southeast1.run.app/",
    category: "Sức khỏe - AI",
    hasApiLimit: true
  },
  {
    name: "Vẽ hình hình học 2D (Có AI)",
    url: "https://cuongngovuihocai.github.io/GeoTeacherAI/",
    category: "Toán hình - AI",
    hasApiLimit: true
  },
  {
    name: "Line 98",
    url: "https://cuongngovuihocai.github.io/Line98/",
    category: "Game tư duy",
    hasApiLimit: false
  },
  {
    name: "Hứng lộc đầu xuân",
    url: "https://cuongngovuihocai.github.io/hungloc/",
    category: "Game tương tác",
    hasApiLimit: false
  },
  {
    name: "Spiderman Multiply",
    url: "https://cuongngovuihocai.github.io/SpidermanMultiply/",
    category: "Toán học - Game",
    hasApiLimit: false
  },
  {
    name: "Premier League Quiz",
    url: "https://mrngovancuong-cyber.github.io/PL-Quiz/",
    category: "Trắc nghiệm bóng đá",
    hasApiLimit: false
  },
  {
    name: "Thổi nến Sinh nhật",
    url: "https://thoinen.netlify.app/",
    category: "Ứng dụng giải trí",
    hasApiLimit: false
  },
  {
    name: "TickerBox",
    url: "https://cuongngovuihocai.github.io/TickerBox/",
    category: "Ứng dụng đếm thời gian",
    hasApiLimit: false
  },
  {
    name: "Học Chơi Cờ Vua",
    url: "https://ai.studio/apps/e5af4696-30a6-44d0-a107-54f7b4e2e228",
    category: "Ứng dụng chờ Remix",
    hasApiLimit: false,
    isRemix: true
  }
];

export const PREPARATION_ITEMS: PreparationItem[] = [
  {
    id: "prep-google",
    title: "Tài khoản Google AI Studio",
    description: "Đăng nhập sẵn bằng tài khoản Gmail cá nhân để truy cập môi trường tạo ứng dụng.",
    guideUrl: "https://aistudio.google.com/",
    required: true
  },
  {
    id: "prep-github",
    title: "Tài khoản GitHub cá nhân",
    description: "Đăng ký một tài khoản GitHub miễn phí dùng để lưu trữ và xuất bản học liệu trực tuyến.",
    guideUrl: "https://github.com/join",
    required: true
  },
  {
    id: "prep-link",
    title: "Liên kết GitHub với Google AI Studio",
    description: "Đảm bảo hai tài khoản đã được liên kết để cho phép tính năng xuất bản website tự động chỉ bằng một cú nhấp chuột.",
    guideUrl: "https://cuongngovuihocai.github.io/GitHub/",
    required: true
  },
  {
    id: "prep-security",
    title: "Nắm rõ Quy định An ninh của Trung tâm Hoa Kỳ",
    description: "Tìm hiểu kỹ các quy định an ninh bắt buộc (mang CCCD/Hộ chiếu, đến sớm 20-30 phút, kiểm tra thiết bị...) để đảm bảo việc vào tòa nhà tham dự trực tiếp diễn ra suôn sẻ.",
    required: true
  }
];

export const WORKSHOP_STAGES: WorkshopStage[] = [
  {
    id: 1,
    title: "Wowww! Ai đã làm điều này?",
    duration: "15 phút",
    equipment: "Sự tò mò, óc quan sát",
    description: "Khởi động với việc trải nghiệm trực tiếp các học liệu hấp dẫn và tìm hiểu sức mạnh không ngờ đằng sau phương pháp làm mới.",
    activities: [
      "Nhấn vào liên kết để trực tiếp trải nghiệm 3 ứng dụng web tiêu biểu: Lô tô, Gold miner (đào vàng), và Magic Math Defender.",
      "'Đoán Prompt': Để lập trình ra ứng dụng học Toán sinh động như Magic Math Defender, chúng ta cần viết bao nhiêu câu lệnh?",
      "Tìm hiểu: Làm sao để khởi tạo các ứng dụng một cách nhanh chóng và nhẹ nhàng?"
    ],
    links: [
      { label: "🎰 Lô tô", url: "https://cuongngovuihocai.github.io/LoTo/player.html" },
      { label: "⛏️ Gold miner (đào vàng)", url: "https://cuongngovuihocai.github.io/GoldMiner/" },
      { label: "⚔️ Magic Math Defender", url: "https://cuongngovuihocai.github.io/MagicMathDefender/" }
    ]
  },
  {
    id: 2,
    title: "Họ đã làm điều đó như thế nào?",
    duration: "15 phút",
    equipment: "Trải nghiệm Vibe Coding - Lập trình bằng Ý tưởng",
    description: "Bước vào thế giới Vibe Coding: học bằng trải nghiệm trực tiếp và tạo ra thành phẩm đầu tiên trong thư thái.",
    activities: [
      "Truy cập ứng dụng đặc biệt 'Bring Anything to Life'.",
      "Tải lên một file ảnh phác thảo ý tưởng học liệu. Nếu không có sẵn file hình, thầy cô có thể dùng các file trong phần Học liệu mẫu để thực hành",
      "Nhấn khởi tạo và chiêm ngưỡng AI tự động biến nét vẽ thô sơ thành một học liệu web tương tác có thể hoạt động ngay.",
    ],
    links: [
      { label: "Mở ứng dụng Bring Anything to Life", url: "https://ai.studio/apps/ee941811-2ca3-4efd-9fd9-2fad6cb5be64" }
    ]
  },
  {
    id: 3,
    title: "Hiểu mình Biết người",
    duration: "10 phút",
    equipment: "Cách giao tiếp hiệu quả với AI",
    description: "Đúc rút phương pháp và nắm chắc cách vận hành để biến AI thành người cộng sự lý tưởng.",
    activities: [
      "'Hiểu mình': Xác định mong muốn cá nhân, hình dung rõ nét cấu trúc, giao diện học liệu mong đợi.",
      "'Biết người': Thấu hiểu thế mạnh, hạn chế, các tùy chỉnh kỹ thuật của AI đang đồng hành.",
      "Khám phá công cụ 'Build App' trong Google AI Studio: Remix các mẫu học liệu có sẵn trong thư viện, và làm chủ các nút chức năng chính trên giao diện Build App."
    ],
    links: [
      { label: "Mở Google AI Studio", url: "https://aistudio.google.com/" }
    ]
  },
  {
    id: 4,
    title: "Đến lượt bạn!",
    duration: "40 phút",
    equipment: "Phương pháp mới để kiến tạo học liệu",
    description: "Chặng thực hành chính với sự tập trung cao độ để hiện thực hoá ý tưởng dạy học của riêng mình.",
    activities: [
      "Mở Build App trong Google AI Studio và xây dựng học liệu phù hợp với nhu cầu của mình.",
      "Tự do thử nghiệm, chỉnh sửa, ra lệnh và nhận phản hồi tức thì từ AI để hoàn thiện giao diện, chức năng.",
      "Lưu ý: Nếu không có ý tưởng ban đầu nào, thầy cô hãy sử dụng app 'Học chơi cờ vua' (trong phần Học liệu) để thực hành Remix."
    ],
    links: [
      { label: "Mở Google AI Studio", url: "https://aistudio.google.com/" }
    ]
  },
  {
    id: 5,
    title: "Mang vào lớp học!",
    duration: "15 phút",
    equipment: "Một học liệu sẵn sàng dùng trong lớp học",
    description: "Đưa sản phẩm từ không gian thiết kế ra thế giới thực thông qua quy trình xuất bản web siêu tốc và hoàn toàn miễn phí.",
    activities: [
      "Liên kết tài khoản GitHub cá nhân với Google AI Studio.",
      "Đưa sản phẩm tự tạo (nếu chưa có thì dùng app Học chơi cờ vua ở phần Học liệu mẫu) lên kho chứa GitHub.",
      "Xuất bản lên GitHub Pages và lấy link ứng dụng.",
      "Chuyển link học liệu thành mã QR tiện dụng.",
      "Chia sẻ mã QR/ link lên Padlet để mọi người cùng trải nghiệm."
    ],
    links: [
      { label: "Mở GitHub", url: "https://github.com/" },
      { label: "Trang Padlet chung của khóa học", url: "https://padlet.com/ngannguyen40/xuong-kien-tao-hoc-lieu-bxpusmzs6dkcc5mf" },
      { label: "Xem Hướng dẫn xuất bản lên gitHub Pages", url: "https://cuongngovuihocai.github.io/GitHub/", secondary: true }
    ]
  },
  {
    id: 6,
    title: "Lời chưa nói?",
    duration: "5 phút",
    equipment: "Một cộng đồng để tiếp tục sáng tạo",
    description: "Tổng kết, giải đáp thắc mắc và gia nhập cộng đồng những nhà giáo dục đổi mới sáng tạo.",
    activities: [
      "Triển lãm sản phẩm: Toàn bộ học liệu của lớp học được đưa lên Padlet chung để cùng nhau thả tim, ghi nhận, bình luận.",
      "Tìm hiểu những lưu ý quan trọng khi tạo ứng dụng AI (bảo mật dữ liệu học sinh, quản lý API key cá nhân hiệu quả).",
      "Hoạt động Hỏi - Đáp trực tiếp: Cùng nhau trao đổi, giải đáp những vướng mắc phát sinh trong quá trình thực hành Vibe Coding.",
      "Kết nối với Cộng đồng FB 'Bụi Phấn AI' để tiếp tục chia sẻ, đồng hành và nhận thông báo tham gia các khóa học khác."
    ],
    links: [
      { label: "Trang Padlet chung của khóa học", url: "https://padlet.com/ngannguyen40/xuong-kien-tao-hoc-lieu-bxpusmzs6dkcc5mf" },
      { label: "Tham gia Cộng đồng Bụi phấn AI", url: "https://www.facebook.com/groups/buiphanais4v", secondary: true }
    ]
  }
];

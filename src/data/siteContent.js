export const navItems = [
  { href: '#khong-gian', label: 'Không gian' },
  { href: '#hien-trang', label: 'Hiện trạng' },
  { href: '#phuong-phap', label: 'Phương pháp' },
  { href: '#goi-tap', label: 'Gói tập' },
];

export const stats = [
  { value: '1:1', label: 'Huấn luyện cá nhân' },
  { value: '5-17', label: 'Độ tuổi phù hợp' },
  { value: '3 bước', label: 'Đánh giá - tập - theo dõi' },
];

export const galleryGroups = [
  {
    id: 'khong-gian',
    eyebrow: 'Không gian tập luyện',
    title: 'Phòng tập riêng tư, hiện đại và an toàn',
    description:
      'Không gian đen - vàng nhận diện Kaizen, thiết bị chuyên sâu và khu vận động phù hợp cho trẻ từ 5-17 tuổi.',
    images: [
      {
        src: 'images/gym-space-1.png',
        alt: 'Không gian phòng tập Kaizen với thiết bị và khu vận động',
      },
      {
        src: 'images/gym-space-2.png',
        alt: 'Khu máy tập và sàn vận động trong phòng tập Kaizen',
      },
      {
        src: 'images/gym-space-3.png',
        alt: 'Khu thiết bị sức mạnh và tường nhận diện Kaizen',
      },
    ],
  },
  {
    id: 'danh-gia',
    eyebrow: 'Huấn luyện & đánh giá',
    title: 'Bài tập cá nhân hóa, đo đạc và theo dõi chỉ số',
    description:
      'Các buổi tập 1:1 kết hợp đánh giá chuyên sâu để phụ huynh nắm rõ tiến trình phát triển của bé.',
    images: [
      {
        src: 'images/training-1.png',
        alt: 'Huấn luyện viên hướng dẫn bé tập luyện 1:1',
      },
      {
        src: 'images/assessment-1.png',
        alt: 'Đánh giá chuyên sâu và theo dõi chỉ số trên máy tính bảng',
      },
      {
        src: 'images/measurement-1.png',
        alt: 'Đo đạc chiều cao và đánh giá tư thế cho bé',
      },
    ],
  },
];

export const problems = [
  {
    title: 'Gù lưng',
    description:
      'Lưng cong, vai đổ về trước do ngồi học hoặc dùng điện thoại sai tư thế.',
  },
  {
    title: 'Cổ rùa',
    description:
      'Đầu đưa ra trước, cổ mỏi, dễ ảnh hưởng dáng đứng và sự tự tin.',
  },
  {
    title: 'Lệch vai',
    description: 'Một bên vai cao hơn, dáng đi không cân bằng.',
  },
  {
    title: 'Yếu cơ lõi',
    description: 'Khó giữ thẳng lưng, nhanh mệt khi vận động.',
  },
  {
    title: 'Ít vận động',
    description: 'Thể lực giảm, phản xạ chậm, dễ tăng cân hoặc thiếu cân.',
  },
  {
    title: 'Chậm cao',
    description:
      'Thiếu vận động phù hợp trong giai đoạn phát triển chiều cao.',
  },
];

export const methodChecklist = [
  'Test chiều cao, cân nặng, sức mạnh và độ linh hoạt.',
  'Đánh giá gù lưng, cổ rùa, lệch vai, dáng đi.',
  'Lộ trình cá nhân hóa theo độ tuổi và thể trạng.',
  'Cập nhật kết quả định kỳ cho phụ huynh.',
];

export const steps = [
  {
    title: 'Đánh giá',
    description: 'Kiểm tra thể chất và thói quen vận động.',
  },
  {
    title: 'Thiết kế giáo án',
    description: 'Chọn bài chỉnh dáng, kéo giãn, sức mạnh phù hợp.',
  },
  {
    title: 'Theo dõi tiến bộ',
    description: 'Ghi nhận thay đổi sau từng giai đoạn.',
  },
];

export const benefits = [
  {
    title: 'Chỉnh dáng',
    description:
      'Cải thiện tư thế đứng, ngồi, dáng đi và khả năng giữ thăng bằng.',
  },
  {
    title: 'Sửa gù',
    description:
      'Tăng sức mạnh cơ lưng, cơ lõi và xây dựng thói quen vận động đúng.',
  },
  {
    title: 'Tăng chiều cao',
    description:
      'Kết hợp kéo giãn, vận động toàn thân, ngủ nghỉ và kỷ luật tập luyện.',
  },
];

export const pricingPlans = [
  {
    title: 'Trải nghiệm',
    price: '50 buổi',
    features: ['Chuẩn đoán thể trạng', 'Tập thử cùng HLV', 'Giáo án nền tảng'],
  },
  {
    title: 'Bứt tốc',
    price: '100 buổi',
    badge: 'Phổ biến',
    featured: true,
    features: [
      'Lộ trình cá nhân hóa',
      'Theo dõi định kỳ',
      'Ưu tiên lịch học linh hoạt',
    ],
  },
  {
    title: 'Chuyên sâu',
    price: '200 buổi',
    features: [
      'Đồng hành dài hạn',
      'Đánh giá chuyên sâu',
      'Báo cáo tiến bộ cho phụ huynh',
    ],
  },
];

export const goalOptions = [
  'Chỉnh dáng',
  'Sửa gù',
  'Tăng chiều cao',
  'Đánh giá tổng thể',
];

import { stats } from '../data/siteContent.js';
import ButtonLink from './ButtonLink.jsx';

const heroImage = `${import.meta.env.BASE_URL}images/gym-space-1.png`;

export default function HeroSection() {
  return (
    <section className="hero section-dark" aria-label="Kaizen Private GymKid">
      <img className="hero-bg" src={heroImage} alt="" aria-hidden="true" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="eyebrow hero-eyebrow">Kaizen Private GymKid 1:1</p>
        <h1 className="hero-title">
          <span>Chỉnh dáng.</span>
          <span className="highlight">Sửa gù sớm.</span>
          <span>Tăng nền tảng chiều cao.</span>
        </h1>
        <p className="hero-text">
          Hệ thống PT chuyên sâu cho trẻ 5-17 tuổi, kết hợp chẩn đoán tư thế,
          giáo án cá nhân hóa và theo dõi tiến trình bằng dữ liệu để phụ huynh
          thấy rõ sự thay đổi của con.
        </p>
        <div className="hero-actions">
          <ButtonLink href="#dang-ky">Đăng ký đánh giá miễn phí</ButtonLink>
          <ButtonLink href="#phuong-phap" variant="outline">
            Xem quy trình chuyên sâu
          </ButtonLink>
        </div>
        <div className="stats">
          {stats.map((item) => (
            <div key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <aside className="hero-proof" aria-label="Tiêu chuẩn huấn luyện Kaizen">
        <span className="proof-kicker">International PT Standard</span>
        <strong>Đánh giá trước khi tập, theo dõi sau từng giai đoạn.</strong>
        <p>Tư thế, sức mạnh, độ linh hoạt và thói quen vận động đều được kiểm tra trước khi thiết kế giáo án.</p>
      </aside>
    </section>
  );
}

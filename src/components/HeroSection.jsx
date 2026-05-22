import { stats } from '../data/siteContent.js';
import ButtonLink from './ButtonLink.jsx';

const heroImage = `${import.meta.env.BASE_URL}images/gym-space-1.png`;

export default function HeroSection() {
  return (
    <section className="hero section-dark" aria-label="Kaizen Private GymKid">
      <img className="hero-bg" src={heroImage} alt="" aria-hidden="true" />
      <div className="hero-overlay" />
      <div className="hero-pattern" aria-hidden="true" />

      <div className="hero-content">
        <p className="eyebrow hero-eyebrow">Kaizen Private GymKid 1:1</p>
        <h1 className="hero-title">
          Gym hiện đại cho bé Việt khỏe dáng, cao lớn, tự tin.
        </h1>
        <p className="hero-text">
          Chương trình PT riêng cho trẻ 5-17 tuổi, kết hợp đánh giá tư thế,
          chỉnh dáng, tăng sức mạnh nền và theo dõi tiến trình rõ ràng cho phụ huynh.
        </p>
        <div className="hero-actions">
          <ButtonLink href="#dang-ky">Đăng ký đánh giá miễn phí</ButtonLink>
          <ButtonLink href="#phuong-phap" variant="outline">
            Xem lộ trình tập
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
        <span className="proof-kicker">Chuẩn PT quốc tế</span>
        <strong>Đánh giá trước khi tập, theo dõi sau từng giai đoạn.</strong>
        <p>
          Tư thế, sức mạnh, độ linh hoạt và thói quen vận động đều được kiểm tra
          trước khi thiết kế giáo án riêng cho từng bé.
        </p>
      </aside>
    </section>
  );
}

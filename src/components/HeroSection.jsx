import { stats } from '../data/siteContent.js';
import ButtonLink from './ButtonLink.jsx';

const heroImage = `${import.meta.env.BASE_URL}images/gym-space-1.png`;
const hideMissingImage = (event) => {
  event.currentTarget.hidden = true;
};

export default function HeroSection() {
  return (
    <section className="hero section-dark">
      <div className="hero-content">
        <p className="eyebrow hero-eyebrow">Chuyên sâu cho trẻ từ 5 - 17 tuổi</p>
        <h1 className="hero-title">
          <span>Chỉnh dáng đúng</span>
          <span className="highlight">Sửa gù sớm</span>
          <span>Hỗ trợ tăng chiều cao</span>
        </h1>
        <p className="hero-text">
          Kaizen Private GymKid xây dựng lộ trình 1:1 giúp trẻ cải thiện tư thế,
          tăng sức mạnh nền tảng và phát triển thể chất an toàn theo từng độ
          tuổi.
        </p>
        <div className="hero-actions">
          <ButtonLink href="#dang-ky">Đăng ký chuẩn đoán chuyên sâu</ButtonLink>
          <ButtonLink href="#phuong-phap" variant="outline">
            Xem phương pháp
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

      <div className="hero-card">
        <div className="photo-placeholder">
          <img
            className="hero-photo"
            src={heroImage}
            alt="Không gian phòng tập Kaizen Private Fitness"
            onError={hideMissingImage}
          />
          <div className="hero-card-brand">
            <span className="brand-mark">K</span>
            <div>
              <strong>KAIZEN</strong>
              <small>PRIVATE GYMKID</small>
            </div>
          </div>

          <div className="hero-media-label">
            <span>Lộ trình 1:1</span>
            <p>Cá nhân hóa cho từng bé</p>
          </div>
        </div>

        <div className="floating-card">
          <strong>Đánh giá chuyên sâu</strong>
          <span>Tư thế, chiều cao, sức mạnh và thói quen vận động</span>
        </div>
      </div>
    </section>
  );
}

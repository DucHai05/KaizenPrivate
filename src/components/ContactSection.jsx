import LeadForm from './LeadForm.jsx';

export default function ContactSection() {
  return (
    <section id="dang-ky" className="section form-section">
      <div className="form-copy">
        <p className="eyebrow red">CTA</p>
        <h2>Đăng ký đánh giá miễn phí cho bé</h2>
        <p>
          Để lại thông tin, Kaizen sẽ liên hệ tư vấn lộ trình phù hợp với tình
          trạng tư thế, chiều cao và mục tiêu phát triển của bé.
        </p>
        <div className="contact-box">
          <strong>Hotline:</strong> 0988 177 173
          <br />
          <strong>Cơ sở:</strong> Thanh Xuân và Nam Từ Liêm, Hà Nội
        </div>
      </div>
      <LeadForm />
    </section>
  );
}

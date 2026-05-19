import LeadForm from './LeadForm.jsx';

export default function ContactSection() {
  return (
    <section id="dang-ky" className="section form-section">
      <div className="form-copy">
        <p className="eyebrow red">Tư vấn miễn phí</p>
        <h2>Đăng ký chuẩn đoán chuyên sâu cho bé</h2>
        <p>Điền thông tin, Kaizen sẽ liên hệ tư vấn lộ trình phù hợp theo tình trạng của bé.</p>
        <div className="contact-box">
          <strong>Hotline:</strong> 0988 123 456
          <br />
          <strong>Địa chỉ:</strong> Kaizen Private GymKid
        </div>
      </div>
      <LeadForm />
    </section>
  );
}

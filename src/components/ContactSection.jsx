import LeadForm from './LeadForm.jsx';

export default function ContactSection() {
  return (
    <section id="dang-ky" className="section form-section">
      <div className="form-copy">
        <p className="eyebrow red">Đăng ký tư vấn</p>
        <h2>Để Kaizen đánh giá miễn phí cho bé.</h2>
        <p>
          Ba mẹ để lại thông tin, Kaizen sẽ liên hệ tư vấn lộ trình phù hợp với
          tình trạng tư thế, chiều cao và mục tiêu phát triển của bé.
        </p>
        {/* <div className="contact-list">
          <div className="contact-box">
            <strong>Hotline</strong>
            <span>0988 177 173</span>
          </div>
          <div className="contact-box">
            <strong>Cơ sở 1</strong>
            <span>Số 2, ngõ 90 Ngụy Như Kon Tum, Thanh Xuân, Hà Nội</span>
          </div>
          <div className="contact-box">
            <strong>Cơ sở 2</strong>
            <span>B2-28 biệt thự liền kề Vinhomes Gardenia Hàm Nghi, Nam Từ Liêm, Hà Nội</span>
          </div>
        </div> */}
      </div>
      <LeadForm />
    </section>
  );
}

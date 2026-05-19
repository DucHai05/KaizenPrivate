import { methodChecklist, steps } from '../data/siteContent.js';
import ButtonLink from './ButtonLink.jsx';

export default function MethodSection() {
  return (
    <section id="phuong-phap" className="section method section-dark">
      <div className="method-left">
        <p className="eyebrow">Phương pháp Kaizen</p>
        <h2>Chuẩn đoán chuyên sâu trước khi xây dựng lộ trình</h2>
        <p>
          Không áp dụng một giáo án cho tất cả. Mỗi bé được kiểm tra thể chất,
          tư thế và mục tiêu riêng để thiết kế bài tập phù hợp.
        </p>
        <ul className="check-list">
          {methodChecklist.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <ButtonLink href="#dang-ky">Nhận tư vấn miễn phí</ButtonLink>
      </div>
      <div className="steps">
        {steps.map((step, index) => (
          <div key={step.title}>
            <b>{String(index + 1).padStart(2, '0')}</b>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

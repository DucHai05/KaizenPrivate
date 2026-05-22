import { methodChecklist, steps } from '../data/siteContent.js';
import ButtonLink from './ButtonLink.jsx';

export default function MethodSection() {
  return (
    <section id="phuong-phap" className="section method section-dark">
      <div className="method-left">
        <p className="eyebrow">Phương pháp Kaizen</p>
        <h2>Chẩn đoán kỹ trước khi tập, rồi mới xây giáo án riêng.</h2>
        <p>
          Kaizen không dùng một giáo án cho tất cả. Mỗi bé được kiểm tra tư thế,
          sức mạnh, độ linh hoạt và thói quen vận động để HLV xây lộ trình vừa an toàn,
          vừa đủ thử thách.
        </p>
        <ul className="check-list">
          {methodChecklist.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <ButtonLink href="#dang-ky">Nhận tư vấn lộ trình</ButtonLink>
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

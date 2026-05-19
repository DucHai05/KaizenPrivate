import { benefits } from '../data/siteContent.js';
import SectionTitle from './SectionTitle.jsx';

export default function BenefitsSection() {
  return (
    <section className="section benefits">
      <SectionTitle eyebrow="Kết quả hướng tới" title="Bé khỏe dáng, tự tin hơn mỗi ngày" variant="red" />
      <div className="grid cards-3">
        {benefits.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

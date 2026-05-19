import { problems } from '../data/siteContent.js';
import SectionTitle from './SectionTitle.jsx';

export default function ProblemSection() {
  return (
    <section id="hien-trang" className="section problems">
      <SectionTitle eyebrow="Ba mẹ cần chú ý" title="Đừng bỏ qua các dấu hiệu sai tư thế ở trẻ" variant="red" />
      <div className="grid cards-6">
        {problems.map((item, index) => (
          <article key={item.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

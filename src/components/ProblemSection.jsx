import { problems } from '../data/siteContent.js';
import SectionTitle from './SectionTitle.jsx';

export default function ProblemSection() {
  return (
    <section id="hien-trang" className="section problems">
      <SectionTitle
        eyebrow="Pain Point"
        title="Con bạn đang gù, thấp hoặc lệch vai?"
        subtitle="Những dấu hiệu này thường không tự biến mất nếu trẻ tiếp tục ngồi sai, vận động ít và không được chỉnh kỹ thuật đúng lúc."
        variant="red"
      />
      <div className="grid cards-4">
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

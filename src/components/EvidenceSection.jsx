import { evidenceCards, testimonials } from '../data/siteContent.js';
import SectionTitle from './SectionTitle.jsx';

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

export default function EvidenceSection() {
  return (
    <section id="minh-chung" className="section evidence">
      <SectionTitle
        eyebrow="Evidence"
        title="Minh chứng bằng hình ảnh, PT và phản hồi phụ huynh"
        subtitle="Một brand premium không chỉ nói hay. Kaizen cho phụ huynh thấy quy trình, con người và tiến trình tập luyện một cách rõ ràng."
        variant="red"
      />

      <div className="evidence-grid">
        {evidenceCards.map((item) => (
          <article className="evidence-card" key={item.title}>
            <div className="evidence-media">
              <img src={assetUrl(item.image)} alt={item.title} loading="lazy" />
              <span>{item.label}</span>
            </div>
            <div className="evidence-copy">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="testimonial-grid" aria-label="Phản hồi phụ huynh">
        {testimonials.map((item) => (
          <blockquote className="testimonial-card" key={item.parent}>
            <p>{item.quote}</p>
            <cite>{item.parent}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

import { pricingPlans } from '../data/siteContent.js';
import ButtonLink from './ButtonLink.jsx';
import SectionTitle from './SectionTitle.jsx';

export default function PricingSection() {
  return (
    <section id="goi-tap" className="section pricing section-dark">
      <SectionTitle
        eyebrow="Lịch học và gói tập"
        title="Chọn lộ trình phù hợp với mục tiêu của bé."
      />
      <div className="grid cards-3 price-grid">
        {pricingPlans.map((plan) => (
          <article className={`price-card ${plan.featured ? 'popular' : ''}`} key={plan.title}>
            {plan.badge && <span className="badge">{plan.badge}</span>}
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <ButtonLink href="#dang-ky" variant={plan.featured ? 'primary' : 'outline'}>Đăng ký</ButtonLink>
          </article>
        ))}
      </div>
    </section>
  );
}

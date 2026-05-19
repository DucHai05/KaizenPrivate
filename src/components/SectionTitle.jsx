export default function SectionTitle({ eyebrow, title, subtitle, variant = 'default' }) {
  return (
    <div className="section-title">
      <p className={`eyebrow ${variant === 'red' ? 'red' : ''}`}>{eyebrow}</p>
      <h2>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export default function SectionTitle({ eyebrow, title, variant = 'default' }) {
  return (
    <div className="section-title">
      <p className={`eyebrow ${variant === 'red' ? 'red' : ''}`}>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default function ButtonLink({ children, href, variant = 'primary' }) {
  return (
    <a href={href} className={`btn btn-${variant}`}>
      {children}
    </a>
  );
}
